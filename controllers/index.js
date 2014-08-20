var Request = require('../models/request.js')
// var twilio = require("path/to/twilio-node/lib");
var Contribution = require('../models/contribute.js')

var accountSid = 'ACa95b3f3758879b557dd75a2f33680c7d';
var authToken = "10034e5971d871bf22b35c3f784430fa";
var client = require('twilio')(accountSid, authToken);


var sendMessage = function(request, contribution){

// TWILIO MESSAGE
	var requestorMessage = 
		  'Message from Nightingale Relief Assistance Team, - '
		+ request.fName + ', ' + 'good news!  '
		+ contribution.contributorFName + ' ' + contribution.contributorLName + ' '
		+ 'has contributed ' + contribution.quantityContributed + ' ' + request.requestType
		+ ' towards your '+ request.requestType + ' request.  '


		// + "Here is a link to " + contribution.contributorFName + "'s " + 'contribution comments.  '

		+ contribution.contributorFName + "'s  phone# is " + contribution.contributorPhone + '.  '

		+ 'Regards,  '
		+ 'The Nightingale Relief Assistance Team'

	var contributorMessage = 
		  'Message from Nightingale Relief Assistance Team, - '
		+ contribution.contributorFName
		+ ', Thank you for your ' + contribution.quantityContributed + ' ' + request.requestType 
		+ ' contribution to '
		+ request.fName + ' ' + request.lName + "'s " + request.requestType + ' request.  '

		// + 'Here is a link to ' + request.fName + "'s " + 'aid request comments.  '

		+ request.fName + "'s" + ' phone# is ' + request.phone + '.  '

		+ 'Regards,  '
		+ 'The Nightingale Relief Assistance Team'



	client.messages.create({
		    body: requestorMessage,
		    to: request.phone,
		    from: "7033489714"
		}, function(err, message) {
		    console.log('err:' ,err)
		    console.log('message:' ,message)
		    process.stdout.write(message.sid);
		});

	client.messages.create({
		    body: contributorMessage,
		    to: contribution.contributorPhone,
		    from: "7033489714"
		}, function(err, message) {
		    process.stdout.write(message.sid);
		});


}
 

var indexController = {





	index: function(req, res) {

		// FINDS DOCS FOR THE RELIEF REQUESTS TABLE

		Request.find({}, function(err, requests){
			var waterRequests = [];
			var clothingRequests = [];
			var petsRequests = [];
			var mealsRequests = [];
			var lodgeRequests = [];
			var transportRequests = []; 

			for (var i =0; i<requests.length; i++){
				if(requests[i].requestType === 'water'){
					waterRequests.push(requests[i])
				}
			}

			for (var i =0; i<requests.length; i++){
				if(requests[i].requestType === 'clothing'){
					clothingRequests.push(requests[i])

				}
			}
			for (var i =0; i<requests.length; i++){
				if(requests[i].requestType === 'pets'){
					petsRequests.push(requests[i])
				}
			}
			for (var i =0; i<requests.length; i++){
				if(requests[i].requestType === 'meals'){
					mealsRequests.push(requests[i])
				}
			}
			for (var i =0; i<requests.length; i++){
				if(requests[i].requestType === 'lodging'){
					lodgeRequests.push(requests[i])
				}
			}
			for (var i =0; i<requests.length; i++){
				if(requests[i].requestType === 'transportation'){
					transportRequests.push(requests[i])
				}
			}
				console.log(mealsRequests)
			res.render('index', {
				transportRequests: transportRequests,
				lodgeRequests: lodgeRequests,
				mealsRequests: mealsRequests,
				petsRequests: petsRequests,
				clothingRequests: clothingRequests,
				waterRequests: waterRequests,
				requests: requests





			})
		})
		
	},

// PUTS MAP MARKERS FOR REQUESTS STILL OUTSTANDING
	requestMarkers: function(req, res){

		Request.find({requestFullfilled: false}, function(err, docs){


			res.send(docs)
		})

	},

// THIS IS THE RELIEF STATUS AREA OBJECT MODEL
	reliefStatus: function(req, res){

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



// THIS SEARCHES ALL REQUESTS IN DB AND PREPARES INFO FOR THE RELIEF STATUS DASHBAORD
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
					for (var k = 0; k < docs[i].contributions.length; k++) {
						requestResults.pets.quantity-=docs[i].contributions[k].quantityContributed
					};

				}
				if(docs[i].requestType==='lodging' && docs[i].quantityRequested >0) {
					requestResults.lodge.requests+=1
					requestResults.lodge.quantity+= docs[i].quantityRequested
					for (var k = 0; k < docs[i].contributions.length; k++) {
						requestResults.lodge.quantity-=docs[i].contributions[k].quantityContributed
					};
				}

				if(docs[i].requestType==='meals' && docs[i].quantityRequested >0) {
					requestResults.meals.requests+=1
					requestResults.meals.quantity+= docs[i].quantityRequested
					for (var k = 0; k < docs[i].contributions.length; k++) {
						requestResults.meals.quantity-=docs[i].contributions[k].quantityContributed
					};

				}
				if(docs[i].requestType==='transportation' && docs[i].quantityRequested >0) {
					requestResults.transport.requests+=1
					requestResults.transport.quantity+= docs[i].quantityRequested
					for (var k = 0; k < docs[i].contributions.length; k++) {
						requestResults.transport.quantity-=docs[i].contributions[k].quantityContributed
					};
				}

				
			};

			res.send(requestResults)
		})


	},

// SEARCHES FOR JUST UNFULLFILLED RELIEF REQUESTS TO UPDATE THE RELIEF STATUS DASHBAORD
	reliefRequests:function(req, res){
		Request.find({requestFullfilled: false},function(err, docs){
			res.send(docs)
		})
	},

// POSTS NEW AID REQUESTS TO THE DB
	aidSubmit: function(req, res){





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

// HAS ALL OF THE EVENTS WHEN A CONTRIBUTION IS SUBMITTED
	contSubmit: function(req, res){



		

		var contributionsArray = JSON.parse(req.body.contributions)


		

			contributionsArray.map(function(contribution){

				Request.findOne({_id: contribution._id}, function(err, request){

					request.contributions.push(contribution)


					var totalContributions =0;

					for (var i = 0; i <request.contributions.length; i++) {
					totalContributions += request.contributions[i].quantityContributed || 0 
					};

					request.totalContributed = totalContributions

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