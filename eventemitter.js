// const EventEmitter = require('node:events');
// const ee = new EventEmitter();
// ee.on('something', async (value) => {
//   throw new Error('kaboom');
// });


// const EventEmitter = require('events');
 
// class MyEmitter extends EventEmitter {}

// const myEmitter = MyEmitter();
// myEmitter.on('something',()=>{
//     console.log('an event occured');

// }
// );


// myEmitter.emit('event');


import { EventEmitter } from 'node:events';
const ee = new EventEmitter();
ee.on('greatness',  ()=> {
    //throw new Error('kaboom');
    console.log('an event occured');

    setTimeout(() => {
       console.log('turn off overthinking') 
    }, 3000);
});


console.log("hi this is running");


ee.emit('greatness');