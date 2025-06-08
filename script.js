
document.addEventListener("DOMContentLoaded", function () {
    const registermodal = document.getElementById("registermodal");
    const registerbtn = document.getElementById("registerlink");
    const registerspan = document.getElementsByClassName("registerclose")[0];

    const loginmodal = document.getElementById("loginmodal");
    const loginbtn = document.getElementById("loginlink");
    const loginspan = document.getElementsByClassName("loginclose")[0];

    const registerlink = document.getElementById("registerlink");
    const loginlink = document.getElementById("loginlink");
    const userlogout = document.getElementById("userlogout");
    const userdisplay = document.getElementById("userdisplay");

    registerbtn.onclick = function () {
        registermodal.style.display = "block";
    };
    loginbtn.onclick = function () {
        loginmodal.style.display = "block";
    };

    registerspan.onclick = function () {
        registermodal.style.display = "none";
        document.querySelector("#registermodal form").reset();
    };
    loginspan.onclick = function () {
        loginmodal.style.display = "none";
        document.querySelector("#loginmodal form").reset();
    };

    window.onclick = function (event) {
        if (event.target == registermodal) {
            registermodal.style.display = "none";
            document.querySelector("#registermodal form").reset();
        }
        if (event.target == loginmodal) {
            loginmodal.style.display = "none";
            document.querySelector("#loginmodal form").reset();
        }
    };

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("username");

    if (isLoggedIn === "true" && storedUser) {
        registerlink.style.display = "none";
        loginlink.style.display = "none";
        userlogout.style.display = "inline-block";
        userdisplay.style.display = "inline-block";
        userdisplay.innerHTML = storedUser;
    }



});

function register() {
    const username = document.getElementById("registername").value;
    const password = document.getElementById("registerpassword").value;
    const registermodal = document.getElementById("registermodal");

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("User registered!");
        registermodal.style.display = "none";
        document.querySelector("#registermodal form").reset();
    } else {
        alert("Please enter both username and password.");
    }
}

function login() {
    const username = document.getElementById("loginname").value;
    const password = document.getElementById("loginpassword").value;

    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    const loginmodal = document.getElementById("loginmodal");
    const registerlink = document.getElementById("registerlink");
    const loginlink = document.getElementById("loginlink");
    const userlogout = document.getElementById("userlogout");
    const userdisplay = document.getElementById("userdisplay");

    if (username === storedUser && password === storedPass) {
        alert("Login successful!");
        loginmodal.style.display = "none";
        localStorage.setItem("isLoggedIn", "true");

        registerlink.style.display = "none";
        loginlink.style.display = "none";
        userlogout.style.display = "inline-block";
        userdisplay.style.display = "inline-block";
        userdisplay.innerHTML = username;
        document.querySelector("#loginmodal form").reset();
    } else {
        alert("Wrong username or password.");
    }
}

function logout() {
    localStorage.setItem("isLoggedIn", "false");

    document.getElementById("userlogout").style.display = "none";
    document.getElementById("userdisplay").style.display = "none";
    document.getElementById("registerlink").style.display = "inline-block";
    document.getElementById("loginlink").style.display = "inline-block";

    alert("Logged out successfully!");
}

function contact() {
    document.getElementById("home").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("deleteuserbutton").style.display = "none";

}

function home() {
    document.getElementById("contact").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("deleteuserbutton").style.display = "none";

}


function changeCredentials() {
    const currentPassword = document.getElementById("currentpassword").value;
    const newUsername = document.getElementById("newusername").value;
    const newPassword = document.getElementById("newpassword").value;

    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (currentPassword !== storedPass) {
        alert("Current password is incorrect.");
        return;
    }

    if (!newUsername || !newPassword) {
        alert("Please fill in both new username and password.");
        return;
    }


    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);


    document.getElementById("userdisplay").innerHTML = newUsername;
    document.getElementById("changepassmodal").style.display = "none";
    alert("Credentials updated successfully!");
}


function deleteUser() {


    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("isLoggedIn");

    document.getElementById("userlogout").style.display = "none";
    document.getElementById("userdisplay").style.display = "none";
    document.getElementById("registerlink").style.display = "inline-block";
    document.getElementById("loginlink").style.display = "inline-block";

    alert("User data deleted successfully!");

    document.getElementById("contact").style.display = "none";
    document.getElementById("userdisplay").style.display = "none";
    document.getElementById("deleteuserbutton").style.display = "none";
    document.getElementById("home").style.display = "block";

}


function confirmdelete() {
    const confirmDelete = confirm("Are you sure you want to delete all user data?");
    if (confirmDelete) {
        deleteUser();
    }
}

function profile() {
    document.getElementById("home").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("deleteuserbutton").style.display = "block";
}
