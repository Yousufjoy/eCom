//These 3 functions are for Calculating Total price!

function cardPrice(cardPriceId) {
  const cardPriceElement = document.getElementById(cardPriceId);
  const cardPriceValue = cardPriceElement.innerText;
  const cardPriceValueConverted = parseFloat(cardPriceValue);

  return cardPriceValueConverted;
}

function totalPrice(totalPriceId) {
  const totalPriceElement = document.getElementById(totalPriceId);
  const totalPriceValue = totalPriceElement.innerText;
  const totalPriceValueConverted = parseFloat(totalPriceValue);

  return totalPriceValueConverted;
}

function calculate(fullPriceId, newValue) {
  // These 3 lines are for normal total calcultion:

  const totalElement = document.getElementById(fullPriceId);
  const previousTotalPrice = parseFloat(totalElement.innerText);

  const totalP = (totalElement.innerText = newValue.toFixed(2));

  // Showing the total price in total price also

  const showTotal = document.getElementById("newTotal");
  showTotal.innerText = totalP;

  document.getElementById("apply-btn").addEventListener("click", function () {
    const couponInput = document.getElementById("coupon-confirm");
    // This portion of the code is for calculating discount calculation
    if (newValue > 200) {
      const newTotal = document.getElementById("newTotal");
      // Use newValue for comparison, not previousTotalPrice
      const newResult = newValue - newValue * 0.2;
      const discount = newValue - newResult;

      // Apply discount and update the "discountItem" element
      const newDiscount = document.getElementById("discountItem");
      newDiscount.innerText = discount.toFixed(2); // Display with 2 decimal places
      newTotal.innerText = newResult;
    } else {
      // If total price is not above 200, reset the "discountItem" element
      const newDiscount = document.getElementById("discountItem");
      newDiscount.innerText = "0.00"; // Reset the discount to zero
    }
    couponInput.value = "";
  });
}

// // This function is for creating list of items!
function addItems(firstId, secondId) {
  const selectedItems = document.getElementById(firstId);
  const item = document.getElementById(secondId);
  const itemValue = item.innerText;

  const li = document.createElement("li");
  li.innerText = itemValue;
  selectedItems.appendChild(li);
}
