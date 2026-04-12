print("Hello, Python!")
import tkinter as tk
root = tk.Tk()
root.geometry("400x400")

#function
def change_label_text():
    entry_text = "hello" + entry.get()
    label.config(text=entry_text)
    entry.delete(0, 'end')
    

#Logic
Sponge_limit = 0.5

def calculate_sponge_needed():
    cups_Spilled = Sponge_entry.get()
    Sponge_needed = int (cups_Spilled)/Sponge_limit
    format_text = "we're gonna need: "+ str(Sponge_needed) + " Sponges"
    display_label.config(text=format_text)





#User interface
Sponge_entry = tk.Entry(root)
Sponge_entry.pack()


Sponge_button = tk.Button(root, text ="submit", command=change_label_text)
Sponge_button.pack()

display_label = tk.Label(root, text ="Weeeeeeee")
display_label.pack()


root.mainloop()