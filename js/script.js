const mobileButton = document.getElementById("mobile-button");
const mainNav = document.getElementById("main-nav");
const mobileIcon = document.getElementById("mobile-icon");

function toggleBurger(){
    (mobileIcon.classList.contains("fa-bars")) ? mobileIcon.classList.replace("fa-bars", "fa-chevron-up") : mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
}

function toggleNav(){
    if(window.innerWidth >= 768) return; 
    mainNav.classList.toggle("display");
    document.body.classList.toggle("overflow");
    toggleBurger();
}

function resetNav(){
    mainNav.classList.remove("display");
    document.body.classList.remove("overflow");
    mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
}

mobileButton.addEventListener("click", toggleNav);

mainNav.addEventListener("click", function(event){
    if(event.target.hasAttribute("href")) toggleNav();
})

window.addEventListener("resize", function(){
    if(window.innerWidth >= 768) resetNav();
})

