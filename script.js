// document.addEventListener -> es una función de JavaScript que se utiliza para escuchar eventos en una página web. En otras palabras, te permite decirle al navegador que esté atento a algo específico que pueda ocurrir en la página y que ejecute cierto código cuando ese evento suceda.

// DOMContentLoaded: Es una forma de garantizar que tu código JavaScript se ejecute solo después de que la página web haya terminado de cargarse, evitando problemas de interacción con elementos que aún no han aparecido en la pantalla.

document.addEventListener("DOMContentLoaded", () => {

    // Vinculamos los elementos y/o nodos del HTML con JavaScript

    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");

    // Al dar click en el botón de la tarea...
    addTaskButton.addEventListener("click", () => {
        // trim() sirve para eliminar espacios en blanco al COMIENZO y al FINAL del String. Obtenemos el valor del input
        const taskText = taskInput.value.trim();
        // Si NO está vacío...
        if (taskText !== "") {
            // Creamos una tarea
            createTask(taskText);
            // Reseteamos el valor del input
            taskInput.value = "";
        }
    });

    // Botón para ELIMINAR una tarea
    taskList.addEventListener("click", (event) => {
        // Si el elemento en el que se hizo clic tiene la clase "delete-task"...
        if (event.target && event.target.classList.contains("delete-task")) {
            // Accedemos al elemento padre del elemento en el que se hizo clic (que sería un elemento de lista <li> en este caso) y luego se llama al método .remove() para eliminar ese elemento de la lista.
            event.target.parentElement.remove();
        }
    });


    // Método para crear una tarea
    const createTask = (text) => {
        // Creamos un nuevo elemento HTML CON JavaScript
        const taskItem = document.createElement("li");
        // Agregamos la clase "task-item" al elemento <li> anterior
        taskItem.classList.add("task-item");
        // Añadimos a cada elemento "li" un span y el texto de la tarea
        taskItem.innerHTML = `
            <span>${text}</span>
            <button class="delete-task">Eliminar</button>
        `;
        // Añadimos a nuestra lista un nuevo ítem
        taskList.appendChild(taskItem);
    }
});