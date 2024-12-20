// callback = a function that is passed as an argument to another function.

hello();
goodBye();

function hello() {
  setTimeout(function () {
    console.log("hello");
  }, 3000);
}

function goodBye() {
  console.log("Goodbye!");
}
