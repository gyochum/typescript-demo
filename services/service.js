System.register(['../models/font'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var font_1;
    var Service;
    return {
        setters:[
            function (font_1_1) {
                font_1 = font_1_1;
            }],
        execute: function() {
            Service = (function () {
                function Service() {
                    this.fonts = ["pied-piper", "snapchat", "instagram", "bicycle", "vine", "tumblr", "windows"];
                }
                Service.prototype.getRandomFont = function () {
                    var font = this.fonts[Math.floor(Math.random() * this.fonts.length)];
                    var result = new font_1.Font(font);
                    //write to the console using the base class' write function 
                    result.write("loading font: " + result.class);
                    return result;
                };
                return Service;
            }());
            exports_1("Service", Service);
        }
    }
});
