import { BasePage } from "../common/basePage";
import {page} from "../common/decorator";

@page({
    templateUrl: "/src/pages/homePage.html"
})
export class HomePage extends BasePage {
    constructor() {
        super()
        console.log("templateUrl:", this.templateUrl);
    }
}