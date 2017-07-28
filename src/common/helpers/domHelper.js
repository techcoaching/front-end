System.register(["../enum"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function render(selector, content, mode) {
        switch (mode) {
            case enum_1.RenderMode.Replace:
                replace(selector, content);
                break;
            case enum_1.RenderMode.Append:
            default:
                append(selector, content);
                break;
        }
    }
    function replace(selector, content) {
        window.jquery(selector).html(content);
    }
    function append(selector, content) {
        window.jquery(selector).append(content);
    }
    var enum_1, domHelper;
    return {
        setters: [
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }
        ],
        execute: function () {
            domHelper = {
                append: append,
                render: render
            };
            exports_1("default", domHelper);
        }
    };
});
//# sourceMappingURL=domHelper.js.map