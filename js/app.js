$(document).ready(function()
{

	// Login Credential Function
	$("#button").click(function()
	{
		var sendu = $("#username").val();
		var sendp = $("#password").val();
		
		$.ajax({
			type: "POST",
			url : "http://localhost/mobility/login_admin_cpanel/validate_credentials_mobile",
			data : "username="+sendu+"&password="+sendp,
			dataType: "json",
			success: function(msg,string,jqXHR)
			{
				if(msg.password != '0')
				{
					$("#result").html(msg.name+"<br />");
				}
				else
				{
					window.location.replace("main.html");
				}
			} // string : cek suskses ato gagal, 
		})
	})
	//End Login Credential Function
});