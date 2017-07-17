import { Const } from "./const";
import objectHelper from "./helpers/objectHelper";
export function page(options) {
    return function (ctor) {
        let meta = window.Reflect.getMetadata(Const.DecoratorKey, ctor) || {};
        meta = objectHelper.apply(options, meta);
        window.Reflect.defineMetadata(Const.DecoratorKey, meta, ctor);
    }

}