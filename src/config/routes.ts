
import { HomePage } from "../pages/homePage";
import {TestPage} from "../pages/testPage";
let routes = [
    { path: "/", page: HomePage, isDefault: true },
    { path: "/test", page: TestPage }
];
export default routes;