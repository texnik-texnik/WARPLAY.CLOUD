const cardsContainer = document.querySelector(".cards-container");
const handleCardClick = (evt) => {
  const cardContainer = evt.target.closest(".cards-container");
  for (const card of cardContainer.children) {
    card.classList.remove("card-selected");
  }

  const card = evt.target.closest(".card");
  card.classList.toggle("card-selected");

  const planPrice = {
    hourlyPayment: 40,
    max: 2999,
    min: 1500
  }
  localStorage.setItem("podpiska", JSON.stringify(
    {
      name: card.dataset.plan,
      price: planPrice[card.dataset.plan]
    }))
}


for (const card of cardsContainer.children) {
  card.addEventListener("click", handleCardClick);
}