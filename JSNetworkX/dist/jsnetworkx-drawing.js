(function(global, factory) {
    function extractNS() {
        var g = {};
        return factory.call(g, global), g.jsnx;
    }
    if (typeof define === 'function' && define.amd) { /*AMD*/
        define(extractNS);
    } else if (typeof module !== 'undefined' && module.exports) { /*node*/
        module.exports = extractNS();
    } else {
        factory.call(global, global);
    }
}(this, function(window) {
    function g(a) {
        throw a;
    }
    var k = void 0,
        l = !0,
        m = null,
        n = !1;

    function aa(a) {
        return function() {
            return a
        }
    }
    var p, ba = this;

    function ea() {}

    function r(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
            else
        if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function s(a) {
        return a !== k
    }

    function fa(a) {
        return "array" == r(a)
    }

    function t(a) {
        var b = r(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function u(a) {
        return "string" == typeof a
    }

    function ga(a) {
        return "boolean" == typeof a
    }

    function ha(a) {
        return "function" == r(a)
    }

    function ia(a) {
        var b = typeof a;
        return "object" == b && a != m || "function" == b
    }
    var ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ka = 0;

    function la(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ma(a, b, c) {
        a || g(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function na(a, b, c) {
        na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
        return na.apply(m, arguments)
    }

    function v(a, b) {
        var c = a.split("."),
            d = ba;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)!c.length && b !== k ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }

    function oa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ia = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function pa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = String(arguments[c]).replace(/\$/g, "$$$$");
            a = a.replace(/\%s/, d)
        }
        return a
    };
    var w = Array.prototype,
        ta = w.indexOf ? function(a, b, c) {
            return w.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (u(a)) return !u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }, x = w.forEach ? function(a, b, c) {
            w.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        }, ua = w.filter ? function(a, b, c) {
            return w.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, h = u(a) ? a.split("") :
                    a, q = 0; q < d; q++)
                if (q in h) {
                    var y = h[q];
                    b.call(c, y, q, a) && (e[f++] = y)
                }
            return e
        }, va = w.map ? function(a, b, c) {
            return w.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        };

    function wa(a, b) {
        if (a.reduce) return a.reduce(b, 0);
        var c = 0;
        x(a, function(d, e) {
            c = b.call(k, c, d, e, a)
        });
        return c
    }

    function xa(a, b) {
        var c = ta(a, b);
        0 <= c && w.splice.call(a, c, 1)
    }

    function Ba(a) {
        return w.concat.apply(w, arguments)
    }

    function Ca(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Da(a, b, c, d) {
        w.splice.apply(a, Ea(arguments, 1))
    }

    function Ea(a, b, c) {
        return 2 >= arguments.length ? w.slice.call(a, b) : w.slice.call(a, b, c)
    }

    function Fa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ga(a) {
        for (var b = [], c = 0; c < a; c++) b[c] = 0;
        return b
    }

    function Ha(a) {
        if (!arguments.length) return [];
        for (var b = [], c = 0;; c++) {
            for (var d = [], e = 0; e < arguments.length; e++) {
                var f = arguments[e];
                if (c >= f.length) return b;
                d.push(f[c])
            }
            b.push(d)
        }
    };
    var z = "StopIteration" in ba ? ba.StopIteration : Error("StopIteration");

    function A() {}
    A.prototype.next = function() {
        g(z)
    };
    A.prototype.z = function() {
        return this
    };

    function B(a) {
        if (a instanceof A) return a;
        if ("function" == typeof a.z) return a.z(n);
        if (t(a)) {
            var b = 0,
                c = new A;
            c.next = function() {
                for (;;) {
                    b >= a.length && g(z);
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        g(Error("Not implemented"))
    }

    function C(a, b, c) {
        if (t(a)) try {
            x(a, b, c)
        } catch (d) {
            d !== z && g(d)
        } else {
            a = B(a);
            try {
                for (;;) b.call(c, a.next(), k, a)
            } catch (e) {
                e !== z && g(e)
            }
        }
    }

    function D(a, b, c) {
        var d = B(a);
        a = new A;
        a.next = function() {
            for (;;) {
                var a = d.next();
                return b.call(c, a, k, d)
            }
        };
        return a
    }

    function Ia(a, b) {
        var c = 0;
        C(a, function(a) {
            c = b.call(k, c, a)
        });
        return c
    }

    function Ja(a) {
        var b = arguments,
            c = b.length,
            d = 0,
            e = new A;
        e.next = function() {
            try {
                return d >= c && g(z), B(b[d]).next()
            } catch (a) {
                return (a !== z || d >= c) && g(a), d++, this.next()
            }
        };
        return e
    }

    function Na(a) {
        if (t(a)) return Ca(a);
        a = B(a);
        var b = [];
        C(a, function(a) {
            b.push(a)
        });
        return b
    };

    function Oa() {}
    Oa.ia = function() {
        return Oa.ka ? Oa.ka : Oa.ka = new Oa
    };
    Oa.prototype.za = 0;
    Oa.ia();

    function Pa(a) {
        if (!t(a)) return n;
        for (var b = 0, c = a.length; b < c; b++)
            if (isNaN(a[b])) return n;
        return l
    }
    v("jsnx.utils.misc.is_list_of_ints", Pa);
    v("jsnx.utils.is_list_of_ints", Pa);

    function Qa(a) {
        var b = 0;
        return D(a, function(a) {
            return b += a
        })
    }
    v("jsnx.utils.misc.cumulative_sum", Qa);
    v("jsnx.utils.cumulative_sum", Qa);

    function Sa() {
        return ":" + (Oa.ia().za++).toString(36)
    }
    v("jsnx.utils.misc.generate_unique_node", Sa);
    v("jsnx.utils.generate_unique_node", Sa);

    function E(a, b) {
        for (var c in a) b.call(k, a[c], c, a)
    }

    function Ta(a, b, c) {
        var d = {}, e;
        for (e in a) d[e] = b.call(c, a[e], e, a);
        return d
    }

    function F(a) {
        var b = 0,
            c;
        for (c in a) b++;
        return b
    }

    function Ua(a) {
        for (var b in a) return b
    }

    function Va(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Wa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Xa(a) {
        for (var b in a) delete a[b]
    }

    function Ya(a, b) {
        b in a && delete a[b]
    }

    function G(a, b, c) {
        return b in a ? a[b] : c
    }

    function H(a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Za = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function I(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Za.length; f++) c = Za[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function $a(a) {
        var b = arguments.length;
        if (1 == b && fa(arguments[0])) return $a.apply(m, arguments[0]);
        b % 2 && g(Error("Uneven number of arguments"));
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    };

    function ab(a) {
        var b = arguments;
        1 === arguments.length && t(arguments[0]) && (b = arguments[0]);
        this.$ = "t";
        for (var c = 0, d = b.length; c < d; c++) this[c] = b[c], this.$ += bb(b[c]);
        this.length = b.length;
        b = this;
        Object.isFrozen && !Object.isFrozen(this) && (b = Object.create(this), Object.freeze(b));
        return b
    }
    ab.prototype.$ = "";
    ab.prototype.length = 0;
    v("jsnx.contrib.Tuple.prototype.length", ab.prototype.length);
    ab.prototype.toString = function() {
        return this.$
    };
    v("jsnx.contrib.Tuple.prototype.toString", ab.prototype.toString);

    function cb(a) {
        return t(arguments[0]) ? new ab(arguments[0]) : new ab(arguments)
    }
    v("jsnx.Tuple", cb);
    v("jsnx.t", cb);

    function db(a) {
        this.name = "JSNetworkXException";
        this.message = a
    }
    v("jsnx.exception.JSNetworkXException", db);
    db.prototype = Error();
    db.prototype.constructor = db;
    v("jsnx.JSNetworkXException", db);

    function J(a) {
        db.call(this, a);
        this.name = "JSNetworkXError"
    }
    oa(J, db);
    v("jsnx.exception.JSNetworkXError", J);
    v("jsnx.JSNetworkXError", J);

    function hb(a) {
        db.call(this, a);
        this.name = "JSNetworkXPointlessConcept"
    }
    oa(hb, db);
    v("jsnx.exception.JSNetworkXPointlessConcept", hb);
    v("jsnx.JSNetworkXPointlessConcept", hb);

    function ib(a) {
        db.call(this, a);
        this.name = "JSNetworkXAlgorithmError"
    }
    oa(ib, db);
    v("jsnx.exception.JSNetworkXAlgorithmError", ib);
    v("jsnx.JSNetworkXAlgorithmError", ib);

    function jb(a) {
        ib.call(this, a);
        this.name = "JSNetworkXUnfeasible"
    }
    oa(jb, ib);
    v("jsnx.exception.JSNetworkXUnfeasible", jb);
    v("jsnx.JSNetworkXUnfeasible", jb);

    function kb(a) {
        jb.call(this, a);
        this.name = "JSNetworkXNoPath"
    }
    oa(kb, jb);
    v("jsnx.exception.JSNetworkXNoPath", kb);
    v("jsnx.JSNetworkXNoPath", kb);

    function lb(a) {
        ib.call(this, a);
        this.name = "JSNetworkXUnbounded"
    }
    oa(lb, ib);
    v("jsnx.exception.JSNetworkXUnbounded", lb);
    v("jsnx.JSNetworkXUnbounded", lb);

    function L(a) {
        this.name = "KeyError";
        this.message = a
    }
    L.prototype = Error();
    L.prototype.constructor = L;
    v("jsnx.KeyError", L);
    v("jsnx.version", "0.2.0");

    function bb(a, b) {
        var c = typeof a;
        return "object" === c || "function" === c ? a.hasOwnProperty("__hash__") ? a.__hash__ : a.toString !== Object.prototype.toString && a.toString !== Array.prototype.toString ? a.toString() : b ? b(a) : "o" + (a[ja] || (a[ja] = ++ka)) : c.substr(0, 1) + a
    }
    v("jsnx.contrib.misc.get_hash", bb);

    function M(a) {
        this.v = {};
        this.u = {};
        this.t = {};
        this.e = {};
        if (a != m)
            if (mb(a) || t(a)) P(a, function(a) {
                this.set.apply(this, a)
            }, this);
            else
        if (ia(a))
            for (var b in a) this.set(isNaN(+b) ? b : +b, a[b])
    }
    v("jsnx.contrib.Map", M);
    v("jsnx.Map", M);

    function nb(a, b) {
        switch (typeof b) {
            case "number":
                return a.u;
            case "string":
                return a.v;
            default:
                return a.t
        }
    }
    M.prototype.get = function(a, b) {
        var c = nb(this, a);
        if ("undefined" !== typeof c[a]) return c[a];
        if (s(b)) return b;
        g(new L("Map does not contain key " + Q(a)))
    };
    M.prototype.get = M.prototype.get;
    M.prototype.a = function(a) {
        return "undefined" !== typeof nb(this, a)[a]
    };
    M.prototype.has = M.prototype.a;
    M.prototype.set = function(a, b) {
        var c = nb(this, a);
        c[a] = b;
        c === this.t && (this.e[a] = a);
        return b
    };
    M.prototype.set = M.prototype.set;
    M.prototype.remove = function(a) {
        var b = nb(this, a);
        "undefined" !== typeof b[a] ? (delete b[a], b === this.t && delete this.e[a]) : g(new L("Map does not contain key " + Q(a)))
    };
    M.prototype.remove = M.prototype.remove;
    M.prototype.T = function() {
        var a = [],
            b;
        for (b in this.u) a.push([+b, this.u[b]]);
        for (b in this.v) a.push([b, this.v[b]]);
        for (b in this.t) a.push([this.e[b], this.t[b]]);
        return a
    };
    M.prototype.items = M.prototype.T;
    M.prototype.copy = function(a) {
        return ob(this, a)
    };
    M.prototype.keys = function() {
        return va(Wa(this.u), function(a) {
            return +a
        }).concat(Wa(this.v)).concat(Va(this.e))
    };
    M.prototype.keys = M.prototype.keys;
    M.prototype.o = function() {
        return Va(this.u).concat(Va(this.v)).concat(Va(this.t))
    };
    M.prototype.values = M.prototype.o;
    M.prototype.z = function() {
        var a = new A,
            b = Wa(this.v),
            c = Wa(this.u),
            d = Wa(this.t),
            e = 0,
            f = 0,
            h = 0;
        a.next = na(function() {
            var a;
            if (e < c.length) return a = c[e++], [+a, this.u[a]];
            if (f < b.length) return a = b[f++], [a, this.v[a]];
            if (h < d.length) return a = d[h++], [this.e[a], this.t[a]];
            g(z)
        }, this);
        return a
    };
    M.prototype.count = function() {
        return F(this.t) + F(this.u) + F(this.v)
    };
    M.prototype.count = M.prototype.count;
    M.prototype.clear = function() {
        Xa(this.v);
        Xa(this.u);
        Xa(this.t);
        Xa(this.e)
    };
    M.prototype.clear = M.prototype.clear;
    M.prototype.forEach = function(a, b) {
        C(this, function(c) {
            a.apply(b, c)
        })
    };
    M.prototype.forEach = M.prototype.forEach;

    function R(a) {
        this.c = new M;
        a != m && (mb(a) || t(a)) && P(a, function(a) {
            this.add(a)
        }, this)
    }
    v("jsnx.contrib.Set", R);
    v("jsnx.Set", R);
    R.prototype.a = function(a) {
        return this.c.a(a)
    };
    R.prototype.has = R.prototype.a;
    R.prototype.add = function(a) {
        this.c.set(a, l)
    };
    R.prototype.add = R.prototype.add;
    R.prototype.remove = function(a) {
        try {
            this.c.remove(a)
        } catch (b) {
            b instanceof L || g(b)
        }
    };
    R.prototype.remove = R.prototype.remove;
    R.prototype.copy = function(a) {
        return ob(this, a)
    };
    R.prototype.o = function() {
        return this.c.keys()
    };
    R.prototype.values = R.prototype.o;
    R.prototype.z = function() {
        return D(this.c, function(a) {
            return a[0]
        })
    };
    R.prototype.da = function(a) {
        for (var b = new R(this.o()), c = 0, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            e instanceof R && (e = e.o());
            for (var f = 0, h = e.length; f < h; f++) b.remove(e[f])
        }
        return b
    };
    R.prototype.difference = R.prototype.da;
    R.prototype.ea = function(a) {
        for (var b = new R, c = 0, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            e instanceof R && (e = e.o());
            for (var f = 0, h = e.length; f < h; f++) this.a(e[f]) && b.add(e[f])
        }
        return b
    };
    R.prototype.intersection = R.prototype.ea;
    R.prototype.count = function() {
        return this.c.count()
    };
    R.prototype.count = R.prototype.count;
    R.prototype.clear = function() {
        this.c.clear()
    };
    R.prototype.clear = R.prototype.clear;
    R.prototype.forEach = function(a, b) {
        C(this, a, b)
    };
    R.prototype.forEach = R.prototype.forEach;
    v("jsnx.filter", function(a, b, c) {
        var d = B(a);
        a = new A;
        a.next = function() {
            for (;;) {
                var a = d.next();
                if (b.call(c, a, k, d)) return a
            }
        };
        return a
    });

    function mb(a) {
        return a != m && (a instanceof A || ha(a.z))
    }

    function pb(a) {
        if (a instanceof S) return a.H();
        if (u(a) || t(a)) return a.length;
        if (qb(a)) return F(a);
        g(new TypeError)
    }

    function P(a, b, c, d) {
        ga(c) && (d = c, c = m);
        if (d) {
            var e = b;
            b = function(a) {
                e.apply(this, a)
            }
        }
        a instanceof S ? C(rb(a), b, c) : mb(a) ? C(a, b, c) : t(a) || u(a) ? x(a, b, c) : ia(a) && P(Wa(a), b, c)
    }
    v("jsnx.forEach", P);

    function T(a, b, c) {
        if (a instanceof S) return T(rb(a), b, c);
        if (t(a)) return va(a, b, c);
        if (mb(a)) return D(a, b, c);
        if (ia(a)) return Ta(a, b, c);
        g(new TypeError)
    }
    v("jsnx.map", T);

    function sb(a) {
        var b = arguments,
            c = b[0];
        if (t(c)) return Ha.apply(m, b);
        if (mb(c)) {
            var c = new A,
                d = b.length;
            c.next = function() {
                for (var a = [], c = 0; c < d; c++) a.push(b[c].next());
                return a
            };
            return c
        }
        if (ia(c)) return Ha.apply(m, va(b, Wa));
        g(new TypeError)
    }

    function tb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)!s(a[c]) || "object" !== r(a[c]) ? a[c] = U(d[c]) : "object" === r(a[c]) && "object" === r(d) && tb(a[c], d[c]);
            for (var f = 0; f < Za.length; f++) c = Za[f], Object.prototype.hasOwnProperty.call(d, c) && (!s(a[c]) || "object" !== r(a[c]) ? a[c] = U(d[c]) : "object" === r(a[c]) && "object" === r(d) && tb(a[c], d[c]))
        }
    }

    function ub(a) {
        if (a instanceof S) return ub(rb(a));
        if (t(a)) return Ca(a);
        if (mb(a)) return Na(a);
        if (ia(a)) return Wa(a);
        g(new TypeError)
    }
    v("jsnx.toArray", ub);

    function vb(a) {
        var b = new A,
            c = B(Wa(a));
        b.next = function() {
            var b = c.next();
            return [b, a[b]]
        };
        return b
    }

    function rb(a) {
        if (a instanceof S) return rb(a.adj.keys());
        "object" === r(a) && (!t(a) && !mb(a)) && (a = Wa(a));
        return B(a)
    }

    function V(a, b) {
        var c = new A,
            d = Ea(arguments, 1);
        if (0 === d.length) return a;
        try {
            a = B(a)
        } catch (e) {
            return c.next = function() {
                "Not implemented" === e.message && g(new TypeError)
            }, c
        }
        var f = 0,
            h = d.length,
            q = [a];
        c.next = function() {
            do try {
                var a, b;
                do a = q[f].next(), s(a) && (b = d[f](a)); while (!s(a));
                if (mb(b)) {
                    if (f === h - 1) return b;
                    q.push(b);
                    f += 1
                } else if (s(b)) return b
            } catch (c) {
                c !== z && g(c), 0 < f ? (q.pop(), f -= 1) : g(c)
            }
            while (1)
        };
        return c
    }
    v("jsnx.sentinelIterator", function(a, b) {
        var c = new A;
        c.next = function() {
            var c;
            try {
                c = B(a).next()
            } catch (e) {
                e != z && g(e), c = b
            }
            return c
        };
        return c
    });

    function qb(a) {
        var b = Object.prototype.hasOwnProperty;
        if (!a || "object" !== r(a) || a.nodeType || a == a.window) return n;
        try {
            if (a.constructor && !b.call(a, "constructor") && !b.call(a.constructor.prototype, "isPrototypeOf")) return n
        } catch (c) {
            return n
        }
        for (var d in a);
        return d === k || b.call(a, d)
    }

    function U(a, b) {
        b = b || [];
        var c = r(a);
        if ("object" == c && (ha(a.copy) || qb(a)) || "array" == c) {
            for (var d = 0, e = b.length; d < e; d += 2)
                if (a === b[d]) return b[d + 1];
            if (ha(a.copy)) return c = a.copy(b), b.push(a, c), c;
            c = "array" == c ? [] : {};
            b.push(a, c);
            for (var f in a) c[f] = U(a[f], b);
            return c
        }
        return a
    }

    function ob(a, b) {
        function c() {}
        var d = {}, e, f;
        c.prototype = a.constructor.prototype;
        for (e in a) a.hasOwnProperty(e) && (d[e] = a[e]);
        d = U(d, b);
        f = new c;
        for (e in d) f[e] = d[e];
        return f
    }
    var xb = function wb(b, c) {
        return 0 === c ? b : wb(c, b % c)
    };

    function yb(a, b) {
        var c = new M;
        if (b != m) {
            b = ub(b);
            var d = function(a) {
                return 0 <= ta(b, a)
            };
            x(b, function(b) {
                c.set(b, ua(a.A(b), d))
            })
        } else P(a, function(b) {
            c.set(b, a.A(b))
        });
        return c
    }
    v("jsnx.contrib.convert.to_map_of_lists", yb);
    v("jsnx.to_map_of_lists", yb);

    function zb(a, b) {
        var c = Ab(b);
        c.l(a.keys());
        if (c.k() && !c.d()) {
            var d = new M;
            a.forEach(function(a, b) {
                x(b, function(b) {
                    d.a(b) || c.j(a, b)
                });
                d.set(a, 1)
            })
        } else a.forEach(function(a, b) {
            x(b, function(b) {
                c.j(a, b)
            })
        });
        return c
    }
    v("jsnx.contrib.convert.from_map_of_lists", zb);
    v("jsnx.contrib.convert.to_map_of_maps", function(a, b, c) {
        var d = new M;
        b != m ? (b = ub(b), c != m ? x(b, function(e) {
            var f = d.set(e, new M);
            a.get(e).forEach(function(a) {
                0 <= ta(b, a) && f.set(a, c)
            })
        }) : x(b, function(c) {
            var f = d.set(c, new M);
            a.get(c).forEach(function(a, c) {
                0 <= ta(b, a) && f.set(a, c)
            })
        })) : c != m ? C(a.n(), function(a, b) {
            var h = d.set(b, new M);
            a.forEach(function(a) {
                h.set(a, c)
            })
        }) : C(a.n(), function(a, b) {
            var c = d.set(b, new M);
            a.forEach(function(a, b) {
                c.set(a, b)
            })
        });
        return d
    });

    function Bb(a, b, c) {
        var d = Ab(b),
            e = new M,
            f = [];
        d.l(a.keys());
        c ? d.d() ? d.k() ? a.forEach(function(a, b) {
            t(b) && g(Error("Value is not a map."));
            b.forEach(function(b, c) {
                E(c, function(c, e) {
                    d.j(a, b, e, c)
                })
            })
        }) : a.forEach(function(a, b) {
            t(b) && g(Error());
            b.forEach(function(b, c) {
                E(c, function(c) {
                    d.j(a, b, c)
                })
            })
        }) : d.k() ? a.forEach(function(a, b) {
            t(b) && g(Error());
            b.forEach(function(b, c) {
                f[0] = a;
                f[1] = b;
                e.a(f) || (E(c, function(c, e) {
                    d.j(a, b, e, c)
                }), f[0] = b, f[1] = a, e.set(f, 1))
            })
        }) : a.forEach(function(a, b) {
            t(b) && g(Error());
            b.forEach(function(b,
                c) {
                f[0] = a;
                f[1] = b;
                e.a(f) || (E(c, function(c) {
                    d.j(a, b, c)
                }), f[0] = b, f[1] = a, e.set(f, 1))
            })
        }) : d.k() && !d.d() ? a.forEach(function(a, b) {
            t(b) && g(Error());
            b.forEach(function(b, c) {
                f[0] = a;
                f[1] = b;
                e.a(f) || (d.j(a, b, c), f[0] = b, f[1] = a, e.set(f, 1))
            })
        }) : a.forEach(function(a, b) {
            t(b) && g(Error());
            b.forEach(function(b, c) {
                d.j(a, b, c)
            })
        });
        return d
    }
    v("jsnx.contrib.convert.from_map_of_maps", Bb);

    function Cb(a) {
        if ("function" == typeof a.P) return a.P();
        if (u(a)) return a.split("");
        if (t(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return Va(a)
    };

    function Db(a, b) {
        this.c = {};
        this.e = [];
        var c = arguments.length;
        if (1 < c) {
            c % 2 && g(Error("Uneven number of arguments"));
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.ca(a)
    }
    p = Db.prototype;
    p.J = 0;
    p.Z = 0;
    p.P = function() {
        Eb(this);
        for (var a = [], b = 0; b < this.e.length; b++) a.push(this.c[this.e[b]]);
        return a
    };
    p.clear = function() {
        this.c = {};
        this.Z = this.J = this.e.length = 0
    };
    p.remove = function(a) {
        return Fb(this.c, a) ? (delete this.c[a], this.J--, this.Z++, this.e.length > 2 * this.J && Eb(this), l) : n
    };

    function Eb(a) {
        if (a.J != a.e.length) {
            for (var b = 0, c = 0; b < a.e.length;) {
                var d = a.e[b];
                Fb(a.c, d) && (a.e[c++] = d);
                b++
            }
            a.e.length = c
        }
        if (a.J != a.e.length) {
            for (var e = {}, c = b = 0; b < a.e.length;) d = a.e[b], Fb(e, d) || (a.e[c++] = d, e[d] = 1), b++;
            a.e.length = c
        }
    }
    p.get = function(a, b) {
        return Fb(this.c, a) ? this.c[a] : b
    };
    p.set = function(a, b) {
        Fb(this.c, a) || (this.J++, this.e.push(a), this.Z++);
        this.c[a] = b
    };
    p.ca = function(a) {
        var b;
        a instanceof Db ? (Eb(a), b = a.e.concat(), a = a.P()) : (b = Wa(a), a = Va(a));
        for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    p.ha = function() {
        return new Db(this)
    };
    p.z = function(a) {
        Eb(this);
        var b = 0,
            c = this.e,
            d = this.c,
            e = this.Z,
            f = this,
            h = new A;
        h.next = function() {
            for (;;) {
                e != f.Z && g(Error("The map has changed since the iterator was created"));
                b >= c.length && g(z);
                var h = c[b++];
                return a ? h : d[h]
            }
        };
        return h
    };

    function Fb(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Gb(a) {
        this.c = new Db;
        a && this.ca(a)
    }

    function Hb(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + (a[ja] || (a[ja] = ++ka)) : b.substr(0, 1) + a
    }
    p = Gb.prototype;
    p.add = function(a) {
        this.c.set(Hb(a), a)
    };
    p.ca = function(a) {
        a = Cb(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    p.remove = function(a) {
        return this.c.remove(Hb(a))
    };
    p.clear = function() {
        this.c.clear()
    };
    p.contains = function(a) {
        a = Hb(a);
        return Fb(this.c.c, a)
    };
    p.ea = function(a) {
        var b = new Gb;
        a = Cb(a);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.contains(d) && b.add(d)
        }
        return b
    };
    p.da = function(a) {
        var b = this.ha();
        a = Cb(a);
        for (var c = a.length, d = 0; d < c; d++) b.remove(a[d]);
        return b
    };
    p.P = function() {
        return this.c.P()
    };
    p.ha = function() {
        return new Gb(this)
    };
    p.z = function() {
        return this.c.z(n)
    };

    function Ab(a) {
        if (a != m) try {
            a.clear()
        } catch (b) {
            g(Error("Input graph is not a jsnx graph type"))
        } else a = new S;
        return a
    }

    function Ib(a, b, c) {
        var d = m;
        if (a.hasOwnProperty("adj")) try {
            return d = Bb(a.adj, b, a.k()), "graph" in a && "object" === r(a.graph) && (d.graph = H(a.graph)), "node" in a && a.node instanceof M && (d.node = new M, a.node.forEach(function(a, b) {
                d.node.set(a, H(b))
            })), d
        } catch (e) {
            g(e)
        }
        if (a instanceof M) try {
            return Bb(a, b, c)
        } catch (f) {
            try {
                return zb(a, b)
            } catch (h) {
                g(Error("Input is not known type."))
            }
        }
        if ("object" === r(a)) try {
            return Jb(a, b, c)
        } catch (q) {
            try {
                return Kb(a, b)
            } catch (y) {
                g(Error("Input is not known type."))
            }
        }
        if (t(a)) try {
            return Lb(a,
                b)
        } catch (K) {
            g(Error("Input is not valid edge list"))
        }
        return d
    }
    v("jsnx.convert.to_networkx_graph", Ib);
    v("jsnx.to_networkx_graph", Ib);

    function Mb(a) {
        return a.O()
    }
    v("jsnx.convert.convert_to_undirected", Mb);
    v("jsnx.convert_to_undirected", Mb);

    function Nb(a) {
        return a.D()
    }
    v("jsnx.convert.convert_to_directed", Nb);
    v("jsnx.convert_to_undirected", Nb);

    function Ob(a, b) {
        function c(a) {
            return 0 <= ta(b, a)
        }
        var d = {};
        b != m ? b = ub(b) : (b = a, c = function(a) {
            return b.m(a)
        });
        P(b, function(b) {
            d[b] = ua(a.A(b), c)
        });
        return d
    }
    v("jsnx.convert.to_dict_of_lists", Ob);
    v("jsnx.to_dict_of_lists", Ob);

    function Kb(a, b) {
        var c = Ab(b);
        c.l(D(vb(a), function(a) {
            return isNaN(a[0]) ? a[0] : +a[0]
        }));
        if (c.k() && !c.d()) {
            var d = {};
            E(a, function(a, b) {
                b = isNaN(b) ? b : +b;
                x(a, function(a) {
                    a in d || c.j(b, a)
                });
                d[b] = 1
            })
        } else {
            var e = [];
            E(a, function(a, b) {
                b = isNaN(b) ? b : +b;
                x(a, function(a) {
                    e.push([b, a])
                })
            });
            c.b(e)
        }
        return c
    }
    v("jsnx.convert.from_dict_of_lists", Kb);
    v("jsnx.convert.to_dict_of_dicts", function(a, b, c) {
        var d = {};
        b != m ? (b = ub(b), c != m ? x(b, function(e) {
            d[e] = {};
            E(a.get(e), function(a, h) {
                0 <= ta(b, h) && (d[e][h] = c)
            })
        }) : x(b, function(c) {
            d[c] = {};
            E(a.get(c), function(a, h) {
                0 <= ta(b, h) && (d[c][h] = a)
            })
        })) : c != m ? C(a.n(), function(a, b) {
            d[b] = Ta(a, function() {
                return c
            })
        }) : C(a.n(), function(a, b) {
            d[b] = H(a)
        });
        return d
    });

    function Jb(a, b, c) {
        var d = Ab(b),
            e, f;
        d.l(D(vb(a), function(a) {
            return isNaN(a[0]) ? a[0] : +a[0]
        }));
        c ? d.d() ? (d.k() ? (e = [], E(a, function(a, b) {
            t(a) && g(Error());
            b = isNaN(b) ? b : +b;
            E(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                E(a, function(a, d) {
                    e.push([b, c, d, a])
                })
            })
        })) : (e = [], E(a, function(a, b) {
            t(a) && g(Error());
            b = isNaN(b) ? b : +b;
            E(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                E(a, function(a) {
                    e.push([b, c, a])
                })
            })
        })), d.b(e)) : d.k() ? (f = new Gb, E(a, function(a, b) {
            t(a) && g(Error());
            b = isNaN(b) ? b : +b;
            E(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                f.contains([b, c].toString()) ||
                    (e = [], E(a, function(a, d) {
                    e.push([b, c, d, a])
                }), d.b(e), f.add([c, b].toString()))
            })
        })) : (f = new Gb, E(a, function(a, b) {
            t(a) && g(Error());
            b = isNaN(b) ? b : +b;
            E(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                f.contains([b, c].toString()) || (e = [], E(a, function(a) {
                    e.push([b, c, a])
                }), d.b(e), f.add([c, b].toString()))
            })
        })) : d.k() && !d.d() ? (f = new Gb, E(a, function(a, b) {
            t(a) && g(Error());
            b = isNaN(b) ? b : +b;
            E(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                f.contains([b, c].toString()) || (d.j(b, c, a), f.add([c, b].toString()))
            })
        })) : (e = [], E(a, function(a, b) {
            t(a) && g(Error());
            b = isNaN(b) ? b : +b;
            E(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                e.push([b, c, a])
            })
        }), d.b(e));
        return d
    }
    v("jsnx.convert.from_dict_of_dicts", Jb);
    v("jsnx.convert.to_edgelist", function(a, b) {
        return b != m ? a.q(b, l) : a.q(m, l)
    });

    function Lb(a, b) {
        var c = Ab(b);
        c.b(a);
        return c
    }
    v("jsnx.convert.from_edgelist", Lb);

    function Q(a) {
        var b = [];
        Pb(new Qb, a, b);
        return b.join("")
    }

    function Qb() {
        this.ba = k
    }

    function Pb(a, b, c) {
        switch (typeof b) {
            case "string":
                Rb(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == m) {
                    c.push("null");
                    break
                }
                if (fa(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], Pb(a, a.ba ? a.ba.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Rb(f, c), c.push(":"),
                    Pb(a, a.ba ? a.ba.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                g(Error("Unknown type: " + typeof b))
        }
    }
    var Sb = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, Tb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function Rb(a, b) {
        b.push('"', a.replace(Tb, function(a) {
            if (a in Sb) return Sb[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Sb[a] = e + b.toString(16)
        }), '"')
    };

    function Ub(a) {
        a %= 360;
        return 0 > 360 * a ? a + 360 : a
    }

    function Vb(a) {
        return wa(arguments, function(a, c) {
            return a + c
        })
    };

    function S(a, b) {
        if (!(this instanceof S)) return new S(a, b);
        this.graph = {};
        this.node = new M;
        this.adj = new M;
        a != m && Ib(a, this);
        I(this.graph, b || {});
        this.edge = this.adj
    }
    v("jsnx.classes.Graph", S);
    v("jsnx.Graph", S);
    S.__name__ = "Graph";
    S.prototype.wa = m;
    S.prototype.graph = S.prototype.wa;
    S.prototype.Aa = m;
    S.prototype.node = S.prototype.Aa;
    S.prototype.sa = m;
    S.prototype.adj = S.prototype.sa;
    S.prototype.ua = m;
    S.prototype.edge = S.prototype.ua;
    S.prototype.name = function(a) {
        if (s(a)) this.graph.name = a.toString();
        else return this.graph.name || ""
    };
    S.prototype.name = S.prototype.name;
    S.prototype.toString = function() {
        return this.name()
    };
    S.prototype.toString = S.prototype.toString;
    S.prototype.get = function(a) {
        try {
            return this.adj.get(a)
        } catch (b) {
            b instanceof L || g(b), g(new L("Graph does not contain node " + a + "."))
        }
    };
    S.prototype.get = S.prototype.get;
    S.prototype.I = function(a, b) {
        b != m || (b = {});
        "object" !== r(b) && g(new J("The attr_dict argument must be an object."));
        this.adj.a(a) ? I(this.node.get(a), b) : (this.adj.set(a, new M), this.node.set(a, b))
    };
    S.prototype.add_node = S.prototype.I;
    S.prototype.l = function(a, b) {
        b != m || (b = {});
        P(a, function(a) {
            if (fa(a) && 2 === a.length && ia(a[1])) {
                var d = a[0];
                a = a[1];
                if (this.adj.a(d)) d = this.node.get(d), I(d, b, a);
                else {
                    this.adj.set(d, new M);
                    var e = H(b);
                    I(e, a);
                    this.node.set(d, e)
                }
            } else this.adj.a(a) ? I(this.node.get(a), b) : (this.adj.set(a, new M), this.node.set(a, H(b)))
        }, this)
    };
    S.prototype.add_nodes_from = S.prototype.l;
    S.prototype.N = function(a) {
        var b = this.adj;
        try {
            var c = this.adj.get(a).keys();
            this.node.remove(a);
            x(c, function(c) {
                b.get(c).remove(a)
            });
            b.remove(a)
        } catch (d) {
            d instanceof L || g(d), g(new J(pa("The node %s is not in the graph", Q(a))))
        }
    };
    S.prototype.remove_node = S.prototype.N;
    S.prototype.X = function(a) {
        var b = this.adj;
        P(a, function(a) {
            try {
                this.node.remove(a), b.get(a).forEach(function(d) {
                    b.get(d).remove(a)
                }), b.remove(a)
            } catch (d) {
                d instanceof L || g(d)
            }
        }, this)
    };
    S.prototype.remove_nodes_from = S.prototype.X;
    S.prototype.B = function(a) {
        return a ? B(this.node) : B(this.adj.keys())
    };
    S.prototype.nodes_iter = S.prototype.B;
    S.prototype.nodes = function(a) {
        return a ? this.node.T() : this.node.keys()
    };
    S.prototype.nodes = S.prototype.nodes;
    S.prototype.H = function() {
        return this.adj.count()
    };
    S.prototype.number_of_nodes = S.prototype.H;
    S.prototype.Da = function() {
        return this.adj.count()
    };
    S.prototype.order = S.prototype.Da;
    S.prototype.m = function(a) {
        try {
            return this.adj.a(a)
        } catch (b) {
            if (b instanceof TypeError) return n;
            g(b)
        }
    };
    S.prototype.has_node = S.prototype.m;
    S.prototype.j = function(a, b, c) {
        c = c || {};
        "object" !== r(c) && g(new J("The attr_dict argument must be an object."));
        this.adj.a(a) || (this.adj.set(a, new M), this.node.set(a, {}));
        this.adj.a(b) || (this.adj.set(b, new M), this.node.set(b, {}));
        var d = this.adj.get(a).get(b, {});
        I(d, c);
        this.adj.get(a).set(b, d);
        this.adj.get(b).set(a, d)
    };
    S.prototype.add_edge = S.prototype.j;
    S.prototype.b = function(a, b) {
        b = b || {};
        "object" !== r(b) && g(new J("The attr_dict argument must be an object."));
        P(a, function(a) {
            var d = pb(a),
                e, f, h;
            3 === d ? (e = a[0], f = a[1], h = a[2]) : 2 === d ? (e = a[0], f = a[1], h = {}) : g(new J(pa("Edge tuple %s must be a 2-tuple or 3-tuple.", Q(a))));
            this.adj.a(e) || (this.adj.set(e, new M), this.node.set(e, {}));
            this.adj.a(f) || (this.adj.set(f, new M), this.node.set(f, {}));
            a = this.adj.get(e).get(f, {});
            I(a, b, h);
            this.adj.get(e).set(f, a);
            this.adj.get(f).set(e, a)
        }, this)
    };
    S.prototype.add_edges_from = S.prototype.b;
    S.prototype.ra = function(a, b, c) {
        c = c || {};
        u(b) || (c = b, b = "weight");
        this.b(T(a, function(a) {
            var c = {};
            c[b] = a[2];
            s(c[b]) || g(new TypeError("Values must consist of three elements: " + Q(a)));
            return [a[0], a[1], c]
        }), c)
    };
    S.prototype.add_weighted_edges_from = S.prototype.ra;
    S.prototype.s = function(a, b) {
        try {
            this.adj.get(a).remove(b), bb(a) !== bb(b) && this.adj.get(b).remove(a)
        } catch (c) {
            c instanceof L && g(new J(pa("The edge %s-%s is not in the graph", Q(a), Q(b)))), g(c)
        }
    };
    S.prototype.remove_edge = S.prototype.s;
    S.prototype.C = function(a) {
        P(a, function(a) {
            var c = a[0];
            a = a[1];
            this.adj.a(c) && this.adj.get(c).a(a) && (this.adj.get(c).remove(a), bb(c) !== bb(a) && this.adj.get(a).remove(c))
        }, this)
    };
    S.prototype.remove_edges_from = S.prototype.C;
    S.prototype.L = function(a, b) {
        return this.adj.a(a) && this.adj.get(a).a(b)
    };
    S.prototype.has_edge = S.prototype.L;
    S.prototype.A = function(a) {
        try {
            return this.adj.get(a).keys()
        } catch (b) {
            b instanceof L && g(new J(pa("The node %s is not in the graph.", Q(a)))), g(b)
        }
    };
    S.prototype.neighbors = S.prototype.A;
    S.prototype.fa = function(a) {
        try {
            return B(this.adj.get(a).keys())
        } catch (b) {
            b instanceof L && g(new J(pa("The node %s is not in the graph.", Q(a)))), g(b)
        }
    };
    S.prototype.neighbors_iter = S.prototype.fa;
    S.prototype.q = function(a, b) {
        return Na(this.g(a, b))
    };
    S.prototype.edges = S.prototype.q;
    S.prototype.g = function(a, b) {
        ga(a) && (b = a, a = m);
        var c = new M,
            d, e;
        d = a != m ? D(this.f(a), function(a) {
            return [a, this.adj.get(a)]
        }, this) : B(this.adj);
        return b ? V(d, function(a) {
            e = a[0];
            var b = new A,
                d = B(a[1]);
            b.next = function() {
                try {
                    return d.next()
                } catch (a) {
                    a === z && c.set(e, 1), g(a)
                }
            };
            return b
        }, function(a) {
            if (!c.a(a[0])) return [e, a[0], a[1]]
        }) : V(d, function(a) {
            e = a[0];
            var b = new A,
                d = B(a[1]);
            b.next = function() {
                try {
                    return d.next()
                } catch (a) {
                    a === z && c.set(e, 1), g(a)
                }
            };
            return b
        }, function(a) {
            if (!c.a(a[0])) return [e, a[0]]
        })
    };
    S.prototype.edges_iter = S.prototype.g;
    S.prototype.Q = function(a, b, c) {
        try {
            return this.adj.get(a).get(b)
        } catch (d) {
            if (d instanceof L) return c;
            g(d)
        }
    };
    S.prototype.get_edge_data = S.prototype.Q;
    S.prototype.ta = function() {
        return Na(D(this.n(), function(a) {
            return a[1].keys()
        }))
    };
    S.prototype.adjacency_list = S.prototype.ta;
    S.prototype.n = function() {
        return B(this.adj)
    };
    S.prototype.adjacency_iter = S.prototype.n;
    S.prototype.K = function(a, b) {
        return a != m && this.m(a) ? this.p(a, b).next()[1] : new M(this.p(a, b))
    };
    S.prototype.degree = S.prototype.K;
    S.prototype.p = function(a, b) {
        var c;
        c = a != m ? D(this.f(a), function(a) {
            return [a, this.adj.get(a)]
        }, this) : B(this.adj);
        return b ? D(c, function(a) {
            var c = a[0],
                f = a[1],
                h = 0;
            f.forEach(function(a, c) {
                h += +G(c, b, 1)
            });
            h += +(f.a(c) && G(f.get(c), b, 1));
            a[1] = h;
            return a
        }) : D(c, function(a) {
            a[1] = a[1].count() + +a[1].a(a[0]);
            return a
        })
    };
    S.prototype.degree_iter = S.prototype.p;
    S.prototype.clear = function() {
        this.name("");
        this.adj.clear();
        this.node.clear();
        Xa(this.graph)
    };
    S.prototype.clear = S.prototype.clear;
    S.prototype.copy = function() {
        return ob(this)
    };
    S.prototype.copy = S.prototype.copy;
    S.prototype.k = aa(n);
    S.prototype.is_multigraph = S.prototype.k;
    S.prototype.d = aa(n);
    S.prototype.is_directed = S.prototype.d;
    S.prototype.D = function() {
        var a = new X;
        a.name(this.name());
        a.l(this);
        a.b(function() {
            var a;
            return V(this.n(), function(c) {
                a = c[0];
                return B(c[1])
            }, function(c) {
                c[2] = U(c[1]);
                c[1] = c[0];
                c[0] = a;
                return c
            })
        }.call(this));
        a.graph = U(this.graph);
        a.node = U(this.node);
        return a
    };
    S.prototype.to_directed = S.prototype.D;
    S.prototype.O = function() {
        return ob(this)
    };
    S.prototype.to_undirected = S.prototype.O;
    S.prototype.w = function(a) {
        a = this.f(a);
        var b = new this.constructor,
            c = b.adj,
            d = this.adj;
        C(a, function(a) {
            var b = new M;
            c.set(a, b);
            d.get(a).forEach(function(d, q) {
                c.a(d) && (b.set(d, q), c.get(d).set(a, q))
            })
        });
        P(b, function(a) {
            b.node.set(a, this.node.get(a))
        }, this);
        b.graph = this.graph;
        return b
    };
    S.prototype.subgraph = S.prototype.w;
    S.prototype.Ba = function() {
        return va(ua(this.adj.T(), function(a) {
            return a[1].a(a[0])
        }), function(a) {
            return a[0]
        })
    };
    S.prototype.nodes_with_selfloops = S.prototype.Ba;
    S.prototype.Y = function(a) {
        return a ? va(ua(this.adj.T(), function(a) {
            return a[1].a(a[0])
        }), function(a) {
            a[2] = a[1].get(a[0]);
            a[1] = a[0];
            return a
        }) : va(ua(this.adj.T(), function(a) {
            return a[1].a(a[0])
        }), function(a) {
            a[1] = a[0];
            return a
        })
    };
    S.prototype.selfloop_edges = S.prototype.Y;
    S.prototype.Ca = function() {
        return this.Y().length
    };
    S.prototype.number_of_selfloops = S.prototype.Ca;
    S.prototype.size = function(a) {
        var b = Vb.apply(m, this.K(m, a).o()) / 2;
        return a != m ? b : Math.floor(b)
    };
    S.prototype.size = S.prototype.size;
    S.prototype.M = function(a, b) {
        return a == m ? Math.floor(this.size()) : this.adj.get(a).a(b) ? 1 : 0
    };
    S.prototype.number_of_edges = S.prototype.M;
    S.prototype.qa = function(a, b) {
        var c = ub(a),
            d = c[0],
            c = D(Ea(c, 1), function(a) {
                return [d, a]
            });
        this.b(c, b)
    };
    S.prototype.add_star = S.prototype.qa;
    S.prototype.pa = function(a, b) {
        var c = ub(a),
            c = Ha(Ea(c, 0, c.length - 1), Ea(c, 1));
        this.b(c, b)
    };
    S.prototype.add_path = S.prototype.pa;
    S.prototype.oa = function(a, b) {
        var c = ub(a),
            c = Ha(c, Ba(Ea(c, 1), [c[0]]));
        this.b(c, b)
    };
    S.prototype.add_cycle = S.prototype.oa;
    S.prototype.f = function(a) {
        return a != m ? this.m(a) ? B([a]) : function(a, c) {
            var d = new A,
                e = V(a, function(a) {
                    if (c.a(a)) return a
                });
            d.next = function() {
                try {
                    return e.next()
                } catch (a) {
                    a instanceof TypeError && g(new J("nbunch is not a node or a sequence of nodes")), g(a)
                }
            };
            return d
        }(a, this.adj) : B(this.adj.keys())
    };
    S.prototype.nbunch_iter = S.prototype.f;

    function X(a, b) {
        if (!(this instanceof X)) return new X(a, b);
        this.graph = {};
        this.node = new M;
        this.adj = new M;
        this.pred = new M;
        this.succ = this.adj;
        a != m && Ib(a, this);
        I(this.graph, b || {});
        this.edge = this.adj
    }
    v("jsnx.classes.DiGraph", X);
    v("jsnx.DiGraph", X);
    oa(X, S);
    X.__name__ = "DiGraph";
    X.prototype.Ea = m;
    X.prototype.pred = X.prototype.Ea;
    X.prototype.Ha = m;
    X.prototype.succ = X.prototype.Ha;
    X.prototype.I = function(a, b) {
        b != m || (b = {});
        "object" !== r(b) && g(new J("The attr_dict argument must be an object."));
        this.succ.a(a) ? I(this.node.get(a), b) : (this.succ.set(a, new M), this.pred.set(a, new M), this.node.set(a, b))
    };
    X.prototype.add_node = X.prototype.I;
    X.prototype.l = function(a, b) {
        var c, d, e, f, h;
        b != m || (b = {});
        P(rb(a), function(a) {
            c = !this.succ.a(a);
            fa(a) && 2 === a.length && ia(a[1]) ? (d = a[0], e = a[1], this.succ.a(d) ? (h = this.node.get(d), I(h, b, e)) : (this.succ.set(d, new M), this.pred.set(d, new M), f = H(b), I(f, e), this.node.set(d, f))) : c ? (this.succ.set(a, new M), this.pred.set(a, new M), this.node.set(a, H(b))) : I(this.node.get(a), b)
        }, this)
    };
    X.prototype.add_nodes_from = X.prototype.l;
    X.prototype.N = function(a) {
        var b;
        try {
            b = this.succ.get(a), this.node.remove(a)
        } catch (c) {
            c instanceof L || g(c), g(new J(pa("The node %s is not in the graph", Q(a))))
        }
        b.forEach(function(b) {
            this.pred.get(b).remove(a)
        }, this);
        this.succ.remove(a);
        this.pred.get(a).forEach(function(b) {
            this.succ.get(b).remove(a)
        }, this);
        this.pred.remove(a)
    };
    X.prototype.remove_node = X.prototype.N;
    X.prototype.X = function(a) {
        var b;
        P(a, function(a) {
            this.succ.a(a) && (b = this.succ.get(a), this.node.remove(a), b.forEach(function(b) {
                this.pred.get(b).remove(a)
            }, this), this.succ.remove(a), this.pred.get(a).forEach(function(b) {
                this.succ.get(b).remove(a)
            }, this), this.pred.remove(a))
        }, this)
    };
    X.prototype.remove_nodes_from = X.prototype.X;
    X.prototype.j = function(a, b, c) {
        c = c || {};
        "object" !== r(c) && g(new J("The attr_dict argument must be an object."));
        this.succ.a(a) || (this.succ.set(a, new M), this.pred.set(a, new M), this.node.set(a, {}));
        this.succ.a(b) || (this.succ.set(b, new M), this.pred.set(b, new M), this.node.set(b, {}));
        var d = this.adj.get(a).get(b, {});
        I(d, c);
        this.succ.get(a).set(b, d);
        this.pred.get(b).set(a, d)
    };
    X.prototype.add_edge = X.prototype.j;
    X.prototype.b = function(a, b) {
        b = b || {};
        "object" !== r(b) && g(new J("The attr_dict argument must be an object."));
        P(a, function(a) {
            var d = pb(a),
                e, f, h;
            3 === d ? (e = a[0], f = a[1], h = a[2]) : 2 === d ? (e = a[0], f = a[1], h = {}) : g(new J("Edge tuple " + a.toString() + " must be a 2-tuple or 3-tuple."));
            this.succ.a(e) || (this.succ.set(e, new M), this.pred.set(e, new M), this.node.set(e, {}));
            this.succ.a(f) || (this.succ.set(f, new M), this.pred.set(f, new M), this.node.set(f, {}));
            a = this.adj.get(e).get(f, {});
            I(a, b, h);
            this.succ.get(e).set(f, a);
            this.pred.get(f).set(e,
                a)
        }, this)
    };
    X.prototype.add_edges_from = X.prototype.b;
    X.prototype.s = function(a, b) {
        try {
            this.succ.get(a).remove(b), this.pred.get(b).remove(a)
        } catch (c) {
            c instanceof TypeError && g(new J(pa("The edge %s-%s is not in the graph", Q(a), Q(b)))), g(c)
        }
    };
    X.prototype.remove_edge = X.prototype.s;
    X.prototype.C = function(a) {
        P(a, function(a) {
            var c = a[0];
            a = a[1];
            try {
                this.succ.get(c).remove(a), this.pred.get(a).remove(c)
            } catch (d) {}
        }, this)
    };
    X.prototype.remove_edges_from = X.prototype.C;
    X.prototype.ya = function(a, b) {
        return this.succ.a(a) && this.succ.get(a).a(b)
    };
    X.prototype.has_successor = X.prototype.ya;
    X.prototype.xa = function(a, b) {
        return this.pred.a(a) && this.pred.get(a).a(b)
    };
    X.prototype.has_predecessor = X.prototype.xa;
    X.prototype.na = function(a) {
        try {
            return D(this.succ.get(a), function(a) {
                return a[0]
            })
        } catch (b) {
            b instanceof L || g(b), g(new J("The node " + a + " is not in the digraph."))
        }
    };
    X.prototype.successors_iter = X.prototype.na;
    X.prototype.Ga = function(a) {
        try {
            return D(this.pred.get(a), function(a) {
                return a[0]
            })
        } catch (b) {
            b instanceof L || g(b), g(new J("The node " + a + " is not in the digraph."))
        }
    };
    X.prototype.predecessors_iter = X.prototype.Ga;
    X.prototype.ma = function(a) {
        try {
            return this.succ.get(a).keys()
        } catch (b) {
            b instanceof L || g(b), g(new J("The node " + a + " is not in the digraph."))
        }
    };
    X.prototype.successors = X.prototype.ma;
    X.prototype.Fa = function(a) {
        try {
            return this.pred.get(a).keys()
        } catch (b) {
            b instanceof L || g(b), g(new J("The node " + a + " is not in the digraph."))
        }
    };
    X.prototype.predecessors = X.prototype.Fa;
    X.prototype.A = X.prototype.ma;
    X.prototype.neighbors = X.prototype.A;
    X.prototype.fa = X.prototype.na;
    X.prototype.neighbors_iter = X.prototype.fa;
    X.prototype.g = function(a, b) {
        ga(a) && (b = a, a = m);
        var c, d;
        if (a != m) {
            var e = [];
            c = T(this.f(a), function(a) {
                e[0] = a;
                e[1] = this.adj.get(a);
                return e
            }, this)
        } else c = this.adj;
        return b ? V(c, function(a) {
            d = a[0];
            return B(a[1])
        }, function(a) {
            return [d, a[0], a[1]]
        }) : V(c, function(a) {
            d = a[0];
            return B(a[1])
        }, function(a) {
            return [d, a[0]]
        })
    };
    X.prototype.edges_iter = X.prototype.g;
    X.prototype.aa = X.prototype.g;
    X.prototype.out_edges_iter = X.prototype.aa;
    X.prototype.ga = S.prototype.q;
    X.prototype.out_edges = X.prototype.ga;
    X.prototype.F = function(a, b) {
        ga(a) && (b = a, a = m);
        var c, d;
        if (a != m) {
            var e = [];
            c = T(this.f(a), function(a) {
                e[0] = a;
                e[1] = this.pred.get(a);
                return e
            }, this)
        } else c = this.pred;
        return b ? V(c, function(a) {
            d = a[0];
            return B(a[1])
        }, function(a) {
            a[2] = a[1];
            a[1] = d;
            return a
        }) : V(c, function(a) {
            d = a[0];
            return B(a[1])
        }, function(a) {
            a[1] = d;
            return a
        })
    };
    X.prototype.in_edges_iter = X.prototype.F;
    X.prototype.S = function(a, b) {
        return ub(this.F(a, b))
    };
    X.prototype.in_edges = X.prototype.S;
    X.prototype.p = function(a, b) {
        var c;
        c = a != m ? sb(D(this.f(a), function(a) {
            return [a, this.succ.get(a)]
        }, this), T(this.f(a), function(a) {
            return [a, this.pred.get(a)]
        }, this)) : sb(B(this.succ), B(this.pred));
        return u(b) ? T(c, function(a) {
            var c = a[1][1],
                f = 0;
            a[0][1].forEach(function(a, c) {
                f += +G(c, b, 1)
            });
            c.forEach(function(a, c) {
                f += +G(c, b, 1)
            });
            return [a[0][0], f]
        }) : D(c, function(a) {
            return [a[0][0], a[0][1].count() + a[1][1].count()]
        })
    };
    X.prototype.degree_iter = X.prototype.p;
    X.prototype.R = function(a, b) {
        var c;
        c = a != m ? T(this.f(a), function(a) {
            return [a, this.pred.get(a)]
        }, this) : this.pred;
        return b != m ? T(c, function(a) {
            var c = 0;
            a[1].forEach(function(a, d) {
                c += +G(d, b, 1)
            });
            a[1] = c;
            return a
        }) : T(c, function(a) {
            a[1] = a[1].count();
            return a
        })
    };
    X.prototype.in_degree_iter = X.prototype.R;
    X.prototype.W = function(a, b) {
        var c;
        if (a != m) {
            var d = [];
            c = T(this.f(a), function(a) {
                d[0] = a;
                d[1] = this.succ.get(a);
                return d
            }, this)
        } else c = B(this.succ);
        return b != m ? T(c, function(a) {
            var c = 0;
            a[1].forEach(function(a, d) {
                c += +G(d, b, 1)
            });
            return [a[0], c]
        }) : T(c, function(a) {
            return [a[0], a[1].count()]
        })
    };
    X.prototype.out_degree_iter = X.prototype.W;
    X.prototype.ja = function(a, b) {
        return a != m && this.m(a) ? this.R(a, b).next()[1] : new M(this.R(a, b))
    };
    X.prototype.in_degree = X.prototype.ja;
    X.prototype.la = function(a, b) {
        return a != m && this.m(a) ? this.W(a, b).next()[1] : new M(this.W(a, b))
    };
    X.prototype.out_degree = X.prototype.la;
    X.prototype.clear = function() {
        this.succ.clear();
        this.pred.clear();
        this.node.clear();
        Xa(this.graph)
    };
    X.prototype.clear = X.prototype.clear;
    X.prototype.k = aa(n);
    X.prototype.is_multigraph = X.prototype.k;
    X.prototype.d = aa(l);
    X.prototype.is_directed = X.prototype.d;
    X.prototype.D = function() {
        return ob(this)
    };
    X.prototype.to_directed = X.prototype.D;
    X.prototype.O = function(a) {
        var b = new S;
        b.name(this.name());
        b.l(this);
        var c = this.pred,
            d = [];
        a ? b.b(V(this.n(), function(a) {
            d[0] = a[0];
            return B(a[1])
        }, function(a) {
            if (c.get(d[0]).a(a[0])) return d[1] = a[0], d[2] = U(a[1]), d
        })) : b.b(V(this.n(), function(a) {
            d[0] = a[0];
            return B(a[1])
        }, function(a) {
            d[1] = a[0];
            d[2] = U(a[1]);
            return d
        }));
        b.graph = U(this.graph);
        b.node = U(this.node);
        return b
    };
    X.prototype.to_undirected = X.prototype.O;
    X.prototype.reverse = function(a) {
        (a = !s(a) || a) ? (a = new this.constructor(m, {
            name: "Reverse of (" + this.name() + ")"
        }), a.l(this), a.b(T(this.g(m, l), function(a) {
            var c = a[0];
            a[0] = a[1];
            a[1] = c;
            a[2] = U(a[2]);
            return a
        })), a.graph = U(this.graph), a.node = U(this.node)) : (a = this.succ, this.succ = this.pred, this.pred = a, this.adj = this.succ, a = this);
        return a
    };
    X.prototype.reverse = X.prototype.reverse;
    X.prototype.w = function(a) {
        a = this.f(a);
        var b = new this.constructor,
            c = b.succ,
            d = b.pred,
            e = this.succ;
        P(a, function(a) {
            c.set(a, new M);
            d.set(a, new M)
        });
        c.forEach(function(a, b) {
            e.get(a).forEach(function(e, y) {
                c.a(e) && (b.set(e, y), d.get(e).set(a, y))
            })
        });
        P(b, function(a) {
            b.node.set(a, this.node.get(a))
        }, this);
        b.graph = this.graph;
        return b
    };
    X.prototype.subgraph = X.prototype.w;

    function Y(a, b) {
        if (!(this instanceof Y)) return new Y(a, b);
        S.call(this, a, b)
    }
    oa(Y, S);
    v("jsnx.classes.MultiGraph", Y);
    v("jsnx.MultiGraph", Y);
    Y.__name__ = "MultiGraph";
    Y.prototype.j = function(a, b, c, d) {
        var e, f;
        c != m && (!u(c) && "number" != typeof c) && (d = c, c = m);
        d = d || {};
        "object" !== r(d) && g(new J("The attr_dict argument must be an object."));
        this.adj.a(a) || (this.adj.set(a, new M), this.node.set(a, {}));
        this.adj.a(b) || (this.adj.set(b, new M), this.node.set(b, {}));
        if (this.adj.get(a).a(b)) {
            f = this.adj.get(a).get(b);
            if (c == m)
                for (c = F(f); c in f;) c += 1;
            e = G(f, "" + c, {});
            I(e, d);
            f[c] = e
        } else c != m || (c = 0), e = {}, I(e, d), f = $a(c, e), this.adj.get(a).set(b, f), this.adj.get(b).set(a, f)
    };
    Y.prototype.add_edge = Y.prototype.j;
    Y.prototype.b = function(a, b) {
        b = b || {};
        "object" !== r(b) && g(new J("The attr_dict argument must be an object."));
        P(a, function(a) {
            var d = pb(a),
                e, f, h = m,
                q = {};
            4 === d ? (e = a[0], f = a[1], h = a[2], q = a[3]) : 3 === d ? (e = a[0], f = a[1], q = a[2]) : 2 === d ? (e = a[0], f = a[1]) : g(new J("Edge tuple " + Q(a) + " must be a 2-tuple, 3-tuple or 4-tuple."));
            a = this.adj.a(e) ? this.adj.get(e).get(f, {}) : {};
            if (h == m)
                for (h = F(a); h in a;) h += 1;
            a = G(a, h, {});
            I(a, b, q);
            this.j(e, f, h, a)
        }, this)
    };
    Y.prototype.add_edges_from = Y.prototype.b;
    Y.prototype.s = function(a, b, c) {
        var d;
        try {
            d = this.adj.get(a).get(b)
        } catch (e) {
            e instanceof L || g(e), g(new J("The edge " + a + "-" + b + " is not in the graph"))
        }
        c != m ? (c in d || g(new J("The edge " + a + "-" + b + " with key " + c + " is not in the graph")), Ya(d, c)) : Ya(d, Ua(d));
        0 === F(d) && (this.adj.get(a).remove(b), a !== b && this.adj.get(b).remove(a))
    };
    Y.prototype.remove_edge = Y.prototype.s;
    Y.prototype.C = function(a) {
        P(a, function(a) {
            try {
                this.s(a[0], a[1], a[2])
            } catch (c) {
                c instanceof J || g(c)
            }
        }, this)
    };
    Y.prototype.remove_edges_from = Y.prototype.C;
    Y.prototype.L = function(a, b, c) {
        try {
            var d;
            if (c != m) {
                var e = this.adj.get(a).get(b);
                d = c in e
            } else d = this.adj.get(a).a(b);
            return d
        } catch (f) {
            return f instanceof L || g(f), n
        }
    };
    Y.prototype.has_edge = Y.prototype.L;
    Y.prototype.q = function(a, b, c) {
        return Na(this.g(a, b, c))
    };
    Y.prototype.edges = Y.prototype.q;
    Y.prototype.g = function(a, b, c) {
        ga(a) && (ga(b) && (c = b), b = a, a = m);
        var d = new M,
            e, f;
        if (a != m) {
            var h = [];
            a = T(this.f(a), function(a) {
                h[0] = a;
                h[1] = this.adj.get(a);
                return h
            }, this)
        } else a = B(this.adj);
        return b ? V(a, function(a) {
            e = a[0];
            var b = new A,
                c = B(a[1]);
            b.next = function() {
                try {
                    return c.next()
                } catch (a) {
                    a === z && d.set(e, l), g(a)
                }
            };
            return b
        }, function(a) {
            f = a[0];
            if (!d.a(f)) return vb(a[1])
        }, function(a) {
            return c ? [e, f, a[0], a[1]] : [e, f, a[1]]
        }) : V(a, function(a) {
            e = a[0];
            var b = new A,
                c = B(a[1]);
            b.next = function() {
                try {
                    return c.next()
                } catch (a) {
                    a ===
                        z && d.set(e, l), g(a)
                }
            };
            return b
        }, function(a) {
            f = a[0];
            if (!d.a(f)) return vb(a[1])
        }, function(a) {
            return c ? [e, f, a[0]] : [e, f]
        })
    };
    Y.prototype.edges_iter = Y.prototype.g;
    Y.prototype.Q = function(a, b, c, d) {
        s(d) || (d = m);
        try {
            return c != m ? G(this.adj.get(a).get(b), "" + c, d) : this.adj.get(a).get(b)
        } catch (e) {
            return e instanceof L || g(e), d
        }
    };
    Y.prototype.get_edge_data = Y.prototype.Q;
    Y.prototype.p = function(a, b) {
        var c;
        if (a != m) {
            var d = [];
            c = T(this.f(a), function(a) {
                d[0] = a;
                d[1] = this.adj.get(a);
                return d
            }, this)
        } else c = B(this.adj);
        return b != m ? D(c, function(a) {
            var c = a[0];
            a = a[1];
            var d = 0;
            a.forEach(function(a, c) {
                E(c, function(a) {
                    d += G(a, b, 1)
                })
            });
            a.a(c) && E(a.get(c), function(a) {
                d += G(a, b, 1)
            });
            return [c, d]
        }) : D(c, function(a) {
            var b = a[0];
            a = a[1];
            var c = 0;
            a.forEach(function(a, b) {
                c += F(b)
            });
            return [b, c + +(a.a(b) && F(a.get(b)))]
        })
    };
    Y.prototype.degree_iter = Y.prototype.p;
    Y.prototype.k = aa(l);
    Y.prototype.is_multigraph = Y.prototype.k;
    Y.prototype.d = aa(n);
    Y.prototype.is_directed = Y.prototype.d;
    Y.prototype.D = function() {
        var a = new $;
        a.l(this);
        a.b(function() {
            var a, c;
            return V(this.n(), function(c) {
                a = c[0];
                return B(c[1])
            }, function(a) {
                c = a[0];
                return vb(a[1])
            }, function(d) {
                return [a, c, d[0], U(d[1])]
            })
        }.call(this));
        a.graph = U(this.graph);
        a.node = U(this.node);
        return a
    };
    Y.prototype.to_directed = Y.prototype.D;
    Y.prototype.Y = function(a, b) {
        var c = [];
        a ? b ? this.adj.forEach(function(a, b) {
            b.a(a) && E(b.get(a), function(b, e) {
                c.push([a, a, e, b])
            })
        }) : this.adj.forEach(function(a, b) {
            b.a(a) && E(b.get(a), function(b) {
                c.push([a, a, b])
            })
        }) : b ? this.adj.forEach(function(a, b) {
            b.a(a) && E(b.get(a), function(b, e) {
                c.push([a, a, e])
            })
        }) : this.adj.forEach(function(a, b) {
            b.a(a) && E(b.get(a), function() {
                c.push([a, a])
            })
        });
        return c
    };
    Y.prototype.selfloop_edges = Y.prototype.Y;
    Y.prototype.M = function(a) {
        if (a == m) return this.size();
        try {
            return F(this.adj.get(a).get(a))
        } catch (b) {
            return b instanceof L || g(b), 0
        }
    };
    Y.prototype.number_of_edges = Y.prototype.M;
    Y.prototype.w = function(a) {
        a = this.f(a);
        var b = new this.constructor,
            c = b.adj,
            d = this.adj;
        C(a, function(a) {
            var b = new M;
            c.set(a, b);
            d.get(a).forEach(function(d, q) {
                if (c.a(d)) {
                    var y = H(q);
                    b.set(d, y);
                    c.get(d).set(a, y)
                }
            })
        });
        this.node.forEach(function(a, c) {
            b.node.set(a, c)
        });
        b.graph = this.graph;
        return b
    };
    Y.prototype.subgraph = Y.prototype.w;

    function $(a, b) {
        if (!(this instanceof $)) return new $(a, b);
        X.call(this, a, b)
    }
    oa($, X);
    var Wb = $.prototype,
        Xb = Y.prototype,
        Yb;
    for (Yb in Xb) Xb.hasOwnProperty(Yb) && "constructor" !== Yb && (Wb[Yb] = Xb[Yb]);
    v("jsnx.classes.MultiDiGraph", $);
    v("jsnx.MultiDiGraph", $);
    $.__name__ = "MultiDiGraph";
    $.prototype.j = function(a, b, c, d) {
        var e, f;
        c != m && (!u(c) && "number" != typeof c) && (d = c, c = m);
        d = d || {};
        "object" !== r(d) && g(new J("The attr_dict argument must be an object."));
        this.succ.a(a) || (this.succ.set(a, new M), this.pred.set(a, new M), this.node.set(a, {}));
        this.succ.a(b) || (this.succ.set(b, new M), this.pred.set(b, new M), this.node.set(b, {}));
        if (this.succ.get(a).a(b)) {
            f = this.adj.get(a).get(b);
            if (c == m)
                for (c = F(f); c in f;) c += 1;
            e = G(f, c.toString(), {});
            I(e, d);
            f[c] = e
        } else c != m || (c = 0), e = {}, I(e, d), f = $a(c, e), this.succ.get(a).set(b,
            f), this.pred.get(b).set(a, f)
    };
    $.prototype.add_edge = $.prototype.j;
    $.prototype.s = function(a, b, c) {
        var d;
        try {
            d = this.adj.get(a).get(b)
        } catch (e) {
            e instanceof L || g(e), g(new J("The edge " + a + "-" + b + " is not in the graph"))
        }
        c != m ? (c in d || g(new J("The edge " + a + "-" + b + " with key " + c + " is not in the graph")), Ya(d, c)) : Ya(d, Ua(d));
        0 === F(d) && (this.succ.get(a).remove(b), this.pred.get(b).remove(a))
    };
    $.prototype.remove_edge = $.prototype.s;
    $.prototype.g = function(a, b, c) {
        ga(a) && (ga(b) && (c = b), b = a, a = m);
        var d, e;
        if (a != m) {
            var f = [];
            a = T(this.f(a), function(a) {
                f[0] = a;
                f[1] = this.adj.get(a);
                return f
            }, this)
        } else a = B(this.adj);
        return b ? V(a, function(a) {
            d = a[0];
            return B(a[1])
        }, function(a) {
            e = a[0];
            return vb(a[1])
        }, function(a) {
            return c ? [d, e, a[0], a[1]] : [d, e, a[1]]
        }) : V(a, function(a) {
            d = a[0];
            return B(a[1])
        }, function(a) {
            e = a[0];
            return vb(a[1])
        }, function(a) {
            return c ? [d, e, a[0]] : [d, e]
        })
    };
    $.prototype.edges_iter = $.prototype.g;
    $.prototype.aa = $.prototype.g;
    $.prototype.out_edges_iter = $.prototype.aa;
    $.prototype.ga = function(a, b, c) {
        return Na(this.aa(a, b, c))
    };
    $.prototype.out_edges = $.prototype.ga;
    $.prototype.F = function(a, b, c) {
        ga(a) && (b = a, a = m);
        var d, e;
        if (a != m) {
            var f = [];
            a = T(this.f(a), function(a) {
                f[0] = a;
                f[1] = this.pred.get(a);
                return f
            }, this)
        } else a = B(this.pred);
        return b ? V(a, function(a) {
            d = a[0];
            return B(a[1])
        }, function(a) {
            e = a[0];
            return vb(a[1])
        }, function(a) {
            return c ? [e, d, a[0], a[1]] : [e, d, a[1]]
        }) : V(a, function(a) {
            d = a[0];
            return B(a[1])
        }, function(a) {
            e = a[0];
            return vb(a[1])
        }, function(a) {
            return c ? [e, d, a[0]] : [e, d]
        })
    };
    $.prototype.in_edges_iter = $.prototype.F;
    $.prototype.S = function(a, b, c) {
        return Na(this.F(a, b, c))
    };
    $.prototype.in_edges = $.prototype.S;
    $.prototype.p = function(a, b) {
        var c;
        if (a != m) {
            var d = [],
                e = [];
            c = sb(D(this.f(a), function(a) {
                d[0] = a;
                d[1] = this.succ.get(a);
                return d
            }, this), D(this.f(a), function(a) {
                e[0] = a;
                e[1] = this.pred.get(a);
                return e
            }, this))
        } else c = sb(B(this.succ), B(this.pred));
        return b != m ? T(c, function(a) {
            var c = a[0][1],
                d = 0;
            a[1][1].forEach(function(a, c) {
                E(c, function(a) {
                    d += +G(a, b, 1)
                })
            });
            c.forEach(function(a, c) {
                E(c, function(a) {
                    d += +G(a, b, 1)
                })
            });
            return [a[0][0], d]
        }) : T(c, function(a) {
            var b = 0,
                c = 0;
            a[1][1].forEach(function(a, c) {
                b += F(c)
            });
            a[0][1].forEach(function(a,
                b) {
                c += F(b)
            });
            return [a[0][0], b + c]
        })
    };
    $.prototype.degree_iter = $.prototype.p;
    $.prototype.R = function(a, b) {
        var c;
        if (a != m) {
            var d = [];
            c = T(this.f(a), function(a) {
                d[0] = a;
                d[1] = this.pred.get(a);
                return d
            }, this)
        } else c = B(this.pred);
        return b != m ? T(c, function(a) {
            var c = 0;
            a[1].forEach(function(a, d) {
                E(d, function(a) {
                    c += +G(a, b, 1)
                })
            });
            return [a[0], c]
        }) : T(c, function(a) {
            var b = 0;
            a[1].forEach(function(a, c) {
                b += F(c)
            });
            return [a[0], b]
        })
    };
    $.prototype.in_degree_iter = $.prototype.R;
    $.prototype.W = function(a, b) {
        var c;
        if (a != m) {
            var d = [];
            c = T(this.f(a), function(a) {
                d[0] = a;
                d[1] = this.succ.get(a);
                return d
            }, this)
        } else c = B(this.succ);
        return b != m ? T(c, function(a) {
            var c = 0;
            a[1].forEach(function(a, d) {
                E(d, function(a) {
                    c += +G(a, b, 1)
                })
            });
            return [a[0], c]
        }) : T(c, function(a) {
            var b = 0;
            a[1].forEach(function(a, c) {
                b += F(c)
            });
            return [a[0], b]
        })
    };
    $.prototype.out_degree_iter = $.prototype.W;
    $.prototype.k = aa(l);
    $.prototype.is_multigraph = $.prototype.k;
    $.prototype.d = aa(l);
    $.prototype.is_directed = $.prototype.d;
    $.prototype.D = function() {
        return ob(this)
    };
    $.prototype.to_directed = $.prototype.D;
    $.prototype.O = function(a) {
        var b = new Y;
        b.name(this.name());
        b.l(this);
        var c, d;
        a ? b.b(V(this.n(), function(a) {
            c = a[0];
            return B(a[1])
        }, function(a) {
            d = a[0];
            return vb(a[1])
        }, na(function(a) {
            if (this.L(d, c, a[0])) return [c, d, a[0], U(a[1])]
        }, this))) : b.b(V(this.n(), function(a) {
            c = a[0];
            return B(a[1])
        }, function(a) {
            d = a[0];
            return vb(a[1])
        }, function(a) {
            return [c, d, a[0], U(a[1])]
        }));
        b.graph = U(this.graph);
        b.node = U(this.node);
        return b
    };
    $.prototype.to_undirected = $.prototype.O;
    $.prototype.w = function(a) {
        a = this.f(a);
        var b = new this.constructor,
            c = b.succ,
            d = b.pred,
            e = this.succ;
        C(a, function(a) {
            c.set(a, new M);
            d.set(a, new M)
        });
        c.forEach(function(a, b) {
            e.get(a).forEach(function(e, y) {
                if (c.a(e)) {
                    var K = H(y);
                    b.set(e, K);
                    d.get(e).set(a, K)
                }
            })
        });
        this.node.forEach(function(a, c) {
            b.node.set(a, c)
        });
        b.graph = this.graph;
        return b
    };
    $.prototype.subgraph = $.prototype.w;
    $.prototype.reverse = function(a) {
        (a = !s(a) || a) ? (a = new this.constructor(m, {
            name: "Reverse of (" + this.name() + ")"
        }), a.l(this), a.b(D(this.g(m, l, l), function(a) {
            return [a[1], a[0], a[2], U(a[3])]
        })), a.graph = U(this.graph), a.node = U(this.node)) : (a = this.succ, this.succ = this.pred, this.pred = a, this.adj = this.succ, a = this);
        return a
    };
    $.prototype.reverse = $.prototype.reverse;

    function Zb(a) {
        return a.nodes()
    }
    v("jsnx.classes.func.nodes", Zb);
    v("jsnx.nodes", Zb);

    function $b(a) {
        return a.B()
    }
    v("jsnx.classes.func.nodes_iter", $b);
    v("jsnx.nodes_iter", $b);

    function ac(a, b) {
        return a.q(b)
    }
    v("jsnx.classes.func.edges", ac);
    v("jsnx.edges", ac);

    function bc(a, b) {
        return a.g(b)
    }
    v("jsnx.classes.func.edges_iter", bc);
    v("jsnx.edges_iter", bc);
    v("jsnx.degree", function(a, b, c) {
        return a.K(b, c)
    });

    function cc(a, b) {
        return a.A(b)
    }
    v("jsnx.classes.func.neighbors", cc);
    v("jsnx.neighbors", cc);

    function dc(a) {
        return a.H()
    }
    v("jsnx.classes.func.number_of_nodes", dc);
    v("jsnx.number_of_nodes", dc);

    function ec(a) {
        return a.M()
    }
    v("jsnx.classes.func.number_of_edges", ec);
    v("jsnx.number_of_edges", ec);

    function fc(a) {
        var b = a.H(),
            c = a.M();
        return 0 === c ? 0 : a.d() ? c / (b * (b - 1)) : 2 * c / (b * (b - 1))
    }
    v("jsnx.classes.func.density", fc);
    v("jsnx.density", fc);

    function gc(a) {
        a = a.K().o();
        var b = Math.max.apply(Math, a) + 1,
            c = Ga(b);
        x(a, function(a) {
            c[a] += 1
        });
        return c
    }
    v("jsnx.classes.func.degree_histogram", gc);
    v("jsnx.degree_histogram", gc);

    function hc(a) {
        return a.d()
    }
    v("jsnx.classes.func.is_directed", hc);
    v("jsnx.is_directed", hc);

    function ic(a) {
        function b() {
            g(new J("Frozen graph can't be modified"))
        }
        a.add_node = a.I = b;
        a.add_nodes_from = a.l = b;
        a.remove_node = a.N = b;
        a.remove_nodes_from = a.X = b;
        a.add_edge = a.j = b;
        a.add_edges_from = a.b = b;
        a.remove_edge = a.s = b;
        a.remove_edges_from = a.C = b;
        a.clear = a.clear = b;
        a.frozen = a.va = l;
        return a
    }
    v("jsnx.classes.func.freeze", ic);
    v("jsnx.freeze", ic);

    function jc(a) {
        return !!a.va
    }
    v("jsnx.classes.func.is_frozen", jc);
    v("jsnx.is_frozen", jc);

    function kc(a, b) {
        return a.w(b)
    }
    v("jsnx.classes.func.subgraph", kc);
    v("jsnx.subgraph", kc);

    function lc(a, b) {
        s(b) || (b = l);
        var c = new a.constructor;
        b && c.l(a);
        return c
    }
    v("jsnx.classes.func.create_empty_copy", lc);
    v("jsnx.create_empty_copy", lc);

    function mc(a, b) {
        var c = "";
        if (b != m) a.m(b) || g(new J("node " + b + " not in graph")), c = c + ("Node " + b + " has the following properties:\n") + ("Degree: " + a.K(b) + "\n"), c += "Neighbors: " + a.A(b).join(" ");
        else {
            var c = c + ("Name: " + a.name() + "\n"),
                c = c + ("Type: " + a.constructor.__name__ + "\n"),
                c = c + ("Number of nodes: " + a.H() + "\n"),
                c = c + ("Number of edges: " + a.M() + "\n"),
                d = a.H();
            if (0 < d)
                if (a.d()) c += "Average in degree: " + (Vb.apply(m, a.ja().o()) / d).toFixed(4) + "\n", c += "Average out degree: " + (Vb.apply(m, a.la().o()) / d).toFixed(4);
                else var e =
                    Vb.apply(m, a.K().o()),
            c = c + ("Average degree: " + (e / d).toFixed(4))
        }
        return c
    }
    v("jsnx.classes.func.info", mc);
    v("jsnx.info", mc);

    function nc(a, b, c) {
        E(c, function(c, e) {
            a.node.get(e)[b] = c
        })
    }
    v("jsnx.classes.func.set_node_attributes", nc);
    v("jsnx.set_node_attributes", nc);

    function oc(a, b) {
        var c = new M;
        a.node.forEach(function(a, e) {
            b in e && c.set(a, e[b])
        });
        return c
    }
    v("jsnx.classes.func.get_node_attributes", oc);
    v("jsnx.get_node_attributes", oc);

    function pc(a, b, c) {
        c.forEach(function(c, e) {
            a.get(c[0]).get(c[1])[b] = e
        })
    }
    v("jsnx.classes.func.set_edge_attributes", pc);
    v("jsnx.set_edge_attributes", pc);

    function qc(a, b) {
        var c = new M;
        E(a.q(m, l), function(a) {
            if (b in a[2]) {
                var e = a[2][b];
                a.length = 2;
                c.set(a, e)
            }
        });
        return c
    }
    v("jsnx.classes.func.get_edge_attributes", qc);
    v("jsnx.get_edge_attributes", qc);
    var uc, vc = m,
        wc = "add_node add_nodes_from add_edge add_edges_from remove_node remove_nodes_from remove_edge remove_edges_from clear".split(" ");
    v("jsnx.draw", function(a, b, c) {
        function d() {
            ra.h.attr("transform", function(a) {
                return ["translate(", a.x, ",", a.y, ")scale(", W, ")"].join("")
            });
            rc()
        }
        ga(b) && (c = b, b = m);
        b = b || vc || {};
        var e = b.d3 || window.d3,
            f = {};
        tb(f, xc, b);
        vc = b;
        e || g(Error("D3 requried for draw()"));
        f.element == m && uc == m && g(Error("Output element required for draw()"));
        uc = G(f, "element", uc);
        e.select(uc).select("svg.jsnx").remove();
        var h = e.select(uc),
            q = h.append("svg").classed("jsnx", l).attr("pointer-events", "all"),
            y = q.append("g");
        b = y.append("g").classed("edges",
            l).selectAll("g.edge");
        var K = y.append("g").classed("nodes", l).selectAll("g.node"),
            N = e.layout.force(),
            qa = f.width || parseInt(h.style("width"), 10),
            ca = f.height || parseInt(h.style("height"), 10),
            ya = f.layout_attr,
            h = f.nodelist || m,
            O, da, Z, sc = a.d(),
            sa = f.weighted,
            ra = {
                h: K,
                i: b
            };
        if (f.with_labels) {
            var za = f.labels;
            O = "object" === r(za) ? function(a) {
                return G(za, a.node, "")
            } : ha(za) ? za : u(za) ? function(a) {
                return a.data[za]
            } : function(a) {
                return a.node
            }
        }
        f.labels = O;
        if (sa) {
            var Ka = f.weights;
            Z = "object" === r(Ka) ? function(a) {
                return G(Ka,
                    a.node, 1)
            } : ha(Ka) ? Ka : u(Ka) ? function(a) {
                return G(a.data, Ka, 1)
            } : aa(1)
        }
        if (f.with_edge_labels) {
            var La = f.edge_labels;
            da = sa && !s(La) ? Z : "object" === r(La) ? function(a) {
                return G(za, a.node, "")
            } : ha(La) ? La : u(La) ? function(a) {
                return a.data[La]
            } : function(a) {
                return a.edge
            };
            f.edge_labels = da
        }
        if (sa && f.weighted_stroke) {
            var sa = Ia(a.g(m, l), function(a, b) {
                b = Z({
                    data: b[2]
                });
                return a > b ? a : b
            }),
                Oc = e.scale.linear().range([2, f.edge_style["stroke-width"]]).domain([0, sa]);
            f.edge_style["stroke-width"] = function(a) {
                return Oc(Z.call(this,
                    a))
            }
        }
        q.select("svg.jsnx").remove();
        q.attr("width", qa + "px").attr("height", ca + "px").style("opacity", 1E-6).transition().duration(1E3).style("opacity", 1);
        var Pc = {
            size: l,
            nodes: l,
            links: l,
            start: l
        };
        P(ya, function(a) {
            if (!(a in Pc)) N[a](ya[a])
        });
        N.nodes([]).links([]).size([qa, ca]);
        var Ra = 1,
            W = 1;
        if (f.pan_zoom.enabled) {
            var tc = f.pan_zoom.scale;
            (function() {
                var a = n,
                    b = 1,
                    c = Ra;
                q.call(e.behavior.zoom().on("zoom", function() {
                    var f = e.event.sourceEvent.shiftKey;
                    (f = tc && f || !(tc || f)) && !a ? (b = e.event.scale, c = Ra, a = l) : !f && a && (a =
                        n);
                    Ra = f ? c * (e.event.scale / b) : Ra;
                    W = !f ? Ra / e.event.scale : W;
                    f = e.event.translate;
                    y.attr("transform", "translate(" + f[0] + "," + f[1] + ")scale(" + e.event.scale + ")");
                    d()
                }))
            })()
        }
        var rc = ea,
            Aa = f.edge_offset,
            eb = f.node_attr.r,
            fb = f.node_style["stroke-width"];
        "circle" === f.node_shape ? (ha(eb) || (eb = function() {
            return f.node_attr.r
        }), ha(fb) || (fb = function() {
            return f.node_style["stroke-width"]
        }), Aa = function(a) {
            return [eb(a.source) + fb(a.source), eb(a.target) + fb(a.target)]
        }) : (fa(Aa) && (Aa = function() {
                return f.edge_offset
            }), "number" ==
            typeof Aa && (Aa = function() {
                return [f.edge_offset, f.edge_offset]
            }));
        var Ma = f.edge_style["stroke-width"];
        ha(Ma) || (Ma = function() {
            return f.edge_style["stroke-width"]
        });
        var gb = f.edge_label_offset,
            rc = sc ? function() {
                ra.i.each(function(a) {
                    if (a.source !== a.target) {
                        var b = e.select(this),
                            c = a.source.x,
                            d = a.source.y,
                            f = a.target.x,
                            h = a.target.y,
                            q = Ub(180 * Math.atan2(h - d, f - c) / Math.PI),
                            f = Math.sqrt(Math.pow(f - c, 2) + Math.pow(h - d, 2)),
                            h = Aa(a),
                            h = [h[0] * W, h[1] * W];
                        b.attr("transform", ["translate(", c, ",", d, ")rotate(", q, ")"].join(""));
                        c = Ma(a) * W;
                        d = f - h[1] - 2 * c;
                        q = c / 2;
                        b.select(".line").attr("d", ["M", h[0], 0, "L", h[0], -q, "L", d, -q, "L", d, -c, "L", f - h[1], 0, "z"].join(" "));
                        c = 1 / W;
                        b.select("text").attr("x", gb.x * c + h[0] + (f * c - h[0] - h[1]) / 2).attr("y", -Ma(a) / 2 + -gb.y * c).attr("transform", "scale(" + W + ")")
                    }
                })
            } : function() {
                ra.i.each(function(a) {
                    if (a.source !== a.target) {
                        var b = e.select(this),
                            c = a.source.x,
                            d = a.source.y,
                            h = a.target.x,
                            q = a.target.y,
                            y = Ub(180 * Math.atan2(q - d, h - c) / Math.PI),
                            h = Math.sqrt(Math.pow(h - c, 2) + Math.pow(q - d, 2)),
                            q = h / 2,
                            K = Aa(a),
                            K = [K[0] * W, K[1] * W],
                            N =
                                1 / W,
                            ya = Ma(a) * W,
                            O = 90 < y && 279 > y;
                        b.attr("transform", ["translate(", c, ",", d, ")rotate(", y, ")"].join(""));
                        b.select(".line").attr("d", ["M", K[0], ya / 4, "L", K[0], -ya / 4, "L", h - K[1], -ya / 4, "L", h - K[1], ya / 4, "z"].join(" "));
                        f.with_edge_labels && b.select("text").attr("x", (O ? 1 : -1) * gb.x * N + K[0] + (h * N - K[0] - K[1]) / 2).attr("y", -Ma(a) / 4 + -gb.y * N).attr("transform", "scale(" + W + ")" + (O ? "rotate(180," + q * (1 / W) + ",0)" : ""))
                    }
                })
            };
        N.on("tick", d);
        qa = a.B();
        ca = a.g();
        h && (c = n, qa = a.f(h), ca = a.g(h));
        ra.h = yc(a, qa, N, K, f.node_shape, O);
        ra.i = zc(a, ca, N, b,
            da);
        Ac(ra.h, {
            attr: f.node_attr,
            style: f.node_style,
            V: f.label_style,
            U: f.label_attr
        }, f.with_labels);
        Bc(ra.i, {
            attr: f.edge_attr,
            style: f.edge_style,
            V: f.edge_label_style,
            U: f.edge_label_attr
        }, f.with_edge_labels, m, sc);
        c ? Cc(a, N, f, ra) : a.bound ? Dc(a) : Ec(a);
        N.start();
        return N
    });

    function yc(a, b, c, d, e, f) {
        var h = c.nodes();
        P(b, function(b) {
            var c = a.node.get(b);
            b = {
                node: b,
                data: c,
                G: a
            };
            h.push(b);
            c.__d3datum__ = b
        });
        d = d.data(h, Fc);
        b = d.enter().append("g").classed("node", l).call(c.drag);
        b.append(e).classed("node-shape", l);
        f && b.append("text").text(f);
        return d
    }

    function zc(a, b, c, d, e) {
        var f = c.links();
        P(b, function(b) {
            var c = b[0],
                d = b[1];
            b = b[2] || a.Q(c, d);
            c = {
                edge: [c, d],
                redge: [d, c],
                source: a.node.get(c).__d3datum__,
                target: a.node.get(d).__d3datum__,
                data: b,
                G: a
            };
            f.push(c);
            b.__d3datum__ = c
        });
        d = d.data(f, Gc);
        b = d.enter().append("g").classed("edge", l);
        b.append("path").classed("line", l);
        e && b.append("text").text(e);
        return d
    }

    function Ac(a, b, c, d) {
        if (d != m) {
            var e = {};
            P(d, function(a) {
                e[t(a) ? a[0] : a] = l
            });
            a = a.filter(function(a) {
                return a.node in e
            })
        }
        var f = a.selectAll(".node-shape");
        E(b.attr, function(a, b) {
            f.attr(b, a)
        });
        E(b.style, function(a, b) {
            f.style(b, a)
        });
        if (c) {
            var h = a.selectAll("text");
            E(b.U, function(a, b) {
                h.attr(b, a)
            });
            E(b.V, function(a, b) {
                h.style(b, a)
            })
        }
    }

    function Bc(a, b, c, d, e) {
        if (d != m) {
            var f = {};
            P(d, function(a) {
                f[[a[0], a[1]]] = l
            });
            a = a.filter(function(a) {
                return a.edge in f || e || a.redge in f
            })
        }
        var h = a.selectAll(".line");
        E(b.attr, function(a, b) {
            h.attr(b, a)
        });
        E(b.style, function(a, b) {
            "stroke-width" != b && h.style(b, a)
        });
        h.style("stroke-width", 0);
        if (c) {
            var q = a.selectAll("text");
            E(b.U, function(a, b) {
                q.attr(b, a)
            });
            E(b.V, function(a, b) {
                q.style(b, a)
            })
        }
    }

    function Fc(a) {
        return a.node
    }

    function Gc(a) {
        return a.edge
    }

    function Hc(a, b, c, d) {
        var e = c.nodes();
        P(a.f(b), function(b) {
            xa(e, a.node.get(b).__d3datum__)
        });
        d = d.data(e, Fc);
        d.exit().remove();
        return d
    }

    function Ic(a, b, c, d) {
        var e = c.links();
        P(b, function(b) {
            xa(e, G(a.Q(b[0], b[1], {}), "__d3datum__", m))
        });
        d = d.data(e, Gc);
        d.exit().remove();
        return d
    }

    function Cc(a, b, c, d) {
        Dc(a, n);
        var e = a.constructor.prototype,
            f = c.node_shape,
            h = {
                attr: c.node_attr,
                style: c.node_style,
                U: c.label_attr,
                V: c.label_style
            }, q = {
                attr: c.edge_attr,
                style: c.edge_style,
                U: c.edge_label_attr,
                V: c.edge_label_style
            }, y = c.labels,
            K = c.edge_labels,
            N = c.with_labels,
            qa = c.with_edge_labels,
            ca = a.d();
        a.add_node = a.I = function(a) {
            var c = !this.m(a);
            e.add_node.apply(this, arguments);
            c && (d.h = yc(this, [a], b, d.h, f, y));
            Ac(d.h, h, N, [a]);
            b.start()
        };
        a.add_nodes_from = a.l = function(a) {
            var c = ua(ub(a), function(a) {
                return !this.m(t(a) ?
                    a[0] : a)
            }, this);
            e.add_nodes_from.apply(this, arguments);
            0 < c.length && (d.h = yc(this, c, b, d.h, f, y));
            Ac(d.h, h, N, a);
            b.start()
        };
        a.add_edge = a.j = function(c, O) {
            var da = !this.L(c, O),
                Z = [];
            da && (Z = ua(c == O ? [c] : [c, O], function(a) {
                return !this.m(a)
            }, this));
            e.add_edge.apply(a, arguments);
            0 < Z.length && (d.h = yc(this, Z, b, d.h, f, y), Ac(d.h, h, N, Z));
            da && (d.i = zc(this, [
                [c, O]
            ], b, d.i, K));
            Bc(d.i, q, qa, [
                [c, O]
            ], ca);
            b.start()
        };
        a.add_edges_from = a.b = function(c) {
            var O = [],
                da = [],
                Z = {}, ca = {}, sa = this.d();
            P(c, function(a) {
                var b = a[0];
                a = a[1];
                if (!this.L(b,
                    a) && !([b, a] in Z) && (sa || !([a, b] in Z))) O.push([b, a]), Z[[b, a]] = l, !this.m(b) && !(b in ca) && (da.push(b), ca[b] = l), !this.m(a) && !(a in ca) && (da.push(a), ca[a] = l)
            }, this);
            e.add_edges_from.apply(a, arguments);
            0 < da.length && (d.h = yc(this, da, b, d.h, f, y), Ac(d.h, h, N, da));
            0 < O.length && (d.i = zc(this, O, b, d.i, K));
            Bc(d.i, q, qa, O, sa);
            b.start()
        };
        a.remove_node = a.N = function(c) {
            try {
                if (this.m(c)) {
                    d.h = Hc(this, [c], b, d.h);
                    var f = this.g([c]);
                    this.d() && (f = Ja(f, this.F([c])));
                    d.i = Ic(this, f, b, d.i);
                    b.resume()
                }
            } catch (h) {}
            e.remove_node.apply(a,
                arguments)
        };
        a.remove_nodes_from = a.X = function(c) {
            try {
                d.h = Hc(this, c, b, d.h);
                var f = this.g(c);
                this.d() && (f = Ja(f, this.F(c)));
                d.i = Ic(this, f, b, d.i);
                b.resume()
            } catch (h) {}
            e.remove_nodes_from.apply(a, arguments)
        };
        a.remove_edge = a.s = function(c, f) {
            try {
                d.i = Ic(this, [
                    [c, f]
                ], b, d.i), b.resume()
            } catch (h) {}
            e.remove_edge.apply(a, arguments)
        };
        a.remove_edges_from = a.C = function(c) {
            try {
                d.i = Ic(this, c, b, d.i), b.resume()
            } catch (f) {}
            e.remove_edges_from.apply(a, arguments)
        };
        a.clear = a.clear = function() {
            d.h = d.h.data([], Fc);
            d.h.exit().remove();
            d.i = d.i.data([], Gc);
            d.i.exit().remove();
            b.nodes([]).links([]).resume();
            e.clear.apply(a, arguments)
        };
        a.bound = l
    }
    v("jsnx.is_bound", function(a) {
        return a.bound
    });

    function Dc(a, b) {
        if (a.bound) {
            var c = a.constructor.prototype;
            x(wc, function(b) {
                a[b] = c[b]
            });
            delete a.bound;
            (!s(b) || b) && Ec(a)
        }
    }
    v("jsnx.unbind", Dc);

    function Ec(a) {
        P(a.B(l), function(a) {
            Ya(a[1], "__d3datum__")
        });
        P(a.g(m, l), function(a) {
            Ya(a[2], "__d3datum__")
        })
    }
    var xc = {
        layout_attr: {
            charge: -120,
            linkDistance: 60
        },
        node_shape: "circle",
        node_attr: {
            r: 10
        },
        node_style: {
            "stroke-width": 2,
            stroke: "#333",
            fill: "#999",
            cursor: "pointer"
        },
        edge_attr: {},
        edge_style: {
            fill: "#000",
            "stroke-width": 3
        },
        label_attr: {},
        label_style: {
            "text-anchor": "middle",
            "dominant-baseline": "central",
            cursor: "pointer",
            "-webkit-user-select": "none",
            fill: "#000"
        },
        edge_label_attr: {},
        edge_label_style: {
            "font-size": "0.8em",
            "text-anchor": "middle",
            "-webkit-user-select": "none"
        },
        edge_label_offset: {
            x: 0,
            y: 0.5
        },
        with_labels: n,
        with_edge_labels: n,
        edge_offset: 10,
        weighted: n,
        weights: "weight",
        weighted_stroke: l,
        pan_zoom: {
            enabled: l,
            scale: l
        }
    };

    function Jc(a) {
        try {
            return Kc(a), l
        } catch (b) {
            if (b instanceof jb) return n;
            g(b)
        }
    }
    v("jsnx.algorithms.dag.is_directed_acyclic_graph", Jc);
    v("jsnx.is_directed_acyclic_graph", Jc);

    function Kc(a, b) {
        a.d() || g(new J("Topological sort not defined on undirected graphs."));
        var c = new R,
            d = [],
            e = new R;
        b != m || (b = a.B());
        P(b, function(b) {
            if (!e.a(b))
                for (b = [b]; 0 < b.length;) {
                    var h = b[b.length - 1];
                    if (e.a(h)) b.pop();
                    else {
                        c.add(h);
                        var q = [];
                        a.get(h).forEach(function(a) {
                            e.a(a) || (c.a(a) && g(new jb("Graph contains a cycle")), q.push(a))
                        });
                        0 < q.length ? b.push.apply(b, q) : (e.add(h), Da(d, k, 0, h))
                    }
                }
        });
        return d
    }
    v("jsnx.algorithms.dag.topological_sort", Kc);
    v("jsnx.topological_sort", Kc);

    function Lc(a, b) {
        function c(a, b, d, e) {
            b.add(e);
            a.get(e).forEach(function(e) {
                if (b.a(e)) b.a(e) && !(0 <= ta(d, e)) && g(new jb("Graph contains a cycle"));
                else if (!c(a, b, d, e)) return n
            });
            Da(d, k, 0, e);
            return l
        }
        a.d() || g(new J("Topological sort not defined on undirected graphs."));
        var d = new R,
            e = [];
        b != m || (b = a.B());
        P(b, function(b) {
            !(0 <= ta(e, b)) && !c(a, d, e, b) && g(new jb("Graph contains a cycle"))
        });
        return e
    }
    v("jsnx.algorithms.dag.topological_sort_recursive", Lc);
    v("jsnx.topological_sort_recursive", Lc);
    var Nc = function Mc(b) {
        b.d() || g(new J("is_aperiodic not defined for undirected graphs."));
        var c = b.B().next(),
            d = new M;
        d.set(c, 0);
        for (var c = [c], e = 0, f = 1; 0 < c.length;) {
            var h = [];
            x(c, function(c) {
                b.get(c).forEach(function(b) {
                    d.a(b) ? e = xb(e, d.get(c) - d.get(b) + 1) : (h.push(b), d.set(b, f))
                })
            });
            c = h;
            f += 1
        }
        return d.count() === pb(b) ? 1 === e : 1 === e && Mc(b.w((new R(b.nodes())).da(d.keys())))
    };
    v("jsnx.algorithms.dag.is_aperiodic", Nc);
    v("jsnx.is_aperiodic", Nc);

    function Qc(a, b, c) {
        var d = b;
        !ha(d.set) && !ha(d.get) && (d = new M(d));
        ha(b) && (d = new M, C(a.B(), function(a) {
            d.set(a, b(a))
        }));
        return !s(c) || c ? Rc(a, d) : Sc(a, d)
    }
    v("jsnx.relabel.relabel_nodes", Qc);
    v("jsnx.relabel_nodes", Qc);

    function Sc(a, b) {
        var c = new R(b.keys()),
            d;
        if (0 < c.ea(b.o()).count()) {
            c = new X(b);
            c.C(c.Y());
            try {
                d = Kc(c)
            } catch (e) {
                e instanceof jb && g(new jb("The node label sets are overlapping and no ordering can resolve the mapping. Use copy=True."))
            }
            d.reverse()
        } else d = c;
        var f = a.k(),
            h = a.d(),
            q;
        C(d, function(c) {
            var d;
            b.a(c) && (d = b.get(c), a.m(c) || g(new J("Node " + c + " is not in the graph.")), a.I(d, a.node.get(c)), f ? (q = va(a.q(c, l, l), function(a) {
                return [d, a[1], a[2], a[3]]
            }), h && (q = Ba(q, va(a.S(c, l, l), function(a) {
                return [a[0], d, a[2],
                    a[3]]
            })))) : (q = va(a.q(c, l), function(a) {
                return [d, a[1], a[2]]
            }), h && (q = Ba(q, va(a.S(c, l), function(a) {
                return [a[0], d, a[2]]
            })))), a.N(c), a.b(q))
        });
        return a
    }

    function Rc(a, b) {
        var c = new a.constructor;
        c.name("(" + a.name() + ")");
        a.k() ? c.b(D(a.g(m, l, l), function(a) {
            return [b.get(a[0], a[0]), b.get(a[1], a[1]), a[2], H(a[3])]
        })) : c.b(D(a.g(m, l), function(a) {
            return [b.get(a[0], a[0]), b.get(a[1], a[1]), H(a[2])]
        }));
        c.l(D(rb(a), function(a) {
            return b.get(a, a)
        }));
        var d = new M;
        a.node.forEach(function(c) {
            d.set(b.get(c, c), H(a.node.get(c)))
        });
        d.forEach(function(a, b) {
            c.node.set(a, b)
        });
        I(c.graph, H(a.graph));
        return c
    }

    function Tc(a, b, c, d) {
        3 === arguments.length && ga(c) ? (d = c, c = m) : 2 === arguments.length && (ga(b) ? (d = b, b = m) : u(b) && (c = b, b = m));
        b != m || (b = 0);
        c != m || (c = "default");
        d != m || (d = l);
        a.H();
        var e = new M,
            f, h, q, y;
        if ("default" === c) {
            f = a.nodes();
            h = 0;
            q = b;
            for (y = f.length; h < y; h++, q++) e.set(f[h], q)
        } else if ("sorted" === c) {
            f = a.nodes();
            w.sort.call(f, Fa);
            h = 0;
            q = b;
            for (y = f.length; h < y; h++, q++) e.set(f[h], q)
        } else if ("increasing degree" === c) {
            f = Na(a.p());
            f.sort(function(a, b) {
                return a[1] - b[1]
            });
            h = 0;
            q = b;
            for (y = f.length; h < y; h++, q++) e.set(f[h][0], q)
        } else if ("decreasing degree" ===
            c) {
            f = Na(a.p());
            f.sort(function(a, b) {
                return b[1] - a[1]
            });
            h = 0;
            q = b;
            for (y = f.length; h < y; h++, q++) e.set(f[h][0], q)
        } else g(new J("Unkown node ordering: " + c));
        h = Qc(a, e);
        h.name("(" + a.name() + ")_with_int_labels");
        d || (h.node_labels = e);
        return h
    }
    v("jsnx.relabel.convert_node_labels_to_integers", Tc);
    v("jsnx.convert_node_labels_to_integers", Tc);
}));
