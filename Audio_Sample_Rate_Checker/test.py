import tkinter as tk
import tkinter.font as tkfont

root = tk.Tk()
fonts = tkfont.families()
for f in sorted(fonts):
    print(f)
root.mainloop()