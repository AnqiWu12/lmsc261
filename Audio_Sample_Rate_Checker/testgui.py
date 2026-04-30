import tkinter as tk
from tkinter import filedialog
import os
import wave

def analyze_audio(file_path):
    if not os.path.exists(file_path):
        return None, "File not found. Please try again."

    file_extension = os.path.splitext(file_path)[1].lower()
    if file_extension != ".wav":
        return None, "File type not supported. Please use a .wav file."

    with wave.open(file_path, 'rb') as audio_file:
        sample_rate = audio_file.getframerate()
        channels = audio_file.getnchannels()
        frames = audio_file.getnframes()
        duration = frames / float(sample_rate)

    channel_type = {1: "Mono", 2: "Stereo", 4: "Quad", 6: "5.1 Surround"}.get(channels, "Unknown Format")

    if duration < 60:
        duration_str = f"{duration:.2f} seconds"
    else:
        minutes = int(duration // 60)
        seconds = duration % 60
        duration_str = f"{minutes} min {seconds:.0f} sec"

    results = {
        "file_name": os.path.basename(file_path),
        "sample_rate": sample_rate,
        "channels": channels,
        "channel_type": channel_type,
        "frames": frames,
        "duration": duration_str,
    }
    return results, None


def button_pressed():
    file_path = filedialog.askopenfilename(
        filetypes=[("WAV files", "*.wav"), ("All files", "*.*")]
    )
    if not file_path:
        return

    file_name = os.path.basename(file_path)
    file_label.config(text=f"Selected: {file_name}")

    results, error = analyze_audio(file_path)

    if error:
        result_label.config(text=f"Error: {error}", fg="red")
    else:
        result_text = (
            f"File: {results['file_name']}\n"
            f"Sample Rate: {results['sample_rate']} Hz\n"
            f"Channels: {results['channels']} ({results['channel_type']})\n"
            f"Frames: {results['frames']}\n"
            f"Duration: {results['duration']}"
        )
        result_label.config(text=result_text, fg="black")


root = tk.Tk()
root.title("Audio Sample Rate Checker")
root.geometry("500x500")

title_label = tk.Label(root, text="Audio Sample Rate Checker", font=("Helvetica", 16, "bold"))
title_label.pack(pady=20)

button = tk.Button(root, text="Choose WAV File", command=button_pressed)
button.pack(pady=10)

file_label = tk.Label(root, text="No file selected", fg="gray")
file_label.pack()

result_label = tk.Label(root, text="", justify="left", font=("Courier", 11))
result_label.pack(pady=20)

root.mainloop()