let addBtn = document.querySelector(".btn");
let inputBox = document.querySelector(".add_list");
let listBox = document.querySelector(".list");
inputBox.value = "";

addBtn.addEventListener("click",() =>{
    addList();
});
inputBox.addEventListener("keypress",(event) =>{
    if(event.key == "Enter"){
        addList();
    } 
});

function addList(){
    if(inputBox.value == ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value ;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    saveData();
    inputBox.value = "";
}

listBox.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listBox.innerHTML);
}
function showTask(){
    listBox.innerHTML = localStorage.getItem("data");
}
showTask();