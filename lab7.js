document.getElementById("submitBtn").addEventListener("click", function () {
  const mathGrade = parseFloat(document.getElementById("mathGrade").value);
  const englishGrade = parseFloat(document.getElementById("englishGrade").value);

  if (isNaN(mathGrade) || isNaN(englishGrade)) {
    alert("Please enter valid grades!");
    return;
  }

  const tableBody = document.querySelector("#gradesTable tbody");
  const rowCount = tableBody.rows.length + 1;

  // Calculate row average
  const rowAverage = ((mathGrade + englishGrade) / 2).toFixed(2);

  // Add new row
  const newRow = tableBody.insertRow();
  newRow.innerHTML = `
    <td>${rowCount}</td>
    <td>${mathGrade}</td>
    <td>${englishGrade}</td>
    <td>${rowAverage}</td>
  `;

  // Update averages
  updateAverages();
});

function updateAverages() {
  const tableBody = document.querySelector("#gradesTable tbody");
  const rowCount = tableBody.rows.length;

  let mathSum = 0, englishSum = 0;

  for (const row of tableBody.rows) {
    mathSum += parseFloat(row.cells[1].innerText);
    englishSum += parseFloat(row.cells[2].innerText);
  }

  const mathAverage = (mathSum / rowCount).toFixed(2);
  const englishAverage = (englishSum / rowCount).toFixed(2);
  const overallAverage = ((mathSum + englishSum) / (rowCount * 2)).toFixed(2);

  document.getElementById("mathAverage").innerText = mathAverage;
  document.getElementById("englishAverage").innerText = englishAverage;
  document.getElementById("overallAverage").innerText = overallAverage;
}
