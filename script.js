// army style id declerations
var c9am = document.querySelector("nine");
var c10am = document.querySelector("ten");
var c11am = document.querySelector("eleven");
var noon12 = document.querySelector("twelve");
var c1pm = document.querySelector("thirteen");
var c2pm = document.querySelector("fourteen");
var c3pm = document.querySelector("fifthteen");
var c4pm = document.querySelector("sixteen");
var c5pm = document.querySelector("seventeen");
var userEvent = c9am,
  c10am,
  c11am,
  noon12,
  c1pm,
  c2pm,
  c3pm,
  c4pm,
  c5pm;

var currentDate = document.querySelector("#currentDate");
//current time function
currentDate = new Date();
document.getElementById("currentDate").innerHTML = currentDate;


//saving thru localstorage
document.getElementById("mybtn").addEventListener("click", function () {
   
        var c9am=document.getElementById('nine').value
			localStorage.setItem("text9" ,c9am );
        

         var c10am=document.getElementById('ten').value
         localStorage.setItem('text10',c10am);

         var c11am=document.getElementById('eleven').value
         localStorage.setItem('text11',c11am);

         var noon12=document.getElementById('twelve').value
         localStorage.setItem('textnoon',noon12);

         var c1pm=document.getElementById('thirthteen').value
         localStorage.setItem('text13',c1pm);

         var c2pm=document.getElementById('fourteen').value
         localStorage.setItem('text14',c2pm);

         var c3pc=document.getElementById('fifthteen').value
         localStorage.setItem('text15',c3pm);

         var c4pm=document.getElementById('sixteen').value
         localStorage.setItem('text16',c4pm);

         var c5pm=document.getElementById('seventeen').value
         localStorage.setItem('text17',c5pm);

 
    }
  
);
