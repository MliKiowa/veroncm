module.exports = OnRequest;
var fs = require("fs")

function OnRequest(request, response){
    response.send("API by nodejs!");
    response.end();
}
