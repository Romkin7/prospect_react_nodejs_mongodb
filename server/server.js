"use strict";
require("./config/dbConnection");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
/* API Routes */
const giftApiRoutes = require('./api/gifts');
app.set("port", process.env.PORT);
app.set("ip", process.env.IP);
//app.use(cors());
app.use(bodyParser.json());
// You can set morgan to log differently depending on your environment
if (app.get('env') == 'Websiteion') {
  	app.use(morgan('common', { skip: function(req, res) {
    	return res.statusCode < 400 }, stream: __dirname + '/../morgan.log'}));
} else {
  	app.use(morgan('dev'));
}
app.use("/api/gifts", giftApiRoutes);
if(process.env.NODE_ENV === "production") {
	app.use(express.static("/client/build"));

	app.get("*", (req, res, next) => {
		res.sendFile(pat.resolve(__dirname, "client", "build", "index.html"));
	});
}
const server = app.listen(app.get("port"), function() {
	console.log("server started on port 4000!");
});