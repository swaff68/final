$(function(){

	$('#reqForm').on('submit', function(e){
		e.preventDefault();
		console.log('test');

		var fName = $('#first-name').val()
		var lName = $('#last-name').val()
		var orgName = $('#org-name').val()
		var email = $('#inputEmail1').val()
		var phone = $('#phone-number').val()
		var street = $('#street').val()
		var city = $('#city').val()
		var zip = $('#zip').val()
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


		console.log(fName, lName, orgName, email, phone, street, city, zip, waterQuantity, waterComments, mealsQuantity, mealsComments, lodgeQuantity, lodgeComments, petsQuantity, petsComments, transportQuantity, transportComments, clothesQuantity, clothesComments)

		$.post('/aidSubmit', {fName: fName, lName: lName, orgName: orgName, email: email, phone: phone, street: street, city: city, zip: zip, waterQuantity: waterQuantity, waterComments: waterComments, mealsQuantity: mealsQuantity, mealsComments: mealsComments, lodgeQuantity: lodgeQuantity, lodgeComments: lodgeComments, petsQuantity: petsQuantity, petsComments: petsComments, transportQuantity: transportQuantity, transportComments: transportComments, clothesQuantity: clothesQuantity, clothesComments: clothesComments}, function(data){
			console.log('data', data)
		})

	})	

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

	})	



})