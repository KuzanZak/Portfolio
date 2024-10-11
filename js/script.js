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

// Save form data to LocalStorage
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Store the form data in LocalStorage as a stringified JSON object
    localStorage.setItem('contact-infos', JSON.stringify({ name, phone, email, message }));
    alert("Données sauvegardées");
});

// Retrieve data from LocalStorage
const savedData = JSON.parse(localStorage.getItem('contact-infos'));
console.log(savedData);