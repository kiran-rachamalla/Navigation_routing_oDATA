sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel"
], function (controller , JSONModel){
	"use strict"
	return controller.extend("kiran.Myapp.controller.InvoiceList",{
		
		onInit: function(){
			let oData = new JSONModel({
				currency: "USD"
			});
			this.getView().setModel(oData,"view");
		}
		
	});
		
	
});

