let addtodolist=document.getElementById('button');
let todocontainer=document.getElementById('todocontainer');
let input=document.getElementById('input');

addtodolist.addEventListener('click', function(){

    var para=document.createElement('p');
    para.classList.add('para-style');
    para.innerText=input.value;
    todocontainer.appendChild(para);
    input.value="";
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
    })
    para.addEventListener('dblclick',function(){
        todocontainer.removeChild(para);
    })
})