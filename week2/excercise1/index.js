var quotes = data;
createSlides(quotes);

// create a function to generate all quote slides
function createSlides(allquotes) {
// <!-- Slideshow container -->
// <div class="slideshow-container">
// <!-- Full-width slides/quotes -->
// <!-- <div class="mySlides">
// <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
// <p class="author">- John Keats</p>
// </div>
// <div class="mySlides">
// <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
// <p class="author">- Ernest Hemingway</p>
// </div>

const container = document.querySelector('.slideshow-container');
 const quotesArray=Array.from(allquotes);
 console.log(quotesArray);

 quotesArray.forEach( item => console.log(item.author));
}
// create a function to show one of the slides that is reached
function showSlides(n) {
 // ...
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