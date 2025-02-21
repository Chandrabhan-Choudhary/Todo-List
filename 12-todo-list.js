const todoList = [
    {
        name: 'make dinner',
        dueDate: '2022-12-22'
    },
    {
        name: 'wash dishes',
        dueDate: '2022-12-22'
    }
];

renderTodoList();
function renderTodoList()
{
    let todoListHTML = '';

    todoList.forEach((todoObject, index) =>
    {
        const {name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button
              class="delete-todo-btn js-delete-todo-btn">Delete</button>
            `;
        todoListHTML += html;
    });
    /*
    for (let i=0; i<todoList.length; i++)
    {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name, dueDate} =todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="delete-todo-btn">Delete</button>
            `;
        todoListHTML += html;
    }
    //console.log(todoListHTML);
    */

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    
    document.querySelectorAll('.js-delete-todo-btn')
        .forEach((deleteButton, index) =>
        {
            deleteButton.addEventListener('click', () =>
            {
                todoList.splice(index, 1);
                renderTodoList();
            })
        })
}

document.querySelector('.js-add-todo-btn')
    .addEventListener('click', () =>
    {
        addTodo();
    })

function addTodo()
{
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push(
        {
            //name: name,
            //dueDate: dueDate
            name,   //shorthand property
            dueDate
        }
        );
    //console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}