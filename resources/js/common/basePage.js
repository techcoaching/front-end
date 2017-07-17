class BasePage {
    constructor(renderTo = 'body', templateUrl = "") {
        this.title = "just sample page";
        this.renderTo = renderTo;
        this.renderMode = RenderMode.Append;
        this.controls = [];
        if (templateUrl != "") {
            this.templateUrl = templateUrl;
        }
        this.init();
    }
    init() {
    }
    addControl(control) {
        this.controls.push(control);
    }
    render() {
        var self = this;
        this.getHtml(this.templateUrl).then(function (html) {
            self.onHtmlReady(html);
        });
    }
    onHtmlReady(html) {
        this.dom = $(html);
        domHelper.append(this.renderTo, this.dom);
        this.controls.forEach((item) => {
            item.render();
        });
        this.onRenderCompleted();
    }
    getHtml(templateUrl) {
        return httpConnector.get(templateUrl);
    }
    onRenderCompleted() { }
    bindEvent(selector, eventName, handler) {
        $(this.dom).find(selector).bind(eventName, handler);
    }
    getElement(selector) {
        return this.dom.find(selector);
    }
}