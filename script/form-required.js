console.log("i am hire");

var name_form = document.forms.form_footer;
var required_text_id = document.getElementById("required_text_id");
var required_email_id = document.getElementById("required_email_id");

console.log(required_text_id+" "+required_text_id.className);
console.log(required_email_id+" "+required_email_id.className);

console.log(name_form.name.type);
console.log(name_form.email.type);

name_form.name.onblur = function(){
	// console.log("blur");

	if(this.value == ""){
		console.log("Пусто бля!!!");
		
		this.style.backgroundColor = "#FF986E";
		this.style.borderColor = "#ff0000";
	}else{
		console.log("Нормально.");
	}
}
	

// var email = document.querySelector("#email");

var btn =document.querySelector("#form__btn");

btn.addEventListener("click", function(){
	console.log("name click: "+ name_form.getAttribute('value'));
});