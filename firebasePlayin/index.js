
import {FirebaseError, initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
// import { FirebaseError, initializeApp } from "firebase/app";

const appSettings = {
    apiKey: "AIzaSyC8r7SZTvep5_lrNd2ykNAFW8eAtcFoomM",
    authDomain: "fir-play-82d51.firebaseapp.com",
    databaseURL: "https://fir-play-82d51-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-play-82d51",
    storageBucket: "fir-play-82d51.appspot.com",
    messagingSenderId: "210615019316",
    appId: "1:210615019316:web:ca5097a2ecc1cd48806761"
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
// firebase.initializeApp(appSettings)
const app = initializeApp(appSettings)
const database = getDatabase(app)
const listInDB = ref(database, "someList")



//create constants for input field, addbutton and addevent listener on button.
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const listEl = document.getElementById("some-list")



let fileText = document.querySelector(".fileText")
let uploadPercentage = document.querySelector(".uploadPercentage")
let progress = document.querySelector(".progress")
let precentVal
let fileItem
let fileName

export function getFile(e) {
    fileItem = e.target.files[0]
    fileName = fileItem.name
    fileText.innerHTML = fileName
}
function uploadImage() {
    let storageRef = firebase.storage().ref("images" + fileName)
    let uploadTask = storageRef.put(fileName)
    uploadTask.on("state_changed", (snapshot)=>{
        precentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100)
        uploadPercentage.innerHTML = precentVal+"%"
        progress.style.width=precentVal+"%"
    },(error)=>{
        console.log("error", error)
    },()=> {
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL", url)
        })
    })
}

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
//CALL function onValue, that has input listInDB and inside function (snapshot), after that make if (snapshot.exists() that have const itemsArray that have Object with key and value that have snapshot.val() in brackets. Inside that IF and after const itemsArray make for loop that have index 0 and itemsArray.length... make const that have propertiy called "currentItem" that equals of itemsArray with index. Then make function appendItem(item) and call it inside.
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

//Make function called appendItem that has output of item. 
// 1. make two constants one itemID to have item[0], and itemValue to have item[1] (there is a difference between two, one throws you Id's(key) and another one is throwing you values) 2. make let of newEl, createElement of type li. 3. Add textContent of type itemValue.  on newEl add event lister for double click ("dbClick"), inside of function make new let that have name as exactLocationOfItemInDB with ref(database, `${id}`) and in new line remove(exactLocationItemInDB), then append listEl with value of newEl
function appendItem(item) {
    let itemID = item[0]
    let itemValue  = item[1]

    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `someList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })
    listEl.append(newEl)
}






















// function appendItem(item) {
//     let itemID = item[0]
//     let itemValue = item[1]
//     clearInputField()
//     let newEl = document.createElement("li")
//     newEl.textContent = itemValue
//     newEl.classList.add = "story"
//     newEl.addEventListener("dblclick", function() {
//         let exactLocationOfItemInDB = ref(database, `someList/${itemID}`)
//          remove(exactLocationOfItemInDB)
//     })
//     listEl.append(newEl)
// }

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