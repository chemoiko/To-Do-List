const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")


function addTask(){
    if(inputBox.value === ''){
        alert("you must input a value!");
    }
    else{
        let li = document.createElement("li");      //this part appends what was in the inputbox to the list items
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");      //this creates a new span element and sets its content to the unicode character 'x' and then appends it to the 'li' element
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");       //if an li element is clicked, it will add the checked class name and if not we will remove that class name
        saveData();     //so that it saves whatever it did above
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();        //once that x thing is clicked, the li will be removed
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);      //whatever content is in the listcontainer, it will be stored in the data variable in the browser
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");      //this is to display the data whenever we open the website again
}
showTask();     
