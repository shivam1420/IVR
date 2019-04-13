"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var port = 8585;
App_1["default"].listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    return console.log("server is listening on " + port);
});
