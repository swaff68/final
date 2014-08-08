var Request = require('../models/request.js')
var Contribution = require('../models/contribute.js')

var indexController = {
	index: function(req, res) {
		res.render('index');
	},


	aidSubmit: function(req, res){
		console.log(req.body.fName, req.body.lName, req.body.orgName, req.body.email , req.body.phone , req.body.street , req.body.city , req.body.zip, req.body.waterQuantity, req.body.waterComments, req.body.mealsQuantity, req.body.mealsComments, req.body.lodgeQuantity, req.body.lodgeComments, req.body.petsQuantity, req.body.petsComments, req.body.transportQuantity, req.body.transportComments, req.body.clothesQuantity, req.body.clothesComments)

		res.send('success');


		var request = new Request(
			req.body
		);

	// save the request to the database
	// (instance method)
		request.save(function(error, result) {
			if(error) {
			res.send(500, 'ERROR')
				}
			else {
			res.render('thankyou', {
				'newrequest': request
				});
			}
		});


	},

	contSubmit: function(req, res){
		console.log(req.body.fName, req.body.lName, req.body.orgName, req.body.email , req.body.phone , req.body.waterQuantity, req.body.waterComments, req.body.mealsQuantity, req.body.mealsComments, req.body.lodgeQuantity, req.body.lodgeComments, req.body.petsQuantity, req.body.petsComments, req.body.transportQuantity, req.body.transportComments, req.body.clothesQuantity, req.body.clothesComments)

		res.send('success');


		var contribution = new Contribution(
			req.body
		);

	// save the request to the database
	// (instance method)
		contribution.save(function(error, result) {
			if(error) {
			res.send(500, 'ERROR')
				}
			else {
			res.render('thanks', {
				'newcontribution': contribution
				});
			}
		});


	}
};

module.exports = indexController;