System.register(["./const", "./helpers/objectHelper", "./event", "./componentManager"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function inline(target) {
        var meta = window.Reflect.getMetadata(const_1.Const.DecoratorKey, target) || {};
        if (!String.isNullOrWhiteSpace(meta.selector)) {
            componentManager_1.ComponentManager.register(meta.selector, target);
        }
    }
    exports_1("inline", inline);
    function page(options) {
        return function (ctor) {
            var meta = window.Reflect.getMetadata(const_1.Const.DecoratorKey, ctor) || {};
            meta = objectHelper_1.default.apply(options, meta);
            window.Reflect.defineMetadata(const_1.Const.DecoratorKey, meta, ctor);
        };
    }
    exports_1("page", page);
    function click(option) {
        return function (target, propertyKey, descriptor) {
            var originMethod = descriptor.value;
            var meta = window.Reflect.getMetadata(const_1.Const.DecoratorKey, target.constructor) || {};
            var events = meta["events"] || new event_1.Events();
            events.add(new event_1.Event("click", option.selector, propertyKey));
            meta["events"] = events;
            window.Reflect.defineMetadata(const_1.Const.DecoratorKey, meta, target.constructor);
        };
    }
    exports_1("click", click);
    var const_1, objectHelper_1, event_1, componentManager_1;
    return {
        setters: [
            function (const_1_1) {
                const_1 = const_1_1;
            },
            function (objectHelper_1_1) {
                objectHelper_1 = objectHelper_1_1;
            },
            function (event_1_1) {
                event_1 = event_1_1;
            },
            function (componentManager_1_1) {
                componentManager_1 = componentManager_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=decorator.js.map