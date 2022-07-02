// npm start for the server

const lodash = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);

// npm start for the server
