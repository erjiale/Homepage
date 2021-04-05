
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
    console.log("home")
    var elem = document.getElementById('home-sect')
    var menu_elem = document.getElementById("navbar");
    var checkBox = document.getElementById("checkBtn");
    menu_elem.classList.remove("active-menu");
    elem.scrollIntoView({ behavior: "smooth" });
    checkBox.classList.remove("checkedBox");
}
function scrollToAbout() {
    var elem = document.getElementById('about-sect')
    var menu_elem = document.getElementById("navbar");
    var checkBox = document.getElementById("checkBtn");
    menu_elem.classList.remove("active-menu");
    elem.scrollIntoView({ behavior: "smooth" });
    checkBox.classList.remove("checkedBox");
}
function scrollToProjects() {
    var elem = document.getElementById('projects-sect')
    var menu_elem = document.getElementById("navbar");
    var checkBox = document.getElementById("checkBtn");
    menu_elem.classList.remove("active-menu");
    elem.scrollIntoView({ behavior: "smooth" });
    checkBox.classList.remove("checkedBox");
}

// Header features
const changeBackground = () => {
    var navbar_elem = document.getElementById('navbar');
    window.scrollY >= 80 ? navbar_elem.classList.add('active') : navbar_elem.classList.remove('active');
};
window.addEventListener('scroll', changeBackground);

// Header burger menu
function onToggleMenu() {
    var checkBox = document.getElementById("checkBtn");
    var check = document.getElementById("check");
    var navbar_element = document.getElementById("navbar");
    if (!check.checked) {
        checkBox.classList.add("checkedBox");
        navbar_element.classList.add("active-menu", "active");
    }
    else {
        checkBox.classList.remove("checkedBox");
        if (window.scrollY >= 80) {
            navbar_element.classList.remove("active-menu");
        }
        else {
            navbar_element.classList.remove("active-menu", "active");
        }
    }
}