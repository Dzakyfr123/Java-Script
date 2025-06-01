function hitungSegitiga() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const sisiB = parseFloat(document.getElementById("sisiB").value);
  const sisiC = parseFloat(document.getElementById("sisiC").value);

  if (
    isNaN(alas) || isNaN(tinggi) ||
    isNaN(sisiB) || isNaN(sisiC) ||
    alas <= 0 || tinggi <= 0 || sisiB <= 0 || sisiC <= 0
  ) {
    document.getElementById("hasilLuas").innerText = "Masukkan semua nilai dengan benar.";
    document.getElementById("hasilKeliling").innerText = "";
    return;
  }

  const luas = 0.5 * alas * tinggi;
  const keliling = alas + sisiB + sisiC;

  document.getElementById("hasilLuas").innerText = `Luas segitiga: ${luas.toFixed(2)} cm²`;
  document.getElementById("hasilKeliling").innerText = `Keliling segitiga: ${keliling.toFixed(2)} cm`;
}
