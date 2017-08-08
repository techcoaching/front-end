
import {RouteNavigator} from "../route/routeNavigator";
let router = {
    config: config,
};
export default router;
function config(routes: Array<any>) {
    if(!routes){
        return;
    }
    RouteNavigator.registerRoutes(routes);
}