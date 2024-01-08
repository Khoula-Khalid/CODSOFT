function downloadResume() {
    document.getElementById('resumeLink').click();
}

// JavaScript function to set the active link
document.addEventListener("DOMContentLoaded", function () {
    //'active' class for the Home link by default
    const homeLink = document.querySelector('header nav ul li a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

function setActiveLink(sectionId) {
    // Remove 'active' class from all navigation links
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    //'active' class to the clicked link
    const clickedLink = document.querySelector(`header nav ul li a[href="#${sectionId}"]`);
    if (clickedLink) {
        clickedLink.classList.add('active');
    }
}