import {getArgs, add} from './utils.ts';

main();

function main(){
const {a,b} = getArgs();

const result = add(a,b);


console.log(`${a} + ${b} = ${result}`);
}
