# Rudderstack AWS Lambda Boilerplate

If you want to use the rudder SDK in a lambda function, this will help you build it including any dependencies using docker and the official AmazonLinux image to ensure compatibility.

## Usage

Simply add whatever logic you want to the `index.js` file and run the shell scripts in order. It will leave you with a ZIP file you can upload to AWS Lambda.

## Ingesting Webhooks With This Setup

I've detailed how to setup an AWS API Gateway to use this boilerpalte to ingest an incoming webhook into RudderStack. Check it out [here](https://www.obsessiveanalytics.com/blog/ingesting-a-webhook-with-aws-api-gateway-and-rudderstack).


