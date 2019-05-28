const express = require('express');
const router = express.Router();
const db = require('../../models');
const paginate = require('../../middleware/paginate');
/* ROUTES DESCRIPTION and DEFINITION */
/*	
	@route /api/gifts/ 
	@desc Get all gifts based on limit and page and sort values
	@access public
*/
router.get("/", async (req, res, next) => {
	//const brands = db.Gift.aggregate()
	const gifts = await db.Gift.find({}).sort({"createdAt": -1}).limit(30);
	res.status(200).json(gifts);
});
/* 
	@route /api/gifts/:id
	@desc Get one spesific gift by it's id that is passed in params
	@access public
*/
router.get("/:id", async (req, res, next) => {
	const gift = await db.Gift.findById(req.params.id);

});
module.exports = router;