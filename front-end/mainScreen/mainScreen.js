const signOutBtn = document.getElementById("signOutBtn");

const listSection = document.getElementById("listSection");
const charText = document.getElementById("charText");
const charList = document.getElementById("charList");
const createNewChar = document.getElementById("createNewChar");

const createSection = document.getElementById("createSection");
const createError = document.getElementById("createError");
const charNameInput = document.getElementById("charNameInput");
const lvlInput = document.getElementById("lvlInput");
const raceInput = document.getElementById("raceInput");
const playerInput = document.getElementById("playerInput");
const alignmentInput = document.getElementById("alignmentInput");
const classInput = document.getElementById("classInput");
const backBtn = document.getElementById("backBtn");
const createBtn = document.getElementById("createBtn");

const loginEmail = sessionStorage.getItem("user")
const auth = sessionStorage.getItem("auth")

const charApi = "http://localhost:3000/api/v1/chars";

const removeErrorMessages = () => {
    const errorMessages = document.querySelectorAll(".errorMessage")
    for (const el of errorMessages){
        el.textContent = ""
    };
};

const displayUserChars = async (userEmail) => {
    const reqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        body: JSON.stringify({
            email: userEmail
        })
    };

    const response = await fetch(charApi, reqOptions);
    const chars = await response.json();

    if (!chars) {
        charText.textContent = "You don't appear to have any characters made, please create a character to continue."
        return;
    } else {
        charText.textContent = "Characters:"
    };

    for (let i = 0; i < chars.length; i++) {
        const listedChar = document.createElement("li")
        listedChar.innerHTML = `${chars[i]}<button id="${chars[i].charName}Button">Select</button>`
        charList.appendChild(listedChar)

        const selectCharButton = document.getElementById(`${chars[i].charName}Button`)
        selectCharButton.addEventListener("click", () => {
            sessionStorage.setItem("char", chars[i].charName)
            window.location.href = "../characterScreen/characterScreen.html"
        })
    }
};

const createChar = async () => {
    removeErrorMessages();
    const getReqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        body: JSON.stringify({
            email: userEmail
        })
    };

    const response = await fetch(charApi, getReqOptions);
    const chars = await response.json();

    if (chars.includes(charNameInput.value)) {
        createError.textContent = "Character already exists"
        return
    }

    const reqOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        body: JSON.stringify({
            charName: charNameInput.value,
            email: loginEmail,
            level: lvlInput.value ||  "1",
            playerName: playerInput.value,
            alignment: alignmentInput.value || "",
            race: raceInput.value || "",
            class: classInput.value || ""
        })
    };

    const createResponse = await fetch(charApi, reqOptions)
    const char = await createResponse.json();

    if (char.error) {
        const strippedError = signIn.error.split("Body:").splice(1);
        createError.textContent = strippedError.shift(1);
        return
    };

    window.location.reload();
    createSection.style.display = "none";
    listSection.style.display = "flex";
};

document.addEventListener("DOMContentLoaded", () => {
    displayUserChars(loginEmail);
    createNewChar.addEventListener("click", () => {
        createSection.style.display = "flex";
        listSection.style.display = "none";
    })
    backBtn.addEventListener("click", () => {
        createSection.style.display = "none";
        listSection.style.display = "flex";
    });
    createBtn.addEventListener("click", () => {
        createChar()
    });
})