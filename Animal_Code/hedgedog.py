num_spaces = input ("how many spaces are available?")
num_spaces = int(num_spaces)

for i in range(num_spaces):
    if i %2 == 0:
        print("Planting a broccoli!!!")
    else:
        print("Planting a cauliflower!")

