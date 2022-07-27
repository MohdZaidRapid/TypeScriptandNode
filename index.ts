// NUMBER TYPE
// let age = 24;

// let weight: number = 170;

// weight = 180;
// weight = 160;
// weight = true;
// weight = "160";

// age = 160;
// age = 34;
// age = "25";

// // TYPE STRING

// let myName = "Mohd Zaid";
// let myDogName: string = "doggy";

// myName = true;
// myName = "Laith Harb".length;
// myName = "Latiht Harb".length === 0;

// // TYPE BOOLEAN
// let isAwesome = false;
// let isAwesome2 = "Latiht Harb".length === 0;
// let isBoring: boolean = true;

// let height = 160;

// height = "200";

// let height2: number = 120;

// height2 = "200";

// let amount: number | string = 120;

// amount = 120;
// amount = "Zaid";
// amount = true;
// amount = [];
// amount = {};

// Objects
// const obj = {
//   firstName: "Laith",
//   lastName: "Harb",
//   phone: "222-2222-2222",
//   age: 24,
//   gender: false,
// };

// const obj2: {
//   firstName: string;
//   lastName: string;
//   phone: string;
//   age: number;
//   gender: boolean;
// } = {
//   firstName: "",
//   lastName: "",
//   phone: "",
//   age: 23,
//   gender: true,
// };

// obj2.age = 34;
// obj2.age = true;

// obj2.name;

// obj2.phone.length;
// // obj2.age.length;

// ARRAYS

// const arrayOfString: (string | boolean)[] = ["string1", "string2", "string3"];
// const arrayOfString = ["string1", "string2", "string3"];

// arrayOfString.push("string4");

// // arrayOfString.push(true);

// const arrayOfBooleans: boolean[] = [true, false, true, false];
// arrayOfBooleans.push(true);

// const arrayOfNumebers = [1, 2, 3, 4, 5, 6];

// const array: string[] = [];

// array.push(true);
// array.push("");
// array.push(5);

// // let arrayOfObject: {}[] = [{ das: "das" }];

// let arrayOfObject: {
//   name: String;
//   age: Number;
//   gender: boolean;
// }[] = [];

// arrayOfObject.push({
//   name: "",
//   age: 2,
//   gender: true,
// });

// const arrayOfArrays = [
//   ["", "", ""],
//   ["", ""],
// ];

// const arrayOfArraysOfArrays: string[][][] = [[["red"]]];

// FUNCTION

// const add = (num1, num2) => {
//   return num1 + num2;
// };

// add(true, null);

// const subtract = (num1: number, num2: number) => {
//   return num1 - num2;
// };

// // subtract(23, 23);

// const compare = (num1: number, num2: number): boolean => {
//   return num1 > num2;
// };

// const log = (): void => {
//   console.log("hello");
// };

// Union Type

// let numberOrString = "Mohd Zaid";

// numberOrString = "Lean James";

// numberOrString = 23;

// // Union type

// let numberOrString2: string | number | boolean | undefined | null = "Mohd Zaid";

// numberOrString2 = 4;
// numberOrString2 = true;

// let array: (string | number | null | undefined)[] = ["", 4, null, undefined];

// let object: {
//   hello: string | number;
// };

/////////////////////////////////////////

// let rainbowColors: "red" | "orange" | "yellow" | "blue" | "indigo" | "violet" =
//   "red";
// rainbowColors = "orange";

// rainbowColors = "red";

// // Enums

// enum RainbowTypes {
//   RED,
//   ORANGE,
//   YELLOW,
//   BLLUE,
//   INDIGO,
//   VIOLET,
// }

// let rainbowColors2: RainbowTypes = RainbowTypes.RED;

// let obj: {
//   property: string;
//   property2?: string;
// } = {
//   property: "",
//   property2: "",
// };

// Interfaces

// const obj: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   gender: boolean;
// } = {
//   firstName: "Laith",
//   lastName: "Zaid",
//   age: 24,
//   gender: false,
// };

// const obj2: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   gender: boolean;
// } = {
//   firstName: "Laith",
//   lastName: "Zaid",
//   age: 24,
//   gender: false,
// };

// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
//   gender: boolean;
// }

// const obj3: Person = {
//   firstName: "Laith",
//   lastName: "Zaid",
//   age: 24,
//   gender: false,
// };

// const obj4: Person = {
//   firstName: "Laith",
//   lastName: "Zaid",
//   age: 24,
//   gender: false,
// };

// type PersonType = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   gender: boolean;
// };

// const obj5: PersonType = {
//   firstName: "Laith",
//   lastName: "Zaid",
//   age: 24,
//   gender: false,
// };

// type PersonType4 = string;

// const obj6: PersonType4 = "zaid";

// type PersonType2 = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   gender: boolean;
// }[];

// const obj7: PersonType2 = [
//   {
//     firstName: "Laith",
//     lastName: "Zaid",
//     age: 24,
//     gender: false,
//   },
// ];

// class And Object

// class Car {
//   model: string;
//   color: string;
//   age: number;
//   private peopleInPolicy: string[] = [];
//   private readonly manufactorDate: string = "2019-01-01";
//   constructor(model, color, age) {
//     this.model = model;
//     this.color = color;
//     this.age = age;
//     // this.peopleInPolicy = [];
//   }
//   describe() {
//     console.log(`a ${this.age} year old ${this.color} ${this.model}`);
//   }
//   addToPolicy(name: string) {
//     // sadas
//     this.peopleInPolicy.push(name);
//   }

//   getPolicy() {
//     console.log(this.peopleInPolicy);
//     myJaguar.manufactorDate;
//   }
// }

// const myJaguar = new Car("jaguar", "green", 2);

// myJaguar.addToPolicy("laith");
// myJaguar.age = 6;
// // myJaguar.manufactorDate;
// myJaguar.getPolicy();

class Vehicle {
  //   color: string;
  //   age: number;
  private peopleInPolicy: string[] = [];
  private readonly manufactorDate: string = "2019-01-01";
  constructor(public model: string, public color: string, public age: number) {
    // this.color = color;
    // this.age = age;
    // this.peopleInPolicy = [];
  }
  describe() {
    console.log(`a ${this.age} year old ${this.color} ${this.model}`);
  }
  addToPolicy(name: string) {
    // sadas
    this.peopleInPolicy.push(name);
  }

  getPolicy() {
    console.log(this.peopleInPolicy);
    // myJaguar.manufactorDate;
  }
}

const myJag = new Vehicle("jaguar", "green", 3);

myJag.addToPolicy("Laith");
myJag.getPolicy();
