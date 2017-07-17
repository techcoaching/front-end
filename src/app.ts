/// <reference path="extension.d.ts" />
import { HomePage } from "./pages/homePage";

window.jquery = window.$;
var homePage = new HomePage();
homePage.render("body");