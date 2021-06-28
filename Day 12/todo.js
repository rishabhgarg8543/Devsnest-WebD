function addtodo(event)
{
    if(event.code=="Enter")
    {
        let todo=document.getElementById("input").value;
        // console.log(todo);
        if(todo)
        {
            let addlist = `<li><span><i class="fa fa-trash"></i></span>${todo}</li>`
            // console.log(addlist);
            let cont=document.getElementById("list");
            cont.innerHTML+=addlist;
            document.getElementById("input").value="";
        }
        else
        {
            alert('Enter a valid value!');
        }
    }
}
document.querySelector("ul").addEventListener('click',function(event){
    event.target.classList.toggle("completed");
});

document.querySelector("ul").addEventListener('click',function(event){
    if(event.target.tagName=="I"){
        event.target.parentElement.parentElement.remove();
    }
    if(event.target.tagName=="SPAN"){
        event.target.parentElement.remove();
    }
});
