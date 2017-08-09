export class ComponentManager {
    private static components: any = {};
    public static create(selector: string, id: string, params: any) {
        let ctor = ComponentManager.getBySelector(selector);
        let compInstance = new ctor(String.format("{0}#{1}", selector, id));
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