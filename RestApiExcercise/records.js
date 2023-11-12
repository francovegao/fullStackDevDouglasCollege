const fs = require('fs');

function generateRandomId(){
  return Math.floor(Math.random() * 10000);
}

function save(data){
  return new Promise((resolve, reject) => {
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Gets all users
 * @param None
 */
function getUsers(){
  return new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

/**
 * Gets a specific user by ID
 * @param {number} id - Accepts the ID of the specified quote.
 */
async function getUser(id){
  const users = await getUsers();
  return users.records.find(record => record.id == id);
}
/**
 * Gets a random user
 * @param None
 */
async function getRandomUser(){
  const users= await getUsers();
  const randNum = Math.floor(Math.random() * users.records.length);
  return users.records[randNum];
}

/**
 * Creates a new user record 
 * @param {Object} newRecord - Object containing info for new user
 */
async function createUser(newRecord) {
  const users = await getUsers(); 
  
  newRecord.id = generateRandomId(); 
  users.records.push(newRecord);
  await save(users); 
  return newRecord; 
}

/**
 * Updates a single record 
 * @param {Object} newUser - An object containing the changes to quote: quote, author, year (all optional)
 */
async function updateUser(newUser){
  const users = await getUsers();
  let user = users.records.find(item => item.id == newUser.id);
  
  user.email = newUser.email;
  user.username = newUser.username;
  
  await save(users);
}

/**
 * Deletes a single record
 * @param {Object} record - Accepts record to be deleted. 
 */
async function deleteUser(record){
  const users = await getUsers();
  users.records = users.records.filter(item => item.id != record.id);
  await save(users);
}

module.exports = {
  getUsers,
  getUser, 
  createUser, 
  updateUser, 
  deleteUser,
  getRandomUser
}
