$(function() {
    $('#form-signin').validate({ // initialize the plugin
        rules: {
            inputUserId: {
                required: true,
            },
            inputPassword: {
                required: true,
                minlength: 10
            }
        }
    });

});

function doLogin()
{

	// create user field also populates these ids so they can always be used to start
	// the function
	var userid = document.getElementById("inputUserId").value;
	console.log(userid);
	var password = document.getElementById("inputPassword").value;
	console.log(password);

	// hash the password using the imported git library
	var MD5 = new Hashes.MD5;
	password = MD5.hex(password);

	var jsonPayload = {user_name : userid, password : password};
	jsonPayload = JSON.stringify(jsonPayload);

	$.ajax({
	    url: "https://contactmanager4331.herokuapp.com/api-files/api/user/login.php",
	    type : "POST",
	    contentType : 'application/json',
	    data : jsonPayload,
	    success : function(result){
	        console.log("User Logged in");
	        console.log(result);

	        //Change page if you want
	        //location = 'contacts.html';
	    },
	    error: function(xhr, resp, text){
	        // on error, log it
	        console.log("User not logged in");
	        console.log(xhr);
	        console.log(resp);
	        console.log(test);
					document.getElementById("loginResult").innerHTML = "incorrect username/password combination";
	    }
	});

}

function doCreate()
{
	var uid = document.getElementById("inputUserId").value = document.getElementById("signUpId").value;
	var password = document.getElementById("inputPassword").value = document.getElementById("signUpPassword").value;

	// hash the password using the imported git library
	var MD5 = new Hashes.MD5;
	password = MD5.hex(password);
	var fname = document.getElementById("signUpName").value;

	// create object to hold all needed values to convert to JSON for creating user
	var jsonPayload = {first_name : fname, user_name : uid, password : password};
	jsonPayload = JSON.stringify(jsonPayload);

	// asynch call to create a new user field in the database
	$.ajax
	({
		url:"https://contactmanager4331.herokuapp.com/api-files/api/user/createuser.php",
		type: "POST",
		contentType: 'application/json',
		data: jsonPayload,
		success: function(result)
		{
			console.log("User creation success");
			console.log(sendJSON);
			console.log(result);
			doLogin();
		},
		error: function(xhr, resp, text)
		{
			console.log("User creation fail");
			// TODO display an error message to user
		}
	})
}
