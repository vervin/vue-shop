let user = require ('./user');
console.log(`userName:${user.userName}`)
console.log(`I say ${user.sayHello()}`)
let http = require('http');
let url = require('url')
let util = require('util')
//回调
let server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; chartset=utf-8");
    console.log(req.url)    //string
    console.log(url.parse(req.url)) //{}
    console.log(util.inspect(url.parse(req.url)))
    res.end(util.inspect(url.parse(req.url)))
});
server.listen(3000, '127.0.0.1', ()=>{
    console.log("服务器已经运行，http://127.0.0.1:3000")
})