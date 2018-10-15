sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"kiran/Myapp/controller/HelloDialog",
	"sap/ui/Device"
], function(UIComponent , JSONModel , HelloDialog, Device ) {	
	"use strict";
	return UIComponent.extend("kiran.Myapp.Component", {
		metadata: {
			manifest: "json"
//			rootView: {
//				"viewName": "kiran.Myapp.view.App",
//			    "type": "XML",
//			    "async": true,
//			    "id": "app"
//			}
		},
		init: function(){
			UIComponent.prototype.init.apply(this, arguments);
		    // set data Model
			let oData = {
					recipient : {
						name : "world"
					}
			};
			var oref_model = new JSONModel(oData);
			this.setModel(oref_model);
			
			// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
			
			this._helloDialog = new HelloDialog(this.getRootControl());
			// create the views based on the url/hash
			this.getRouter().initialize();
		},
		
		exit: function(){
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		
		openHelloDialog: function(){
			this._helloDialog.open();
		}
	});
});
