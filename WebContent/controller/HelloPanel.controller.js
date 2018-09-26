  sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
], function (Controller , MessageToast  ) {
   "use strict";
   return Controller.extend("kiran.Myapp.controller.HelloPanel", {
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
      },
      onOpenDialog : function() {
    	  let oView = this.getView();
    	  let oDialog = oView.byId("helloDialog");
    	  if (!oDialog) {
			oDialog = sap.ui.xmlfragment(oView.getId(), "kiran.Myapp.view.HelloDialog",this);
			oView.addDependent(oDialog);
		}
    	  oDialog.open();
      },
      onCloseDialog: function(){
    	  this.getView().byId("helloDialog").close()
      }
     
   });
});
