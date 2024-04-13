// making a global structure from where I am maintaing my whole todo-list.
// empty todo-list
// let todoList = [
//    {
//      item1 : 'Do 1 DSA Qn',
//      item2 : 'Solve daily leetcode questions',
//      time1 : '23:45',
//      time2 : '15:20',
//      dueDate : '21/02/2024'
//    }
// ];

// displayItems();

// declared and initialized todoList with data received from getItems in todoList stored.

let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function addTodo() {
   let input1Element = document.querySelector('#todo-input-1');
   let input2Element = document.querySelector('#todo-input-2');
   let time1Element = document.querySelector('#from_hour');
   let time2Element = document.querySelector('#to_hour');  
   let dateElement = document.querySelector('#todo-date');
let todoItem1 = input1Element.value;
let todoItem2 = input2Element.value;
let todoTime1 = time1Element.value;
let todoTime2 = time2Element.value;
let todoDate =  dateElement.value;

if(!Array.isArray(todoList)) {
   todoList = [];
}

let newTodoItem = {
   item1 : todoItem1,
   item2 : todoItem2,
   time1 : todoTime1,
   time2 : todoTime2,
   dueDate : todoDate
}

todoList.push(newTodoItem);

// todoList.push({item1 : todoItem1, item2 : todoItem2, time1 : todoTime1, time2 : todoTime2, dueDate : todoDate});

// before deletion of deleted todoList to empty string, add the updated data-items inside todoList to localstorage.
localStorage.setItem('todoList', JSON.stringify(todoList)); 

input1Element.value = '';
input2Element.value = '';
time1Element.value = '';
time2Element.value = '';
dateElement.value = '';
displayItems();
}

function displayItems() {
   let containerElement = document.querySelector('.todo-container');
   let newHtml = '';
   // for( let i=0; i<todoList.length; i++) {
      todoList.forEach((todoItem, index) => {
      // The splice() method is used to add or remove elements of an existing array with parameters as index from deletiona nd how many no's to be deleted and the return value will be the removed items from the array.
      // let item = todoList[i].item;
      // let dueDate = todoList[i].dueDate;
      // let {item1, item2, time1, time2, dueDate} = todoList[i];
      // let item_1 = todoList[i].item1;
      // let item_2 = todoList[i].item2;
      // let time_1 = todoList[i].time1;
      // let time_2 = todoList[i].time2;
      // let date = todoList[i].dueDate;

      newHtml += `
      <div class="todo-item" >
      <span>${todoItem.item1}</span>
      <span>${todoItem.item2}</span>
      <span>${todoItem.time1}</span>
      <span>${todoItem.time2}</span>
      <span>${todoItem.dueDate}</span>
      <button class='btn-delete' onclick="deleteItem(${index})"> Delete </button>
      </div>
      `;
   });
   //innerText returns innerText contained by element and innerHTML contains innerHTML contained by element.
   containerElement.innerHTML = newHtml;
}

// function to delete the todoList items.
function deleteItem(index) {

   todoList.splice(index, 1);
   // saved updated todoList in Local Storage.
   localStorage.setItem('todoList', JSON.stringify(todoList));
   // displays updated after deletion items in todoList.
   displayItems();
   }
   // displays the initial items in todoList.
   displayItems();