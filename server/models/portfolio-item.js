"use strict";
const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
//Schema is defined in this section
const PortfolioItemSchema = new Schema({
	name: {type: String, required: true, unique: true},
	year: {type: String, required: true},
	company: {type: String, required: true},
	image: {type: String, required: true},
	image_id: {type: String, required: true},
	description: {type: String}
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});
//Export PortfolioItem as mongoose model
module.exports = mongoose.model('PortfolioItem', PortfolioItemSchema); 