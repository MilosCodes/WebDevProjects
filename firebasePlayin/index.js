
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
    clearInputField()
    console.log(inputValue)
    appendItem(inputValue)
    
})
    onValue(randomListInDB, function(snapshot) {
        let randomListArray = Object.values(snapshot.val())
        console.log(randomListArray.length)
})

function appendItem(item) {
    randomListEl.innerHTML += `<li>${item}</li>`
}

function clearInputField() {
    inputFieldEl.value = ""
}