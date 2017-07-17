class HomePage extends BasePage {
    constructor() {
        super("body", "");
    }
    init() {
        var slideData = [
            { photo: "/resources/images/iphone1.png", title: "Lorem Ipsum is simply", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { photo: "https://d3nevzfk7ii3be.cloudfront.net/igi/MqGZWCWTTRYMR5a5.large", title: "Lorem Ipsum is simply1", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { photo: "https://d3nevzfk7ii3be.cloudfront.net/igi/ipv5OG2NckM3DfE2.large", title: "Lorem Ipsum is simply2", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { photo: "https://i1.wp.com/asiajin.com/blog/wp-content/uploads/2011/10/iphone-4s.png?resize=460%2C315", title: "Lorem Ipsum is simply3", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
        ];
        //this.addControl(new Logo(".header"));
        //this.addControl(new MainSlide(".content", slideData));
    }
    // getHtml(){
    //     return `<div class="page">
    //         <div class="header"></div>
    //         <div class="content"></div>
    //         <div class="footer"></div>
    //     </div>`;
    // }
}
