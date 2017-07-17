import { RenderMode } from "../common/enum";
import domHelper from "../common/helpers/domHelper";
import { ConnectorFactory } from "../common/connector";
import { IConnector } from "../common/iconnector";
import { Const } from "../common/const";
import htmlHelper from "../common/helpers/compileHelper";

export class BasePage<TModel> {
    protected model: TModel = null;
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
    public get templateUrl(): string {
        let meta = window.Reflect.getMetadata(Const.DecoratorKey, this.constructor) || {};
        return meta["templateUrl"];
    }
    protected init() {
    }
    public addControl(control) {
        this.controls.push(control);
    }
    public render(renderTo: string = "body") {
        if (!String.isNullOrWhiteSpace(renderTo)) {
            this.renderTo = renderTo;
        }
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
        domHelper.append(this.renderTo, this.dom);
        this.controls.forEach((item) => {
            item.render(item.renderTo);
        });
        this.onRendered();
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