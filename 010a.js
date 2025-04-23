function hitungHarga() {
    let harga = parseFloat(document.getElementById("harga").value);
    let diskon = parseFloat(document.getElementById("diskon").value);
    let hargaSetelahDiskon = harga - (harga * (diskon / 100));
    document.getElementById("hasil").innerHTML = "Harga setelah diskon: Rp " + hargaSetelahDiskon.toFixed(2);
}