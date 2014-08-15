var Request = require('../models/request.js')
//var twilio = require("path/to/twilio-node/lib");
// var Contribution = require('../models/contribute.js')

var accountSid = 'ACa95b3f3758879b557dd75a2f33680c7d';
var authToken = "10034e5971d871bf22b35c3f784430fa";
var client = require('twilio')(accountSid, authToken);


var sendMessage = function(request, contribution){


	var requestorMessage = 
		  'Message from Nightingale Relief Assistance, - '
		+ contribution.contributorFName + ' ' + contribution.contributorLName + ' '
		+ 'has contributed '
		+ contribution.quantityContributed + ' '
		+ 'towards '
		+ request.fName + ' ' + request.lName + "'s "
		+ request.requestType + ' request.  '

		+ "Here is a link to the aid requestor's comments.  "

		+ "Here is a link to the contributor's comments.  "

		+ contribution.contributorFName + ' phone# is ' + contribution.contributorPhone + '.  '

		+ request.fName + "'s" + ' phone# is ' + request.phone + '.  '

		+ 'Regards,  '
		+ 'The Nightingale Relief Assistance Team'

	client.messages.create({
		    body: requestorMessage,
		    to: "7036630561",
		    // request.phone
		    from: "7033489714"
		}, function(err, message) {
		    process.stdout.write(message.sid);
		});

	client.messages.create({
		    body: contributorMessage,
		    to: "7036630561",
		    // contribution.contributorPhone
		    from: "7033489714"
		}, function(err, message) {
		    process.stdout.write(message.sid);
		});

	console.log('sendMessage', request, contribution)
}
 

var indexController = {
	index: function(req, res) {

		Request.find({}, function(err, docs){
			// console.log(docs)
			res.render('index', {
				requests: docs				
			})
		})
		
	},


	requestMarkers: function(req, res){

		Request.find({requestFullfilled: false}, function(err, docs){


			res.send(docs)
		})

	},


	reliefStatus: function(req, res){
		// console.log("Request called");
		var requestResults = {
			clothes :{
				displayName: "Clothing",
				id: 'clothing',
				icon:  " fa fa-group fa-icon",
				requests : 0,
				quantity: 0
			},
			lodge :{
				displayName: "Lodging",
				id: 'lodging',
				icon:  " fa fa-home fa-icon",
				requests : 0,
				quantity: 0
			},
			meals :{
				displayName: "Meals",
				id: 'meals',
				icon:  " fa fa-cutlery fa-icon",
				requests : 0,
				quantity: 0
			},
			pets :{

				displayName: "Pet Boarding",
				id: 'pet-boarding',
				icon:  " fa fa-paw fa-icon",
				requests : 0,
				quantity: 0
			},
			transport :{
				displayName: "Transportation",
				id: 'transportation',
				icon:  " fa fa-car fa-icon",
				requests : 0,
				quantity: 0
			},
			water :{
				displayName: "Bottles of Water",
				id: 'water',
				icon:  " fa fa-tint fa-icon",
				requests : 0,
				quantity: 0
			},




		}
		Request.find({requestFullfilled: false}, function(err, docs){

			for (var i = 0; i < docs.length; i++) {

				if(docs[i].requestType==='water' && docs[i].quantityRequested >0) {
					requestResults.water.requests+=1
					requestResults.water.quantity+= docs[i].quantityRequested

					for (var k = 0; k < docs[i].contributions.length; k++) {
						requestResults.water.quantity-=docs[i].contributions[k].quantityContributed
					};

				}
				if(docs[i].requestType==='clothing' && docs[i].quantityRequested >0) {

					requestResults.clothes.requests+=1
					requestResults.clothes.quantity+= docs[i].quantityRequested
					for (var k = 0; k < docs[i].contributions.length; k++) {
						requestResults.clothes.quantity-=docs[i].contributions[k].quantityContributed
					};

				}

				if(docs[i].requestType==='pets' && docs[i].quantityRequested >0) {
					requestResults.pets.requests+=1
					requestResults.pets.quantity+= docs[i].quantityRequested

				}
				if(docs[i].requestType==='lodging' && docs[i].quantityRequested >0) {
					requestResults.lodge.requests+=1
					requestResults.lodge.quantity+= docs[i].quantityRequested
				}

				if(docs[i].requestType==='meals' && docs[i].quantityRequested >0) {
					requestResults.meals.requests+=1
					requestResults.meals.quantity+= docs[i].quantityRequested

				}
				if(docs[i].requestType==='transportation' && docs[i].quantityRequested >0) {
					requestResults.transport.requests+=1
					requestResults.transport.quantity+= docs[i].quantityRequested
				}

				
			};
			// console.log(requestResults)
			res.send(requestResults)
		})


	},


	reliefRequests:function(req, res){
		Request.find({requestFullfilled: false},function(err, docs){
			res.send(docs)
		})
	},

	aidSubmit: function(req, res){

		// console.log(req.body.fName, req.body.lName, req.body.orgName, req.body.email , req.body.phone , req.body.address, req.body.lat, req.body.long, req.body.waterQuantity, req.body.waterComments, req.body.mealsQuantity, req.body.mealsComments, req.body.lodgeQuantity, req.body.lodgeComments, req.body.petsQuantity, req.body.petsComments, req.body.transportQuantity, req.body.transportComments, req.body.clothesQuantity, req.body.clothesComments)



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
			// res.render('thankyou', {
			// 	'newrequest': request
			// 	});
			res.send(result);
			}
		});


	},

	contSubmit: function(req, res){



		

		var contributionsArray = JSON.parse(req.body.contributions)


		

			contributionsArray.map(function(contribution){

				Request.findOne({_id: contribution._id}, function(err, request){

					request.contributions.push(contribution)


					var totalContributions =0;

					for (var i = 0; i <request.contributions.length; i++) {
					totalContributions += request.contributions[i].quantityContributed || 0 
					};



					if(totalContributions >= request.quantityRequested){
						request.requestFullfilled = true
					}

					request.save(function(error, result){
						sendMessage(request, contribution);
						// if(error){
						// 	res.send(500, 'ERROR')
						// }
						// res.send(result)
					})

					

				});
			})
		
					res.send('ok')


	}




};

module.exports = indexController;