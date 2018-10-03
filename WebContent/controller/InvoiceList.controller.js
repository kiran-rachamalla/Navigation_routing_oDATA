sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"kiran/Myapp/model/formatter"
], function (controller , JSONModel , formatter){
	"use strict"
	return controller.extend("kiran.Myapp.controller.InvoiceList",{
		formatter: formatter,
		onInit: function(){
			let oData = new JSONModel({
				currency: "USD"
			});
			this.getView().setModel(oData,"view");
		}
		
	});
		
	
});

