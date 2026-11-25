// Functions are Objects
function uche (a, b) {
    return a + b 
}
uche (5, 7)

uche.call(null, 2, 3)
console.log(uche);

// Value vs Reference Types
// value type
let a = 10;
let b = a;
b = 20;
console.log(a); // 10,unchanged

// Refrence type
let x ={
    score:10
};

let c = ['mono', 'poly'];

//  Enumerating Properties of an Object
const car = { brand: 'Toyota', year: 2026, color: 'Deep Blue' };
for (let key in car) {
  console.log(key, car[key]);
}

// Cloning an Object
const original = {
    name: 'Ada',
    address: { city: 'Awka' }
};


function greet(name) {
    return 'hey ' + name + ' how are ypu doing?'
}
console.log(greet("solomon"));

// Ways to write a function
// 1. Declaration
function square(n) {
    return n*n;
};
square(5)

// 2. Expression
const add = function (n){
    return n * n * n;
};
add(5)

//3. Arrow 
// const btnEl = document.getElementById('btn')
// btnEl.addEventListener('click', ()=>{

// })
const double = (n)=> {
    const type = n % 2 === 0 ? 'even' : 'odd';
    return `${n} is ${type};`
};
console.log(square(5), add(2), double(7),)

// Parameter superpowers
// Default value: qty = 1, this is used when nothing is passed into the parameter
// Rest: ...nums, collect any number of arguement into an array
// spread: ...array, unpacks an array into seperate values
// Destructuring:({name, city}) pul properties straight out of an object

// Default value
function order(items, qty = 1){
    return `${qty} x ${items}`;
}
console.log(order('suya'));

// scope & closure
// scope means where a variable can be seen. {} let or const

const app = 'My App'; //global scope

function outer() {
    const secret = 'key'; //function scope

    if (true) {
        let blockVar = 'block'; //block function
        console.log(blockVar)
    }
}

// Hoisting: 
console.log(hello());
function hello(){
    return ' Hoisted'
}

const bye = () => 'not ma'
console.log(bye());

function doTwice(action) {
    action()
    action()
}
doTwice (() => console.log('clap'))

const product = [
    {name: 'sneakers', price: 25000, inStock:true},
    {name: 'cap', price: 5000, inStock:false},
    {name: 'Hoodie', price: 2000, inStock:true}
];
product.forEach((P) => console.log('.',P.name))




// DOM manipulatiom : Document Object Model 
// methods of DOM
// document.querySelector(css)
// document.querySelectorAll(css)
// document.getElementById('id')

const title = document.getElementById('title');
const firstEvent = document.querySelector('.event');
const allEvent = document.querySelectorAll('.event');
const hot = document.querySelector('.events .hot');

title.textContent = ('Naps JS class in session')

firstEvent.style.color = 'crimson'

// Changing content we use; textContent, innerHTML and value

const msg = document.getElementById('msg')
const box = document.querySelector('#box')
const input = document.querySelector('#name')
msg.textContent = 'We gone fuck tonight'
box.innerHTML = '<strong>Bold</strong> and <i>italic</i> via HTML'
input.value = 'change by tunubu'


// =========================================  ASYNC FUNCTION
console.log('start');
setTimeout(() => console.log('five second'), 10000);

// creating a promise
function cookJollof() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const burnt = Math.random() < 0.3; 
            burnt ? reject(new Error('Burnt')) : resolve('Jollof ready');
        }, 3000)
    });
}


async function dinner() {
    try {
        const food = await cookJollof(); // wait here
        console.log(food);
    }catch (err){
        console.log('oops:', err.message);
    }finally{
        console.log('kitchen closed')
    }
}
dinner();

const boxEl = document.getElementById('card')
const btnToggle = document.getElementById('toggle')

btnToggle.addEventListener("click", () =>{
 boxEl.classList.toggle('dark')
})

