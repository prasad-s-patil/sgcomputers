function goServices(){
    window.location.href="services.html";
}

function toggleDetails(id) {
    const details = document.getElementById(id);

    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('show');
}

function submitForm() {
    alert("Thank you! Your request has been received. We will contact you soon.");
}