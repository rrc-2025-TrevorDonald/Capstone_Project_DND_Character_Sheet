const backBtn = document.getElementById("backBtn");
const signOutBtn = document.getElementById("signOutBtn");
const listSection = document.getElementById("listSection");
const charText = document.getElementById("charText");
const charList = document.getElementById("charList");

const loginEmail = sessionStorage.getItem("user")
const auth = sessionStorage.getItem("auth")

const charApi = "http://localhost:3000/api/v1/chars/all";

const displayAllChars = async () => {
    const reqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        }
    };

    const response = await fetch(charApi, reqOptions)
    const chars = await response.json();

    if (chars.length === 0) {
        charText.textContent = "There doesn't appear to be any Characters in your campaign"
        return;
    };

    charText.textContent = "Characters in your campaign:"

    for (let i = 0; i < chars.length; i++) {
        const listedChar = document.createElement("li")
        listedChar.innerHTML = `${chars[i].charName}, ${chars[i].email}<button id="${chars[i].charName}Button">Select</button>`
        charList.appendChild(listedChar)

        const selectCharButton = document.getElementById(`${chars[i].charName}Button`)
        selectCharButton.addEventListener("click", () => {
            sessionStorage.setItem("char", chars[i].charName)
            window.location.href = "../characterScreen/characterScreen.html"
        })
    }
};

document.addEventListener("DOMContentLoaded", () => {
    displayAllChars();
    signOutBtn.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "../signInScreen/index.html";
    })
    backBtn.addEventListener("click", () => {
        window.location.href = "../mainScreen/mainScreen.html";
    })
})