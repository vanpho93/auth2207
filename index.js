const express = require('express');
const parser = require('body-parser').json();
const User = require('./User');

const app = express();

app.post('/signin', parser, (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(userInfo => res.send(userInfo))
    .catch(error => res.send({ error: 'Email or password is incorrect.' }));
});

app.post('/signup', parser, (req, res) => {
    const { email, password, name, phone } = req.body;
    User.signUp(email, password, name, phone)
    .then(() => res.send({ message: 'Sign up successfully.' }))
    .catch(error => res.send({ error: 'Email has existed.' }))
});

app.listen(3000, () => console.log('Server started'));
