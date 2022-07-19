// army style id declerations
var c9am=document.querySelector('nine');
var c10am=document.querySelector('ten');
var c11am=document.querySelector('eleven');
var noon12=document.querySelector('twelve');
var c1pm=document.querySelector('thirteen');
var c2pm=document.querySelector('fourteen');
var c3pm=document.querySelector('fifthteen');
var c4pm=document.querySelector('sixteen');
var c5pm=document.querySelector('seventeen');

var currentDate=document.querySelector('#currentDate');
//current time function
currentDate= new Date();
document.getElementById("currentDate").innerHTML = currentDate;

function save(event) {
   console.log(event)
   let idx = event.target.id.replace(".user-event-", "")
   let textInput = $(`#text-${idx}`).val();
   localStorage.setItem(`Task${idx}`, textInput);
}
document.getElementById('mybtn').addEventListener('click',save())










