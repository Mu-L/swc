function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var Bar = function() {
    "use strict";
    function Bar(d, param) {
        _classCallCheck(this, Bar), this.d = d, this.e = void 0 === param ? 10 : param, this.c = 2;
    }
    return _createClass(Bar, [
        {
            key: "f",
            value: function() {
                return 1;
            }
        },
        {
            key: "h",
            value: function() {
                return 2;
            }
        }
    ]), Bar;
}(), Base1 = function() {
    "use strict";
    _classCallCheck(this, Base1);
}, Derived = function(Base) {
    "use strict";
    function Derived() {
        var _this, self, call, obj;
        return _classCallCheck(this, Derived), self = this, call = _getPrototypeOf(Derived).apply(this, arguments), (_this = call && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        })(self)).a = 1, _this;
    }
    return !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass);
    }(Derived, Base), _createClass(Derived, [
        {
            key: "f",
            value: function() {
                return 1;
            }
        }
    ]), Derived;
}(Base1);
