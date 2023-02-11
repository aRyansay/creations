const http = require('http');

const dataControl =(req,resp) =>
{
    resp.write("surprise mf");
    resp.end();
}


http.createServer(dataControl).listen(4500);