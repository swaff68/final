var updateStatus = function(){
		$.get('/reliefStatus', function(data){
			$('.status-table').empty()
		
		for (requestType in data) {

			var aidType = $('<div class="col-md-2 '+ data[requestType].id+'">'+'<div>' +data[requestType].displayName+'</div>'+'<div> '+' <i class="fa '+ data[requestType].icon+ '">'+'</i>'+'<div>'+"Current Requests"+'</div>'+'<div class="curReq">' +data[requestType].requests+'</div>'+'<div>'+"Quantity Still Needed"+'</div>'+'<div class="quanStillNeeded">'+data[requestType].quantity+'</div>'+'</div>');

			$('.status-table').append(aidType)
		};
	})
}
var processReliefRequests = function(data){

	$('.water-table, .meals-table, .lodge-table, .pets-table, .transport-table, .clothes-table').find("tr").not(".info").remove()

		for (var i = 0; i < data.length; i++) {
		var reqType = data[i].requestType
		if (reqType === 'water') {

			var waterRequests = $('<tr class="req-for-cont" data-id="' +data[i]._id+ '" data-req="' +data[i].requestType+ '">' + '<td>' + '<input type="checkbox" class="water-request-checkbox cbox">' + '</td>' + '<td class="qNeeded">' + (data[i].quantityRequested - data[i].totalContributed) + '</td>'+ '<td class="reqC">' + data[i].requestComments + '</td>' + '<td>' + data[i].fName +' '+ data[i].lName + '</td>'+ '<td>' + data[i].orgName + '</td>' + '<td>' + data[i].phone + '</td>'+ '</tr>');
			$('.water-table').append(waterRequests)


			};

			if (reqType === 'meals') {

			var mealsRequests = $('<tr class="req-for-cont" data-id="' +data[i]._id+ '" data-req="' +data[i].requestType+ '">' + '<td>' + '<input type="checkbox" class="meals-request-checkbox cbox">' + '</td>' + '<td class="qNeeded">' + (data[i].quantityRequested - data[i].totalContributed) + '</td>'+ '<td class="reqC">' + data[i].requestComments + '</td>' + '<td>' + data[i].fName +' '+ data[i].lName + '</td>'+ '<td>' + data[i].orgName + '</td>' + '<td>' + data[i].phone + '</td>'+ '</tr>');
			$('.meals-table').append(mealsRequests)


			};


			if (reqType === 'lodging') {

				var lodgeRequests = $('<tr class="req-for-cont" data-id="' +data[i]._id+ '" data-req="' +data[i].requestType+ '">' + '<td>' + '<input type="checkbox" class="lodge-request-checkbox cbox">' + '</td>' + '<td class="qNeeded">' + (data[i].quantityRequested - data[i].totalContributed) + '</td>'+ '<td class="reqC">' + data[i].requestComments + '</td>' + '<td>' + data[i].fName +' '+ data[i].lName + '</td>'+ '<td>' + data[i].orgName + '</td>' + '<td>' + data[i].phone + '</td>'+ '</tr>');
				$('.lodge-table').append(lodgeRequests)


			};

			if (reqType === 'pets') {

				var petsRequests = $('<tr class="req-for-cont" data-id="' +data[i]._id+ '" data-req="' +data[i].requestType+ '">' + '<td>' + '<input type="checkbox" class="pets-request-checkbox cbox">' + '</td>' + '<td class="qNeeded">' + (data[i].quantityRequested - data[i].totalContributed) + '</td>'+ '<td class="reqC">' + data[i].requestComments + '</td>' + '<td>' + data[i].fName +' '+ data[i].lName + '</td>'+ '<td>' + data[i].orgName + '</td>' + '<td>' + data[i].phone + '</td>'+ '</tr>');
				$('.pets-table').append(petsRequests)


			};

			if (reqType === 'transportation') {

				var transportRequests = $('<tr class="req-for-cont" data-id="' +data[i]._id+ '" data-req="' +data[i].requestType+ '">' + '<td>' + '<input type="checkbox" class="transport-request-checkbox cbox">' + '</td>' + '<td class="qNeeded">' + (data[i].quantityRequested - data[i].totalContributed) + '</td>'+ '<td class="reqC">' + data[i].requestComments + '</td>' + '<td>' + data[i].fName +' '+ data[i].lName + '</td>'+ '<td>' + data[i].orgName + '</td>' + '<td>' + data[i].phone + '</td>'+ '</tr>');
				$('.transport-table').append(transportRequests)


			};


			if (reqType === 'clothing') {

				var clothesRequests = $('<tr class="req-for-cont" data-id="' +data[i]._id+ '" data-req="' +data[i].requestType+ '">' + '<td>' + '<input type="checkbox" class="clothes-request-checkbox cbox">' + '</td>' + '<td class="qNeeded">' + (data[i].quantityRequested - data[i].totalContributed) + '</td>'+ '<td class="reqC">' + data[i].requestComments + '</td>' + '<td>' + data[i].fName +' '+ data[i].lName + '</td>'+ '<td>' + data[i].orgName + '</td>' + '<td>' + data[i].phone + '</td>'+ '</tr>');
				$('.clothes-table').append(clothesRequests)
				console.log(data[i].totalContributed)


			};


		};
			$('.water-request-checkbox').on('change', function(){
						var selRequest = '<tr class="success">' + '<th colspan="3" class="contResponseH">' + 'Quantity to Contribute?' + '</th>' + '<th colspan="3" class="contComments">' + 'Contribution Comments' + '</tr>' + '<tr class="contResponseD">' + '<td colspan="3">' +  '<input type="text" class="qc-text water-cont-quantity cont-quantity">' + '</td>' + '<td colspan="3">' + '<textarea class=" cc-text water-cont-comments cont-comments" rows="1">' + '</textarea>' + '</td>' + '</tr>'
				if($(this).prop('checked')){
					$(this).closest('tr').after(selRequest);
						
				}
				else{
					$(this).closest('tr').next().remove();
					$(this).closest('tr').next().remove();
				}
			});


		
		
			$('.meals-request-checkbox').on('change', function(){
						var selRequest = '<tr class="success">' + '<th colspan="3" class="contResponseH">' + 'Quantity to Contribute?' + '</th>' + '<th colspan="3" class="contComments">' + 'Contribution Comments' + '</tr>' + '<tr class="contResponseD">' + '<td colspan="3">' +  '<input type="text" class="qc-text meals-cont-quantity cont-quantity">' + '</td>' + '<td colspan="3">' + '<textarea class=" cc-text meals-cont-comments cont-comments" rows="1">' + '</textarea>' + '</td>' + '</tr>'
				if($(this).prop('checked')){
					$(this).closest('tr').after(selRequest);
						
				}
				else{
					$(this).closest('tr').next().remove();
					$(this).closest('tr').next().remove();
				}
			});

			$('.pets-request-checkbox').on('change', function(){
						var selRequest = '<tr class="success">' + '<th colspan="3" class="contResponseH">' + 'Quantity to Contribute?' + '</th>' + '<th colspan="3" class="contComments">' + 'Contribution Comments' + '</tr>' + '<tr class="contResponseD">' + '<td colspan="3">' +  '<input type="text" class=" qc-text pets-cont-quantity cont-quantity">' + '</td>' + '<td colspan="3">' + '<textarea class=" cc-text pets-cont-comments cont-comments" rows="1">' + '</textarea>' + '</td>' + '</tr>'
				if($(this).prop('checked')){
					$(this).closest('tr').after(selRequest);
						
				}
				else{
					$(this).closest('tr').next().remove();
					$(this).closest('tr').next().remove();
				}
			});



			$('.lodge-request-checkbox').on('change', function(){
						var selRequest = '<tr class="success">' + '<th colspan="3" class="contResponseH">' + 'Quantity to Contribute?' + '</th>' + '<th colspan="3" class="contComments">' + 'Contribution Comments' + '</tr>' + '<tr class="contResponseD">' + '<td colspan="3">' +  '<input type="text" class="qc-text lodge-cont-quantity cont-quantity">' + '</td>' + '<td colspan="3">' + '<textarea class=" cc-text lodge-cont-comments cont-comments" rows="1">' + '</textarea>' + '</td>' + '</tr>'
				if($(this).prop('checked')){
					$(this).closest('tr').after(selRequest);
						
				}
				else{
					$(this).closest('tr').next().remove();
					$(this).closest('tr').next().remove();
				}
			});

			$('.transport-request-checkbox').on('change', function(){
						var selRequest = '<tr class="success">' + '<th colspan="3" class="contResponseH">' + 'Quantity to Contribute?' + '</th>' + '<th colspan="3" class="contComments">' + 'Contribution Comments' + '</tr>' + '<tr class="contResponseD">' + '<td colspan="3">' +  '<input type="text" class=" qc-text transport-cont-quantity cont-quantity">' + '</td>' + '<td colspan="3">' + '<textarea class=" cc-text transport-cont-comments cont-comments" rows="1">' + '</textarea>' + '</td>' + '</tr>'
				if($(this).prop('checked')){
					$(this).closest('tr').after(selRequest);
						
				}
				else{
					$(this).closest('tr').next().remove();
					$(this).closest('tr').next().remove();
				}
			});

			$('.clothes-request-checkbox').on('change', function(){
						var selRequest = '<tr class="success">' + '<th colspan="3" class="contResponseH">' + 'Quantity to Contribute?' + '</th>' + '<th colspan="3" class="contComments">' + 'Contribution Comments' + '</tr>' + '<tr class="contResponseD">' + '<td colspan="3">' +  '<input type="text" class=" qc-text clothes-cont-quantity cont-quantity">' + '</td>' + '<td colspan="3">' + '<textarea class=" cc-text clothes-cont-comments cont-comments" rows="1">' + '</textarea>' + '</td>' + '</tr>'
				if($(this).prop('checked')){
					$(this).closest('tr').after(selRequest);
						
				}
				else{
					$(this).closest('tr').next().remove();
					$(this).closest('tr').next().remove();
				}
			});
		
	}
$(function(){

	$('#myModal1').on('show.bs.modal', function (e) {
	$.get('/reliefRequests',processReliefRequests)
	})

	$.get('/reliefRequests',processReliefRequests) 
	updateStatus()


$('#map-canvas').before($('#requests-table'))

$('#requestsBtn').on('click', function(){
		$('#requests-table').show()
	});



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
		      image = multiItemMarker

		    }

		    // var marker = new google.maps.Marker({
		    //     map: map,
		    //     icon: image,
		    //     position: results[0].geometry.location
		    // });
		    console.log(results)

		    var latLong = {lat:results[0].geometry.location.lat(), lng:results[0].geometry.location.lng()}


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

		    		updateStatus()
		    		updateMarkers()
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
		    		updateStatus()
		    		updateMarkers()

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
		    		updateStatus()
		    		updateMarkers()

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
		    		updateStatus()
		    		updateMarkers()

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
		    		updateStatus()
		    		updateMarkers()

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
		    		updateStatus()
		    		updateMarkers()

		    		}
				)}

			else{}



		    $('#myModal').modal('hide')

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
		// console.log('test cont');

		var fName = $('#first-name-cont').val()
		var lName = $('#last-name-cont').val()
		var orgName = $('#org-name-cont').val()
		var email = $('#inputEmail1-cont').val()
		var phone = $('#phone-number-cont').val()

		var contributionsArray = [];

		$('.req-for-cont :checked').parents('tr').each(function() {
			var orginReqId = $(this).data('id')
			console.log(orginReqId)
			var inputRow = ($(this).next().next())
			var inputQuantity = ($(inputRow).find('.qc-text').val())
			var inputComments = ($(inputRow).find('.cc-text').val())
	
			var contSubmission = {

				_id:orginReqId,
				quantityContributed: inputQuantity,
				contributionComments: inputComments,
				contributorFName: fName,
				contributorLName: lName,
				contributorOrgName: orgName,
				contributorEmail: email,
				contributorPhone: phone

			}

			contributionsArray.push(contSubmission)

		});



		$.post('/contSubmit', {
			contributions: JSON.stringify(contributionsArray)
		},function(data){
			updateMarkers()
			updateStatus()

		})


			$('#myModal1').modal('hide')



	})	



})