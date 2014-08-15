

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
	console.log(waterRequests.length)

	$('#metricsBtn').one('click', function(){
		$('#metricsArea').show()
	 	new Morris.Line({
	 	// ID of the element in which to draw the chart.
	 		element: 'myfirstchart',
	 		// Chart data records -- each entry in this array corresponds to a point on
	 		// the chart.
	 		data: [
	 		{ year: '2008', value: 20 },
	 		{ year: '2009', value: 10 },
	 		{ year: '2010', value: 5 },
	 		{ year: '2011', value: 5 },
	 		{ year: '2012', value: 20 }
	 		],
	 		// The name of the data record attribute that contains x-values.
	 		xkey: 'year',
	 		// A list of names of data record attributes that contain y-values.
	 		ykeys: ['value'],
	 		// Labels for the ykeys -- will be displayed when you hover over the
	 		// chart.
	 		labels: ['Value']
	 	});
	 	new Morris.Donut({
	 		element: 'requestsByType',
	 		data: [
	 		{label: "WaterRequests", value: waterRequests.length},
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
	 		{label: "WaterRequests", value: waterRequests.length},
	 		{label: "Pets Requests", value: petsRequests.length},
	 		{label: "Meals Requests", value: mealsRequests.length},
	 		{label: "Clothing Requests", value: clothingRequests.length},
	 		{label: "Transportation Requests", value: transportRequests.length},
	 		{label: "Lodging Requests", value: lodgeRequests.length},
	 		]
	 	});

	 })