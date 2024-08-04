
var users = [];

function addUsername(){
    event.preventDefault();

    let usernames = document.getElementById('username');
    let username = usernames.value.trim();
    
    if (!username) {
        document.getElementById('usernameError').innerHTML = "Username is required.";
        return;
    }

    document.getElementById('usernameError').innerHTML = "";

    users.push(username);
    usernames.value = "";
    console.log(users);
}

function removeLastUsername() {
    if (users.length > 0) {
        users.pop();
        console.log(users);
    } else {
        console.log("No users to remove.");
    }
}

function removeFirstUsername() {
    if (users.length > 0) {
        users.shift();
        console.log(users);
    } else {
        console.log("No users to remove.");
    }
}