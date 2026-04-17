import tkinter as tk
from tkinter import filedialog
import os
root = tk.Tk()
root.geometry("500x500")

#UI Structure
label = tk.Label(root, text="Audio Sample Rate Checker")
label.pack()

 #Button to upload file
def button_pressed():
    print("Click here to upload your file")
button = tk.Button(root, text= "Click here to upload your file", command=button_pressed)

file_label = tk.Label(root, text="No file selected")
file_label.pack()

#Click button to select file from you computer
def button_pressed():
    file_path = filedialog.askopenfilename()
    
    if file_path:
        file_name = os.path.basename(file_path)
        file_label.config(text=file_name)

button = tk.Button(root, text="Choose File", command=button_pressed)


button.pack()

root.mainloop()

    