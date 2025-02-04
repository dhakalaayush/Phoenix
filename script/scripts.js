//contact us button of header section - javascript to redirect to contact page
function contact_page_call() {
    window.location.href = '../Pages/contact.html';
}

//Contact form validation
const name_validation = /[\d\s]/;
const email_validation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phone_validation = /^\d{10}$/;

function validate(event) {
    event.preventDefault();

    if (document.getElementById('fname').value == "") {
        alert("first name cannot be empty");
    }
    else if (document.getElementById('lname').value == "") {
        alert("last name cannot be empty");
    }
    else if (document.getElementById('email').value == "") {
        alert("email name cannot be empty");
    }
    else if (document.getElementById('msg').value == "") {
        alert("message cannot be empty");
    }
    else if (name_validation.test(document.getElementById('fname').value)) {
        alert("first name format incorrect");
    }
    else if (name_validation.test(document.getElementById('lname').value)) {
        alert("last name format incorrect");
    }
    else if (!email_validation.test(document.getElementById('email').value)) {
        alert("email format incorrect");
    }
    else if (name_validation.test(document.getElementById('phone').value)) {
        alert("phone no format is incorrect");
    }
    else {
        alert("message was recorded");
    }
}

//Buying products button
function buy_product(button) {
    // Get the watch name from the closest `.watch` container
    const watchName = button.closest('.watch').querySelector('h2').textContent;
    // Display the alert
    alert(`${watchName} is added to cart`); //backtick bracket (`) is required to put variables in alert()
}