// Select the <nav> element in the document
const nav = document.querySelector("nav");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    // Toggle the "sticky" class based on the scroll position
    nav.classList.toggle("sticky", this.window.scrollY > 0);
});
