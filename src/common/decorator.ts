import { Const } from "./const";
import objectHelper from "./helpers/objectHelper";
import {Events, Event} from "./event";
export function page(options) {
    return function (ctor) {
        let meta = window.Reflect.getMetadata(Const.DecoratorKey, ctor) || {};
        meta = objectHelper.apply(options, meta);
        window.Reflect.defineMetadata(Const.DecoratorKey, meta, ctor);
    }
}

export function click(option: any) {
    return function (target: any, propertyKey, descriptor: PropertyDescriptor) {
        let meta = window.Reflect.getMetadata(Const.DecoratorKey, target.constructor) || {};
        let events: Events = meta["events"] || new Events();
        events.add(new Event("click", option.selector, function(){
            target[propertyKey].apply(target);
        }));
        meta["events"] = events;
        window.Reflect.defineMetadata(Const.DecoratorKey, meta, target.constructor);
    }
}