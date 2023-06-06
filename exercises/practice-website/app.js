const anchor1 = document.getElementsById=(firstA)
const anchor2 = document.getElementsById=(secondA)
const anchor3 = document.getElementsById=(thirdA)

function hoverA (){
    anchor1.style.color ="red"
}

function hoverB (){
    anchor2.style.color ="red"
}

function hoverC (){
    anchor3.style.color ="red"
}

function hover1 (){
    anchor1.style = "style.className.functionTest"
    anchor2.style = "style.className.functionTest"
    anchor3.style = "style.className.functionTest"
}

anchor1.addEventListener("mouseenter", hoverA)
anchor2.addEventListener("mouseenter", hoverB)
anchor3.addEventListener("mouseenter", hoverC)

anchor1.addEventListener("mouseleave", hover1)
anchor2.addEventListener("mouseleave", hover1)
anchor3.addEventListener("mouseleave", hover1)


const button = getElementById("button")

function buttonClick (){
    button.style = "style.className.functionTest1"
}

button.addEventListener("onclick", buttonClick)
