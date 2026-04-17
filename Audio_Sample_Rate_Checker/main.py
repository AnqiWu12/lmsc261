# Pseudocode for Command Line Version

#Display program title and welcome message:
#"Welcome to the Audio Sample Rate Checker! Please enter the path of your audio file."

#Ask the user to input the file path in the terminal

#Check if the file exists
#    If the file does not exist
#       Display error message: "File not found. Please try again."
#        End program

#Check if the file type is supported (aiff, mp3, wav，ogg)
#    If not supported
#        Display error message:
#        "File type not supported. Please use aiff, mp3, wav, or ogg."
#        End program

# ughh just realized that only wav files are supported in python rn............TT

#If the file is supported
#    Open the audio file
#    Read the sample rate
#    Read the number of channels
#    Read the number of frames
#    Calculate the duration

#Display the result in the terminal:
#"The file [file name] has:
#Sample Rate: [sample rate] Hz
#Channels: [channels]
#Frames: [frames]
#Duration: [duration] seconds"

#Ask the user if they want to check another file
#    If yes
#        Repeat the process
#    If no
#       End program


import os
import wave

print ("Welcome to the Audio Sample Rate Checker! Please enter the path of your audio file.")

print("Note: Currently, only WAV files are supported for full analysis.")

#Ask the user to input the file path in the terminal
file_path = input("Enter the file path: ").strip()
print("The file path you entered is: " + file_path)

#find out if the file exists or not & check the file is wav or not
if os.path.exists(file_path):
    print("Nice! Got your file!")

    file_extension = os.path.splitext(file_path)[1].lower()

    if file_extension == ".wav":
        print("File type supported. Ready to analyze.")
    else:
        print("File type not supported. Please upload a .wav file.")

else:
    print("File not found. Please try again.")

#Start analyzing the file
with wave.open(file_path, 'rb') as audio_file:
    sample_rate = audio_file.getframerate()
    channels = audio_file.getnchannels()
    frames = audio_file.getnframes()
    duration = frames / float(sample_rate)


    if channels == 1:
        channel_type = "Mono"
    elif channels == 2:
        channel_type = "Stereo"
    elif channels == 4:
        channel_type = "Quad"
    elif channels == 6:
        channel_type = "5.1 Surround"
    else:
        channel_type = "Unknown Format"


#Print the analyzed results
    print("Sample Rate:", sample_rate, "Hz")
    print(f"Number of Channels: {channels} ({channel_type})")
    print("Number of Frames:", frames)
#Minutes and seconds for duration print
    if duration < 60:
        print(f"Duration: {duration:.2f} seconds")
    else:
        minutes = int(duration // 60)
        seconds = duration % 60
        print(f"Duration: {minutes} minutes {seconds:.0f} seconds")

