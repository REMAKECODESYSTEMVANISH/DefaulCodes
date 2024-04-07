var tdUid;
var tdEmail;
var tdName
var btSignIn;
var btSignOut;

function pageLoaded() {
  tdUid = document.getElementById("uid");
  tdEmail = document.getElementById("email");
  tdName = document.getElementById("uname");
  btSignIn = document.getElementById("signIn");
  btSignOut= document.getElementById("signOut");
  update();
}

function update() {
  const uid = user.getId();
  if(uid) {
    // user is signed in
    btSignIn.disabled = true;
    btSignOut.disabled = false;
    tdUid.innerText = uid;
    tdEmail.innerText = user.getEmail();
    tdName.innerText = user.getName();
  }  
  else {
    // user is not signed in
    btSignIn.disabled = false;
    btSignOut.disabled = true;
    tdUid.innerText = "";
    tdEmail.innerText = "";
    tdName.innerText = "";
  }  
}  

function signInError(evt) {
  alert(evt.detail.message);
}  

document.addEventListener("SignInError",signInError);
