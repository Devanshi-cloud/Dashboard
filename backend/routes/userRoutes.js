const express = require('express');
const { createUser, getUserByEmail } = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/user/create', createUser);

// Route to get user by email
router.get('/user/:email', getUserByEmail);

module.exports = router;