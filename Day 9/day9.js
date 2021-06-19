var cell = [ ];
var booked = 36,remaining = 0;
for (let i=0;i<36;i++)
{
  cell[i]=0;
}
document.getElementById("val1").innerHTML = booked;
document.getElementById("val2").innerHTML = remaining;

function change(classnumber){
  element=document.getElementsByClassName(classnumber);
  n=classnumber;
  if(cell[n] == 0)
  {
    cell[n]=1;
    booked -= 1;
    remaining+=1;
    element[0].style.backgroundColor = "white";
    document.getElementById("val1").innerHTML = booked;
    document.getElementById("val2").innerHTML = remaining;

  
 
  }
  else
  {
    cell[n]=0;
    booked+=1;
    remaining-=1;
    element[0].style.backgroundColor ="#e43926";
    document.getElementById("val1").innerHTML = booked;
    document.getElementById("val2").innerHTML = remaining;
   
  }
}