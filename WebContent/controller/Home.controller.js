sap.ui.define([
   "kiran/Myapp/controller/BaseController"
], function (BaseController) {
   "use strict";

   return BaseController.extend("kiran.Myapp.controller.Home", {
	   onDisplayNotFound: function(oEvent){
	    	  this.getRouter().getTargets().display("notFound",{fromTarget:"home"});
	      }
   });

});