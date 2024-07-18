var myname = 'Subham Chakraborty'

document.getElementById('nameDisplay').innerText = `Name: ${myname}`;

const myntraBagCost = 1000;
const gstPercentage = 18;

const totalCost = myntraBagCost + (myntraBagCost * gstPercentage / 100)
console.log("Total cost of Myntra Bag including GST:",totalCost)

let stringCalculation = '1000 + (1000 * 18 / 100)';
let evalResult = eval(stringCalculation)

document.getElementById('bagcost').innerText =`Total cost of Myntra Bag including GST: ${evalResult}`