function fillContacts(userid){

}

function addRow(){

// Fix this
      var index = $("table tbody tr:last-child").index();
	  var row = '<tr id="newRow">' +
	      '<td><input type="text" class="form-control" name="First Name" id="fname"></td>' +
	      '<td><input type="text" class="form-control" name="Last Name" id="lname"></td>' +
	      '<td><input type="text" class="form-control" name="Email" id="email"></td>' +
	      '<td><input type="text" class="form-control" name="Phone Number" id="phone"></td>' +
	      '<td><input type="text" class="form-control" name="Address" id="address"></td>' +
				'<td style="text-align:center"><span class="oi oi-circle-check" style="width:40%" onclick="saveContact()"></span><span class="oi oi-x" style="width:40%" onclick="removeRow()"></span></td>' +
	  '</tr>';
	$("table").prepend(row);

}

function removeRow(){
  $('#newRow').remove();
}

function saveContact(){
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
	var address = document.getElementById('address').value;
	var contactObj = {users_id : 1, first_name : fname, last_name : lname, phone_number : phone, address : address, email : email};
	console.log(contactObj);
	contactObj = JSON.stringify(contactObj);
  addContact(contactObj);
}
