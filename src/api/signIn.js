module.exports = () => {
    const url = 'http://localhost:3000/signin';
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'a', password: 'b' })
    })
    .then(res => res.json())
}