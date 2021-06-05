// Store the theme
let darkTheme = localStorage.getItem("darkTheme");
const themeToggle = document.querySelector("#themeButton");

// Apply Dark theme
const enableDark = () => {
  document.body.classList.add("darktheme");
  localStorage.setItem("darkTheme", "enabled");
  themeToggle.innerHTML = `<i id="themeButton__icon" data-ion="sun"></i>`;
  ion.replace();
};

// Remove Dark theme
const disableDark = () => {
  document.body.classList.remove("darktheme");
  localStorage.setItem("darkTheme", null);
  themeToggle.innerHTML = `<i id="themeButton__icon" data-ion="moon"></i>`;
  ion.replace();
};

//Toggle theme
if (darkTheme === "enabled") {
  enableDark();
} else {
  disableDark();
}

themeToggle.addEventListener("click", () => {
  darkTheme = localStorage.getItem("darkTheme");
  if (darkTheme !== "enabled") {
    enableDark();
  } else {
    disableDark();
  }
});

// Theme accordint the hour

/*
const today = new Date();

if (hour >= 19 || hour < 5) {
    enableDark();
} else {
    disableDark();
}
*/
