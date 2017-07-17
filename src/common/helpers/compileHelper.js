System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function compile(html, model) {
        if (String.isNullOrWhiteSpace(html)) {
            return "";
        }
        if (!model) {
            return html;
        }
        var compiledHtml = html;
        for (var pro in model) {
            var key = "{{model." + pro + "}}";
            compiledHtml = compiledHtml.replace(key, model[pro]);
        }
        return compiledHtml;
    }
    var compileHelper;
    return {
        setters: [],
        execute: function () {
            compileHelper = {
                compile: compile
            };
            exports_1("default", compileHelper);
        }
    };
});
//# sourceMappingURL=compileHelper.js.map