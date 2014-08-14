// sets up the data model for stoarge in the db

// this next line telss the app to use mongoose as the db driver
var mongoose = require('mongoose')

// this is the actual data model for the "applicants" collection in the db

var Request = mongoose.model('Request', {
	
	// fName: String,
	// lName: String,
	// orgName: String,
	// email: String,
	// phone: String,
	// address: String,
	// lat: Number,
	// long: Number,
	// waterQuantity:Number,
	// waterComments:String,
	// mealsQuantity:Number,
	// mealsComments:String,
	// lodgeQuantity:Number,
	// lodgeComments:String,
	// petsQuantity:Number,
	// petsComments:String,
	// transportQuantity:Number,
	// transportComments:String,
	// clothesQuantity:Number,
	// clothesComments:String,
	// date: { type: Date, default: Date.now },



	requestType: String,
	quantityRequested: Number,
	requestComments: String,
	contributions: [ 

		{
		contGroupId: String,
		contributionType:String,
		quantityContributed: Number,
		contributionComments: String,
		contributorFName: String,
		contributorLName: String,
		contributorOrgName: String,
		contributorEmail: String,
		contributorPhone: String,
		dateContributed:{ type: Date, default: Date.now }
		}

	],

	fName: String,
	lName: String,
	orgName: String,
	email: String,
	phone: String,
	address: String,
	lat: Number,
	long: Number,
	dateRequested: { type: Date, default: Date.now },
	groupId: String

});


// this exports the "Applicants" var to be read by the app.js file
module.exports = Request