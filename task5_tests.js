var testresult = document.getElementById('testresult');

if(testresult.className === "failing") {
	console.log("failing");
} else if(testresult.className ==="passing") {
	console.log("passing");
} else {
	console.log("Nothing found.");
}
// Check that the button has the text 'Make failing'. Use console.log to display a message that tells you what the result of the check was.
var button= document.getElementById("button");
if(button.innerHTML=="make failing"){
		console.log("button is = " +button.innerHTML);
	}
	else{
		console.log("button is not what is expected");
	}

// Call setTestStatus('testresult', 'testbutton', 'failing');.
//  Check that #testresult has the class failing. The CSS should give it a red background.
if(setTestStatus.className==="failing"){
	console.log("failing:" + testresult.className);
}
else{
	console.log("fails because class is :" +testresult.className);
}
//  Check that the button has the text 'Make passing'. Use console.log to display a message that tells you what the result of the check was.
var button=document.getElementById("button");
if(button==="make passing"){
	console.log("button is = " +button.innerHTML);
}
else{
	console.log("button is not what is expected!");
}
//  Call setTestStatus('testresult', 'testbutton', 'passing');.
//  Check that #testresult has the class passing. The CSS should give it a green background.
if(setTestStatus==="passing"){
	console.log("test result class passes because clas is:" + testresult.className);
}
else{
	console.log("testresult class fails because its not what is expected");
}

//  Check that the button has the text 'Make failing'.
if(button.innerHTML==="make failing"){
	console.log("button text passes as expected:" + button.innerHTML);
}
else{
	console.log("button text fails as it is not what is expected");
}
//  Display 'success' if testresult has the class passing, otherwise display 'failure'.
if(testresult.className==="passing"){
	console.log("failure");
}
else{
	console.log("success");
}