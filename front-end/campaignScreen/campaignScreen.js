const backBtn = document.getElementById("backBtn");
const signOutBtn = document.getElementById("signOutBtn");

const currentListSection = document.getElementById("currentListSection");
const currentText = document.getElementById("currentText");
const currentList = document.getElementById("currentList");
const currentError = document.getElementById("currentError");
const seePlayersBtn = document.getElementById("seePlayersBtn");

const charListSection = document.getElementById("charListSection");
const charText = document.getElementById("charText");
const charList = document.getElementById("charList");
const charError = document.getElementById("charError");
const seeCampBtn = document.getElementById("seeCampBtn");

const noteBtn = document.getElementById("noteBtn");

const loginEmail = sessionStorage.getItem("user");
const auth = sessionStorage.getItem("auth");

const campApi = "https://capstone-project-dnd-character-sheet.onrender.com/api/v1/campaigns";
const charApi = "https://capstone-project-dnd-character-sheet.onrender.com/api/v1/chars/all";

const currentCampaign = sessionStorage.getItem("campaign")

const getCampaignPlayers = async (selectedCamp) => {
    const listedChars = document.querySelectorAll("li");
    for (const el of listedChars){
        el.remove();
    };
    const reqOptions1 = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        }
    };

    const response = await fetch(campApi + `/campaign/players/${selectedCamp}`, reqOptions1);
    console.log(response)
    
    const camps = await response.json();
    console.log(camps)

    if (!camps) {
        console.log("No camps")
    }

    for (let i = 0; i < camps.length; i++) {
        const listedChar = document.createElement("li")
        listedChar.innerHTML = `${camps[i].charName}, ${camps[i].email}<button id="${camps[i].charName}Button">Select</button><button id="remove${camps[i].charName}">Remove from Campaign</button>`;
        currentList.appendChild(listedChar);

        const selectCharButton = document.getElementById(`${camps[i].charName}Button`);
        selectCharButton.addEventListener("click", () => {
            sessionStorage.setItem("char", camps[i].charName);
            window.location.href = "../characterScreen/characterScreen.html"
        });

        const removeCharButton = document.getElementById(`remove${camps[i].charName}`);
        removeCharButton.addEventListener("click", async () => {
            const reqOptions2 = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth}`
                },
                body: JSON.stringify({
                    charName: camps[i].charName,
                    email: camps[i].email
                })
            };

            const response2 = await fetch(campApi+`/campaign/player/remove/${currentCampaign}`, reqOptions2);
            if (!response2) {
                charError.textContent = `Failed to remove ${camps[i].charName} from ${currentCampaign}`
            };

            getCampaignPlayers(currentCampaign)
        })
    };
};

const displayAllChars = async (camp) => {
    const listedChars = document.querySelectorAll("li");
    for (const el of listedChars){
        el.remove();
    };
    const reqOptions1 = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        }
    };

    const response = await fetch(charApi, reqOptions1)
    const chars = await response.json();

    if (chars.length === 0) {
        charText.textContent = "There doesn't appear to be any Characters"
        return;
    };

    charText.textContent = "Characters in your campaign:"

    for (let i = 0; i < chars.length; i++) {
        const listedChar = document.createElement("li")
        listedChar.innerHTML = `${chars[i].charName}, ${chars[i].email}<button id="${chars[i].charName}Button">Add to Campaign</button>`
        charList.appendChild(listedChar)

        const selectCharButton = document.getElementById(`${chars[i].charName}Button`)
        selectCharButton.addEventListener("click", async () => {
            const reqOptions2 = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth}`
                },
                body: JSON.stringify({
                    charName: chars[i].charName,
                    email: chars[i].email
                })
            };

            const response2 = await fetch(campApi+`/campaign/player/add/${currentCampaign}`, reqOptions2);
            getCampaignPlayers(currentCampaign)
            displayAllChars()
            if (!response2) {
                charError.textContent = `Failed to add ${chars[i].charName} to ${currentCampaign}`
            };
        });
    };

};

document.addEventListener("DOMContentLoaded", () => {
    getCampaignPlayers(currentCampaign)
    displayAllChars()
    backBtn.addEventListener("click", () => {
        sessionStorage.removeItem("displayed")
        sessionStorage.removeItem("campaign")
        window.history.go(-1)
    });
    backBtn.addEventListener("click", () => {
        window.history.go(-1)
    });
    seePlayersBtn.addEventListener("click", () => {
        displayAllChars()
        currentListSection.style.display = "none";
        charListSection.style.display = "flex";
    });
    seeCampBtn.addEventListener("click", () => {
        currentListSection.style.display = "flex";
        charListSection.style.display = "none";
    });
    noteBtn.addEventListener("click", () => {
        window.location.href = "../notes/notes.html"
    })
    signOutBtn.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "../signInScreen/index.html";
    });
});