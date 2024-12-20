// callback = a function that is passed as an argument to another function.

hello(wait);

function hello(callback) {
  console.log("hello");
  callback();
}

function wait(){
  console.log("Wait!");
}

function leave(){
  console.log("Leave!");
}

function goodBye() {
  console.log("Goodbye!");
}
