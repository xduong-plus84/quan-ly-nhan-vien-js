// console.log("model");

// tạo khuôn cho object
function NhanVien(
  account,
  fullName,
  email,
  password,
  date,
  basicSalary,
  jobTitle,
  workTime
) {
  this.account = account;
  this.fullName = fullName;
  this.email = email;
  this.password = password;
  this.date = date;
  this.basicSalary = basicSalary;
  this.jobTitle = jobTitle;
  this.workTime = workTime;
  this.tongLuong = function () {
    if (this.jobTitle == "Sếp") {
      return this.basicSalary * 3;
    }
    if (this.jobTitle == "Trưởng phòng") {
      return this.basicSalary * 2;
    }
    if (this.jobTitle == "Nhân viên") {
      return this.basicSalary * 1;
    }
  };
  this.classify = function () {
    if (this.workTime < 160) {
      return "Trung bình";
    } else if (this.workTime < 176) {
      return "Khá";
    } else if (this.workTime < 192) {
      return "Giỏi";
    } else if (this.workTime >= 192) {
      return "Xuất sắc";
    }
  };
}
