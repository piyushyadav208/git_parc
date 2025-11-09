
import { greet, sum } from './utils.js';
import users from '../data/users.json' assert { type: 'json' };

console.log(greet('developer'));
console.log('2 + 3 =', sum(2, 3));
console.log('Users loaded:', users.length);
