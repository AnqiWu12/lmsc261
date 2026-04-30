from requests import *
import json

url = "https://api.open-meteo.com/v1/forecast?latitude=71.06&longitude=42.36&current_weather=true"
response = get(url)

if response.status_code == 200:
    response_formatted = json.dumps(response.json(), indent=4)
    print(response.json()['current_weather']['temperature'])
 #   print(response_formatted)