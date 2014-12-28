$(document).ready(function()
{

	// Function to get today date
	var today = new Date();
	var dd = today.getDate();
	//var mm = today.getMonth()+1; //January is 0!
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var mm = month[today.getMonth()];
	
	var yyyy = today.getFullYear();

	if(dd<10) 
	{
		dd='0'+dd
	} 

	if(mm<10) 
	{
		mm='0'+mm
	}
	today = dd+' '+mm+' '+yyyy; 
	curr_date = yyyy+'/'+mm+'/'+dd;
	document.getElementById("today_date").innerHTML = today;
	//$("#today_date").html(today);
	$("#today_date2").html(today);
	$("#today_date3").html(today);
	// End Function to get today date
	 
	// Function to get Home Summary Data
	$.ajax({
			type: "POST",
			url : "http://pln.ifabula.com/mobility_controller/display_home_summary",
			data : "curr_date="+curr_date,
			dataType: "json",
			success: function(msg,string,jqXHR)
			{
				$("#total_cust_postpaid").html(msg.total_cust_postpaid);
				$("#total_cust_prepaid").html(msg.total_cust_prepaid);
				$("#total_capacity_prepaid").html(msg.total_capacity_prepaid);
				$("#total_capacity_postpaid").html(msg.total_capacity_postpaid);
				$("#total_trans_prepaid").html(msg.total_trans_prepaid);
				$("#total_trans_postpaid").html(msg.total_trans_postpaid);
				$("#total_trans_nontaglis").html(msg.total_trans_nontaglis);
				
			} // string : cek suskses ato gagal, 
		})
});