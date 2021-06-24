var itemm=[ ];
            itemm[1]="img/img 1.jpg";
            itemm[2]="img/img 4.jpg";
            itemm[3]="img/img 2.jpg";
            itemm[4]="img/img 3.jpg";
            itemm[5]="img/img 5.jpg";
            itemm[6]="img/img 3.jpg";
            itemm[7]="img/img 2.jpg";
            itemm[8]="img/img 4.jpg";
            itemm[9]="img/img 1.jpg";
            itemm[10]="img/img 5.jpg";
var count=0,checkp,first,second;
function c(classname)
{
    
    if(count==2)
    {
        count=0;
        checkp=undefined;
    }
    if(count==1)
    {
        checkp=element[0].src;
        first =element[0];
    }
    element = document.getElementsByClassName(classname);
    element[0].style.pointerEvents = 'none';
    
    element[0].src=itemm[classname];
    count++;
    var check=element[0].src;
    second =element[0];
    if(count==2)
    {
        if(check!=checkp)
        {
            setTimeout(()=>first.src="img/img 6.jpg",1000);
            setTimeout(()=>second.src="img/img 6.jpg",1000);
            first.style.pointerEvents = 'auto';
            second.style.pointerEvents = 'auto';
        }
    }
    
    
    console.log(check);
    console.log(checkp);
    console.log(count);
    console.log(classname);

}