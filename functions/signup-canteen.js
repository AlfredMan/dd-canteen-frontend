// 'use strict';

// const functions = require('firebase-functions');
const whitelist = ['https://designdistrict.co.uk', 'http://localhost:3000', 'https://designdistrict.netlify.com']
// const request = require("request");
// const cors = require('cors')({ origin: true });
const recaptchaKey = '6LeyatwUAAAAAB27tstFvHk0q4OwwpM1a7Ow0W2Z';

// const designdistrict_salesforce_form_oid = '00D20000000nxym';
// const designdistrict_salesforce_form_tracking_field = '00N3Y00000H1Xas';
const mailchimp_signup_form_action_url = 'https://designdistrict.us5.list-manage.com/subscribe/post?u=1cab880060e0600e8a967db10&amp;id=c2a335f361'

// exports.verify = functions.https.onRequest((req, res) => {

//   res.set('Access-Control-Allow-Origin', 'https://designdistrict.co.uk');
//   res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.set('Access-Control-Allow-Headers', '*');

//   if (req.method === 'OPTIONS') {
//     res.end();
//   } else {
//     return cors(req, res, () => {

//       if (!req.body.token) {
//           return res.status(400).json({message: "recaptchaToken is required"});
//       }
//       const verifyCaptchaOptions = {
//           uri: "https://www.google.com/recaptcha/api/siteverify",
//           json: true,
//           form: {
//             secret: recaptchaKey,
//             response: req.body.token
//           }
//       };
//       // const client_data = req.body.data || 'na_data';
//       // const client_window = req.body.win || 'na_win';
//       // const designdistrict_salesforce_form_tracking_value = `${client_window}`;
//       // console.info("tracking:", `${client_data} ${client_window}`);
//       request.post(verifyCaptchaOptions, function (err, response, body) {
//           // console.log(err, response, body)
//           if (err) {
//               return res.status(500).json({message: "oops, something went wrong on our side"});
//           }
//           if (!body.success) {
//               return res.status(500).json({message: body["error-codes"].join(".")});
//           }
//           //Save the user to the database. At this point they have been verified.
//           res.status(201).json({
//             message: "Congratulations! We think you are human.",
//             // oid: designdistrict_salesforce_form_oid,
//             // f: designdistrict_salesforce_form_tracking_field,
//             // v: designdistrict_salesforce_form_tracking_value
//           });
//         }
//       );

//     })
//   }
// });

// const querystring = require("querystring");

exports.handler = async function(event, context) {
  // your server-side functionality
  // event.queryStringParameters.email
  switch (event.httpMethod) {
    case 'OPTIONS':
      // To enable CORS
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };
      return {
        statusCode: 200, // <-- Must be 200 otherwise pre-flight call fails
        headers,
        body: 'preflight'
      };
    case 'POST':
      // e.g. POST /.netlify/functions/customers with a body of key value pair objects, NOT strings
      // return require('./customers/create').handler(event, context);

      // const params = event.queryStringParameters;
      // console.log(event)
      console.log(event.body)

      return {
        statusCode: 200, // <-- Must be 200 otherwise pre-flight call fails
        body: event.body
      };
  }
  return {
    statusCode: 500,
    body: 'unrecognized HTTP Method'
  };  
}
