System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function append(selector, content) {
        window.jquery(selector).append(content);
    }
    var domHelper;
    return {
        setters: [],
        execute: function () {
            domHelper = {
                append: append
            };
            exports_1("default", domHelper);
        }
    };
});
//# sourceMappingURL=domHelper.js.map