const queryDb = require('./db');
const { hash, compare } = require('bcrypt');

class User {
    static async signIn(email, password) {
        const sql = 'SELECT * FROM "User" WHERE email = $1';
        const result = await queryDb(sql, [email]);
        const user = result.rows[0];
        if (!user) throw new Error('Email khong ton tai');
        const same = await compare(password, user.password);
        if (!same) throw new Error('Password khong dung');
        const { phone, name } = user;
        return { email, name, phone };
    }

    static async signUp(email, password, name, phone) {
        const sql = 'INSERT INTO "User"(email, password, name, phone) VALUES($1, $2, $3, $4)';
        const hashPassword = await hash(password, 8);
        return queryDb(sql, [email, hashPassword, name, phone])
    }
}
