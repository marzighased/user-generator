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

        userImg.src = user.picture.large;
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userEmail.textContent = user.email;
        userLocation.textContent = `${user.location.city}, ${user.location.country}`;
    }   catch (error) {
        userName.textContent = "Error loading user";
        console.error("Error fetching user:", error);
    }

}

const loader = document.getElementById("loader");

function showLoader() {
    loader.classList.remove("hidden");
    userImg.classList.add("hidden");
    userName.classList.add("hidden");
    userEmail.classList.add("hidden");
    userLocation.classList.add("hidden");
    newUserBtn.classList.add("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
    userImg.classList.remove("hidden");
    userName.classList.remove("hidden");
    userEmail.classList.remove("hidden");
    userLocation.classList.remove("hidden");
    newUserBtn.classList.remove("hidden");
}

window.addEventListener("DOMContentLoaded", fetchUser);
newUserBtn.addEventListener("click", fetchUser);



