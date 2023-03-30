abstract class Car {
    private readonly manufacturer: string;
    private readonly model: string;
    private price: number;
    private power: number;
    private color: string;
  
    constructor(manufacturer: string, model: string, price: number, power: number, color: string) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.price = price;
      this.power = power;
      this.color = color;
    }
  
    public abstract start(): void;
    public abstract stop(): void;

    public getManufacturer(): string {
        return this.manufacturer;
      }
    public getModel(): string {
      return this.model;
    }
    public getPrice(): number {
      return this.price;
    }
    public getPower(): number {
      return this.power;
    }
    public getColor(): string {
      return this.color;
    }
    public setPrice(price:number){
        this.price = price;
    }
    public setColor(color:string){
        this.color = color;
    }
    public setPower(power:number){
        this.power = power;
    }
  }



  class Toyota extends Car {
    constructor(model: string, price: number, power: number, color: string) {
      super("Toyota", model, price, power, color);
    }
  
    public start(): void {
      console.log(`Starting ${this.getManufacturer()} ${this.getModel()} (${this.getPrice()}$, ${this.getColor()})...`);
    }
  
    public stop(): void {
      console.log(`Stopping ${this.getManufacturer()} ${this.getModel()} (${this.getPrice()}$, ${this.getColor()})...`);
    }
  }
  


  class BMW extends Car {
    constructor(model: string, price: number, power: number, color: string) {
      super("BMW", model, price, power, color);
    }
  
    public start(): void {
      console.log(`Starting ${this.getManufacturer()} ${this.getModel()} (${this.getPrice()}$, ${this.getColor()})...`);
    }
  
    public stop(): void {
      console.log(`Stopping ${this.getManufacturer()} ${this.getModel()} (${this.getPrice()}$, ${this.getColor()})...`);
    }
  
  }
  


  class Mercedes extends Car {
    private type: string;
  
    constructor(model: string, price: number, power: number, color: string) {
      super("Mercedes", model, price, power, color);
    }
  
    public start(): void {
      console.log(`Starting ${this.getManufacturer()} ${this.getModel()} (${this.getPrice()}$, ${this.getColor()})...`);
    }
  
    public stop(): void {
      console.log(`Stopping ${this.getManufacturer()} ${this.getModel()} (${this.getPrice()}$, ${this.getColor()})...`);
    }

  }


let m5e60:BMW = new BMW("M5 E60",100000,250,"Black");
let x7:BMW = new BMW("X7",500000,300,"White");

let c63:Mercedes = new Mercedes("C63",1000000,460,"Gold");
let vito:Mercedes = new Mercedes("Vito",200000,150,"Matte Black");

let camry:Toyota = new Toyota("Camry",140000,234,"Yellow");
let landCruiser200:Toyota = new Toyota("Land Cruiser 200",250000,300,"Blue");

m5e60.start();
m5e60.stop();
console.log("-------------------------------------")

x7.start();
x7.stop();
console.log("-------------------------------------")

c63.start();
c63.stop();
console.log("-------------------------------------")

vito.start();
vito.stop();
console.log("-------------------------------------")

camry.start();
camry.stop();
console.log("-------------------------------------")

landCruiser200.start();
landCruiser200.stop();
console.log("-------------------------------------")


