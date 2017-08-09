import { Const } from "./const";
import objectHelper from "./helpers/objectHelper";
import { Events, Event } from "./event";
import { IBasePage } from "./basePage";
import { ComponentManager } from "./componentManager";
export function inline(target) {
    let meta = window.Reflect.getMetadata(Const.DecoratorKey, target) || {};
    if (!String.isNullOrWhiteSpace(meta.selector)) {
        ComponentManager.register(meta.selector, target);
    }
}

export function page(options) {
    return function (ctor) {
        let meta = window.Reflect.getMetadata(Const.DecoratorKey, ctor) || {};
        meta = objectHelper.apply(options, meta);
        window.Reflect.defineMetadata(Const.DecoratorKey, meta, ctor);
    }
}

export function click(option: any) {
    return function (target: IBasePage, propertyKey, descriptor: PropertyDescriptor) {
        let originMethod = descriptor.value;

        let meta = window.Reflect.getMetadata(Const.DecoratorKey, target.constructor) || {};
        let events: Events = meta["events"] || new Events();
        events.add(new Event("click", option.selector, propertyKey));
        meta["events"] = events;
        window.Reflect.defineMetadata(Const.DecoratorKey, meta, target.constructor);
    }
}