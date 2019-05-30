function doLogin()
{
	var login = document.getElementById("inputUserId").value;
	var password = document.getElementById("inputPassword").value;
	document.getElementById("loginResult").innerHTML = "";
	var jsonPayload = '{"login" : "' + login + '", "password" : "' + password + '"}';
	var url = 'C:/Users/casti/OneDrive/Desktop/Login/index.html?' + '/Login.aspx';
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.send(jsonPayload);
		var jsonObject = JSON.parse( xhr.responseText );
		userId = jsonObject.id;
		if( userId < 1 )
		{
			document.getElementById("loginResult").innerHTML = "Username/Password combination incorrect";
			return;
		}
		var firstName = jsonObject.firstName;
		var lastName = jsonObject.lastName;
		document.getElementById("userName").innerHTML = firstName + " " + lastName;
	 	document.getElementById("loginName").value = document.getElementById("loginPassword").value = "";
		hideOrShow( "loggedInDiv", true);
		hideOrShow( "accessUIDiv", true);
		hideOrShow( "loginDiv", false);
	}
	catch(err)
	{
		document.getElementById("loginResult").innerHTML = err.message;
	}
}

function doCreate()
{
	//var uid = document.getElementById("inputUserId").value = document.getElementById("signUpId").value;
	//var password = document.getElementById("inputPassword").value = document.getElementById("signUpPassword").value;
	//var fname = document.getElementById("signUpName").value;
	//var jsonPayload = '{"first_name" : "' + fname + '", "user_name" : "' + uid + '", "password" : "' + password + '"}';
	var logindata = '{"first_name":"Luis", "user_name":"luislol","password":"password123"}';
	logindata = JSON.stringify(logindata);
	$.ajax
	({
		url:"https://contactmanager4331.herokuapp.com/api-files/api/user/createuser.php",
		type: "POST",
		contentType: 'application/json',
		data: logindata,
		success: function(result)
		{
			console.log("User creation success");
			//doLogin();
		},
		error: function(xhr, resp, text)
		{
			console.log("User creation fail");
			// TODO display an error message to user
		}
	})
}
