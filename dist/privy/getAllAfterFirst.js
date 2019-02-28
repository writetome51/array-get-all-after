"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_get_all_before_after_index_1 = require("@writetome51/array-get-all-before-after-index");
// Does not modify the passed array.
// Returns data copied from the array.
// 'value' cannot be object.
function getAllAfterFirst(value, array) {
    var index = array_get_indexes_1.getFirstIndexOf(value, array);
    return array_get_all_before_after_index_1._getAllAfterIndex(index, array);
}
exports.getAllAfterFirst = getAllAfterFirst;
