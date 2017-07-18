System.register(["../common/enum", "../common/helpers/domHelper", "../common/connector", "../common/const", "../common/helpers/compileHelper", "./event"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var enum_1, domHelper_1, connector_1, const_1, compileHelper_1, event_1, BasePage;
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
            },
            function (compileHelper_1_1) {
                compileHelper_1 = compileHelper_1_1;
            },
            function (event_1_1) {
                event_1 = event_1_1;
            }
        ],
        execute: function () {
            BasePage = (function () {
                function BasePage(renderTo) {
                    if (renderTo === void 0) { renderTo = "body"; }
                    this.myName = "this is temp name";
                    this.title = "";
                    this.renderTo = "body";
                    this.controls = [];
                    this.renderMode = enum_1.RenderMode.Append;
                    this.dom = null;
                    this.html = "";
                    this.renderTo = renderTo;
                    this.connector = connector_1.ConnectorFactory.create();
                    this.init();
                }
                Object.defineProperty(BasePage.prototype, "events", {
                    get: function () {
                        var meta = window.Reflect.getMetadata(const_1.Const.DecoratorKey, this.constructor) || {};
                        return meta["events"] || new event_1.Events();
                    },
                    enumerable: true,
                    configurable: true
                });
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
                BasePage.prototype.addControl = function (control) {
                    this.controls.push(control);
                };
                BasePage.prototype.render = function (renderTo) {
                    if (renderTo === void 0) { renderTo = "body"; }
                    if (!String.isNullOrWhiteSpace(renderTo)) {
                        this.renderTo = renderTo;
                    }
                    var self = this;
                    this.getHtml(self.templateUrl).then(function (html) {
                        self.onHtmlReady(html);
                    });
                };
                BasePage.prototype.onRendering = function () { };
                BasePage.prototype.onHtmlReady = function (html) {
                    this.html = html;
                    this.onRendering();
                    this.compileHtml();
                    this.dom = window.jquery(this.html);
                    domHelper_1.default.append(this.renderTo, this.dom);
                    this.controls.forEach(function (item) {
                        item.render(item.renderTo);
                    });
                    this.onRendered();
                    this.bindEvents();
                };
                BasePage.prototype.bindEvents = function () {
                    var events = this.events.getEvents();
                    var self = this;
                    console.log("registered events:", events);
                    events.forEach(function (event) {
                        self.bindEvent(event.selector, event.name, function () {
                            self[event.handler]();
                        });
                    });
                };
                BasePage.prototype.compileHtml = function () {
                    this.html = compileHelper_1.default.compile(this.html, this.model);
                };
                BasePage.prototype.getHtml = function (templateUrl) {
                    return this.connector.get(templateUrl);
                };
                BasePage.prototype.onRendered = function () { };
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