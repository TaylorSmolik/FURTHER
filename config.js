function submitLead() {
var form = new FormData();

//Declare variables and fetch form field input
var first_name = document.getElementsByName("fname")[0].value;
var last_name = document.getElementsByName("lname")[0].value;
var email = document.getElementsByName("email")[0].value;
var phone = document.getElementsByName("phone")[0].value;

form.append("first_name", first_name);
form.append("last_name", last_name);
form.append("email", email);
form.append("phone", phone);

var settings = {
  "url": "https://hooks.zapier.com/hooks/catch/4126835/21wlrgc/",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};
  
//Throw error message for incomplete values
if ((first_name == null || first_name =="") || (last_name == null || last_name =="") || (email == null || email =="") || (phone == null || phone =="")) {
   document.getElementById('p01').innerHTML = '*Please Fill in All Required Fields';
  return false;
} else {
$.ajax(settings).done(function (response) {
console.log(response);
//Trigger form submission after submitLead() function is complete
document.form.submit();
});
}
}


