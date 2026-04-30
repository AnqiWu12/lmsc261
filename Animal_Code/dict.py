print("hey")


ice_cream_flavors = {
    'chocolate': 15,
    'vanilla': 20,
    'strawberry': 25,
    'swirly_flavor':{
        'mint' : 20,
        'pineapple': 10
    }
}
print(ice_cream_flavors['mint'])

import json
ice_cream_flavors_formatted = json.dumps(ice_cream_flacors, indent = 4)
print(ice_cream_flavors_formatted)