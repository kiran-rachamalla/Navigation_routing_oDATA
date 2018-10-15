sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"kiran/Myapp/model/formatter",
		"kiran/Myapp/model/ownformatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
], function (controller , JSONModel , formatter ,ownformatter , Filter , FilterOperator){
	"use strict"
	return controller.extend("kiran.Myapp.controller.InvoiceList",{
		local_icon_parameter: ownformatter,
		formatter: formatter,
		onInit: function(){
			let oData = new JSONModel({
				currency: "USD"
			});
			this.getView().setModel(oData,"view");
		},
	
		onFilterInvoices: function(oEvent){
			let aFilter = [];
			let sQuery = oEvent.getParameter('query');
			
			if(sQuery){
				aFilter.push( new Filter("ProductName",FilterOperator.Contains,sQuery) );
			}
			
			let oList = this.byId("invoiceList");
			let oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
			
		},
		
		onPress: function (oEvent) {
			let oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail",{ invoicePath: encodeURIComponent(oItem.getBindingContext("invoice").getPath()) });
		}
		
	});
		
	
});

