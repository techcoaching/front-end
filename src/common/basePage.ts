import { RenderMode } from "../common/enum";
import domHelper from "../common/helpers/domHelper";
import { ConnectorFactory } from "../common/connector";
import { IConnector } from "../common/iconnector";
import { Const } from "../common/const";
import htmlHelper from "../common/helpers/compileHelper";
import { Events, Event } from "./event";
import componentHelper from "./helpers/componentHelper";
import { ComponentManager } from "./componentManager";

export interface IBasePage {
    myName: string;
}

export class BasePage<TModel> implements IBasePage {
    public myName: string = "this is temp name";
    public model: TModel;
    public title: string = "";
    public renderTo: string = "body";
    public controls: Array<any> = [];
    public renderMode: RenderMode = RenderMode.Append;
    private dom: any = null;
    private html: string = "";
    private connector: IConnector;
    constructor(renderTo: string = "body") {
        this.renderTo = renderTo;
        this.connector = ConnectorFactory.create();
        this.init();
    }
    public get events(): Events {
        let meta = window.Reflect.getMetadata(Const.DecoratorKey, this.constructor) || {};
        return meta["events"] || new Events();
    }
    public get templateUrl(): string {
        let meta = window.Reflect.getMetadata(Const.DecoratorKey, this.constructor) || {};
        return meta["templateUrl"];
    }
    protected init() {
    }
    public addControl(control) {
        this.controls.push(control);
    }
    public render(renderTo: string = "body", renderMode: RenderMode = RenderMode.Append) {
        if (!String.isNullOrWhiteSpace(renderTo)) {
            this.renderTo = renderTo;
        }
        this.renderMode = renderMode;
        var self = this;
        this.getHtml(self.templateUrl).then(function (html) {
            self.onHtmlReady(html);
        });
    }
    protected onRendering(): void { }
    public onHtmlReady(html) {
        this.html = html;
        this.onRendering();
        this.compileHtml();
        this.dom = window.jquery(this.html);
        domHelper.render(this.renderTo, this.dom, this.renderMode);
        this.loadChildsFromTemplate();
        this.controls.forEach((item) => {
            item.render(item.renderTo);
        });
        this.onRendered();
        this.bindEvents();
    }
    private loadChildsFromTemplate(): void {
        let self = this;
        //let components = this.dom.children(String.format("[tagName='{0}']", Const.ComponentPrefix))
        let components: Array<any> = this.dom.find("*").filter((index, item) => {
            return /^comp\-/i.test(item.nodeName);
        });
        if (!components.length || components.length <= 0) { return; }
        for (let index = 0; index < components.length; index++) {
            let component = components[index];
            if (String.isNullOrWhiteSpace(window.jquery(component).attr("id"))) {
                window.jquery(component).attr("id", String.format("comp_" + Guid.create()))
            }
            self.createChildFromDom(component);
        }
    }
    private createChildFromDom(component: any) {
        let tagName = window.jquery(component).prop("tagName");
        let id = window.jquery(component).attr("id");
        let params = this.getParamsFromDom(component);
        let compInstance = ComponentManager.create(tagName, id, params);
        this.addControl(compInstance);
    }
    private getParamsFromDom(dom: any) {
        let params = {};
        Object.toArray(dom.attributes).forEach((attr: any) => {
            if (!componentHelper.isValidAttribute(attr.name)) { return; }
            params[attr.name] = attr.value;
        });
        return params;
    }
    private bindEvents() {
        let events: Array<Event> = this.events.getEvents();
        let self = this;

        console.log("registered events:", events);
        events.forEach((event: Event) => {
            self.bindEvent(event.selector, event.name, function () {
                self[event.handler]();
            });
        });
    }
    private compileHtml() {
        this.html = htmlHelper.compile(this.html, this.model);
    }
    public getHtml(templateUrl) {
        return this.connector.get(templateUrl);
    }
    public onRendered() { }
    public bindEvent(selector, eventName, handler) {
        window.jquery(this.dom).find(selector).bind(eventName, handler);
    }
    public getElement(selector) {
        return this.dom.find(selector);
    }
}