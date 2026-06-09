const themeBtn = document.getElementById("themeBtn");

// Check for saved theme preference or use system preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("darkMode");
const isDarkMode = savedTheme !== null ? savedTheme === "true" : prefersDark;

// Apply saved preference on load
if (isDarkMode) {
    document.body.classList.add("dark");
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        // Save the preference
        localStorage.setItem("darkMode", document.body.classList.contains("dark"));
    });
}
