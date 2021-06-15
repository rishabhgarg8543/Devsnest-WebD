function add(){
    var a= document.getElementById("input1").value;
    var b= document.getElementById("input2").value;
    var c= parseInt(a)+ parseInt(b);
    document.getElementById("ans").value=c;
}
function mul() {
    var a,b,c;
    a= document.getElementById("input1").value;
    b= document.getElementById("input2").value;
    c=parseInt(a)*parseInt(b);
    document.getElementById("ans").value=c;
}
function sub() {
    var a,b,c;
    a= document.getElementById("input1").value;
    b= document.getElementById("input2").value;
    c=parseInt(a)-parseInt(b);
    document.getElementById("ans").value=c;
}
function div() {
    var a,b,c;
    a= document.getElementById("input1").value;
    b= document.getElementById("input2").value;
    c=parseInt(a)/parseInt(b);
    document.getElementById("ans").value=c;
}


