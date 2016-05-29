'use strict';

let sumArgv = (args) => {
	args.splice(0, 2);
	return args.reduce((a, b) => Number(a) + Number(b), 0);
};

console.log(sumArgv(process.argv));
