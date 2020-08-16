# CorgiDev Site

This is the code for my personal website located at https://corgidev.com. It has been built with HTML, CSS, JS, and React. I use GitHub Actions to automate deployment of the website to Google Firebase, which is what I use to handle hosting.

I have included documentation related to various stuff I used when building my site below. I include this information to help me when I need to remember how I did something, or for when I need a starting point to research an issue I am experiencing.

## Accessibility

I have used a combination of tools to improve the overall accessibility and performance of my site. While this will always be a work in progress, the following tools are what I used to accomplish this:

- [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html)
   - **ANDI** stands for **Accessible Name & Description Inspector**.
   - It is a free tool that assists in Section 508 testing.
   - ANDI is maintained by the Accessible Solutions Branch at SSA.
   - You can learn more about ANDI using the link above, or by visiting the [ANDI GitHub Repo](https://github.com/SSAgov/ANDI).
- [Accessibility Insights](https://accessibilityinsights.io/)
   - **Accessibility Insights** is a free Accessibility testing tool developed by Microsoft.
   - It is available for Android, Web, and Windows.
   - There is a GitHub repo for each version:
      - [Accessibility Insights for Web on GitHub](https://github.com/microsoft/accessibility-insights-web)
      - [Accessibility Insights for Android on GitHub](https://github.com/microsoft/accessibility-insights-for-android-service)
      - [Accessibility Insights for Windows on GitHub](https://github.com/microsoft/accessibility-insights-windows)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
   - This is the built in auditing tools found in Chrome and the new Chromium based Edge.
   - These tools are built into the Developer Tools and provide performance and accessibility auditing capabilities.

## FireBase Documentation

### Serve and test your Firebase project locally

You can view and test your Firebase project on locally hosted URLs before deploying to production. If you only want to test select features, you can use a comma-separated list in a flag on the firebase serve command.

Run the following command from the root of your local project directory if you want to do either of the following tasks:

#### View the static content for your Firebase-hosted app

Use Cloud Functions to generate dynamic content for Firebase Hosting and you want to use your production (deployed) HTTP functions to emulate Hosting on a local URL.
firebase serve --only hosting

##### Emulate your project using local HTTP functions
Run any of the following commands from your project directory to emulate your project using local HTTP functions.

**To emulate HTTP functions and hosting for testing on local URLs**, use either of the following commands:

`firebase serve`

`firebase serve --only functions,hosting // uses a flag`

**To emulate HTTP functions only**, use the following command:

`firebase serve --only functions`

**Test from other local devices**
By default, firebase serve only responds to requests from `localhost`. This means that you'll be able to access your hosted content from your computer's web browser but not from other devices on your network. If you'd like to test from other local devices, use the --host flag, like so:

`firebase serve --host 0.0.0.0  // accepts requests to any host`

#### Deploy to your site
To deploy to your site, run the following command from the root of your local project directory:

`firebase deploy`

This command deploys a release to the following sites:

Your Firebase project's default Hosting sites, `projectID.web.app` and `projectID.firebaseapp.com`

Any custom domains that you've connected to your Hosting site.

You can optionally add a comment to a deploy. This comment will display with the other deployment information on your project's Hosting page. For example:

`firebase deploy -m "Deploying the best new feature ever."`

## Additional Documentation

- ["How to Create a Multi-Page React App"](https://rapidapi.com/blog/react-multi-page-app/) by Jarrett Retz
   - I used this article to help me transition my site to React with help from Gatsby.