"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var inversify = require("inversify");
var IoC_private_1 = require("./IoC-private");
function bindToSelf(target) {
    inversify.injectable()(target);
    IoC_private_1.defaultContainer.bind(target).toSelf();
}
exports.bindToSelf = bindToSelf;
function getIocFactory(target) {
    return function () { return IoC_private_1.defaultContainer.resolve(target); };
}
exports.getIocFactory = getIocFactory;
__export(require("inversify"));
//# sourceMappingURL=IoC-public.js.map