function getContacts(userID){
    //Prepare data
    //Ajax call
    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/user/createuser.php?users_id=" + userID,
        type : "GET",
        contentType : 'application/json',
        success : function(result){
            console.log("Contacts Retrieved:");
            console.log(result);
            
            //Login after creating user
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