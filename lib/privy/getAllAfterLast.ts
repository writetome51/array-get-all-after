import { getLastIndexOf } from '@writetome51/array-get-indexes';
import { _getAllAfterIndex }
	from '@writetome51/array-get-all-before-after-index';

// None of these functions modify the passed array.
// They all return data copied from the array.

// For all these functions, the parameter 'value' cannot be object.

export function getAllAfterLast(value: any, array): any[] {
	let index = getLastIndexOf(value, array);
	return _getAllAfterIndex(index, array);
}
