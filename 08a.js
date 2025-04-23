function countChars() {
    let text = document.getElementById("text").value;
    document.getElementById("charCount").innerText = `Karakter: ${text.length}`;
}