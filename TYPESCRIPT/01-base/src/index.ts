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

const numerosONombres: (string | number)[] = [];

numerosONombres.push(5);
numerosONombres.push("Juan");

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

/* ------------------------------------ - ----------------------------------- */

// let a: unknown;

let a = 5
let b = 6

let c = a + b

/* ------------------------------------ - ----------------------------------- */

function saludar(name: string){
  // name.
  console.log(`Hola ${name}`);
}

// saludar(5)  //error

// function saludar2({ name: string, age: number }){
//   console.log(`Hola ${name}, tu edad es ${age}}`);
// }

function saludar2({ name, age }: { name: string; age: number }){
  console.log(`Hola ${name}, tu edad es ${age}}`);
}

saludar2({ name: 'Juan', age: 18 })

function saludar3(persona: { name: string; age: number }): string{
  const { name, age } = persona
  // console.log(`Hola ${name}, tu edad es ${age}}`);
  return `Hola ${name}, tu edad es ${age}}`
}

/* -------------------------------- callbacks ------------------------------- */

const functionTest = (cb: (name: string) => string) =>{ // ❌Function
  return cb('Carlos')
}

functionTest((name: string)=>{
  return`Hola ${name}`;
})

/* ---------------------------------- never --------------------------------- */

const throwError = (message: string): never => {
  throw new Error(message);
}

const usuario = {
  name: 'Juan',
  age: 45
}

// usuario.name = 6  //error

type UserType2 = {
  readonly id?: number;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  role?: string;
}

const usuario1: UserType2 = {
  first_name: "Juan",
  last_name: "Perez",
  email: "juan@mail.com",
  age: 40,
}

// usuario1.id = 3  //error TS
// usuario1.id?.toString()

/* ------------------------------- union types ------------------------------ */

let variable: string | number;

variable = 'Hola'
variable = 5
// variable = true  //error

type RoleUser = 'admin' | 'user' | 'super_admin'

type UserType3 = {
  readonly id?: number;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  role?: RoleUser;
}

const usuario2: UserType3 = {
  first_name: "Juan",
  last_name: "Perez",
  email: "juan@mail.com",
  age: 40,
  role: 'admin'
}

/* --------------------------- Intersection types --------------------------- */

type ProductInput = {
  name: string;
  description: string;
  price: number;
}

type ProductDB = {
  id: string;
}

type Product = ProductInput & ProductDB;

const createProduct = (body: ProductInput): Product => {
  const { name, description, price } = body;
  // --> registrar en la DB
  return {
    id: '1dsfsdfs23423fsdfsdf', //se asigna en la db
    name,
    description,
    price
  }
}

createProduct({ name: 'Prod1', description: 'description.....', price: 456 })

/* ------------------------------- Pick - Omit ------------------------------ */

type Product2 = Pick<Product, 'name' | 'price'>

/*
type Product2 = {
  name: string;
  price: number;
}
*/

type Product3 = Omit<Product, 'description'>

/*
type Product3 = {
  id: string;
  name: string;
  price: number;
}
*/

/* ----------------------------- Type from value ---------------------------- */

const cadenaDeTexto = 'hola'

console.log(typeof cadenaDeTexto) //'string'

const direccion = {
  calle: 'Mitre',
  numero: 1256
}

type Direccion = typeof direccion

const direccionUsuario: Direccion = {
  calle: 'Av. San Martin',
  numero: 4500
} 