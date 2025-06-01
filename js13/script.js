function hitungWaktu() {
  const jarak = parseFloat(document.getElementById("jarak").value);
  const kecepatan = parseFloat(document.getElementById("kecepatan").value);

  if (isNaN(jarak) || isNaN(kecepatan) || kecepatan === 0) {
    document.getElementById("output").innerText = "Masukkan nilai yang valid (kecepatan tidak boleh 0)";
    return;
  }

  const waktu_menit = (jarak / kecepatan) * 60;
  document.getElementById("output").innerText = `Waktu tempuh: ${waktu_menit.toFixed(2)} menit`;
}
