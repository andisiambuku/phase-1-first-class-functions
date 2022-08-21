function receivesAFunction(callback){
  callback("Why did you call me");
}
receivesAFunction();


function returnsANamedFunction(){
  return function hello(){
    console.log("I am named");
  }
}


function returnsAnAnonymousFunction(){
  return function(){
    console.log("I am moving in silence");
  }
}