var button= document.getElementById("button");
var count=0;
var block =document.getElementById("block");
button.addEventListener("click" ,function(){
	count +=1;
	
switch(count){
	case 1:
	block.innerHTML="STOP";
	block.className="red";
	button.innerHTML="make green";
	break;

	case 2:
	block.innerHTML="GO";
	block.className="green";
	button.innerHTML="make red";
	count=0
	break;
}
});
