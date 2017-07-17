System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MainSliderModel;
    return {
        setters: [],
        execute: function () {
            MainSliderModel = (function () {
                function MainSliderModel(items) {
                    if (items === void 0) { items = []; }
                    this.items = [];
                    this.currentIndex = 0;
                    this.currentItem = null;
                    this.items = items;
                    if (this.items.length > 0) {
                        this.currentIndex = 0;
                        this.currentItem = this.items[this.currentIndex];
                    }
                }
                MainSliderModel.prototype.next = function () {
                    if (this.currentIndex >= this.items.length - 1) {
                        return false;
                    }
                    this.currentItem = this.items[++this.currentIndex];
                    return true;
                };
                MainSliderModel.prototype.previous = function () {
                    if (this.currentIndex <= 0) {
                        return false;
                    }
                    this.currentItem = this.items[--this.currentIndex];
                    return true;
                };
                return MainSliderModel;
            }());
            exports_1("MainSliderModel", MainSliderModel);
        }
    };
});
//# sourceMappingURL=mainSliderModel.js.map