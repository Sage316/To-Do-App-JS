window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list = document.querySelector("#tasks");


    // empty array for the new data added
    var all = [];

    // event listener on submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();


        // assign input value to variable
        const task = input.value;
        if (!task) {
            return;
        }

        var a = task.toLowerCase()
        all.push(a)
        console.log(all)

        console.log(all.sort());



        // Created a div and added a task
        const task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div);
        const test = document.getElementsByClassName('task-list');
        sessionStorage.setItem("actions", test);
        let taskaction = sessionStorage.getItem("actions");

        

        function setBoxColour(personName) {
            const example = document.getElementsByClassName("task-list");
            example.value = personName;
            example.classList.appendChild(example);
        }
        

        //Creatig a new div to contain the user output (the new todo input) 
        const task_content_div = document.createElement("div");
        task_content_div.classList.add("content");
        task_div.appendChild(task_content_div);



        // Creating a input for the users entered value that is editable
        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly", "readonly");
        task_content_div.appendChild(task_input);

        // added todo items to session storage
        sessionStorage.setItem("items", task);
        let personName = sessionStorage.getItem("lastname");
        document.getElementsByClassName("text").innerHTML = personName;

        // created a div that cotains the action buttons
        const task_actions_div = document.createElement("div");
        task_actions_div.classList.add("actions");
        task_div.appendChild(task_actions_div);



        //Edit button feature added
        const task_edit_botton = document.createElement("button");
        task_edit_botton.classList.add("Edit");
        task_edit_botton.innerHTML = "Edit";

        //Delete button function added
        const task_delete_button = document.createElement("button");
        task_delete_button.classList.add("Delete");
        task_delete_button.innerHTML = "Delete";

        //Completed button feature added
        const task_completed_button = document.createElement("button");
        task_completed_button.classList.add("Completed");
        task_completed_button.innerHTML = "Completed";

        // Appending the action buttons to html
        task_actions_div.appendChild(task_edit_botton);
        task_actions_div.appendChild(task_completed_button);
        task_actions_div.appendChild(task_delete_button);

        // added a event-listner that listens for a button click in order to perform the edit and save funtionality  
        task_edit_botton.addEventListener('click', () => {

            if (task_edit_botton.innerText.toLowerCase() == "edit") {
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_edit_botton.innerText = "Save";
                task_input.style.textDecoration = "none"
            } else {
                task_input.setAttribute("readonly", "readonly");
                task_edit_botton.innerText = "Edit";

            }
        });

        //Delete pop up created
        task_delete_button.addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this task?")) {
                list.removeChild(task_div);


            }
        })

        // made line-through text decoration visible         
        // added a event-listner that listens for a button click in order to perform the edit and save funtionality  

        task_completed_button.addEventListener('click', () => {
            task_input.style.textDecoration = "line-through";
            task_input.style.textDecorationColor = "red";
            task_input.setAttribute("readonly", "readonly");

        })


        input.value = "";

    });


});
