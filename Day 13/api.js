

function fetchdata(){
fetch(`https://api.covid19api.com/summary`).then(res=>res.json()).then(data=>{
    console.log(data.Global);
    getResponce(data);
})
};


function getResponce(data)
{
    console.log(data.Global.TotalRecovered);
    var val='';
    val=
    `<td>${data.Global.TotalConfirmed}</td><td>${data.Global.TotalDeaths}</td><td>${data.Global.TotalRecovered}</td>`
    console.log(val);
    document.getElementById("data").innerHTML=val;
}
fetchdata();


function refreshData(){
    document.getElementById("data").innerHTML=null;
    fetchdata();
}



