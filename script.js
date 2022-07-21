//takes current date and
var today = new Date();

var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date + " " + time;

document.getElementById("currentDate").innerHTML = dateTime;

//saving through localstorage

//9am
document.getElementById("mybtn9").addEventListener("click", function () {
  localStorage.setItem("#hr0", document.getElementById("nine").value);
});
document.getElementById("nine").value = localStorage.getItem("#hr0"); //took outside

//10am

document.getElementById("mybtn10").addEventListener("click", function () {
  localStorage.setItem("#hr1", document.getElementById("ten").value);
});
document.getElementById("ten").value = localStorage.getItem("#hr1"); //took outside


//11am
document.getElementById("mybtn11").addEventListener("click", function () {
  localStorage.setItem("#hr2", document.getElementById("nine").value);
});
document.getElementById("eleven").value = localStorage.getItem("#hr2");

//12am
document.getElementById("mybtn12").addEventListener("click", function () {
  localStorage.setItem("#hr3", document.getElementById("twelve").value);
});
document.getElementById("twelve").value = localStorage.getItem("#hr3");

//1pm
document.getElementById("mybtn13").addEventListener("click", function () {
  localStorage.setItem("#hr4", document.getElementById("thirteen").value);
});
document.getElementById("thirteen").value = localStorage.getItem("#hr4");

//2pm
document.getElementById("mybtn14").addEventListener("click", function () {
  localStorage.setItem("#hr5", document.getElementById("fourteen").value);
});
document.getElementById("fourteen").value = localStorage.getItem("#hr5");

//3pm
document.getElementById("mybtn15").addEventListener("click", function () {
  localStorage.setItem("#hr6", document.getElementById("fifthteen").value);
});
document.getElementById("fifthteen").value = localStorage.getItem("#hr6");

//4pm
document.getElementById("mybtn16").addEventListener("click", function () {
  localStorage.setItem("#hr7", document.getElementById("sixteen").value);
});
document.getElementById("sixteen").value = localStorage.getItem("#hr7");

//5pm
document.getElementById("mybtn17").addEventListener("click", function () {
  localStorage.setItem("#hr8", document.getElementById("seventeen").value);
});
document.getElementById("seventeen").value = localStorage.getItem("#hr8");



//color design
var userEvent=document.querySelectorAll(".user-event");
userEvent=time
if(userEvent){}