(function(){
    console.log("%cScript running", "color: red; font-size: 25px;");
    
    const rootElement = document.documentElement;

    // ! Dark mode toggle

    const toggleDarkMode = document.getElementById("dark-mode-toggle");
    const toggleDarkModeIcon = document.getElementById("dark-mode-toggle--icon");
    const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

    if (theme === "dark") {
        toggleDarkModeIcon.className = "icon-sun-o";
    } else if (theme === "light") {
        toggleDarkModeIcon.className = "icon-moon-o";
    } else if (userPrefers === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        toggleDarkModeIcon.className = "icon-sun-o";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        toggleDarkModeIcon.className = "icon-moon-o";
    }

    toggleDarkMode.addEventListener("click", () => {
        let currentMode = document.documentElement.getAttribute('data-theme');
        if (currentMode === "dark") {
            document.documentElement.setAttribute('data-theme', 'light');
            window.localStorage.setItem('theme', 'light');
            toggleDarkModeIcon.className = "icon-moon-o";
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            window.localStorage.setItem('theme', 'dark');
            toggleDarkModeIcon.className = "icon-sun-o";
        }
    });

})();
