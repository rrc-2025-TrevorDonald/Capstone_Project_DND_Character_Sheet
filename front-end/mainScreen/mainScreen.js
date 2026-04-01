const dmButton = document.getElementById("DMBtn");
const signOutBtn = document.getElementById("signOutBtn");

const listSection = document.getElementById("listSection");
const charText = document.getElementById("charText");
const charList = document.getElementById("charList");
const createNewChar = document.getElementById("createNewChar");

const createSection = document.getElementById("createSection");
const createError = document.getElementById("createError");
const charNameInput = document.getElementById("charNameInput");
const playerInput = document.getElementById("playerInput");
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
    console.log(loginEmail)
    const reqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        }
    };

    const response = await fetch(charApi + `/${userEmail}`, reqOptions);
    console.log(response)
    
    const chars = await response.json();
    console.log(chars)

    if (chars.length === 0) {
        charText.textContent = "You don't appear to have any characters made, please create a character to continue."
        return;
    };
    charText.textContent = "Characters:"

    for (let i = 0; i < chars.length; i++) {
        const listedChar = document.createElement("li")
        listedChar.innerHTML = `${chars[i].charName}<button id="${chars[i].charName}Button">Select</button>`
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
    const reqOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        body: JSON.stringify({
            charName: charNameInput.value,
            email: loginEmail
        })
    };

    const createResponse = await fetch(charApi, reqOptions)
    const char = await createResponse.json();

    if (char.error) {
        const strippedError = char.error.split("Body:").splice(1);
        createError.textContent = strippedError.shift(1);
        return
    };

    window.location.reload();
    displayUserChars(loginEmail);
};

const authorizedDM = async () => {
    removeErrorMessages();
    try {
        const reqOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${auth}`
            }
        };

        const response = await fetch("http://localhost:3000/api/v1/users/dm", reqOptions);
        const hasAuth = await response.json();
        console.log(hasAuth)
        
        window.location.href = "../dmScreen/dmScreen.html";
    } catch(error) {
        createError.textContent = "Unauthorized you're not a DM"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    displayUserChars(loginEmail);
    createBtn.addEventListener("click", () => {
        createChar()
    });
    signOutBtn.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "../signInScreen/index.html";
    });
    dmButton.addEventListener("click", () => {
        authorizedDM();
    });
});