"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const request = require('request');
const GiftSchema = new Schema({
	name: String,
	size: String,
	matherial: String,
	code: String,
	brand: String,
	group: String,
	small_image: String,
	big_image: String,
	super_big_image: String,
	colors: [String],
	provider: String,
	category: String,
	description: String,
	unit_price: Number,
	quantity: Number,
	available: {type: Boolean, default: true}
},
{
	usePushEach: true,
  	timestamps: true
});
GiftSchema.index({name: "text", label: "text", brand: "text", category: "text"});
module.exports = mongoose.model("Gift", GiftSchema);