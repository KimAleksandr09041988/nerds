const modal = document.querySelector(".modal");
const contactsBtn = document.querySelector(".contacts__btn");
const closeBtn = document.querySelector(".modal__btn-close")

contactsBtn.addEventListener("click", () => {
  modal.classList.add("modal_active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal_active")
});

modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    modal.classList.remove("modal_active");
  }
  modal.removeEventListener("click", () => {
    modal.classList.remove("modal_active");
  });
});
