
function signup(signupUsername, signupPassword, signupFirstName,){
    var jsonPayload = JSON.stringify({first_name: signupFirstName, user_name : signupUsername, password : signupPassword});

    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/user/createuser.php",
        type : "POST",
        contentType : 'application/json',
        data : jsonPayload,
        success : function(result){
            console.log("User Created");
            console.log(result);
    
            //Login after creating user
            return login(signupUsername, signupPassword);
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("User not logged in");
            console.log(xhr);
            console.log(resp);
            consold.log(text);
            //Return a failure
            return 0;
        }
    });
}

function login(loginUsername,loginPassword){

    var jsonPayload = JSON.stringify({user_name : loginUsername, password : loginPassword});

    $.ajax({
        url: "https://contactmanager4331.herokuapp.com/api-files/api/user/login.php",
        type : "POST",
        contentType : 'application/json',
        data : jsonPayload,
        success : function(result){
            console.log("User Logged in");
            console.log(result);
    
            //Change page if you want
            location = 'contacts.html';
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("User not logged in");
            console.log(xhr);
            console.log(resp);
            consold.log(test);
            //return a failure
            return -1;
        }
    });
}