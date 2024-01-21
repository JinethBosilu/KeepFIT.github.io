function submitForm(event) {
    event.preventDefault();

    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var confirmPassword = document.querySelector('#conpassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Simulate storing the user information in local storage
    var sharedValues = {
        email: email,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(sharedValues));

    window.location.href = "index.html";
}
