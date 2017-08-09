import { Const } from "./const";
import objectHelper from "./helpers/objectHelper";
import { Events, Event } from "./event";
import { IBasePage } from "./basePage";
import {ComponentManager} from "./componentManager";
export function page(options) {
    return function (ctor) {
        let meta = window.Reflect.getMetadata(Const.DecoratorKey, ctor) || {};
        meta = objectHelper.apply(options, meta);
        window.Reflect.defineMetadata(Const.DecoratorKey, meta, ctor);
        if(!String.isNullOrWhiteSpace(options.selector)){
            ComponentManager.register(options.selector, ctor);
        }
    }
}

export function click(option: any) {
    return function (target: IBasePage, propertyKey, descriptor: PropertyDescriptor) {
        let originMethod = descriptor.value;
        // descriptor.value = function (...args: any[]) {
        //     console.log("before call ${propertyKey}");
        //     originMethod.apply(target, args);
        //     console.log("end call ${propertyKey}");
        // }

        let meta = window.Reflect.getMetadata(Const.DecoratorKey, target.constructor) || {};
        let events: Events = meta["events"] || new Events();
        events.add(new Event("click", option.selector, propertyKey));
        meta["events"] = events;
        window.Reflect.defineMetadata(Const.DecoratorKey, meta, target.constructor);
    }
    // return function (target: IBasePage, propertyKey, descriptor: PropertyDescriptor) {
    //     let meta = window.Reflect.getMetadata(Const.DecoratorKey, target.constructor) || {};
    //     let events: Events = meta["events"] || new Events();
    //     events.add(new Event("click", option.selector, function(){
    //         target[propertyKey].apply(target);
    //     }));
    //     meta["events"] = events;
    //     window.Reflect.defineMetadata(Const.DecoratorKey, meta, target.constructor);
    // }
}