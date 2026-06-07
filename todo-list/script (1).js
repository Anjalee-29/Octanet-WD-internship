const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

// Load saved tasks from localStorage on page load
window.addEventListener('load', loadTasks)

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// Add a new todo item
function addTodo() {
    const text = inputtdl.value.trim()

    // Fix: check for empty input BEFORE adding to DOM
    if (text === '') return

    const items = document.createElement('div')
    items.classList.add('items')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = text
    items.appendChild(item)

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    items.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    items.appendChild(trashbutton)

    listtdl.appendChild(items)
    inputtdl.value = ''

    saveTasks()
}

// Check and delete todo items
function okdel(e) {
    const item = e.target

    // Check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
        saveTasks()
    }

    // Delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
        saveTasks()
    }
}

// Save tasks to localStorage
function saveTasks() {
    const tasks = []
    document.querySelectorAll('.items').forEach(item => {
        tasks.push({
            text: item.querySelector('.item').innerText,
            checked: item.classList.contains('checklist')
        })
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Load tasks from localStorage
function loadTasks() {
    const saved = localStorage.getItem('tasks')
    if (!saved) return

    JSON.parse(saved).forEach(task => {
        const items = document.createElement('div')
        items.classList.add('items')
        if (task.checked) items.classList.add('checklist')

        const item = document.createElement('p')
        item.classList.add('item')
        item.innerText = task.text
        items.appendChild(item)

        const checkbutton = document.createElement("button")
        checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
        checkbutton.classList.add("check-button")
        items.appendChild(checkbutton)

        const trashbutton = document.createElement("button")
        trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        trashbutton.classList.add("trash-button")
        items.appendChild(trashbutton)

        listtdl.appendChild(items)
    })
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)

// Also allow adding task with Enter key
inputtdl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        addTodo()
    }
})
