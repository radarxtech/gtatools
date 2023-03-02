function lookup() {
  const insurance = document.getElementById("insurance").value;
  fetch("data.csv")
    .then(response => response.text())
    .then(data => {
      const rows = data.split("\n");
      console.log(rows);
      for (let i = 1; i < rows.length; i++) {
        const columns = rows[i].split(",");
        console.log(columns);
        if (columns[0] === insurance) {
          const homeowners = parseFloat(columns[1]).toFixed(2);
          const loan = parseFloat(columns[2]).toFixed(2);
          const result = `Homeowners: ${homeowners}, Expanded Loan: ${loan}`;
          document.getElementById("result").innerHTML = result;
          return;
        }
      }
      document.getElementById("result").innerHTML = "No matching data found.";
    })
    .catch(error => {
      console.error(error);
      document.getElementById("result").innerHTML = "Error: Could not load data.";
    });
}
