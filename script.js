var isDarkMode = localStorage.getItem("IsDark") || false;
var cookieOK = localStorage.getItem("CookieOK");

UpdatePageTheme();

if(!cookieOK) {
    if(confirm("Do you want to save cookies?")) {
        cookieOK = true;
        localStorage.setItem("CookieOK", true);
        UpdatePageTheme();
    }
}

function ClearCookies() {
    localStorage.clear();
}

function GetTheme() {
    return isDarkMode;
}

function ToggleTheme() {
    isDarkMode = !isDarkMode;
    UpdatePageTheme();
    SaveTheme();
}

function SaveTheme() {
    if(!cookieOK) return "Cookie is not allowed!";
    localStorage.setItem("IsDark", isDarkMode);
}

function UpdatePageTheme() {
    document.documentElement.style.setProperty('--spp-white', isDarkMode ? 'black' : '#F5F4F5');
    document.documentElement.style.setProperty('--spp-gray', isDarkMode ? 'white' : '#98A8B0');
    document.documentElement.style.setProperty('--spp-red', isDarkMode ? 'darkred' : '#EE4C27');
    document.documentElement.style.setProperty('--spp-beige', isDarkMode ? 'darkgoldenrod' : '#D08B58');
    document.documentElement.style.setProperty('--spp-blue', isDarkMode ? 'indigo' : '#10273B');
}