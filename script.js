var isDarkMode = localStorage.getItem("IsDark") || false;
var cookieOK = localStorage.getItem("CookieOK");

if(!cookieOK) {
    if(confirm("Do you want to save cookies?")) {
        cookieOK = true;
        localStorage.setItem("CookieOK", true);
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
    SaveTheme();
}

function SaveTheme() {
    if(!cookieOK) return "Cookie is not allowed!";
    localStorage.setItem("IsDark", isDarkMode);
}
