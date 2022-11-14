function signupSwitch() {
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("signup").classList.add("hidden");
}

function loginSwitch() {
    document.getElementById("signup").classList.remove("hidden");
    document.getElementById("login").classList.add("hidden");
}