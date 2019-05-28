"use strict";
const express = require("express");
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname + "/public")));
app.listen(3002, function() {
	console.log(`Server started on port 3000`);
});