// Create and add the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Create the #ans element required by the test
const ans = document.createElement("div");
ans.id = "ans";
document.body.appendChild(ans);

// Function to calculate total
const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(priceCell => {
    const value = parseFloat(priceCell.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Show result inside the #ans div
  document.getElementById("ans").textContent = total;
};

// Add event listener
getSumBtn.addEventListener("click", getSum);
