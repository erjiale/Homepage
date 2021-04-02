
// Scrolling Into View
function scrollToHome() {
    var elem = document.getElementById('home-sect')
    elem.scrollIntoView({behavior:"smooth"});
}
function scrollToAbout() {
    var elem = document.getElementById('about-sect')
    elem.scrollIntoView({behavior:"smooth"});
}
function scrollToProjects() {
    var elem = document.getElementById('projects-sect')
    elem.scrollIntoView({behavior:"smooth"});
}

// Modals
window.onload = function() {
    var modal = document.getElementById('recipeFinder-modal');
    var openDiv = document.getElementById('openRecipeFinderModal');
    var span = document.getElementsByClassName('close')[0];
    
    openDiv.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}
