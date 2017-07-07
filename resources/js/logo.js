class Logo extends BasePage {
    constructor(renderTo, text = "Prechu") {
        super(renderTo);
        this.text = text;
    }
    getHtml() {
        return String.format('<div class="logo"><i class="icon-logo">&nbsp;</i><h1 class="text">{0}</h1></div>', this.text);
    }
}