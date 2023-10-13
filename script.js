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
    document.documentElement.style.setProperty('--spp-white', isDarkMode == "true" ? '#3b3a3b' : '#F5F4F5');
    document.documentElement.style.setProperty('--spp-gray', isDarkMode == "true" ? '#F5F4F5' : '#888880');
    document.documentElement.style.setProperty('--spp-red', isDarkMode == "true" ? '#11b3d8' : '#EE4C27');
    document.documentElement.style.setProperty('--spp-beige', isDarkMode == "true" ? '#2f74a7' : '#D08B58');
    document.documentElement.style.setProperty('--spp-blue', isDarkMode == "true" ? '#10273B' : '#efd8c4');
}