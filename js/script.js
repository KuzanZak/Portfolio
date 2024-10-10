// Get references
const mobileButton = document.getElementById("mobile-button");
const mainNav = document.getElementById("main-nav");
const mobileIcon = document.getElementById("mobile-icon");

// Toggle between burger (fa-bars) and close (fa-chevron-up) icons.
function toggleBurger(){
    (mobileIcon.classList.contains("fa-bars")) ? mobileIcon.classList.replace("fa-bars", "fa-chevron-up") : mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
}

// Show/hide mobile navigation and toggle body scroll.
function toggleNav(){
    if(window.innerWidth >= 768) return; 
    mainNav.classList.toggle("display");
    document.body.classList.toggle("overflow");
    toggleBurger();
}

// Reset navigation to default state (menu hidden, icon as burger).
function resetNav(){
    mainNav.classList.remove("display");
    document.body.classList.remove("overflow");
    mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
}

// Open/close mobile menu on button click.  
mobileButton.addEventListener("click", toggleNav);

// Close menu when a link inside the nav is clicked.    
mainNav.addEventListener("click", function(event){
    if(event.target.hasAttribute("href")) toggleNav();
})

// Reset nav when window is resized to 768px or wider.
window.addEventListener("resize", function(){
    if(window.innerWidth >= 768) resetNav();
})