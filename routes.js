const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html><head><title>Message form</title><head> <body><form action="/message" method="POST"><input type="text" name="messageField" placeholder="Type your message"/> <button>send</button> </form></body></html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {

        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My first Node.js server</title><head> <body>Hi! my first node js server...</body></html>');
    res.end();
}

module.exports={
    handler: requestHandler,
    someText: 'Hi I am someText'
};