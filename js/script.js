function dataPerson() {
  const form = document.getElementById("form");
  const nama = form.nama.value;
  const pekerjaan = form.pekerjaan.value;
  const hobi = form.hobi.value;

  const noInput = "Maaf, Isi Form Dahulu!";
  const input = `Nama : ${nama}, Pekerjaan : ${pekerjaan}, Hobi : ${hobi}`;

  const Hasil = nama && pekerjaan && hobi != "" ? input : noInput;

  document.getElementById("Hasil").innerText = Hasil;
}
