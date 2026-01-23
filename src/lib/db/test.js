import bcrypt from 'bcryptjs';

const password = '123456';
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log('Password:', password);
console.log('Hash:', hashedPassword);
