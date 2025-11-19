document.addEventListener("DOMContentLoaded", () => {
  const prevEl = document.getElementById("prevOperand");
  const currEl = document.getElementById("currentOperand");
  const container = document.querySelector(".calculator");

  let current = "0";
  let previous = "";
  let operator = null;
  let overwrite = false;

  function updateDisplay() {
    currEl.textContent = current;
    prevEl.textContent = previous ? `${previous} ${operator ?? ""}`.trim() : "";
  }

  function clearAll() {
    current = "0";
    previous = "";
    operator = null;
    overwrite = false;
    updateDisplay();
  }

  function backspace() {
    if (overwrite) { current = "0"; overwrite = false; updateDisplay(); return; }
    if (current.length === 1) current = "0";
    else current = current.slice(0, -1);
    updateDisplay();
  }

  function appendNumber(num) {
    if (num === "." && current.includes(".")) return;
    if (overwrite) {
      current = num === "." ? "0." : num;
      overwrite = false;
    } else {
      current = current === "0" && num !== "." ? num : current + num;
    }
    updateDisplay();
  }

  function chooseOperator(op) {
    if (operator && !overwrite) compute();
    operator = op;
    previous = current;
    overwrite = true;
    updateDisplay();
  }

  function compute() {
    if (!operator || previous === "") return;
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    let result;

    switch (operator) {
      case "+": result = prev + curr; break;
      case "-": result = prev - curr; break;
      case "*": result = prev * curr; break;
      case "/": result = curr === 0 ? "Error" : prev / curr; break;
    }

    if (typeof result === "number")
      result = Math.round((result + Number.EPSILON) * 1e12) / 1e12;

    current = result.toString();
    previous = "";
    operator = null;
    overwrite = true;
    updateDisplay();
  }

  function percent() {
    const val = parseFloat(current);
    if (!isNaN(val)) current = (val / 100).toString();
    updateDisplay();
  }

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const number = btn.dataset.number;
    const action = btn.dataset.action;

    if (number != null) { appendNumber(number); return; }
    if (!action) return;

    if (action === "clear") clearAll();
    else if (action === "back") backspace();
    else if (action === "percent") percent();
    else if (action === "=") compute();
    else if (["+", "-", "*", "/"].includes(action)) chooseOperator(action);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") { appendNumber(e.key); return e.preventDefault(); }
    if (e.key === ".") { appendNumber("."); return e.preventDefault(); }
    if (["+", "-", "*", "/"].includes(e.key)) { chooseOperator(e.key); return e.preventDefault(); }
    if (e.key === "Enter" || e.key === "=") { compute(); return e.preventDefault(); }
    if (e.key === "Backspace") { backspace(); return e.preventDefault(); }
    if (e.key === "Escape") { clearAll(); return e.preventDefault(); }
    if (e.key === "%") { percent(); return e.preventDefault(); }
  });

  clearAll();
});
