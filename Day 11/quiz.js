var ans1=0,ans2=0,ans3=0,ans4=0,ans5=0;
var ele1,ele2,ele3,ele4,ele5;

function fun(idNo){
    var x=document.getElementById(idNo);
    
    var z=idNo;
    console.log(z);
    if(idNo>=1&&idNo<=4)
    {
        ans1=idNo;
        ele1=x;
        for(var i=1;i<=4;i++)
        {
            if(i==z)
            {
                document.getElementById(i).style.color="blue";
                document.getElementById(i).style.borderColor="blue";
                break;
            }
            else{
                document.getElementById(i).style.color="white";
                document.getElementById(i).style.borderColor="white";
            }
        }
    }
    else if(idNo>=5&&idNo<=8)
    {
        ans2=idNo;
        ele2=x;
        for(var i=5;i<=8;i++)
        {
            if(i==z)
            {
                document.getElementById(i).style.color="blue";
                x.style.borderColor="blue";
                break;
            }
            else{
                document.getElementById(i).style.color="white";
                document.getElementById(i).style.borderColor="white";
            }
        }
    }
    else if(idNo>=9&&idNo<=12)
    {
        ans3=idNo;
        ele3=x;
        for(var i=9;i<=12;i++)
        {
            if(i==z)
            {
                document.getElementById(i).style.color="blue";
                document.getElementById(i).style.borderColor="blue";
            }
            else{
                document.getElementById(i).style.color="white";
                document.getElementById(i).style.borderColor="white";
            }
        }
    }
    else if(idNo>=13&&idNo<=16)
    {
        ans4=idNo;
        ele4=x;
        for(var i=12;i<=16;i++)
        {
            if(i==z)
            {
                document.getElementById(i).style.color="blue";
                x.style.borderColor="blue";
            }
            else{
                document.getElementById(i).style.color="white";
                document.getElementById(i).style.borderColor="white";
            }
        }
    } 
    else if(idNo>=17&&idNo<=20)
    {
        ans5=idNo;
        ele5=x;
        for(var i=17;i<=20;i++)
        {
            if(i==z)
            {
                document.getElementById(i).style.color="blue";
                document.getElementById(i).style.borderColor="blue";
            }
            else{
                document.getElementById(i).style.color="white";
                document.getElementById(i).style.borderColor="white";
            }
        }
    }
}   

function submit(){
    var count=0;
    if(ans1==3)
    {
        ele1.style.color="#43fc03";
        ele1.style.borderColor="#43fc03";
        count++;
    }
    else 
    {
        ele1.style.color="red";
        ele1.style.borderColor="red";
    }
    if(ans2==8)
    {
        ele2.style.color="#43fc03";
        ele2.style.borderColor="#43fc03";
        count++;
    }
    else {
        ele2.style.color="red";
        ele2.style.borderColor="red";
    }
    if(ans3==11)
    {
        ele3.style.color="#43fc03";
        ele3.style.borderColor="#43fc03";
        count++;
    }
    else {
        ele3.style.color="red";
        ele3.style.borderColor="red";
    }
    if(ans4== 16)
    {
        ele4.style.color="#43fc03";
        ele4.style.borderColor="#43fc03";
        count++;
    }
    else{
        ele4.style.color="red";
        ele4.style.borderColor="red";
    }
    if(ans5==18)
    {
        ele5.style.color="#43fc03";
        ele5.style.borderColor="#43fc03";
        count++;
    }
    else{
        ele5.style.color="red";
        ele5.style.borderColor="red";
    }
    document.getElementById("score").innerHTML=count;
    console.log(count);
}
