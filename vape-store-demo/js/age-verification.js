document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("ageGate");
  const confirmButton = document.getElementById("ageConfirm");
  if (!gate || !confirmButton) return;

  const accepted = localStorage.getItem("smokeStoreAgeVerified");
  if (accepted === "true") return;

  gate.classList.add("is-visible");
  gate.setAttribute("aria-hidden", "false");
  document.body.classList.add("nav-open");

  confirmButton.addEventListener("click", () => {
    localStorage.setItem("smokeStoreAgeVerified", "true");
    gate.classList.remove("is-visible");
    gate.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
  });
});
