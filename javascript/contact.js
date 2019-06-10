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
		'<td><span class="oi oi-circle-check" onclick="saveContact()></span></td>' +
	  '</tr>';
	$("table").prepend(row);

}

function saveContact(){
  var fname = document.getElementById(fname);
  var lname = document.getElementById(lname);
  var email = document.getElementById(email);
  var phone = document.getElementById(phone);
  var address = document.getElementById(address);
  var contactObj = {users_id : 1, first_name : fname, last_name : lname, phone_number : phone, address : address};
  addContact(contactObj);
}
