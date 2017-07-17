System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Events, Event;
    return {
        setters: [],
        execute: function () {
            Events = (function () {
                function Events() {
                    this.items = [];
                }
                Events.prototype.add = function (ev) {
                    this.items.push(ev);
                };
                Events.prototype.getEvents = function () {
                    return this.items;
                };
                return Events;
            }());
            exports_1("Events", Events);
            Event = (function () {
                function Event(name, selector, handler) {
                    this.name = "";
                    this.selector = "";
                    this.handler = null;
                    this.name = name;
                    this.selector = selector;
                    this.handler = handler;
                }
                return Event;
            }());
            exports_1("Event", Event);
        }
    };
});
//# sourceMappingURL=event.js.map