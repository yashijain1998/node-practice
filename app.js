var express = require("express");
var chalk = require("chalk");
const ProgressBar = require("progress");
const inquirer = require("inquirer");
var app = express();

const user = [{
    user_name:'yashi',
    user_city: 'delhi',
},
{
    user_name: 'abc',
    user_city: 'mp'
}
];

app.get("/", (req, res) => {
  console.log("hi");
  res.send("this is home page");
});

app.get("/userdetails",(req,res)=>{
        res.send(user);
})

/* for printing command line arguments no need to "require" process */
process.argv.slice(2).forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

/* for console.count() */
const x = 1;
const y = 2;
const z = 3;
console.count(
  "The value of x is " + x + " and has been checked .. how many times?"
); //1
console.count(
  "The value of y is " + z + " and has been checked .. how many times?"
); //1
console.count(
  "The value of y is " + z + " and has been checked .. how many times?"
); //2
console.count(
  "The value of z is " + z + " and has been checked .. how many times?"
); //1

/* how much time a function takes to execute */
const doSomething = () => console.log(chalk.bgCyan("test"));
const measureDoingSomething = () => {
  console.time("doSomething()");
  //do something, and measure the time it takes
  doSomething();
  console.timeEnd("doSomething()");
};
measureDoingSomething();

/* progress bar */
const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

/* taking input from user */

/* first way */
var questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`Hi ${answers["name"]}!`);
});

/* another way */
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});

/* listen to port number 3000 */
app.listen(3000, () => {
  console.log("listening to 3000");
});
