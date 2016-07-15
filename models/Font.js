System.register(['./Base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Base_1;
    var Font;
    return {
        setters:[
            function (Base_1_1) {
                Base_1 = Base_1_1;
            }],
        execute: function() {
            Font = (function (_super) {
                __extends(Font, _super);
                function Font(_class) {
                    _super.call(this);
                    this.class = _class;
                }
                return Font;
            }(Base_1.Base));
            exports_1("Font", Font);
        }
    }
});
