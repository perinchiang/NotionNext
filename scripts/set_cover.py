import os
from notion_client import Client

# --- 配置区 ---
NOTION_TOKEN = os.environ.get("NOTION_TOKEN")
POST_DB_ID = os.environ.get("POST_DB_ID")
print("POST_DB_ID =", POST_DB_ID)

# 只有没封面的文章才处理
FORCE_UPDATE = False 

notion = Client(auth=NOTION_TOKEN)

def get_first_image_from_page(page_id):
    """
    获取页面正文中的第一张图片的 URL
    (使用底层 request 接口，避开 version 兼容性问题)
    """
    try:
        # 相当于 notion.blocks.children.list
        response = notion.request(
            path=f"blocks/{page_id}/children",
            method="GET",
            query={"page_size": 100}
        )
        
        for block in response['results']:
            if block['type'] == 'image':
                img_obj = block['image']
                if img_obj['type'] == 'external':
                    return img_obj['external']['url']
                elif img_obj['type'] == 'file':
                    return img_obj['file']['url']
    except Exception as e:
        print(f"获取图片失败: {e}")
    
    return None

def set_cover():
    print("正在检查文章封面...")
    has_more = True
    start_cursor = None
    updated_count = 0

    while has_more:
        # --- 关键修改：直接调用 API 接口 ---
        # 相当于 notion.databases.query(...)
        body_params = {}
        if start_cursor:
            body_params["start_cursor"] = start_cursor

        try:
            response = notion.request(
                path=f"databases/{POST_DB_ID}/query",
                method="POST",
                body=body_params
            )
        except Exception as e:
            print(f"❌ 数据库查询失败，请检查 POST_DB_ID 是否正确。错误信息: {e}")
            return

        for page in response['results']:
            page_id = page['id']
            current_cover = page.get('cover')
            
            # 1. 检查是否跳过
            if not FORCE_UPDATE and current_cover:
                continue

            # 获取标题仅用于日志 (安全获取)
            page_title = "未命名文章"
            try:
                if "title" in page["properties"]:
                    title_obj = page["properties"]["title"]["title"]
                    if title_obj:
                        page_title = title_obj[0]["text"]["content"]
            except:
                pass

            # 2. 找图
            print(f"扫描文章: {page_title} ...")
            image_url = get_first_image_from_page(page_id)

            if image_url:
                print(f" -> 找到图片，更新封面中...")
                try:
                    # --- 关键修改：更新封面也用底层接口 ---
                    notion.request(
                        path=f"pages/{page_id}",
                        method="PATCH",
                        body={
                            "cover": {
                                "type": "external",
                                "external": {"url": image_url}
                            }
                        }
                    )
                    updated_count += 1
                    print(" -> ✅ 更新成功")
                except Exception as e:
                    print(f" -> ❌ 更新失败: {e}")
            else:
                print(" -> ⚠️ 正文无图片")

        has_more = response.get('has_more', False)
        start_cursor = response.get('next_cursor', None)

    print(f"✨ 脚本运行结束，共更新了 {updated_count} 篇文章。")

if __name__ == "__main__":
    if not NOTION_TOKEN or not POST_DB_ID:
        print("❌ 错误: 环境变量 NOTION_TOKEN 或 POST_DB_ID 未设置！请检查 GitHub Secrets。")
    else:
        set_cover()
