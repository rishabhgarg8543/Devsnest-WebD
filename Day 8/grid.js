var item=[];
for(var i=0;i<400;i++)
{
    item[i]=0;    
}

function c(classname)
{
    element=document.getElementsByClassName(classname);
    n=element;
    if(item[n]==0)
    {
        item[n]=1;
        element[0].style.backgroundColor="yellow";
    }
    else 
    {
        item[n]=0;
        element[0].style.backgroundColor="#2196F3";
    }
}