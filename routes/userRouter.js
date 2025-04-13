// !router routes to controller, and defines 
// ! does not query data
// !what you a user can do, GET, POST, PUT, DELETE...

const express = require('express');
const userRouter = express.Router();
const { 
  getUser, 
  getUserMsg, 
  getAll 
} = require('../controllers/userController');

userRouter.get('/', getAll);
userRouter.get('/:id', getUser);
userRouter.get('/:id/message', getUserMsg);

module.exports = userRouter;