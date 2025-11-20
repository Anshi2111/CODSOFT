# 🧮 Basic Calculator  
A simple and responsive **Calculator Web App** built using **HTML, CSS, and JavaScript**.  
It performs basic arithmetic operations such as **addition, subtraction, multiplication, and division**, along with **percentage**, **decimal input**, **clear**, **backspace**, and full **keyboard support**.

---

## 🚀 Features
- Clean and modern UI  
- Fully responsive design  
- Basic math operations: `+ - × ÷`  
- Percentage (`%`)  
- Decimal support  
- Clear (C) and Backspace (⌫)  
- Chained operations (e.g., 2 + 3 × 4)  
- Keyboard support (numbers, operators, Enter, Backspace, Esc)  
- Error handling (e.g., divide by zero)  
- No external libraries used

---

## 🛠 Technologies Used
- **HTML5** – Structure of the calculator  
- **CSS3** – Layout using CSS Grid, styling, responsive design  
- **JavaScript (Vanilla JS)** – Logic for handling operations, keyboard events, and UI updates

---

## 📁 Project Structure
```
📦 calculator-project  
├── 📄 index.html  
├── 🎨 style.css  
└── ✨ script.js  
```
## Preview
<img width="531" height="357" alt="image" src="https://github.com/Anshi2111/CODSOFT/blob/main/calculator/Screenshot3/calcy.png"/>

## 📦 How to Run
1. Download or clone the repository  
2. Open the project folder  
3. Double-click **index.html**  
4. The calculator will open in your browser

No installation required.

---

## 🎮 Keyboard Shortcuts
| Key | Action |
|-----|--------|
| 0–9 | Enter numbers |
| .   | Decimal point |
| + - * / | Operators |
| Enter / = | Calculate result |
| Backspace | Delete last digit |
| Esc | Clear calculator |
| % | Percentage |

---


## 🤖 Logic Overview
- The calculator maintains **currentOperand**, **previousOperand**, and the selected **operator**.
- When an operator is chosen, the app:
  - Saves the current value as previous
  - Clears the display for the next input
- Hitting `=` triggers the compute function, which:
  - Parses both operands  
  - Performs arithmetic using safe number handling  
  - Updates the display  
- Keyboard events mirror button clicks for smooth use

---

## 🧑‍💻  
Made for practice & learning HTML, CSS, and JavaScript basics.

---

