const userImg = document.getElementById("user-img");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userLocation = document.getElementById("user-location");
const newUserBtn = document.getElementById("new-user-btn");

async function fetchUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];
    }

}

