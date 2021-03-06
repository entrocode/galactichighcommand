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
var core_1 = require('@angular/core');
var shared_1 = require('../shared');
var ship_1 = require('../ship');
var ScoresComponent = (function () {
    function ScoresComponent(userService, shipService) {
        this.userService = userService;
        this.shipService = shipService;
    }
    ScoresComponent.prototype.ngOnInit = function () {
    };
    ScoresComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            pipes: [shared_1.UserSort],
            selector: 'app-scores',
            templateUrl: 'scores.component.html',
            styleUrls: ['scores.component.css']
        }), 
        __metadata('design:paramtypes', [shared_1.UserService, ship_1.SpaceObjectService])
    ], ScoresComponent);
    return ScoresComponent;
}());
exports.ScoresComponent = ScoresComponent;
//# sourceMappingURL=scores.component.js.map