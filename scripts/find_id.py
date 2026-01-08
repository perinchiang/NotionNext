import os
from notion_client import Client

# 只需要 Token，不需要填 DB ID
NOTION_TOKEN = os.environ.get("NOTION_TOKEN")

if not NOTION_TOKEN:
    print("❌ 错误：请先设置 NOTION_TOKEN 环境变量")
    exit()

notion = Client(auth=NOTION_TOKEN)

def find_databases():
    print("🔍 正在搜索 Token 能访问的所有数据库...\n")
    
    # 搜索所有 object 类型为 database 的东西
    response = notion.search(filter={"value": "database", "property": "object"})
    
    results = response.get("results", [])
    
    if not results:
        print("⚠️ 没找到任何数据库！")
        print("请检查：你的 Integration (机器人) 是否已经被邀请到了 Notion 页面里？")
        print("操作方法：在 Notion 页面右上角点 ... -> Connections -> Add connections -> 选你的机器人")
    else:
        print(f"✅ 找到了 {len(results)} 个数据库：\n")
        for db in results:
            db_id = db['id']
            
            # 获取数据库标题
            title_text = "未命名数据库"
            if "title" in db and db["title"]:
                title_text = db["title"][0]["text"]["content"]
            
            print(f"📄 数据库名: 【{title_text}】")
            print(f"🔑 ID (填这个): {db_id}")
            print("-" * 30)

if __name__ == "__main__":
    find_databases()
