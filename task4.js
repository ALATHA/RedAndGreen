var redbutton= document.getElementById("redbutton");
redbutton.addEventListener("click", function(){
var block =document.getElementById("block");

switch(changeButton){
	case 1:
	block.innerHTML="GO";
	block.className="red";
	break;
	case 2:
	block.innerHTML="STOP";
	block.className="green";
	break;
	default;
}