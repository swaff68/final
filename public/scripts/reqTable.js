	$('#requestsBtn').one('click', function(){
		$('#requests-table').show()

		for (requestType in requests) {

			var aidType = $('<div class="col-md-2 '+ request.id+'">'+'<div>' +data[requestType].displayName+'</div>'+'<div> '+' <i class="fa '+ data[requestType].icon+ '">'+'</i>'+'<div>'+"Current Requests"+'</div>'+'<div class="curReq">' +data[requestType].requests+'</div>'+'<div>'+"Quantity Still Needed"+'</div>'+'<div class="quanStillNeeded">'+data[requestType].quantity+'</div>'+'</div>');

			$('.requests-table').append(aidType)
		};
	}