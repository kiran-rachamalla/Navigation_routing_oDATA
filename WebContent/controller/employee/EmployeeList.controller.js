sap.ui.define([
	"kiran/Myapp/controller/BaseController"
], function(BaseController){
	"use strict";
	
	return BaseController.extend("kiran.Myapp.controller.employee.EmployeeList",{
		onListItemPressed : function(oEvent){
			let oArgs;
			oArgs = oEvent.getSource().getBindingContext();
			this.getRouter().navTo("employee",{ employeeId: oArgs.getProperty("EmployeeID") } );
		}
	});
});