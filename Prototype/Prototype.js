var myPrototype = {
  aGivenVariable: "Value",

  aFunction: function () {
    console.log("aFunction");
  },

  anotherFunction: function () {
    console.log("anotherFunction");
  },
};

// Use Object.create to instantiate a new car
var myObject = Object.create(myPrototype);

// Now we can see that one is a prototype of the other
console.log(myObject.aGivenVariable);
