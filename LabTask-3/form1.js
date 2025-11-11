document.getElementById('btn1').addEventListener('click', Test)

function Test() {
    let username = document.getElementById('username').value;
    let msg = document.getElementById('uError');
    let st = username[0];

    if (username == "") {
        msg.innerHTML = "username cannot be empty!";
        msg.style.color = "red";

    }
    else if (username.length <= 1) {
        msg.innerHTML = "username must contain at least two words!";
        msg.style.color = "red";


    }
    else if (!((st >= 'A' && st <= 'Z') || (st >= 'a' && st <= 'z'))) {
        msg.innerHTML = "username must start with a letter!";
        msg.style.color = "red";
    }

}