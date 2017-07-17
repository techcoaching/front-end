import { BasePage } from "../../common/basePage";
import { page, click } from "../../common/decorator";
import { MainSliderModel } from "./mainSliderModel";

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
        console.log("onPreviousClicked");
        this.model.previous();
        this.render();
    }

    @click({ selector: ".next" })
    protected onNextClicked() {
        console.log("onNextClicked");
        this.model.next();
        this.render();
    }
}