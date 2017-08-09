import { BasePage } from "../../common/basePage";
import { page } from "../../common/decorator";
import { LogoModel } from "./logoModel";

@page({
    selector: "comp-branch",
    templateUrl: "/src/pages/components/logo.html"
})
export class Logo extends BasePage<LogoModel> {
    constructor(renderTo: string = "", text: string = "empty text") {
        super(renderTo);
        this.model = new LogoModel(text);
    }
}