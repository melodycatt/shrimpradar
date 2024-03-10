import pytumblr

# Make the request
def search_characters(input_string, search_string):
    output_string = ""
    search_index = 0
    inpI = 0
    breakinterro = False
    for char in input_string:
        if breakinterro:
            break
        if char == search_string[search_index]:
            output_string += char
            search_index += 1
            print(search_index)
            if search_index >= len(search_string):
                print("poo")
                search_index = 0
            while input_string[(inpI + 1):].find(search_string[search_index]) == -1:
                print(inpI, search_index, input_string[(inpI + 1):].find("s"))
                search_index += 1
                if search_index >= len(search_string):
                    breakinterro = True
                    break
        else:
            output_string += " "
        inpI += 1
    return output_string


# Example usage
search_string = "shrimp"
input_string = "i am a shrimp hello can consider hr ks imp shrip"
output_string = search_characters(input_string, search_string)
consumer_key = "1GuhcTootYs6mvZoDaH2zmniVL626a33O2Zge5SxhqeB6BCrQX"
consumer_secret = "ZGvnHtf8I4HwMZRBl8bmz95WENdGKCvoL1u6Jefm5d5nvbus0n"
client = pytumblr.TumblrRestClient(
  '1GuhcTootYs6mvZoDaH2zmniVL626a33O2Zge5SxhqeB6BCrQX',
  'ZGvnHtf8I4HwMZRBl8bmz95WENdGKCvoL1u6Jefm5d5nvbus0n',
  'uK8wJI978IPewUw6uRmi2bBQlC3k7oT6SExDyVrf0TNwlITgx0',
  'lQWB3OR2GkYYkAogngyoROYoFLVMAD0AXPFGy7SOEUKgyWtG1S'
)

# Make the request
print(client.info())
print(output_string)