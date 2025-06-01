function mulaiPengingat() {
  const durasi = parseInt(document.getElementById("durasi").value);

  if (isNaN(durasi) || durasi <= 0) {
    document.getElementById("output").innerText = "Masukkan durasi yang valid.";
    return;
  }

  const waktuMulai = Date.now();
  const waktuSelesai = waktuMulai + durasi * 60 * 1000;

  document.getElementById("output").innerText = "Pengingat dimulai. Jangan lupa istirahat dari HP setiap menit!";

  const interval = setInterval(() => {
    const sekarang = Date.now();
    if (sekarang >= waktuSelesai) {
      clearInterval(interval);
      alert("Waktu habis! Saatnya istirahat dari HP!");
      document.getElementById("output").innerText = "Waktu habis! Sesi selesai.";
    } else {
      console.log("Jangan lupa istirahat dari HP!");
      alert("Jangan lupa istirahat dari HP!");
    }
  }, 60000); 
}
