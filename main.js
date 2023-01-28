// Researched mdn for DOM manipulation
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

//2
let shoppingList = [];
const unicodeCharacter = ' \u00D7';

//3
let itemList = document.querySelector('#itemList');

//4
let userInput = document.querySelector('#input');
userInput.addEventListener('keyup', enter);

//5
function addItem(){

    //6
    let inputValue = userInput.value;
    //7

    if(inputValue.length == 0){
        alert("Please enter an item");

        //8
        userInput.value = "";

    //9
    }else{

        //10
        let newListElement = document.createElement("li");
        let newSpanElement = document.createElement("span");

        //11
        newListElement.textContent = inputValue;
        newListElement.addEventListener('click', crossItem);

        //12
        newSpanElement.innerHTML = unicodeCharacter;
        newSpanElement.addEventListener('click', deleteItem);
        
        //13
        itemList.appendChild(newListElement);
        newListElement.appendChild(newSpanElement);

        //14
        shoppingList.push(inputValue);

        //15
        userInput.value = "";

    }
}

//16
function enter(event){
    if(event.keyCode === 13){
        addItem();
    }
}

//17
function crossItem(){
    
    this.classList.toggle('checked');
    
}

//18
function deleteItem(){   
    
    //19
    this.classList.add('close');
    this.innerHTML = "";

    //20
    let result = this.parentElement.textContent;

    //21
    this.parentElement.style.display="none";

    //22
    for(i=0; i < shoppingList.length; i++){
        if(result === shoppingList[i]){
            let indexValue = shoppingList.indexOf(shoppingList[i]);

            shoppingList.splice(indexValue,1);

            break;
        }
    }

    //23
    console.log(shoppingList);

}

/*
    Thinking
        1. This is a shopping list program. We are able to carry out several actions: add an item, cross out an item, and delete an item.

        2. Created a variable named "shoppingList" to store all of our items, and a second variable "unicodeCharacter" which stores the equivalent letter 'x'. This goes into our span elements.

        3. Creating a variable "itemList" to store a reference to the unordered list in our html.

        4. First, storing a reference to our "input" id in a variable named "userInput". Secondly, adding an event listener to it, which checks for when the user types in the input box and executes a callback function named "enter". When the user inputs an item and presses the enter key, this function will call our "addItem()" function so the item will be added to the list.

        5. I've created several functions based on what the user can do:
            a. add an item to the shopping list
            b. cross an item off the shopping list
            c. delete an item off the shopping list
        
            Our first function, "addItem" adds an item to our shopping list, once the user clicks the 'Add Item" html button. There is an onclick event listener on this html element.

        6. We get the value inputted by the user, and store this in a variable called "inputValue".

        7. We use an if statement to check if the user has input anything or not. The length property is used to determine this. Alternatively, you could of checked for an empty string too instead of using the length property. If the user hasn't entered anything they will get an alert if they try and press the "Add item" button.
        
        8. After this the input value is reset.

        9. If the user has entered something into the input field the else block is executed.

        10. We start off by creating a new list item element, and storing this in a variable named "newListElement". At the same time, we create a new span element and store it in "newSpanElement".

        11. We get the user's input and place it inside our newly created list item element. We also add an event listener to it: when we click on our list item it will be crossed out.

        12. We add the value inside our variable "unicodeCharacter" to our newly created span element, and add an event listener which will execute our callback function "deleteItem" when clicked. This will remove the list item element from the list.

        13. Lastly, we append our list item element as a child to our list, and the new span element is appended to this new list item as a child element too.

        14. The user's input is added to our array, "shoppingList".

        15. Our input field is reset, ready for new input from the user. 

        16. This function calls "addItem" if the user presses enter on the keyboard after entering an item. To determine this we pass in the "event" object and check its keycode.

        17. This will cross out the list item which the user clicks on. We use 'this' to target whichever list item the user had clicked on. Essentially, a class gets added which adds the text-decoration:line-through property to the list item clicked.

        18. Our final function "deleteItem" does exactly that.

        19. Using, 'this' we're able to target the span element which was clicked, and we add a new class here called "close". This removes the span element from the screen, although if you check in the developer tools it still exists in the DOM tree. I changed the span element's innerHTML to an empty string. The reason behind this is I needed to get the value of its parent list item to compare against the items in our "shoppingList" array but each time the span's unicodeCharacter 'x' would be added too, so I have changed it to an empty string so it doesn't cause any issues. 

        20. We traverse the DOM using parentElement, grab the list item's value and store it in a varibale called "result".

        21. We also remove this list item from our list by setting its display to none.

        22. We use a loop to loop through all the items in our "shoppingList array". An if statement checks if our list item value, stored in "result", matches any of the items in "shoppingList". If so, we next use indexOf() to find at which location in the array that item is, and store it in a variable called "indexValue.". We use this as an argument in our .splice() method to remove it. Lastly, we break out from the loop, as we don't need to continue checking after this.

        23. For testing purposes, I checked in the console to ensure the items were being removed from the "shoppingList" array each time we clicked on an 'x'.
*/

