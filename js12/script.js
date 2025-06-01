function hitungKecepatan() {
  const jarak = parseFloat(document.getElementById("jarak").value);
  const waktu = parseFloat(document.getElementById("waktu").value);

  if (isNaN(jarak) || isNaN(waktu) || waktu === 0) {
    document.getElementById("output").innerText = "Masukkan nilai yang valid (waktu tidak boleh 0)";
    return;
  }

  const kecepatan = jarak / waktu;
  document.getElementById("output").innerText = `Kecepatan: ${kecepatan.toFixed(2)} km/jam`;
}
