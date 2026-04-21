let button = document.querySelector("#push");
let input = document.querySelector("#input");
let tasklist = document.querySelector("#tasks");

button.addEventListener("click", () => {
    if (input.value.length == 0) {
        alert("please enter the task and add to your list");
    } else {
        tasklist.innerHTML += `
            <div class="task">
                <span class="taskname">${input.value}</span>
                <button class="task-options"><i class="fa-solid fa-ellipsis"></i></i></button>
            </div>
        `;
        input.value = ""; // clear input
    }
});
document.addEventListener("mouseover", (e) => {

    const option = e.target.closest(".task-options");

    if (option) {

        const task = option.closest(".task");

        if (task.querySelector(".menu")) return;

        let task_menu = document.createElement("div");
        task_menu.classList.add("menu");

        task_menu.innerHTML = `
            <p>Delete</p>
            <p>Edit</p>
            <p>Add to Local Storage</p>
        `;

        task.appendChild(task_menu);
    }

});


