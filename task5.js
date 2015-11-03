var setTestStatus = function (elementId, buttonId, className){

var element=document.getElementById(elementId);
element.className=className;
var button=document.getElementById(buttonId);

if(className =="failing"){
	button.innerHTML="Make passing";
}
else{
	button.innerHTML="Make failing";
}	
};
