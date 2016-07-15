System.register(['//code.jquery.com/jquery-1.12.1.min.js', './services/Service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1;
    var App;
    return {
        setters:[
            function (_1) {},
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.title = "this is a watched ts file!!";
                    this.service = new Service_1.Service();
                    this.init();
                }
                App.prototype.init = function () {
                    var _this = this;
                    var font = this.service.getRandomFont();
                    $("#container i").addClass("fa fa-" + font.class);
                    $(".add").on("click", function (e) {
                        var font = _this.service.getRandomFont();
                        $("#container").append("<span class='font-container'><i class='icon fa fa-" + font.class + "'></i> <span class='remove'>x</span></span>");
                    });
                    $("#container").on("click", ".remove", function (e) {
                        console.log('icxcx');
                        e.target.parentElement.remove();
                    });
                };
                return App;
            }());
            exports_1("App", App);
        }
    }
});
