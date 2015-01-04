	$(document).ready(function()
	{
		$("#daya_terbesar_start").html("1 December 2014");
		$("#daya_terbesar_end").html("31 December 2014");
		$("#kwh_terbesar_start").html("1 December 2014");		
		$("#kwh_terbesar_end").html("31 December 2014");
		$("#pelanggan_terbesar_start").html("1 December 2014");		
		$("#pelanggan_terbesar_end").html("31 December 2014");
		$("#bank_terbesar_start").html("1 December 2014");
		$("#bank_terbesar_end").html("31 December 2014");
		$("#merchant_terbesar_start").html("1 December 2014");
		$("#merchant_terbesar_end").html("31 December 2014");
		$("#switching_terbesar_start").html("1 December 2014");
		$("#switching_terbesar_end").html("31 December 2014");
		
			  var _toPrecision = function( number , precision ){
				var prec = Math.pow( 10 , precision );
				return Math.round( number * prec ) / prec;
			}
		
		var start_date = "December 2014";
		var end_date = "December 2014";

	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_daya_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].region_name.toString());
			  total.push(result[item].total.toString());
		  }														
			
			var PelangganDayaTerbesarData = 
			{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#008b45",
					 strokeColor: "#008b45",
					 highlightFill: "#00ee76",
					 highlightStroke: "#00ee76",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5DayaTerbesar").getContext("2d");
          myBarChartDayaTerbesar = new Chart(ctx).Bar(PelangganDayaTerbesarData, {responsive : true,animation:false});
		}	
	});	

	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_jumlah_pelanggan_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].region_name.toString());
			  total.push(result[item].total.toString());
		  }														
			
			var JumlahPelangganTerbesar = 
			{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#ee3b3b",
					 strokeColor: "#ee3b3b",
					 highlightFill: "#ff4040",
					 highlightStroke: "#ff4040",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5JumlahPelangganTerbesar").getContext("2d");
          myBarChartPelangganTerbesar = new Chart(ctx).Bar(JumlahPelangganTerbesar, {responsive : true,animation : false});
		}	
	});


	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_kwh_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].region_name.toString());
			  total.push(result[item].total.toString());
		  }														
			
		var KWHTerbesar = 
		{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#eeee00",
					 strokeColor: "#eeee00",
					 highlightFill: "#ffff00",
					 highlightStroke: "#ffff00",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5KWHTerbesar").getContext("2d");
          myBarChartKWHTerbesar = new Chart(ctx).Bar(KWHTerbesar, {responsive : true,animation:false});
		}	
	});	
	
	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_bank_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].bank_name.toString());
			  total.push(_toPrecision(parseFloat(result[item].total.toString())/1000000000000,2));
		  }														
			
		var BankTerbesar = 
		{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#044853",
					 strokeColor: "#044853",
					 highlightFill: "#0991a8",
					 highlightStroke: "#0991a8",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5BankTerbesar").getContext("2d");
          myBarChartBankTerbesar = new Chart(ctx).Bar(BankTerbesar, {responsive : true,animation:false});
		}	
	});	
	
	
	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_merchant_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].merchant_name.toString());
			  total.push(_toPrecision(parseFloat(result[item].total.toString())/1000000000000,2));
		  }														
			
		var MerchantTerbesar = 
		{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#cdbe70",
					 strokeColor: "#cdbe70",
					 highlightFill: "#ffec8b",
					 highlightStroke: "#ffec8b",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5MerchantPelunasanTerbesar").getContext("2d");
          myBarChartMerchantTerbesar = new Chart(ctx).Bar(MerchantTerbesar, {responsive : true,animation:false});
		}	
	});	
	
	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_switching_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].switching_name.toString());
			  total.push(_toPrecision(parseFloat(result[item].total.toString())/1000000000000,2));
		  }														
			
		var Switching = 
		{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#cd69c9",
					 strokeColor: "#cd69c9",
					 highlightFill: "#ff83fa",
					 highlightStroke: "#ff83fa",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5SwitchingPelunasanTerbesar").getContext("2d");
          myBarChartSwitchingTerbesar = new Chart(ctx).Bar(Switching, {responsive : true,animation:false});
		}	
	});
		
		
		$("#button").click(function() // function searching button
		{
			var element = document.getElementById("start_date");
			var start_date = element.value;	
			
			var element = document.getElementById("end_date");
			var end_date = element.value;
			
			
		
		
			
			$("#pelanggan_terbesar_start").html(start_date);
			$("#pelanggan_terbesar_end").html(end_date);
			$("#daya_terbesar_start").html(start_date);
			$("#daya_terbesar_end").html(end_date);
			$("#kwh_terbesar_start").html(start_date);
			$("#kwh_terbesar_end").html(end_date);
			$("#bank_terbesar_start").html(start_date);
			$("#bank_terbesar_end").html(end_date);
			$("#merchant_terbesar_start").html(start_date);
			$("#merchant_terbesar_end").html(end_date);
			$("#switching_terbesar_start").html(start_date);
			$("#switching_terbesar_end").html(end_date);
			
			myBarChartSwitchingTerbesar.destroy();
			myBarChartMerchantTerbesar.destroy();
			myBarChartBankTerbesar.destroy();
			myBarChartKWHTerbesar.destroy();
			myBarChartDayaTerbesar.destroy();
			myBarChartPelangganTerbesar.destroy();
			
		$.ajax
		({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_daya_terbesar/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels = [],total=[];
			for (var item in result){
				  labels.push(result[item].region_name.toString());
				  total.push(result[item].total.toString());
			  }														
				
				var PelangganDayaTerbesarData = 
				{
				 labels: labels,
				 datasets: [
					 {
				
						 fillColor: "#008b45",
						 strokeColor: "#008b45",
						 highlightFill: "#00ee76",
						 highlightStroke: "#00ee76",
						 data: total
					 }
				 ]
			 };
				 
			  var ctx = document.getElementById("5DayaTerbesar").getContext("2d");
			  myBarChartDayaTerbesar = new Chart(ctx).Bar(PelangganDayaTerbesarData, {responsive : true,animation:false});
			}	
		});	

	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_jumlah_pelanggan_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].region_name.toString());
			  total.push(result[item].total.toString());
		  }														
			
			var JumlahPelangganTerbesar = 
			{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#ee3b3b",
					 strokeColor: "#ee3b3b",
					 highlightFill: "#ff4040",
					 highlightStroke: "#ff4040",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5JumlahPelangganTerbesar").getContext("2d");
          myBarChartPelangganTerbesar = new Chart(ctx).Bar(JumlahPelangganTerbesar, {responsive : true,animation : false});
		}	
	});


	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_kwh_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].region_name.toString());
			  total.push(result[item].total.toString());
		  }														
			
		var KWHTerbesar = 
		{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#eeee00",
					 strokeColor: "#eeee00",
					 highlightFill: "#ffff00",
					 highlightStroke: "#ffff00",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5KWHTerbesar").getContext("2d");
          myBarChartKWHTerbesar = new Chart(ctx).Bar(KWHTerbesar, {responsive : true,animation:false});
		}	
	});	
	
	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_bank_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].bank_name.toString());
			  total.push(_toPrecision(parseFloat(result[item].total.toString())/1000000000000,2));
		  }														
			
		var BankTerbesar = 
		{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#044853",
					 strokeColor: "#044853",
					 highlightFill: "#0991a8",
					 highlightStroke: "#0991a8",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5BankTerbesar").getContext("2d");
          myBarChartBankTerbesar = new Chart(ctx).Bar(BankTerbesar, {responsive : true,animation:false});
		}	
	});	
	
	
	$.ajax
	({
	type: "POST",
	url : "http://pln.ifabula.com/mobility_controller/display_merchant_terbesar/"+start_date+"/"+end_date,
	dataType: "json",
	success: function(result)
	{
		var labels = [],total=[];
		for (var item in result){
			  labels.push(result[item].merchant_name.toString());
			  total.push(_toPrecision(parseFloat(result[item].total.toString())/1000000000000,2));
		  }														
			
		var MerchantTerbesar = 
		{
			 labels: labels,
			 datasets: [
				 {
			
					 fillColor: "#cdbe70",
					 strokeColor: "#cdbe70",
					 highlightFill: "#ffec8b",
					 highlightStroke: "#ffec8b",
					 data: total
				 }
			 ]
		 };
			 
		  var ctx = document.getElementById("5MerchantPelunasanTerbesar").getContext("2d");
          myBarChartMerchantTerbesar = new Chart(ctx).Bar(MerchantTerbesar, {responsive : true,animation:false});
		}	
	});	
	
		$.ajax
		({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_switching_terbesar/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels = [],total=[];
			for (var item in result){
				  labels.push(result[item].switching_name.toString());
				  total.push(_toPrecision(parseFloat(result[item].total.toString())/1000000000000,2));
			  }														
				
			var Switching = 
			{
				 labels: labels,
				 datasets: [
					 {
				
						 fillColor: "#cd69c9",
						 strokeColor: "#cd69c9",
						 highlightFill: "#ff83fa",
						 highlightStroke: "#ff83fa",
						 data: total
					 }
				 ]
			 };
				 
			  var ctx = document.getElementById("5SwitchingPelunasanTerbesar").getContext("2d");
			  myBarChartSwitchingTerbesar = new Chart(ctx).Bar(Switching, {responsive : true,animation:false});
			}	
		});		
	})	
});
	
	