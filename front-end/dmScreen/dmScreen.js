const backBtn = document.getElementById("backBtn");
const signOutBtn = document.getElementById("signOutBtn");

const campListSection = document.getElementById("campListSection");
const campText = document.getElementById("campText");
const campList = document.getElementById("campList");
const campNameInput = document.getElementById("campNameInput");
const createBtn = document.getElementById("createBtn");
const seeAllBtn = document.getElementById("seeAllBtn");

const charListSection = document.getElementById("charListSection");
const charText = document.getElementById("charText");
const charList = document.getElementById("charList");
const seeCampBtn = document.getElementById("seeCampBtn")

const loginEmail = sessionStorage.getItem("user");
const auth = sessionStorage.getItem("auth");

const campApi = "https://capstone-project-dnd-character-sheet.onrender.com/api/v1/campaigns"
const charApi = "https://capstone-project-dnd-character-sheet.onrender.com/api/v1/chars/all";

const removeErrorMessages = () => {
    const errorMessages = document.querySelectorAll(".errorMessage");
    for (const el of errorMessages){
        el.textContent = "";
    };
};

const displayDmCamps = async (userEmail) => {
    try {
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

        const response = await fetch(campApi + `/${userEmail}`, reqOptions);
        console.log(response)
        
        const camps = await response.json();
        console.log(camps)

        if (camps.length === 0) {
            campText.textContent = "You don't appear to have any campaigns, please create a campaign to continue."
            return;
        };
        campText.textContent = "Campaigns:"

        for (let i = 0; i < camps.length; i++) {
            const listedChar = document.createElement("li")
            listedChar.innerHTML = `${camps[i].campName}<button id="${camps[i].campName}Button">Select</button>`
            campList.appendChild(listedChar)

            const selectCharButton = document.getElementById(`${camps[i].campName}Button`)
            selectCharButton.addEventListener("click", () => {
                sessionStorage.setItem("campaign", camps[i].campName)
                window.location.href = "../campaignScreen/campaignScreen.html"
            })
        }

        sessionStorage.setItem("displayed", true)
    } catch {
        console.log(Error)
        sessionStorage.setItem("displayed", true)
    }
};

const createCampaign = async () => {
    removeErrorMessages();
    const reqOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        body: JSON.stringify({
            campName: campNameInput.value,
            email: loginEmail
        })
    };

    const createResponse = await fetch(campApi, reqOptions)
    const camp = await createResponse.json();

    if (camp.error) {
        const strippedError = char.error.split("Body:").splice(1);
        createError.textContent = strippedError.shift(1);
        return
    };

    campNameInput.value = "";
    displayDmCamps(loginEmail);
};

const displayAllChars = async () => {
    const listedChars = document.querySelectorAll("li");
    for (const el of listedChars){
        el.remove();
    };
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
        sessionStorage.setItem("displayed", true)
        return;
    };

    charText.textContent = "Characters in your campaign:"

    for (let i = 0; i < chars.length; i++) {
        const listedChar = document.createElement("li")
        listedChar.innerHTML = `${chars[i].charName}, ${chars[i].email}<button id="${chars[i].charName}Button">Select</button>`
        charList.appendChild(listedChar)

        const selectCharButton = document.getElementById(`${chars[i].charName}Button`)
        selectCharButton.addEventListener("click", () => {
            sessionStorage.removeItem("displayed")
            sessionStorage.setItem("char", chars[i].charName)
            window.location.href = "../characterScreen/characterScreen.html"
        })
    }

    sessionStorage.setItem("displayed", true)
};

document.addEventListener("DOMContentLoaded", () => {
    displayDmCamps(loginEmail);
    signOutBtn.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "../signInScreen/index.html";
    });
    backBtn.addEventListener("click", () => {
        sessionStorage.removeItem("displayed")
        window.location.href = "../mainScreen/mainScreen.html";
    });
    createBtn.addEventListener("click", () => {
        createCampaign();
    });
    seeAllBtn.addEventListener("click", () => {
        displayAllChars();
        campListSection.style.display = "none"
        charListSection.style.display = "flex"
    });
    seeCampBtn.addEventListener("click", () => {
        displayDmCamps(loginEmail);
        campListSection.style.display = "flex"
        charListSection.style.display = "none"
    });
});