const express = require('express');
const server = express();

server.all('/', (req, res) => {
    res.send("[SYSTEM]: Logged On..!!, Server Is Ready For Hosting.")
})

function keepAlive() {
    server.listen(3070, () => { console.log("Server Is Ready!" + Date.now()) });
}

module.exports = keepAlive;