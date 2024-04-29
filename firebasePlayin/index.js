
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://fir-play-82d51-default-rtdb.europe-west1.firebasedatabase.app/"
}


// const app = initializeApp(appSettings)
// const database = getDatabase(app)


// const randomListInDB = ref(database, "randomList")


// const inputFieldEl = document.getElementById("input-field")
// const addButton = document.getElementById("add-button")
// const randomListEl = document.getElementById("random-list")


// addButton.addEventListener("click", function(){
//     let inputValue = inputFieldEl.value
//     push(randomListInDB, inputValue)
//     console.log(inputValue)
//     clearInputField()
    
// })

// onValue(randomListInDB, function(snapshot) {
//     let itemsArray = Object.entries(snapshot.val()) 

//     clearRandomList()
//     for (let i=0; i<itemsArray.length;i++) {
//         let currentItem = itemsArray[i]
//         let currentItemID = currentItem[0]
//         let currentItemValue = currentItem[1]
        
//         appendItem(currentItem)
//     }
// })
// function appendItem(item) {
//     let itemID = item[0]
//     let itemValue = item[1]
//     // randomListEl.innerHTML += `<li>${item}</li>`
//     let newEl = document.createElement("li")
    
//     newEl.textContent = itemValue
//     randomListEl.append(newEl)
// }

// function clearInputField() {
//     inputFieldEl.value = ""
// }
// function clearRandomList() {
//     randomListEl.innerHTML = ""
// }

// create constants for app, database, and ref
const app = initializeApp(appSettings)
const database = getDatabase(app)
const listInDB = ref(database, "someList")



//create constants for input field, addbutton and addevent listener on button.
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const listEl = document.getElementById("some-list")

addButtonEl.addEventListener("click", function() {
    addingInputValue()
    
})

inputFieldEl.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("add-button").click()
    }

})

function addingInputValue() {
    clearListField()
    let inputValue = inputFieldEl.value
    push(listInDB, inputValue)
    console.log(inputValue)

}
//call function onValue, with snapshot, use object inside to be enteries (create an array), so i can change that object from keys to values. 
onValue(listInDB, function(snapshot) {

    if (snapshot.exists()) {
     let itemsArray = Object.entries(snapshot.val())
    
    for (let i=0; i < itemsArray.length; i++) {
        let currentItem = itemsArray[i]
        appendItem(currentItem)
            }
        }  else {
            listEl.innerHTML = "List does not exist..yet"
        }
    })

//make function appendItem() that takes value of item and appends. call it inside of function onValue in loop.
function appendItem(item) {
    let itemID = item[0]
    let itemValue = item[1]
    clearInputField()
    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    newEl.classList.add = "story"
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `someList/${itemID}`)
         remove(exactLocationOfItemInDB)
    })
    listEl.append(newEl)
}

// make function clearInputField() that clears input field and call it in. use textContent to append new item
function clearInputField() {
    inputFieldEl.innerHTML = ""
}

function clearListField() {
    listEl.innerHTML = ""
}


































// const app = initializeApp(appSettings)
// const database = getDatabase(app)


// const randomListInDB = ref(database, "randomList")


// const inputFieldEl = document.getElementById("input-field")
// const addButton = document.getElementById("add-button")
// const randomListEl = document.getElementById("random-list")


// addButton.addEventListener("click", function(){
//     let inputValue = inputFieldEl.value
//     push(randomListInDB, inputValue)
//     console.log(inputValue)
//     clearInputField()
    
// })

// onValue(randomListInDB, function(snapshot) {
//     let itemsArray = Object.entries(snapshot.val()) 

//     clearRandomList()
//     for (let i=0; i<itemsArray.length;i++) {
//         let currentItem = itemsArray[i]
//         let currentItemID = currentItem[0]
//         let currentItemValue = currentItem[1]
        
//         appendItem(currentItem)
//     }
// })
// function appendItem(item) {
//     let itemID = item[0]
//     let itemValue = item[1]
//     // randomListEl.innerHTML += `<li>${item}</li>`
//     let newEl = document.createElement("li")
    
//     newEl.textContent = itemValue
//     randomListEl.append(newEl)
// }

// function clearInputField() {
//     inputFieldEl.value = ""
// }
// function clearRandomList() {
//     randomListEl.innerHTML = ""
// }