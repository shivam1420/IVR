import * as express from 'express';
import * as fs from 'fs';
var xmlBody = require("./KooKoo")
class App{
    public express;
    constructor(){
        this.express = express();
        this.mountRoutes()
    }
    private mountRoutes(){
        this.express.get('/', (req, res) => {
            res.header('Content-Type', 'text/xml');
            var r = xmlBody.getXMLBody(req)
            console.log(r);
            res.send(r);
        })

    }
}
export default new App().express