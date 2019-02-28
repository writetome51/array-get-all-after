import { getAllAfterFirst } from './getAllAfterFirst';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Test 1
let result = getAllAfterFirst(10, arr);
if (result.length === 20 && result[0] === 1 && result[9] === 10 &&
	result[19] === 10) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2
result = getAllAfterFirst(5, arr);
if (result.length === 25 && result[0] === 6 && result[14] === 10 &&
	result[24] === 10) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3:
if (arr.length === 30 && arr[0] === 1 && arr[9] === 10 && arr[19] === 10 && arr[29] === 10)
	console.log('test 3 passed');
else console.log('test 3 failed');


//Test 4: if value isn't in array, should trigger error:
let errorTriggered = false;
try {
	getAllAfterFirst('', arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: if second argument isn't array, should trigger error:
errorTriggered = false;
try {
	getAllAfterFirst('', 'hello everybody!!!');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: if first arg is not primitive or array, should trigger error:
errorTriggered = false;
try {
	getAllAfterFirst({}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 failed');