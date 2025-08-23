document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll(".shortcut-btn");
	buttons.forEach((btn) => {
		btn.addEventListener("mouseenter", () => {
			const rotation = Math.random() * 10 - 5;
			const translateX = Math.random() * 10 - 5;
			const translateY = Math.random() * 10 - 5;
			const duration = (Math.random() * 0.3 + 0.2).toFixed(2);
			btn.style.transform = `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px) scale(1.05)`;
			btn.style.transition = `transform ${duration}s ease`;
		});
		btn.addEventListener("mouseleave", () => {
			btn.style.transform = "rotate(0deg) translate(0, 0) scale(1)";
		});
	});

	const themeToggleBtn = document.getElementById("theme-toggle");
	const body = document.body;

	const savedTheme = localStorage.getItem("theme");
	if (savedTheme === "dark") {
		body.classList.add("dark-mode");
	} else {
		body.classList.remove("dark-mode");
	}

	themeToggleBtn.addEventListener("click", () => {
		if (body.classList.contains("dark-mode")) {
			body.classList.remove("dark-mode");
			localStorage.setItem("theme", "light");
		} else {
			body.classList.add("dark-mode");
			localStorage.setItem("theme", "dark");
		}
	});
});
