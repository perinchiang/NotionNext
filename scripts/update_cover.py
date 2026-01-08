import os
from notion_client import Client

# 从环境变量获取密钥
NOTION_TOKEN = os.environ.get("NOTION_TOKEN")
DATABASE_ID = os.environ.get("NOTION_DATABASE_ID")

notion = Client(auth=NOTION_TOKEN)

def get_first_image_from_blocks(block_id):
    """
    遍历 Block 寻找第一张图片
    """
    try:
        # 获取子块列表
        response = notion.blocks.children.list(block_id=block_id)
        blocks = response.get("results", [])
        
        for block in blocks:
            # 如果类型是图片
            if block["type"] == "image":
                image_data = block["image"]
                # 优先处理 external 类型，其次处理 file 类型（注意 file 有效期）
                if "external" in image_data:
                    return image_data["external"]["url"]
                elif "file" in image_data:
                    return image_data["file"]["url"]
            
            # 如果该块还有子块（比如分栏、列表），可选：递归查找（这里为了简单暂不递归）
            
        return None
    except Exception as e:
        print(f"Error reading blocks: {e}")
        return None

def main():
    print("开始检查数据库封面...")
    
    # 查询数据库，这里可以根据需要添加 filter 过滤状态为 Published 的文章
    # 为了节省资源，这里仅查询没有封面的页面
    query_filter = {
        "property": "cover", # 注意：API 中很难直接筛选 cover 为空，这里先查所有或按状态查
        # 建议根据您的数据库属性筛选，例如仅筛选 'status' 为 'Published' 的
        # "property": "status", "select": {"equals": "Published"} 
    }
    
    # 这里默认查询最近的 100 篇文章
    pages = notion.databases.query(database_id=DATABASE_ID).get("results")

    count = 0
    for page in pages:
        page_id = page["id"]
        page_title = "无标题"
        
        # 尝试获取标题用于日志显示 (根据您的数据库标题字段名修改，通常是 Name 或 Title)
        try:
            props = page.get("properties", {})
            for key, val in props.items():
                if val["type"] == "title" and val["title"]:
                    page_title = val["title"][0]["text"]["content"]
                    break
        except:
            pass

        # 1. 检查是否已经有封面
        if page["cover"] is not None:
            print(f"跳过 [已存在封面]: {page_title}")
            continue

        print(f"正在处理: {page_title} ...")

        # 2. 获取正文第一张图
        image_url = get_first_image_from_blocks(page_id)

        if image_url:
            print(f"  -> 找到图片: {image_url[:50]}...")
            
            # 3. 更新封面
            try:
                notion.pages.update(
                    page_id=page_id,
                    cover={
                        "type": "external",
                        "external": {
                            "url": image_url
                        }
                    }
                )
                print(f"  -> 封面更新成功！")
                count += 1
            except Exception as e:
                print(f"  -> 更新失败: {e}")
        else:
            print(f"  -> 正文中未找到图片。")

    print(f"任务完成，共更新了 {count} 篇文章的封面。")

if __name__ == "__main__":
    if not NOTION_TOKEN or not DATABASE_ID:
        print("请设置 NOTION_TOKEN 和 NOTION_DATABASE_ID 环境变量")
    else:
        main()
