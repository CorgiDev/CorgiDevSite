# FireBase Documentation

## Serve and test your Firebase project locally

You can view and test your Firebase project on locally hosted URLs before deploying to production. If you only want to test select features, you can use a comma-separated list in a flag on the firebase serve command.

Run the following command from the root of your local project directory if you want to do either of the following tasks:

### View the static content for your Firebase-hosted app

Use Cloud Functions to generate dynamic content for Firebase Hosting and you want to use your production (deployed) HTTP functions to emulate Hosting on a local URL.
firebase serve --only hosting

Emulate your project using local HTTP functions
Run any of the following commands from your project directory to emulate your project using local HTTP functions.

To emulate HTTP functions and hosting for testing on local URLs, use either of the following commands:

firebase serve

firebase serve --only functions,hosting // uses a flag

To emulate HTTP functions only, use the following command:

firebase serve --only functions

Test from other local devices
By default, firebase serve only responds to requests from localhost. This means that you'll be able to access your hosted content from your computer's web browser but not from other devices on your network. If you'd like to test from other local devices, use the --host flag, like so:

firebase serve --host 0.0.0.0  // accepts requests to any host

Deploy to your site
To deploy to your site, run the following command from the root of your local project directory:

firebase deploy

This command deploys a release to the following sites:

Your Firebase project's default Hosting sites, projectID.web.app and projectID.firebaseapp.com

Any custom domains that you've connected to your Hosting site.

You can optionally add a comment to a deploy. This comment will display with the other deployment information on your project's Hosting page. For example:

firebase deploy -m "Deploying the best new feature ever."