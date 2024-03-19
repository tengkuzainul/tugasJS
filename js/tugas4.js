const form = document.getElementById("form");
const listJabatan = ["Manager", "Asisten Manager", "Staff"];
let selectJabatan = `<option value="" disabled selected>--- Pilih Jabatan Pegawai ---</option>`;

for (const j of listJabatan) {
  selectJabatan += `<option value="${j}">${j}</option>`;
}

form.jabatan.innerHTML = selectJabatan;

function dataPegawai() {
  const nama = form.nama.value;
  const status = form.status.value;
  const jabatan = form.jabatan.options[form.jabatan.selectedIndex].value;

  let gajiPokok;

  if (jabatan === "Manager") {
    gajiPokok = 15000000;
  } else if (jabatan === "Asisten Manager") {
    gajiPokok = 10000000;
  } else if (jabatan === "Staff") {
    gajiPokok = 5000000;
  } else {
    gajiPokok = 0;
  }

  const tunjanganGaji = 0.15 * gajiPokok;
  const bpjs = 0.1 * gajiPokok;
  const tunjanganKel = status === "Menikah" ? 0.2 * gajiPokok : 0;
  const totalGaji = gajiPokok + tunjanganGaji + bpjs + tunjanganKel;

  const tableContent = document.createElement("table");
  tableContent.innerHTML = `
  <thead>
    <tr>
      <th>Nama</th>
      <th>Jabatan</th>
      <th>Status</th>
      <th>Gaji Pokok</th>
      <th>Tunjangan Gaji</th>
      <th>BPJS</th>
      <th>Tunjangan Keluarga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${nama}</td>
      <td>${jabatan}</td>
      <td>${status}</td>
      <td>${gajiPokok}</td>
      <td>${tunjanganGaji}</td>
      <td>${bpjs}</td>
      <td>${tunjanganKel}</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="6">Total Gaji</th>
      <th>${totalGaji}</th>
    </tr>
  </tfoot>
`;

  const tableStyle = `
  border-collapse: collapse;
  width: 100%;
`;

  const thStyle = `
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

  const tdStyle = `
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

  tableContent.setAttribute("style", tableStyle);

  const thElements = tableContent.querySelectorAll("th");
  thElements.forEach((th) => th.setAttribute("style", thStyle));

  const tdElements = tableContent.querySelectorAll("td");
  tdElements.forEach((td) => td.setAttribute("style", tdStyle));

  swal({
    title: "Data Pegawai",
    content: tableContent,
    icon: "info",
    buttons: true,
  });

  document.querySelector(".swal-modal").classList.add("custom-swal-modal");
}
