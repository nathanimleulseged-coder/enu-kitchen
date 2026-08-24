// Switches between the "Traditional Foods" and "Beverages" tabs
// in the Menu section.
function openMenu(evt, categoryName) {
    // 1. Hide all menu tab panels
    const menuContent = document.getElementsByClassName("menu-content");
    for (let i = 0; i < menuContent.length; i++) {
        menuContent[i].classList.remove("active");
    }

    // 2. Remove the 'active' styling from all tab buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // 3. Show the requested tab panel, and light up the clicked button
    document.getElementById(categoryName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
