import {BasePage} from "../common/basePage";
import {page} from "../common/decorator";
@page({
    templateUrl:"/src/pages/testPage.html"
})
export class TestPage extends BasePage<any>{}