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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CurrentUser_vm_1 = require("./CurrentUser.vm");
var IoC_public_1 = require("./../IoC/IoC-public");
var vm = IoC_public_1.getIocFactory(CurrentUser_vm_1.CurrentUserVM)();
/* interface ICurrentUserComponentProps {
    vm: CurrentUserMM
} */
var CurrentUserComponent = /** @class */ (function (_super) {
    __extends(CurrentUserComponent, _super); /* <ICurrentUserComponentProps> */
    function CurrentUserComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(props:ICurrentUserComponentProps) {
    //     super(props);
    //     this.state = {};
    // }
    CurrentUserComponent.prototype.render = function () {
        //const vm = this.props.vm;
        return React.createElement("div", null,
            !vm.currentUser && "Not loaded",
            vm.currentUser && (React.createElement("div", null,
                "Current user:",
                React.createElement("div", null, vm.currentUser.name))));
    };
    return CurrentUserComponent;
}(React.Component /* <ICurrentUserComponentProps> */));
exports.CurrentUserComponent = CurrentUserComponent;
//# sourceMappingURL=CurrentUser.component.js.map