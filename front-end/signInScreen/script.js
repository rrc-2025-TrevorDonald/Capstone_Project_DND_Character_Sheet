// Login variables
const loginForm = document.getElementById("loginForm");
const login = document.getElementById("login");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const createAccountBtn = document.getElementById("createAccountBtn");

// Create variables
const createForm = document.getElementById("createForm");
const create = document.getElementById("create");
const createEmail = document.getElementById("createEmail");
const createPassword = document.getElementById("createPassword");
const createBtn = document.getElementById("createBtn");
const completeMessage = document.getElementById("completeMessage");

const userApi = "http://localhost:3000/api/v1/users"

const completeCreate = async () => {
    completeMessage.style.display = "block";
    await delay(7500);
    completeMessage.style.display = "none";
    create.style.display = "none";
    login.style.display = "flex";
}

const sendLogin = async () => {
    const reqOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            email: loginEmail.value,
            password: loginPassword.value
        }
    };

    const response = await fetch(userApi, reqOptions);
    const signIn = await response.json();

    sessionStorage.setItem("user", signIn.email);
    sessionStorage.setItem("auth", signIn.idToken);
};

const sendCreate = async () => {
    const reqOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            email: createEmail.value,
            password: createPassword.value
        }
    };

    const response = await fetch(userApi + "/new", reqOptions);

    console.log(`User ${response.email} has been created`);
}

document.addEventListener("DOMContentLoaded", () => {
    createAccountBtn.addEventListener("click", () =>{
        login.style.display = "none";
        create.style.display = "flex";
    });
});