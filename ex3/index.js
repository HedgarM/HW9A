const moment = require('moment');

const currentDate = moment().format('dddd, MMMM Do YYYY');
console.log(currentDate);

const pastDate = moment('1976-11-26');
const yearsAgo = moment().diff(pastDate, 'years');
console.log(`${yearsAgo} years ago`);