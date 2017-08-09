import { BasePage } from "../common/basePage";
import { click } from "../common/decorator";
import { RouteNavigator } from "../common/route/routeNavigator";
import { page } from "../common/decorator";
import { Logo } from "./components/logo";
import { MainSlider } from "./components/mainSlider";

@page({
    templateUrl: "/src/pages/homePage.html"
})
export class HomePage extends BasePage<any> {
    protected init() {
        let slideData = [
            { photo: "/resources/images/iphone1.png", title: "Lorem Ipsum is simply", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { photo: "https://d3nevzfk7ii3be.cloudfront.net/igi/MqGZWCWTTRYMR5a5.large", title: "Lorem Ipsum is simply1", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { photo: "https://d3nevzfk7ii3be.cloudfront.net/igi/ipv5OG2NckM3DfE2.large", title: "Lorem Ipsum is simply2", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { photo: "https://i1.wp.com/asiajin.com/blog/wp-content/uploads/2011/10/iphone-4s.png?resize=460%2C315", title: "Lorem Ipsum is simply3", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
        ];
        new Logo(".header", "Prechu")
        //this.addControl(new Logo(".header", "Prechu"));
        this.addControl(new MainSlider(".content", slideData));
    }
    @click({ selector: ".test-page" })
    protected onPreviousClicked() {
        RouteNavigator.navigate("/test");
    }
}