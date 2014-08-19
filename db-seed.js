var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nightingale', {}, function(){
			console.log('test')
});


var dataModel = require('./models/request.js')

var seed:[

	{

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

	]

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

	}
	]


Request.remove({}, function(){

	for (var i = 0; i < seed.length; i++) {
		var temp = new Request(seed[i]);

		temp.save()
	}

});

