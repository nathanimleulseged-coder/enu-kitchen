function openMenu(evt, categoryName) {
    // 1. Hide all menu tab panels
    const menuContent = document.getElementsByClassName("menu-content");
    for (let i = 0; i < menuContent.length; i++) {
        menuContent[i].style.display = "none";
        menuContent[i].classList.remove("active");
    }

    // 2. Remove the 'active' class styling from all buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // 3. Show the requested tab panel, and light up the clicked button
    document.getElementById(categoryName).style.display = "block";
    document.getElementById(categoryName).classList.add("active");
    evt.currentTarget.classList.add("active");
}