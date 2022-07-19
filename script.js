
var btnK=document.querySelectorAll("#mybtn")


var currentDate = document.querySelector("#currentDate");
//current time function
currentDate = new Date();
document.getElementById("currentDate").innerHTML = currentDate;

let value;
value=localStorage.getItem("")
//saving through localstorage
document.getElementById("mybtn").addEventListener("onclick", function () {
  if (btnK.value ==="")return;

  

  var hr9am = document.getElementById("nine ").value;
  var values = localStorage.setItem("text9".hr9am);
 

  var hr10am = document.getElementById("ten").value;
  localStorage.setItem("text10".hr10am);

  var hr11am = document.getElementById("eleven").value;
  localStorage.setItem("text11", hr11am);

  var noon12 = document.getElementById("twelve").value;
  localStorage.setItem("textnoon", noon12);

  var hr1pm = document.getElementById("thirteen").value;
  localStorage.setItem("text13", hr1pm);

  var hr2pm = document.getElementById("fourteen").value;
  localStorage.setItem("text14", hr2pm);

  var hr3pm = document.getElementById("fifthteen").value;
  localStorage.setItem("text15", hr3pm);

  var hr4pm = document.getElementById("sixteen").value;
  localStorage.setItem("text16", hr4pm);

  var hr5pm = document.getElementById("seventeen").value;
  localStorage.setItem("text17", hr5pm);
});
