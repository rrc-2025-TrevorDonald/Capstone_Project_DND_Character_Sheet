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

const loginEmail = sessionStorage.getItem("user");
const auth = sessionStorage.getItem("auth");

const campApi = "http://localhost:3000/api/v1/campaings";
const charApi = "http://localhost:3000/api/v1/chars/all";

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

    const response = await fetch(campApi + `/campaign/${selectedCamp}`, reqOptions1);
    console.log(response)
    
    const camps = await response.json();
    console.log(camps)

    const players = camps.players;

    if (!players) {
        console.log("No players")
    }

    for (let i = 0; i < players.length; i++) {
        const listedChar = document.createElement("li")
        listedChar.innerHTML = `${players[i].charName}, ${players[i].email}<button id="${players[i].charName}Button">Select</button>`;
        currentList.appendChild(listedChar);

        const selectCharButton = document.getElementById(`${players[i].charName}Button`);
        selectCharButton.addEventListener("click", () => {
            // Need to add
        });
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

            const response2 = await fetch(campApi+`/campaign/player/add/${camp}`, reqOptions2);
            if (!response2) {
                charError.textContent = `Failed to add ${chars[i].charName} to ${camp}`
            };
        });
    };

    sessionStorage.setItem("displayed", true)
};