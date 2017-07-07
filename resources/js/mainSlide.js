class MainSlide extends BasePage {
    constructor(renderTo, data = []) {
        super(renderTo);
        this.items = data;
    }
    getHtml() {
        var html = `<div class="slide-main">
                        <a href="#previous" class="previous" title="Previous"><i class="icon-previous"></i></a>
                        <a href="#next" class="next" title="Next"><i class="icon-next"></i></a>
                        <div class="item">
                            <img class="photo" src="\resources\images\iphone1.png" />
                            <div class="summary">
                                <h3 class="title"></h3>
                                <p class="desc"></p>
                                <a class="button-signupnow" href="#" title="Sign up now">
                                    <i class="icon-check" ></i><span class="text">Sign up now</span>
                                </a>
                            </div>
                        </div>
                    </div>`;
        return html;
    }
    onRenderCompleted() {
        this.select(0);
        var self = this;
        this.bindEvent('.previous', 'click', () => { self.onPreviousClicked(); });
        this.bindEvent('.next', 'click', () => { self.onNextClicked(); });
        this.bindEvent('.button-signupnow', 'click', () => { self.onSignUpClicked(); });
    }
    onSignUpClicked(){
        console.log("onSignUpClicked");
    }
    onPreviousClicked() {
        this.select(this.itemIndex - 1);
    }
    onNextClicked() {
        this.select(this.itemIndex + 1);
    }
    select(index) {
        if (index < 0) { index = 0; }
        if (index > this.items.length - 1) { index = this.items.length - 1; }
        this.currentItem = this.items[index];
        this.itemIndex = index;
        this.bind(this.currentItem);
    }
    bind(item) {
        this.getElement(".photo").attr("src", item.photo);
        this.getElement(".title").html(item.title);
        this.getElement(".desc").html(item.desc);
    }
}