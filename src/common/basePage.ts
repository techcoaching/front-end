import { RenderMode } from "../common/enum";
import domHelper from "../common/helpers/domHelper";
import { ConnectorFactory } from "../common/connector";
import { IConnector } from "../common/iconnector";
import { Const } from "../common/const";

export class BasePage {
    public title: string = "";
    public renderTo: string = "body";
    public controls: Array<any> = [];
    public renderMode: RenderMode = RenderMode.Append;

    private dom: any = null;
    private connector: IConnector;
    constructor() {
        this.connector = ConnectorFactory.create();
        this.init();
    }
    public get templateUrl(): string {
        let meta = window.Reflect.getMetadata(Const.DecoratorKey, this.constructor) || {};
        return meta["templateUrl"];
    }
    public init() {
    }
    // public addControl(control) {
    //     this.controls.push(control);
    // }
    public render(renderTo: string = "body") {
        this.renderTo = renderTo;
        var self = this;
        this.getHtml(self.templateUrl).then(function (html) {
            self.onHtmlReady(html);
        });
    }
    public onHtmlReady(html) {
        this.dom = window.jquery(html);
        domHelper.append(this.renderTo, this.dom);
        // this.controls.forEach((item) => {
        //     item.render();
        // });
        this.onRenderCompleted();
    }
    public getHtml(templateUrl) {
        return this.connector.get(templateUrl);
    }
    public onRenderCompleted() { }
    public bindEvent(selector, eventName, handler) {
        window.jquery(this.dom).find(selector).bind(eventName, handler);
    }
    public getElement(selector) {
        return this.dom.find(selector);
    }
}