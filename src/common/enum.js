System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RenderMode, PromiseStatus;
    return {
        setters: [],
        execute: function () {
            (function (RenderMode) {
                RenderMode[RenderMode["Replace"] = 0] = "Replace";
                RenderMode[RenderMode["Append"] = 1] = "Append";
            })(RenderMode || (RenderMode = {}));
            exports_1("RenderMode", RenderMode);
            (function (PromiseStatus) {
                PromiseStatus[PromiseStatus["None"] = 0] = "None";
                PromiseStatus[PromiseStatus["Completed"] = 1] = "Completed";
            })(PromiseStatus || (PromiseStatus = {}));
            exports_1("PromiseStatus", PromiseStatus);
        }
    };
});
//# sourceMappingURL=enum.js.map