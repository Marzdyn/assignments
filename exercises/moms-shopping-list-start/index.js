const addItem = document.addItem

let inputValue = document.getElementById("title")

let list = document.getElementById("list")


addItem.addEventListener("submit", (event) => {
    event.preventDefault();

    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    list.append(listItem);

    let div1 = document.createElement("div");
    div1.textContent = inputValue.value;
    listItem.appendChild(div1);


    let editInputBox = document.createElement("button");
    editInputBox.textContent = "edit";
    editInputBox.style.margin = "2px";
    listItem.append(editInputBox);

    editInputBox.addEventListener("click", function editItemFunc() {
        let editItem = document.createElement("input")
        editInputBox.appendChild(editItem)
        editItem.placeholder = "Type Here"
        editItem.style.width = "70px"
        let submitButton = document.createElement("button")
        editInputBox.appendChild(submitButton)
        submitButton.textContent = "Change"
        editInputBox.removeEventListener("click", editItemFunc)
        submitButton.addEventListener("mousedown", (e) => {
            div1.textContent = editItem.value;
            editItem.value = "";
        })
        submitButton.addEventListener("mouseup", (e) => {
            editItem.remove()
            submitButton.remove()
            editInputBox.addEventListener("click", editItemFunc)
        })
    })



    let cancelInputBox = document.createElement("button");
    cancelInputBox.textContent = "X";
    cancelInputBox.style.margin = "2px";
    listItem.append(cancelInputBox);
    cancelInputBox.addEventListener("click", (e) => {
        console.log(e)
        listItem.remove();
    })

    inputValue.value = "";

})

