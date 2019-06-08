$(function() {
    $("#form-signin[name = 'login']").validate({ // initialize the plugin
        rules: {
            inputUserId: {
                required: true,
            },
            inputPassword: {
                required: true,
                minlength: 10
            }

        },
       // Specify validation error messages
    messages: {
      inputPassword: {
          required: "Please provide a password",
          minlength: "Your password must be at least 10 characters long"
      },
      inputUserId: "Please enter a username"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
    });

});

function doLogin()
{
   var userid = document.getElementById("inputUserId").value;
   var password = document.getElementById("inputPassword").value;

	// hash the password using the imported git library
	var MD5 = new Hashes.MD5;
	password = MD5.hex(password);

   // pass inputs to login helper
   login(userid, password);
}

function doCreate()
{
	var uid = document.getElementById("signUpId").value;
	var password = document.getElementById("signUpPassword").value;
   var fName = document.getElementById("signUpName").value;

	// hash the password using the imported git library
	var MD5 = new Hashes.MD5;
	password = MD5.hex(password);

   // pass the input to a helper functions that creates an logs in the userid
   signup(uid, password, fName);
}
