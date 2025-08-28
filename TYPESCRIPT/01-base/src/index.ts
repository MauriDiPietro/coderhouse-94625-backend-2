const hola = (name: string): string => {
  return `Hola ${name}`;
};

console.log(hola("Carlos"));

/* ------------------------------------ - ----------------------------------- */

let myFirstVar: number | boolean;

myFirstVar = true;
myFirstVar = 5;
// myFirstVar = 'sdf'   Error
/* ------------------------------------ - ----------------------------------- */
const hola2 = (name: string): void => {
  console.log(`Hola ${name}`);
};

/* ------------------------------------ - ----------------------------------- */

interface User {
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  role?: string;
}

type UserType = {
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  role?: string;
};

const user: User = {
  first_name: "Juan",
  last_name: "Perez",
  email: "juan@mail.com",
  age: 40,
};

/* ------------------------------------ - ----------------------------------- */

const array: Array<number> = [1, 2, 3, 5, 6];

const array2: number[] = [1, 2, 3, 5, 6];

/* ------------------------------------ - ----------------------------------- */

class MyClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const myClass = new MyClass("Juan", 18);

/* ------------------------------------ - ----------------------------------- */

enum Lenguajes {
  JAVASCRIPT = "JavaScript",
  PYTHON = "Python",
  JAVA = "Java",
}

const user2 = {
  first_name: "Juan",
  last_name: "Perez",
  email: "juan@mail.com",
  age: 40,
  languages: [Lenguajes.JAVA, Lenguajes.JAVASCRIPT, Lenguajes.PYTHON],
};
