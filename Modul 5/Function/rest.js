function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }

  function displaySum() {
    const output = document.getElementById("output");
    const result = sum(1, 2, 3, 4, 5);
    output.innerHTML = "Hasil Penjumlahan: " + result;
  }