var myModule = (function () {

    var moduleProperty = 0;

    return {

        functionA: function () {
            return moduleProperty;
        },

        functionB: function (message) {
            console.log("Show message: " + message);
        }
    };

})();

myModule.functionA();
myModule.functionB("My message is...");