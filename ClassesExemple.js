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
var Animale = /** @class */ (function () {
    function Animale(leNom) {
        this.nom = leNom;
    }
    Animale.prototype.deplacer = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.nom, " bouge de ").concat(distance, "m."));
    };
    Animale.prototype.toString = function () {
        return "Animale ".concat(this.nom);
    };
    return Animale;
}());
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(name, couleurPoil) {
        var _this = _super.call(this, name) || this;
        _this.couleurPoil = couleurPoil;
        return _this;
    }
    Chien.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " est un chien.";
    };
    return Chien;
}(Animale));
var billy = new Chien("Billy", "beige");
billy.deplacer(10);
console.log(billy.toString());
// Animale.deplacer(5) // marche avec les methodes statiques
