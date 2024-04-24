// Function to handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Here you can perform any validation or send the data to your server for processing
    // For this example, let's just log the values to the console
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect to another page after successful signup
    window.location.href = 'index.html';
});

// Function to toggle between signup and login forms
function toggleForm() {
    var signupForm = document.getElementById("signup-form");
    var loginForm = document.getElementById("login-form");

    if (signupForm.style.display === "none") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
        document.querySelector("#form-toggle button").textContent = "Switch to Login";
    } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        document.querySelector("#form-toggle button").textContent = "Switch to Sign Up";
    }
}

// Ensure login form is initially displayed
toggleForm();

// Function to handle login form submission
function login(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the email, password, and selected role from the form
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
    var role = document.getElementById("login-role").value;

    // Perform any necessary validation here (e.g., check for empty fields)

    // Determine the webpage to redirect to based on the selected role
    var redirectUrl;
    switch(role) {
        case "student":
            redirectUrl = "students.html";
            break;
        case "teacher":
            redirectUrl = "teachers.html";
            break;
        case "office":
            redirectUrl = "office_dashboard.html";
            break;
        case "administrator":
            redirectUrl = "admin_dashboard.html";
            break;
        default:
            // If no role is selected, display an error message or take appropriate action
            alert("Please select a role.");
            return; // Exit the function to prevent further execution
    }

    // Redirect to the appropriate webpage
    window.location.href = redirectUrl;
}