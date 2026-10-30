
// Welcome message in browser console
console.log("Welcome to Rohan Mobile Accessories!");

// Highlight current page in navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#00d4ff";
    }
});
