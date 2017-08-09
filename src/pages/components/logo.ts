import { BasePage } from "../../common/basePage";
import { page, inline } from "../../common/decorator";
import { LogoModel } from "./logoModel";

@inline
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