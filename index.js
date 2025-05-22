const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementById("input-value");
const lengthEl = document.getElementById("length-p");
const volumeEl = document.getElementById("volume-p");
const massEl = document.getElementById("mass-p");

convertBtn.addEventListener("click", () => {
    render();
})

function render() {
    let value = inputValue.value;
    converLength(value);
    convertVolume(value);
    convertMass(value);
}

function converLength(value) {
    let meterToFeet = (value * 3.28084).toFixed(3);
    let feetToMeter = (value / 3.28084).toFixed(3);
    let paragraph = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`;
    lengthEl.textContent = paragraph;
}

function convertVolume(value) {
    let literToGallon = (value * 0.26417).toFixed(3);
    let gallonToLiter = (value * 3.78541).toFixed(3)
    let paragraph = `${value} liters = ${literToGallon} gallons | ${value} gallons = ${gallonToLiter} liters`;
    volumeEl.textContent = paragraph;
}

function convertMass(value) { 
    let kiloToPound = (value * 2.20462).toFixed(3);
    let poundToKilo = (value * 0.45359).toFixed(3);
    let paragraph = `${value} kilos = ${kiloToPound} pounds | ${value} pounds = ${poundToKilo} kilos`;
    massEl.textContent = paragraph;
}