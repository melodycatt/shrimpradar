/* import pytumblr2
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
    return [output_string + "\nbeep boop! im a bot!", complete]

# Example usage
consumer_key = "1GuhcTootYs6mvZoDaH2zmniVL626a33O2Zge5SxhqeB6BCrQX"
consumer_secret = "ZGvnHtf8I4HwMZRBl8bmz95WENdGKCvoL1u6Jefm5d5nvbus0n"
client = pytumblr2.TumblrRestClient(
  consumer_key='1GuhcTootYs6mvZoDaH2zmniVL626a33O2Zge5SxhqeB6BCrQX',
  consumer_secret='ZGvnHtf8I4HwMZRBl8bmz95WENdGKCvoL1u6Jefm5d5nvbus0n',
  oauth_token='eOtcMyazymYM97kXe0baQOGoHVbwwZTfAGvBqBfCRX4GiQm5nw',
  oauth_secret='UpiVVhlna5d8J5djLtVUxOYOJZrtBEtFybZoZW6UYXSqB0SMPf'
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

ihatethis = client.reblog_post(
    blogname="melodycatt", 
    parent_blogname=post["posts"][0]["blog"]["name"], 
    parent_blog_uuid=post["posts"][0]["blog"]["uuid"], 
    id=post["posts"][0]["id"], reblog_key=post["posts"][0]["reblog_key"],
    content=[{"text": output_string, "type": "text"}],
    tags=f"{blog_name}, \"shrimp radar\", \"shrimp\""
)

print(json.dumps(
    ihatethis,
    sort_keys=True,
    indent=4,
    separators=(',', ': ')
))
print(output_string[0]) */

function search_characters(input_string, search_string) {
    let output_string = ''
    let search_index = 0
    let inpI = 0
    let breaknow = false
    let last = false
    let complete = false
    let done = false
    console.log(input_string)
    console.log(search_string.length)

    for (let char of input_string) {
        if (breaknow) break
        if (char.toLowerCase() == search_string[search_index] && !done) {
            if (search_index == search_string.length - 1 && !last) complete = true
            console.log(search_index)
            output_string += char
            search_index++
            if (search_index >= search_string.length && last) {
                done = true
            }
            if (search_index >= search_string.length) search_index = 0
            while (input_string.indexOf(search_string[search_index], inpI + 1) == -1) {
                if(last) {
                    done = true
                    break
                }
                console.log("SAJSDJLJK", search_index)
                if (search_index == 0) {
                    done = true
                    break
                }
                last = true
                search_index += 1
                if (search_index >= search_string.length) {
                    console.log("FUIDS")
                    done = true
                    break
                }
            }
        }
        else {
            output_string += "\u200A"
        }
        inpI++
    }
    return [output_string + "\nbeep boop! im a bot!", complete]
}

const tumblr = require('tumblr.js');
const client = tumblr.createClient({
    consumer_key: '1GuhcTootYs6mvZoDaH2zmniVL626a33O2Zge5SxhqeB6BCrQX',
    consumer_secret: 'ZGvnHtf8I4HwMZRBl8bmz95WENdGKCvoL1u6Jefm5d5nvbus0n',
    token: 'eOtcMyazymYM97kXe0baQOGoHVbwwZTfAGvBqBfCRX4GiQm5nw',
    token_secret: 'UpiVVhlna5d8J5djLtVUxOYOJZrtBEtFybZoZW6UYXSqB0SMPf'
});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require('fs');

let offset = JSON.parse(fs.readFileSync('./penis.json')).offset
const since = JSON.parse(fs.readFileSync('./penis.json')).id

reblog()

async function reblog() {
    var random_post = await client.userDashboard({limit: 1, offset: offset, npf: true})
    offset ++
    random_post = random_post.posts[0]
    if(random_post.type == 'text') {
        console.log("\n\n\n\n\n\nHII\n\n\n\n\n\n\n")
        random_post = {summary: 'a', content:[{type: 'text', text: "a"}]}
    }
    while (!search_characters(concatPost(random_post), "shrimp")[1] || random_post.blog_name == "the-haiku-bot") {
        console.log(random_post.parent_post_url)
        random_post = await client.userDashboard({limit: 1, offset: offset, npf: true})
        random_post = random_post.posts[0]
        console.log(search_characters(concatPost(random_post), "shrimp")[1])
        offset ++
        console.log(offset)
    }
    let output_string = search_characters(concatPost(random_post), "shrimp")[0]
    console.log("\n\n\n\n", concatFormat(random_post).concat([
        {
            start: output_string.length - 22,
            end: output_string.length - 1,
            type: "small"
        }
    ]), "\n\n\n\n", output_string, "\n\n\n", concatPost(random_post))
    readline.question('Continue? y/n > ', (answer) => {
        if(answer[0] == 'y') {
            console.log([random_post.blog.name,"shrimp radar","shrimp"].concat(answer.slice(2, 0).split(",")),answer.slice(2, 0))
            client.createPost("shrimpradar", 
                {
                    tags: [random_post.blog.name,"shrimp radar","shrimp"].concat(answer.slice(2, 0).split(",")),
                    content: [
                        {
                            type: "text",
                            text: output_string,
                            formatting: concatFormat(random_post).concat([
                                {
                                    start: output_string.length - 22,
                                    end: output_string.length - 1,
                                    type: "small"
                                }
                            ])
                        }
                    ],
                    reblog_key: random_post.reblog_key,
                    parent_tumblelog_uuid: random_post.blog.uuid,
                    parent_post_id: random_post.id
                }
            ).then((data, response) => {
                console.log(data, "yippee! :33")
            }, (err, data, reponse) => {
                console.log(err, "FUCK!!!!")
            })    
            random_post.offset = offset
            fs.writeFileSync('./penis.json', JSON.stringify(random_post), (err) => {
                if (err) {
                    console.log(err)
                }
            })
        } else if (answer[0] == 'n') {
            random_post.offset = offset
            fs.writeFileSync('./penis.json', JSON.stringify(random_post), (err) => {
                if (err) {
                    console.log(err)
                }
            })
            console.log("kk")
            if (answer[2] == 'c') {
                offset ++
                reblog()
                return
            }
        } else {
            console.log("oopsies!")
        }
        readline.close();    
    });
}


function concatPost(post) {
    return post.content.map(x => x.type == "text" ? x.text : "").join(" ")
}

function concatFormat(post) {
    console.log(JSON.stringify(post.content, null, 2))
    let length = 0
    output = post.content.map(x => x.type == "text" && x.formatting ? x.formatting : []).flat(1)
    console.log(output.concat([
        {
            start: 22,
            end: 1,
            type: "small"
        }
    ]))
    return output
}

