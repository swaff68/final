var Request = require('../models/request.js')
var Contribution = require('../models/contribute.js')

var indexController = {
	index: function(req, res) {

		res.render('index')
		
	},


	requestMarkers: function(req, res){

		Request.find({}, function(err, docs){


			res.send(docs)
		})


		// {

		// for (var i = 0; i < docs.length; i++) {
		// 	docs[i]
		// };
	},


	reliefStatus: function(req, res){
		console.log("Request called");
		var requestResults = {
			clothes :{
				displayName: "Clothing",
				icon:  " fa fa-group fa-icon",
				requests : 0,
				quantity: 0
			},
			lodge :{
				displayName: "Lodging",
				icon:  " fa fa-home fa-icon",
				requests : 0,
				quantity: 0
			},
			meals :{
				displayName: "Meals",
				icon:  " fa fa-cutlery fa-icon",
				requests : 0,
				quantity: 0
			},
			pets :{

				displayName: "Pet Boarding",
				icon:  " fa fa-paw fa-icon",
				requests : 0,
				quantity: 0
			},
			transport :{
				displayName: "Transportation",
				icon:  " fa fa-car fa-icon",
				requests : 0,
				quantity: 0
			},
			water :{
				displayName: "Bottles of Water",
				icon:  " fa fa-tint fa-icon",
				requests : 0,
				quantity: 0
			},




		}
		Request.find({}, function(err, docs){
			//console.log(docs)
			for (var i = 0; i < docs.length; i++) {
			//	console.log(docs[i])
				if(docs[i].waterQuantity >0) {
					requestResults.water.requests+=1
					requestResults.water.quantity+= docs[i].waterQuantity
				}
				if(docs[i].clothesQuantity >0) {

					requestResults.clothes.requests+=1
					requestResults.clothes.quantity+= docs[i].clothesQuantity

				}

				if(docs[i].petsQuantity >0) {
					requestResults.pets.requests+=1
					requestResults.pets.quantity+= docs[i].petsQuantity

				}
				if(docs[i].lodgeQuantity >0) {
					requestResults.lodge.requests+=1
					requestResults.lodge.quantity+= docs[i].lodgeQuantity
				}

				if(docs[i].mealsQuantity >0) {
					requestResults.meals.requests+=1
					requestResults.meals.quantity+= docs[i].mealsQuantity

				}
				if(docs[i].transportQuantity >0) {
					requestResults.transport.requests+=1
					requestResults.transport.quantity+= docs[i].transportQuantity
				}

				
			};
			console.log(requestResults)
			res.send(requestResults)
		})


	},


	aidSubmit: function(req, res){

		console.log(req.body.fName, req.body.lName, req.body.orgName, req.body.email , req.body.phone , req.body.address, req.body.lat, req.body.long, req.body.waterQuantity, req.body.waterComments, req.body.mealsQuantity, req.body.mealsComments, req.body.lodgeQuantity, req.body.lodgeComments, req.body.petsQuantity, req.body.petsComments, req.body.transportQuantity, req.body.transportComments, req.body.clothesQuantity, req.body.clothesComments)

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