// npm - global command, comes with node
// npm --version

// local depenedency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("loadash");

const arr = [1, [2, 3, [4, [5]]]];

const newArr = _.flattenDeep(arr);

console.log(newArr);
