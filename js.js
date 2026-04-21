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
                <button class="task-options">
                    <i class="fa-solid fa-ellipsis"></i>
                </button>
            </div>
        `;
        input.value = "";
    }
});

// ✅ FIXED MENU LOGIC
document.addEventListener("click", (e) => {

    // remove old menus (prevents duplicates)
    document.querySelectorAll(".menu").forEach(menu => menu.remove());

    const option = e.target.closest(".task-options");

    if (option) {
        const task = option.closest(".task");

        let task_menu = document.createElement("div");
        task_menu.classList.add("menu");

        task_menu.innerHTML = `
            <p class="delete">Delete</p>
            <p class="edit">Edit</p>
            <p class="save">Add to Local Storage</p>
        `;

        task.appendChild(task_menu);
    }

    // ✅ DELETE FUNCTION
    if (e.target.classList.contains("delete")) {
        e.target.closest(".task").remove();
    }

});
