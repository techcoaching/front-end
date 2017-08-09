System.register(["../common/basePage", "../common/decorator", "../common/route/routeNavigator", "./components/logo", "./components/mainSlider"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var basePage_1, decorator_1, routeNavigator_1, decorator_2, logo_1, mainSlider_1, HomePage;
    return {
        setters: [
            function (basePage_1_1) {
                basePage_1 = basePage_1_1;
            },
            function (decorator_1_1) {
                decorator_1 = decorator_1_1;
                decorator_2 = decorator_1_1;
            },
            function (routeNavigator_1_1) {
                routeNavigator_1 = routeNavigator_1_1;
            },
            function (logo_1_1) {
                logo_1 = logo_1_1;
            },
            function (mainSlider_1_1) {
                mainSlider_1 = mainSlider_1_1;
            }
        ],
        execute: function () {
            HomePage = (function (_super) {
                __extends(HomePage, _super);
                function HomePage() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                HomePage.prototype.init = function () {
                    var slideData = [
                        { photo: "/resources/images/iphone1.png", title: "Lorem Ipsum is simply", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                        { photo: "https://d3nevzfk7ii3be.cloudfront.net/igi/MqGZWCWTTRYMR5a5.large", title: "Lorem Ipsum is simply1", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                        { photo: "https://d3nevzfk7ii3be.cloudfront.net/igi/ipv5OG2NckM3DfE2.large", title: "Lorem Ipsum is simply2", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
                        { photo: "https://i1.wp.com/asiajin.com/blog/wp-content/uploads/2011/10/iphone-4s.png?resize=460%2C315", title: "Lorem Ipsum is simply3", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
                    ];
                    new logo_1.Logo(".header", "Prechu");
                    this.addControl(new mainSlider_1.MainSlider(".content", slideData));
                };
                HomePage.prototype.onPreviousClicked = function () {
                    routeNavigator_1.RouteNavigator.navigate("/test");
                };
                __decorate([
                    decorator_1.click({ selector: ".test-page" }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], HomePage.prototype, "onPreviousClicked", null);
                HomePage = __decorate([
                    decorator_2.page({
                        templateUrl: "/src/pages/homePage.html"
                    })
                ], HomePage);
                return HomePage;
            }(basePage_1.BasePage));
            exports_1("HomePage", HomePage);
        }
    };
});
//# sourceMappingURL=homePage.js.map