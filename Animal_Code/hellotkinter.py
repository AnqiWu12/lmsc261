import tkinter as tk
root = tk.Tk()
root.geometry("500x500")

def button_pressed():
    print("Ouch!")
button = tk.Button(root, text= "Press Me", command=button_pressed)
                   
button.pack()

lable = tk.Label(root, text="I'm a lable")
lable.pack()

root.mainloop()

