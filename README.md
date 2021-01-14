# heroku-streaming-lapp
An easy to deploy, barebones template for a Pollofeed-like streaming Lapp (Lightning app)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Deploy instructions

Deploying to Heroku is easy. Press the button above to get started.

You will need to set the following environmental variables for your Heroku app. Once deployed, click "Manage App" and in the Settings tab, edit Config Vars:

`HEROKU_URL` - This is the URL of the top page of the app, without the trailing slash. Examle: `https://test-lapp.herokuapp.com`
`LAPP_NAME` - This gets displayed on the page, in the title, and on invoices. Example: `Test app`
`MIN_PAYMENT` - This is the price of one invoice, in sats or the currency specified below.
`OPENNODE_API_KEY` - This is your [OpenNode](https://opennode.com/) API key.
`VIDEO_EMBED` - This is the video embed code for your video. Just paste it all in.

The following are optional:

`CURRENCY` - Leave blank and the units will be satoshis (sats). Otherwise, choose from the list [here](https://api.opennode.com/v1/currencies)
`CALLBACK_URL` - When the user pays an invoice, OpenNode will make a POST request to this URL. You will need to set this if you want to trigger some action upon payment (like [Pollofeed](https://pollofeed.com))
`SUCCESS_URL` - When the user pays the invoice, they are redirected to this page. By default, we redirect to the top page of the Heroku app.

Even more optional are the following (you will likely not need these settings):

`PORT` - Sets the port for the app to listen on. Defaults to 3000