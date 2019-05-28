"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
	email: {type: String, unique: true, lowercase: true, required: true},
	phone_number: {type: String, unique: true, required: true},
	company: {
		name: {type: String, unique: true, lowercase: true, required: true},
		address: {
			street: {type: String},
			zip_code: {type: String},
			city: {type: String}
		}
	},
	contact_persons: [
		{
			firstname: String,
			lastname: String,
			occupation: String
		}
	],
	password: {type: String, required: true},
	history: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Order"
		}
	],
	favorite_categories: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category"
		}
	],
	favorite_gifts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Gift"
		}
	],
	conversations: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Conversation"
		}
	],
	account: {
		is_verified: {type:Boolean, default: false},
		verification_pincode: String,
		expires: {type: Date}
	},
	admin: {
		verification_token: {type: String},
		verification_token_expires: {type: Date},
		is_admin: {type: Boolean, default: false},
		premission_level: {type: String, default: "basic"},
		profile: {
			name: {type: String},
			avatar: {type: String}
		}
	}
},{
	timestamps: true,
	usePushEach: true
});
// Hash the password before saving it to the database
userSchema.pre("save", async function(next) {
 try {
   if (!this.isModified("password")) {
     return next();
   }
   let hashedPassword = await bcrypt.hash(this.password, 10);
   this.password = hashedPassword;
   return next();
 } catch (err) {
   return next(err);
 }
});
userSchema.methods.comparePassword = async function(candidatePassword, next) {
 try {
   let isMatch = await bcrypt.compare(candidatePassword, this.password);
   return isMatch;
 } catch (err) {
   return next(err);
 }
};
module.exports = mongoose.model("User", userSchema);