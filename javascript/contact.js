function fillContacts(userid){
  
}

function addRow(){
  $(this).attr("disabled", "disabled");
      var index = $("table tbody tr:last-child").index();
	  var row = '<tr>' +
	      '<td><input type="text" class="form-control" name="First Name" id="fname"></td>' +
	      '<td><input type="text" class="form-control" name="Last Name" id="lname"></td>' +
	      '<td><input type="text" class="form-control" name="Email" id="email"></td>' +
	      '<td><input type="text" class="form-control" name="Phone Number" id="phone"></td>' +
	      '<td><input type="text" class="form-control" name="Address" id="address"></td>' +
	'<td>' + action + '</td>' +
	  '</tr>';
	$("table").append(row);		
	$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
	$('[data-toggle="tooltip"]').tooltip();
}

	$(document).ready(function(){
	    $(".add-new").click(function(){
	      $(this).attr("disabled", "disabled");
	      var index = $("table tbody tr:last-child").index();
		  var row = '<tr>' +
		      '<td><input type="text" class="form-control" name="First Name" id="fname"></td>' +
		      '<td><input type="text" class="form-control" name="Last Name" id="lname"></td>' +
		      '<td><input type="text" class="form-control" name="Email" id="email"></td>' +
		      '<td><input type="text" class="form-control" name="Phone Number" id="phone"></td>' +
		      '<td><input type="text" class="form-control" name="Address" id="address"></td>' +
		'<td>' + action + '</td>' +
		  '</tr>';
		$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
		$('[data-toggle="tooltip"]').tooltip();
	    });

		$(document).on("click", ".add", function(){
			var empty = false;
			var input = $(this).parents("tr").find('input[type="text"]');
		input.each(function(){
				if(!$(this).val()){
					$(this).addClass("error");
					empty = true;
				} else{
			$(this).removeClass("error");
		    }
		});
	});
