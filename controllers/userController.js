// !The controller is responsible for handling what happens with a request, or data.
// !Queries data
// !Controller = The Request Handler
const db = require('../db');
const UserNotFound = require('../errors/userNotFound');

const getUserMsg = (req, res) => {

  const { id } = req.params;
  const user = db.find((userObj) => userObj.id === Number(id));

  if (!user) 
    throw new UserNotFound('User not found');

  res.send(user.message);
}

const getUser = (req, res) => {
  const { id } = req.params;
  const user = db.find((userObj) => userObj.id === Number(id));

  if (!user) 
    throw new UserNotFound('User not found');

  res.send(user.name);
}

const getAll = (req, res) => {
  const users = db.reduce((all, currObj) => {
    return all + currObj.name + ', '
  }, '');
  res.send(users);
}

module.exports = { 
  getUser, 
  getUserMsg, 
  getAll,
};