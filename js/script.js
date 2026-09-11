const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
	const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

	menuToggle.setAttribute("aria-expanded", String(!isOpen));
	menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
	navMenu.classList.toggle("hidden", isOpen);
});
