// Set the configuration settings
const credentials = {
  client: {
    id: ${process.env.GOOGLE_CLIENT_ID},
    secret: ${process.env.GOOGLE_SECRET},
  },
  auth: {
    tokenHost: 'https://api.oauth.com'
  }
};

// Initialize the OAuth2 Library
const oauth2 = require('simple-oauth2').create(credentials);


const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: 'http://localhost:8000/callback',
  scope: 'https://www.googleapis.com/auth/calendar.events', // also can be an array of multiple scopes, ex. ['<scope1>, '<scope2>', '...']
  state: 'ok'
});
