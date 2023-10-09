var quotes = data;
createSlides(quotes);

// create a function tos generate all quote slides
function createSlides(allquotes) {

//read the quotes and store it in Array
 const quotesArray=Array.from(allquotes);
 console.log(quotesArray);

// Get the container div
const container = document.querySelector('.slideshow-container');

//Creating functions for UI , creating the content of the page from javascript
const insertQuote = item => (`<div class="mySlides">
<q>${item.quote}</q>
<p class="author">- ${item.author}</p>
</div>`)

// Add data to the page
quotesArray.forEach(item=> 
    container.insertAdjacentHTML( `beforeend`, insertQuote(item),
    console.log(item.quote + item.author) ));

}

showSlides(6);
// create a function to show one of the slides that is reached
function showSlides(n) {
// Get the container div
const container = document.querySelector('.slideshow-container');

slideLocation.innerHTML = container;

console.log(slideLocation);
    
}
// Create a function that run the showSlides function when the mouse is clicked
function plusSlides(n) {
 // ...
}
// find the slide location at class=slideshow-container
 // ...
// create and insert all slides using the createSlides function
// add the slides into the selected location
slideLocation.innerHTML = allslides;
// start the slideshow with the first slide. run showSlides(slideIndex)


/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener...