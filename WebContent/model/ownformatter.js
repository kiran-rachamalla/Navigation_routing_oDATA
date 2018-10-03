sap.ui.define([],function(){
	"use strict"
	 
	return{ 
		My_own_test: function(sStatus){
			switch(sStatus){
		case 'A':
			return 'sap-icon://arrow-left';
		case 'B':
			return 'sap-icon://arrow-right';
	    default:
	    	return 'sap-icon://alert';
		}
		}
	};
	
});
