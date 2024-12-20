// callback = a function that is passed as an argument to another function.
sum(displayConsole, 1, 2);

function sum(callback, x, y){
  let result = x+y;
  callback(result);
}

function displayConsole(result){
  console.log(result);
}
