## Installation
npm install file-listener

## Usage
Connected allows to check if elements in different subsets are connected or not. Elements can represnt any object like friends in a social network or cities in a map. For example, if 1 and 2 are connected and 5 and 6 are connected and if 1 and 5 are connected, then all the elements are connected. It employs weighted union with path compression technique.

### Using Connected

The first step is to create a connected object.
```javascript
var Connected = require('./index.js');

var connected = new Connected(5);

connected.connect(1,2);
connected.connect(2,3);
connected.connect(5,6);
connected.connect(2,6);

connected.find(2,5);
```
## License
Licensed under MIT