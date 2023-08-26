let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

//Using any but you should avoid it
let level;

//Arrays
let numbers: number[] = [1, 2, 3];
numbers.forEach((n) => n * 2);

//tuples
// 1, "Dipankar"
//fixed string
let user: [number, string] = [1, "Dipankar"];

//ENUMS
enum Size {
  small = 1,
  medium = 2,
  large = 3,
}
let mySize: Size = Size.medium;
console.log(mySize);

//functions
function calculateTax(income: number, taxYear?: number): number {
  return (income += income + (taxYear || 303));
}

calculateTax(4000);

//Objects
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Dipankar",
  retire: (date: Date) => {
    console.log(date);
  },
};
