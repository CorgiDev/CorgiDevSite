//Show/hide the form based on what browser you are using. Not done.
var browserType = prompt('Are you using Internet Explorer?');

if (browserType = 'yes') {
    $('#contactForm').show();
} else {
    $('#contactForm').hide();
    alert('<p>This is currently only compatible with Internet Explorer. We are working to correct this as soon as possible.</p>');
}