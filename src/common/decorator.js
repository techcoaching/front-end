System.register(["./const", "./helpers/objectHelper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function page(options) {
        return function (ctor) {
            var meta = window.Reflect.getMetadata(const_1.Const.DecoratorKey, ctor) || {};
            meta = objectHelper_1.default.apply(options, meta);
            window.Reflect.defineMetadata(const_1.Const.DecoratorKey, meta, ctor);
        };
    }
    exports_1("page", page);
    var const_1, objectHelper_1;
    return {
        setters: [
            function (const_1_1) {
                const_1 = const_1_1;
            },
            function (objectHelper_1_1) {
                objectHelper_1 = objectHelper_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=decorator.js.map