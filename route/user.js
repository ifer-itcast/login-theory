const express = require('express');
const user = express.Router();
const User = require('../model/user');

user.post('/signup', (req, res) => {
    res.send('注册');
});

user.post('/signin', (req, res) => {
    res.send('登录');
});

module.exports = user;