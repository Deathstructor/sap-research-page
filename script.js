var isDarkMode = localStorage.getItem("IsDark") || "false";
var cookieOK = localStorage.getItem("CookieOK");

UpdatePageTheme();

if(!cookieOK) {
    if(confirm("Do you want to save cookies?")) {
        cookieOK = true;
        localStorage.setItem("CookieOK", "true");
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
    isDarkMode = isDarkMode == "true" ? "false" : "true";
    UpdatePageTheme();
    SaveTheme();
}

function SaveTheme() {
    if(cookieOK) localStorage.setItem("IsDark", isDarkMode);
}

function UpdatePageTheme() {
    document.documentElement.style.setProperty('--spp-white', isDarkMode == "true" ? 'black' : '#F5F4F5');
    document.documentElement.style.setProperty('--spp-gray', isDarkMode == "true" ? 'white' : '#98A8B0');
    document.documentElement.style.setProperty('--spp-red', isDarkMode == "true" ? 'darkred' : '#EE4C27');
    document.documentElement.style.setProperty('--spp-beige', isDarkMode == "true" ? 'darkgoldenrod' : '#D08B58');
    document.documentElement.style.setProperty('--spp-blue', isDarkMode == "true" ? 'indigo' : '#10273B');
}