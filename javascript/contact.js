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
				'<td><span class="oi oi-circle-check" onclick="saveContact()"></span></td>' +
	  '</tr>';
	$("table").prepend(row);

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

function editContact(contactId){

   var row = '<tr id = '+contactId+'> '<td><input type="text" class="form-control" name="First Name" id="fname"></td>' +
    '<td><input type="text" class="form-control" name="Last Name" id="lname"></td>' +
    '<td><input type="text" class="form-control" name="Email" id="email"></td>' +
    '<td><input type="text" class="form-control" name="Phone Number" id="phone"></td>' +
    '<td><input type="text" class="form-control" name="Address" id="address"></td>' +
       '<td><span class="oi oi-circle-check" onclick="editHelper('+contactId+')"></span></td>' +
       '</tr>';
   $("table").append(row);

}

function editHelper(contactId){
   var fname = document.getElementById('fname').value;
   var lname = document.getElementById('lname').value;
   var email = document.getElementById('email').value;
   var phone = document.getElementById('phone').value;
 	var address = document.getElementById('address').value;
   var updateObj = {users_id : 1, first_name : fname, last_name : lname, phone_number : phone, address : address, email : email, id : contactId};
   updateObj = JSON.stringify(updateObj);
   updateContact(updateObj);
}
