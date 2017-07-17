System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function compile(html, model, prefix) {
        if (prefix === void 0) { prefix = ""; }
        if (String.isNullOrWhiteSpace(html)) {
            return "";
        }
        if (!model) {
            return html;
        }
        var compiledHtml = html;
        for (var pro in model) {
            if (typeof model[pro] == "function") {
                continue;
            }
            if (typeof model[pro] == "object" && model.hasOwnProperty(pro)) {
                compiledHtml = compile(compiledHtml, model[pro], prefix + pro + ".");
                continue;
            }
            var key = "{{model." + prefix + pro + "}}";
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