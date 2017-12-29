var todos = []
var input = prompt('What would you like to do')

while (input !== 'quit') {
    if (input === 'list') {
        listTodos()
    } else if (input === 'new') {
        addTodo()
    } else if (input === 'delete') {
        deleteTodo();
    }
    input = prompt('What would you like to do')
}

console.log('Ok..You Quit The APP')

function listTodos() {
    console.log('**********')
    todos.forEach(function(todo, i, arr) {
        console.log(i + ': ' + todo)
    })
    console.log('**********')
}

function addTodo() {
    var newTodo = prompt('Enter New Todo')
    todos.push(newTodo)
    console.log('Added a Todo')
}

function deleteTodo() {
    var index = prompt('Enter index of Todo to delete')
    todos.splice(index, 1)
    console.log('Deleted a Todo')
}