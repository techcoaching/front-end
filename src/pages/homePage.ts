import { BasePage } from "../common/basePage";
import { page } from "../common/decorator";
import { Logo } from "./components/logo";

@page({
    templateUrl: "/src/pages/homePage.html"
})
export class HomePage extends BasePage<any> {
    protected init() {
        this.addControl(new Logo(".header","Prechu"));
    }
}