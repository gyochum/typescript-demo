System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Base;
    return {
        setters:[],
        execute: function() {
            Base = (function () {
                function Base() {
                }
                Base.prototype.write = function (message) {
                    console.log(message);
                };
                return Base;
            }());
            exports_1("Base", Base);
        }
    }
});
