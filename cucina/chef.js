"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
var persona_1 = require("./persona");
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(n2, d2, mapa) {
        var _this = _super.call(this, n2, d2) || this;
        _this.experiencia = new Map;
        _this.experiencia = mapa;
        return _this;
    }
    Chef.prototype.getExperiencia = function () {
        return this.experiencia;
    };
    return Chef;
}(persona_1.Persona));
exports.Chef = Chef;
