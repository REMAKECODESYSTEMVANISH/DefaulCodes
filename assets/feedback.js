var done = false;

// When the form is sumbitted
// and the result received,
// replace the form with a 
// 'thank you' message to avoid
// double sumbission.
function thanks(f) {
  if(done) {
    var form=document.getElementById("form");
    form.innerText="Thank you";  
  }  
}

// Disable the submit button
// to avoid double submission.
function disableButton() {
  var button=document.getElementById("submit");
  button.disabled = true;
  done = true;
}  