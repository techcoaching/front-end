/// <reference path="extension.d.ts" />

import { RouteNavigator } from "./common/route/routeNavigator";
import router from "./common/helpers/routerHelper";
import routes from "./config/routes";
//import { HomePage } from "./pages/homePage";

window.jquery = window.$;
// var homePage = new HomePage();
// homePage.render("body");
router.config(routes);
RouteNavigator.navigate();