
//Call to create a new user
function signup(signupUsername, signupPassword, signupFirstName,){
    //Prepare data
    var jsonPayload = JSON.stringify({first_name: signupFirstName, user_name : signupUsername, password : signupPassword});
    //Ajax call
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
            return xhr;
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
            location = 'contact.html';
        },
        error: function(xhr, resp, text){
            // on error, log it
            console.log("User not logged in");
            console.log(xhr);
            console.log(resp);
            console.log(text);
            //return a failure
            document.getElementById("loginResult").innerHTML = "Incorrect Username/Password Combination";
            return xhr;
        }
    });
}
