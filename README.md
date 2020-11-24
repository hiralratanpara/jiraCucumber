# ecomm-app-automation

A simple proof of concept for end-to-end testing and automation with cypress.

## Initial Setup

1. Receive and accept invitation for private repo
2. Clone repo via SSH - `git@github.com:indramohan02/ecomm-app-automation.git`
3. Navigate to project folder and run `npm install`

## How to Run Cypress Tests

- To open cypress dashboard: `npm run cypress:open`
- To run cypress tests from command line: `npm run cypress`
  - Test will default to Westelm brand and Prod environment

## Adding Parameters to npm Scripts

Running the scripts above will only open tests in a default browser for Westelm brand (https://www.westelm.com). We want to open our
tests for specific brand names as well. To do this we need append the `--env` argument to our test
commands. Examples listed below show us how to open tests for each brand in chrome browser:

- West Elm: `npm run cypress --env brand=we --browser=chrome`
- Williams Sonoma: `npm run cypress --env brand=ws --browser=chrome`
- Pottery Barn: `npm run cypress --env brand=pb --browser=chrome`

## Below are the support broswers and config parameter to be used to run test for specific browser

- Chrome : --browser=chrome
- Firefox : --browser=firefox
- Edge : --browser=edge

If we want to open our tests using a different browser, we simply just switch `chrome` out with one
of the aforementioned browsers above.

### Opening Tests in a Specific Environment

By default we run tests using our production environment. We might want to run our tests in
another environment however. We need to make use of the `region` argument in the command.

- Regression `region=regression`
- AkTest `region=aktest`
- Prod `region-prod`

- Note : Running Test on lower environment need credentials (username and password) to be passed in command

Here is an example to run Westelm in regression on chrome browser

- `npm run cypress --env brand=we,region=regression,username=xxxx,password=xxxx --browser=chrome`
  - Replace `xxxx` with actual values.

### Putting it All Together

We can mix together any of the examples above to create the perfect recipe, like so:

- `npm run cypress:run --env brand=ws,region=prod --browser=firefox`

This example will open the Williams Sonoma brand tests in a Firefox browser, inside of our
`prod` environment.
