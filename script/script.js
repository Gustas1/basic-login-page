let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let conpassword = document.getElementById('conpassword');

let usernames = ["joe", "joebob", "bro", "scat"];

function getData() {
    user = username.value;
    email = email.value;
    pass = password.value;
    cpass = conpassword.value;

    for(let i = 0; i < usernames.length-1; i++) {
        if (user == usernames[i]) {
            document.getElementById('usererror').innerHTML = " | This username is already in use"
            return false;
        } else {
            document.getElementById('usererror').innerHTML = "";
        }
    }

    if (user == "") {
        document.getElementById('usererror').innerHTML = " | Username is not valid";
    } else if (user.length <= 2) {
        document.getElementById('usererror').innerHTML = " | Username must be longer than 2 characters";
    } else {
        document.getElementById('usererror').innerHTML = "";
    }


    if (pass == "") {
        document.getElementById('cpasserror').innerHTML = " | Please enter a password";
        return false;
    } else {
        document.getElementById('cpasserror').innerHTML = "";
    }

    if (pass != cpass) {
        document.getElementById('cpasserror').innerHTML = " | Passwords must match";
        return false;
    } else {
        document.getElementById('cpasserror').innerHTML = "";
    }

    console.log("work")
}

let j = 0;

function signin() {
    if (j % 2 == 0) {
        document.getElementById('main').style.display = "none";
        document.getElementById('sub').style.display = "flex";
    }
    if (j % 2 != 0) {
        document.getElementById('main').style.display = "flex";
        document.getElementById('sub').style.display = "none";
    }


    j++;
}

let i = 0;

function darkMode() {
    if (i % 2 == 0) {
        document.getElementById('circleBtn').style.marginLeft = "62%";
        swap("drkMode", "drkModeClassActive");
        swap("circleBtn", "circleBtnClassDark");
        swap("sign-up", "sign-up-class-drk")
        document.body.classList.toggle("bgdrk");
    }
    if (i % 2 != 0) {
        document.getElementById('circleBtn').style.marginLeft = "0%";
        swap("drkMode", "drkModeClassActive");
        swap("circleBtn", "circleBtnClassDark");
        swap("sign-up", "sign-up-class-drk")
        document.body.classList.toggle("bgdrk");
    }
    i++;
}

function swap(id, cls) {
    document.getElementById(id).classList.toggle(cls);
  }
