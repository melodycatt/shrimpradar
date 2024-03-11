import pytumblr2
import json

# Make the request
def search_characters(input_string, search_string):
    output_string = ""
    search_index = 0
    inpI = 0
    breakinterro = False
    last = False
    complete = "false"
    for char in input_string:
        if breakinterro:
            break
        if char == search_string[search_index]:
            print(search_string[search_index])
            if search_string[search_index] == "p" and not last:
                complete = "true"
            output_string += char
            search_index += 1
            if search_index >= len(search_string):
                search_index = 0
            if search_index >= len(search_string) and last:
                breakinterro = True
                break
            while input_string[(inpI + 1):].find(search_string[search_index]) == -1:
                if search_string[search_index] == "s":
                    breakinterro = True
                    break
                last = True
                print(input_string[(inpI + 1):])
                search_index += 1
                if search_index >= len(search_string):
                    breakinterro = True
                    break
        else:
            output_string += " "
        inpI += 1
    return [output_string + "\n\nbeep boop! im a bot!", complete]

# Example usage
consumer_key = "1GuhcTootYs6mvZoDaH2zmniVL626a33O2Zge5SxhqeB6BCrQX"
consumer_secret = "ZGvnHtf8I4HwMZRBl8bmz95WENdGKCvoL1u6Jefm5d5nvbus0n"
client = pytumblr2.TumblrRestClient(
  '1GuhcTootYs6mvZoDaH2zmniVL626a33O2Zge5SxhqeB6BCrQX',
  'ZGvnHtf8I4HwMZRBl8bmz95WENdGKCvoL1u6Jefm5d5nvbus0n',
  'uK8wJI978IPewUw6uRmi2bBQlC3k7oT6SExDyVrf0TNwlITgx0',
  'lQWB3OR2GkYYkAogngyoROYoFLVMAD0AXPFGy7SOEUKgyWtG1S'
)

f1 = open("./penis.json", "r")
old = json.loads(f1.read())
post = client.dashboard(limit=1, reblog_info="true")
print(post["posts"][0]["parent_post_url"])
offset = old['offset']
print(search_characters(post["posts"][0]["summary"], "shrimp")[1], search_characters("penis shrimp", "shrimp")[1])
while "parent_post_url" in post["posts"][0] or search_characters(post["posts"][0]["summary"], "shrimp")[1] == "false": 
    if search_characters(post["posts"][0]["summary"], "shrimp")[1] == "false":
        print("HELPS DDMDJSM")
        print(post["posts"][0]["summary"], offset, search_characters(post["posts"][0]["summary"], "shrimp")[1])
        post = client.dashboard(limit=1, reblog_info="true", offset=offset)
        offset += 1
        continue
    print(post["posts"][0]["parent_post_url"], offset, search_characters(post["posts"][0]["summary"], "shrimp")[1])
    post = client.dashboard(limit=1, reblog_info="true", offset=offset)
    offset += 1
print(post["posts"][0]["summary"], offset, search_characters(post["posts"][0]["summary"], "shrimp")[1])
post["offset"] = offset
# Make the request
f = open("./penis.json", "w")
f.write(json.dumps(
    post, 
    sort_keys=True,
    indent=4,
    separators=(',', ': ')
))
search_string = "shrimp"
input_string = post["posts"][0]["summary"]
output_string = search_characters(input_string, search_string)
print(json.dumps(post["posts"]))
blog_name = post["posts"][0]["blog_name"]
client.posts(
    "melodycatt",
    parent_tumblelog_uuid=post["posts"][0]["blog"]["uuid"],
    parent_post_id=post["posts"][0]["id"], 
    reblog_key=post["posts"][0]["reblog_key"], 
    content=[{"text": output_string, "type": "text"}],
    tags=f"{blog_name}, \"shrimp radar\", \"shrimp\""
    # [post["posts"][0]["blog_name"], "shrimp radar", "shrimp"]
)

client.reblog_post(blogname="shrimpradar", parent_blogname=post["posts"][0]["blog"]["name"], parent_blog_uuid=post["posts"][0]["blog"]["uuid"], id=post["posts"][0]["id"], reblog_key=post["posts"][0]["reblog_key"],)

print(json.dumps(
    {
        "blog_name": "shrimpradar",
        "parent_tumblelog_uuid": post["posts"][0]["blog"]["uuid"],
        "parent_post_id": post["posts"][0]["id"], 
        "reblog_key": post["posts"][0]["reblog_key"], 
        "content": [{"text": output_string[0], "type": "text"}],
        "tags": f"{blog_name}, shrimp radar, shrimp"
    }, 
    sort_keys=True,
    indent=4,
    separators=(',', ': ')
))
print(output_string[0])