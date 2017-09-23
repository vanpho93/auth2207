const jwt = require('jsonwebtoken');

const SECRET_KEY = 'a,smdh12dq!!asSSSWC';

function sign(object) {
    return new Promise((resolve, reject) => {
        jwt.sign(object, SECRET_KEY, { expiresIn: '1d' }, (err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    });
}

function verify(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, (err, object) => {
            if (err) return reject(err);
            resolve(object);
        });
    });
}

function renewToken(object) {
    return new Promise((resolve, reject) => {
        delete object.exp;
        delete object.iat;
        jwt.sign(object, SECRET_KEY, { expiresIn: '1d' }, (err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    });
}

module.exports = { sign, verify, renewToken };

// sign({ email: 'aaa', name: 'bbb', phone: 'ccc' }, SECRET_KEY, { expiresIn: 10 }, (err, token) => {
//     console.log(token);
// });

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYSIsIm5hbWUiOiJiYmIiLCJwaG9uZSI6ImNjYyIsImlhdCI6MTUwNjEzNDk5MH0.1PRieIBVBRJnfbxz7KCljPoydQrxlfA2Yy3KkIfRT68';

// verify(token, SECRET_KEY, (err, obj) => {
//     console.log(obj);
// });
