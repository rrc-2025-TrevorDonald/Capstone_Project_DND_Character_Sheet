// Login variables
const loginForm = document.getElementById("loginForm");
const login = document.getElementById("login");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const createAccountBtn = document.getElementById("createAccountBtn");
const loginError = document.getElementById("loginError");

// Create variables
const createForm = document.getElementById("createForm");
const create = document.getElementById("create");
const createH2 = document.getElementById("createH2");
const labelEmail = document.getElementById("labelEmail");
const createEmail = document.getElementById("createEmail");
const labelPassword = document.getElementById("labelPassword");
const createPassword = document.getElementById("createPassword");
const backBtn = document.getElementById("backBtn");
const createBtn = document.getElementById("createBtn");
const createError = document.getElementById("createError");
const completeMessage = document.getElementById("completeMessage");

const userApi = "http://localhost:3000/api/v1/users"

const completeCreate = async () => {
    createH2.style.display = "none";
    labelEmail.style.display = "none";
    createEmail.style.display = "none";
    labelPassword.style.display = "none";
    createPassword.style.display = "none";
    createBtn.style.display = "none"
    backBtn.style.display = "none"
    completeMessage.style.display = "block";
    setTimeout(() => {
        completeMessage.style.display = "none";
        createH2.style.display = "block";
        labelEmail.style.display = "block";
        createEmail.style.display = "block";
        labelPassword.style.display = "block";
        createPassword.style.display = "block";
        createBtn.style.display = "block"
        create.style.display = "none";
        login.style.display = "flex";
    }, 3000);
};

const removeErrorMessages = () => {
    const errorMessages = document.querySelectorAll(".errorMessage")
    for (const el of errorMessages){
        el.textContent = ""
    };
};

const sendLogin = async () => {
    try {
        removeErrorMessages();
        const reqOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: loginEmail.value,
                password: loginPassword.value
            })
        };

        const response = await fetch(userApi, reqOptions);
        const signIn = await response.json();

        if (signIn.error) {
            const strippedError = signIn.error.split("Body:").splice(1);
            loginError.textContent = strippedError.shift(1);
        } else {
            sessionStorage.setItem("user", signIn.email);
            sessionStorage.setItem("auth", signIn.idToken);
            window.location.href = "../mainScreen/mainScreen.html"
        }
    } catch(error) {
        loginError.textContent = error.message
    }
};

const sendCreate = async () => {
    removeErrorMessages()
    const reqOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: createEmail.value,
            password: createPassword.value
        })
    };

    const response = await fetch(userApi + "/new", reqOptions);
    const createUser = await response.json();

    if (createUser.error) {
        const strippedError = createUser.error.split("Body:").splice(1);
        createError.textContent = strippedError.shift(1);
    } else {
        completeCreate();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createAccountBtn.addEventListener("click", () =>{
        removeErrorMessages()
        login.style.display = "none";
        create.style.display = "flex";
    });

    loginBtn.addEventListener("click", () => {
        sendLogin()
    });
    backBtn.addEventListener("click", () => {
        removeErrorMessages()
        login.style.display = "flex";
        create.style.display = "none";
    });
    createBtn.addEventListener("click", () =>{
        sendCreate()
    })
    document.addEventListener("submit", (event) => {
        event.preventDefault()
    })
});