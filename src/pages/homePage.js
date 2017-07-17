System.register(["../common/basePage", "../common/decorator", "./components/logo"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var basePage_1, decorator_1, logo_1, HomePage;
    return {
        setters: [
            function (basePage_1_1) {
                basePage_1 = basePage_1_1;
            },
            function (decorator_1_1) {
                decorator_1 = decorator_1_1;
            },
            function (logo_1_1) {
                logo_1 = logo_1_1;
            }
        ],
        execute: function () {
            HomePage = (function (_super) {
                __extends(HomePage, _super);
                function HomePage() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                HomePage.prototype.init = function () {
                    this.addControl(new logo_1.Logo(".header", "Prechu"));
                };
                HomePage = __decorate([
                    decorator_1.page({
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