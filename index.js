// let cat = {type: 'cat'}
// cat.size = 21;

// let copyCat = {...cat};
// cat.type = 'tiger';

// console.log(copyCat.type, copyCat.size); // cat 21


// var a = {name: 'athena'};

// function swap(f) {
//     f.name = 'wild';
//     f= {name: 'Tabby'};
// }
// swap(a);
// console.log(a.name); // wild



// if(true) {
//     var f = 'Yuo';
// }

// function ag() {
//     var d = ' You do';
// }

// ag();
// console.log(d);
// console.log(f);

// const o = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// const o2 = {
//     ...o,
//     a: 0
// }

// console.log(o2.a, o2.b); // 0, 2


// let bear = {
//     sound: 'roar',
//     roar() {
//         console.log(this.sound);
//     }
// }

// bear.sound = 'grunt';

// let bearSound = bear.roar;

// bearSound();

// bearSound.toJSON('roar')

// class a {
//     static min = 60;
// }

// let c = new a();
// a.min = 80;
// console.log(c.min);

// const x = 6 % 2;
// console.log(x);
// const y = x ? 'One' : 'Two';
// console.log(y);


let cat = {type: 'cat'}
cat.size = 21;

let copyCat = cat;
// cat.type = 'tiger';
copyCat.type = 'aga';

console.log(copyCat.type, copyCat.size); // cat 21
console.log(cat.type, cat.size); // cat 21

console.log(Object._proto)