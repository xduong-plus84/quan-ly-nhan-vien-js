// console.log("validation")

var validator = {
  kiemTraRong: function (value, idError, message) {
    if (value.length) {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    }
  },
  kiemTraChu: function (value, idError, message) {
    var reg = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g;
    if (reg.test(value)) {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    }
  }, // chữ không dấu
  kiemTraChuAscent: function (value, idError, message) {
    var reg =
      /^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i;
    if (reg.test(value)) {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    }
  }, // chữ không dấu
  kiemTraEmail: function (value, idError, message) {
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (reg.test(value)) {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    }
  },
  kiemTraPassWord: function (value, idError, message) {
    var reg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&amp;*-]).{6,10}$/;
    if (reg.test(value)) {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    }
  },
  kiemTraNgayThang: function (value, idError, message) {
    var reg =
      /((0[13578]|1[02])[\/.]31[\/.](18|19|20)[0-9]{2})|((01|0[3-9]|1[1-2])[\/.](29|30)[\/.](18|19|20)[0-9]{2})|((0[1-9]|1[0-2])[\/.](0[1-9]|1[0-9]|2[0-8])[\/.](18|19|20)[0-9]{2})|((02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))/;
    if (reg.test(value)) {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    }
  },
  kiemTraChieuDai: function (value, idError, message, min, max) {
    if (value.length < min || value.length > max) {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    } else {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    }
  },
  kiemTraKhoangGiaTri: function (value, idError, message, min, max) {
    if (value * 1 < min || value * 1 > max) {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    } else {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    }
  },
  kiemTraTrungAcc: function (vale, idError, message, listData) {
    // console.log("vale: ", vale);
    if (timWorker(vale, listData) == -1 || updateNV == true) {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    } else {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    }
  },
  kiemTraValueSelect: function (idSelect, idError, message) {
    if (document.getElementById(idSelect).value == "") {
      document.getElementById(idError).classList.add("d-inline");
      document.getElementById(idError).innerHTML = message;
      return false;
    } else {
      document.getElementById(idError).classList.remove("d-inline");
      document.getElementById(idError).innerHTML = "";
      return true;
    }
  },
};
