// console.log("controller");

// hàm lấy thông tin từ form
function getInfotuForm() {
  const account = document.getElementById("tknv").value;
  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const date = document.getElementById("datepicker").value;
  const basicSalary = document.getElementById("luongCB").value;
  const jobTitle = document.getElementById("chucvu").value;
  const workTime = document.getElementById("gioLam").value;
  return new NhanVien(
    account,
    fullName,
    email,
    password,
    date,
    basicSalary,
    jobTitle,
    workTime
  );
}

// xoá thông tin từ form
function deleteInfotuform() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  // document.getElementById("datepicker").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "";
  document.getElementById("gioLam").value = "";
}

// render thông tin ra màn hình

function renderWorkerList(workerList) {
  console.log("workerList: ", workerList);
  var contentHTML = "";
  workerList.forEach((worker) => {
    var contentTr = `<tr>
      <td>${worker.account}</td>
      <td>${worker.fullName}</td>
      <td>${worker.email}</td>
      <td>${worker.date}</td>
      <td>${worker.jobTitle}</td>
      <td>${worker.tongLuong()}</td>
      <td>${worker.classify()}</td>
      <td>
      <buton onclick="removeWorker('${
        worker.account
      }')" class="btn btn-danger">Xoá</buton>
      <buton onclick="editWorker('${
        worker.account
      }')" class="btn btn-warning" data-toggle="modal" data-target="#myModal">Sửa</buton>
      </td>
      </tr>`;
    contentHTML += contentTr;
    deleteInfotuform();
  });
  // console.log("contentHTML: ", contentHTML);
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

// tìm sinh viên bằng account
function timWorker(account, workerList) {
  return workerList
    .map(function (e) {
      return e.account;
    })
    .indexOf(account);
}

// hàm show thông tin để edit
function showThongTinlenForm(person) {
  document.getElementById("tknv").value = person.account;
  document.getElementById("name").value = person.fullName;
  document.getElementById("email").value = person.email;
  document.getElementById("password").value = person.password;
  document.getElementById("datepicker").value = person.date;
  document.getElementById("luongCB").value = person.basicSalary;
  document.getElementById("chucvu").value = person.jobTitle;
  document.getElementById("gioLam").value = person.workTime;
}

// hàm xoá thông báo validation
function removeThongBaoValidate() {
  document.getElementById("tbTKNV").classList.remove("d-inline");
  document.getElementById("tbTen").classList.remove("d-inline");
  document.getElementById("tbEmail").classList.remove("d-inline");
  document.getElementById("tbMatKhau").classList.remove("d-inline");
  document.getElementById("tbNgay").classList.remove("d-inline");
  document.getElementById("tbLuongCB").classList.remove("d-inline");
  document.getElementById("tbChucVu").classList.remove("d-inline");
  document.getElementById("tbGiolam").classList.remove("d-inline");
}
