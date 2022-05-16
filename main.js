document.getElementById("btnSubmit").onclick = function () {
  var num = 0;
  var sum = 0;
  var content = "";
  while (sum < 10000) {
    num++;
    sum = sum + num;
  }
  content += "<div>Số nguyên dương nhỏ nhất: " + num + "<div/>";

  document.getElementById("noti").style.display = "block";

  document.getElementById("noti").innerHTML = content;
};

document.getElementById("btnSubmit1").onclick = function () {
  var x = document.getElementById("txtNumX").value * 1;
  var n = document.getElementById("txtNumN").value * 1;
  var sum = 0;
  var content = "";
  for (var i = 1; i <= n; i++) {
    var sum = sum + Math.pow(x, i);
  }
  content += "<div>Tổng: " + sum + "</div>";

  document.getElementById("noti1").style.display = "block";
  document.getElementById("noti1").innerHTML = content;
};

document.getElementById("btnSubmit2").onclick = function () {
  var n1 = document.getElementById("txtGiaiThua").value * 1;
  var content = "";
  var giaiThua = 1;
  for (var i = 1; i <= n1; i++) {
    giaiThua = giaiThua * i;
  }
  content += "<div>Tổng: " + giaiThua + "</+div>";

  document.getElementById("noti3").style.display = "block";
  document.getElementById("noti3").innerHTML = content;
};

document.getElementById("btnSubmit3").onclick = function () {
  var soThe = document.getElementById("soThe").value * 1;
  var result = "";
  for (var i = 1; i <= soThe; i++) {
    if (i % 2 == 0) {
      result += "<div>Div chẵn " + i + "</div>";
    } else {
      result += "<div>Div lẻ " + i + "</div>";
    }
  }
  document.getElementById("noti4").style.display = "none";
  document.getElementById("noti4").innerHTML = result;
};
