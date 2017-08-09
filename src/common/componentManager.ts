export class ComponentManager {
    private static components: any = {};
    public static create(selector: string, id: string, params: any) {
        let ctor = ComponentManager.getBySelector(selector);
        console.log(Function.getArguments(ctor));
        let args: Array<string> = Function.getArguments(ctor)
        let ctorArgs = [null, String.format("{0}#{1}", selector, id)];
        if (args && args.length > 1) {
            for (let index = 1; index < args.length; index++) {
                ctorArgs[index + 1] = params[args[index]];
            }
        }
        let compInstance = new (Function.prototype.bind.apply(ctor, ctorArgs));
        return compInstance;
    }
    private static getBySelector(selector: string) {
        if (!ComponentManager.components[selector.toLowerCase()]) {
            throw String.format("'{0}' component was not registered", selector);
        }
        return ComponentManager.components[selector.toLowerCase()];
    }
    public static register(selector, ctor) {
        if (ComponentManager.components[selector.toLowerCase()]) {
            throw String.format("there is another component already register with \'{0}\' selector", selector);
        }
        ComponentManager.components[selector.toLowerCase()] = ctor;
    }
}