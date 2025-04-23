function convertTemp() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerText = `Suhu dalam Fahrenheit: ${fahrenheit}`;
}