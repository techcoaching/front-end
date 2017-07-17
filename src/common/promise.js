System.register(["./enum"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var enum_1, PromiseFactory, Promise;
    return {
        setters: [
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }
        ],
        execute: function () {
            PromiseFactory = (function () {
                function PromiseFactory() {
                }
                PromiseFactory.create = function () {
                    return new Promise();
                };
                return PromiseFactory;
            }());
            exports_1("PromiseFactory", PromiseFactory);
            Promise = (function () {
                function Promise() {
                    this.data = null;
                    this.status = enum_1.PromiseStatus.None;
                    this.successCallback = null;
                }
                Promise.prototype.resolve = function (data) {
                    this.status = enum_1.PromiseStatus.Completed;
                    this.data = data;
                    this.onChanged();
                };
                Promise.prototype.then = function (callback) {
                    this.successCallback = callback;
                    this.onChanged();
                    return this;
                };
                Promise.prototype.onChanged = function () {
                    if (this.status == enum_1.PromiseStatus.Completed && this.successCallback) {
                        this.successCallback(this.data);
                    }
                };
                return Promise;
            }());
            exports_1("Promise", Promise);
        }
    };
});
//# sourceMappingURL=promise.js.map