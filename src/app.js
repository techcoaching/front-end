System.register(["./common/route/routeNavigator", "./common/helpers/routerHelper", "./config/routes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var routeNavigator_1, routerHelper_1, routes_1;
    return {
        setters: [
            function (routeNavigator_1_1) {
                routeNavigator_1 = routeNavigator_1_1;
            },
            function (routerHelper_1_1) {
                routerHelper_1 = routerHelper_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            }
        ],
        execute: function () {
            window.jquery = window.$;
            routerHelper_1.default.config(routes_1.default);
            routeNavigator_1.RouteNavigator.navigate();
        }
    };
});
//# sourceMappingURL=app.js.map