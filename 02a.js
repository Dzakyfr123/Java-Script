function validateForm() {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("Nama tidak boleh kosong!");
        return false;
    }
    return true;}