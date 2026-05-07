sandwiches = ["BLT", "Italian", "Teriyaki", "Po Boy", "Cheese Steak"]
sandwich_index = None

try:
    sandwich_index = int(input("what sandwiches do you want?"))
    print(sandwiches[sandwich_index])

except IndexError:
    print("We dont wanna serve u")

except ValueError:
    print("put in a god damn number you worthless hack.")

finally:
    print("you get this white bread")
