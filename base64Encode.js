//fetch values from catalog props and set as basic auth header


var crdsToBase64 = `${username}:${password}`;
let authorizationHdr = Buffer.from(crdsToBase64).toString('base64');
let BASIC_AUTH_VALUE = `Basic ${authorizationHdr}`

context.message.header.set('Authorization', BASIC_AUTH_VALUE);