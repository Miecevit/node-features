const http = require('http');

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end("Hello World 100KY HELLO WORLD!");

});

server.listen(port, hostname, () =>{
    console.log(`Server http://${hostname}:${port}/ 'da calisiyor.`);
});


// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end('Hello World');
// }).listen(8080);

// const text = "Bu bir sayi"+sayi+"!";
// const text2 = 'Bu bir sayi'+sayi+'!';
// const text3 = `Bu bir sayi ${sayi}`;


//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

//"node app.js" yerine "nodemon app.js" olarak çağırıyoruz

