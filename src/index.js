import * as maths from './maths.js';

class Boombastic {
    getPhrase() {
        return "They call me mister boombastic";
    }
}

console.log(Array.from([1,2,3,4,5]));

const delay = (p) => new Promise((res, rej) => {
    setTimeout(() => {
        p.then(res, rej);
    }, 500);
});

delay(Promise.resolve('Hello')).then(console.log);

if (BUILD_TARGET === 'legacy') {
    console.log('Welcome to my app, old clunky mode');
}
if (BUILD_TARGET === 'modern') {
    console.log('Welcome to my app, modern edition');
}

console.log('These numbers add up to...', maths.sum(1,2,3,4))