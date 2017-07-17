System.register(["../common/enum", "../common/helpers/domHelper", "../common/connector", "../common/const"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var enum_1, domHelper_1, connector_1, const_1, BasePage;
    return {
        setters: [
            function (enum_1_1) {
                enum_1 = enum_1_1;
            },
            function (domHelper_1_1) {
                domHelper_1 = domHelper_1_1;
            },
            function (connector_1_1) {
                connector_1 = connector_1_1;
            },
            function (const_1_1) {
                const_1 = const_1_1;
            }
        ],
        execute: function () {
            BasePage = (function () {
                function BasePage() {
                    this.title = "";
                    this.renderTo = "body";
                    this.controls = [];
                    this.renderMode = enum_1.RenderMode.Append;
                    this.dom = null;
                    this.connector = connector_1.ConnectorFactory.create();
                    this.init();
                }
                Object.defineProperty(BasePage.prototype, "templateUrl", {
                    get: function () {
                        var meta = window.Reflect.getMetadata(const_1.Const.DecoratorKey, this.constructor) || {};
                        return meta["templateUrl"];
                    },
                    enumerable: true,
                    configurable: true
                });
                BasePage.prototype.init = function () {
                };
                BasePage.prototype.render = function (renderTo) {
                    if (renderTo === void 0) { renderTo = "body"; }
                    this.renderTo = renderTo;
                    var self = this;
                    this.getHtml(self.templateUrl).then(function (html) {
                        self.onHtmlReady(html);
                    });
                };
                BasePage.prototype.onHtmlReady = function (html) {
                    this.dom = window.jquery(html);
                    domHelper_1.default.append(this.renderTo, this.dom);
                    this.onRenderCompleted();
                };
                BasePage.prototype.getHtml = function (templateUrl) {
                    return this.connector.get(templateUrl);
                };
                BasePage.prototype.onRenderCompleted = function () { };
                BasePage.prototype.bindEvent = function (selector, eventName, handler) {
                    window.jquery(this.dom).find(selector).bind(eventName, handler);
                };
                BasePage.prototype.getElement = function (selector) {
                    return this.dom.find(selector);
                };
                return BasePage;
            }());
            exports_1("BasePage", BasePage);
        }
    };
});
//# sourceMappingURL=basePage.js.map