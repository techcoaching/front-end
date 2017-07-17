System.register(["./promise"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var promise_1, ConnectorFactory, HttpConnector;
    return {
        setters: [
            function (promise_1_1) {
                promise_1 = promise_1_1;
            }
        ],
        execute: function () {
            ConnectorFactory = (function () {
                function ConnectorFactory() {
                }
                ConnectorFactory.create = function () {
                    return new HttpConnector();
                };
                return ConnectorFactory;
            }());
            exports_1("ConnectorFactory", ConnectorFactory);
            HttpConnector = (function () {
                function HttpConnector() {
                }
                HttpConnector.prototype.get = function (uri) {
                    var promise = promise_1.PromiseFactory.create();
                    window.jquery.get(uri, function (html) {
                        promise.resolve(html);
                    });
                    return promise;
                };
                return HttpConnector;
            }());
        }
    };
});
//# sourceMappingURL=connector.js.map