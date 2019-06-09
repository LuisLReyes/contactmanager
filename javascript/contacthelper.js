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
            consold.log(text);
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
            
            //Return message
            return result;
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("Contacts was not added");
            console.log(xhr);
            console.log(resp);
            consold.log(text);
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
            consold.log(text);
            //Return a failure
            return xhr;
        }
    });
}

function addContact(contactToEdit){
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
            consold.log(text);
            //Return a failure
            return xhr;
        }
    });
}