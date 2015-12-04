var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf());
var timestamp = 1444927486704;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mma'));
console.log(now.format('MMM Do YYYY h:mma'));