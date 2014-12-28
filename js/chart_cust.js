	$(document).ready(function()
	{
										var postpaid = 'a';
										var cust_postpaid = ['15','35'];
										var labels = [],data_prepaid=[],data_postpaid=[];
										/*$.ajax({
											type: "POST",
											url : "http://localhost/mobility/mobility_controller/display_customer_trans",
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
											
											 $.getJSON("http://pln.ifabula.com/mobility_controller/display_customer_trans", function (result) 
											 {
												for (var item in result){
													  labels.push(result[item].periode_trans.toString());
													  data_postpaid.push(result[item].total_cust_postpaid.toString());
													  data_prepaid.push(result[item].total_cust_prepaid.toString());
												  }
												  $("#test").html(labels);
											 });
										
										
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
									
         var PelangganWilayahData = {
             labels: ["Wilayah A", "Wilayah B", "Wilayah C", "Wilayah D", "Wilayah E"],
             datasets: [
                 {
                     label: "POSTPAID",
                     fillColor: "#044853",
                     strokeColor: "#044853",
                     highlightFill: "#0991a8",
                     highlightStroke: "#0991a8",
                     data: [12000, 17000, 21000, 10000, 15000]
                 },
                 {
                     label: "PREPAID",
                     fillColor: "#670808",
                     strokeColor: "#670808",
                     highlightFill: "#af0d0d",
                     highlightStroke: "#af0d0d",
                     data: [1200, 1700, 2100, 1000, 1500]
                 }
             ]
         };
									
         var TotalDayaWilayahData = {
             labels: ["Wilayah A", "Wilayah B", "Wilayah C", "Wilayah D", "Wilayah E"],
             datasets: [
                 {
                     label: "TOTAL DAYA per WILAYAH",
                     fillColor: "#8a0c0c",
                     strokeColor: "#8a0c0c",
                     highlightFill: "#c02727",
                     highlightStroke: "#c02727",
                     data: [11000, 8000, 17000, 14000, 12000]
                 }
             ]
         };
									
         var KWHJualWilayahData = {
             labels: ["Wilayah A", "Wilayah B", "Wilayah C", "Wilayah D", "Wilayah E"],
             datasets: [
                 {
                     label: "KWH JUAL per WILAYAH",
                     fillColor: "#116c0c",
                     strokeColor: "#116c0c",
                     highlightFill: "#2aad23",
                     highlightStroke: "#2aad23",
                     data: [10000, 18000, 17000, 14000, 12000]
                 }
             ]
         };
		 
		 
									
         window.onload = function(){
          var ctx = document.getElementById("TotalPelanggan").getContext("2d");
          window.myLineChart = new Chart(ctx).Line(TotalPelangganData, {responsive : true});
          var ctx2 = document.getElementById("PelangganWilayah").getContext("2d");
          window.myBarChart = new Chart(ctx2).Bar(PelangganWilayahData, {responsive : true});
          var ctx3 = document.getElementById("TotalDayaWilayah").getContext("2d");
          window.myBarChart = new Chart(ctx3).Bar(TotalDayaWilayahData, {responsive : true});
          var ctx4 = document.getElementById("KWHJualWilayah").getContext("2d");
          window.myBarChart = new Chart(ctx4).Bar(KWHJualWilayahData, {responsive : true});
         };
	});