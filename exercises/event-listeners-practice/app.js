const square = document.getElementById("square")

square.addEventListener("mouseover", function mouseover() {
    square.style.backgroundColor = "blue"
    console.log("square.event.target")
})

square.addEventListener("mousedown", function mousedown() {
    square.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function mouseup() {
    square.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function dblclick() {
    square.style.backgroundColor = "green"
})

document.addEventListener("wheel", (e) => {
    console.log(e)
    square.style.backgroundColor = "orange"
})

document.body.addEventListener("keydown", (event) => {
    console.log(event.key)
    if (event.key === "r"){
        square.style.backgroundColor = "red"
    } else if (event.key === "g"){
        square.style.backgroundColor = "green"
    }   else if (event.key === "b"){
        square.style.backgroundColor = "blue"
    } else if (event.key === "y") {
        square.style.backgroundColor = "yellow"
    } else if (event.key === "o"){
        square.style.backgroundColor = "orange"
    }
}
)

document.body.addEventListener("keyup", (e) => {
    square.style.backgroundColor = "antiquewhite"
})
