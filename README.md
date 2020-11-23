# ecomm-app-automation

A simple proof of concept for end-to-end testing and automation with cypress.

## Initial Setup

1. Receive and accept invitation for private repo
2. Clone repo via SSH - `git@github.com:indramohan02/ecomm-app-automation.git`
3. Navigate to project folder and run `npm install`

## How to Run Cypress Tests

- To open cypress dashboard: `npm run cypress` (defaults to West Elm)

  - You may select browser type and which tests to run from the dashboard

- To run cypress tests from command line: `npm run cypress:cli`
- To run cypress tests in Chrome browser: `npm run cypress:chrome`
- To run cypress tests in Firefox browser: `npm run cypress:firefox`
- To run cypress tests in edge browser: `npm run cypress:edge`

## Adding Parameters to npm Scripts

Running the scripts above will only open tests in a specific browser. We want to open our
tests for specific brand names as well. To do this we need append the `--env` argument to our test
commands. Examples listed below show us how to open tests for each brand in chrome browser:

- West Elm: `npm run cypress:chrome --env brand=we`
- Williams Sonoma: `npm run cypress:chrome --env brand=ws`
- Pottery Barn: `npm run cypress:chrome --env brand=pb`

If we want to open our tests using a different browser, we simply just switch `chrome` out with one
of the aforementioned browsers above.

### Opening Tests in a Specific Environment

By default we run tests using our production environment. We might want to run our tests in
another environment however. We need to make use of the `--config-file` argument provided by
cypress. Here is an example listed below:

- `--config-file cypress.regression.json`

### Putting it All Together

We can mix together any of the examples above to create the perfect recipe, like so:

- `npm run cypress:firefox --env brand=ws --config-file cypress.regression.json`

This example will open the Williams Sonoma brand tests in a Firefox browser, inside of our
`regression` environment.
