class BasePage {
    constructor(renderTo = 'body') {
        this.title = "just sample page";
        this.renderTo = renderTo;
        this.renderMode = RenderMode.Append;
        this.controls = [];
        this.init();
    }
    init() {
    }
    addControl(control) {
        this.controls.push(control);
    }
    render() {
        var html = this.getHtml();
        this.dom=$(html);
        domHelper.append(this.renderTo, this.dom);
        this.controls.forEach((item) => {
            item.render();
        });
        this.onRenderCompleted();
    }
    onRenderCompleted(){}
    bindEvent(selector, eventName, handler){
        $(this.dom).find(selector).bind(eventName, handler);
    }
    getElement(selector){
        return this.dom.find(selector);
    }
}