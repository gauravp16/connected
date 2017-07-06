var Connected = require('findconnect');

var connected = new Connected(5);

connected.connect(1,2);
connected.connect(2,3);
connected.connect(5,6);
connected.connect(2,6);

console.log(connected.find(2,5));