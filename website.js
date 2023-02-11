
// const {console} = require('console');

const fs = require('fs');

const http = require('http');
const port = process.env.PORT||3000 ;

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    res.statusCode=200;
    res.setHeader(`kontent`,`text/html`)
    if(req.url == '/'){ 
        res.end('<h1> aryan is the  awesome</h1> <P>is samrtest among us</p>')
    }else if(req.url == '/hello'){
        res.statusCode=200;
        const data= fs.readFileSync('expriment.html');

        res.end(data.toString());

    }
    
    ;
})

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});