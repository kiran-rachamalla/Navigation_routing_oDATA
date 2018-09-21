  sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller , MessageToast ) {
   "use strict";
   return Controller.extend("kiran.Myapp.controller.App", {
      onShowHello : function () {
         // show a native JavaScript alert
//         alert("Hello World");
          // read msg from i18n model
    	  var oBundle = this.getView().getModel("i18n").getResourceBundle();
          //var oBundle = this.getView().getModel("ModelName").getResourceBundle();
          
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // show message
          MessageToast.show(sMsg);
//    	  MessageToast.show("Hello World");
      }
   });
});
