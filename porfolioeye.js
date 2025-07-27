document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.getElementById("readingModeToggle");
    let html = document.documentElement;
    let nav = document.querySelector("nav");

    toggleButton.addEventListener("click", function () {
        if (html.classList.contains("reading-mode")) {
            html.classList.remove("reading-mode");
            html.style.backgroundImage = 'url("backgroundimage.jpg")'; // Restore background
            nav.style.backgroundColor = ""; // Reset to original background
            toggleButton.innerHTML = "😀"; // Eye mode off
        } else {
            html.classList.add("reading-mode");
            html.style.backgroundImage = "none"; // Remove background
            nav.style.backgroundColor = "#0a8680"; // Change nav color in reading mode
            nav.style.backgroundColor = ""; // Reset to original background
            toggleButton.innerHTML = "😄"; // Eye mode on
        }
    });
});
function showMore() {
    document.getElementById('p2').style.display = 'block';
    document.querySelector('.read-more').style.display = 'none';
}
