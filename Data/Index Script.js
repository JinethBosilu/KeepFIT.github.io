function validate() {
    var storedUser = localStorage.getItem('user');
    var storedValues = storedUser ? JSON.parse(storedUser) : null;

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (storedValues && email === storedValues.email && password === storedValues.password) {
        window.location.href = "Selection.html?email=" + encodeURIComponent(email);
        return false; 
    } else {
        alert("Invalid email or password");
        return false;
    }
}
