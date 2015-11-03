fp.testFailed();
var fp = new SetTestStatus("testresult");
// `#testresult` should have the HTML class "failing" now


// the `button` should have the text "Make green"
button.innerHTML="Make green";

fp.testPassed();
// ``#testresult` should have the HTML class "passing" now





// the `button` should have the text "Make red"
button.innerHTML="Make red";