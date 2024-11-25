document.addEventListener("DOMContentLoaded", () => {
    console.log("Skill Swap Platform is ready!");
});

// JavaScript for Modal
document.getElementById("openModal").onclick = function() {
    document.getElementById("myModal").style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Email is required!");
    } else {
        alert("Form submitted successfully!");
    }
}