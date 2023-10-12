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
    if(cookieOK) localStorage.setItem("IsDark", isDarkMode);
}

function UpdatePageTheme() {
    console.log(isDarkMode);
    if(isDarkMode) {
        console.log(isDarkMode);
        console.log(typeof(isDarkMode));
        document.documentElement.style.setProperty('--spp-white', 'black');
        document.documentElement.style.setProperty('--spp-gray', 'white');
        document.documentElement.style.setProperty('--spp-red', 'darkred');
        document.documentElement.style.setProperty('--spp-beige', 'darkgoldenrod');
        document.documentElement.style.setProperty('--spp-blue', 'indigo');
    } else {
        console.log("LIGHT");
        document.documentElement.style.setProperty('--spp-white', '#F5F4F5');
        document.documentElement.style.setProperty('--spp-gray', '#98A8B0');
        document.documentElement.style.setProperty('--spp-red', '#EE4C27');
        document.documentElement.style.setProperty('--spp-beige', '#D08B58');
        document.documentElement.style.setProperty('--spp-blue', '#10273B');
    }
}