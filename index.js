/*
* @Author: askmhs
* @Date:   2018-11-16 09:46:52
* @Last Modified by:   askmhs
* @Last Modified time: 2018-11-16 10:02:33
*/

import restify from "restify";

// Creating server
const server = restify.createServer({
	"name": "pdf-generate-thumbnail-nodejs"
});

// Configure server parser plugins
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

// Call router
require("./routes.js")(server);

// Starting server
server.listen(3000, () => {
	console.log("Server UP!");
});