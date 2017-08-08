import pageHelper from "../helpers/pageHelper";
export class RouteNavigator {
    public static routes: Array<any> = [];
    public static renderTo: string = "router";
    public static registerRoutes(routes: Array<any>) {
        RouteNavigator.routes = routes.concat(RouteNavigator.routes);
    }
    public static navigate(url: string = ""): void {
        let page = RouteNavigator.getPageByUrl(url);
        pageHelper.render(RouteNavigator.renderTo, page);
    }
    public static getPageByUrl(url: string) {
        let route = RouteNavigator.routes.firstOrDefault((routeItem: any) => {
            return (String.isNullOrWhiteSpace(url) && routeItem.isDefault == true) || (routeItem.path == url);
        });
        if (!route) {
            throw String.format("path '{0}' was not registered.");
        }
        return route.page;
    }
}