let inputElement = document.querySelector('input')
let listItemContainer= document.querySelector('.taskcontainer')
let addButton = document.querySelector('button') 
 

// darkmode 
// let darkmode =document.querySelector('.all')
// function Darklight(){
//     darkmode.style.backgroundColor='green';
// };
//  darkmode.addEventListener('click',Darklight); 

 // css
//  inputElement.style.boxSizing='1.2rem'
// let bkgrd =document.querySelector('.all')
 
 

//creating an li Element
function createNewTask(){
    let input = inputElement.value
    let listElement=document.createElement('li')
   listElement.innerText = input
   return listElement;

}  
 
function addnewItemToListcontainer(){
    listItemContainer.appendChild(createNewTask());
    inputElement.value=""; 
}

// changing to an array
function saveTasksToLocalStorage(){
    let tasks = inputElement.value
    let taskArray= [tasks]

    if (localStorage.getItem('to-dos') !== null){
        let mustDos = JSON.parse(to-dos);
        mustDos.push(tasks) 
    } else{
    localStorage.setItem('to-dos', JSON.stringify(taskArray))
}
}

//eventlistener
addButton.addEventListener('click', function (){addnewItemToListcontainer();
    saveTasksToLocalStorage();
})


// creating a TickButton

 let TickButton = createElement("button1")
 TickButton.innerText='ON'
 TickButton.listItemContainer.add('tickTask');
 input.append(TickButton);
 
 let deleteButton = createElement("button1")
 deleteButton.innerText='OFF'
 deleteButton.listItemContainer.add('deleteTask');
 input.append(deleteButton); 

















