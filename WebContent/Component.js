sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"kiran/Myapp/controller/HelloDialog"
], function(UIComponent , JSONModel , HelloDialog ) {	
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
			
			this._helloDialog = new HelloDialog(this.getRootControl());
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
