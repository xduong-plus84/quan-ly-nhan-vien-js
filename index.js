// console.log("index.js")

// tạo key cho data dưới local storage

const WORKERLIST_LOCARLSTORAGE = "WORKLIST";

var workerList = [
  {
    account: "acc1",
    fullName: "mot",
    email: "mot@gmail.com",
    password: "@XDLogin2k",
    date: "10/13/2022",
    basicSalary: "10000000",
    jobTitle: "Sếp",
    workTime: "190",
  },
  {
    account: "acc2",
    fullName: "hai",
    email: "hai@gmail.com",
    password: "@XDLogin2k",
    date: "10/13/2022",
    basicSalary: "10000000",
    jobTitle: "Trưởng phòng",
    workTime: "170",
  },
  {
    account: "acc3",
    fullName: "ba",
    email: "ba@gmail.com",
    password: "@XDLogin2k",
    date: "10/13/2022",
    basicSalary: "10000000",
    jobTitle: "Nhân viên",
    workTime: "120",
  },
];
if (workerList.length > 1) {
  // lưu data xuống local storage
  var workerListJson = JSON.stringify(workerList);
  localStorage.setItem(WORKERLIST_LOCARLSTORAGE, workerListJson);
}

// kiểm tra data dưới local storage
var workerListJson = localStorage.getItem(WORKERLIST_LOCARLSTORAGE);
if (workerListJson != null) {
  workerList = JSON.parse(workerListJson).map(getinfo);
  function getinfo(info) {
    return new NhanVien(
      info.account,
      info.fullName,
      info.email,
      info.password,
      info.date,
      info.basicSalary,
      info.jobTitle,
      info.workTime
    );
  }

  // console.log("workerList: ", workerList);
  renderWorkerList(workerList);
}
// hiển thị popup form
// document.getElementById("btnThem").onclick = function () {
//   console.log("an1");
//   document.getElementById("btnCapNhat").classList.add("d-none");
//   document.getElementById("btnThemNV").classList.remove("d-none");
// };

document.getElementById("btnThemNV").onclick = function () {
  addWorker();
};

/*----------add Worker--------------*/
var themNV = false;
var updateNV = false;

// khởi tạo lại tất cả
document.getElementById("btnThem").onclick = function () {
  document.getElementById("btnCapNhat").classList.add("d-none");
  document.getElementById("btnThemNV").classList.remove("d-none");

  document.getElementById("tknv").removeAttribute("disabled", "");

  deleteInfotuform();
  removeThongBaoValidate();
};

function addWorker() {
  var woker = getInfotuForm();

  // validate
  var isValid = true;

  // validate cho acc
  isValid &=
    validator.kiemTraRong(
      woker.account,
      "tbTKNV",
      "Tài khoản không được để trống"
    ) &&
    validator.kiemTraChieuDai(
      woker.account,
      "tbTKNV",
      "Tài khoản tối đa 4-6 ký số",
      4,
      6
    ) &&
    validator.kiemTraTrungAcc(
      woker.account,
      "tbTKNV",
      "Trùng tài khoản",
      workerList
    );

  // validate cho tên
  isValid &=
    validator.kiemTraRong(woker.fullName, "tbTen", "Tên không được để trống") &&
    validator.kiemTraChuAscent(woker.fullName, "tbTen", "Tên phải là chữ ");

  // validate cho email
  isValid &=
    validator.kiemTraRong(
      woker.email,
      "tbEmail",
      "Email không được để trống"
    ) &&
    validator.kiemTraEmail(
      woker.email,
      "tbEmail",
      "Định dạng email không hợp lệ"
    );

  // validate cho mật khẩu
  isValid &=
    validator.kiemTraRong(
      woker.password,
      "tbMatKhau",
      "Mật khẩu không được để trống"
    ) &&
    validator.kiemTraPassWord(
      woker.password,
      "tbMatKhau",
      "Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
    );

  // validate cho ngày tháng
  isValid &=
    validator.kiemTraRong(
      woker.date,
      "tbNgay",
      "Ngày tháng không được để trống"
    ) &&
    validator.kiemTraNgayThang(
      woker.date,
      "tbNgay",
      "Định dạng ngày tháng không hợp lệ mm/dd/yyyy"
    );

  // validate cho lương cơ bản
  isValid &=
    validator.kiemTraRong(
      woker.basicSalary,
      "tbLuongCB",
      "Lương cơ bản không được để trống"
    ) &&
    validator.kiemTraKhoangGiaTri(
      woker.basicSalary,
      "tbLuongCB",
      "Lương cơ bản 1 triệu - 20 triệu",
      10000000,
      200000000
    );

  // validate cho chức vụ
  isValid &= validator.kiemTraValueSelect(
    "chucvu",
    "tbChucVu",
    "Chức vụ không được để trống"
  );

  // validate cho số giờ làm trong tháng
  isValid &=
    validator.kiemTraRong(
      woker.workTime,
      "tbGiolam",
      "Giờ làm không được để trống"
    ) &&
    validator.kiemTraKhoangGiaTri(
      woker.workTime,
      "tbGiolam",
      "Số giờ làm từ 80 giờ đến 200 giờ",
      80,
      200
    );

  console.log("isValid: ", isValid);

  if (isValid) {
    console.log("push");
    workerList.push(woker);

    // lưu data xuống local storage
    var workerListJson = JSON.stringify(workerList);
    localStorage.setItem(WORKERLIST_LOCARLSTORAGE, workerListJson);

    renderWorkerList(workerList);
    themNV = true;
    updateNV = true;
  } else {
    console.log("khong push");
  }
}

/*----------remove Worker--------------*/
function removeWorker(account) {
  // console.log("xoá");
  var index = timWorker(account, workerList);
  if (index != -1) {
    workerList.splice(index, 1);
    renderWorkerList(workerList);
  }
  localStorage.setItem(WORKERLIST_LOCARLSTORAGE, JSON.stringify(workerList));
}

// sửa thông tin nhân viên (b1: hiển thị thôn tin lên form)
function editWorker(account) {
  updateNV = true;
  removeThongBaoValidate();
  // console.log("account: ", account);
  document.getElementById("btnCapNhat").classList.remove("d-none");
  document.getElementById("btnThemNV").classList.add("d-none");
  document.getElementById("tknv").setAttribute("disabled", "");

  var index = timWorker(account, workerList);
  if (index != -1) {
    showThongTinlenForm(workerList[index]);
  }
}

// sửa thông tin nhân viên (b2: tạo sinh viên clone và xoá sinh viên origin )
document.getElementById("btnCapNhat").onclick = function () {
  themNV = false;
  addWorker();
  if (themNV) {
    var acc = workerList[workerList.length - 1].account;
    removeWorker(acc);
    $("#myModal").modal("hide");
  }
};
// cập nhật sinh viên (có validation )

// tìm nhân viên theo loại (xuất sắc, giỏi, khá,...) và hiển thị
document.getElementById("searchName").onchange = function () {
  const searchName = document.getElementById("searchName").value;
  console.log("searchName: ", searchName);
  if (searchName == "All") {
    renderWorkerList(workerList);
    console.log("ldfas");
  } else {
    const result = workerList.filter(
      (worker) => worker.classify() == searchName
    );
    renderWorkerList(result);
  }
};
