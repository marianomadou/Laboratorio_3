"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad, email, sexo) {
            this.nombre = nombre;
            this.email = email;
            this.apellido = apellido;
            this.edad = edad;
            this.sexo = sexo;
        }
        Persona.prototype.toJSON = function () {
            var json = "{\"nombre\":\"" + this.nombre + "\", \"apellido\":\"" + this.apellido + "\", \"edad\":\"" + this.edad + "\", \"email\":\"" + this.email + "\", \"sexo\":\"" + this.sexo + "\", \"id\":" + this.id + ", \"cargo\":\"" + this.cargo + "\"}";
            return json;
        };
        return Persona;
    }());
    Clases.Persona = Persona;
    var Legislador = /** @class */ (function (_super) {
        __extends(Legislador, _super);
        function Legislador(nombre, apellido, edad, email, sexo, id, cargo) {
            var _this = this;
            _this.id = id;
            _this = _super.call(this, nombre, apellido, edad, email, sexo) || this;
            _this.cargo = cargo;
            return _this;
        }
        Legislador.prototype.toJSON = function () {
            var cad = _super.prototype.toJSON.call(this).replace('}', '');
            var json = cad + (", \"id\":" + this.id + ", \"cargo\":\"" + this.cargo + "\"}");
            return json;
        };
        return Legislador;
    }(Persona));
    Clases.Legislador = Legislador;
    var tipoCargo;
    (function (tipoCargo) {
        tipoCargo[tipoCargo["Diputado"] = 0] = "Diputado";
        tipoCargo[tipoCargo["Senador"] = 1] = "Senador";
    })(tipoCargo = Clases.tipoCargo || (Clases.tipoCargo = {}));
})(Clases || (Clases = {}));
