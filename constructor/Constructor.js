function MyObject(property1, property2, property3) {

    this.property1 = property1;
    this.property2 = property2;
    this.property3 = property3;

}

// Seperate to avoid to recreate the function on each Instance.
MyObject.prototype.myFunction = function () {
    return this.property1;
};

// Usage:

var myObject = new MyObject("Propertya", "Propertyb", "Propertyc");
console.log(myObject.myFunction());
