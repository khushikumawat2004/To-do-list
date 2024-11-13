// let inputs= document.getElementById("inp");
// let text = document.querySelector(".text")

// function Add(){
//     if(inputs.value ==""){
//         alert("Please Enter Task")
//     }else{
//         let newEle = document.createElement("ul");
//         newEle.innerHTML= `${inputs.value} <i class="fa-solid fa-trash"></i>`
//         text.appendChild(newEle);
//         inputs.value="";
//         newEle.querySelector("i").addEventListener("click" , remove);
//         function remove(){
//             newEle.remove();
//         }
//     }
// } 
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            ${inputs.value} 
            <button class="done-btn" onclick="markDone(this)">Done</button>
            <i class="fa-solid fa-trash" onclick="removeTask(this)"></i>
        `;
        text.appendChild(newEle);
        inputs.value = "";
    }
}

function markDone(element) {
    let task = element.parentElement;
    task.classList.add("completed");
    element.remove(); // Remove the "Done" button after marking as completed
}

function removeTask(element) {
    let task = element.parentElement;
    task.remove();
}
  