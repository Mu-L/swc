function _slicedToArray(arr, i) {
    return (function(arr) {
        if (Array.isArray(arr)) return arr;
    })(arr) || (function(arr, i) {
        var _arr = [], _n = !0, _d = !1, _e = void 0;
        try {
            for(var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                _n || null == _i.return || _i.return();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    })(arr, i) || (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    })();
}
function _toConsumableArray(arr) {
    return (function(arr) {
        if (Array.isArray(arr)) {
            for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
            return arr2;
        }
    })(arr) || (function(iter) {
        if (Symbol.iterator in Object(iter) || "[object Arguments]" === Object.prototype.toString.call(iter)) return Array.from(iter);
    })(arr) || (function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    })();
}
var ref = [];
_slicedToArray(ref[0], 1)[0], _slicedToArray(_slicedToArray(ref[1], 1)[0], 1)[0];
var _undefined = _slicedToArray(void 0, 2);
_slicedToArray(_undefined[0], 1)[0], _slicedToArray(_slicedToArray(_undefined[1], 1)[0], 1)[0];
var ref1 = _slicedToArray([
    1,
    2,
    3
], 3);
ref1[0], ref1[1], ref1[2];
var temp = [
    1,
    2,
    3
], ref2 = _slicedToArray(_toConsumableArray(temp), 2);
ref2[0], ref2[1];
var ref3 = _slicedToArray(_toConsumableArray(temp), 2);
ref3[0], ref3[1];
var ref4 = _slicedToArray({
    2: !0
}, 3);
ref4[0], ref4[1], ref4[2];
