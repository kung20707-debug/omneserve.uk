const pageName = document.body.dataset.page;
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");

if (pageName) {
  document.querySelectorAll(`[data-nav="${pageName}"]`).forEach((link) => {
    link.classList.add("is-active");
  });
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    const status = document.querySelector(".copy-status");
    try {
      await navigator.clipboard.writeText(value);
      if (status) status.textContent = `Copied: ${value}`;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1300);
    } catch (error) {
      if (status) status.textContent = value;
    }
  });
});

const printButton = document.querySelector("[data-print]");
if (printButton) {
  printButton.addEventListener("click", () => window.print());
}

const clearButton = document.querySelector("[data-clear]");
if (clearButton) {
  clearButton.addEventListener("click", () => {
    document.querySelectorAll(".worksheet input, .worksheet textarea").forEach((field) => {
      field.value = "";
    });
  });
}
