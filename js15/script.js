function hitungKubus() {
  const sisi = parseFloat(document.getElementById("sisi").value);

  if (isNaN(sisi) || sisi <= 0) {
    document.getElementById("hasilVolume").innerText = "Masukkan panjang sisi yang valid.";
    document.getElementById("hasilLuas").innerText = "";
    return;
  }

  const volume = Math.pow(sisi, 3);
  const luasPermukaan = 6 * Math.pow(sisi, 2);

  document.getElementById("hasilVolume").innerText = `Volume kubus: ${volume.toFixed(2)} cm³`;
  document.getElementById("hasilLuas").innerText = `Luas permukaan kubus: ${luasPermukaan.toFixed(2)} cm²`;
}
