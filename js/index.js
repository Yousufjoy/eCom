//This code is for Calculatin total

document.getElementById("card1").addEventListener("click", function () {
  const price = cardPrice("card1-price");
  const total = totalPrice("total-price");

  const fullTotalPrice = price + total;
  calculate("total-price", fullTotalPrice);

  // This function is for creating list of items in the cart!!!

  addItems("selected-items", "item1");
});

document.getElementById("card2").addEventListener("click", function () {
  const price = cardPrice("card2-price");
  const total = totalPrice("total-price");

  const fullTotalPrice = price + total;
  calculate("total-price", fullTotalPrice);

  // This function is for creating list of items in the cart!!!

  addItems("selected-items", "item2");
});

document.getElementById("card3").addEventListener("click", function () {
  const price = cardPrice("card3-price");
  const total = totalPrice("total-price");

  const fullTotalPrice = price + total;
  calculate("total-price", fullTotalPrice);

  // This function is for creating list of items in the cart!!!

  addItems("selected-items", "item3");
});

document.getElementById("card4").addEventListener("click", function () {
  const price = cardPrice("card4-price");
  const total = totalPrice("total-price");

  const fullTotalPrice = price + total;
  calculate("total-price", fullTotalPrice);

  // This function is for creating list of items in the cart!!!

  addItems("selected-items", "item4");
});

document.getElementById("card5").addEventListener("click", function () {
  const price = cardPrice("card5-price");
  const total = totalPrice("total-price");

  const fullTotalPrice = price + total;
  calculate("total-price", fullTotalPrice);

  // This function is for creating list of items in the cart!!!

  addItems("selected-items", "item5");
});

document.getElementById("card6").addEventListener("click", function () {
  const price = cardPrice("card6-price");
  const total = totalPrice("total-price");

  const fullTotalPrice = price + total;
  calculate("total-price", fullTotalPrice);

  // This function is for creating list of items in the cart!!!

  addItems("selected-items", "item6");
});

//This code is for Calculatin total Ends

// Coupon button enable and disable
document
  .getElementById("coupon-confirm")
  .addEventListener("keyup", function (event) {
    const userCoupon = event.target.value;
    const applyBtn = document.getElementById("apply-btn");

    if (userCoupon === "SELL200") {
      applyBtn.removeAttribute("disabled");
    } else {
      applyBtn.setAttribute("disabled", true);
    }
  });

// GoBack button functionality When modal button go back clicks these variables are resets!
document.getElementById("go-back").addEventListener("click", function () {
  const totalP = document.getElementById("total-price");
  const discountP = document.getElementById("discountItem");
  const selectedItemsElement = document.getElementById("selected-items");

  selectedItemsElement.innerHTML = ""; // Clears the list

  newTotal.innerText = "0.0"; // Sets the total price to 0
  totalP.innerText = "0.0"; // Sets total to 0
  discountP.innerText = "0.0"; // sets discount to 0
});
