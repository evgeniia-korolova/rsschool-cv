document.addEventListener("DOMContentLoaded", () => {
	const burgerBtn = document.querySelector(".burger-btn");
	const hamSvg = document.querySelector(".ham");
	const menu = document.querySelector(".menu");
	const menuLinks = document.querySelectorAll(".menu-link");
	const body = document.body;

	const themeBtn = document.getElementById("theme-toggle");
	const themeStorageKey = "cv-theme";

	const toggleMenu = () => {
		const isOpen = menu.classList.toggle("menu-open");
		hamSvg.classList.toggle("active-ham", isOpen);

		body.style.overflow = isOpen ? "hidden" : "";

		burgerBtn.setAttribute(
			"aria-expanded",
			isOpen ? "true" : "false",
		);
	};

	burgerBtn.addEventListener("click", toggleMenu);

	menuLinks.forEach((link) => {
		link.addEventListener("click", () => {
			menuLinks.forEach((item) =>
				item.classList.remove("link-active"),
			);
			link.classList.add("link-active");
			if (menu.classList.contains("menu-open")) {
				toggleMenu();
			}
		});
	});

	const getInitialTheme = () => {
		const savedTheme = localStorage.getItem(themeStorageKey);
		if (savedTheme) return savedTheme;

		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		return prefersDark ? "dark" : "light";
	};

	const applyTheme = (theme) => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem(themeStorageKey, theme);

		themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
	};

	const initialTheme = getInitialTheme();
	applyTheme(initialTheme);

	themeBtn.addEventListener("click", () => {
		const currentTheme =
			document.documentElement.getAttribute("data-theme");
		const newTheme = currentTheme === "dark" ? "light" : "dark";
		applyTheme(newTheme);
	});
});
