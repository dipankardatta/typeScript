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
user.push(1);
