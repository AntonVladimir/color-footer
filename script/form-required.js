console.log("i am hire");

var name_form = document.forms.form_footer;
var required_text = document.getElementsByClassName("required_text")[0];
var required_email = document.getElementsByClassName("required_email")[0];

console.log(required_text+" "+required_text.className);
console.log(required_email+" "+required_email.className);

console.log(name_form.name.type);
console.log(name_form.email.type);

// ----------------------------------------

name_form.name.onblur = function(){
	// console.log("blur");

	if(this.value == ""){
		console.log("Пусто бля!!!");

		required_text.style.display = "block";
		
	}else{
		console.log("Нормально.");
	}
}
	
name_form.name.onfocus = function(){
	console.log("this is focus");

	required_text.style.display = "none";
}

// --------------------------------------------


name_form.email.onblur = function(){
	// console.log("blur");

	if(this.value == ""){
		console.log("Пусто бля!!!");

		required_email.style.display = "block";
		
	}else{
		console.log("Нормально.");
	}
}
	
name_form.email.onfocus = function(){
	console.log("this is focus");

	required_email.style.display = "none";
}


// var email = document.querySelector("#email");

var btn =document.querySelector("#form__btn");

btn.addEventListener("click", function(){
	console.log("name click: "+ name_form.getAttribute('value'));
});