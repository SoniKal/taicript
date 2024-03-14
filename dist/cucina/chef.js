"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const persona_1 = require("./persona");
class Chef extends persona_1.Persona {
    constructor(n2, d2, mapa) {
        super(n2, d2);
        this.experiencia = new Map;
        this.experiencia = mapa;
    }
    getExperiencia() {
        return this.experiencia;
    }
}
exports.Chef = Chef;
