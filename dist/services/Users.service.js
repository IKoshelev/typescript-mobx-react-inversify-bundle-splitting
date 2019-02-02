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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ioc = require("./../IoC/IoC-public");
var HttpClient_1 = require("./HttpClient");
var UsersService = /** @class */ (function () {
    function UsersService(httpClient) {
        this.httpClient = httpClient;
    }
    UsersService.prototype.getCurrentUser = function () {
        return Promise.resolve({
            name: "John",
            login: "jsmith"
        });
    };
    UsersService = __decorate([
        ioc.bindToSelf,
        __param(0, ioc.inject(HttpClient_1.HttpClient)),
        __metadata("design:paramtypes", [HttpClient_1.HttpClient])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=Users.service.js.map