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
 
 var btnK = document.querySelectorAll('#mybtn')


var currentDate = document.querySelector("#currentDate");
//current time function
currentDate = new Date();
document.getElementById("currentDate").innerHTML = currentDate;


//saving through localstorage
 document.getElementById("mybtn").addEventListener("onclick", function () {


          c9am=document.getElementById('nine ').textContent
		      localStorage.setItem("text9".hr9am );
   
         

        var hr10am=document.getElementById('ten').textContent
         localStorage.setItem('text10'.hr10am);

          var hr11am=document.getElementById('eleven').textContent
         localStorage.setItem('text11',hr11am);

          var  noon12=document.getElementById('twelve').textContent
         localStorage.setItem('textnoon',noon12);

          var  hr1pm=document.getElementById('thirteen').textContent
         localStorage.setItem('text13',hr1pm);

          var  hr2pm=document.getElementById('fourteen').textContent
         localStorage.setItem('text14',hr2pm);

          var  hr3pm=document.getElementById('fifthteen').textContent
         localStorage.setItem('text15',hr3pm);

          var  hr4pm=document.getElementById('sixteen').textContent
         localStorage.setItem('text16',hr4pm);

          var  hr5pm=document.getElementById('seventeen').textContent
         localStorage.setItem('text17',hr5pm);

 
    });







  

