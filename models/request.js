// sets up the data model for stoarge in the db

// this next line telss the app to use mongoose as the db driver
var mongoose = require('mongoose')

// this is the actual data model for the "applicants" collection in the db

var Request = mongoose.model('Request', {
	

	requestType: String,
	quantityRequested: Number,
	requestComments: String,
	requestFullfilled: {type: Boolean, default: false},
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
		dateContributed:{ type: Date, default: Date.now },
		url:String
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
	groupId: String,
	totalContributed: {type: Number, default: 0},
	url:String

});


// this exports the "Applicants" var to be read by the app.js file
module.exports = Request