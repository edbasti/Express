$(":button.deleteemail").click(function()
	{
		event.preventDefault();

	    // Pop up a confirmation dialog
	    var confirmation = confirm('Are you sure you want to delete this user?');

	    // Check and make sure the user confirmed
	    if (confirmation === true) {

	        // If they did, do our delete
	        $.ajax({
	            type: 'DELETE',
	            url: '/deleteuser/' + $(this).attr('rel')
	        }).done(function( response ) {

	            // Check for a successful (blank) response
	            if (response.msg === '') {
	            }
	            else {
	                alert('Error: ' + response.msg);
	            }

	            // Update the table
	            //populateTable();

	        });

	    }
	    else {

	        // If they said no to the confirm, do nothing
	        return false;

	    }

	}
);

$("#userList table tbody tr td").on("click", ":button.editemail", function()
	{
		event.preventDefault();

	    // Pop up a confirmation dialog
	    var confirmation = confirm('Are you sure you want to edit this user?');

	    // Check and make sure the user confirmed
	    if (confirmation === true) {

	    	var strUsername = $(this).closest('tr').find('td').eq(1).find('input').val();
	    	var strUseremail = $(this).closest('tr').find('td').eq(2).find('input').val();

	        // If they did, do our delete
	        $.ajax({
	            type: 'PUT',
	            data: {'username' : strUsername, 'useremail' : strUseremail},
	            url: '/edituser/' + $(this).attr('rel')
	        }).done(function( response ) {

	            // Check for a successful (blank) response
	            if (response.msg === '') {
	            }
	            else {
	                alert('Error: ' + response.msg);
	            }

	            // Update the table
	            //populateTable();

	        });

	    }
	    else {

	        // If they said no to the confirm, do nothing
	        return false;

	    }

	}
);