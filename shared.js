const backdrop = document.querySelector(".backdrop");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modal = document.querySelector(".modal");
const noButton = document.querySelector(".modal__action--negative");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

noButton.addEventListener("click", function () {
  backdrop.style.display = "none";
  modal.style.display = "none";
});
