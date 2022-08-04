module.exports = OnRequest;
 
function OnRequest(request, response){
    response.send("DearXuan's API by nodejs!");
    response.end();
}
