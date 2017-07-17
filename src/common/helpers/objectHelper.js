System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function apply(obj, destObj) {
        if (!obj) {
            return destObj;
        }
        for (var p in obj) {
            destObj[p] = obj[p];
        }
        return destObj;
    }
    var objectHelper;
    return {
        setters: [],
        execute: function () {
            objectHelper = {
                apply: apply
            };
            exports_1("default", objectHelper);
        }
    };
});
//# sourceMappingURL=objectHelper.js.map