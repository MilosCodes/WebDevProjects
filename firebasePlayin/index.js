
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://fir-play-82d51-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)


const randomListInDB = ref(database, "randomList")


const inputFieldEl = document.getElementById("input-field")
const addButton = document.getElementById("add-button")
const randomListEl = document.getElementById("random-list")


addButton.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    push(randomListInDB, inputValue)
    console.log(inputValue)
    clearInputField()
    
})

onValue(randomListInDB, function(snapshot) {
    let itemsArray = Object.entries(snapshot.val()) 

    clearRandomList()
    for (let i=0; i<itemsArray.length;i++) {
        let currentItem = itemsArray[i]
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]
        
        appendItem(currentItem)
    }
})
function appendItem(item) {
    let itemID = item[0]
    let itemValue = item[1]
    // randomListEl.innerHTML += `<li>${item}</li>`
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    randomListEl.append(newEl)
}

function clearInputField() {
    inputFieldEl.value = ""
}
function clearRandomList() {
    randomListEl.innerHTML = ""
}