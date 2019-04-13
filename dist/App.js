"use strict";
exports.__esModule = true;
var express = require("express");
var xmlBody = require("./KooKoo");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        this.express.get('/', function (req, res) {
            res.header('Content-Type', 'text/xml');
            var r = xmlBody.getXMLBody(req);
            console.log(r);
            res.send(r);
        });
    };
    return App;
}());
exports["default"] = new App().express;
