const backBtn = document.getElementById("backBtn");
const signOutBtn = document.getElementById("signOutBtn");

const saveBtn = document.getElementById("saveBtn");
const seeCampBtn = document.getElementById("seeCampBtn");

const notesText = document.getElementById("notesText");

const auth = sessionStorage.getItem("auth");
const currentCampaign = sessionStorage.getItem("campaign")

const campApi = "http://localhost:3000/api/v1/campaigns/campaign";

const saveNotes = async (camp) => {
    const reqOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        body: JSON.stringify({
            notes: notesText.value
        })
    };

    await fetch(campApi + `/${camp}`, reqOptions);
    console.log("saved")
};

const displayNotes = async (camp) => {
    const reqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
        }
    };

    const response = await fetch(campApi + `/${camp}`, reqOptions);
    const campaign = await response.json();

    notesText.value = campaign.notes
    console.log(campaign)
};

document.addEventListener("DOMContentLoaded", () => {
    displayNotes(currentCampaign)
    backBtn.addEventListener("click", () => {
        window.history.go(-1)
    });
    seeCampBtn.addEventListener("click", () => {
        window.location.href = "../campaignScreen/campaignScreen.html"
    });
    saveBtn.addEventListener("click", () => {
        saveNotes(currentCampaign)
    })
    signOutBtn.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "../signInScreen/index.html";
    });
})