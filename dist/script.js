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
var Car = /** @class */ (function () {
    function Car(manufacturer, model, price, power, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.power = power;
        this.color = color;
    }
    Car.prototype.getManufacturer = function () {
        return this.manufacturer;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.getPrice = function () {
        return this.price;
    };
    Car.prototype.getPower = function () {
        return this.power;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setPrice = function (price) {
        this.price = price;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.setPower = function (power) {
        this.power = power;
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, price, power, color) {
        return _super.call(this, "Toyota", model, price, power, color) || this;
    }
    Toyota.prototype.start = function () {
        console.log("Starting ".concat(this.getManufacturer(), " ").concat(this.getModel(), " (").concat(this.getPrice(), "$, ").concat(this.getColor(), ")..."));
    };
    Toyota.prototype.stop = function () {
        console.log("Stopping ".concat(this.getManufacturer(), " ").concat(this.getModel(), " (").concat(this.getPrice(), "$, ").concat(this.getColor(), ")..."));
    };
    return Toyota;
}(Car));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, price, power, color) {
        return _super.call(this, "BMW", model, price, power, color) || this;
    }
    BMW.prototype.start = function () {
        console.log("Starting ".concat(this.getManufacturer(), " ").concat(this.getModel(), " (").concat(this.getPrice(), "$, ").concat(this.getColor(), ")..."));
    };
    BMW.prototype.stop = function () {
        console.log("Stopping ".concat(this.getManufacturer(), " ").concat(this.getModel(), " (").concat(this.getPrice(), "$, ").concat(this.getColor(), ")..."));
    };
    return BMW;
}(Car));
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(model, price, power, color) {
        return _super.call(this, "Mercedes", model, price, power, color) || this;
    }
    Mercedes.prototype.start = function () {
        console.log("Starting ".concat(this.getManufacturer(), " ").concat(this.getModel(), " (").concat(this.getPrice(), "$, ").concat(this.getColor(), ")..."));
    };
    Mercedes.prototype.stop = function () {
        console.log("Stopping ".concat(this.getManufacturer(), " ").concat(this.getModel(), " (").concat(this.getPrice(), "$, ").concat(this.getColor(), ")..."));
    };
    return Mercedes;
}(Car));
var m5e60 = new BMW("M5 E60", 100000, 250, "Black");
var x7 = new BMW("X7", 500000, 300, "White");
var c63 = new Mercedes("C63", 1000000, 460, "Gold");
var vito = new Mercedes("Vito", 200000, 150, "Matte Black");
var camry = new Toyota("Camry", 140000, 234, "Yellow");
var landCruiser200 = new Toyota("Land Cruiser 200", 250000, 300, "Blue");
m5e60.start();
m5e60.stop();
console.log("-------------------------------------");
x7.start();
x7.stop();
console.log("-------------------------------------");
c63.start();
c63.stop();
console.log("-------------------------------------");
vito.start();
vito.stop();
console.log("-------------------------------------");
camry.start();
camry.stop();
console.log("-------------------------------------");
landCruiser200.start();
landCruiser200.stop();
console.log("-------------------------------------");
