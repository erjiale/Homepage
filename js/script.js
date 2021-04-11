
document.addEventListener('DOMContentLoaded', () => {
    // Modals
    function projectModals() {
        var modal = document.getElementById('recipeFinder-modal');
        var openDiv = document.getElementById('openRecipeFinderModal');
        var span = document.getElementsByClassName('close')[0];

        openDiv.onclick = function () {
            modal.style.display = "block";
        }
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    projectModals();
})

// Scrolling Into View
function scrollToHome() {
    var elem = document.getElementById('home-sect')
    var menu_elem = document.getElementById("navbar");
    var checkBox = document.getElementById("check-button");
    menu_elem.classList.remove("open-toggle-menu");
    elem.scrollIntoView({ behavior: "smooth" });
    checkBox.classList.remove("checkedBox");
}
function scrollToAbout() {
    var elem = document.getElementById('about-sect')
    var menu_elem = document.getElementById("navbar");
    var checkBox = document.getElementById("check-button");
    menu_elem.classList.remove("open-toggle-menu");
    elem.scrollIntoView({ behavior: "smooth" });
    checkBox.classList.remove("checkedBox");
}
function scrollToProjects() {
    var elem = document.getElementById('projects-sect')
    var menu_elem = document.getElementById("navbar");
    var checkBox = document.getElementById("check-button");
    menu_elem.classList.remove("open-toggle-menu");
    elem.scrollIntoView({ behavior: "smooth" });
    checkBox.classList.remove("checkedBox");
}

// Header features
const changeBackground = () => {
    var navbar_elem = document.getElementById('navbar');
    window.scrollY >= 80 ? navbar_elem.classList.add('white-header') : navbar_elem.classList.remove('white-header');
};
window.addEventListener('scroll', changeBackground);



////// IF WHITE HEADER, then black BURGER, else white BURGER
//////
// Header burger menu
function onToggleMenu() {
    var checkBox = document.getElementById("check-button");
    var check = document.getElementById("check");
    var navbar_element = document.getElementById("navbar");
    var burger_menu = document.getElementById("menu-btn_burger");
    if (!check.checked) {
        checkBox.classList.add("checkedBox");
        navbar_element.classList.add("open-toggle-menu");
    }
    else {
        checkBox.classList.remove("checkedBox");
        if (window.scrollY >= 80) {
            navbar_element.classList.remove("open-toggle-menu");
            // burger_menu.classList.remove("white-header");
        }
        else {
            navbar_element.classList.remove("open-toggle-menu");
            // burger_menu.classList.remove("white-header");
        }
    }
}