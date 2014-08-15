var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nightingale', {}, function(){
			console.log('test')
});


var dataModel = require('./models/request.js')

// var seed:[

// 	{

// 	requestType: String,
// 	quantityRequested: Number,
// 	requestComments: String,
// 	fName: String,
// 	lName: String,
// 	orgName: String,
// 	email: String,
// 	phone: String,
// 	address: String,
// 	lat: Number,
// 	long: Number,
// 	dateRequested: { type: Date, default: Date.now },
// 	groupId: String


// 	}
// 	]


Request.remove({}, function(){

	for (var i = 0; i < seed.length; i++) {
		var temp = new Request(seed[i]);

		temp.save()
	}

});

