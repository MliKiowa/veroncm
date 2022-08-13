module.exports = OnRequest;
var fs = require("fs")
function OnRequest(req, res){
    const { method = '301' , num = '1' , tag = 'acg' } = req.query;
    var data = fs.readFileSync('../data/'+tag+'.json');    
    json_url = JSON.parse(data.toString());
    res.send(data.toString());
    res.end();
}
