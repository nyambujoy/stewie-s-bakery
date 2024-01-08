const pushButton = document.getElementById("push")
const inputTask = document.getElementById("inputTask")
const tasksContainer = document.querySelector(".tasks")
const newTasks = document.querySelectorAll(".newTasks")

// console.log(newTasks)


pushButton.addEventListener("click", function () {
    const valueOfInput = inputTask.value
    console.log(valueOfInput)
    console.log("clicked")
    if (valueOfInput.length == 0) {
        alert("please type in a task")
    } else {
        tasksContainer.innerHTML +=
            `
        <div class="task">
        <span id="taskName">
        ${valueOfInput}

        </span>
        <button class="delete">
        <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        </div>
        `
        let currentTasks = document.querySelectorAll(".delete")
        for (let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function () {
                this.parentNode.remove()
            }
        }

        let allTask = document.querySelectorAll("#taskName")
        for (let i = 0; i < allTask.length; i++) {
            allTask[i].onclick = function () {
                this.classList.toggle("completed")
            }
        }


        inputTask.value = ""




    }
})