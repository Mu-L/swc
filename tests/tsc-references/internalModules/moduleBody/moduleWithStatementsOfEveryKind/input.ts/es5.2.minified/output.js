function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : (function(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    })(self);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var Y1, _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
};
!function(A3) {
    var Module, Color, A1, Color1, A2 = function() {
        "use strict";
        _classCallCheck(this, A2);
    }, AA1 = function() {
        "use strict";
        _classCallCheck(this, AA1);
    }, B = function(AA) {
        "use strict";
        function B() {
            return _classCallCheck(this, B), _possibleConstructorReturn(this, _getPrototypeOf(B).apply(this, arguments));
        }
        return _inherits(B, AA), B;
    }(AA1), BB = function(A) {
        "use strict";
        function BB() {
            return _classCallCheck(this, BB), _possibleConstructorReturn(this, _getPrototypeOf(BB).apply(this, arguments));
        }
        return _inherits(BB, A), BB;
    }(A2);
    Module || (Module = {
    }), A1 = function() {
        "use strict";
        _classCallCheck(this, A1);
    }, (Color1 = Color || (Color = {
    }))[Color1.Blue = 0] = "Blue", Color1[Color1.Red = 1] = "Red";
}(A || (A = {
})), (function(Y) {
    var A5 = function() {
        "use strict";
        _classCallCheck(this, A5);
    };
    Y.A = A5;
    var AA2 = function() {
        "use strict";
        _classCallCheck(this, AA2);
    };
    Y.AA = AA2;
    var B = function(AA) {
        "use strict";
        function B() {
            return _classCallCheck(this, B), _possibleConstructorReturn(this, _getPrototypeOf(B).apply(this, arguments));
        }
        return _inherits(B, AA), B;
    }(AA2);
    Y.B = B;
    var A4, Color2, BB = function(A) {
        "use strict";
        function BB() {
            return _classCallCheck(this, BB), _possibleConstructorReturn(this, _getPrototypeOf(BB).apply(this, arguments));
        }
        return _inherits(BB, A), BB;
    }(A5);
    Y.BB = BB, Module || (Module = {
    }), A4 = function() {
        "use strict";
        _classCallCheck(this, A4);
    }, (Color2 = Color || (Color = {
    }))[Color2.Blue = 0] = "Blue", Color2[Color2.Red = 1] = "Red", Y.x = 12, Y.F = function(s) {
        return 2;
    }, Y.array = null, Y.fn = function(s) {
        return "hello " + s;
    }, Y.ol = {
        s: "hello",
        id: 2,
        isvalid: !0
    };
})(Y1 || (Y1 = {
}));
