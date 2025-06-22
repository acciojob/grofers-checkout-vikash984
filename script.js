const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  // Calculate the total price
  prices.forEach(priceCell => {
    total += parseFloat(priceCell.textContent);
  });

  // Create a new row and cell for the total
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2; // Assuming the table has two columns: item and price
  totalCell.textContent = `Total Price: ₹${total}`;

  totalRow.appendChild(totalCell);

  // Append the row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
