"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
	ordernumber: {type: String, required: true},
	client: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	items: [{
		item: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Gift"
		},
		total_quantity: {type: Number, default: 0},
		unit_price: {type:Number, default: 0}
	}],
	status: {type: String, default: "pending"}, //Also: recieved, processing & done.

},{
	timestamps: true,
	usePushEach: true
});
orderSchema.virtual("total_quantity").get(function() {
	let quantities = this.items.map((item)=> item.total_quantity);
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return quantities.reduce(reducer);
});
orderSchema.virtual("total_price").get(function() {
	let itemsTotalPrices = this.items.map((item)=> item.total_quantity * item.unit_price);
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return itemsTotalPrices.reduce(reducer);
});
module.exports = mongoose.model("Order", orderSchema);