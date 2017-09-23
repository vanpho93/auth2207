const express = require('express');
const parser = require('body-parser').json();
const User = require('./User');
const { verify } = require('./token');

const app = express();

app.post('/signin', parser, (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(userInfo => res.send(userInfo))
    .catch(error => {
        console.log(error);
        res.send({ error: 'Email or password is incorrect.' });
    });
});

app.post('/signup', parser, (req, res) => {
    const { email, password, name, phone } = req.body;
    User.signUp(email, password, name, phone)
    .then(() => res.send({ message: 'Sign up successfully.' }))
    .catch(error => {
        res.send({ error: 'Email has existed.' });
    })
});

app.post('/check', parser, (req, res) => {
    const { token } = req.body;
    User.checkToken(token)
    .then(newToken => res.send({ token: newToken }))
    .catch(error => res.send({ error: 'Token is expired.' }));
});

app.post('/status', parser, (req, res) => {
    const { content, token } = req.body;
    verify(token)
    .then(userInfo => {
        const { email } = userInfo;
        res.send('Add ' + content + ' for ' + email);
    })
    .catch(err => res.send(err.message));
});

app.listen(3000, () => console.log('Server started'));

// email: khoaphamtraining@gmail.com -> 
// github
// video ung dung
// server node -> gui code
