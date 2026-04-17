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

const loginEmail = sessionStorage.getItem("user");
const auth = sessionStorage.getItem("auth");

const charApi = "https://capstone-project-dnd-character-sheet.onrender.com/api/v1/chars";

const removeErrorMessages = () => {
    const errorMessages = document.querySelectorAll(".errorMessage");
    for (const el of errorMessages){
        el.textContent = "";
    };
};

const displayUserChars = async (userEmail) => {
    const listedChars = document.querySelectorAll("li");
    for (const el of listedChars){
        el.remove();
    };
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
        return;
    };
    charText.textContent = "Characters:"

    for (let i = 0; i < chars.length; i++) {
        const listedChar = document.createElement("li")
        listedChar.innerHTML = `${chars[i].charName}<button id="${chars[i].charName}Button">Select</button>`
        charList.appendChild(listedChar)

        const selectCharButton = document.getElementById(`${chars[i].charName}Button`)
        selectCharButton.addEventListener("click", () => {
            sessionStorage.setItem("char", chars[i].charName);
            window.location.href = "../characterScreen/characterScreen.html"
        })
    }

    sessionStorage.setItem("displayed", true)
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

    charNameInput.value = "";

    if (char.error) {
        const strippedError = char.error.split("Body:").splice(1);
        createError.textContent = strippedError.shift(1);
        return
    };

    displayUserChars(loginEmail);
};

const authorizedDM = async () => {
    removeErrorMessages();
    const reqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        }
    };

    const response =  await fetch(charApi + "/dm", reqOptions);
    const hasAuth = await response.json()
    if (hasAuth.error) {
        displayUserChars(loginEmail);
        createError.textContent = "Unauthorized, You're not a dm"
    } else {
        window.location.href = "../dmScreen/dmScreen.html";
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
        authorizedDM()
    });
});