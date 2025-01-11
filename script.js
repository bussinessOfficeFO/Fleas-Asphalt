document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-button");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".close-button");

  // Function to open modal
  const openModal = (productName, productPrice) => {
    const title = modal.querySelector("#modal-title");
    const price = modal.querySelector("#modal-price");

    // Update modal content dynamically
    title.textContent = `Order ${productName}`;
    price.textContent = `Price: ${productPrice}`;

    modal.classList.remove("hidden");
  };

  // Function to close modal
  const closeModal = () => {
    modal.classList.add("hidden");
  };

  // Close modal on click outside
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close modal on click of close button
  closeButton.addEventListener("click", closeModal);

  // Add event listeners to Buy Now buttons
  buyButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Button animation
      const buttonText = button.innerText;
      const productName = button
        .closest(".product")
        .querySelector("h3").textContent;
      const productPrice = button
        .closest(".product")
        .querySelector("p").textContent;

      button.innerText = "Loading...";
      button.style.backgroundColor = "#d84b39";
      button.style.transform = "scale(0.95)";

      setTimeout(() => {
        button.style.transform = "scale(1)";
        button.innerText = buttonText;

        // Open modal after animation with product info
        openModal(productName, productPrice);
      }, 400);
    });
  });
});
