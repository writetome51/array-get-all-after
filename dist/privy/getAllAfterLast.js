"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_get_all_before_after_index_1 = require("@writetome51/array-get-all-before-after-index");
// None of these functions modify the passed array.
// They all return data copied from the array.
// For all these functions, the parameter 'value' cannot be object.
function getAllAfterLast(value, array) {
    var index = array_get_indexes_1.getLastIndexOf(value, array);
    return array_get_all_before_after_index_1._getAllAfterIndex(index, array);
}
exports.getAllAfterLast = getAllAfterLast;
