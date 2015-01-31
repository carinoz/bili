	$(document).ready(function()
	{
		$("#pelunasan_start_date").html("Desember 2014");
		var today = new Date();
		var dd = today.getDate();
		  var _toPrecision = function( number , precision ){
				var prec = Math.pow( 10 , precision );
				return Math.round( number * prec ) / prec;
			}
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
		
		
		$("#pelunasan_end_date").html("");
		$("#pelunasan_wil_end_date").html("31 Desember 2014");
		$("#pelunasan_lembar_end_date").html('31 December 2014');
		var start_date = "December 2014";
		var end_date = "December 2014";


	// when I want to reset my data I call
		
		
		$("#button").click(function() // function searching button
		{
			//var start_date = $("#start_date").val();
			
			var element = document.getElementById("start_date");
			var start_date = element.value;	
			
			var element = document.getElementById("end_date");
			var end_date = element.value;	
			
			$("#pelunasan_start_date").html(start_date);
		
			
			$("#pelunasan_end_date").html(end_date);
			$("#pelunasan_wil_start_date").html(start_date);
			$("#pelunasan_wil_end_date").html(end_date);
			$("#pelunasan_lembar_start_date").html(start_date);
			$("#pelunasan_lembar_end_date").html(end_date);
			
			var labels_region = [],data_prepaid_daya=[],data_postpaid_daya=[],data_postpaid_kwh=[],data_prepaid_kwh=[],data_prepaid_cust=[],data_postpaid_cust=[];
			
			$.ajax({
				type: "POST",
				url : "http://202.162.209.216/mobility/mobility_controller/display_pelunasan/"+start_date+"/"+end_date,
				data : "start_date="+start_date+"&end_date="+end_date,
				dataType: "json",
				success: function(result)
				{
					var _toPrecision = function( number , precision ){
					var prec = Math.pow( 10 , precision );
					return Math.round( number * prec ) / prec;
					}
					 var labels_produk = [],jumlah_trans=[],i=0,j=0,TotalPelunasanData = [],color="";
					for(var item in result)
					{
						if( result[item].PRODUK.toString() == 'POSTPAID')
						{
							color = "#F7464A";
						}
						else if( result[item].PRODUK.toString()== 'PREPAID')
						{
							color = "#FDB45C";
						}
						else if( result[item].PRODUK.toString() == 'NONTAGLIS')
						{
							color = "#46BFBD";
						}
						
						
					
						TotalPelunasanData[i] = 
						{
							highlight: "#eed24d",
							color : color,
							value : _toPrecision(parseFloat(result[item].TOTALTAGIHAN.toString()),2),
							label : result[item].PRODUK.toString()
						}
						i++;
					}
					myPieChartPelunasan.destroy();
					
					var ctx = document.getElementById("TotalPelunasan").getContext("2d");
					myPieChartPelunasan = new Chart(ctx).Pie(TotalPelunasanData, {responsive : true});
								
				} // string : cek suskses ato gagal, 
			})
			
			
			$.ajax({
			type: "POST",
			url : "http://202.162.209.216/mobility/mobility_controller/search_pelunasan_wilayah/"+start_date+"/"+end_date,
			data : "start_date="+start_date+"&end_date="+end_date,
			dataType: "json",
			success: function(result)
			{
					var labels = [],data_prepaid=[],data_postpaid=[],data_nontaglis=[],i = 0;
					for (var item in result){
				  labels.push(result[item].region_name.toString());
				  data_postpaid.push(result[item].TOTALPOSTPAID.toString());
				  data_prepaid.push(result[item].TOTALPREPAID.toString());
			  }
				/*for (var item in result)
				{
				  total = _toPrecision(result[item].TOTALTAGIHAN.toString(),2);
				  labels.push(result[item].region_name.toString());
				  if(result[item].PRODUK.toString() == 'POSTPAID')
				  {
					data_postpaid[i] = total;
				  }
				  else if (result[item].PRODUK.toString() == 'PREPAID')
				  {
					data_prepaid[i] = total;
				  }
				
				  //data_prepaid.push(result[item].total_cust_prepaid.toString());
				  i++;
			  }
			 
			for (j = 0; j <= i; j++) 
			{
				if(data_postpaid[j] == null || data_postpaid[j] == "")
				{
					data_postpaid[j] = 0;
				}
				
				if(data_prepaid[j] == null || data_prepaid[j] == "")
				{
					data_prepaid[j] = 0;
				}
			}
			 
			if (data_postpaid == undefined || data_postpaid.length == 0)
			 {
				for (j = 0; j <= i; j++) 
				{
					data_postpaid[j] = 0;
				}				
			 }
			 
			 if (data_prepaid == undefined || data_prepaid.length == 0)
			 {
				for (j = 0; j <= i; j++) 
				{
					data_prepaid[j] = 0;
				}				
			 }
			 
			 if (data_nontaglis == undefined || data_nontaglis.length == 0)
			 {
				for (j = 0; j <= i; j++) 
				{
					data_nontaglis[j] = 0;
				}				
			 }
			  */
				var PelangganWilayahData = {
				 labels: labels,
				 datasets: [
					 {
						 label: "POSTPAID",
						 fillColor: "#F7464A",
						 strokeColor: "#F7464A",
						 highlightFill: "#F7464C",
						 highlightStroke: "#F7464C",
						 data: data_postpaid
					 },

					 {
						 label: "PREPAID",
						 fillColor: "#FDB45C",
						 strokeColor: "#FDB45C",
						 highlightFill: "#FDB45C",
						 highlightStroke: "#FDB45C",
						 data: data_prepaid
					 }
				 ]
			 };
			 
			 
			
	
				myBarChartCust.destroy();
				var ctx2 = document.getElementById("TotalPelunasanWilayah").getContext("2d");
				myBarChartCust = new Chart(ctx2).Bar(PelangganWilayahData, {responsive : true});
			}
			});
				
				$.ajax({
				type: "POST",
				url : "http://202.162.209.216/mobility/mobility_controller/search_cust_data/"+start_date+"/"+end_date,
				data : "start_date="+start_date+"&end_date="+end_date,
				dataType: "json",
				success: function(result)
				{
					var labels_region = [],data_postpaid=[],data_prepaid=[];
					 for(var item in result)
					 {
					  labels_region.push(result[item].region_name.toString());
					  data_prepaid.push(result[item].JUMLAHLEMBARPELUNASANPREPAID.toString());
					  data_postpaid.push(result[item].JUMLAHLEMBARPELUNASANPOSTPAID.toString());
					}

						var LembarPelunasan = 
						{
						 labels: labels_region,
						 datasets: [
							 {
								 label: "POSTPAID",
								 fillColor: "#044853",
								 strokeColor: "#044853",
								 highlightFill: "#0991a8",
								 highlightStroke: "#0991a8",
								 data: data_prepaid
							 },
							 {
								 label: "PREPAID",
								 fillColor: "#670808",
								 strokeColor: "#670808",
								 highlightFill: "#af0d0d",
								 highlightStroke: "#af0d0d",
								 data: data_postpaid
							 }
							]
						};
					
					myBarChartLembar.destroy();
					var ctx2 = document.getElementById("LembarPelunasan").getContext("2d");
					myBarChartLembar = new Chart(ctx2).Bar(LembarPelunasan, {responsive : true});
				}
				});
			
		})
	
	
							
		
		$.ajax({
		type: "POST",
		url : "http://202.162.209.216/mobility/mobility_controller/display_pelunasan/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			/*for (var item in result){
				  data_postpaid.push(result[item].JUMLAHPELUNASANPOSTPAID.toString());
				  data_prepaid.push(result[item].JUMLAHPELUNASANPREPAID.toString());
				  data_nontaglis.push(result[item].JUMLAHPELUNASANNONTAGLIS.toString());
			  }*/
			  
			
			 var labels_produk = [],jumlah_trans=[],i=0,j=0,TotalPelunasanData = [],color="";
			for(var item in result)
			{
				if( result[item].PRODUK.toString() == 'POSTPAID')
				{
					color = "#F7464A";
				}
				else if( result[item].PRODUK.toString()== 'PREPAID')
				{
					color = "#FDB45C";
				}
				else if( result[item].PRODUK.toString() == 'NONTAGLIS')
				{
					color = "#46BFBD";
				}
				
				
			
				TotalPelunasanData[i] = 
				{
					highlight: "#eed24d",
					color : color,
					value : _toPrecision(parseFloat(result[item].TOTALTAGIHAN.toString()),2),
					label : result[item].PRODUK.toString()
				}
				i++;
			}															
				

				  
				
			  
				
			var ctx = document.getElementById("TotalPelunasan").getContext("2d");
			myPieChartPelunasan = new Chart(ctx).Pie(TotalPelunasanData, {responsive : true});
			}	
		});
		
		$.getJSON("http://202.162.209.216/mobility/mobility_controller/display_pelunasan_wilayah", function (result) 
		{	
			var labels = [],data_prepaid=[],data_postpaid=[],data_nontaglis=[],i = 0,total=0;
				for (var item in result){
				  labels.push(result[item].region_name.toString());
				  data_postpaid.push(result[item].TOTALPOSTPAID.toString());
				  data_prepaid.push(result[item].TOTALPREPAID.toString());
			  }
			/*for (var item in result)
			{
				  labels.push(result[item].region_name.toString());
				  total = _toPrecision(result[item].TOTALTAGIHAN.toString(),2);

				  
				 
				  if(result[item].PRODUK.toString() == 'POSTPAID')
				  {
					data_postpaid[i] = total;
				  }	
				  else if (result[item].PRODUK.toString() == 'PREPAID')
				  {
					data_prepaid[i] = total;
				  }
		
				  //data_prepaid.push(result[item].total_cust_prepaid.toString());
				  i++;
			  }
			  
			for (j = 0; j <= i; j++) 
			{
				if(data_postpaid[j] == null || data_postpaid[j] == "")
				{
					data_postpaid[j] = 0;
				}
				
				if(data_prepaid[j] == null || data_prepaid[j] == "")
				{
					data_prepaid[j] = 0;
				}
			}
			 
			if (data_postpaid == undefined || data_postpaid.length == 0)
			 {
				for (j = 0; j <= i; j++) 
				{
					data_postpaid[j] = 0;
				}				
			 }
			 
			 if (data_prepaid == undefined || data_prepaid.length == 0)
			 {
				for (j = 0; j <= i; j++) 
				{
					data_prepaid[j] = 0;
				}				
			 }
			 
			 if (data_nontaglis == undefined || data_nontaglis.length == 0)
			 {
				for (j = 0; j <= i; j++) 
				{
					data_nontaglis[j] = 0;
				}				
			 }
			  */
				  var PelangganWilayahData = {
				 labels: labels,
				 datasets: [
					 {
						 label: "POSTPAID",
						 fillColor: "#F7464A",
						 strokeColor: "#F7464A",
						 highlightFill: "#F7464C",
						 highlightStroke: "#F7464C",
						 data: data_postpaid
					 },
					 {
						 label: "PREPAID",
						 fillColor: "#FDB45C",
						 strokeColor: "#FDB45C",
						 highlightFill: "#FDB45C",
						 highlightStroke: "#FDB45C",
						 data: data_prepaid
					 }
				 ]
			 };
	
	
	
			var ctx2 = document.getElementById("TotalPelunasanWilayah").getContext("2d");
			myBarChartCust = new Chart(ctx2).Bar(PelangganWilayahData, {responsive : true});
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
		
		$.getJSON("http://202.162.209.216/mobility/mobility_controller/display_tren_pelunasan", function (result) 
		{	
			var labels = [],data_prepaid=[],data_postpaid=[],data_nontaglis=[],i = 0,a=0;
			for (var item in result)
			{
				  labels.push(result[item].periode_trans.toString());
				  data_postpaid.push(result[item].TOTALPOSTPAID.toString());
				  data_prepaid.push(result[item].TOTALPREPAID.toString());
				/*
				  if(labels[labels.length-1] != result[item].periode_trans.toString())
				  {
					labels.push(result[item].periode_trans.toString());
				  }
				  if(result[item].PRODUK.toString() == 'POSTPAID')
				  {
					data_postpaid.push(result[item].TOTALTAGIHAN.toString());
				  }
				  else if (result[item].PRODUK.toString() == 'PREPAID')
				  {
					data_prepaid.push(result[item].TOTALTAGIHAN.toString());
				  }
				   else if (result[item].PRODUK.toString() == 'NONTAGLIS')
				  {
					data_nontaglis.push(result[item].TOTALTAGIHAN.toString());
				  }
				  //data_prepaid.push(result[item].total_cust_prepaid.toString());
				  i++;
				  a++;
			  }
			  
			  if (data_postpaid == undefined || data_postpaid.length == 0)
			 {
				for (j = 0; j <= i; j++) 
				{
					data_postpaid[j] = 0;
				}				
			 }
			 
			 if (data_prepaid == undefined || data_prepaid.length == 0)
			 {
				for (j = 0; j <= i; j++) 
				{
					data_prepaid[j] = 0;
				}				
			 }
			 
			 if (data_nontaglis == undefined || data_nontaglis.length == 0)
			 {
				for (j = 0; j <= i; j++) 
				{
					data_nontaglis[j] = 0;
				}				
			 }
			  */
			  }
				  	var TrenPelunasan = {
					labels: labels,
					datasets: [
								{
												label: "POSTPAID",
												fillColor: "rgba(220,220,220,0.2)",
												strokeColor: "#F7464A",
												pointColor: "#F7464A",
												pointStrokeColor: "#fff",
												pointHighlightFill: "#fff",
												pointHighlightStroke: "rgba(220,220,220,1)",
												data: data_postpaid
								},
						
									{
													label: "PREPAID",
													fillColor: "rgba(151,187,205,0.2)",
													strokeColor: "#FDB45C",
													pointColor: "#FDB45C",
													pointStrokeColor: "#fff",
													pointHighlightFill: "#fff",
													pointHighlightStroke: "rgba(151,187,205,1)",
													data: data_prepaid
									}														
								]
										};
	
	
	
		  var ctx2 = document.getElementById("TrendTotalPelunasan").getContext("2d");
          myLineChartTrend = new Chart(ctx2).Line(TrenPelunasan, {responsive : true});
		});
									
		
	});
	
	