const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Create a placeholder for the result
let ans = document.createElement("div");
ans.setAttribute("id", "ans");
document.body.appendChild(ans);

const getSum = () => {
  // Select all price elements
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  // Calculate the total price
  prices.forEach(priceCell => {
    total += parseFloat(priceCell.textContent) || 0;
  });

  // Display total in #ans
  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);
