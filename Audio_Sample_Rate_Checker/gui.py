import tkinter as tk
import os
from tkinter import filedialog
from main import analyze_audio

#Color Design
BG_COLOR = "#f0eeff"        
PURPLE = "#7F77DD"          
DARK_PURPLE = "#3C3489"     
LIGHT_PURPLE = "#CECBF6"    
CARD_BG = "#f0eeff"   


def make_result_row(parent, label_text): #make a def. create each row's result. parent mean put in which container.label_text means what text shown on the left
    # each row has a frame under it
    row = tk.Frame(parent, bg=CARD_BG, pady=10) #create the frame for each row. #pady is upper and inner margins
    row.pack(fill="x", padx=16, pady=4) #fill = x means horizontally full. padx left/right. pady up/down

    # the categories label on the left
    label = tk.Label(
        row,
        text=label_text,
        font=("Helvetica", 12),
        bg=CARD_BG,
        fg=PURPLE
    )
    label.pack(side="left", padx=12) #靠左对齐

    # value on the right
    value = tk.Label(
        row,
        text="—",
        font=("Helvetica", 12, "bold"),
        bg=CARD_BG,
        fg=DARK_PURPLE
    )
    value.pack(side="right", padx=12) #靠右对齐

    return value


#button click command --> choose the file 
def choose_file():
    print("button clicked!")       

    file_path = filedialog.askopenfilename(
        filetypes=[("WAV files", "*.wav")] #only waves
    )
    if file_path: 
        file_name = os.path.basename(file_path) #find the full path for the file.
        file_hint.config(text=file_name) #change the text under the button to the file name.

         # connect the results from main.py
        results, error = analyze_audio(file_path) #analyze the audio by using "anayze_audio"in main.py
        
        if error:
            print("Error", error) #if error, terminal print why error.
        else:
            row_sample_rate.config(text=str(results["sample_rate"]) + " Hz")
            row_bit_depth.config(text=str(results["bit_depth"]) + " bit")
            row_channels.config(text=str(results["channels"]) + " " + results["channel_type"])
            row_duration.config(text=results["duration"])
            row_frames.config(text=str(results["frames"]))

#tkinter Window
root = tk.Tk()
root.title("Audio Analyzer")
root.geometry("480x560")
root.minsize(500, 600)
root.maxsize(500, 600)
root.configure(bg=BG_COLOR)

#Main Title
title_label = tk.Label(
    root,
    text="Audio Analyzer",
    font=("Helvetica", 25, "bold"),
    bg=BG_COLOR,
    fg=DARK_PURPLE
)
title_label.pack(pady=(32, 4)) #put into window, upper leave 32px, lower lease 4px.

#Subtitle
subtitle_label = tk.Label(
    root,
    text="Upload a .wav file to inspect its properties",
    font=("Helvetica", 15),
    bg=BG_COLOR,
    fg=PURPLE
)
subtitle_label.pack(pady=(0, 24)) 


# Upload button
upload_button = tk.Button(
    root,
    text="+ Choose file",
    font=("Helvetica", 14, "bold"),
    bg=PURPLE,
    fg="#3C3489",
    relief="flat", #get rid of the frame line outside of the button
    cursor="hand2", #mouse
    command=choose_file
)
upload_button.pack(padx=80, ipadx=20, ipady=40, pady=(0, 6)) #padx左右外边距，ipadx左右内边距，ipady上下内边距

# “no file selected” - the text under the button
file_hint = tk.Label(
    root,
    text="no file selected",
    font=("Helvetica", 11),
    bg=BG_COLOR,
    fg=LIGHT_PURPLE
)
file_hint.pack() #put into window


# results box's frame
results_box = tk.Frame(
    root,
    bg="white",
    bd=1,
    relief="solid",
)
results_box.pack(padx=32, fill="x", pady=24) 

# the title in the result box
results_title = tk.Label(
    results_box,
    text="Analysis results",
    font=("Helvetica", 11),
    bg="white",
    fg=LIGHT_PURPLE
)
results_title.pack(anchor="w", padx=16, pady=(12, 8)) #anchor="w"靠左对齐

# print the results
row_sample_rate = make_result_row(results_box, "Sample Rate")
row_bit_depth = make_result_row(results_box, "Bit Depth")
row_channels = make_result_row(results_box, "Channels")
row_duration = make_result_row(results_box, "Duration")
row_frames = make_result_row(results_box, "Frames")

# leave some space under the results text in the frame
tk.Frame(results_box, bg="white", height=8).pack()



root.mainloop()

