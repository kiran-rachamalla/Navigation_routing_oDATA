sap.ui.define([
	"sap/ui/base/ManagedObject"
], function( ManagedObject ){
	"use strict";
	
	return ManagedObject.extend( "kiran.Myapp.controller.HelloDialog" , {
		
		constructor: function(oView)
		{
			this._oView = oView;
		},
		
		exit : function(){
			delete this._oView;
		},
		
		open: function(){
			let oView = this._oView;
			let oDialog = oView.byId("helloDialog");
			
			
			if (!oDialog) {
				let oFragmentcontroller = {
						onCloseDialog : function(){
							oDialog.close();
						}							
				};
				oDialog = sap.ui.xmlfragment(oView.getId(),"kiran.Myapp.view.HelloDialog", oFragmentcontroller);
				
				oView.addDependent(oDialog);
				// forward compact/cozy style into dialog
	            jQuery.sap.syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
			}
			
			oDialog.open();
		}
		
		
	});
});