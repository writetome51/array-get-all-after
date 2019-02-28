import { getLastIndexOf } from '@writetome51/array-get-indexes';
import { _getAllAfterIndex }
	from '@writetome51/array-get-all-before-after-index';

// Does not modify the passed array.
// Returns data copied from the array.
// 'value' cannot be object.

export function getAllAfterLast(value: any, array): any[] {
	let index = getLastIndexOf(value, array);
	return _getAllAfterIndex(index, array);
}
