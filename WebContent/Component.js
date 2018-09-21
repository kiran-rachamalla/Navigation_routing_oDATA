sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent , JSONModel ) {
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
			
		}
	});
});
