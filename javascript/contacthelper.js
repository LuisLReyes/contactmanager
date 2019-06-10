var contactData;
//This runs when the page is loaded
$(function(){
    contactData = getContacts(1);
    displayContacts(1);
});


function displayContacts(userID){
    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/contact/getcontacts.php?users_id=" + userID,
        type : "GET",
        contentType : 'application/json',
        success : function(result){
            console.log("Contacts Retrieved:");
            console.log(result);

            result.data.forEach(contact =>  {
                console.log(contact);
                var row = '<tr><td id="first_name'+contact.id+'">'+JSON.stringify(contact.first_name).replace(/['"]+/g, '')+'</td>' +
                    '<td id="last_name'+contact.id+'">'+JSON.stringify(contact.last_name).replace(/['"]+/g, '')+'</td>' +
                    '<td id="email'+contact.id+'">'+JSON.stringify(contact.email).replace(/['"]+/g, '')+'</td>' +
                    '<td id="phone_number'+contact.id+'">'+JSON.stringify(contact.phone_number).replace(/['"]+/g, '') +'</td>' +
                    '<td id="address'+contact.id+'">'+JSON.stringify(contact.address).replace(/['"]+/g, '')+'</td>' +
                    '<td id="buttons'+contact.id+'" style="text-align:center"> <span class="oi oi-cog"></span>   <span class="oi oi-x"></span></td></tr>';
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
            $("tbody").empty();
            displayContacts(1);

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
        url: "https://contactmanager4331.herokuapp.com/api-files/api/contact/udpatecontact.php",
        type : "PUT",
        data: contactToEdit,
        contentType : 'application/json',
        success : function(result){
            console.log("Contacts Updated");
            console.log(result);

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

function logout(){
    //Call the API to wipe the session
    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/system/logout.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result){
            console.log("Logged out");
            //Logout
            location = 'index.html';
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("Failed to logout");
            console.log(xhr);
            console.log(resp);
            console.log(text);
            //Return a failure
            return xhr;
        }
    });
}
