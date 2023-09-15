//console.log(document.getElementById('content'));

// Gets the div with id of "content"
const content = document.querySelector(`#content`);
// Gets <h1>Header 1</h1>
const header = document.querySelector(`h1`);
// Gets <strong>fill</strong>
const bold = document.querySelector(`p strong`);
// Gets the div with the class of "featured"
const featured = document.querySelector(`.featured`);
// Gets all the <p> tags and what is inside them
const paragraphs = document.querySelectorAll(`p`);
// Gets all the <div> tags and what is inside them
const divs = document.querySelectorAll(`div`);

console.log('content id:'+ content); //gets all the tag element
console.log('bold:'+ bold.innerHTML); //gets the inner data



const headers=Array.from(document.querySelectorAll('p'));
headers.map(header => console.log(header));  //loop through each element

const myArray=['One','Two','Three'];
myArray.map(header => console.log(header));

//Manipulate the dom styles
const h2=document.querySelector('h2');
h2.className="regular-title";   //use javascript to change class name
h2.id="new-id";

const h2Array=Array.from(document.querySelectorAll('h2'));
h2Array.forEach( element => element.className="regular-title"); //loop through each element and change the classname

h2Array[0].classList.add('new-class');           //removes class from first array element
h2Array[0].classList.remove('regular-title');    //adds new class to first element of the array

//Creating functions for UI , creating the content of the page from javascript
const header2 = siteName => `<header><h1>${siteName}</h1></header>`
const content2 = page => (`<section class="content">
<h2>${page.title}</h2>
<div>${page.content}</div>
</section>`)
const sidebar = widgets => `<aside>${widgets}</aside>`
const footer = siteName => `<footer><p>Copyright ${siteName}</p></footer>`


console.log(header2('Oliver Site'));
document.querySelector('.app').innerHTML=header2('Oliver Site');

// Get the container div
const container = document.querySelector( `.app` )
// Setup site data
const siteName = `My Site`
const page = { title: `Hello`, content: `<p>Lorem</p>` }
const widget = `<h3><a href="/">About Me</a></h3>`
// Add data to the page
container.insertAdjacentHTML( `beforeend`, header2(siteName) )
container.insertAdjacentHTML( `beforeend`, content2(page) )
container.insertAdjacentHTML( `beforeend`, sidebar(widget) )
container.insertAdjacentHTML( `beforeend`, footer(siteName) )


//Create listeners in the DOM

// Get a DOM collection and convert to
// a JS array for mapping
const links = Array.from( document.querySelectorAll( 'nav.main a' ))
// Add an event listener to each link
// To call sayHi() when clicked
links.map( link => link.addEventListener( 'click', createAward ))
// Function called when link is clicked

//function sayHi() { alert( 'Hi!' ); }

function sayHi( e ) {
    e.preventDefault()
    console.log( e.target )  //returns the html element to the console so you can perform other actions
    }

    function createAward(e){
        e.preventDefault()
        clientName=e.target.innerHTML;
        console.log(clientName);

        e.target.innerHTML=createCertificate(clientName);
    }

    function createCertificate(myClient){
        return `<h1>Congratulations ${myClient} for passing the course</h1>`
    }

