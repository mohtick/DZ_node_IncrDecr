import http from 'node:http';
import fs from 'node:fs/promises';

const config = {
    port: 8000
}

let num = 100;

const server = http.createServer(async (req, res) => {
    const { url } = req;



    if (url === '/') {
        const file = await fs.readFile('./client/index.html', 'utf-8');

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(file);

    } else if (url === '/main.js') {
        const file = await fs.readFile('./client/main.js');

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        res.end(file);

    }
    else if (url === '/inc') {
        num = num + 1;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        console.log(num);
        res.end(String(num));

    } else if (url === '/dec') {
        num = num - 1;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        console.log(num);
        res.end(String(num));

    } else if (url === '/num') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(String(num));

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end("No content");
    }



})

server.listen(config.port);








