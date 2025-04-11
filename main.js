document.addEventListener("DOMContentLoaded", function () {
  const user = "alexmahrou";
  const domain = "projected.xyz";
  const anchor = document.getElementById("contact-link");
  if (anchor) {
    anchor.href = `mailto:security@${domain}`;
    anchor.textContent = "Let’s connect";
  }

  const aboutLink = document.getElementById("about-link");
  if (aboutLink) {
    aboutLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = aboutLink.getAttribute("href");
      }, 200);
    });
  }

  const homeLink = document.getElementById("home-link");
  if (homeLink) {
    homeLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = homeLink.getAttribute("href");
      }, 200);
    });
  }
});
