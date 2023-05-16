const display = document.getElementById('show')
const addBtn = document.getElementById('add')
const clearBtn = document.getElementById('clear')
const equalBtn = document.getElementById('equal')
const oneBtn = document.getElementById('one')
const twoBtn = document.getElementById('two')

let calculation = ''

function updateDisplay(){
  display.value = calculation
}

function addInput(input) {
  calculation += input
  updateDisplay()
}

function clearCalculation() {
  calculation = '';
  updateDisplay();
}

function calculate(){
  calculation = eval(calculation)
  updateDisplay()
}
 
addBtn.addEventListener('click', () => addInput('+'))
equalBtn.addEventListener('click', calculate)
clearBtn.addEventListener('click', clearCalculation)
oneBtn.addEventListener('click', () => addInput('1'))
twoBtn.addEventListener('click', () => addInput('2'))




/*for (let i = 0; i <= 9; i++) {
  const btn = document.getElementById(i)
  btn.addEventListener('click', () => addInput(i))
}*/


const car = {brand:"lexus", model:"ls450", color: "blue"}

console.log(lexus)