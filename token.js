const { sign, verify } = require('jsonwebtoken');

const SECRET_KEY = 'a,smdh12dq!!asSSSWC';

sign({ email: 'aaa', name: 'bbb', phone: 'ccc' }, SECRET_KEY, { expiresIn: 10 }, (err, token) => {
    console.log(token);
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYSIsIm5hbWUiOiJiYmIiLCJwaG9uZSI6ImNjYyIsImlhdCI6MTUwNjEzNDk5MH0.1PRieIBVBRJnfbxz7KCljPoydQrxlfA2Yy3KkIfRT68';

verify(token, SECRET_KEY, (err, obj) => {
    console.log(obj);
});
