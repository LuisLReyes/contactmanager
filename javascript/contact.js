function fillContacts(userid){
  
}

function addRow(){
 
// Fix this
      var index = $("table tbody tr:last-child").index();
	  var row = '<tr>' +
	      '<td><input type="text" class="form-control" name="First Name" id="fname"></td>' +
	      '<td><input type="text" class="form-control" name="Last Name" id="lname"></td>' +
	      '<td><input type="text" class="form-control" name="Email" id="email"></td>' +
	      '<td><input type="text" class="form-control" name="Phone Number" id="phone"></td>' +
	      '<td><input type="text" class="form-control" name="Address" id="address"></td>' +
	'<td>'  +'<td><button class="btn btn-primary my-2 my-sm-0 add-new" onclick="" type="submit">Save</button></td>' '</td>' +
	  '</tr>';
	$("table").prepend(row);		
	
}

	
