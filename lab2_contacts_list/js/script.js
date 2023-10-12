var users = users;

//read the users and store it in Array
const usersArray=Array.from(users);

function getTotalContacts(){
    // Get the HTML element
    const contactsCounter = document.querySelector(".page-header");

    //Function to insert HTML into UI page
    const printTotalContacts = info => (`   <h2>Contacts</h2> 
                                            <h3>Total: ${info.length}</h3>`);
    
    //Call the printTotalContacts function and add to HTML element
    contactsCounter.insertAdjacentHTML(`beforeend`, printTotalContacts(usersArray));

}

//print the users
function printUsers(pageSelected){
    // Get the HTML elements
    const contactsList = document.querySelector('.contact-list');

    //remove the previous contacts
    while(contactsList.hasChildNodes()){
        contactsList.removeChild(contactsList.firstChild);
    }

    //Creating functions for UI , creating the content of the page from javascript
    const insertContact = contactInfo =>{ 
        //split first and last name to create email of contact
        const nameSplit = contactInfo.name.split(" "); 

        return (`<li class="contact-item cf">
                    <div class="contact-details">
                        <img class="avatar" src="${contactInfo.image}">
                        <h3>${contactInfo.name}</h3>
                        <span class="email">${nameSplit[0]}.${nameSplit[1]}@example.com</span>
                    </div>
                    <div class="joined-details">
                        <span class="date">Joined ${contactInfo.joined}</span>
                    </div>
                </li>`)
        };
                

    // Add data to the page
    const usersMaxNumber=pageSelected*10;
    for(let x=usersMaxNumber-10; x<usersMaxNumber; x++){
        if(usersArray[x]!=undefined)
            contactsList.insertAdjacentHTML(`beforeend`, insertContact(usersArray[x]));
    }
    
    //usersArray.forEach(user=>
      //  contactsList.insertAdjacentHTML(`beforeend`, insertContact(user)));

}

function insertPagination(){
    // Get the HTML elements
    const paginationList = document.querySelector('.pagination').getElementsByTagName('ul')[0];

    //Function to insert HTML into UI page
    const printPages = number =>(`  <li><a href="">${number}</a></li>`);

    //Call the function the number of times needed to add the pagination numbers
    if(usersArray.length%10!=0)
        pages=Math.floor(usersArray.length/10)+1;
    else
        pages=Math.floor(usersArray.length/10);

    for(let x=1; x<=pages; x++){
        paginationList.insertAdjacentHTML(`beforeend`, printPages(x));
    }
    
}

getTotalContacts();
insertPagination();
printUsers(1);


// Read the page number click event

// Get links paginaton collection to map it to an array
const links = Array.from( document.querySelectorAll( 'nav.pagination a' ))
// Add an event listener to each link to change the page when clicked
links.map( link => link.addEventListener( 'click', sayHi ))
// Function called when link is clicked

//function sayHi() { alert( 'Hi!' ); }

function sayHi( e ) {
    e.preventDefault()
    pageNumber=e.target.innerHTML;

    printUsers(pageNumber);
    }
