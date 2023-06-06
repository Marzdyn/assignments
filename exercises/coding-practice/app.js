
var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
]



let list = document.getElementbyId("rangers")

for (var i = 0; i < powerRangers.length; i++){
    let power = document.createElement("li")
    power.textContent = powerRangers[i]
    list.append(power)
}
