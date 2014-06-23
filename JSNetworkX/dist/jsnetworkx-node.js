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
    function h(a) {
        throw a;
    }
    var aa = void 0,
        k = !0,
        l = null,
        m = !1;

    function ba(a) {
        return function() {
            return a
        }
    }
    var p, ca = this;

    function q(a) {
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
        return a !== aa
    }

    function da(a) {
        return "array" == q(a)
    }

    function t(a) {
        var b = q(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function u(a) {
        return "string" == typeof a
    }

    function v(a) {
        return "boolean" == typeof a
    }

    function ea(a) {
        return "number" == typeof a
    }

    function fa(a) {
        return "function" == q(a)
    }

    function ga(a) {
        var b = typeof a;
        return "object" == b && a != l || "function" == b
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ia = 0;

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ka(a, b, c) {
        a || h(Error());
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

    function la(a, b, c) {
        la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return la.apply(l, arguments)
    }

    function w(a, b) {
        var c = a.split("."),
            d = ca;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)!c.length && b !== aa ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }

    function ma(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.gb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function na(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = String(arguments[c]).replace(/\$/g, "$$$$");
            a = a.replace(/\%s/, d)
        }
        return a
    };
    var x = Array.prototype,
        oa = x.indexOf ? function(a, b, c) {
            return x.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (u(a)) return !u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }, y = x.forEach ? function(a, b, c) {
            x.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        }, pa = x.filter ? function(a, b, c) {
            return x.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = u(a) ? a.split("") :
                    a, n = 0; n < d; n++)
                if (n in g) {
                    var r = g[n];
                    b.call(c, r, n, a) && (e[f++] = r)
                }
            return e
        }, z = x.map ? function(a, b, c) {
            return x.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        };

    function qa(a, b) {
        if (a.reduce) return a.reduce(b, 0);
        var c = 0;
        y(a, function(d, e) {
            c = b.call(aa, c, d, e, a)
        });
        return c
    }
    var ra = x.some ? function(a, b, c) {
            return x.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return k;
            return m
        };

    function sa(a) {
        if (!da(a))
            for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0
    }

    function ta(a) {
        return x.concat.apply(x, arguments)
    }

    function ua(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function va(a, b, c, d) {
        x.splice.apply(a, wa(arguments, 1))
    }

    function wa(a, b, c) {
        return 2 >= arguments.length ? x.slice.call(a, b) : x.slice.call(a, b, c)
    }

    function ya(a, b, c) {
        if (!t(a) || !t(b) || a.length != b.length) return m;
        var d = a.length;
        c = c || za;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return m;
        return k
    }

    function Aa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function za(a, b) {
        return a === b
    }

    function Ba(a) {
        for (var b = [], c = 0; c < a; c++) b[c] = 0;
        return b
    }

    function Ca(a) {
        if (!arguments.length) return [];
        for (var b = [], c = 0;; c++) {
            for (var d = [], e = 0; e < arguments.length; e++) {
                var f = arguments[e];
                if (c >= f.length) return b;
                d.push(f[c])
            }
            b.push(d)
        }
    }

    function Da(a) {
        for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var A = "StopIteration" in ca ? ca.StopIteration : Error("StopIteration");

    function B() {}
    B.prototype.next = function() {
        h(A)
    };
    B.prototype.C = function() {
        return this
    };

    function C(a) {
        if (a instanceof B) return a;
        if ("function" == typeof a.C) return a.C(m);
        if (t(a)) {
            var b = 0,
                c = new B;
            c.next = function() {
                for (;;) {
                    b >= a.length && h(A);
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        h(Error("Not implemented"))
    }

    function D(a, b, c) {
        if (t(a)) try {
            y(a, b, c)
        } catch (d) {
            d !== A && h(d)
        } else {
            a = C(a);
            try {
                for (;;) b.call(c, a.next(), aa, a)
            } catch (e) {
                e !== A && h(e)
            }
        }
    }

    function F(a, b, c) {
        var d = C(a);
        a = new B;
        a.next = function() {
            for (;;) {
                var a = d.next();
                return b.call(c, a, aa, d)
            }
        };
        return a
    }

    function Ea(a) {
        if (t(a)) return ua(a);
        a = C(a);
        var b = [];
        D(a, function(a) {
            b.push(a)
        });
        return b
    }

    function Fa(a, b) {
        try {
            return C(a).next()
        } catch (c) {
            return c != A && h(c), b
        }
    };

    function Ga() {}
    Ga.na = function() {
        return Ga.pa ? Ga.pa : Ga.pa = new Ga
    };
    Ga.prototype.Ja = 0;
    Ga.na();

    function Ha(a) {
        if (!t(a)) return m;
        for (var b = 0, c = a.length; b < c; b++)
            if (isNaN(a[b])) return m;
        return k
    }
    w("jsnx.utils.misc.is_list_of_ints", Ha);
    w("jsnx.utils.is_list_of_ints", Ha);

    function Ja(a) {
        var b = 0;
        return F(a, function(a) {
            return b += a
        })
    }
    w("jsnx.utils.misc.cumulative_sum", Ja);
    w("jsnx.utils.cumulative_sum", Ja);

    function Ka() {
        return ":" + (Ga.na().Ja++).toString(36)
    }
    w("jsnx.utils.misc.generate_unique_node", Ka);
    w("jsnx.utils.generate_unique_node", Ka);

    function G(a, b) {
        for (var c in a) b.call(aa, a[c], c, a)
    }

    function La(a, b, c) {
        var d = {}, e;
        for (e in a) d[e] = b.call(c, a[e], e, a);
        return d
    }

    function H(a) {
        var b = 0,
            c;
        for (c in a) b++;
        return b
    }

    function Ma(a) {
        for (var b in a) return b
    }

    function Na(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Pa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Qa(a) {
        for (var b in a) delete a[b]
    }

    function Ra(a, b) {
        b in a && delete a[b]
    }

    function I(a, b, c) {
        return b in a ? a[b] : c
    }

    function Sa(a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function J(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ta.length; f++) c = Ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function Ua(a) {
        var b = arguments.length;
        if (1 == b && da(arguments[0])) return Ua.apply(l, arguments[0]);
        b % 2 && h(Error("Uneven number of arguments"));
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    };

    function Va(a) {
        var b = arguments;
        1 === arguments.length && t(arguments[0]) && (b = arguments[0]);
        this.Y = "t";
        for (var c = 0, d = b.length; c < d; c++) this[c] = b[c], this.Y += Wa(b[c]);
        this.length = b.length;
        b = this;
        Object.isFrozen && !Object.isFrozen(this) && (b = Object.create(this), Object.freeze(b));
        return b
    }
    Va.prototype.Y = "";
    Va.prototype.length = 0;
    w("jsnx.contrib.Tuple.prototype.length", Va.prototype.length);
    Va.prototype.toString = function() {
        return this.Y
    };
    w("jsnx.contrib.Tuple.prototype.toString", Va.prototype.toString);

    function Xa(a) {
        return t(arguments[0]) ? new Va(arguments[0]) : new Va(arguments)
    }
    w("jsnx.Tuple", Xa);
    w("jsnx.t", Xa);

    function Ya(a) {
        this.name = "JSNetworkXException";
        this.message = a
    }
    w("jsnx.exception.JSNetworkXException", Ya);
    Ya.prototype = Error();
    Ya.prototype.constructor = Ya;
    w("jsnx.JSNetworkXException", Ya);

    function L(a) {
        Ya.call(this, a);
        this.name = "JSNetworkXError"
    }
    ma(L, Ya);
    w("jsnx.exception.JSNetworkXError", L);
    w("jsnx.JSNetworkXError", L);

    function Za(a) {
        Ya.call(this, a);
        this.name = "JSNetworkXPointlessConcept"
    }
    ma(Za, Ya);
    w("jsnx.exception.JSNetworkXPointlessConcept", Za);
    w("jsnx.JSNetworkXPointlessConcept", Za);

    function $a(a) {
        Ya.call(this, a);
        this.name = "JSNetworkXAlgorithmError"
    }
    ma($a, Ya);
    w("jsnx.exception.JSNetworkXAlgorithmError", $a);
    w("jsnx.JSNetworkXAlgorithmError", $a);

    function ab(a) {
        $a.call(this, a);
        this.name = "JSNetworkXUnfeasible"
    }
    ma(ab, $a);
    w("jsnx.exception.JSNetworkXUnfeasible", ab);
    w("jsnx.JSNetworkXUnfeasible", ab);

    function bb(a) {
        ab.call(this, a);
        this.name = "JSNetworkXNoPath"
    }
    ma(bb, ab);
    w("jsnx.exception.JSNetworkXNoPath", bb);
    w("jsnx.JSNetworkXNoPath", bb);

    function cb(a) {
        $a.call(this, a);
        this.name = "JSNetworkXUnbounded"
    }
    ma(cb, $a);
    w("jsnx.exception.JSNetworkXUnbounded", cb);
    w("jsnx.JSNetworkXUnbounded", cb);

    function N(a) {
        this.name = "KeyError";
        this.message = a
    }
    N.prototype = Error();
    N.prototype.constructor = N;
    w("jsnx.KeyError", N);
    w("jsnx.version", "0.2.0");

    function Wa(a, b) {
        var c = typeof a;
        return "object" === c || "function" === c ? a.hasOwnProperty("__hash__") ? a.__hash__ : a.toString !== Object.prototype.toString && a.toString !== Array.prototype.toString ? a.toString() : b ? b(a) : "o" + (a[ha] || (a[ha] = ++ia)) : c.substr(0, 1) + a
    }
    w("jsnx.contrib.misc.get_hash", Wa);

    function O(a) {
        this.A = {};
        this.w = {};
        this.u = {};
        this.f = {};
        if (a != l)
            if (db(a) || t(a)) P(a, function(a) {
                this.set.apply(this, a)
            }, this);
            else
        if (ga(a))
            for (var b in a) this.set(isNaN(+b) ? b : +b, a[b])
    }
    w("jsnx.contrib.Map", O);
    w("jsnx.Map", O);

    function eb(a, b) {
        switch (typeof b) {
            case "number":
                return a.w;
            case "string":
                return a.A;
            default:
                return a.u
        }
    }
    O.prototype.get = function(a, b) {
        var c = eb(this, a);
        if ("undefined" !== typeof c[a]) return c[a];
        if (s(b)) return b;
        h(new N("Map does not contain key " + fb(a)))
    };
    O.prototype.get = O.prototype.get;
    O.prototype.a = function(a) {
        return "undefined" !== typeof eb(this, a)[a]
    };
    O.prototype.has = O.prototype.a;
    O.prototype.set = function(a, b) {
        var c = eb(this, a);
        c[a] = b;
        c === this.u && (this.f[a] = a);
        return b
    };
    O.prototype.set = O.prototype.set;
    O.prototype.remove = function(a) {
        var b = eb(this, a);
        "undefined" !== typeof b[a] ? (delete b[a], b === this.u && delete this.f[a]) : h(new N("Map does not contain key " + fb(a)))
    };
    O.prototype.remove = O.prototype.remove;
    O.prototype.S = function() {
        var a = [],
            b;
        for (b in this.w) a.push([+b, this.w[b]]);
        for (b in this.A) a.push([b, this.A[b]]);
        for (b in this.u) a.push([this.f[b], this.u[b]]);
        return a
    };
    O.prototype.items = O.prototype.S;
    O.prototype.copy = function(a) {
        return gb(this, a)
    };
    O.prototype.keys = function() {
        return z(Pa(this.w), function(a) {
            return +a
        }).concat(Pa(this.A)).concat(Na(this.f))
    };
    O.prototype.keys = O.prototype.keys;
    O.prototype.j = function() {
        return Na(this.w).concat(Na(this.A)).concat(Na(this.u))
    };
    O.prototype.values = O.prototype.j;
    O.prototype.C = function() {
        var a = new B,
            b = Pa(this.A),
            c = Pa(this.w),
            d = Pa(this.u),
            e = 0,
            f = 0,
            g = 0;
        a.next = la(function() {
            var a;
            if (e < c.length) return a = c[e++], [+a, this.w[a]];
            if (f < b.length) return a = b[f++], [a, this.A[a]];
            if (g < d.length) return a = d[g++], [this.f[a], this.u[a]];
            h(A)
        }, this);
        return a
    };
    O.prototype.count = function() {
        return H(this.u) + H(this.w) + H(this.A)
    };
    O.prototype.count = O.prototype.count;
    O.prototype.clear = function() {
        Qa(this.A);
        Qa(this.w);
        Qa(this.u);
        Qa(this.f)
    };
    O.prototype.clear = O.prototype.clear;
    O.prototype.forEach = function(a, b) {
        D(this, function(c) {
            a.apply(b, c)
        })
    };
    O.prototype.forEach = O.prototype.forEach;

    function Q(a) {
        this.e = new O;
        a != l && (db(a) || t(a)) && P(a, function(a) {
            this.add(a)
        }, this)
    }
    w("jsnx.contrib.Set", Q);
    w("jsnx.Set", Q);
    Q.prototype.a = function(a) {
        return this.e.a(a)
    };
    Q.prototype.has = Q.prototype.a;
    Q.prototype.add = function(a) {
        this.e.set(a, k)
    };
    Q.prototype.add = Q.prototype.add;
    Q.prototype.remove = function(a) {
        try {
            this.e.remove(a)
        } catch (b) {
            b instanceof N || h(b)
        }
    };
    Q.prototype.remove = Q.prototype.remove;
    Q.prototype.copy = function(a) {
        return gb(this, a)
    };
    Q.prototype.j = function() {
        return this.e.keys()
    };
    Q.prototype.values = Q.prototype.j;
    Q.prototype.C = function() {
        return F(this.e, function(a) {
            return a[0]
        })
    };
    Q.prototype.H = function(a) {
        for (var b = new Q(this.j()), c = 0, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            e instanceof Q && (e = e.j());
            for (var f = 0, g = e.length; f < g; f++) b.remove(e[f])
        }
        return b
    };
    Q.prototype.difference = Q.prototype.H;
    Q.prototype.n = function(a) {
        for (var b = new Q, c = 0, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            e instanceof Q && (e = e.j());
            for (var f = 0, g = e.length; f < g; f++) this.a(e[f]) && b.add(e[f])
        }
        return b
    };
    Q.prototype.intersection = Q.prototype.n;
    Q.prototype.count = function() {
        return this.e.count()
    };
    Q.prototype.count = Q.prototype.count;
    Q.prototype.clear = function() {
        this.e.clear()
    };
    Q.prototype.clear = Q.prototype.clear;
    Q.prototype.forEach = function(a, b) {
        D(this, a, b)
    };
    Q.prototype.forEach = Q.prototype.forEach;
    w("jsnx.filter", function(a, b, c) {
        var d = C(a);
        a = new B;
        a.next = function() {
            for (;;) {
                var a = d.next();
                if (b.call(c, a, aa, d)) return a
            }
        };
        return a
    });

    function hb(a) {
        var b = 0;
        s(b) || (b = l);
        var c = new O;
        P(a, function(a) {
            c.set(a, b)
        });
        return c
    }

    function db(a) {
        return a != l && (a instanceof B || fa(a.C))
    }

    function ib(a) {
        if (a instanceof R) return a.L();
        if (u(a) || t(a)) return a.length;
        if (jb(a)) return H(a);
        h(new TypeError)
    }

    function P(a, b, c, d) {
        v(c) && (d = c, c = l);
        if (d) {
            var e = b;
            b = function(a) {
                e.apply(this, a)
            }
        }
        a instanceof R ? D(kb(a), b, c) : db(a) ? D(a, b, c) : t(a) || u(a) ? y(a, b, c) : ga(a) && P(Pa(a), b, c)
    }
    w("jsnx.forEach", P);

    function S(a, b, c) {
        if (a instanceof R) return S(kb(a), b, c);
        if (t(a)) return z(a, b, c);
        if (db(a)) return F(a, b, c);
        if (ga(a)) return La(a, b, c);
        h(new TypeError)
    }
    w("jsnx.map", S);

    function lb(a) {
        var b = arguments,
            c = b[0];
        if (t(c)) return Ca.apply(l, b);
        if (db(c)) {
            var c = new B,
                d = b.length;
            c.next = function() {
                for (var a = [], c = 0; c < d; c++) a.push(b[c].next());
                return a
            };
            return c
        }
        if (ga(c)) return Ca.apply(l, z(b, Pa));
        h(new TypeError)
    }

    function mb(a, b) {
        a = fa(b) ? T(S(a, function() {
            return b.apply(l, arguments)
        })) : T(a);
        return Math.max.apply(l, a)
    }

    function U(a, b, c) {
        if (0 === arguments.length) return C([]);
        1 === arguments.length ? (b = a, a = 0, c = 1) : 2 === arguments.length ? c = 1 : 3 === arguments.length && 0 === arguments[2] && h("range() step argument must not be zero");
        var d = new B,
            e = 0 > c,
            f = a,
            g;
        d.next = function() {
            (e && f <= b || !e && f >= b) && h(A);
            g = f;
            f += c;
            return g
        };
        return d
    }

    function nb(a) {
        var b = T(a),
            c = b.length;
        if (2 > c) return new B;
        var d = T(U(2));
        a = new B;
        a.next = function() {
            var a = z(d, function(a) {
                return b[a]
            });
            this.next = function() {
                var a = m,
                    e;
                for (e = 2; e--;)
                    if (d[e] != e + c - 2) {
                        a = k;
                        break
                    }
                a || h(A);
                d[e] += 1;
                for (a = e + 1; 2 > a; a++) d[a] = d[a - 1] + 1;
                return z(d, function(a) {
                    return b[a]
                })
            };
            return a
        };
        return a
    }

    function ob(a) {
        var b = T(a),
            c = b.length,
            d = ea(2) ? 2 : c;
        if (d > c) return new B;
        var e = T(U(c)),
            f = T(U(c, c - d, -1));
        a = new B;
        var g = new B,
            n, r = k;
        a.next = function() {
            this.next = n.next;
            return z(e.slice(0, d), function(a) {
                return b[a]
            })
        };
        g.next = function() {
            return r
        };
        n = V(g, function(a) {
                a || h(A);
                r = m;
                return U(d - 1, -1, -1)
            }, function(a) {
                if (!r)
                    if (f[a] -= 1, 0 === f[a]) e.splice.apply(e, [a, e.length].concat(e.slice(a + 1).concat([e[a]]))), f[a] = c - a;
                    else {
                        var g = f[a],
                            n = e[a];
                        e[a] = e[e.length - g];
                        e[e.length - g] = n;
                        r = k;
                        return kb([z(e.slice(0, d), function(a) {
                            return b[a]
                        })])
                    }
            },
            function(a) {
                return a
            });
        return a
    }

    function T(a) {
        if (a instanceof R) return T(kb(a));
        if (t(a)) return ua(a);
        if (db(a)) return Ea(a);
        if (ga(a)) return Pa(a);
        h(new TypeError)
    }
    w("jsnx.toArray", T);

    function pb(a) {
        var b = new B,
            c = C(Pa(a));
        b.next = function() {
            var b = c.next();
            return [b, a[b]]
        };
        return b
    }

    function kb(a) {
        if (a instanceof R) return kb(a.adj.keys());
        "object" === q(a) && (!t(a) && !db(a)) && (a = Pa(a));
        return C(a)
    }

    function V(a, b) {
        var c = new B,
            d = wa(arguments, 1);
        if (0 === d.length) return a;
        try {
            a = C(a)
        } catch (e) {
            return c.next = function() {
                "Not implemented" === e.message && h(new TypeError)
            }, c
        }
        var f = 0,
            g = d.length,
            n = [a];
        c.next = function() {
            do try {
                var a, b;
                do a = n[f].next(), s(a) && (b = d[f](a)); while (!s(a));
                if (db(b)) {
                    if (f === g - 1) return b;
                    n.push(b);
                    f += 1
                } else if (s(b)) return b
            } catch (c) {
                c !== A && h(c), 0 < f ? (n.pop(), f -= 1) : h(c)
            }
            while (1)
        };
        return c
    }
    w("jsnx.sentinelIterator", function(a, b) {
        var c = new B;
        c.next = function() {
            return Fa(a, b)
        };
        return c
    });

    function jb(a) {
        var b = Object.prototype.hasOwnProperty;
        if (!a || "object" !== q(a) || a.nodeType || a == a.window) return m;
        try {
            if (a.constructor && !b.call(a, "constructor") && !b.call(a.constructor.prototype, "isPrototypeOf")) return m
        } catch (c) {
            return m
        }
        for (var d in a);
        return d === aa || b.call(a, d)
    }

    function W(a, b) {
        b = b || [];
        var c = q(a);
        if ("object" == c && (fa(a.copy) || jb(a)) || "array" == c) {
            for (var d = 0, e = b.length; d < e; d += 2)
                if (a === b[d]) return b[d + 1];
            if (fa(a.copy)) return c = a.copy(b), b.push(a, c), c;
            c = "array" == c ? [] : {};
            b.push(a, c);
            for (var f in a) c[f] = W(a[f], b);
            return c
        }
        return a
    }

    function gb(a, b) {
        function c() {}
        var d = {}, e, f;
        c.prototype = a.constructor.prototype;
        for (e in a) a.hasOwnProperty(e) && (d[e] = a[e]);
        d = W(d, b);
        f = new c;
        for (e in d) f[e] = d[e];
        return f
    }
    var rb = function qb(b, c) {
        return 0 === c ? b : qb(c, b % c)
    };

    function tb(a, b) {
        var c = new O;
        if (b != l) {
            b = T(b);
            var d = function(a) {
                return 0 <= oa(b, a)
            };
            y(b, function(b) {
                c.set(b, pa(a.v(b), d))
            })
        } else P(a, function(b) {
            c.set(b, a.v(b))
        });
        return c
    }
    w("jsnx.contrib.convert.to_map_of_lists", tb);
    w("jsnx.to_map_of_lists", tb);

    function ub(a, b) {
        var c = vb(b);
        c.h(a.keys());
        if (c.i() && !c.d()) {
            var d = new O;
            a.forEach(function(a, b) {
                y(b, function(b) {
                    d.a(b) || c.b(a, b)
                });
                d.set(a, 1)
            })
        } else a.forEach(function(a, b) {
            y(b, function(b) {
                c.b(a, b)
            })
        });
        return c
    }
    w("jsnx.contrib.convert.from_map_of_lists", ub);
    w("jsnx.contrib.convert.to_map_of_maps", function(a, b, c) {
        var d = new O;
        b != l ? (b = T(b), c != l ? y(b, function(e) {
            var f = d.set(e, new O);
            a.get(e).forEach(function(a) {
                0 <= oa(b, a) && f.set(a, c)
            })
        }) : y(b, function(c) {
            var f = d.set(c, new O);
            a.get(c).forEach(function(a, c) {
                0 <= oa(b, a) && f.set(a, c)
            })
        })) : c != l ? D(a.m(), function(a, b) {
            var g = d.set(b, new O);
            a.forEach(function(a) {
                g.set(a, c)
            })
        }) : D(a.m(), function(a, b) {
            var c = d.set(b, new O);
            a.forEach(function(a, b) {
                c.set(a, b)
            })
        });
        return d
    });

    function wb(a, b, c) {
        var d = vb(b),
            e = new O,
            f = [];
        d.h(a.keys());
        c ? d.d() ? d.i() ? a.forEach(function(a, b) {
            t(b) && h(Error("Value is not a map."));
            b.forEach(function(b, c) {
                G(c, function(c, e) {
                    d.b(a, b, e, c)
                })
            })
        }) : a.forEach(function(a, b) {
            t(b) && h(Error());
            b.forEach(function(b, c) {
                G(c, function(c) {
                    d.b(a, b, c)
                })
            })
        }) : d.i() ? a.forEach(function(a, b) {
            t(b) && h(Error());
            b.forEach(function(b, c) {
                f[0] = a;
                f[1] = b;
                e.a(f) || (G(c, function(c, e) {
                    d.b(a, b, e, c)
                }), f[0] = b, f[1] = a, e.set(f, 1))
            })
        }) : a.forEach(function(a, b) {
            t(b) && h(Error());
            b.forEach(function(b,
                c) {
                f[0] = a;
                f[1] = b;
                e.a(f) || (G(c, function(c) {
                    d.b(a, b, c)
                }), f[0] = b, f[1] = a, e.set(f, 1))
            })
        }) : d.i() && !d.d() ? a.forEach(function(a, b) {
            t(b) && h(Error());
            b.forEach(function(b, c) {
                f[0] = a;
                f[1] = b;
                e.a(f) || (d.b(a, b, c), f[0] = b, f[1] = a, e.set(f, 1))
            })
        }) : a.forEach(function(a, b) {
            t(b) && h(Error());
            b.forEach(function(b, c) {
                d.b(a, b, c)
            })
        });
        return d
    }
    w("jsnx.contrib.convert.from_map_of_maps", wb);

    function xb(a) {
        if ("function" == typeof a.I) return a.I();
        if (u(a)) return a.split("");
        if (t(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return Na(a)
    };

    function yb(a, b) {
        this.e = {};
        this.f = [];
        var c = arguments.length;
        if (1 < c) {
            c % 2 && h(Error("Uneven number of arguments"));
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.fa(a)
    }
    p = yb.prototype;
    p.D = 0;
    p.X = 0;
    p.$ = function() {
        return this.D
    };
    p.I = function() {
        zb(this);
        for (var a = [], b = 0; b < this.f.length; b++) a.push(this.e[this.f[b]]);
        return a
    };
    p.ga = function() {
        zb(this);
        return this.f.concat()
    };
    p.ma = function(a) {
        return Ab(this.e, a)
    };
    p.ba = function() {
        return 0 == this.D
    };
    p.clear = function() {
        this.e = {};
        this.X = this.D = this.f.length = 0
    };
    p.remove = function(a) {
        return Ab(this.e, a) ? (delete this.e[a], this.D--, this.X++, this.f.length > 2 * this.D && zb(this), k) : m
    };

    function zb(a) {
        if (a.D != a.f.length) {
            for (var b = 0, c = 0; b < a.f.length;) {
                var d = a.f[b];
                Ab(a.e, d) && (a.f[c++] = d);
                b++
            }
            a.f.length = c
        }
        if (a.D != a.f.length) {
            for (var e = {}, c = b = 0; b < a.f.length;) d = a.f[b], Ab(e, d) || (a.f[c++] = d, e[d] = 1), b++;
            a.f.length = c
        }
    }
    p.get = function(a, b) {
        return Ab(this.e, a) ? this.e[a] : b
    };
    p.set = function(a, b) {
        Ab(this.e, a) || (this.D++, this.f.push(a), this.X++);
        this.e[a] = b
    };
    p.fa = function(a) {
        var b;
        a instanceof yb ? (b = a.ga(), a = a.I()) : (b = Pa(a), a = Na(a));
        for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    p.Z = function() {
        return new yb(this)
    };
    p.C = function(a) {
        zb(this);
        var b = 0,
            c = this.f,
            d = this.e,
            e = this.X,
            f = this,
            g = new B;
        g.next = function() {
            for (;;) {
                e != f.X && h(Error("The map has changed since the iterator was created"));
                b >= c.length && h(A);
                var g = c[b++];
                return a ? g : d[g]
            }
        };
        return g
    };

    function Ab(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Bb(a) {
        this.e = new yb;
        a && this.fa(a)
    }

    function Cb(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + (a[ha] || (a[ha] = ++ia)) : b.substr(0, 1) + a
    }
    p = Bb.prototype;
    p.$ = function() {
        return this.e.$()
    };
    p.add = function(a) {
        this.e.set(Cb(a), a)
    };
    p.fa = function(a) {
        a = xb(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    p.remove = function(a) {
        return this.e.remove(Cb(a))
    };
    p.clear = function() {
        this.e.clear()
    };
    p.ba = function() {
        return this.e.ba()
    };
    p.contains = function(a) {
        return this.e.ma(Cb(a))
    };
    p.n = function(a) {
        var b = new Bb;
        a = xb(a);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.contains(d) && b.add(d)
        }
        return b
    };
    p.H = function(a) {
        var b = this.Z();
        a = xb(a);
        for (var c = a.length, d = 0; d < c; d++) b.remove(a[d]);
        return b
    };
    p.I = function() {
        return this.e.I()
    };
    p.Z = function() {
        return new Bb(this)
    };
    p.C = function() {
        return this.e.C(m)
    };

    function vb(a) {
        if (a != l) try {
            a.clear()
        } catch (b) {
            h(Error("Input graph is not a jsnx graph type"))
        } else a = new R;
        return a
    }

    function Db(a, b, c) {
        var d = l;
        if (a.hasOwnProperty("adj")) try {
            return d = wb(a.adj, b, a.i()), "graph" in a && "object" === q(a.graph) && (d.graph = Sa(a.graph)), "node" in a && a.node instanceof O && (d.node = new O, a.node.forEach(function(a, b) {
                d.node.set(a, Sa(b))
            })), d
        } catch (e) {
            h(e)
        }
        if (a instanceof O) try {
            return wb(a, b, c)
        } catch (f) {
            try {
                return ub(a, b)
            } catch (g) {
                h(Error("Input is not known type."))
            }
        }
        if ("object" === q(a)) try {
            return Eb(a, b, c)
        } catch (n) {
            try {
                return Fb(a, b)
            } catch (r) {
                h(Error("Input is not known type."))
            }
        }
        if (t(a)) try {
            return Gb(a,
                b)
        } catch (E) {
            h(Error("Input is not valid edge list"))
        }
        return d
    }
    w("jsnx.convert.to_networkx_graph", Db);
    w("jsnx.to_networkx_graph", Db);

    function Hb(a) {
        return a.O()
    }
    w("jsnx.convert.convert_to_undirected", Hb);
    w("jsnx.convert_to_undirected", Hb);

    function Ib(a) {
        return a.G()
    }
    w("jsnx.convert.convert_to_directed", Ib);
    w("jsnx.convert_to_undirected", Ib);

    function Jb(a, b) {
        function c(a) {
            return 0 <= oa(b, a)
        }
        var d = {};
        b != l ? b = T(b) : (b = a, c = function(a) {
            return b.s(a)
        });
        P(b, function(b) {
            d[b] = pa(a.v(b), c)
        });
        return d
    }
    w("jsnx.convert.to_dict_of_lists", Jb);
    w("jsnx.to_dict_of_lists", Jb);

    function Fb(a, b) {
        var c = vb(b);
        c.h(F(pb(a), function(a) {
            return isNaN(a[0]) ? a[0] : +a[0]
        }));
        if (c.i() && !c.d()) {
            var d = {};
            G(a, function(a, b) {
                b = isNaN(b) ? b : +b;
                y(a, function(a) {
                    a in d || c.b(b, a)
                });
                d[b] = 1
            })
        } else {
            var e = [];
            G(a, function(a, b) {
                b = isNaN(b) ? b : +b;
                y(a, function(a) {
                    e.push([b, a])
                })
            });
            c.c(e)
        }
        return c
    }
    w("jsnx.convert.from_dict_of_lists", Fb);
    w("jsnx.convert.to_dict_of_dicts", function(a, b, c) {
        var d = {};
        b != l ? (b = T(b), c != l ? y(b, function(e) {
            d[e] = {};
            G(a.get(e), function(a, g) {
                0 <= oa(b, g) && (d[e][g] = c)
            })
        }) : y(b, function(c) {
            d[c] = {};
            G(a.get(c), function(a, g) {
                0 <= oa(b, g) && (d[c][g] = a)
            })
        })) : c != l ? D(a.m(), function(a, b) {
            d[b] = La(a, function() {
                return c
            })
        }) : D(a.m(), function(a, b) {
            d[b] = Sa(a)
        });
        return d
    });

    function Eb(a, b, c) {
        var d = vb(b),
            e, f;
        d.h(F(pb(a), function(a) {
            return isNaN(a[0]) ? a[0] : +a[0]
        }));
        c ? d.d() ? (d.i() ? (e = [], G(a, function(a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            G(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                G(a, function(a, d) {
                    e.push([b, c, d, a])
                })
            })
        })) : (e = [], G(a, function(a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            G(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                G(a, function(a) {
                    e.push([b, c, a])
                })
            })
        })), d.c(e)) : d.i() ? (f = new Bb, G(a, function(a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            G(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                f.contains([b, c].toString()) ||
                    (e = [], G(a, function(a, d) {
                    e.push([b, c, d, a])
                }), d.c(e), f.add([c, b].toString()))
            })
        })) : (f = new Bb, G(a, function(a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            G(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                f.contains([b, c].toString()) || (e = [], G(a, function(a) {
                    e.push([b, c, a])
                }), d.c(e), f.add([c, b].toString()))
            })
        })) : d.i() && !d.d() ? (f = new Bb, G(a, function(a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            G(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                f.contains([b, c].toString()) || (d.b(b, c, a), f.add([c, b].toString()))
            })
        })) : (e = [], G(a, function(a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            G(a, function(a, c) {
                c = isNaN(c) ? c : +c;
                e.push([b, c, a])
            })
        }), d.c(e));
        return d
    }
    w("jsnx.convert.from_dict_of_dicts", Eb);
    w("jsnx.convert.to_edgelist", function(a, b) {
        return b != l ? a.r(b, k) : a.r(l, k)
    });

    function Gb(a, b) {
        var c = vb(b);
        c.c(a);
        return c
    }
    w("jsnx.convert.from_edgelist", Gb);

    function fb(a) {
        var b = [];
        Kb(new Lb, a, b);
        return b.join("")
    }

    function Lb() {
        this.ea = aa
    }

    function Kb(a, b, c) {
        switch (typeof b) {
            case "string":
                Mb(b, c);
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
                if (b == l) {
                    c.push("null");
                    break
                }
                if (da(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], Kb(a, a.ea ? a.ea.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Mb(f, c), c.push(":"),
                    Kb(a, a.ea ? a.ea.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                h(Error("Unknown type: " + typeof b))
        }
    }
    var Nb = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, Ob = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function Mb(a, b) {
        b.push('"', a.replace(Ob, function(a) {
            if (a in Nb) return Nb[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Nb[a] = e + b.toString(16)
        }), '"')
    };
    var X = {
        ab: function(a) {
            return Math.floor(Math.random() * a)
        },
        hb: function(a, b) {
            return a + Math.random() * (b - a)
        },
        Va: function(a, b, c) {
            return Math.min(Math.max(a, b), c)
        },
        Ia: function(a, b) {
            var c = a % b;
            return 0 > c * b ? c + b : c
        },
        Ya: function(a, b, c) {
            return a + c * (b - a)
        },
        $a: function(a, b, c) {
            return Math.abs(a - b) <= (c || 1E-6)
        },
        ja: function(a) {
            return X.Ia(a, 360)
        },
        ua: function(a) {
            return a * Math.PI / 180
        },
        Qa: function(a) {
            return 180 * a / Math.PI
        },
        Ta: function(a, b) {
            return b * Math.cos(X.ua(a))
        },
        Ua: function(a, b) {
            return b * Math.sin(X.ua(a))
        },
        Ra: function(a,
            b, c, d) {
            return X.ja(X.Qa(Math.atan2(d - b, c - a)))
        },
        Sa: function(a, b) {
            var c = X.ja(b) - X.ja(a);
            180 < c ? c -= 360 : -180 >= c && (c = 360 + c);
            return c
        },
        eb: function(a) {
            return 0 == a ? 0 : 0 > a ? -1 : 1
        },
        Za: function(a, b, c, d) {
            c = c || function(a, b) {
                return a == b
            };
            d = d || function(b) {
                return a[b]
            };
            for (var e = a.length, f = b.length, g = [], n = 0; n < e + 1; n++) g[n] = [], g[n][0] = 0;
            for (var r = 0; r < f + 1; r++) g[0][r] = 0;
            for (n = 1; n <= e; n++)
                for (r = 1; r <= e; r++) c(a[n - 1], b[r - 1]) ? g[n][r] = g[n - 1][r - 1] + 1 : g[n][r] = Math.max(g[n - 1][r], g[n][r - 1]);
            for (var E = [], n = e, r = f; 0 < n && 0 < r;) c(a[n - 1], b[r -
                1]) ? (E.unshift(d(n - 1, r - 1)), n--, r--) : g[n - 1][r] > g[n][r - 1] ? n-- : r--;
            return E
        },
        t: function(a) {
            return qa(arguments, function(a, c) {
                return a + c
            })
        },
        Ba: function(a) {
            return X.t.apply(l, arguments) / arguments.length
        },
        fb: function(a) {
            var b = arguments.length;
            if (2 > b) return 0;
            var c = X.Ba.apply(l, arguments),
                b = X.t.apply(l, z(arguments, function(a) {
                    return Math.pow(a - c, 2)
                })) / (b - 1);
            return Math.sqrt(b)
        },
        Xa: function(a) {
            return isFinite(a) && 0 == a % 1
        },
        Wa: function(a) {
            return isFinite(a) && !isNaN(a)
        },
        cb: function(a, b) {
            return Math.floor(a + (b || 2E-15))
        },
        bb: function(a, b) {
            return Math.ceil(a - (b || 2E-15))
        }
    };

    function R(a, b) {
        if (!(this instanceof R)) return new R(a, b);
        this.graph = {};
        this.node = new O;
        this.adj = new O;
        a != l && Db(a, this);
        J(this.graph, b || {});
        this.edge = this.adj
    }
    w("jsnx.classes.Graph", R);
    w("jsnx.Graph", R);
    R.__name__ = "Graph";
    R.prototype.Fa = l;
    R.prototype.graph = R.prototype.Fa;
    R.prototype.Ka = l;
    R.prototype.node = R.prototype.Ka;
    R.prototype.za = l;
    R.prototype.adj = R.prototype.za;
    R.prototype.Da = l;
    R.prototype.edge = R.prototype.Da;
    R.prototype.name = function(a) {
        if (s(a)) this.graph.name = a.toString();
        else return this.graph.name || ""
    };
    R.prototype.name = R.prototype.name;
    R.prototype.toString = function() {
        return this.name()
    };
    R.prototype.toString = R.prototype.toString;
    R.prototype.get = function(a) {
        try {
            return this.adj.get(a)
        } catch (b) {
            b instanceof N || h(b), h(new N("Graph does not contain node " + a + "."))
        }
    };
    R.prototype.get = R.prototype.get;
    R.prototype.N = function(a, b) {
        b != l || (b = {});
        "object" !== q(b) && h(new L("The attr_dict argument must be an object."));
        this.adj.a(a) ? J(this.node.get(a), b) : (this.adj.set(a, new O), this.node.set(a, b))
    };
    R.prototype.add_node = R.prototype.N;
    R.prototype.h = function(a, b) {
        b != l || (b = {});
        P(a, function(a) {
            if (da(a) && 2 === a.length && ga(a[1])) {
                var d = a[0];
                a = a[1];
                if (this.adj.a(d)) d = this.node.get(d), J(d, b, a);
                else {
                    this.adj.set(d, new O);
                    var e = Sa(b);
                    J(e, a);
                    this.node.set(d, e)
                }
            } else this.adj.a(a) ? J(this.node.get(a), b) : (this.adj.set(a, new O), this.node.set(a, Sa(b)))
        }, this)
    };
    R.prototype.add_nodes_from = R.prototype.h;
    R.prototype.V = function(a) {
        var b = this.adj;
        try {
            var c = this.adj.get(a).keys();
            this.node.remove(a);
            y(c, function(c) {
                b.get(c).remove(a)
            });
            b.remove(a)
        } catch (d) {
            d instanceof N || h(d), h(new L(na("The node %s is not in the graph", fb(a))))
        }
    };
    R.prototype.remove_node = R.prototype.V;
    R.prototype.da = function(a) {
        var b = this.adj;
        P(a, function(a) {
            try {
                this.node.remove(a), b.get(a).forEach(function(d) {
                    b.get(d).remove(a)
                }), b.remove(a)
            } catch (d) {
                d instanceof N || h(d)
            }
        }, this)
    };
    R.prototype.remove_nodes_from = R.prototype.da;
    R.prototype.J = function(a) {
        return a ? C(this.node) : C(this.adj.keys())
    };
    R.prototype.nodes_iter = R.prototype.J;
    R.prototype.nodes = function(a) {
        return a ? this.node.S() : this.node.keys()
    };
    R.prototype.nodes = R.prototype.nodes;
    R.prototype.L = function() {
        return this.adj.count()
    };
    R.prototype.number_of_nodes = R.prototype.L;
    R.prototype.F = function() {
        return this.adj.count()
    };
    R.prototype.order = R.prototype.F;
    R.prototype.s = function(a) {
        try {
            return this.adj.a(a)
        } catch (b) {
            if (b instanceof TypeError) return m;
            h(b)
        }
    };
    R.prototype.has_node = R.prototype.s;
    R.prototype.b = function(a, b, c) {
        c = c || {};
        "object" !== q(c) && h(new L("The attr_dict argument must be an object."));
        this.adj.a(a) || (this.adj.set(a, new O), this.node.set(a, {}));
        this.adj.a(b) || (this.adj.set(b, new O), this.node.set(b, {}));
        var d = this.adj.get(a).get(b, {});
        J(d, c);
        this.adj.get(a).set(b, d);
        this.adj.get(b).set(a, d)
    };
    R.prototype.add_edge = R.prototype.b;
    R.prototype.c = function(a, b) {
        b = b || {};
        "object" !== q(b) && h(new L("The attr_dict argument must be an object."));
        P(a, function(a) {
            var d = ib(a),
                e, f, g;
            3 === d ? (e = a[0], f = a[1], g = a[2]) : 2 === d ? (e = a[0], f = a[1], g = {}) : h(new L(na("Edge tuple %s must be a 2-tuple or 3-tuple.", fb(a))));
            this.adj.a(e) || (this.adj.set(e, new O), this.node.set(e, {}));
            this.adj.a(f) || (this.adj.set(f, new O), this.node.set(f, {}));
            a = this.adj.get(e).get(f, {});
            J(a, b, g);
            this.adj.get(e).set(f, a);
            this.adj.get(f).set(e, a)
        }, this)
    };
    R.prototype.add_edges_from = R.prototype.c;
    R.prototype.ya = function(a, b, c) {
        c = c || {};
        u(b) || (c = b, b = "weight");
        this.c(S(a, function(a) {
            var c = {};
            c[b] = a[2];
            s(c[b]) || h(new TypeError("Values must consist of three elements: " + fb(a)));
            return [a[0], a[1], c]
        }), c)
    };
    R.prototype.add_weighted_edges_from = R.prototype.ya;
    R.prototype.z = function(a, b) {
        try {
            this.adj.get(a).remove(b), Wa(a) !== Wa(b) && this.adj.get(b).remove(a)
        } catch (c) {
            c instanceof N && h(new L(na("The edge %s-%s is not in the graph", fb(a), fb(b)))), h(c)
        }
    };
    R.prototype.remove_edge = R.prototype.z;
    R.prototype.M = function(a) {
        P(a, function(a) {
            var c = a[0];
            a = a[1];
            this.adj.a(c) && this.adj.get(c).a(a) && (this.adj.get(c).remove(a), Wa(c) !== Wa(a) && this.adj.get(a).remove(c))
        }, this)
    };
    R.prototype.remove_edges_from = R.prototype.M;
    R.prototype.aa = function(a, b) {
        return this.adj.a(a) && this.adj.get(a).a(b)
    };
    R.prototype.has_edge = R.prototype.aa;
    R.prototype.v = function(a) {
        try {
            return this.adj.get(a).keys()
        } catch (b) {
            b instanceof N && h(new L(na("The node %s is not in the graph.", fb(a)))), h(b)
        }
    };
    R.prototype.neighbors = R.prototype.v;
    R.prototype.T = function(a) {
        try {
            return C(this.adj.get(a).keys())
        } catch (b) {
            b instanceof N && h(new L(na("The node %s is not in the graph.", fb(a)))), h(b)
        }
    };
    R.prototype.neighbors_iter = R.prototype.T;
    R.prototype.r = function(a, b) {
        return Ea(this.l(a, b))
    };
    R.prototype.edges = R.prototype.r;
    R.prototype.l = function(a, b) {
        v(a) && (b = a, a = l);
        var c = new O,
            d, e;
        d = a != l ? F(this.g(a), function(a) {
            return [a, this.adj.get(a)]
        }, this) : C(this.adj);
        return b ? V(d, function(a) {
            e = a[0];
            var b = new B,
                d = C(a[1]);
            b.next = function() {
                try {
                    return d.next()
                } catch (a) {
                    a === A && c.set(e, 1), h(a)
                }
            };
            return b
        }, function(a) {
            if (!c.a(a[0])) return [e, a[0], a[1]]
        }) : V(d, function(a) {
            e = a[0];
            var b = new B,
                d = C(a[1]);
            b.next = function() {
                try {
                    return d.next()
                } catch (a) {
                    a === A && c.set(e, 1), h(a)
                }
            };
            return b
        }, function(a) {
            if (!c.a(a[0])) return [e, a[0]]
        })
    };
    R.prototype.edges_iter = R.prototype.l;
    R.prototype.ha = function(a, b, c) {
        try {
            return this.adj.get(a).get(b)
        } catch (d) {
            if (d instanceof N) return c;
            h(d)
        }
    };
    R.prototype.get_edge_data = R.prototype.ha;
    R.prototype.Aa = function() {
        return Ea(F(this.m(), function(a) {
            return a[1].keys()
        }))
    };
    R.prototype.adjacency_list = R.prototype.Aa;
    R.prototype.m = function() {
        return C(this.adj)
    };
    R.prototype.adjacency_iter = R.prototype.m;
    R.prototype.p = function(a, b) {
        return a != l && this.s(a) ? this.q(a, b).next()[1] : new O(this.q(a, b))
    };
    R.prototype.degree = R.prototype.p;
    R.prototype.q = function(a, b) {
        var c;
        c = a != l ? F(this.g(a), function(a) {
            return [a, this.adj.get(a)]
        }, this) : C(this.adj);
        return b ? F(c, function(a) {
            var c = a[0],
                f = a[1],
                g = 0;
            f.forEach(function(a, c) {
                g += +I(c, b, 1)
            });
            g += +(f.a(c) && I(f.get(c), b, 1));
            a[1] = g;
            return a
        }) : F(c, function(a) {
            a[1] = a[1].count() + +a[1].a(a[0]);
            return a
        })
    };
    R.prototype.degree_iter = R.prototype.q;
    R.prototype.clear = function() {
        this.name("");
        this.adj.clear();
        this.node.clear();
        Qa(this.graph)
    };
    R.prototype.clear = R.prototype.clear;
    R.prototype.copy = function() {
        return gb(this)
    };
    R.prototype.copy = R.prototype.copy;
    R.prototype.i = ba(m);
    R.prototype.is_multigraph = R.prototype.i;
    R.prototype.d = ba(m);
    R.prototype.is_directed = R.prototype.d;
    R.prototype.G = function() {
        var a = new Y;
        a.name(this.name());
        a.h(this);
        a.c(function() {
            var a;
            return V(this.m(), function(c) {
                a = c[0];
                return C(c[1])
            }, function(c) {
                c[2] = W(c[1]);
                c[1] = c[0];
                c[0] = a;
                return c
            })
        }.call(this));
        a.graph = W(this.graph);
        a.node = W(this.node);
        return a
    };
    R.prototype.to_directed = R.prototype.G;
    R.prototype.O = function() {
        return gb(this)
    };
    R.prototype.to_undirected = R.prototype.O;
    R.prototype.B = function(a) {
        a = this.g(a);
        var b = new this.constructor,
            c = b.adj,
            d = this.adj;
        D(a, function(a) {
            var b = new O;
            c.set(a, b);
            d.get(a).forEach(function(d, n) {
                c.a(d) && (b.set(d, n), c.get(d).set(a, n))
            })
        });
        P(b, function(a) {
            b.node.set(a, this.node.get(a))
        }, this);
        b.graph = this.graph;
        return b
    };
    R.prototype.subgraph = R.prototype.B;
    R.prototype.La = function() {
        return z(pa(this.adj.S(), function(a) {
            return a[1].a(a[0])
        }), function(a) {
            return a[0]
        })
    };
    R.prototype.nodes_with_selfloops = R.prototype.La;
    R.prototype.W = function(a) {
        return a ? z(pa(this.adj.S(), function(a) {
            return a[1].a(a[0])
        }), function(a) {
            a[2] = a[1].get(a[0]);
            a[1] = a[0];
            return a
        }) : z(pa(this.adj.S(), function(a) {
            return a[1].a(a[0])
        }), function(a) {
            a[1] = a[0];
            return a
        })
    };
    R.prototype.selfloop_edges = R.prototype.W;
    R.prototype.Ma = function() {
        return this.W().length
    };
    R.prototype.number_of_selfloops = R.prototype.Ma;
    R.prototype.size = function(a) {
        var b = X.t.apply(l, this.p(l, a).j()) / 2;
        return a != l ? b : Math.floor(b)
    };
    R.prototype.size = R.prototype.size;
    R.prototype.K = function(a, b) {
        return a == l ? Math.floor(this.size()) : this.adj.get(a).a(b) ? 1 : 0
    };
    R.prototype.number_of_edges = R.prototype.K;
    R.prototype.xa = function(a, b) {
        var c = T(a),
            d = c[0],
            c = F(wa(c, 1), function(a) {
                return [d, a]
            });
        this.c(c, b)
    };
    R.prototype.add_star = R.prototype.xa;
    R.prototype.wa = function(a, b) {
        var c = T(a),
            c = Ca(wa(c, 0, c.length - 1), wa(c, 1));
        this.c(c, b)
    };
    R.prototype.add_path = R.prototype.wa;
    R.prototype.va = function(a, b) {
        var c = T(a),
            c = Ca(c, ta(wa(c, 1), [c[0]]));
        this.c(c, b)
    };
    R.prototype.add_cycle = R.prototype.va;
    R.prototype.g = function(a) {
        return a != l ? this.s(a) ? C([a]) : function(a, c) {
            var d = new B,
                e = V(a, function(a) {
                    if (c.a(a)) return a
                });
            d.next = function() {
                try {
                    return e.next()
                } catch (a) {
                    a instanceof TypeError && h(new L("nbunch is not a node or a sequence of nodes")), h(a)
                }
            };
            return d
        }(a, this.adj) : C(this.adj.keys())
    };
    R.prototype.nbunch_iter = R.prototype.g;

    function Y(a, b) {
        if (!(this instanceof Y)) return new Y(a, b);
        this.graph = {};
        this.node = new O;
        this.adj = new O;
        this.pred = new O;
        this.succ = this.adj;
        a != l && Db(a, this);
        J(this.graph, b || {});
        this.edge = this.adj
    }
    w("jsnx.classes.DiGraph", Y);
    w("jsnx.DiGraph", Y);
    ma(Y, R);
    Y.__name__ = "DiGraph";
    Y.prototype.Na = l;
    Y.prototype.pred = Y.prototype.Na;
    Y.prototype.Pa = l;
    Y.prototype.succ = Y.prototype.Pa;
    Y.prototype.N = function(a, b) {
        b != l || (b = {});
        "object" !== q(b) && h(new L("The attr_dict argument must be an object."));
        this.succ.a(a) ? J(this.node.get(a), b) : (this.succ.set(a, new O), this.pred.set(a, new O), this.node.set(a, b))
    };
    Y.prototype.add_node = Y.prototype.N;
    Y.prototype.h = function(a, b) {
        var c, d, e, f, g;
        b != l || (b = {});
        P(kb(a), function(a) {
            c = !this.succ.a(a);
            da(a) && 2 === a.length && ga(a[1]) ? (d = a[0], e = a[1], this.succ.a(d) ? (g = this.node.get(d), J(g, b, e)) : (this.succ.set(d, new O), this.pred.set(d, new O), f = Sa(b), J(f, e), this.node.set(d, f))) : c ? (this.succ.set(a, new O), this.pred.set(a, new O), this.node.set(a, Sa(b))) : J(this.node.get(a), b)
        }, this)
    };
    Y.prototype.add_nodes_from = Y.prototype.h;
    Y.prototype.V = function(a) {
        var b;
        try {
            b = this.succ.get(a), this.node.remove(a)
        } catch (c) {
            c instanceof N || h(c), h(new L(na("The node %s is not in the graph", fb(a))))
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
    Y.prototype.remove_node = Y.prototype.V;
    Y.prototype.da = function(a) {
        var b;
        P(a, function(a) {
            this.succ.a(a) && (b = this.succ.get(a), this.node.remove(a), b.forEach(function(b) {
                this.pred.get(b).remove(a)
            }, this), this.succ.remove(a), this.pred.get(a).forEach(function(b) {
                this.succ.get(b).remove(a)
            }, this), this.pred.remove(a))
        }, this)
    };
    Y.prototype.remove_nodes_from = Y.prototype.da;
    Y.prototype.b = function(a, b, c) {
        c = c || {};
        "object" !== q(c) && h(new L("The attr_dict argument must be an object."));
        this.succ.a(a) || (this.succ.set(a, new O), this.pred.set(a, new O), this.node.set(a, {}));
        this.succ.a(b) || (this.succ.set(b, new O), this.pred.set(b, new O), this.node.set(b, {}));
        var d = this.adj.get(a).get(b, {});
        J(d, c);
        this.succ.get(a).set(b, d);
        this.pred.get(b).set(a, d)
    };
    Y.prototype.add_edge = Y.prototype.b;
    Y.prototype.c = function(a, b) {
        b = b || {};
        "object" !== q(b) && h(new L("The attr_dict argument must be an object."));
        P(a, function(a) {
            var d = ib(a),
                e, f, g;
            3 === d ? (e = a[0], f = a[1], g = a[2]) : 2 === d ? (e = a[0], f = a[1], g = {}) : h(new L("Edge tuple " + a.toString() + " must be a 2-tuple or 3-tuple."));
            this.succ.a(e) || (this.succ.set(e, new O), this.pred.set(e, new O), this.node.set(e, {}));
            this.succ.a(f) || (this.succ.set(f, new O), this.pred.set(f, new O), this.node.set(f, {}));
            a = this.adj.get(e).get(f, {});
            J(a, b, g);
            this.succ.get(e).set(f, a);
            this.pred.get(f).set(e,
                a)
        }, this)
    };
    Y.prototype.add_edges_from = Y.prototype.c;
    Y.prototype.z = function(a, b) {
        try {
            this.succ.get(a).remove(b), this.pred.get(b).remove(a)
        } catch (c) {
            c instanceof TypeError && h(new L(na("The edge %s-%s is not in the graph", fb(a), fb(b)))), h(c)
        }
    };
    Y.prototype.remove_edge = Y.prototype.z;
    Y.prototype.M = function(a) {
        P(a, function(a) {
            var c = a[0];
            a = a[1];
            try {
                this.succ.get(c).remove(a), this.pred.get(a).remove(c)
            } catch (d) {}
        }, this)
    };
    Y.prototype.remove_edges_from = Y.prototype.M;
    Y.prototype.Ha = function(a, b) {
        return this.succ.a(a) && this.succ.get(a).a(b)
    };
    Y.prototype.has_successor = Y.prototype.Ha;
    Y.prototype.Ga = function(a, b) {
        return this.pred.a(a) && this.pred.get(a).a(b)
    };
    Y.prototype.has_predecessor = Y.prototype.Ga;
    Y.prototype.ka = function(a) {
        try {
            return F(this.succ.get(a), function(a) {
                return a[0]
            })
        } catch (b) {
            b instanceof N || h(b), h(new L("The node " + a + " is not in the digraph."))
        }
    };
    Y.prototype.successors_iter = Y.prototype.ka;
    Y.prototype.sa = function(a) {
        try {
            return F(this.pred.get(a), function(a) {
                return a[0]
            })
        } catch (b) {
            b instanceof N || h(b), h(new L("The node " + a + " is not in the digraph."))
        }
    };
    Y.prototype.predecessors_iter = Y.prototype.sa;
    Y.prototype.ta = function(a) {
        try {
            return this.succ.get(a).keys()
        } catch (b) {
            b instanceof N || h(b), h(new L("The node " + a + " is not in the digraph."))
        }
    };
    Y.prototype.successors = Y.prototype.ta;
    Y.prototype.Oa = function(a) {
        try {
            return this.pred.get(a).keys()
        } catch (b) {
            b instanceof N || h(b), h(new L("The node " + a + " is not in the digraph."))
        }
    };
    Y.prototype.predecessors = Y.prototype.Oa;
    Y.prototype.v = Y.prototype.ta;
    Y.prototype.neighbors = Y.prototype.v;
    Y.prototype.T = Y.prototype.ka;
    Y.prototype.neighbors_iter = Y.prototype.T;
    Y.prototype.l = function(a, b) {
        v(a) && (b = a, a = l);
        var c, d;
        if (a != l) {
            var e = [];
            c = S(this.g(a), function(a) {
                e[0] = a;
                e[1] = this.adj.get(a);
                return e
            }, this)
        } else c = this.adj;
        return b ? V(c, function(a) {
            d = a[0];
            return C(a[1])
        }, function(a) {
            return [d, a[0], a[1]]
        }) : V(c, function(a) {
            d = a[0];
            return C(a[1])
        }, function(a) {
            return [d, a[0]]
        })
    };
    Y.prototype.edges_iter = Y.prototype.l;
    Y.prototype.ca = Y.prototype.l;
    Y.prototype.out_edges_iter = Y.prototype.ca;
    Y.prototype.ia = R.prototype.r;
    Y.prototype.out_edges = Y.prototype.ia;
    Y.prototype.R = function(a, b) {
        v(a) && (b = a, a = l);
        var c, d;
        if (a != l) {
            var e = [];
            c = S(this.g(a), function(a) {
                e[0] = a;
                e[1] = this.pred.get(a);
                return e
            }, this)
        } else c = this.pred;
        return b ? V(c, function(a) {
            d = a[0];
            return C(a[1])
        }, function(a) {
            a[2] = a[1];
            a[1] = d;
            return a
        }) : V(c, function(a) {
            d = a[0];
            return C(a[1])
        }, function(a) {
            a[1] = d;
            return a
        })
    };
    Y.prototype.in_edges_iter = Y.prototype.R;
    Y.prototype.Q = function(a, b) {
        return T(this.R(a, b))
    };
    Y.prototype.in_edges = Y.prototype.Q;
    Y.prototype.q = function(a, b) {
        var c;
        c = a != l ? lb(F(this.g(a), function(a) {
            return [a, this.succ.get(a)]
        }, this), S(this.g(a), function(a) {
            return [a, this.pred.get(a)]
        }, this)) : lb(C(this.succ), C(this.pred));
        return u(b) ? S(c, function(a) {
            var c = a[1][1],
                f = 0;
            a[0][1].forEach(function(a, c) {
                f += +I(c, b, 1)
            });
            c.forEach(function(a, c) {
                f += +I(c, b, 1)
            });
            return [a[0][0], f]
        }) : F(c, function(a) {
            return [a[0][0], a[0][1].count() + a[1][1].count()]
        })
    };
    Y.prototype.degree_iter = Y.prototype.q;
    Y.prototype.P = function(a, b) {
        var c;
        c = a != l ? S(this.g(a), function(a) {
            return [a, this.pred.get(a)]
        }, this) : this.pred;
        return b != l ? S(c, function(a) {
            var c = 0;
            a[1].forEach(function(a, d) {
                c += +I(d, b, 1)
            });
            a[1] = c;
            return a
        }) : S(c, function(a) {
            a[1] = a[1].count();
            return a
        })
    };
    Y.prototype.in_degree_iter = Y.prototype.P;
    Y.prototype.U = function(a, b) {
        var c;
        if (a != l) {
            var d = [];
            c = S(this.g(a), function(a) {
                d[0] = a;
                d[1] = this.succ.get(a);
                return d
            }, this)
        } else c = C(this.succ);
        return b != l ? S(c, function(a) {
            var c = 0;
            a[1].forEach(function(a, d) {
                c += +I(d, b, 1)
            });
            return [a[0], c]
        }) : S(c, function(a) {
            return [a[0], a[1].count()]
        })
    };
    Y.prototype.out_degree_iter = Y.prototype.U;
    Y.prototype.oa = function(a, b) {
        return a != l && this.s(a) ? this.P(a, b).next()[1] : new O(this.P(a, b))
    };
    Y.prototype.in_degree = Y.prototype.oa;
    Y.prototype.ra = function(a, b) {
        return a != l && this.s(a) ? this.U(a, b).next()[1] : new O(this.U(a, b))
    };
    Y.prototype.out_degree = Y.prototype.ra;
    Y.prototype.clear = function() {
        this.succ.clear();
        this.pred.clear();
        this.node.clear();
        Qa(this.graph)
    };
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.i = ba(m);
    Y.prototype.is_multigraph = Y.prototype.i;
    Y.prototype.d = ba(k);
    Y.prototype.is_directed = Y.prototype.d;
    Y.prototype.G = function() {
        return gb(this)
    };
    Y.prototype.to_directed = Y.prototype.G;
    Y.prototype.O = function(a) {
        var b = new R;
        b.name(this.name());
        b.h(this);
        var c = this.pred,
            d = [];
        a ? b.c(V(this.m(), function(a) {
            d[0] = a[0];
            return C(a[1])
        }, function(a) {
            if (c.get(d[0]).a(a[0])) return d[1] = a[0], d[2] = W(a[1]), d
        })) : b.c(V(this.m(), function(a) {
            d[0] = a[0];
            return C(a[1])
        }, function(a) {
            d[1] = a[0];
            d[2] = W(a[1]);
            return d
        }));
        b.graph = W(this.graph);
        b.node = W(this.node);
        return b
    };
    Y.prototype.to_undirected = Y.prototype.O;
    Y.prototype.reverse = function(a) {
        (a = !s(a) || a) ? (a = new this.constructor(l, {
            name: "Reverse of (" + this.name() + ")"
        }), a.h(this), a.c(S(this.l(l, k), function(a) {
            var c = a[0];
            a[0] = a[1];
            a[1] = c;
            a[2] = W(a[2]);
            return a
        })), a.graph = W(this.graph), a.node = W(this.node)) : (a = this.succ, this.succ = this.pred, this.pred = a, this.adj = this.succ, a = this);
        return a
    };
    Y.prototype.reverse = Y.prototype.reverse;
    Y.prototype.B = function(a) {
        a = this.g(a);
        var b = new this.constructor,
            c = b.succ,
            d = b.pred,
            e = this.succ;
        P(a, function(a) {
            c.set(a, new O);
            d.set(a, new O)
        });
        c.forEach(function(a, b) {
            e.get(a).forEach(function(e, r) {
                c.a(e) && (b.set(e, r), d.get(e).set(a, r))
            })
        });
        P(b, function(a) {
            b.node.set(a, this.node.get(a))
        }, this);
        b.graph = this.graph;
        return b
    };
    Y.prototype.subgraph = Y.prototype.B;

    function Z(a, b) {
        if (!(this instanceof Z)) return new Z(a, b);
        R.call(this, a, b)
    }
    ma(Z, R);
    w("jsnx.classes.MultiGraph", Z);
    w("jsnx.MultiGraph", Z);
    Z.__name__ = "MultiGraph";
    Z.prototype.b = function(a, b, c, d) {
        var e, f;
        c != l && (!u(c) && !ea(c)) && (d = c, c = l);
        d = d || {};
        "object" !== q(d) && h(new L("The attr_dict argument must be an object."));
        this.adj.a(a) || (this.adj.set(a, new O), this.node.set(a, {}));
        this.adj.a(b) || (this.adj.set(b, new O), this.node.set(b, {}));
        if (this.adj.get(a).a(b)) {
            f = this.adj.get(a).get(b);
            if (c == l)
                for (c = H(f); c in f;) c += 1;
            e = I(f, "" + c, {});
            J(e, d);
            f[c] = e
        } else c != l || (c = 0), e = {}, J(e, d), f = Ua(c, e), this.adj.get(a).set(b, f), this.adj.get(b).set(a, f)
    };
    Z.prototype.add_edge = Z.prototype.b;
    Z.prototype.c = function(a, b) {
        b = b || {};
        "object" !== q(b) && h(new L("The attr_dict argument must be an object."));
        P(a, function(a) {
            var d = ib(a),
                e, f, g = l,
                n = {};
            4 === d ? (e = a[0], f = a[1], g = a[2], n = a[3]) : 3 === d ? (e = a[0], f = a[1], n = a[2]) : 2 === d ? (e = a[0], f = a[1]) : h(new L("Edge tuple " + fb(a) + " must be a 2-tuple, 3-tuple or 4-tuple."));
            a = this.adj.a(e) ? this.adj.get(e).get(f, {}) : {};
            if (g == l)
                for (g = H(a); g in a;) g += 1;
            a = I(a, g, {});
            J(a, b, n);
            this.b(e, f, g, a)
        }, this)
    };
    Z.prototype.add_edges_from = Z.prototype.c;
    Z.prototype.z = function(a, b, c) {
        var d;
        try {
            d = this.adj.get(a).get(b)
        } catch (e) {
            e instanceof N || h(e), h(new L("The edge " + a + "-" + b + " is not in the graph"))
        }
        c != l ? (c in d || h(new L("The edge " + a + "-" + b + " with key " + c + " is not in the graph")), Ra(d, c)) : Ra(d, Ma(d));
        0 === H(d) && (this.adj.get(a).remove(b), a !== b && this.adj.get(b).remove(a))
    };
    Z.prototype.remove_edge = Z.prototype.z;
    Z.prototype.M = function(a) {
        P(a, function(a) {
            try {
                this.z(a[0], a[1], a[2])
            } catch (c) {
                c instanceof L || h(c)
            }
        }, this)
    };
    Z.prototype.remove_edges_from = Z.prototype.M;
    Z.prototype.aa = function(a, b, c) {
        try {
            var d;
            if (c != l) {
                var e = this.adj.get(a).get(b);
                d = c in e
            } else d = this.adj.get(a).a(b);
            return d
        } catch (f) {
            return f instanceof N || h(f), m
        }
    };
    Z.prototype.has_edge = Z.prototype.aa;
    Z.prototype.r = function(a, b, c) {
        return Ea(this.l(a, b, c))
    };
    Z.prototype.edges = Z.prototype.r;
    Z.prototype.l = function(a, b, c) {
        v(a) && (v(b) && (c = b), b = a, a = l);
        var d = new O,
            e, f;
        if (a != l) {
            var g = [];
            a = S(this.g(a), function(a) {
                g[0] = a;
                g[1] = this.adj.get(a);
                return g
            }, this)
        } else a = C(this.adj);
        return b ? V(a, function(a) {
            e = a[0];
            var b = new B,
                c = C(a[1]);
            b.next = function() {
                try {
                    return c.next()
                } catch (a) {
                    a === A && d.set(e, k), h(a)
                }
            };
            return b
        }, function(a) {
            f = a[0];
            if (!d.a(f)) return pb(a[1])
        }, function(a) {
            return c ? [e, f, a[0], a[1]] : [e, f, a[1]]
        }) : V(a, function(a) {
            e = a[0];
            var b = new B,
                c = C(a[1]);
            b.next = function() {
                try {
                    return c.next()
                } catch (a) {
                    a ===
                        A && d.set(e, k), h(a)
                }
            };
            return b
        }, function(a) {
            f = a[0];
            if (!d.a(f)) return pb(a[1])
        }, function(a) {
            return c ? [e, f, a[0]] : [e, f]
        })
    };
    Z.prototype.edges_iter = Z.prototype.l;
    Z.prototype.ha = function(a, b, c, d) {
        s(d) || (d = l);
        try {
            return c != l ? I(this.adj.get(a).get(b), "" + c, d) : this.adj.get(a).get(b)
        } catch (e) {
            return e instanceof N || h(e), d
        }
    };
    Z.prototype.get_edge_data = Z.prototype.ha;
    Z.prototype.q = function(a, b) {
        var c;
        if (a != l) {
            var d = [];
            c = S(this.g(a), function(a) {
                d[0] = a;
                d[1] = this.adj.get(a);
                return d
            }, this)
        } else c = C(this.adj);
        return b != l ? F(c, function(a) {
            var c = a[0];
            a = a[1];
            var d = 0;
            a.forEach(function(a, c) {
                G(c, function(a) {
                    d += I(a, b, 1)
                })
            });
            a.a(c) && G(a.get(c), function(a) {
                d += I(a, b, 1)
            });
            return [c, d]
        }) : F(c, function(a) {
            var b = a[0];
            a = a[1];
            var c = 0;
            a.forEach(function(a, b) {
                c += H(b)
            });
            return [b, c + +(a.a(b) && H(a.get(b)))]
        })
    };
    Z.prototype.degree_iter = Z.prototype.q;
    Z.prototype.i = ba(k);
    Z.prototype.is_multigraph = Z.prototype.i;
    Z.prototype.d = ba(m);
    Z.prototype.is_directed = Z.prototype.d;
    Z.prototype.G = function() {
        var a = new $;
        a.h(this);
        a.c(function() {
            var a, c;
            return V(this.m(), function(c) {
                a = c[0];
                return C(c[1])
            }, function(a) {
                c = a[0];
                return pb(a[1])
            }, function(d) {
                return [a, c, d[0], W(d[1])]
            })
        }.call(this));
        a.graph = W(this.graph);
        a.node = W(this.node);
        return a
    };
    Z.prototype.to_directed = Z.prototype.G;
    Z.prototype.W = function(a, b) {
        var c = [];
        a ? b ? this.adj.forEach(function(a, b) {
            b.a(a) && G(b.get(a), function(b, e) {
                c.push([a, a, e, b])
            })
        }) : this.adj.forEach(function(a, b) {
            b.a(a) && G(b.get(a), function(b) {
                c.push([a, a, b])
            })
        }) : b ? this.adj.forEach(function(a, b) {
            b.a(a) && G(b.get(a), function(b, e) {
                c.push([a, a, e])
            })
        }) : this.adj.forEach(function(a, b) {
            b.a(a) && G(b.get(a), function() {
                c.push([a, a])
            })
        });
        return c
    };
    Z.prototype.selfloop_edges = Z.prototype.W;
    Z.prototype.K = function(a) {
        if (a == l) return this.size();
        try {
            return H(this.adj.get(a).get(a))
        } catch (b) {
            return b instanceof N || h(b), 0
        }
    };
    Z.prototype.number_of_edges = Z.prototype.K;
    Z.prototype.B = function(a) {
        a = this.g(a);
        var b = new this.constructor,
            c = b.adj,
            d = this.adj;
        D(a, function(a) {
            var b = new O;
            c.set(a, b);
            d.get(a).forEach(function(d, n) {
                if (c.a(d)) {
                    var r = Sa(n);
                    b.set(d, r);
                    c.get(d).set(a, r)
                }
            })
        });
        this.node.forEach(function(a, c) {
            b.node.set(a, c)
        });
        b.graph = this.graph;
        return b
    };
    Z.prototype.subgraph = Z.prototype.B;

    function $(a, b) {
        if (!(this instanceof $)) return new $(a, b);
        Y.call(this, a, b)
    }
    ma($, Y);
    var Pb = $.prototype,
        Qb = Z.prototype,
        Rb;
    for (Rb in Qb) Qb.hasOwnProperty(Rb) && "constructor" !== Rb && (Pb[Rb] = Qb[Rb]);
    w("jsnx.classes.MultiDiGraph", $);
    w("jsnx.MultiDiGraph", $);
    $.__name__ = "MultiDiGraph";
    $.prototype.b = function(a, b, c, d) {
        var e, f;
        c != l && (!u(c) && !ea(c)) && (d = c, c = l);
        d = d || {};
        "object" !== q(d) && h(new L("The attr_dict argument must be an object."));
        this.succ.a(a) || (this.succ.set(a, new O), this.pred.set(a, new O), this.node.set(a, {}));
        this.succ.a(b) || (this.succ.set(b, new O), this.pred.set(b, new O), this.node.set(b, {}));
        if (this.succ.get(a).a(b)) {
            f = this.adj.get(a).get(b);
            if (c == l)
                for (c = H(f); c in f;) c += 1;
            e = I(f, c.toString(), {});
            J(e, d);
            f[c] = e
        } else c != l || (c = 0), e = {}, J(e, d), f = Ua(c, e), this.succ.get(a).set(b,
            f), this.pred.get(b).set(a, f)
    };
    $.prototype.add_edge = $.prototype.b;
    $.prototype.z = function(a, b, c) {
        var d;
        try {
            d = this.adj.get(a).get(b)
        } catch (e) {
            e instanceof N || h(e), h(new L("The edge " + a + "-" + b + " is not in the graph"))
        }
        c != l ? (c in d || h(new L("The edge " + a + "-" + b + " with key " + c + " is not in the graph")), Ra(d, c)) : Ra(d, Ma(d));
        0 === H(d) && (this.succ.get(a).remove(b), this.pred.get(b).remove(a))
    };
    $.prototype.remove_edge = $.prototype.z;
    $.prototype.l = function(a, b, c) {
        v(a) && (v(b) && (c = b), b = a, a = l);
        var d, e;
        if (a != l) {
            var f = [];
            a = S(this.g(a), function(a) {
                f[0] = a;
                f[1] = this.adj.get(a);
                return f
            }, this)
        } else a = C(this.adj);
        return b ? V(a, function(a) {
            d = a[0];
            return C(a[1])
        }, function(a) {
            e = a[0];
            return pb(a[1])
        }, function(a) {
            return c ? [d, e, a[0], a[1]] : [d, e, a[1]]
        }) : V(a, function(a) {
            d = a[0];
            return C(a[1])
        }, function(a) {
            e = a[0];
            return pb(a[1])
        }, function(a) {
            return c ? [d, e, a[0]] : [d, e]
        })
    };
    $.prototype.edges_iter = $.prototype.l;
    $.prototype.ca = $.prototype.l;
    $.prototype.out_edges_iter = $.prototype.ca;
    $.prototype.ia = function(a, b, c) {
        return Ea(this.ca(a, b, c))
    };
    $.prototype.out_edges = $.prototype.ia;
    $.prototype.R = function(a, b, c) {
        v(a) && (b = a, a = l);
        var d, e;
        if (a != l) {
            var f = [];
            a = S(this.g(a), function(a) {
                f[0] = a;
                f[1] = this.pred.get(a);
                return f
            }, this)
        } else a = C(this.pred);
        return b ? V(a, function(a) {
            d = a[0];
            return C(a[1])
        }, function(a) {
            e = a[0];
            return pb(a[1])
        }, function(a) {
            return c ? [e, d, a[0], a[1]] : [e, d, a[1]]
        }) : V(a, function(a) {
            d = a[0];
            return C(a[1])
        }, function(a) {
            e = a[0];
            return pb(a[1])
        }, function(a) {
            return c ? [e, d, a[0]] : [e, d]
        })
    };
    $.prototype.in_edges_iter = $.prototype.R;
    $.prototype.Q = function(a, b, c) {
        return Ea(this.R(a, b, c))
    };
    $.prototype.in_edges = $.prototype.Q;
    $.prototype.q = function(a, b) {
        var c;
        if (a != l) {
            var d = [],
                e = [];
            c = lb(F(this.g(a), function(a) {
                d[0] = a;
                d[1] = this.succ.get(a);
                return d
            }, this), F(this.g(a), function(a) {
                e[0] = a;
                e[1] = this.pred.get(a);
                return e
            }, this))
        } else c = lb(C(this.succ), C(this.pred));
        return b != l ? S(c, function(a) {
            var c = a[0][1],
                d = 0;
            a[1][1].forEach(function(a, c) {
                G(c, function(a) {
                    d += +I(a, b, 1)
                })
            });
            c.forEach(function(a, c) {
                G(c, function(a) {
                    d += +I(a, b, 1)
                })
            });
            return [a[0][0], d]
        }) : S(c, function(a) {
            var b = 0,
                c = 0;
            a[1][1].forEach(function(a, c) {
                b += H(c)
            });
            a[0][1].forEach(function(a,
                b) {
                c += H(b)
            });
            return [a[0][0], b + c]
        })
    };
    $.prototype.degree_iter = $.prototype.q;
    $.prototype.P = function(a, b) {
        var c;
        if (a != l) {
            var d = [];
            c = S(this.g(a), function(a) {
                d[0] = a;
                d[1] = this.pred.get(a);
                return d
            }, this)
        } else c = C(this.pred);
        return b != l ? S(c, function(a) {
            var c = 0;
            a[1].forEach(function(a, d) {
                G(d, function(a) {
                    c += +I(a, b, 1)
                })
            });
            return [a[0], c]
        }) : S(c, function(a) {
            var b = 0;
            a[1].forEach(function(a, c) {
                b += H(c)
            });
            return [a[0], b]
        })
    };
    $.prototype.in_degree_iter = $.prototype.P;
    $.prototype.U = function(a, b) {
        var c;
        if (a != l) {
            var d = [];
            c = S(this.g(a), function(a) {
                d[0] = a;
                d[1] = this.succ.get(a);
                return d
            }, this)
        } else c = C(this.succ);
        return b != l ? S(c, function(a) {
            var c = 0;
            a[1].forEach(function(a, d) {
                G(d, function(a) {
                    c += +I(a, b, 1)
                })
            });
            return [a[0], c]
        }) : S(c, function(a) {
            var b = 0;
            a[1].forEach(function(a, c) {
                b += H(c)
            });
            return [a[0], b]
        })
    };
    $.prototype.out_degree_iter = $.prototype.U;
    $.prototype.i = ba(k);
    $.prototype.is_multigraph = $.prototype.i;
    $.prototype.d = ba(k);
    $.prototype.is_directed = $.prototype.d;
    $.prototype.G = function() {
        return gb(this)
    };
    $.prototype.to_directed = $.prototype.G;
    $.prototype.O = function(a) {
        var b = new Z;
        b.name(this.name());
        b.h(this);
        var c, d;
        a ? b.c(V(this.m(), function(a) {
            c = a[0];
            return C(a[1])
        }, function(a) {
            d = a[0];
            return pb(a[1])
        }, la(function(a) {
            if (this.aa(d, c, a[0])) return [c, d, a[0], W(a[1])]
        }, this))) : b.c(V(this.m(), function(a) {
            c = a[0];
            return C(a[1])
        }, function(a) {
            d = a[0];
            return pb(a[1])
        }, function(a) {
            return [c, d, a[0], W(a[1])]
        }));
        b.graph = W(this.graph);
        b.node = W(this.node);
        return b
    };
    $.prototype.to_undirected = $.prototype.O;
    $.prototype.B = function(a) {
        a = this.g(a);
        var b = new this.constructor,
            c = b.succ,
            d = b.pred,
            e = this.succ;
        D(a, function(a) {
            c.set(a, new O);
            d.set(a, new O)
        });
        c.forEach(function(a, b) {
            e.get(a).forEach(function(e, r) {
                if (c.a(e)) {
                    var E = Sa(r);
                    b.set(e, E);
                    d.get(e).set(a, E)
                }
            })
        });
        this.node.forEach(function(a, c) {
            b.node.set(a, c)
        });
        b.graph = this.graph;
        return b
    };
    $.prototype.subgraph = $.prototype.B;
    $.prototype.reverse = function(a) {
        (a = !s(a) || a) ? (a = new this.constructor(l, {
            name: "Reverse of (" + this.name() + ")"
        }), a.h(this), a.c(F(this.l(l, k, k), function(a) {
            return [a[1], a[0], a[2], W(a[3])]
        })), a.graph = W(this.graph), a.node = W(this.node)) : (a = this.succ, this.succ = this.pred, this.pred = a, this.adj = this.succ, a = this);
        return a
    };
    $.prototype.reverse = $.prototype.reverse;

    function Sb(a) {
        return a.nodes()
    }
    w("jsnx.classes.func.nodes", Sb);
    w("jsnx.nodes", Sb);

    function Tb(a) {
        return a.J()
    }
    w("jsnx.classes.func.nodes_iter", Tb);
    w("jsnx.nodes_iter", Tb);

    function Ub(a, b) {
        return a.r(b)
    }
    w("jsnx.classes.func.edges", Ub);
    w("jsnx.edges", Ub);

    function Vb(a, b) {
        return a.l(b)
    }
    w("jsnx.classes.func.edges_iter", Vb);
    w("jsnx.edges_iter", Vb);
    w("jsnx.degree", function(a, b, c) {
        return a.p(b, c)
    });

    function Wb(a, b) {
        return a.v(b)
    }
    w("jsnx.classes.func.neighbors", Wb);
    w("jsnx.neighbors", Wb);

    function Xb(a) {
        return a.L()
    }
    w("jsnx.classes.func.number_of_nodes", Xb);
    w("jsnx.number_of_nodes", Xb);

    function Yb(a) {
        return a.K()
    }
    w("jsnx.classes.func.number_of_edges", Yb);
    w("jsnx.number_of_edges", Yb);

    function Zb(a) {
        var b = a.L(),
            c = a.K();
        return 0 === c ? 0 : a.d() ? c / (b * (b - 1)) : 2 * c / (b * (b - 1))
    }
    w("jsnx.classes.func.density", Zb);
    w("jsnx.density", Zb);

    function $b(a) {
        a = a.p().j();
        var b = Math.max.apply(Math, a) + 1,
            c = Ba(b);
        y(a, function(a) {
            c[a] += 1
        });
        return c
    }
    w("jsnx.classes.func.degree_histogram", $b);
    w("jsnx.degree_histogram", $b);

    function ac(a) {
        return a.d()
    }
    w("jsnx.classes.func.is_directed", ac);
    w("jsnx.is_directed", ac);

    function bc(a) {
        function b() {
            h(new L("Frozen graph can't be modified"))
        }
        a.add_node = a.N = b;
        a.add_nodes_from = a.h = b;
        a.remove_node = a.V = b;
        a.remove_nodes_from = a.da = b;
        a.add_edge = a.b = b;
        a.add_edges_from = a.c = b;
        a.remove_edge = a.z = b;
        a.remove_edges_from = a.M = b;
        a.clear = a.clear = b;
        a.frozen = a.Ea = k;
        return a
    }
    w("jsnx.classes.func.freeze", bc);
    w("jsnx.freeze", bc);

    function cc(a) {
        return !!a.Ea
    }
    w("jsnx.classes.func.is_frozen", cc);
    w("jsnx.is_frozen", cc);

    function dc(a, b) {
        return a.B(b)
    }
    w("jsnx.classes.func.subgraph", dc);
    w("jsnx.subgraph", dc);

    function ec(a, b) {
        s(b) || (b = k);
        var c = new a.constructor;
        b && c.h(a);
        return c
    }
    w("jsnx.classes.func.create_empty_copy", ec);
    w("jsnx.create_empty_copy", ec);

    function fc(a, b) {
        var c = "";
        if (b != l) a.s(b) || h(new L("node " + b + " not in graph")), c = c + ("Node " + b + " has the following properties:\n") + ("Degree: " + a.p(b) + "\n"), c += "Neighbors: " + a.v(b).join(" ");
        else {
            var c = c + ("Name: " + a.name() + "\n"),
                c = c + ("Type: " + a.constructor.__name__ + "\n"),
                c = c + ("Number of nodes: " + a.L() + "\n"),
                c = c + ("Number of edges: " + a.K() + "\n"),
                d = a.L();
            if (0 < d)
                if (a.d()) c += "Average in degree: " + (X.t.apply(l, a.oa().j()) / d).toFixed(4) + "\n", c += "Average out degree: " + (X.t.apply(l, a.ra().j()) / d).toFixed(4);
                else var e = X.t.apply(l, a.p().j()),
            c = c + ("Average degree: " + (e / d).toFixed(4))
        }
        return c
    }
    w("jsnx.classes.func.info", fc);
    w("jsnx.info", fc);

    function gc(a, b, c) {
        G(c, function(c, e) {
            a.node.get(e)[b] = c
        })
    }
    w("jsnx.classes.func.set_node_attributes", gc);
    w("jsnx.set_node_attributes", gc);

    function hc(a, b) {
        var c = new O;
        a.node.forEach(function(a, e) {
            b in e && c.set(a, e[b])
        });
        return c
    }
    w("jsnx.classes.func.get_node_attributes", hc);
    w("jsnx.get_node_attributes", hc);

    function ic(a, b, c) {
        c.forEach(function(c, e) {
            a.get(c[0]).get(c[1])[b] = e
        })
    }
    w("jsnx.classes.func.set_edge_attributes", ic);
    w("jsnx.set_edge_attributes", ic);

    function jc(a, b) {
        var c = new O;
        G(a.r(l, k), function(a) {
            if (b in a[2]) {
                var e = a[2][b];
                a.length = 2;
                c.set(a, e)
            }
        });
        return c
    }
    w("jsnx.classes.func.get_edge_attributes", jc);
    w("jsnx.get_edge_attributes", jc);

    function kc(a, b) {
        a.d() && h(new L("triangles() is not defined for directed graphs."));
        if (b != l && a.s(b)) return Math.floor(lc(a, b).next()[2] / 2);
        var c = new O;
        D(lc(a, b), function(a) {
            c.set(a[0], Math.floor(a[2] / 2))
        });
        return c
    }
    w("jsnx.algorithms.cluster.triangles", kc);
    w("jsnx.triangles", kc);

    function lc(a, b) {
        a.i() && h(new L("Not defined for multigraphs."));
        var c;
        c = b != l ? V(a.g(b), function(b) {
            return [b, a.get(b)]
        }) : C(a.adj);
        return F(c, function(b) {
            var c = new Q(b[1].keys()),
                f = 0;
            c.remove(b[0]);
            D(c, function(b) {
                var d = new Q(a.get(b).keys());
                d.remove(b);
                f += c.n(d).count()
            });
            return [b[0], c.count(), f]
        })
    }

    function mc(a, b, c) {
        a.i() && h(new L("Not defined for multigraphs."));
        u(c) || (c = "weight");
        var d;
        d = 0 === a.K() ? 1 : mb(a.r(k), function(a) {
            return I(a[2], c, 1)
        });
        b = b != l ? V(a.g(b), function(b) {
            return [b, a.get(b)]
        }) : C(a.adj);
        return F(b, function(b) {
            var f = b[0],
                g = new Q(b[1].keys());
            g.remove(f);
            var n = 0,
                r = new Q;
            D(g, function(b) {
                var e = I(a.get(f).get(b), c, 1) / d;
                r.add(b);
                var M = (new Q(a.get(b).keys())).H(r);
                D(g.n(M), function(g) {
                    var r = I(a.get(b).get(g), c, 1) / d;
                    g = I(a.get(f).get(g), c, 1) / d;
                    n += Math.pow(e * r * g, 1 / 3)
                })
            });
            return [f, g.count(),
                2 * n]
        })
    }

    function nc(a, b, c, d) {
        2 === arguments.length ? u(b) ? (c = b, b = l) : v(b) && (d = b, b = l) : 3 === arguments.length && v(c) && (d = c, c = l);
        d != l || (d = k);
        var e = oc(a, b, c).j();
        d || (e = pa(e, function(a) {
            return 0 < a
        }));
        return X.t.apply(X, e) / e.length
    }
    w("jsnx.algorithms.cluster.average_clustering", nc);
    w("jsnx.average_clustering", nc);

    function oc(a, b, c) {
        a.d() && h(new L("Clustering algorithms are not defined for directed graphs."));
        c = c != l ? mc(a, b, c) : lc(a, b);
        var d = new O;
        D(c, function(a) {
            d.set(a[0], 0 === a[2] ? 0 : a[2] / (a[1] * (a[1] - 1)))
        });
        return b != l && a.s(b) ? d.j()[0] : d
    }
    w("jsnx.algorithms.cluster.clustering", oc);
    w("jsnx.clustering", oc);

    function pc(a) {
        var b = 0,
            c = 0;
        D(lc(a), function(a) {
            c += a[1] * (a[1] - 1);
            b += a[2]
        });
        return 0 === b ? 0 : b / c
    }
    w("jsnx.algorithms.cluster.transitivity", pc);
    w("jsnx.transitivity", pc);

    function qc(a, b) {
        var c = b == l ? kb(a) : a.g(b),
            d = new O;
        D(c, function(b) {
            d.set(b, 0);
            var c = 0;
            D(nb(a.get(b).keys()), function(g) {
                var n = g[0];
                g = g[1];
                var r = (new Q(a.get(n).keys())).n(a.get(g).keys());
                r.remove(b);
                r = r.count();
                d.set(b, d.get(b) + r);
                var E = r + 1;
                a.get(n).a(g) && (E += 1);
                c += (a.get(n).count() - E) * (a.get(g).count() - E) + r
            });
            0 < c && d.set(b, d.get(b) / c)
        });
        return b != l && a.s(b) ? d.j()[0] : d
    }
    w("jsnx.algorithms.cluster.square_clustering", qc);
    w("jsnx.square_clustering", qc);

    function rc(a) {
        var b = -1,
            c = new O,
            d = new Q;
        D(a.m(), function(a) {
            var e = new Q(a[1].keys());
            e.remove(a[0]);
            var f = e.count();
            f > b ? (c.set(a[0], e), d = e, b = f) : c.set(a[0], e)
        });
        var e = new Q(c.keys()),
            f = e.H(d),
            g = new Q,
            n = [],
            r = [];
        a = new B;
        a.next = function() {
            0 === f.count() && 0 === n.length && h(A);
            var a, K;
            if (0 < f.count()) a = C(f).next(), f.remove(a);
            else {
                var M = n.pop();
                e = M[0];
                g = M[1];
                f = M[2];
                r.pop();
                return this.next()
            }
            r.push(a);
            e.remove(a);
            g.add(a);
            var xa = c.get(a),
                M = e.n(xa),
                xa = g.n(xa);
            if (0 === M.count() && (0 === xa.count() && (K = ua(r)), r.pop(),
                K)) return K;
            if (0 === xa.count() && 1 === M.count()) return K = ta(r, M.j()), r.pop(), K;
            var sb = M.count(),
                Oa = -1,
                vc, Ia;
            for (K = C(xa);
                (a = Fa(K, l)) !== l && !(a = M.n(c.get(a)), Ia = a.count(), Ia > Oa && (vc = a, Oa = Ia, Oa === sb)););
            if (Oa === sb) return r.pop(), this.next();
            b = -1;
            for (K = C(M);
                (a = Fa(K, l)) !== l && !(a = M.n(c.get(a)), Ia = a.count(), Ia > b && (d = a, b = Ia, b === sb - 1)););
            Oa > b && (d = vc);
            n.push([e, g, f]);
            e = M;
            g = xa;
            f = e.H(d);
            return this.next()
        };
        return a
    }
    w("jsnx.algorithms.clique.find_cliques", rc);
    w("jsnx.find_cliques", rc);

    function sc(a) {
        var b = new O;
        D(a.m(), function(a) {
            var c = new Q(a[1].keys());
            c.remove(a[0]);
            b.set(a[0], c)
        });
        if (0 === b.count()) return [];
        a = new Q(b.keys());
        var c = new Q,
            d = [];
        tc(b, a, c, [], d);
        return d
    }
    w("jsnx.algorithms.clique.find_cliques_recursive", sc);
    w("jsnx.find_cliques_recursive", sc);

    function tc(a, b, c, d, e) {
        var f = -1,
            g = b.count(),
            n, r, E, K;
        for (r = C(c);
            (E = Fa(r, l)) !== l;)
            if (E = b.n(a.get(E)), K = E.count(), K > f && (n = E, f = K, K === g)) return;
        D(b, function(c) {
            c = b.n(a.get(c));
            var d = c.count();
            d > f && (n = c, f = d)
        });
        g = b.H(n);
        D(g, function(f) {
            b.remove(f);
            d.push(f);
            var g = a.get(f);
            f = b.n(g);
            g = c.n(g);
            0 === f.count() && 0 === g.count() ? e.push(ua(d)) : 0 === g.count() && 1 === f.count() ? e.push(ta(d, f.j())) : tc(a, f, g, d, e);
            c.add(d.pop())
        })
    }

    function uc(a, b) {
        b != l || (b = rc(a));
        var c = 0;
        P(b, function(a) {
            c = a.length > c ? a.length : c
        });
        return c
    }
    w("jsnx.algorithms.clique.graph_clique_number", uc);
    w("jsnx.graph_clique_number", uc);

    function wc(a, b) {
        b != l || (b = rc(a));
        return T(b).length
    }
    w("jsnx.algorithms.clique.graph_number_of_cliques", wc);
    w("jsnx.graph_number_of_cliques", wc);

    function xc(a, b, c) {
        c = c != l ? Ea(c) : Ea(rc(a));
        b != l || (b = a.nodes());
        var d;
        if (da(b)) d = new O, y(b, function(a) {
            d.set(a, pa(c, function(b) {
                return (new Q(b)).a(a)
            }).length)
        });
        else {
            var e = b;
            d = pa(c, function(a) {
                return (new Q(a)).a(e)
            }).length
        }
        return d
    }
    w("jsnx.algorithms.clique.number_of_cliques", xc);
    w("jsnx.number_of_cliques", xc);

    function yc(a, b) {
        if (a.F() != b.F()) return m;
        var c = a.p(),
            d = kc(a),
            e = xc(a),
            f = [];
        c.forEach(function(a) {
            f.push([c.get(a), d.get(a), e.get(a)])
        });
        f.sort(function(a, b) {
            return a[0] !== b[0] ? a[0] - b[0] : a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]
        });
        var g = b.p(),
            n = kc(b),
            r = xc(b),
            E = [];
        g.forEach(function(a) {
            E.push([g.get(a), n.get(a), r.get(a)])
        });
        E.sort(function(a, b) {
            return a[0] !== b[0] ? a[0] - b[0] : a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]
        });
        return !ya(f, E, function(a, b) {
            return ya(a, b)
        }) ? m : k
    }
    w("jsnx.algorithms.isomorphism.could_be_isomorphic", yc);
    w("jsnx.could_be_isomorphic", yc);

    function zc(a, b) {
        if (a.F() != b.F()) return m;
        var c = a.p(),
            d = kc(a),
            e = [];
        c.forEach(function(a) {
            e.push([c.get(a), d.get(a)])
        });
        e.sort(function(a, b) {
            return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
        });
        var f = b.p(),
            g = kc(b),
            n = [];
        f.forEach(function(a) {
            n.push([f.get(a), g.get(a)])
        });
        n.sort(function(a, b) {
            return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
        });
        return !ya(e, n, function(a, b) {
            return ya(a, b)
        }) ? m : k
    }
    w("jsnx.algorithms.isomorphism.fast_could_be_isomorphic", zc);
    w("jsnx.fast_could_be_isomorphic", zc);

    function Ac(a, b) {
        if (a.F() != b.F()) return m;
        var c = a.p().j();
        c.sort();
        var d = b.p().j();
        d.sort();
        return !ya(c, d) ? m : k
    }
    w("jsnx.algorithms.isomorphism.faster_could_be_isomorphic", Ac);
    w("jsnx.faster_could_be_isomorphic", Ac);

    function Bc(a, b) {
        if ("eg" === b) return Cc(a);
        if (b == l || "hh" === b) return Dc(a);
        h(new Ya("`opt_method` must be 'eg' or 'hh'"))
    }
    w("jsnx.algorithms.graphical.is_valid_degree_sequence", Bc);
    w("jsnx.is_valid_degree_sequence", Bc);

    function Dc(a) {
        if (0 === a.length) return k;
        if (!Ha(a) || 0 > Math.min.apply(l, a) || 0 !== X.t.apply(l, a) % 2) return m;
        for (a = ua(a); 0 < a.length;) {
            x.sort.call(a, Aa);
            if (0 > a[0]) break;
            var b = a.pop();
            if (0 === b) return k;
            if (b > a.length) break;
            for (var c = a.length - 1, b = a.length - (b + 1); c > b; c--) a[c] -= 1
        }
        return m
    }
    w("jsnx.algorithms.graphical.is_valid_degree_sequence_havel_hakimi", Dc);
    w("jsnx.is_valid_degree_sequence_havel_hakimi", Dc);

    function Cc(a) {
        if (0 === a.length) return k;
        if (!Ha(a) || 0 > Math.min.apply(l, a) || 0 !== X.t.apply(l, a) % 2) return m;
        var b = a.length,
            c = ua(a).sort(function(a, b) {
                return b - a
            }),
            d = [],
            e;
        e = 1;
        for (a = c.length; e < a; e++) c[e] < c[e - 1] && d.push(e);
        var f, g;
        e = 0;
        for (a = d.length; e < a; e++)
            if (f = X.t.apply(l, c.slice(0, d[e])), g = d[e] * (d[e] - 1) + X.t.apply(l, Ea(F(U(d[e], b), function(a) {
                return Math.min(d[e], c[a])
            }))), f > g) return m;
        return k
    }
    w("jsnx.algorithms.graphical.is_valid_degree_sequence_erdos_gallai", Cc);
    w("jsnx.is_valid_degree_sequence_erdos_gallai", Cc);

    function Ec(a) {
        try {
            return Fc(a), k
        } catch (b) {
            if (b instanceof ab) return m;
            h(b)
        }
    }
    w("jsnx.algorithms.dag.is_directed_acyclic_graph", Ec);
    w("jsnx.is_directed_acyclic_graph", Ec);

    function Fc(a, b) {
        a.d() || h(new L("Topological sort not defined on undirected graphs."));
        var c = new Q,
            d = [],
            e = new Q;
        b != l || (b = a.J());
        P(b, function(b) {
            if (!e.a(b))
                for (b = [b]; 0 < b.length;) {
                    var g = b[b.length - 1];
                    if (e.a(g)) b.pop();
                    else {
                        c.add(g);
                        var n = [];
                        a.get(g).forEach(function(a) {
                            e.a(a) || (c.a(a) && h(new ab("Graph contains a cycle")), n.push(a))
                        });
                        0 < n.length ? b.push.apply(b, n) : (e.add(g), va(d, aa, 0, g))
                    }
                }
        });
        return d
    }
    w("jsnx.algorithms.dag.topological_sort", Fc);
    w("jsnx.topological_sort", Fc);

    function Gc(a, b) {
        function c(a, b, d, e) {
            b.add(e);
            a.get(e).forEach(function(e) {
                if (b.a(e)) b.a(e) && !(0 <= oa(d, e)) && h(new ab("Graph contains a cycle"));
                else if (!c(a, b, d, e)) return m
            });
            va(d, aa, 0, e);
            return k
        }
        a.d() || h(new L("Topological sort not defined on undirected graphs."));
        var d = new Q,
            e = [];
        b != l || (b = a.J());
        P(b, function(b) {
            !(0 <= oa(e, b)) && !c(a, d, e, b) && h(new ab("Graph contains a cycle"))
        });
        return e
    }
    w("jsnx.algorithms.dag.topological_sort_recursive", Gc);
    w("jsnx.topological_sort_recursive", Gc);
    var Ic = function Hc(b) {
        b.d() || h(new L("is_aperiodic not defined for undirected graphs."));
        var c = b.J().next(),
            d = new O;
        d.set(c, 0);
        for (var c = [c], e = 0, f = 1; 0 < c.length;) {
            var g = [];
            y(c, function(c) {
                b.get(c).forEach(function(b) {
                    d.a(b) ? e = rb(e, d.get(c) - d.get(b) + 1) : (g.push(b), d.set(b, f))
                })
            });
            c = g;
            f += 1
        }
        return d.count() === ib(b) ? 1 === e : 1 === e && Hc(b.B((new Q(b.nodes())).H(d.keys())))
    };
    w("jsnx.algorithms.dag.is_aperiodic", Ic);
    w("jsnx.is_aperiodic", Ic);

    function Jc(a, b) {
        this.qa = a;
        this.la = b
    }
    Jc.prototype.getKey = function() {
        return this.qa
    };
    Jc.prototype.Z = function() {
        return new Jc(this.qa, this.la)
    };

    function Kc(a) {
        this.o = [];
        if (a) a: {
            var b, c;
            if (a instanceof Kc) {
                if (b = a.ga(), c = a.I(), 0 >= a.$()) {
                    a = this.o;
                    for (var d = 0; d < b.length; d++) a.push(new Jc(b[d], c[d]));
                    break a
                }
            } else b = Pa(a), c = Na(a);
            for (d = 0; d < b.length; d++) Lc(this, b[d], c[d])
        }
    }

    function Lc(a, b, c) {
        var d = a.o;
        d.push(new Jc(b, c));
        b = d.length - 1;
        a = a.o;
        for (c = a[b]; 0 < b;)
            if (d = b - 1 >> 1, a[d].getKey() > c.getKey()) a[b] = a[d], b = d;
            else break;
        a[b] = c
    }
    p = Kc.prototype;
    p.remove = function() {
        var a = this.o,
            b = a.length,
            c = a[0];
        if (!(0 >= b)) {
            if (1 == b) sa(a);
            else {
                a[0] = a.pop();
                for (var a = 0, b = this.o, d = b.length, e = b[a]; a < d >> 1;) {
                    var f = 2 * a + 1,
                        g = 2 * a + 2,
                        f = g < d && b[g].getKey() < b[f].getKey() ? g : f;
                    if (b[f].getKey() > e.getKey()) break;
                    b[a] = b[f];
                    a = f
                }
                b[a] = e
            }
            return c.la
        }
    };
    p.I = function() {
        for (var a = this.o, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].la);
        return b
    };
    p.ga = function() {
        for (var a = this.o, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].getKey());
        return b
    };
    p.ma = function(a) {
        return ra(this.o, function(b) {
            return b.getKey() == a
        })
    };
    p.Z = function() {
        return new Kc(this)
    };
    p.$ = function() {
        return this.o.length
    };
    p.ba = function() {
        return 0 == this.o.length
    };
    p.clear = function() {
        sa(this.o)
    };

    function Mc() {
        Kc.call(this)
    }
    ma(Mc, Kc);

    function Nc(a, b) {
        Lc(a, 0, b)
    };

    function Oc(a, b) {
        b != l || (b = {});
        "object" !== q(b) && h(new L("The arg_dict argument must be an object."));
        var c = hb(a),
            d = a.nodes();
        "k" in b && (Da(d), d = d.slice(0, b.k));
        P(d.sort(), function(d) {
            var f = [],
                f = I(b, "weight", l) === l ? Pc(a, d) : Qc(a, d, b.weight),
                g = f[0],
                n = f[1],
                f = f[2];
            c = I(b, "endpoints", m) ? Rc(c, g, n, f, d) : Sc(c, g, n, f, d)
        });
        return c = Tc(c, ib(a), I(b, "normalized", k), a.d(), I(b, "k", l))
    }
    w("jsnx.algorithms.centrality.betweenness.betweenness_centrality", Oc);
    w("jsnx.betweenness_centrality", Oc);

    function Uc(a, b) {
        b != l || (b = {});
        "object" !== q(b) && h(new L("The arg_dict argument must be an object."));
        var c = hb(a);
        D(a.l(), function(a) {
            c.set(a, 0)
        });
        var d = a.nodes();
        P(d.sort(), function(d) {
            var f = [],
                f = I(b, "weight", l) === l ? Pc(a, d) : Qc(a, d, b.weight);
            c = Vc(c, f[0], f[1], f[2], d)
        });
        P(d, function(a) {
            c.remove(a)
        });
        return c = Wc(c, ib(a), I(b, "normalized", k), a.d())
    }
    w("jsnx.algorithms.centrality.betweenness.edge_betweenness_centrality", Uc);
    w("jsnx.edge_betweenness_centrality", Uc);

    function Pc(a, b) {
        var c = [],
            d = new O;
        D(a.J(), function(a) {
            d.set(a, [])
        });
        var e = hb(a),
            f = new O;
        e.set(b, 1);
        f.set(b, 0);
        for (var g = [b]; 0 < g.length;) {
            var n = g.shift();
            c.push(n);
            var r = f.get(n),
                E = e.get(n);
            y(a.v(n), function(a) {
                f.a(a) || (g.push(a), f.set(a, r + 1));
                f.get(a) === r + 1 && (e.set(a, e.get(a) + E), d.get(a).push(n))
            })
        }
        return [c, d, e]
    }

    function Qc(a, b, c) {
        var d = [],
            e = new O;
        P(a.nodes(), function(a) {
            e.set(a, [])
        });
        var f = hb(a),
            g = new O;
        f.set(b, 1);
        var n = new O;
        n.set(b, 0);
        var r = new Mc;
        for (Nc(r, [b, b]); !r.ba();) {
            var E = r.o[0] && r.o[0].getKey();
            b = r.remove();
            var K = b[0],
                M = b[1];
            g.a(M) || (f.set(M, f.get(M) + f.get(K)), d.push(M), g.set(M, E), D(a.l(M, k), function(a) {
                var b = a[1];
                a = E + I(a[2], c, 1);
                !g.a(b) && (!n.a(b) || a < n.get(b)) ? (n.set(b, a), Lc(r, a, [M, b]), f.set(b, 0), e.set(b, [M])) : a === n.get(b) && (f.set(b, f.get(b) + f.get(M)), e.get(b).push(M))
            }))
        }
        return [d, e, f]
    }

    function Sc(a, b, c, d, e) {
        for (var f = hb(b); 0 < b.length;) {
            var g = b.pop(),
                n = (1 + f.get(g)) / d.get(g);
            y(c.get(g), function(a) {
                f.set(a, f.get(a) + d.get(a) * n)
            });
            (g !== e || ga(g) && g.toString() !== e.toString()) && a.set(g, a.get(g) + f.get(g))
        }
        return a
    }

    function Rc(a, b, c, d, e) {
        a.set(e, a.get(e) + b.length - 1);
        for (var f = hb(b); 0 < b.length;) {
            var g = b.pop(),
                n = (1 + f.get(g)) / d.get(g);
            y(c.get(g), function(a) {
                f.set(a, f.get(a) + d.get(a) * n)
            });
            (g !== e || ga(g) && g.toString() !== e.toString()) && a.set(g, a.get(g) + f.get(g) + 1)
        }
        return a
    }

    function Vc(a, b, c, d, e) {
        for (var f = hb(b); 0 < b.length;) {
            var g = b.pop(),
                n = (1 + f.get(g)) / d.get(g);
            y(c.get(g), function(b) {
                var c = d.get(b) * n,
                    e = [b, g];
                a.a(e) || (e = [g, b]);
                a.set(e, a.get(e) + c);
                f.set(b, f.get(b) + c)
            });
            (g !== e || ga(g) && g.toString() !== e.toString()) && a.set(g, a.get(g) + f.get(g))
        }
        return a
    }

    function Tc(a, b, c, d, e) {
        var f;
        v(c) && c ? 2 < b && (f = 1 / ((b - 1) * (b - 2))) : v(d) && !d && (f = 0.5);
        s(f) && (e != l && (f = f * b / e), a.forEach(function(b, c) {
            a.set(b, c * f)
        }));
        return a
    }

    function Wc(a, b, c, d) {
        var e;
        v(c) && c ? 1 < b && (e = 1 / (b * (b - 1))) : v(d) && !d && (e = 0.5);
        s(e) && a.forEach(function(b, c) {
            a.set(b, c * e)
        });
        return a
    };

    function Xc(a, b, c) {
        var d = new O,
            e = 0,
            f = new O;
        for (f.set(b, 1); 0 < f.count();) {
            b = f;
            f = new O;
            b.forEach(function(b) {
                d.a(b) || (d.set(b, e), a.get(b).forEach(function(a) {
                    f.set(a, 1)
                }))
            });
            if (ea(c) && c <= e) break;
            e += 1
        }
        return d
    }
    w("jsnx.algorithms.shortest_paths.unweighted.single_source_shortest_path_length", Xc);
    w("jsnx.single_source_shortest_path_length", Xc);

    function Yc(a, b) {
        var c = new O;
        P(a, function(d) {
            c.set(d, Xc(a, d, b))
        });
        return c
    }
    w("jsnx.algorithms.shortest_paths.unweighted.all_pairs_shortest_path_length", Yc);
    w("jsnx.all_pairs_shortest_path_length", Yc);

    function Zc(a, b, c) {
        c = $c(a, b, c);
        a = c[0];
        b = c[1];
        c = c[2];
        for (var d = []; c != l;) d.push(c), c = b.get(c);
        for (c = a.get(d[0]); c != l;) d.unshift(c), c = a.get(c);
        return d
    }
    w("jsnx.algorithms.shortest_paths.unweighted.bidirectional_shortest_path", Zc);
    w("jsnx.bidirectional_shortest_path", Zc);

    function $c(a, b, c) {
        (!s(b) || !s(c)) && h(new Ya("Bidirectional shortest path called without source or target"));
        var d = new O,
            e = new O;
        if (c === b) return d.set(c, l), e.set(b, l), [d, e, b];
        var f, g;
        a.d() ? (f = a.sa, g = a.ka) : g = f = a.T;
        d.set(b, l);
        e.set(c, l);
        for (var n = [b], r = [c], E, K; 0 < n.length && 0 < r.length && !K;) n.length <= r.length ? (E = n, n = [], y(E, function(b) {
            K || D(g.call(a, b), function(a) {
                K || (d.a(a) || (n.push(a), d.set(a, b)), e.a(a) && (K = [d, e, a]))
            })
        })) : (E = r, r = [], y(E, function(b) {
            K || D(f.call(a, b), function(a) {
                K || (e.a(a) || (e.set(a, b), r.push(a)),
                    d.a(a) && (K = [d, e, a]))
            })
        }));
        if (K) return K;
        h(new bb("No path between " + b + " and " + c + "."))
    }

    function ad(a, b, c) {
        var d = 0,
            e = new O([
                [b, 1]
            ]),
            f = new O([
                [b, [b]]
            ]);
        if (0 === c) return f;
        for (; 0 < e.count() && !(b = e, e = new O, b.forEach(function(b) {
            a.get(b).forEach(function(a) {
                f.a(a) || (f.set(a, f.get(b).concat([a])), e.set(a, 1))
            })
        }), d += 1, s(c) && c <= d););
        return f
    }
    w("jsnx.algorithms.shortest_paths.unweighted.single_source_shortest_path", ad);
    w("jsnx.single_source_shortest_path", ad);

    function bd(a, b) {
        var c = new O;
        P(a, function(d) {
            c.set(d, ad(a, d, b))
        });
        return c
    }
    w("jsnx.algorithms.shortest_paths.unweighted.all_pairs_shortest_path", bd);
    w("jsnx.all_pairs_shortest_path", bd);

    function cd(a, b, c, d, e) {
        for (var f = 0, g = [b], n = new O([
                [b, f]
            ]), r = new O([
                [b, []]
            ]); 0 < g.length && !(f += 1, b = g, g = [], y(b, function(b) {
            a.get(b).forEach(function(a) {
                n.a(a) ? n.get(a) === f && r.get(a).push(b) : (r.set(a, [b]), n.set(a, f), g.push(a))
            })
        }), d != l && d <= f););
        return c != l ? e ? !r.a(c) ? [
            [], -1
        ] : [r.get(c), n.get(c)] : !r.a(c) ? [] : r.get(c) : e ? [r, n] : r
    }
    w("jsnx.algorithms.shortest_paths.unweighted.predecessor", cd);
    w("jsnx.predecessor", cd);

    function dd(a, b) {
        var c = U(a),
            d, e, f = new B;
        try {
            e = [c.next()]
        } catch (g) {
            return g !== A && h(g), f
        }
        f.next = function() {
            0 === e.length && h(A);
            return e.splice(0, 1)[0]
        };
        return V(f, function(a) {
            d = a;
            return U(b)
        }, function() {
            try {
                var a = c.next();
                e.push(a);
                return [d, a]
            } catch (b) {
                b !== A && h(b)
            }
        })
    }

    function ed(a, b, c) {
        c = fd(b, c);
        c.c(dd(b, a));
        return c
    }
    w("jsnx.generators.classic.full_rary_tree", ed);
    w("jsnx.full_rary_tree", ed);

    function gd(a, b, c) {
        b = 1 === a ? 2 : Math.floor((1 - Math.pow(a, b + 1)) / (1 - a));
        c = fd(b, c);
        c.c(dd(b, a));
        return c
    }
    w("jsnx.generators.classic.balanced_tree", gd);
    w("jsnx.balanced_tree", gd);

    function hd(a, b) {
        var c = fd(a, b);
        c.name("complete_graph(" + a + ")");
        1 < a && c.c(c.d() ? ob(U(a)) : nb(U(a)));
        return c
    }
    w("jsnx.generators.classic.complete_graph", hd);
    w("jsnx.complete_graph", hd);

    function id(a, b) {
        var c = jd(a, b);
        c.name("cycle_graph(" + a + ")");
        1 < a && c.b(a - 1, 0);
        return c
    }
    w("jsnx.generators.classic.cycle_graph", id);
    w("jsnx.cycle_graph", id);

    function fd(a, b) {
        a instanceof R && (b = a, a = l);
        a != l || (a = 0);
        var c;
        b != l ? (c = b, c.clear()) : c = new R;
        c.h(U(a));
        c.name("empty_graph(" + a + ")");
        return c
    }
    w("jsnx.generators.classic.empty_graph", fd);
    w("jsnx.empty_graph", fd);

    function kd(a, b, c, d) {
        var e = fd(0, d);
        e.name("grid_2d_graph");
        d = Ea(U(a));
        var f = Ea(U(b));
        y(d, function(a) {
            y(f, function(b) {
                e.N([a, b])
            })
        });
        D(U(1, a), function(a) {
            y(f, function(b) {
                e.b([a, b], [a - 1, b])
            })
        });
        y(d, function(a) {
            D(U(1, b), function(b) {
                e.b([a, b], [a, b - 1])
            })
        });
        e.d() && (D(U(0, a - 1), function(a) {
            y(f, function(b) {
                e.b([a, b], [a + 1, b])
            })
        }), y(d, function(a) {
            D(U(0, b - 1), function(b) {
                e.b([a, b], [a, b + 1])
            })
        }));
        c && (2 < b && (y(d, function(a) {
            e.b([a, 0], [a, b - 1])
        }), e.d() && y(d, function(a) {
            e.b([a, b - 1], [a, 0])
        })), 2 < a && (y(f, function(b) {
            e.b([0,
                b
            ], [a - 1, b])
        }), e.d() && y(f, function(b) {
            e.b([a - 1, b], [0, b])
        })), e.name("periodic_grid_2d_graph(" + a + "," + b + ")"));
        return e
    }
    w("jsnx.generators.classic.grid_2d_graph", kd);
    w("jsnx.grid_2d_graph", kd);

    function ld(a) {
        a = fd(0, a);
        a.name("null_graph()");
        return a
    }
    w("jsnx.generators.classic.null_graph", ld);
    w("jsnx.null_graph", ld);

    function jd(a, b) {
        var c = fd(a, b);
        c.name("path_graph(" + a + ")");
        c.c(F(U(a - 1), function(a) {
            return [a, a + 1]
        }));
        return c
    }
    w("jsnx.generators.classic.path_graph", jd);
    w("jsnx.path_graph", jd);

    function md(a) {
        a = fd(1, a);
        a.name("null_graph()");
        return a
    }
    w("jsnx.generators.classic.trivial_graph", md);
    w("jsnx.trivial_graph", md);

    function nd(a, b, c) {
        c != l || (c = m);
        var d = fd(a);
        d.name("fast_gnp_random_graph(" + a + "," + b + ")");
        if (0 >= b || 1 <= b) return od(a, b, c);
        var e = 1,
            f = -1;
        b = Math.log(1 - b);
        if (c)
            for (d = new Y(d); e < a;) {
                c = Math.log(1 - Math.random());
                f = f + 1 + Math.floor(c / b);
                for (e === f && (f += 1); f >= a && e < a;) f -= a, e += 1, e == f && (f += 1);
                e < a && d.b(e, f)
            } else
                for (; e < a;) {
                    c = Math.log(1 - Math.random());
                    for (f = f + 1 + Math.floor(c / b); f >= e && e < a;) f -= e, e += 1;
                    e < a && d.b(e, f)
                }
        return d
    }
    w("jsnx.generators.random_graphs.fast_gnp_random_graph", nd);
    w("jsnx.fast_gnp_random_graph", nd);

    function od(a, b, c) {
        var d;
        d = c ? new Y : new R;
        d.h(U(a));
        d.name("gnp_random_graph(" + a + "," + b + ")");
        if (0 >= b) return d;
        if (1 <= b) return hd(a, d);
        a = d.d() ? ob(U(a)) : nb(U(a));
        D(a, function(a) {
            Math.random() < b && d.b(a[0], a[1])
        });
        return d
    }
    w("jsnx.generators.random_graphs.gnp_random_graph", od);
    w("jsnx.gnp_random_graph", od);
    w("jsnx.binomial_graph", od);
    w("jsnx.erdos_renyi_graph", od);

    function pd(a, b) {
        Bc(a) || h(new L("Invalid degree sequence"));
        b != l && (b.d() && h(new L("Directed Graph not supported")), b.i() && h(new L("Havel-Hakimi requires simple graph")));
        var c = a.length,
            d = fd(c, b);
        if (0 === c || 0 === Math.max.apply(l, a)) return d;
        for (c = Ea(S(d, function(b) {
            return [a[b], b]
        })); 0 < c.length;) {
            c.sort(function(a, b) {
                return a[0] !== b[0] ? a[0] - b[0] : +a[1] - +b[1]
            });
            if (0 > c[0][0]) return m;
            var e = c.pop();
            if (0 === e[0]) break;
            if (e[0] > c.length) return m;
            for (var f = c.length, g = f - e[0]; g < f; g++) d.b(e[1], c[g][1]), c[g][0] -=
                1
        }
        d.name("havel_hakimi_graph " + d.F() + " nodes " + d.size() + " edges");
        return d
    }
    w("jsnx.generators.degree_seq.havel_hakimi_graph", pd);
    w("jsnx.havel_hakimi_graph", pd);

    function qd() {
        var a = new R;
        a.h(U(34));
        a.name("Zachary's Karate Club");
        var b = 0;
        y("0 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 0 1 0 1 0 1 0 0 0 0 0 0 0 0 0 1 0 0;1 0 1 1 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 1 0 1 0 0 0 0 0 0 0 0 1 0 0 0;1 1 0 1 0 0 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 1 0;1 1 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 1;0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1;1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 1 0 0 1 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 1 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1;0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1;0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 0 0 0 0 1 1;0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 1 0 0 0 1 1;0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 1 0 0 1 0 1 0 1 1 0 0 0 0 0 1 1 1 0 1;0 0 0 0 0 0 0 0 1 1 0 0 0 1 1 1 0 0 1 1 1 0 1 1 0 0 1 1 1 1 1 1 1 0".split(";"),
            function(c) {
                P(c.split(" "), function(c, e) {
                    "1" === c && a.b(b, e)
                });
                b += 1
            });
        return a
    }
    w("jsnx.generators.social.karate_club_graph", qd);
    w("jsnx.karate_club_graph", qd);

    function rd() {
        var a = new R;
        a.h("Evelyn Jefferson;Laura Mandeville;Theresa Anderson;Brenda Rogers;Charlotte McDowd;Frances Anderson;Eleanor Nye;Pearl Oglethorpe;Ruth DeSand;Verne Sanderson;Myra Liddel;Katherina Rogers;Sylvia Avondale;Nora Fayette;Helen Lloyd;Dorothy Murchison;Olivia Carleton;Flora Price".split(";"), {
            Ca: 0
        });
        a.h("E1 E2 E3 E4 E5 E6 E7 E8 E9 E10 E11 E12 E13 E14".split(" "), {
            Ca: 1
        });
        a.c([
            ["Evelyn Jefferson", "E1"],
            ["Evelyn Jefferson", "E2"],
            ["Evelyn Jefferson", "E3"],
            ["Evelyn Jefferson", "E4"],
            ["Evelyn Jefferson", "E5"],
            ["Evelyn Jefferson", "E6"],
            ["Evelyn Jefferson", "E8"],
            ["Evelyn Jefferson", "E9"],
            ["Laura Mandeville", "E1"],
            ["Laura Mandeville", "E2"],
            ["Laura Mandeville", "E3"],
            ["Laura Mandeville", "E5"],
            ["Laura Mandeville", "E6"],
            ["Laura Mandeville", "E7"],
            ["Laura Mandeville", "E8"],
            ["Theresa Anderson", "E2"],
            ["Theresa Anderson", "E3"],
            ["Theresa Anderson", "E4"],
            ["Theresa Anderson", "E5"],
            ["Theresa Anderson", "E6"],
            ["Theresa Anderson", "E7"],
            ["Theresa Anderson", "E8"],
            ["Theresa Anderson", "E9"],
            ["Brenda Rogers",
                "E1"
            ],
            ["Brenda Rogers", "E3"],
            ["Brenda Rogers", "E4"],
            ["Brenda Rogers", "E5"],
            ["Brenda Rogers", "E6"],
            ["Brenda Rogers", "E7"],
            ["Brenda Rogers", "E8"],
            ["Charlotte McDowd", "E3"],
            ["Charlotte McDowd", "E4"],
            ["Charlotte McDowd", "E5"],
            ["Charlotte McDowd", "E7"],
            ["Frances Anderson", "E3"],
            ["Frances Anderson", "E5"],
            ["Frances Anderson", "E6"],
            ["Frances Anderson", "E8"],
            ["Eleanor Nye", "E5"],
            ["Eleanor Nye", "E6"],
            ["Eleanor Nye", "E7"],
            ["Eleanor Nye", "E8"],
            ["Pearl Oglethorpe", "E6"],
            ["Pearl Oglethorpe", "E8"],
            ["Pearl Oglethorpe",
                "E9"
            ],
            ["Ruth DeSand", "E5"],
            ["Ruth DeSand", "E7"],
            ["Ruth DeSand", "E8"],
            ["Ruth DeSand", "E9"],
            ["Verne Sanderson", "E7"],
            ["Verne Sanderson", "E8"],
            ["Verne Sanderson", "E9"],
            ["Verne Sanderson", "E12"],
            ["Myra Liddel", "E8"],
            ["Myra Liddel", "E9"],
            ["Myra Liddel", "E10"],
            ["Myra Liddel", "E12"],
            ["Katherina Rogers", "E8"],
            ["Katherina Rogers", "E9"],
            ["Katherina Rogers", "E10"],
            ["Katherina Rogers", "E12"],
            ["Katherina Rogers", "E13"],
            ["Katherina Rogers", "E14"],
            ["Sylvia Avondale", "E7"],
            ["Sylvia Avondale", "E8"],
            ["Sylvia Avondale",
                "E9"
            ],
            ["Sylvia Avondale", "E10"],
            ["Sylvia Avondale", "E12"],
            ["Sylvia Avondale", "E13"],
            ["Sylvia Avondale", "E14"],
            ["Nora Fayette", "E6"],
            ["Nora Fayette", "E7"],
            ["Nora Fayette", "E9"],
            ["Nora Fayette", "E10"],
            ["Nora Fayette", "E11"],
            ["Nora Fayette", "E12"],
            ["Nora Fayette", "E13"],
            ["Nora Fayette", "E14"],
            ["Helen Lloyd", "E7"],
            ["Helen Lloyd", "E8"],
            ["Helen Lloyd", "E10"],
            ["Helen Lloyd", "E11"],
            ["Helen Lloyd", "E12"],
            ["Dorothy Murchison", "E8"],
            ["Dorothy Murchison", "E9"],
            ["Olivia Carleton", "E9"],
            ["Olivia Carleton", "E11"],
            ["Flora Price", "E9"],
            ["Flora Price", "E11"]
        ]);
        return a
    }
    w("jsnx.generators.social.davis_southern_women_graph", rd);
    w("jsnx.davis_southern_women_graph", rd);

    function sd() {
        var a = new R;
        a.b("Acciaiuoli", "Medici");
        a.b("Castellani", "Peruzzi");
        a.b("Castellani", "Strozzi");
        a.b("Castellani", "Barbadori");
        a.b("Medici", "Barbadori");
        a.b("Medici", "Ridolfi");
        a.b("Medici", "Tornabuoni");
        a.b("Medici", "Albizzi");
        a.b("Medici", "Salviati");
        a.b("Salviati", "Pazzi");
        a.b("Peruzzi", "Strozzi");
        a.b("Peruzzi", "Bischeri");
        a.b("Strozzi", "Ridolfi");
        a.b("Strozzi", "Bischeri");
        a.b("Ridolfi", "Tornabuoni");
        a.b("Tornabuoni", "Guadagni");
        a.b("Albizzi", "Ginori");
        a.b("Albizzi", "Guadagni");
        a.b("Bischeri",
            "Guadagni");
        a.b("Guadagni", "Lamberteschi");
        return a
    }
    w("jsnx.generators.social.florentine_families_graph", sd);
    w("jsnx.florentine_families_graph", sd);

    function td(a, b) {
        b != l && b.d() && h(new L("Directed Graph not supported"));
        return ud(a, b)
    }
    w("jsnx.generators.small.make_small_undirected_graph", td);

    function ud(a, b) {
        var c = a[0],
            d = a[1],
            e = a[2],
            f = fd(e, b),
            g = f.nodes();
        if ("adjacencylist" == c) {
            var n = a[3];
            n.length != e && h(new L("invalid graph_description"));
            y(g, function(a) {
                P(n[a], function(b) {
                    f.b(b - 1, a)
                })
            })
        } else "edgelist" == c && P(a[3], function(a) {
            var b = a[0] - 1;
            a = a[1] - 1;
            (0 > b || b > e - 1 || 0 > a || a > e - 1) && h(new L("invalid graph_description"));
            f.b(b, a)
        });
        f.name = d;
        return f
    }
    w("jsnx.generators.small.make_small_graph", ud);
    w("jsnx.make_small_graph", ud);

    function vd(a) {
        return td(["adjacencylist", "Bull Graph", 5, [
            [2, 3],
            [1, 3, 4],
            [1, 2, 5],
            [2],
            [3]
        ]], a)
    }
    w("jsnx.generators.small.bull_graph", vd);
    w("jsnx.bull_graph", vd);

    function wd(a) {
        return td(["adjacencylist", "Krackhardt Kite Social Network", 10, [
            [2, 3, 4, 6],
            [1, 4, 5, 7],
            [1, 4, 6],
            [1, 2, 3, 5, 6, 7],
            [2, 4, 7],
            [1, 3, 4, 7, 8],
            [2, 4, 5, 6, 8],
            [6, 7, 9],
            [8, 10],
            [9]
        ]], a)
    }
    w("jsnx.generators.small.krackhardt_kite_graph", wd);
    w("jsnx.krackhardt_kite_graph", wd);

    function xd(a, b, c) {
        var d = b;
        !fa(d.set) && !fa(d.get) && (d = new O(d));
        fa(b) && (d = new O, D(a.J(), function(a) {
            d.set(a, b(a))
        }));
        return !s(c) || c ? yd(a, d) : zd(a, d)
    }
    w("jsnx.relabel.relabel_nodes", xd);
    w("jsnx.relabel_nodes", xd);

    function zd(a, b) {
        var c = new Q(b.keys()),
            d;
        if (0 < c.n(b.j()).count()) {
            c = new Y(b);
            c.M(c.W());
            try {
                d = Fc(c)
            } catch (e) {
                e instanceof ab && h(new ab("The node label sets are overlapping and no ordering can resolve the mapping. Use copy=True."))
            }
            d.reverse()
        } else d = c;
        var f = a.i(),
            g = a.d(),
            n;
        D(d, function(c) {
            var d;
            b.a(c) && (d = b.get(c), a.s(c) || h(new L("Node " + c + " is not in the graph.")), a.N(d, a.node.get(c)), f ? (n = z(a.r(c, k, k), function(a) {
                return [d, a[1], a[2], a[3]]
            }), g && (n = ta(n, z(a.Q(c, k, k), function(a) {
                return [a[0], d, a[2],
                    a[3]]
            })))) : (n = z(a.r(c, k), function(a) {
                return [d, a[1], a[2]]
            }), g && (n = ta(n, z(a.Q(c, k), function(a) {
                return [a[0], d, a[2]]
            })))), a.V(c), a.c(n))
        });
        return a
    }

    function yd(a, b) {
        var c = new a.constructor;
        c.name("(" + a.name() + ")");
        a.i() ? c.c(F(a.l(l, k, k), function(a) {
            return [b.get(a[0], a[0]), b.get(a[1], a[1]), a[2], Sa(a[3])]
        })) : c.c(F(a.l(l, k), function(a) {
            return [b.get(a[0], a[0]), b.get(a[1], a[1]), Sa(a[2])]
        }));
        c.h(F(kb(a), function(a) {
            return b.get(a, a)
        }));
        var d = new O;
        a.node.forEach(function(c) {
            d.set(b.get(c, c), Sa(a.node.get(c)))
        });
        d.forEach(function(a, b) {
            c.node.set(a, b)
        });
        J(c.graph, Sa(a.graph));
        return c
    }

    function Ad(a, b, c, d) {
        3 === arguments.length && v(c) ? (d = c, c = l) : 2 === arguments.length && (v(b) ? (d = b, b = l) : u(b) && (c = b, b = l));
        b != l || (b = 0);
        c != l || (c = "default");
        d != l || (d = k);
        a.L();
        var e = new O,
            f, g, n, r;
        if ("default" === c) {
            f = a.nodes();
            g = 0;
            n = b;
            for (r = f.length; g < r; g++, n++) e.set(f[g], n)
        } else if ("sorted" === c) {
            f = a.nodes();
            x.sort.call(f, Aa);
            g = 0;
            n = b;
            for (r = f.length; g < r; g++, n++) e.set(f[g], n)
        } else if ("increasing degree" === c) {
            f = Ea(a.q());
            f.sort(function(a, b) {
                return a[1] - b[1]
            });
            g = 0;
            n = b;
            for (r = f.length; g < r; g++, n++) e.set(f[g][0], n)
        } else if ("decreasing degree" ===
            c) {
            f = Ea(a.q());
            f.sort(function(a, b) {
                return b[1] - a[1]
            });
            g = 0;
            n = b;
            for (r = f.length; g < r; g++, n++) e.set(f[g][0], n)
        } else h(new L("Unkown node ordering: " + c));
        g = xd(a, e);
        g.name("(" + a.name() + ")_with_int_labels");
        d || (g.node_labels = e);
        return g
    }
    w("jsnx.relabel.convert_node_labels_to_integers", Ad);
    w("jsnx.convert_node_labels_to_integers", Ad);
}));
