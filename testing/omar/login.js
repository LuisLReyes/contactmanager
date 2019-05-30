var userTest;
$(function() {
		console.log(userTest);
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
	var login = document.getElementById("inputUserId").value;
	var password = document.getElementById("inputPassword").value;
	document.getElementById("loginResult").innerHTML = "";

}

function doCreate()
{
	var uid = document.getElementById("inputUserId").value = document.getElementById("signUpId").value;
	var password = document.getElementById("inputPassword").value = document.getElementById("signUpPassword").value;
	var MD5 = new Hashes.MD5;
	password = MD5.hex(password);
	var fname = document.getElementById("signUpName").value;
	var jsonPayload = {first_name : fname, user_name : uid, password : password};
	//var logindata = {first_name: "Luis", user_name: "luislol",password: "password123"};
	var sendJSON = JSON.stringify(jsonPayload);
	$.ajax
	({
		url:"https://contactmanager4331.herokuapp.com/api-files/api/user/createuser.php",
		type: "POST",
		contentType: 'application/json',
		data: sendJSON,
		success: function(result)
		{
			console.log("User creation success");
			console.log(sendJSON);
			console.log(result);
			//doLogin();
		},
		error: function(xhr, resp, text)
		{
			console.log("User creation fail");
			// TODO display an error message to user
		}
	})
}
