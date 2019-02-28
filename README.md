# getAllAfterFirst(value, array): any[]

Returns everything after the first instance of `value` in `array`. 
Does not modify `array`.

# getAllAfterLast(value, array): any[]

Returns everything after the last instance of `value` in `array`.  Does not modify `array`.

For both functions, `value` cannot be an object.  Arrays are OK.

## Examples
```
let arr = [1,2,3,4,2,3,4,5];
getAllAfterFirst(2, arr);
// --> [3,4,2,3,4,5]

getAllAfterLast(2, arr);
// --> [3,4,5]
```

## Installation
`npm i  @writetome51/array-get-all-after`


## Loading
```
// if using TypeScript:
import {getAllAfterFirst, getAllAfterLast} from '@writetome51/array-get-all-after'
    
// if using ES5 JavaScript:
var getAllAfterFirst = require('@writetome51/array-get-all-after').getAllAfterFirst;
var getAllAfterLast = require('@writetome51/array-get-all-after').getAllAfterLast;
```