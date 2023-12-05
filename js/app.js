import { getData } from "./getdata.js";
const html = document.documentElement;
const modeToggle = document.getElementById("dark-btn");
const userName = document.getElementById("user-name");
const gitLink = document.getElementById("git-link");
const userImg = document.getElementById("user-img");
const createData = document.getElementById("created-data");
const repos = document.getElementById("repos");
const flowers = document.getElementById("flowers");
const flowingEl = document.getElementById("flowing");
const locationEl = document.getElementById("location");
const gitHub = document.getElementById("github");
const twit = document.getElementById("twitter");
const form = document.querySelector("form");
let API = "https://api.github.com/users/AkhrorSoliev";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = form.search.value;
  API = "https://api.github.com/users/" + inputVal;
  getData(API)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
  getData(API);
});

getData(API);

function updateUI(data) {
  console.log(data);
  const {
    avatar_url,
    created_at,
    followers,
    following,
    public_repos,
    name,
    location,
    twitter_username,
    login,
    html_url,
  } = data;
  const creat = new Date(created_at).toDateString();
  userImg.src = avatar_url;
  userName.textContent = name;
  gitLink.textContent = `@${login}`;
  gitLink.href = html_url;
  createData.textContent = `Joined ${creat}`;
  repos.textContent = public_repos;
  flowers.textContent = followers;
  flowingEl.textContent = following;
  locationEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${location}`;
  gitHub.href = html_url;
  gitHub.innerHTML = `<i class="fa-brands fa-github"></i> ${html_url}`;
  twit.classList.remove("opacity-25");
  twit.href = `https://x.com/${twitter_username}?s=20`;
  twit.innerHTML = `<i class="fa-brands fa-twitter"></i> ${twitter_username}`;
}

modeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    modeToggle.innerHTML = `LIGHT <i class="fa-regular fa-sun"></i>`;
  } else {
    modeToggle.innerHTML = `DARK <i class="fa-solid fa-moon"></i>`;
  }
});
