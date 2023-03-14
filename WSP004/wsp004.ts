import readline from "readline";

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLineInterface.question("What is your name?", (answer: string) => {
  console.log(`Your name is ${answer}`);
  close();
});

function close(){
  readLineInterface.close();
}