

	var waterRequests = [];
	var clothingRequests = [];
	var petsRequests = [];
	var mealsRequests = [];
	var lodgeRequests = [];
	var transportRequests = [];

	var totalWaterRequested = 0;
	var totalMealsRequested = 0;
	var totalPetsRequested = 0;
	var totalTransportRequested = 0;
	var totalLodgeRequested = 0;
	var totalClothesRequested = 0;


	for (var i =0; i<requests.length; i++){
		if(requests[i].requestType === 'water'){
			waterRequests.push(requests[i])
			totalWaterRequested += requests[i].quantityRequested
		}

	}


	for (var i =0; i<requests.length; i++){
		if(requests[i].requestType === 'clothing'){
			clothingRequests.push(requests[i])
			totalClothesRequested += requests[i].quantityRequested
		}


	}
	for (var i =0; i<requests.length; i++){
		if(requests[i].requestType === 'pets'){
			petsRequests.push(requests[i])
			totalPetsRequested += requests[i].quantityRequested
		}

	}
	for (var i =0; i<requests.length; i++){
		if(requests[i].requestType === 'meals'){
			mealsRequests.push(requests[i])
			totalMealsRequested += requests[i].quantityRequested
		}


	}
	for (var i =0; i<requests.length; i++){
		if(requests[i].requestType === 'lodging'){
			lodgeRequests.push(requests[i])
			totalLodgeRequested += requests[i].quantityRequested
		}


	}
	for (var i =0; i<requests.length; i++){
		if(requests[i].requestType === 'transportation'){
			transportRequests.push(requests[i])
			totalTransportRequested += requests[i].quantityRequested
		}


	}


	$('#metricsBtn').on('click', function(){
		$('#requestsByType').empty()
		$('#requestsByType1').empty()


		$('#metricsArea').toggle()
	
	 	
	 	new Morris.Donut({
	 		element: 'requestsByType',
	 		data: [
	 		{label: "Water Requests", value: waterRequests.length},
	 		{label: "Pets Requests", value: petsRequests.length},
	 		{label: "Meals Requests", value: mealsRequests.length},
	 		{label: "Clothing Requests", value: clothingRequests.length},
	 		{label: "Transportation Requests", value: transportRequests.length},
	 		{label: "Lodging Requests", value: lodgeRequests.length},
	 		]
	 	});
	 	new Morris.Donut({
	 		element: 'requestsByType1',
	 		data: [
	 		{label: "Water Requests", value: totalWaterRequested},
	 		{label: "Pets Requests", value: totalPetsRequested},
	 		{label: "Meals Requests", value: totalMealsRequested},
	 		{label: "Clothing Requests", value: totalClothesRequested},
	 		{label: "Transportation Requests", value: totalTransportRequested},
	 		{label: "Lodging Requests", value: totalLodgeRequested},
	 		]
	 	});


	 })