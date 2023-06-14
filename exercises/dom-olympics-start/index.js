let header = document.getElementById("header")

header.innerHTML = "<p class='firstHeader'>JAVASCRIPT MADE THIS</p> <br class='break'> <p class='secondHeader'> <span class='span'>Christian Marsden</span> Wrote The JavaScript</p>"

let firstMessage = document.querySelector('.messages').children;

let firstMessageMain = document.getElementById("messages")

firstMessage[0].textContent = "I have something EXTREMELY funny to talk about."
firstMessage[1].textContent = "I cannot wait to hear it, bro!"
firstMessage[2].textContent = "you have to...You're my bro!"
firstMessage[3].textContent = "I will always be your bro."

clearButton = document.getElementById("clearButton")

let firstDiv = document.getElementById("main")

clearButton.addEventListener("click", function() {
    firstMessageMain.remove()
})

let dropDownMenu = document.getElementById("theme-drop-down")

let dropDownThemeOne = document.getElementById("themeOne")

let dropDownThemeTwo = document.getElementById("themeTwo")

dropDownThemeTwo.addEventListener("click", (e) => {
    console.log("it works")
})