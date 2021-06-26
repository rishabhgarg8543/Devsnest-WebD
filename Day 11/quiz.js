var ans1=0,ans2=0,ans3=0,ans4=0,ans5=0;
var ele1,ele2,ele3,ele4,ele5;

function fun(idNo){
    var x=document.getElementById(idNo);
    
    var y=idNo;
    var z=parseInt(y);
    console.log(z+1);
    if(idNo>=1&&idNo<=4)
    {
        ans1=idNo;
        ele1=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=z+1;i<=4;i++)
        {
            console.log("sjhdoi");
            document.getElementById(i).style.color="white";
            document.getElementById(i).style.borderColor="white";
        }
        for(var j=1;j<z;j++)
        {
            console.log("sjhdoi");
            document.getElementById(j).style.color="white";
            document.getElementById(j).style.borderColor="white";
        }
    }
    else if(idNo>=5&&idNo<=8)
    {
        ans2=idNo;
        ele2=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=z+1;i<=8;i++)
        {
            console.log("sjhdoi");
            document.getElementById(i).style.color="white";
            document.getElementById(i).style.borderColor="white";
        }
        for(var j=5;j<z;j++)
        {
            console.log("sjhdoi");
            document.getElementById(j).style.color="white";
            document.getElementById(j).style.borderColor="white";
        }
    }
    else if(idNo>=9&&idNo<=12)
    {
        ans3=idNo;
        ele3=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=z+1;i<=12;i++)
        {
            console.log("sjhdoi");
            document.getElementById(i).style.color="white";
            document.getElementById(i).style.borderColor="white";
        }
        for(var j=9;j<z;j++)
        {
            console.log("sjhdoi");
            document.getElementById(j).style.color="white";
            document.getElementById(j).style.borderColor="white";
        }
    }
    else if(idNo>=13&&idNo<=16)
    {
        ans4=idNo;
        ele4=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=z+1;i<=16;i++)
        {
            console.log("sjhdoi");
            document.getElementById(i).style.color="white";
            document.getElementById(i).style.borderColor="white";
        }
        for(var j=13;j<z;j++)
        {
            console.log("sjhdoi");
            document.getElementById(j).style.color="white";
            document.getElementById(j).style.borderColor="white";
        }
    } 
    else if(idNo>=17&&idNo<=20)
    {
        ans5=idNo;
        ele5=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=z+1;i<=20;i++)
        {
            console.log("sjhdoi");
            document.getElementById(i).style.color="white";
            document.getElementById(i).style.borderColor="white";
        }
        for(var j=17;j<z;j++)
        {
            console.log("sjhdoi");
            document.getElementById(j).style.color="white";
            document.getElementById(j).style.borderColor="white";
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
    

    document.getElementById(3).style.color="#43fc03";
    document.getElementById(3).style.borderColor="#43fc03";
    document.getElementById(8).style.color="#43fc03";
    document.getElementById(8).style.borderColor="#43fc03";
    document.getElementById(11).style.color="#43fc03";
    document.getElementById(11).style.borderColor="#43fc03";
    document.getElementById(16).style.color="#43fc03";
    document.getElementById(16).style.borderColor="#43fc03";
    document.getElementById(18).style.color="#43fc03";
    document.getElementById(18).style.borderColor="#43fc03";
        
    document.getElementById("score").innerHTML=count;
    console.log(count);
}
