import os
from notion_client import Client

# 只需要 Token
NOTION_TOKEN = os.environ.get("NOTION_TOKEN")

if not NOTION_TOKEN:
    print("❌ 错误：请先设置 NOTION_TOKEN 环境变量")
    exit()

notion = Client(auth=NOTION_TOKEN)

def find_databases():
    print("🔍 正在搜索 Token 能访问的所有内容...\n")
    
    try:
        # 【修改点】去掉 filter 参数，直接搜索所有内容，避免 API 报错
        response = notion.search()
        
        results = response.get("results", [])
        
        # 本地筛选：只保留 object 类型为 'database' 的结果
        databases = [item for item in results if item["object"] == "database"]
        
        if not databases:
            print("⚠️ 搜到了内容，但没有一个是数据库！")
            print("请检查：你的 Integration (机器人) 是否已经被邀请到了那个 POST 页面里？")
            print("提示：你需要进入那个包含表格的页面，点击右上角 ... -> Connections -> Add connections -> 选你的机器人")
        else:
            print(f"✅ 成功找到了 {len(databases)} 个数据库：\n")
            print("=" * 40)
            for db in databases:
                db_id = db['id'].replace("-", "") # 打印不带横线的 ID，方便直接复制
                
                # 获取数据库标题
                title_text = "未命名数据库"
                if "title" in db and db["title"]:
                    title_text = db["title"][0]["text"]["content"]
                
                print(f"📄 数据库名: 【{title_text}】")
                print(f"🔑 ID (填这个): {db_id}")
                print(f"🔗 链接: {db.get('url', '无链接')}")
                print("=" * 40)
                
    except Exception as e:
        print(f"❌ 发生未知错误: {e}")

if __name__ == "__main__":
    find_databases()
