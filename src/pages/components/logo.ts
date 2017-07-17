import { BasePage } from "../../common/basePage";
import { page } from "../../common/decorator";
import { LogoModel } from "./logoModel";

@page({
    templateUrl: "/src/pages/components/logo.html"
})
export class Logo extends BasePage<LogoModel> {
    constructor(renderTo: string = "", text: string = "") {
        super(renderTo);
        this.model = new LogoModel(text);
    }
}