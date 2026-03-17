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

function submitForm() {
    alert("Thank you! Your request has been received. We will contact you soon.");
}