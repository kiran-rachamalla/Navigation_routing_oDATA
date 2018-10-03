sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"kiran/Myapp/model/formatter",
		"kiran/Myapp/model/ownformatter"
], function (controller , JSONModel , formatter ,ownformatter){
	"use strict"
	return controller.extend("kiran.Myapp.controller.InvoiceList",{
		ownformatter: ownformatter,
		formatter: formatter,
		onInit: function(){
			let oData = new JSONModel({
				currency: "USD"
			});
			this.getView().setModel(oData,"view");
		}
		
	});
		
	
});

