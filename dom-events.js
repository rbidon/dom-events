// We use the getElementById method to grab items from the document

const button = document.getElementById('button');

// We then define our event handler function

function eventHandlerFunction(event){

// The event target references the object that we dispatch our event onto.
    event.target.innerHTML = 'Added to cart!';
    console.log(event.timeStamp);
}

// We add an EventListener method with two parameters:
// 1. The event name in a string format (e.g. 'click').
// 2. The event handler function that we want executed once the event fires (e.g. eventHandlerFunction)

button.addEventListener('click', eventHandlerFunction);



// Don't touch anything above here._________________________________________________________________

// .getElementById() - to grab the id button
const secondButton = document.getElementById('secondButton'); 

// Create a function called colorChangeEvent that uses the event's target property to change the styling of the second button when it is clicked. Give it a border-radius. Color the background blue. Make the text white. The second button can be found in index.html. It has an id of "secondButton".

// randomize color function

const colorRandom = () => {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    const colorRandom = `rgb(${red}, ${blue}, ${green})`;
    return colorRandom
}


function colorChangeEvent(color){
color.target.innerHTML = "Color Change";
color.target.style.backgroundColor = colorRandom();
// color.target.style.backgroundColor = "#7CDEDC";
// borderRadius: capitals the R
color.target.style.borderRadius = "80px";
color.target.style.color = colorRandom();
// color.target.style.color = "white";
}


// After creating your colorChangeEvent function, add an event listener to your target element, which will be the "color-changer" button.

secondButton.addEventListener('click', colorChangeEvent);