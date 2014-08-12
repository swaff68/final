
var test = function () {
	console.log('test ran!')
}



$(function(){

	$.get('/reliefStatus', function(data){
		for (requestType in data) {
			console.log(requestType)
			var aidType = $('<div class="col-md-2 ">'+'<div>' +data[requestType].displayName+'</div>'+'<div> '+' <i class="fa '+ data[requestType].icon+ '">'+'</i>'+'<div>'+"Total Requests"+'</div>'+'<div>' +data[requestType].requests+'</div>'+'<div>'+"Total Quantity"+'</div>'+'<div>'+data[requestType].quantity+'</div>'+'</div>');
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
		var waterQuantity = $('#water-quantity').val()
		var waterComments = $('#water-comments').val()
		var mealsQuantity = $('#meals-quantity').val()
		var mealsComments = $('#meals-comments').val()
		var lodgeQuantity = $('#lodge-quantity').val()
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
		    var clothes = './pics/clothes.png';
		    var defaultMarker = null;
		    var pets = './pics/pets.png';
		    var transport = './pics/transport.png';
		    var lodge = './pics/lodge.png';
		    var meals = './pics/meals.png';
		    var water = './pics/water.png';
		    var multiItem = './pics/multiRequest.png';
		    var image = defaultMarker;
			var itemCounter = 0;
		    test()

		    if(clothesQuantity >0){
		      image = clothes
		      itemCounter++
		    }

		    if(transportQuantity >0){
		      image = transport
		      itemCounter++
		    }

		    if(lodgeQuantity >0){
		      image = lodge
		      itemCounter++
		    }

		    if(mealsQuantity >0){
		      image = meals
		      itemCounter++
		    }

		      if(petsQuantity >0){
		      image = pets
		      itemCounter++
		    }

		    if(waterQuantity >0){
		      image = water
		      itemCounter++
		    }

		    if(itemCounter >1){
		      console.log(itemCounter)
		      image = multiItem
		      console.log(image)
		    }

		    var marker = new google.maps.Marker({
		        map: map,
		        icon: image,
		        position: results[0].geometry.location
		    });
		    console.log(results)

		    var latLong = {lat:results[0].geometry.location.lat(), lng:results[0].geometry.location.lng()}

		    console.log(fName, lName, orgName, email, phone, address, waterQuantity, waterComments, mealsQuantity, mealsComments, lodgeQuantity, lodgeComments, petsQuantity, petsComments, transportQuantity, transportComments, clothesQuantity, clothesComments)

		    $.post('/aidSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, address: address, lat: latLong.lat,long: latLong.lng, waterQuantity: waterQuantity, waterComments: waterComments, mealsQuantity: mealsQuantity, mealsComments: mealsComments, lodgeQuantity: lodgeQuantity, lodgeComments: lodgeComments, petsQuantity: petsQuantity, petsComments: petsComments, transportQuantity: transportQuantity, transportComments: transportComments, clothesQuantity: clothesQuantity, clothesComments: clothesComments}, function(data){
		    	console.log('data', data)

		    })

		    $('#myModal').fadeOut();
		    $('.modal-backdrop').fadeOut();
		  } else {
		    alert('Geocode was not successful for the following reason: ' + status);
		  }

		});

		
		

	})	


	$('.checkbox label input').on('change', function(){
		if ($(this).prop('checked')===true) {
			$(this).parent().siblings('input, textarea').show()
		}

		else {
			$(this).parent().siblings('input, textarea').hide()

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