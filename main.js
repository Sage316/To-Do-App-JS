window.addEventListener('load', ()=>{
    const form= document.querySelector("#task-form");
    const input= document.querySelector("#task-input");
    const list= document.querySelector("#tasks");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;
        if (!task) {
            return;
        } 

        const task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div);


        task_edit_botton.addEventListener('click', ()=>{
            
            if (task_edit_botton.innerText.toLowerCase() =="edit") {
                    task_input.removeAttribute("readonly");
                    task_input.focus();
                    task_edit_botton.innerText = "Save";
                    task_input.style.textDecoration="none"
            }else{
                task_input.setAttribute("readonly", "readonly");
                task_edit_botton.innerText ="Edit";
                
            }
        });

        task_delete_button.addEventListener('click', ()=>{
            if (confirm("Are you sure you want to delete this task?")) {
                list.removeChild(task_div);
                

            }
        })
        
        task_completed_button.addEventListener('click', ()=>{
            
                task_input.style.textDecoration="line-through";
                task_input.setAttribute("readonly", "readonly");
               
        })

   
        input.value = "";


    });
});
