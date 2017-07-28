System.register(["../../common/basePage", "../../common/decorator", "./mainSliderModel", "../../common/enum"], function (exports_1, context_1) {
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
    var basePage_1, decorator_1, mainSliderModel_1, enum_1, MainSlider;
    return {
        setters: [
            function (basePage_1_1) {
                basePage_1 = basePage_1_1;
            },
            function (decorator_1_1) {
                decorator_1 = decorator_1_1;
            },
            function (mainSliderModel_1_1) {
                mainSliderModel_1 = mainSliderModel_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }
        ],
        execute: function () {
            MainSlider = (function (_super) {
                __extends(MainSlider, _super);
                function MainSlider(renderTo, items) {
                    if (renderTo === void 0) { renderTo = ""; }
                    var _this = _super.call(this, renderTo) || this;
                    _this.model = new mainSliderModel_1.MainSliderModel(items);
                    return _this;
                }
                MainSlider.prototype.onPreviousClicked = function () {
                    this.model.previous();
                    this.render(this.renderTo, enum_1.RenderMode.Replace);
                };
                MainSlider.prototype.onNextClicked = function () {
                    this.model.next();
                    this.render(this.renderTo, enum_1.RenderMode.Replace);
                };
                MainSlider.prototype.onSignUpClicked = function () {
                    console.log("On signup clicked", this.model.currentItem);
                };
                __decorate([
                    decorator_1.click({ selector: ".previous" }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], MainSlider.prototype, "onPreviousClicked", null);
                __decorate([
                    decorator_1.click({ selector: ".next" }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], MainSlider.prototype, "onNextClicked", null);
                __decorate([
                    decorator_1.click({ selector: ".button-signupnow" }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], MainSlider.prototype, "onSignUpClicked", null);
                MainSlider = __decorate([
                    decorator_1.page({
                        templateUrl: "/src/pages/components/mainSlider.html"
                    }),
                    __metadata("design:paramtypes", [String, Array])
                ], MainSlider);
                return MainSlider;
            }(basePage_1.BasePage));
            exports_1("MainSlider", MainSlider);
        }
    };
});
//# sourceMappingURL=mainSlider.js.map