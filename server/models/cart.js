"use strict";
module.exports = class Cart {
	constructor(existingItems) {
		this.items = existingItems
	}
	add(item, id, quantity) {
		var existingItem = this.items[id];
		if(!existingItem) {
			existingItem = this.items[id] = {total_quantity: 0, item: item, total_price: 0};
		}
		existingItem.total_quantity = quantity;
		existingItem.total_price = quantity * item.unit_price;
	}
	static remove(item, id) {
		
	}
};

