var loggedInId;
var contactData;
//This runs when the page is loaded
$(function(){
    contactData = getContacts(loggedInId);
    displayContacts(loggedInId);
});


function displayContacts(userID){
    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/contact/getcontacts.php?users_id=" + userID,
        type : "GET",
        contentType : 'application/json',
        success : function(result){
            console.log("Contacts Retrieved:");
            console.log(result);
            $("tbody").empty();
            result.data.forEach(contact =>  {
                console.log(contact);
                var row = '<tr id = '+contact.id+'><td id="first_name'+contact.id+'">'+JSON.stringify(contact.first_name).replace(/['"]+/g, '')+'</td>' +
                    '<td id="last_name'+contact.id+'">'+JSON.stringify(contact.last_name).replace(/['"]+/g, '')+'</td>' +
                    '<td id="email'+contact.id+'">'+JSON.stringify(contact.email).replace(/['"]+/g, '')+'</td>' +
                    '<td id="phone_number'+contact.id+'">'+JSON.stringify(contact.phone_number).replace(/['"]+/g, '') +'</td>' +
                    '<td id="address'+contact.id+'">'+JSON.stringify(contact.address).replace(/['"]+/g, '')+'</td>' +
                    '<td id="buttons'+contact.id+'" style="text-align:center"> <span class="oi oi-cog" style="width:40%" onclick="editContact('+contact.id+')"></span><span class="oi oi-x" style="width:40%" onclick="deleteContact('+contact.id+')"></span></td>' +
                    '</tr>';
                $("table").prepend(row);
            });

            //Return contacts retrieved
            return result;
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("Contacts unable to be loaded");
            console.log(xhr);
            console.log(resp);
            console.log(text);
            //Return a failure
            return xhr;
        }
    });


    var row = '<tr>' +
	      '<td><input type="text" class="form-control" name="First Name" id="fname"></td>' +
	      '<td><input type="text" class="form-control" name="Last Name" id="lname"></td>' +
	      '<td><input type="text" class="form-control" name="Email" id="email"></td>' +
	      '<td><input type="text" class="form-control" name="Phone Number" id="phone"></td>' +
	      '<td><input type="text" class="form-control" name="Address" id="address"></td>' +
	  '<td><button class="btn btn-primary my-2 my-sm-0 add-new" onclick="" type="submit">Save</button></td>' +
	  '</tr>';
	//$("table").prepend(row);
}


function getContacts(userID){
    //Ajax call
    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/contact/getcontacts.php?users_id=" + userID,
        type : "GET",
        contentType : 'application/json',
        success : function(result){
            console.log("Contacts Retrieved:");
            console.log(result);

            //Return contacts retrieved
            return result;
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("Contacts unable to be loaded");
            console.log(xhr);
            console.log(resp);
            console.log(text);
            //Return a failure
            return xhr;
        }
    });
}

function addContact(contactToAdd){
    //Ajax call
    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/contact/addcontact.php",
        type : "POST",
        data: contactToAdd,
        contentType : 'application/json',
        success : function(result){
            console.log("Contacts Added");
            console.log(result);
            displayContacts(loggedInId);

            //Return message
            return result;
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("Contacts was not added");
            console.log(xhr);
            console.log(resp);
            console.log(text);
            //Return a failure
            return xhr;
        }
    });
}

function deleteContact(contactID){
    //Prepare data
    var jsonPayload = JSON.stringify({id: contactID});
    //Ajax call
    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/contact/deletecontact.php",
        type : "DELETE",
        data : jsonPayload,
        contentType : 'application/json',
        success : function(result){
            console.log("Contact Deleted");
            console.log(result);
            displayContacts(loggedInId);
            //Return result
            return result;
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("Contacts unable to be deleted");
            console.log(xhr);
            console.log(resp);
            console.log(text);
            //Return a failure
            return xhr;
        }
    });
}

function updateContact(contactToEdit){
    //Ajax call
    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/contact/updatecontact.php",
        type : "PUT",
        data: contactToEdit,
        contentType : 'application/json',
        success : function(result){
            console.log("Contacts Updated");
            console.log(result);
            displayContacts(loggedInId);

            //Return message
            return result;
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("Contacts was not updated");
            console.log(xhr);
            console.log(resp);
            console.log(text);
            //Return a failure
            return xhr;
        }
    });
}

function editContact(contactId){

   var fname = $('#first_name'+contactId).text();
   var lname = $('#last_name'+contactId).text();
   var email = $('#email'+contactId).text();
   var phone = $('#phone_number'+contactId).text();
 	var address = $('#address'+contactId).text();
   $('#'+contactId).remove();
   var row = '<tr id = '+contactId+'>' + '<td><input type="text" class="form-control" name="First Name" id="fname" value='+fname+'></td>' +
    '<td><input type="text" class="form-control" name="Last Name" id="lname" value='+lname+'></td>' +
    '<td><input type="text" class="form-control" name="Email" id="email" value='+email+'></td>' +
    '<td><input type="text" class="form-control" name="Phone Number" id="phone" value='+phone+'></td>' +
    '<td><input type="text" class="form-control" name="Address" id="address" value = '+address+'></td>' +
    '<td><span class="oi oi-circle-check" onclick="editHelper('+contactId+')"></span></td>' +
    '</tr>';
   $("table").prepend(row);

}

function editHelper(contactId){
   var fname = document.getElementById('fname').value;
   var lname = document.getElementById('lname').value;
   var email = document.getElementById('email').value;
   var phone = document.getElementById('phone').value;
 	var address = document.getElementById('address').value;
   var updateObj = {users_id : loggedInId, first_name : fname, last_name : lname, phone_number : phone, address : address, email : email, id : contactId};
   updateObj = JSON.stringify(updateObj);
   updateContact(updateObj);
}


function contactSearch(){
    var input, filter, table, tr, td, i, value, inRow;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("contacttable");
    tr = table.getElementsByTagName("tr");
    
    // Shamelessly sloppy and lazy search function for entire table
    // Start at 1 to exclude header
    for(i=1; i < tr.length;i++){
        inRow=0;
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
            value = td.textContent || td.innerText;
            if(value.toUpperCase().indexOf(filter) > -1){
                inRow = 1;
            }
        }
        td = tr[i].getElementsByTagName("td")[1];
        if(td){
            value = td.textContent || td.innerText;
            if(value.toUpperCase().indexOf(filter) > -1){
                inRow = 1;
            }
        }
        td = tr[i].getElementsByTagName("td")[2];
        if(td){
            value = td.textContent || td.innerText;
            if(value.toUpperCase().indexOf(filter) > -1){
                inRow = 1;
            }
        }
        td = tr[i].getElementsByTagName("td")[3];
        if(td){
            value = td.textContent || td.innerText;
            if(value.toUpperCase().indexOf(filter) > -1){
                inRow = 1;
            }
        }
        td = tr[i].getElementsByTagName("td")[4];
        if(td){
            value = td.textContent || td.innerText;
            if(value.toUpperCase().indexOf(filter) > -1){
                inRow = 1;
            }
        }
        if(inRow){
            tr[i].style.display = "";
        }
        else{
            tr[i].style.display = "none";
        }
        
    }
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
        var contactObj = {users_id : loggedInId, first_name : fname, last_name : lname, phone_number : phone, address : address, email : email};
        console.log(contactObj);
        contactObj = JSON.stringify(contactObj);
      addContact(contactObj);
    }