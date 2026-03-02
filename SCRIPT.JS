function toggleGallery() {
    const gallery = document.querySelector(".gallery-full");
    const button = document.querySelector(".view-gallery-btn");

    if (gallery.style.display === "none" || gallery.style.display === "") {
        gallery.style.display = "grid";
        button.innerText = "Hide Photos";
    } else {
        gallery.style.display = "none";
        button.innerText = "View More Photos";
    }
}

function toggleCV() {
    const cv = document.querySelector(".cv-full");
    const button = document.querySelector(".view-cv-btn");

    if (cv.style.display === "none" || cv.style.display === "") {
        cv.style.display = "block";
        button.innerText = "Hide CV";
    } else {
        cv.style.display = "none";
        button.innerText = "View CV";
    }
}

console.log("Welcome to Yakubu David's Academic Portfolio 🚀 - SCRIPT.JS:27");