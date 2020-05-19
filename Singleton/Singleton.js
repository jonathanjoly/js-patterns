var mySingleton = (function () {

    var instance;

    function init() {

        var privateVar = "A variable";

        return {
            publicMethod: function () { },
            publicVar: "A public variable",
        };

    };

    return {

        getInstance: function () {

            if (!instance) {
                instance = init();
            }

            return instance;
        }

    };

})();