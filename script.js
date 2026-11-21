const outputDiv = document.getElementById("output");
const runBtn = document.getElementById("runBtn");

function printEvenNumbers() {
  const evenNumbers = [];

  console.log("--- Even Numbers from 1 to 20 ---");

  // 1. Loop from 1 to 20
  for (let i = 1; i <= 20; i++) {
    // 2. Condition using modulus (%) and strict equality (===)
    if (i % 2 === 0) {
      // 3. Display output on console
      console.log(i);
      evenNumbers.push(i);
    }
  }

  // Also display summary on webpage
  outputDiv.innerHTML = `
    <h3>Console Output Summary</h3>
    <p><strong>Even Numbers (1–20):</strong> ${evenNumbers.join(", ")}</p>
    <p><strong>Total Even Numbers:</strong> ${evenNumbers.length}</p>
    <p><small>Check browser Console (<code>F12</code>) for individual <code>console.log()</code> lines.</small></p>
  `;
}

runBtn.addEventListener("click", printEvenNumbers);

// Run automatically when page loads
printEvenNumbers();