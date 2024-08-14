// Define and initialize the todoList array
let todoList = [
    // {
    //     item:'Buy Milk', 
    //     dueDate:'4/12/1223'
    // },
    // {
    //     item:'Play',
    //     dueDate:'2/12/1234'
    // }
                ];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    let dateElement = document.querySelector('#todo-date');
    let todoDate = dateElement.value;

    // Check if the input is not empty
    // if (todoItem.trim() !== "") {
        todoList.push({item:todoItem, dueDate:todoDate});
        
        // Clear the input field after adding the item
        inputElement.value = "";
        dateElement.value = "";
        // console.log(todoList); // Optionally, log the current list to the console
        displayItems();
    }
// }


function displayItems(){
    let containerElements = document.querySelector('.todo-container');

    let newHtml = '';

    for(let i=0; i<todoList.length; i++){
        // let Item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let {item, dueDate}= todoList[i];
        newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class ="delete" onclick="todoList.splice(${i},1)
        displayItems()
        ">Delete</button>
        
        `;
    }
    containerElements.innerHTML = newHtml;
}