<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!--The name of the tab in the browser-->
        <title>Contact Manager</title>

        <!--Meta Tags-->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  
        
        <!--Bootstrap's CSS, make sure this is above all other stylesheets imported-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
				<!--Place your custom CSS import below this line-->
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css"/>
        <link rel="stylesheet" href="css/contactsPage.css">
                   
    </head>
    <body> 
        <!--Begin page HTML here-->
		<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
		  <a class="navbar-brand" href="#">	Hello, <?php echo $_SESSION["name"];?>!</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
			  <li class="nav-item">
				<a class="nav-link" href="https://contactmanager4331.herokuapp.com/index.html">Logout</a>
			  </li>
			</ul>
		  </div>
		</nav>
		
        <div class="jumbotron jumbotron-fluid">
		  <div class="container">
			<h1 class="display-4">Contact Manager</h1>
			<p class="lead">Manage Your Contacts!</p>
		  </div>
		</div>
		
  <!---  <div class="row justify-content-center">
		<div class="col-6">
			<input class="sbar" type="search" placeholder="Search Contacts">
			<button class="btn btn-outline-success" type="submit">Search</button>
		</div>
		<div class="col-2">
			<button class="btn btn-primary my-2 my-sm-0 add-new" onclick="addRow()" type="submit">Add Contact</button>
		</div>
	</div> -->
	<div class="container">
        <div class="table-wrapper">
		<div class="row justify-content-between">
			<div class="col-6">
				<input id="searchbar" class="sbar float-left" type="search" placeholder="Search Contacts" onkeyup="contactSearch()">
			</div>
			<div class="col-2">
				<button class="btn btn-primary my-2 my-sm-0 add-new float-right" onclick="addRow()" type="submit">Add Contact</button>
			</div>
			<table class="table table-bordered" id="contacttable">
		</div>
		  <thead class="thead-dark">
			<tr>
			  <th>First</th>
			  <th>Last</th>
			  <th>Email</th>
			  <th>Phone Number</th>
			  <th>Address</th>
			  <th>Action</th>
			</tr>
		  </thead>
		  <tbody>

		  </tbody>
		</table>
		</div>
	    </div>
		
		<br>



        <!--Imports for Jquery, popper, and Bootstreap's custom javascript-->
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <!--Place your custom JavaScript import below this line-->
	<!--<script src="javascript/contact.js"></script>-->
	<script src="javascript/contacthelper.js"></script>
			<script>
				loggedInId =<?php echo $_SESSION["id"];?>;
				alert(loggedInID);
			</script>
    </body>
</html>
