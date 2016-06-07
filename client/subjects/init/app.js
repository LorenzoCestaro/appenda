// define app module
var app =angular
  .module("artooInit", [])
  .run(() => {
    console.info("I run in the setter");
  });

// get app module and execute .run() method
angular
  .module("artooInit")
  .run(() => {
    console.info("I run in the getter");
  });

app.run(() => {
  console.info("I run from the module in the var");
});
