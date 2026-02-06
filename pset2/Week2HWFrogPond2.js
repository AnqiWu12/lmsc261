const activities = ["babysit tadpoles","flies for lunch","tongue stretch","swimming lesson"];
let activityIndex = prompt("Pick an activity number:");

activityIndex = Number(activityIndex);

let wrappedIndex = activityIndex % activities.length;

print("Your frog activity is:");
print(activities[wrappedIndex]);