export class Events {
    private items: Array<Event> = [];
    public add(ev: Event) {
        this.items.push(ev);
    }
    public getEvents(): Array<Event> {
        return this.items;
    }
}
export class Event {
    public name: string = "";
    public selector: string = "";
    public handler: any = null;
    constructor(name: string, selector: string, handler: any) {
        this.name = name;
        this.selector = selector;
        this.handler = handler;
    }
}