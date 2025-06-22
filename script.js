const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // Calculate total from all price cells
  prices.forEach(priceCell => {
    total += parseFloat(priceCell.textContent) || 0;
  });

  // Create a new row with one cell showing the total
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2;
  totalCell.textContent = `Total: Rs ${total}`;
  totalCell.style.fontWeight = "bold";
  totalRow.appendChild(totalCell);

  // Remove previous total row if it exists (optional enhancement)
  const existingTotalRow = document.querySelector("table tr.total-row");
  if (existingTotalRow) existingTotalRow.remove();

  // Mark this row as the total row for future reference
  totalRow.classList.add("total-row");

  // Append the row to the table
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
