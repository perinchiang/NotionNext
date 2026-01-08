import os
from notion_client import Client

# --- 配置区 ---
NOTION_TOKEN = os.environ.get("NOTION_TOKEN")
POST_DB_ID = os.environ.get("POST_DB_ID")

# 是否覆盖已有封面？ 
# True = 即使有封面也强制用第一张图替换
# False = 只有没封面的文章才处理 (推荐)
FORCE_UPDATE = False 

notion = Client(auth=NOTION_TOKEN)

def get_first_image_from_page(page_id):
    """
    获取页面正文中的第一张图片的 URL
    """
    # 获取页面内容块 (默认只读前100个块，通常第一张图都在开头)
    response = notion.blocks.children.list(block_id=page_id, page_size=100)
    
    for block in response['results']:
        if block['type'] == 'image':
            img_obj = block['image']
            # 优先处理 file (上传的) 和 external (外链)
            if img_obj['type'] == 'external':
                return img_obj['external']['url']
            elif img_obj['type'] == 'file':
                return img_obj['file']['url']
    
    return None

def set_cover():
    print("正在检查文章封面...")
    has_more = True
    start_cursor = None

    updated_count = 0

    while has_more:
        # 查询数据库
        response = notion.databases.query(
            database_id=POST_DB_ID,
            start_cursor=start_cursor
        )

        for page in response['results']:
            page_id = page['id']
            
            # 1. 检查是否已有封面
            current_cover = page.get('cover')
            
            # 如果不强制更新，且已有封面，则跳过
            if not FORCE_UPDATE and current_cover:
                continue

            # 获取标题仅用于日志显示
            try:
                page_title = page["properties"]["title"]["title"][0]["text"]["content"]
            except:
                page_title = "未命名文章"

            # 2. 去正文找图
            print(f"正在扫描: {page_title} ...")
            image_url = get_first_image_from_page(page_id)

            if image_url:
                print(f" -> 找到图片，正在设为封面...")
                
                # 3. 更新封面
                # 注意：Notion API 设置封面时，即便是内部图片也需要用 external 格式传入 URL
                notion.pages.update(
                    page_id=page_id,
                    cover={
                        "type": "external",
                        "external": {"url": image_url}
                    }
                )
                updated_count += 1
                print(" -> 成功！")
            else:
                random_url = "https://source.unsplash.com/random/1200x600?nature,water"
                notion.pages.update(
                page_id=page_id,
                cover={"type": "external", "external": {"url": random_url}}
    )
        has_more = response['has_more']
        start_cursor = response['next_cursor']

    print(f"脚本运行结束，共更新了 {updated_count} 篇文章的封面。")

if __name__ == "__main__":
    set_cover()
