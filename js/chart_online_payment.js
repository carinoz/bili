	$(document).ready(function()
	{
		$("#bank_start_date").html("1 December 2014");
		$("#bank_end_date").html("31 December 2014");
		$("#switching_start_date").html("1 December 2014");
		$("#switching_end_date").html("31 December 2014");
		$("#merchant_start_date").html("1 December 2014");
		$("#merchant_end_date").html("31 December 2014");
		$("#wilayah_start_date").html("1 December 2014");
		$("#wilayah_end_date").html("31 December 2014");
		$("#bank_start_date_total").html("1 December 2014");
		$("#bank_end_date_total").html("31 December 2014");
		$("#switching_start_date_total").html("1 December 2014");
		$("#switching_end_date_total").html("31 December 2014");
		$("#merchant_start_date_total").html("1 December 2014");
		$("#merchant_end_date_total").html("31 December 2014");
		
		
		var _toPrecision = function( number , precision ){
				var prec = Math.pow( 10 , precision );
				return Math.round( number * prec ) / prec;
			}
		
		var start_date = "December 2014";
		var end_date = "December 2014";

		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_bank/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_bank = [],jumlah_trans=[],i=0,j=0,OnlinePaymentBankData = [];
			for(var item in result)
			{
				OnlinePaymentBankData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].bank_color.toString(),
					value : parseFloat(result[item].JUMLAH_TRANS.toString()),
					label : result[item].bank_name.toString()
				}
				i++;
			}															
				
			var ctx = document.getElementById("OnlinePaymentBank").getContext("2d");
			myDoughnutChartBank = new Chart(ctx).Doughnut(OnlinePaymentBankData, {responsive : true,animation:false});
			}	
		});	

		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_switching/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentSwitchingData = [];
			for(var item in result)
			{
				OnlinePaymentSwitchingData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].switching_color.toString(),
					value : parseFloat(result[item].JUMLAH_TRANS.toString()),
					label : result[item].switching_name.toString()
				}
				i++;
			}															
				
		  var ctx2 = document.getElementById("OnlinePaymentSwitching").getContext("2d");
          myDoughnutChartSwitching = new Chart(ctx2).Doughnut(OnlinePaymentSwitchingData, {responsive : true,animation:false});
			}	
		});	


		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_switching_total/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentSwitchingTotalData = [];
			for(var item in result)
			{
				OnlinePaymentSwitchingTotalData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].switching_color.toString(),
					value : _toPrecision(parseFloat(result[item].JUMLAH_TRANS.toString())/1000000000000,2),
					label : result[item].switching_name.toString()
				}
				i++;
			}															
				
		  var ctx2 = document.getElementById("OnlinePaymentSwitchingTotal").getContext("2d");
          myDoughnutChartSwitchingTotal = new Chart(ctx2).Doughnut(OnlinePaymentSwitchingTotalData, {responsive : true,animation:false});
			}	
		});				
		
		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_merchant/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentMerchantData = [];
			for(var item in result)
			{
				OnlinePaymentMerchantData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].merchant_color.toString(),
					value : parseFloat(result[item].JUMLAH_TRANS.toString()),
					label : result[item].merchant_name.toString()
				}
				i++;
			}															
				
			var ctx3 = document.getElementById("OnlinePaymentMerchant").getContext("2d");
            myDoughnutChartMerchant = new Chart(ctx3).Doughnut(OnlinePaymentMerchantData, {responsive : true,animation:false});
			}	
		});
		
		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_merchant_total/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentMerchantTotalData = [];
			for(var item in result)
			{
				OnlinePaymentMerchantTotalData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].merchant_color.toString(),
					value :  _toPrecision(parseFloat(result[item].JUMLAH_TRANS.toString())/1000000000000,2),
					label : result[item].merchant_name.toString()
				}
				i++;
			}															
				
			var ctx3 = document.getElementById("OnlinePaymentMerchantTotal").getContext("2d");
            myDoughnutChartMerchantTotal = new Chart(ctx3).Doughnut(OnlinePaymentMerchantTotalData, {responsive : true,animation:false});
			}	
		});

		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_bank_total/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentBankTotal = [],total =0;
			for(var item in result)
			{
				total =  parseFloat(result[item].bank_name.toString()) / 1000000000000;
				OnlinePaymentBankTotal[i] = 
				{
					highlight: "#eed24d",
					color : result[item].bank_color.toString(),
					value : _toPrecision(parseFloat(result[item].JUMLAH_TRANS.toString())/1000000000000,2),
					label : result[item].bank_name.toString()
				}
				i++;
			}															
				
			var ctx3 = document.getElementById("OnlinePaymentBankTotal").getContext("2d");
            myDoughnutChartBankTotal = new Chart(ctx3).Doughnut(OnlinePaymentBankTotal, {responsive : true,animation:false});
			}	
		});

		
		
		$("#button").click(function() // function searching button
		{
			var element = document.getElementById("start_date");
			var start_date = element.value;	
			
			var element = document.getElementById("end_date");
			var end_date = element.value;
			
			
		
		
			
			
			$("#bank_start_date").html(start_date);
			$("#bank_end_date").html(end_date);
			$("#switching_start_date").html(start_date);
			$("#switching_end_date").html(end_date);
			$("#merchant_start_date").html(start_date);
			$("#merchant_end_date").html(end_date);
			$("#bank_start_date_total").html(start_date);
			$("#bank_end_date_total").html(end_date);
			$("#switching_start_date_total").html(start_date);
			$("#switching_end_date_total").html(end_date);
			$("#merchant_start_date_total").html(start_date);
			$("#merchant_end_date_total").html(end_date);
			
			myDoughnutChartMerchant.destroy();
			myDoughnutChartSwitching.destroy();
			myDoughnutChartBank.destroy();
			myDoughnutChartBankTotal.destroy();
			myDoughnutChartMerchantTotal.destroy();
			myDoughnutChartSwitchingTotal.destroy();
			
		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_bank/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_bank = [],jumlah_trans=[],i=0,j=0,OnlinePaymentBankData = [];
			for(var item in result)
			{
				OnlinePaymentBankData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].bank_color.toString(),
					value : parseFloat(result[item].JUMLAH_TRANS.toString()),
					label : result[item].bank_name.toString()
				}
				i++;
			}															
				
		  var ctx = document.getElementById("OnlinePaymentBank").getContext("2d");
          myDoughnutChartBank = new Chart(ctx).Doughnut(OnlinePaymentBankData, {responsive : true,animation:false});
			}	
		});	
		
		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_bank_total/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentBankTotal = [],total =0;
			for(var item in result)
			{
				total =  parseFloat(result[item].bank_name.toString()) / 1000000000000;
				OnlinePaymentBankTotal[i] = 
				{
					highlight: "#eed24d",
					color : result[item].bank_color.toString(),
					value : _toPrecision(parseFloat(result[item].JUMLAH_TRANS.toString())/1000000000000,2),
					label : result[item].bank_name.toString()
				}
				i++;
			}															
				
			var ctx3 = document.getElementById("OnlinePaymentBankTotal").getContext("2d");
            myDoughnutChartBankTotal = new Chart(ctx3).Doughnut(OnlinePaymentBankTotal, {responsive : true,animation:false});
			}	
		});

		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_switching/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentSwitchingData = [];
			for(var item in result)
			{
				OnlinePaymentSwitchingData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].switching_color.toString(),
					value : parseFloat(result[item].JUMLAH_TRANS.toString()),
					label : result[item].switching_name.toString()
				}
				i++;
			}															
				
		  var ctx2 = document.getElementById("OnlinePaymentSwitching").getContext("2d");
          myDoughnutChartSwitching = new Chart(ctx2).Doughnut(OnlinePaymentSwitchingData, {responsive : true,animation:false});
			}	
		});	

	$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_switching_total/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentSwitchingTotalData = [];
			for(var item in result)
			{
				OnlinePaymentSwitchingTotalData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].switching_color.toString(),
					value : _toPrecision(parseFloat(result[item].JUMLAH_TRANS.toString())/1000000000000,2),
					label : result[item].switching_name.toString()
				}
				i++;
			}															
				
		  var ctx2 = document.getElementById("OnlinePaymentSwitchingTotal").getContext("2d");
          myDoughnutChartSwitching = new Chart(ctx2).Doughnut(OnlinePaymentSwitchingTotalData, {responsive : true,animation:false});
			}	
		});			
		
		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_merchant/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentMerchantData = [];
			for(var item in result)
			{
				OnlinePaymentMerchantData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].merchant_color.toString(),
					value : parseFloat(result[item].JUMLAH_TRANS.toString()),
					label : result[item].merchant_name.toString()
				}
				i++;
			}															
				
			var ctx3 = document.getElementById("OnlinePaymentMerchant").getContext("2d");
            myDoughnutChartMerchant = new Chart(ctx3).Doughnut(OnlinePaymentMerchantData, {responsive : true,animation:false});
			}	
		})
		
		$.ajax({
		type: "POST",
		url : "http://pln.ifabula.com/mobility_controller/display_online_merchant_total/"+start_date+"/"+end_date,
		dataType: "json",
		success: function(result)
		{
			var labels_switching = [],jumlah_trans=[],i=0,j=0,OnlinePaymentMerchantTotalData = [];
			for(var item in result)
			{
				OnlinePaymentMerchantTotalData[i] = 
				{
					highlight: "#eed24d",
					color : result[item].merchant_color.toString(),
					value :  _toPrecision(parseFloat(result[item].JUMLAH_TRANS.toString())/1000000000000,2),
					label : result[item].merchant_name.toString()
				}
				i++;
			}															
				
			var ctx3 = document.getElementById("OnlinePaymentMerchantTotal").getContext("2d");
            myDoughnutChartMerchantTotal = new Chart(ctx3).Doughnut(OnlinePaymentMerchantTotalData, {responsive : true,animation:false});
			}	
		});
			
			
		})
		

	
	});
	
	