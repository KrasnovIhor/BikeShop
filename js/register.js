"use strict";

document.addEventListener("DOMContentLoaded", () => {
  
  const data = [],
    signInForm = document.querySelector("#signInForm"),
    userName = document.querySelector("#userName"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
		confirmPassword = document.querySelector("#confirm");

  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
			id: Date.now(),
			name: userName.value,
			email: email.value,
			password: password.value,
		};
		
		if (confirmPassword.value !== password.value) {
			alert('Passwords do not match');
		} else {
			data.push(user);
			signInForm.reset();
			console.log(data);
	
			localStorage.setItem('Users', JSON.stringify(data));
			};
  });

});
