let inputfield = document.getElementById("inputfield");
let addbtn = document.getElementById("addbtn");
let tasks = document.getElementById("tasks");

addbtn.addEventListener('click',() => {
    let para = document.createElement('p');
    para.innerHTML = inputfield.value;
    para.classList.add("para-styling");
    tasks.appendChild(para);

    console.log(tasks);
    para.addEventListener('click',() => {
        para.style.textDecoration = "Line-through";
})

    para.add.addEventListener('dblclick',() => {
        tasks.removeChild(para);
    })

})    