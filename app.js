var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

console.log("_-_-_-_-_ #1 _-_-_-_-_")
let number = 0
for (i = 0; i < officeItems.length; i++) {
    if ( officeItems[i] === "computer" ) {
        number += 1
    }
}
console.log("Number of computers: " + number)

console.log("_-_-_-_-_ #2 _-_-_-_-_")

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  for (j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++) {
      if (peopleWhoWantToSeeMadMaxFuryRoad[j].age >= 18) {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " Is Old Enough")
      } else if (peopleWhoWantToSeeMadMaxFuryRoad[j].age < 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " Is not Old Enough")
      }
  }
