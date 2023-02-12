const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let dragableTodo = null;

todos.forEach((todo) => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

function dragStart(){
    dragableTodo = this;
    console.log("dragStart");
}

function dragEnd() {
    dragableTodo = null;
    console.log("dragEnd");
}

all_status.forEach((status) =>{
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(){
    this.style.border = "1px dashed #ccc";
    console.log("dragEnter");
}

function dragLeave(){
   this.style.border = "none";
    console.log("dragLeave");
}
 function dragDrop(){
    this.style.border = "none";
    this.appendChild(dragableTodo);
    console.log("dropped");
 }

 const btns=document.querySelectorAll("[data-target-modal]");
 const close_modal = document.querySelectorAll(".close-modal");
 const overlay = document.getElementById("overlay");

 btns.forEach((btn) => {
    btn.addEventListener("click", () =>{
        document.querySelector(btn.dataset.targetModal).classList.add("active");
        overlay.classList.add("active");
    });
 });

 close_modal.forEach((btn) => {
    btn.addEventListener("click", () =>{
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
 });

 window.onclick = (event) =>{
    if(event.target == overlay){
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.calssList.remove("active"));
        overlay.classList.remove("active");
    }
 };

const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click",createTodo);

function createTodo(){
    const todo_div = document.createElement("div");
    const input_val = document.getElementById("todo_input").value;
    const txt = document.createTextNode(input_val);

    todo_div.appendChild(txt);
    todo_div.classList.add("todo"); 
    todo_div.setAttribute("draggable","true");

    const span =document.createElement("span");
    const span_text = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_text);

    todo_div.appendChild(span);
    no_status.appendChild(todo_div);
    
    span.addEventListener("click",() => {
        span.parentElement.style.display = "none";
    });

    todo_div.addEventListener("dragstart",dragStart);
    todo_div.addEventListener("dragend",dragEnd);
    document.getElementsById("todo_input").value = "";
    todo_form.classList.remove("active");
    overlay.classList.remove("active");
}

const close_btns = document.querySelectorAll(".close");
close_btns.forEach((btn) => {
    btn.addEventListener("click",() => {
        btn.parentElement.style.display = "none";
    });
});