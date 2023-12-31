# fullStackDevDouglasCollege

## To create server

npm init
npm i express body-parser axios nodemon

Change configuration in package.json adding: 
"Type": "module"

and inside "Scripts"

"start": "nodemon server.js"

Then create index.js or the entry file stated in package.json
write the server on index.js


start server with:
npm start

To use .ejs document files
npm install ejs

npm install node-fetch

## Create react app

npm init react-app app-name

to start the app:

  cd quote-cards-practice
  npm start


## Deployment

Vercel
Render
Netlify

For Netlify: 

upload project to github, and log in using github account

deploy an existing project using github
select repository, add environmental variables

deploy and wait. 

NOTE: when using react router after refreshing or going back the route is lost. you need to go back to home page
add file named: "_redirects" in the public folder and type:
/* /index.html 200

if you make changes to the project, you need to redeploy

Deploy using render: 

select repository 
commands: 
build command: npm i
start command: npm start or node server

In mongoDB add a user with read and write role
Create a database and click connect, then mongoDB for vs code to see the url to connect a project to a database in the cloud

### Deploy a server

configure port as: 
const port = process.env.PORT || 3000;

create .env file to set the enviromental variables
npm i dotenv
add to server: 
require('dotenv').config()

user = process.env.USERID
pw = process.env.PW

uri = 'mongodb+srv://'+user+':'+pw+'@cluster0testfullstackdo.mxhexez.mongodb.net/Tasks'

mongoose.connect(
  uri
);

then upload to github and use the deployment service to connect to the githup repository


## Create fullstack mern application exam practice

1. First build a simple server with the necessary functions and conection to mongo DB
2. npm install on backend folder
3. node <filename> to run the server
4. Change the database name on the url connection
5. Change the schema for the collection
6. Change the add parameters, edit parameters to match the schema and test
7. upload server to repository, add gitignore
8. deploy on render choosing webservice use instructions above

Now create the frontend

1. Create react app
2. install react-router-dom, axios and bootstrap using npm i axios, react-router-dom
3. Build router on app 
4. Build component and use axios to fetch data using deployed server url
5. Upload frontend to new github repository
6. If using netlify change build command to npm start
