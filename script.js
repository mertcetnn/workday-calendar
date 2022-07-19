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
var userEvent=c9am,c10am,c11am,noon12,c1pm,c2pm,c3pm,c4pm,c5pm

var currentDate=document.querySelector('#currentDate');
//current time function
currentDate= new Date();
document.getElementById("currentDate").innerHTML = currentDate;


document.getElementById('mybtn').addEventListener('click',function(onOrof){
  
;
 
function onOrof (){
   if(userEvent.value>0){
    onOrof ()
      window.localStorage.setItem(userEvent,value)
   let saving =localStorage.getItem(userEvent)
   
   }
 if (userEvent==0){
   localStorage.removeItem(userEvent)
   localStorage.clear()

 }}})











