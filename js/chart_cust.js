	$(document).ready(function()
	{
		$("#daya_start_date").html("January 2014");
		$("#daya_end_date").html("December 2014");
		$("#kwh_start_date").html("January 2014");
		$("#kwh_end_date").html("December 2014");
		$("#cust_start_date").html("January 2014");
		$("#cust_end_date").html("December 2014");
		$("#pelunasan_lembar_end_date").html('December 2014');
		var string = numeral(1000).format('0,0');
		
		function _resetChartData(chart, new_segments) {
		// remove all the segments
		while (chart.segments.length) {
			chart.removeData();
		};

		// add the new data fresh
		new_segments.forEach (function (segment, index) {
			chart.addData(segment, index);
		});
	};

	// when I want to reset my data I call
		
		
		$("#button").click(function() // function searching button
		{
			//var start_date = $("#start_date").val();
			
			var element = document.getElementById("start_date");
			var a = element.value;	
			
			var element = document.getElementById("end_date");
			var end_date = element.value;	
			
			var labels_region = [],data_prepaid_daya=[],data_postpaid_daya=[],data_postpaid_kwh=[],data_prepaid_kwh=[],data_prepaid_cust=[],data_postpaid_cust=[];
			
			$.ajax({
				type: "POST",
				url : "http://202.162.209.216/mobility/mobility_controller/search_cust_data/"+a+"/"+end_date,
				data : "start_date="+a+"&end_date="+end_date,
				dataType: "json",
				success: function(result)
				{
				
						 for(var item in result)
						 {
						  labels_region.push(result[item].region_name.toString());
						  data_prepaid_daya.push(result[item].DAYATERSAMBUNGPREPAID.toString());
						  data_postpaid_daya.push(result[item].DAYATERSAMBUNGPOSTPAID.toString());
						  data_prepaid_kwh.push(result[item].KWHJUALPREPAID.toString());
						  data_postpaid_kwh.push(result[item].KWHJUALPOSTPAID.toString());
						  data_postpaid_cust.push(result[item].JUMLAHPELANGGANPOSTPAID.toString());
						  data_prepaid_cust.push(result[item].JUMLAHPELANGGANPREPAID.toString());
						} 
						
						var TotalDayaWilayahData = 
						{
						 labels: labels_region,
						 datasets: [
							 {
								 label: "POSTPAID",
								 fillColor: "#044853",
								 strokeColor: "#044853",
								 highlightFill: "#0991a8",
								 highlightStroke: "#0991a8",
								 data: data_prepaid_daya
							 },
							 {
								 label: "PREPAID",
								 fillColor: "#670808",
								 strokeColor: "#670808",
								 highlightFill: "#af0d0d",
								 highlightStroke: "#af0d0d",
								 data: data_postpaid_daya
							 }
						 ]
					 };
					 var KWHJualWilayahData = 
					{
					 labels: labels_region,
					 datasets: [
						 {
							 label: "POSTPAID",
							 fillColor: "#044853",
							 strokeColor: "#044853",
							 highlightFill: "#0991a8",
							 highlightStroke: "#0991a8",
							 data: data_postpaid_kwh
						 },
						 {
							 label: "PREPAID",
							 fillColor: "#670808",
							 strokeColor: "#670808",
							 highlightFill: "#af0d0d",
							 highlightStroke: "#af0d0d",
							 data: data_prepaid_kwh
						 }
					 ]
				 };
				 
				 
				  var PelangganWilayahData = {
				 labels: labels_region,
				 datasets: [
					 {
						 label: "POSTPAID",
						 fillColor: "#044853",
						 strokeColor: "#044853",
						 highlightFill: "#0991a8",
						 highlightStroke: "#0991a8",
						 data: data_postpaid_cust
					 },
					 {
						 label: "PREPAID",
						 fillColor: "#670808",
						 strokeColor: "#670808",
						 highlightFill: "#af0d0d",
						 highlightStroke: "#af0d0d",
						 data: data_prepaid_cust
					 }
				 ]
			 };
	
	
	
	
					$("#daya_start_date").html(a);
					$("#daya_end_date").html(end_date);
					$("#kwh_start_date").html(a);
					$("#kwh_end_date").html(end_date);
					//$("#KWHJualWilayah").html("");
					// $('#KWHJualWilayah').empty();
					
					var canvas = document.getElementById('KWHJualWilayah');
					var context = canvas.getContext('2d');
				//	$('#KWHJualWilayah').remove(); // this is my <canvas> element
				//	$('#canvas-holder').append('<canvas id="KWHJualWilayah2"  width="500" height="510"><canvas>');
				
					//context.clearRect ( 500 , 500 , canvas.width, canvas.height );
					
					var canvas2 = document.getElementById('TotalDayaWilayah');
					var context2 = canvas2.getContext('2d');
					//context2.clearRect ( 500 , 500 , canvas2.width, canvas2.height );
					myBarChartKWH.destroy();
					myBarChartDaya.destroy();
					myBarChartCust.destroy();
					//myBarChart.removeData();
					//myBarChart.clear();
					
					var ctx2 = document.getElementById("PelangganWilayah").getContext("2d");
					myBarChartCust = new Chart(ctx2).Bar(PelangganWilayahData, {responsive : true});
					var ctx5 = document.getElementById("KWHJualWilayah").getContext("2d");
					myBarChartKWH = new  Chart(ctx5).Bar(KWHJualWilayahData, {responsive : true});
					var ctx3 = document.getElementById("TotalDayaWilayah").getContext("2d");
					myBarChartDaya = new Chart(ctx3).Bar(TotalDayaWilayahData, {responsive : true});
				} // string : cek suskses ato gagal, 
			})
		})
	
		/*$(function() {
			var data = [
				{
				"id": "0",
				"name": "Semua Wilayah"}
			];
			$.each(data, function(i, option) {
				$('#region').append($('<option/>').attr("value", option.id).text(option.name));
			});
		}) // set default option
		
		
		
		 $.getJSON("http://202.162.209.216/mobility/mobility_controller/populate_dropdown_region", function (result) 
		{
			$.each(result, function(i, option) {
				$('#region').append($('<option/>').attr("value", option.region_id).text(option.region_name));
			});
		});*/
	
										var postpaid = 'a';
										var cust_postpaid = ['15','35'];
										var labels = [],data_prepaid=[],data_postpaid=[];
										/*$.ajax({
											type: "POST",
											url : "http://202.162.209.216/mobility/mobility_controller/display_customer_trans",
											data : "curr_date="+postpaid,
											dataType: "json",
											success: function(result)
											{
												 for(var item in result){
													  labels.push(result[item].periode_trans.toString());
													  data_postpaid.push(result[item].total_cust_postpaid.toString());
													  data_prepaid.push(result[item].total_cust_prepaid.toString());
												  } 
												// var Obj = JSON.parse(msg);

											 // Since your controller produce array of object you can access the value by using this one :
											// for(var a=0; a< Obj.length; a++){
												   //cust_postpaid[s] = Obj.total_cust_postpaid 
											 }
												
											//} // string : cek suskses ato gagal, 
											})
											*/
											
											 $.getJSON("http://202.162.209.216/mobility/mobility_controller/display_customer_trans", function (result) 
											 {
												
											 
												for (var item in result){
													  labels.push(result[item].periode_trans.toString());
													  data_postpaid.push(result[item].total_cust_postpaid.toString());
													  data_prepaid.push(result[item].total_cust_prepaid.toString());
												  }
												
												  
												  	var TotalPelangganData = {
														labels: labels,
														datasets: [
																		{
																						label: "POSTPAID",
																						fillColor: "rgba(220,220,220,0.2)",
																						strokeColor: "#3daabc",
																						pointColor: "#125864",
																						pointStrokeColor: "#fff",
																						pointHighlightFill: "#fff",
																						pointHighlightStroke: "rgba(220,220,220,1)",
																						data: data_prepaid
																		},
																		{
																						label: "PREPAID",
																						fillColor: "rgba(151,187,205,0.2)",
																						strokeColor: "#af0d0d",
																						pointColor: "#670808",
																						pointStrokeColor: "#fff",
																						pointHighlightFill: "#fff",
																						pointHighlightStroke: "rgba(151,187,205,1)",
																						data: data_postpaid
																		}														
																	]
																			};
										
										
										
										 var ctx = document.getElementById("TotalPelanggan").getContext("2d");
										 window.myLineChart = new Chart(ctx).Line(TotalPelangganData, {responsive : true});
         
										
									});
									
		$.getJSON("http://202.162.209.216/mobility/mobility_controller/display_customer_trans_region", function (result) 
		{	
			var labels = [],data_prepaid=[],data_postpaid=[];
			for (var item in result){
				  labels.push(result[item].region_name.toString());
				  data_postpaid.push(result[item].total_cust_postpaid.toString());
				  data_prepaid.push(result[item].total_cust_prepaid.toString());
			  }
			 
			  
				  var PelangganWilayahData = {
				 labels: labels,
				 datasets: [
					 {
						 label: "POSTPAID",
						 fillColor: "#044853",
						 strokeColor: "#044853",
						 highlightFill: "#0991a8",
						 highlightStroke: "#0991a8",
						 data: data_postpaid
					 },
					 {
						 label: "PREPAID",
						 fillColor: "#670808",
						 strokeColor: "#670808",
						 highlightFill: "#af0d0d",
						 highlightStroke: "#af0d0d",
						 data: data_prepaid
					 }
				 ]
			 };
	
	
	
			var ctx2 = document.getElementById("PelangganWilayah").getContext("2d");
			myBarChartCust = new Chart(ctx2).Bar(PelangganWilayahData, {responsive : true});
		});

		$.getJSON("http://202.162.209.216/mobility/mobility_controller/display_customer_trans_daya", function (result) 
		{	
			var labels = [],data_prepaid=[],data_postpaid=[];
			for (var item in result){
				  labels.push(result[item].region_name.toString());
				  data_postpaid.push(result[item].total_cust_postpaid.toString());
				  data_prepaid.push(result[item].total_cust_prepaid.toString());
			  }
			 
			  
				var TotalDayaWilayahData = 
				{
				 labels: labels,
				 datasets: [
					 {
						 label: "POSTPAID",
						 fillColor: "#044853",
						 strokeColor: "#044853",
						 highlightFill: "#0991a8",
						 highlightStroke: "#0991a8",
						 data: data_postpaid
					 },
					 {
						 label: "PREPAID",
						 fillColor: "#670808",
						 strokeColor: "#670808",
						 highlightFill: "#af0d0d",
						 highlightStroke: "#af0d0d",
						 data: data_prepaid
					 }
				 ]
			 };
	
	
	
			var ctx3 = document.getElementById("TotalDayaWilayah").getContext("2d");
			myBarChartDaya = new Chart(ctx3).Bar(TotalDayaWilayahData, {responsive : true});
		});
		
		$.getJSON("http://202.162.209.216/mobility/mobility_controller/display_customer_trans_kwh", function (result) 
		{	
			var labels = [],data_prepaid=[],data_postpaid=[];
			for (var item in result){
				  labels.push(result[item].region_name.toString());
				  data_postpaid.push(result[item].total_cust_postpaid.toString());
				  data_prepaid.push(result[item].total_cust_prepaid.toString());
			  }
			 
			  
				var KWHJualWilayahData = 
				{
				 labels: labels,
				 datasets: [
					 {
						 label: "POSTPAID",
						 fillColor: "#044853",
						 strokeColor: "#044853",
						 highlightFill: "#0991a8",
						 highlightStroke: "#0991a8",
						 data: data_postpaid
					 },
					 {
						 label: "PREPAID",
						 fillColor: "#670808",
						 strokeColor: "#670808",
						 highlightFill: "#af0d0d",
						 highlightStroke: "#af0d0d",
						 data: data_prepaid
					 }
				 ]
			 };
	
	
	
          var ctx4 = document.getElementById("KWHJualWilayah").getContext("2d");
          myBarChartKWH = new Chart(ctx4).Bar(KWHJualWilayahData, {responsive : true});
		});
		

		$.getJSON("http://202.162.209.216/mobility/mobility_controller/display_lembar_pelunasan", function (result) 
		{	
			var labels = [],data_prepaid=[],data_postpaid=[];
			for (var item in result){
				  labels.push(result[item].region_name.toString());
				  data_postpaid.push(result[item].JUMLAHLEMBARPELUNASANPOSTPAID.toString());
				  data_prepaid.push(result[item].JUMLAHLEMBARPELUNASANPREPAID.toString());
			  }
			 
			  
				  var LembarPelunasan = {
				 labels: labels,
				 datasets: [
					 {
						 label: "POSTPAID",
						 fillColor: "#044853",
						 strokeColor: "#044853",
						 highlightFill: "#0991a8",
						 highlightStroke: "#0991a8",
						 data: data_postpaid
					 },
					 {
						 label: "PREPAID",
						 fillColor: "#670808",
						 strokeColor: "#670808",
						 highlightFill: "#af0d0d",
						 highlightStroke: "#af0d0d",
						 data: data_prepaid
					 }
				 ]
			 };
	
	
	
			var ctx2 = document.getElementById("LembarPelunasan").getContext("2d");
			myBarChartLembar = new Chart(ctx2).Bar(LembarPelunasan, {responsive : true});
		});		
         
									
     
									

		 
		 
									
         window.onload = function(){
        //  var ctx2 = document.getElementById("PelangganWilayah").getContext("2d");
         // window.myBarChart = new Chart(ctx2).Bar(PelangganWilayahData, {responsive : true});
         

         };
	});
	
	