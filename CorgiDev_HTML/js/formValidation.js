//Validates the form for submission
//This code will actually run if you remove a few bits of code from contact.html. These are listed in the readme file.
 function validateForm() {
    var validName = document.forms["contactForm"]["userName"].value;
    var validEmail = document.forms["contactForm"]["userEmail"].value;
    var validMessage = document.forms["contactForm"]["userMessage"].value;

    if (validName == "") {
        alert("Name must be filled out.");
        //$("#userName").append( "<p class='error'>Must fill in Name field.</p>" );
        return false;
    }

    if (validEmail == "") {
        alert("Email must be filled out.");
        //$("#userEmail").append('<p class="error">Must fill in E-Mail field.</p>');
        return false;
    } 
    
    if (validMessage == "") {
        alert("Message must be filled out.");
        //$("#userMessage").append('<p class="error">Must include message in Comments field.</p>');
        return false;
    }
}
