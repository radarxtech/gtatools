<script>
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
          const result = `Homeowners: ${columns[1]}, Expanded Loan: ${columns[2]}`;
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
