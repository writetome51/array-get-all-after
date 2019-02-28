import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { _getAllAfterIndex } from '@writetome51/array-get-all-before-after-index';

// Does not modify the passed array.
// Returns data copied from the array.
// 'value' cannot be object.

export function getAllAfterFirst(value: any, array): any[] {
	let index = getFirstIndexOf(value, array);
	return _getAllAfterIndex(index, array);
}
