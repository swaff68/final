
var test = function () {
	console.log('test ran!')
}



$(function(){




	$.get('/reliefStatus', function(data){
		for (requestType in data) {
			console.log(requestType)
			var aidType = $('<div class="col-md-2 '+ data[requestType].id+'">'+'<div>' +data[requestType].displayName+'</div>'+'<div> '+' <i class="fa '+ data[requestType].icon+ '">'+'</i>'+'<div>'+"Current Requests"+'</div>'+'<div class="curReq">' +data[requestType].requests+'</div>'+'<div>'+"Quantity Still Needed"+'</div>'+'<div class="quanStillNeeded">'+data[requestType].quantity+'</div>'+'</div>');
			$('.status-table').append(aidType)
		};
		console.log(data)
	})

	$('#reqForm').on('submit', function(e){
		e.preventDefault();
		console.log('test');

		var fName = $('#first-name').val()
		var lName = $('#last-name').val()
		var orgName = $('#org-name').val()
		var email = $('#inputEmail1').val()
		var phone = $('#phone-number').val()
		var address = $('#address').val()
		var water = $('.water-checkbox').is(':checked')
		var meals = $('.meals-checkbox').is(':checked')
		var lodge = $('.lodge-checkbox').is(':checked')
		var pets = $('.pets-checkbox').is(':checked')
		var transport = $('.transport-checkbox').is(':checked')
		var clothes = $('.clothes-checkbox').is(':checked')

		// var requestType =$('checkbox').val()
		var waterQuantity = $('#water-quantity').val()
		var waterComments = $('#water-comments').val()
		var mealsQuantity = $('#meals-quantity').val()
		var mealsComments = $('#meals-comments').val()
		var lodgeQuantity = +$('#lodge-quantity').val()
		var lodgeComments = $('#lodge-comments').val()
		var petsQuantity = $('#pets-quantity').val()
		var petsComments = $('#pets-comments').val()
		var transportQuantity = $('#transport-quantity').val()
		var transportComments = $('#transport-comments').val()
		var clothesQuantity = $('#clothes-quantity').val()
		var clothesComments = $('#clothes-comments').val()

		geocoder.geocode( { 'address': address}, function(results, status) {
		  if (status == google.maps.GeocoderStatus.OK) {
		  	test()
		    map.setCenter(results[0].geometry.location);
		    var clothesMarker = './pics/clothes.png';
		    var defaultMarker = null;
		    var petsMarker = './pics/pets.png';
		    var transportMarker = './pics/transport.png';
		    var lodgeMarker = './pics/lodge.png';
		    var mealsMarker = './pics/meals.png';
		    var waterMarker = './pics/water.png';
		    var multiItemMarker = './pics/multiRequest.png';
		    var image = defaultMarker;
			var itemCounter = 0;
		    test()


		    if(clothes === true && clothesQuantity >0){
		      image = clothesMarker
		      itemCounter++
		    }

		    if(transport === true && transportQuantity >0){
		      image = transportMarker
		      itemCounter++
		    }

		    if(lodge === true && lodgeQuantity >0){
		      image = lodgeMarker
		      itemCounter++
		    }

		    if(meals === true && mealsQuantity >0){
		      image = mealsMarker
		      itemCounter++
		    }

		      if(pets === true && petsQuantity >0){
		      image = petsMarker
		      itemCounter++
		    }

			if(water === true && waterQuantity >0){
		      image = waterMarker
		      itemCounter++
		    }

		    if(itemCounter >1){
		      console.log(itemCounter)
		      image = multiItemMarker

		    }

		    var marker = new google.maps.Marker({
		        map: map,
		        icon: image,
		        position: results[0].geometry.location
		    });
		    console.log(results)

		    var latLong = {lat:results[0].geometry.location.lat(), lng:results[0].geometry.location.lng()}

		    // console.log(fName, lName, orgName, email, phone, address, waterQuantity, waterComments, mealsQuantity, mealsComments, lodgeQuantity, lodgeComments, petsQuantity, petsComments, transportQuantity, transportComments, clothesQuantity, clothesComments)
		    console.log('this is water', water)
		    console.log('this is meals', meals)

		    var groupId = (+new Date()).toString(36)

		    if(water === true){
		    	$.post('/aidSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, address: address, lat: latLong.lat,long: latLong.lng,requestType: 'water', quantityRequested: waterQuantity, requestComments: waterComments, groupId:groupId}, function(data)
		    		{
		    		var originalVal = $('.water .curReq').text()
		    		originalVal = +originalVal+1
		    		$('.water .curReq').text(originalVal)

		    		var originVal = $('.water .quanStillNeeded').text()
		    		originVal = +originVal + lodgeQuantity
		    		$('.water .quanStillNeeded').text(originVal)
		    		}
				)}

			if(meals === true){
				$.post('/aidSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, address: address, lat: latLong.lat,long: latLong.lng,requestType: 'meals', quantityRequested: mealsQuantity, requestComments: mealsComments, groupId:groupId}, function(data)
		    		{
		    		var originalVal = $('.meals .curReq').text()
		    		originalVal = +originalVal+1
		    		$('.meals .curReq').text(originalVal)

		    		var originVal = $('.meals .quanStillNeeded').text()
		    		originVal = +originVal + lodgeQuantity
		    		$('.meals .quanStillNeeded').text(originVal)
		    		}
				)}

				if(pets === true){
				$.post('/aidSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, address: address, lat: latLong.lat,long: latLong.lng,requestType: 'pets', quantityRequested: petsQuantity, requestComments: petsComments, groupId:groupId}, function(data)
		    		{
		    		var originalVal = $('.pet-boarding .curReq').text()
		    		originalVal = +originalVal+1
		    		$('.pet-boarding .curReq').text(originalVal)

		    		var originVal = $('.pet-boarding .quanStillNeeded').text()
		    		originVal = +originVal + lodgeQuantity
		    		$('.pet-boarding .quanStillNeeded').text(originVal)
		    		}
				)}

				if(lodge === true){
				$.post('/aidSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, address: address, lat: latLong.lat,long: latLong.lng,requestType: 'lodging', quantityRequested: lodgeQuantity, requestComments: lodgeComments, groupId:groupId}, function(data)
		    		{
		    		var originalVal = $('.lodging .curReq').text()
		    		originalVal = +originalVal+1
		    		$('.lodging .curReq').text(originalVal)
		    		
		    		
		    		var originVal = $('.lodging .quanStillNeeded').text()
		    		originVal = +originVal + lodgeQuantity
		    		$('.lodging .quanStillNeeded').text(originVal)
		    		}
				)}

				if(transport === true){
				$.post('/aidSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, address: address, lat: latLong.lat,long: latLong.lng,requestType: 'transportation', quantityRequested: transportQuantity, requestComments: transportComments, groupId:groupId}, function(data)
		    		{
		    		var originalVal = $('.transportation .curReq').text()
		    		originalVal = +originalVal+1
		    		$('.transportation .curReq').text(originalVal)

		    		var originVal = $('.transportation .quanStillNeeded').text()
		    		originVal = +originVal + lodgeQuantity
		    		$('.transportation .quanStillNeeded').text(originVal)
		    		}
				)}

				if(clothes === true){
				$.post('/aidSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, address: address, lat: latLong.lat,long: latLong.lng,requestType: 'clothing', quantityRequested: clothesQuantity, requestComments: clothesComments, groupId:groupId}, function(data)
		    		{
		    		var originalVal = $('.clothing .curReq').text()
		    		originalVal = +originalVal+1
		    		$('.clothing .curReq').text(originalVal)

		    		var originVal = $('.clothing .quanStillNeeded').text()
		    		originVal = +originVal + lodgeQuantity
		    		$('.clothing .quanStillNeeded').text(originVal)
		    		}
				)}

			else{}

		    // $.post('/aidSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, address: address, lat: latLong.lat,long: latLong.lng,  waterQuantity: waterQuantity, waterComments: waterComments, mealsQuantity: mealsQuantity, mealsComments: mealsComments, lodgeQuantity: lodgeQuantity, lodgeComments: lodgeComments, petsQuantity: petsQuantity, petsComments: petsComments, transportQuantity: transportQuantity, transportComments: transportComments, clothesQuantity: clothesQuantity, clothesComments: clothesComments}, function(data){
		    // 	console.log('data', data)

		    // 	})

		    $('#myModal').fadeOut();
		    $('.modal-backdrop').fadeOut();
		  } else {
		    alert('Geocode was not successful for the following reason: ' + status);
		  }

		});

		
		

	})	


	$('.checkbox label input').on('change', function(){
		if ($(this).prop('checked')===true) {
			$(this).parent().siblings('input, textarea, table').show()
		}

		else {
			$(this).parent().siblings('input, textarea, table').hide()

		}

	});

	$('#contForm').on('submit', function(e){
		e.preventDefault();
		console.log('test cont');

		var fName = $('#first-name-cont').val()
		var lName = $('#last-name-cont').val()
		var orgName = $('#org-name-cont').val()
		var email = $('#inputEmail1-cont').val()
		var phone = $('#phone-number-cont').val()
		var waterQuantity = $('#water-quantity-cont').val()
		var waterComments = $('#water-comments-cont').val()
		var mealsQuantity = $('#meals-quantity-cont').val()
		var mealsComments = $('#meals-comments-cont').val()
		var lodgeQuantity = $('#lodge-quantity-cont').val()
		var lodgeComments = $('#lodge-comments-cont').val()
		var petsQuantity = $('#pets-quantity-cont').val()
		var petsComments = $('#pets-comments-cont').val()
		var transportQuantity = $('#transport-quantity-cont').val()
		var transportComments = $('#transport-comments-cont').val()
		var clothesQuantity = $('#clothes-quantity-cont').val()
		var clothesComments = $('#clothes-comments-cont').val()


		console.log(fName, lName, orgName, email, phone, waterQuantity, waterComments, mealsQuantity, mealsComments, lodgeQuantity, lodgeComments, petsQuantity, petsComments, transportQuantity, transportComments, clothesQuantity, clothesComments)

		$.post('/contSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, waterQuantity: waterQuantity, waterComments: waterComments, mealsQuantity: mealsQuantity, mealsComments: mealsComments, lodgeQuantity: lodgeQuantity, lodgeComments: lodgeComments, petsQuantity: petsQuantity, petsComments: petsComments, transportQuantity: transportQuantity, transportComments: transportComments, clothesQuantity: clothesQuantity, clothesComments: clothesComments}, function(data){
			console.log('data', data)
		})

			$('#myModal1').fadeOut();
		    $('.modal-backdrop').fadeOut();

	})	

	$('#metricsBtn').one('click', function(){
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

	})

})