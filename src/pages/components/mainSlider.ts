import { BasePage } from "../../common/basePage";
import { page, click } from "../../common/decorator";
import { MainSliderModel } from "./mainSliderModel";
import { RenderMode } from "../../common/enum";
@page({
    templateUrl: "/src/pages/components/mainSlider.html"
})
export class MainSlider extends BasePage<MainSliderModel> {
    constructor(renderTo: string = "", items: Array<any>) {
        super(renderTo);
        this.model = new MainSliderModel(items);
    }
    @click({ selector: ".previous" })
    protected onPreviousClicked() {
        this.model.previous();
        this.render(this.renderTo, RenderMode.Replace);
    }

    @click({ selector: ".next" })
    protected onNextClicked() {
        this.model.next();
        this.render(this.renderTo, RenderMode.Replace);
    }

    @click({ selector: ".button-signupnow" })
    protected onSignUpClicked() {
        console.log("On signup clicked", this.model.currentItem);
    }
}