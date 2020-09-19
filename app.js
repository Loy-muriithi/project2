const EventEmitter = require('events');
const EventEmitter = new EventEmitter();

eventEmitter.on('tutorial',()=>{
   console.log('tutorial event has occurred');
});