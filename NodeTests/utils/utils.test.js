const Utils = require('./utils');

it('Should sum two numbers', () => {
    let utils = new Utils();
    let res = utils.add(2, 3);

    if(res !== 5) 
        throw new Error(`Expected 5, but got ${res}`);
});

it('Should square a number', () => {
    let utils = new Utils();

    let res = utils.square(2);

    if(res !== 4)
        throw new Error(`Expected 4, but got ${res}`);
});