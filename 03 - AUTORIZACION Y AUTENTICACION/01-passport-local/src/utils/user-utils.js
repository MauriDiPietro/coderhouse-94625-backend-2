import bcryptjs from "bcryptjs";

// console.log(bcryptjs.hashSync('1234', bcryptjs.genSaltSync(10)));
//$2b$10$pVyT.2omojRRjhvUxV9BEO5SQWeHGnKzAbIM0iLWweXUcEQMN99AK

// console.log(bcryptjs.compareSync('12345', '$2b$10$pVyT.2omojRRjhvUxV9BEO5SQWeHGnKzAbIM0iLWweXUcEQMN99AK'));

/**
 * Recibe un string y retorna el mismo hasheado
 * @param {string} password 
 * @returns {string} Resultado hasheado
 */
export const createHash = (password) => {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
};

/**
 * Compara texto plano con texto hasheado
 * @param {string} passewordPlain 
 * @param {string} passwordHash 
 * @returns {boolean} 
 */
export const isValidPass = (passewordPlain, passwordHash) => {
  return bcryptjs.compareSync(passewordPlain, passwordHash);
};
