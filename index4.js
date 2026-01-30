function showMessage() {
  alert("Thank you for your interest! 😊");
}

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀ Light"
    : "🌙 Dark";
});

document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".project-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {

      const targetId = this.getAttribute("data-target");
      const details = document.getElementById(targetId);

      if (!details) {
        console.error("Project details not found!");
        return;
      }

      if (details.style.display === "block") {
        details.style.display = "none";
        this.textContent = "View Details";
      } else {
        details.style.display = "block";
        this.textContent = "Hide Details";
      }
    });
  });

});