const button = document.querySelector('#push')
const newTaskInput = document.querySelector('#newtask input')
const tasks = document.querySelector('#tasks')

button.onclick = function() {
    if(newTaskInput.value.length === 0) {
        alert("Please Enter Task Name")
    }

    else {
        tasks.innerHTML += `
        <div class='task'>
            <span id='taskname'>
                ${newTaskInput.value}
            </span>
            <button class='delete'>
            Remove
            </button>
        </div>
        `;

        const currentTasksDelete = document.querySelectorAll('.delete')
        for (let i=0; i<currentTasksDelete.length; i++) {
            currentTasksDelete[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}