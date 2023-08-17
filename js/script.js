window.onload = () => {
    document.addEventListener('DOMContentLoaded', () => {
        // Modals
        function projectModals() {
            let modal = document.getElementById('recipeFinder-modal');
            let openDiv = document.getElementById('openRecipeFinderModal');
            let span = document.getElementsByClassName('close')[0];

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
};

// Scrolling Into View
scrollToHome = () => {
    let elem = document.getElementById('home-sect')
    let menu_elem = document.getElementById("navbar");
    let checkBox = document.getElementById("check-button");
    menu_elem.classList.remove("open-toggle-menu");
    elem.scrollIntoView({ behavior: "smooth" });
    checkBox.classList.remove("checkedBox");
};
scrollToAbout = () => {
    let elem2 = document.getElementById('about-sect')
    let menu_elem2 = document.getElementById("navbar");
    let checkBox2 = document.getElementById("check-button");
    menu_elem2.classList.remove("open-toggle-menu");
    debugger
    elem2.scrollIntoView({ behavior: "smooth" });
    checkBox2.classList.remove("checkedBox");
};
scrollToProjects = () => {
    let elem = document.getElementById('projects-sect')
    let menu_elem = document.getElementById("navbar");
    let checkBox = document.getElementById("check-button");
    menu_elem.classList.remove("open-toggle-menu");
    elem.scrollIntoView({ behavior: "smooth" });
    checkBox.classList.remove("checkedBox");
};

// Header features
const changeHeaderBackground = () => {
    let navbar_elem = document.getElementById('navbar');
    let header_logo = document.getElementById('header-logo');

    if (window.scrollY >= 80) {
        navbar_elem.classList.add('white-header');
        header_logo.src = "./img/logos/jia-logo-black.png";
    }
    else {
        navbar_elem.classList.remove('white-header');
        header_logo.src = "./img/logos/jia-logo-white.png";
    }
};
window.addEventListener('scroll', changeHeaderBackground);

// Header burger menu
function onToggleMenu() {
    let checkBox = document.getElementById("check-button");
    let check = document.getElementById("check");
    let navbar_element = document.getElementById("navbar");
    let burger_menu = document.getElementById("menu-btn_burger");
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