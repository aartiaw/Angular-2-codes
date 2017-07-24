"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ThirdComponent = (function () {
    function ThirdComponent(router) {
        this.router = router;
    }
    ThirdComponent.prototype.onClick = function (value) {
        this.router.navigate(['/fourth', value]);
    };
    return ThirdComponent;
}());
ThirdComponent = __decorate([
    core_1.Component({
        selector: 'thrid-comp',
        template: "<h2>Third component</h2>\n            Message: <input type=\"text\" #message><br>\n            <input type=\"button\" value=\"GO\" (click)=\"onClick(message.value)\">",
        styles: ['h2 {color: red}']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ThirdComponent);
exports.ThirdComponent = ThirdComponent;
//# sourceMappingURL=third.component.js.map