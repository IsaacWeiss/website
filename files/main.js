(function (e) {
  var t = window["publishedWBJP"];
  window["publishedWBJP"] = function o(s, a) {
    var l, u, c = 0,
      d = [];
    for (; c < s.length; c++) {
      u = s[c];
      if (n[u]) d.push.apply(d, n[u]);
      n[u] = 0
    }
    for (l in a) {
      if (Object.prototype.hasOwnProperty.call(a, l)) {
        e[l] = a[l]
      }
    }
    if (t) t(s, a);
    while (d.length) d.shift().call(null, r);
    if (a[0]) {
      i[0] = 0;
      return r(0)
    }
  };
  var i = {};
  var n = {
    2: 0
  };

  function r(t) {
    if (i[t]) return i[t].exports;
    var n = i[t] = {
      exports: {},
      id: t,
      loaded: false
    };
    e[t].call(n.exports, n, n.exports, r);
    n.loaded = true;
    return n.exports
  }
  r.e = function e(t, i) {
    if (n[t] === 0) return i.call(null, r);
    if (n[t] !== undefined) {
      n[t].push(i)
    }
    else {
      n[t] = [i];
      var o = document.getElementsByTagName("head")[0];
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.charset = "utf-8";
      s.async = true;
      s.src = r.p + "" + {
        11: "5ab2b9565867ea666fb8",
        12: "285ee45778b2a19169c7",
        13: "9d052a2abad65f9bc56f",
        14: "3b00188bd49dac479c57",
        15: "b6353cc0e423d7a50e8c",
        16: "054f225d281471b09455",
        17: "15d444be9354963ed484",
        18: "afaef63f10fcebc93d78"
      }[t] + ".js";
      o.appendChild(s)
    }
  };
  r.m = e;
  r.c = i;
  r.p = "https://cdn2.editmysite.com/js/";
  r.p = "https://" + window.ASSETS_BASE + "/js/" || r.p;
  return r(0)
})({
  0: function (e, t, i) {
    e.exports = i(620)
  },
  1: function (e, t, i) {
    var n;
    !(n = function () {
      if (window.Weebly !== undefined && window.Weebly.jQuery !== undefined) {
        return window.Weebly.jQuery
      }
      return window.jQuery
    }.call(t, i, t, e), n !== undefined && (e.exports = n))
  },
  2: function (e, t, i) {
    var n, r;
    !(n = [i(1)], r = function (e) {
      window.Weebly = window._W = window._W || {};
      window._W.utl = window._W.utl || function (e) {
        window._W.failedTls = window._W.failedTls || [];
        window._W.failedTls.push(e);
        return e
      };
      window._W.ftl = window._W.ftl || function (e) {
        window._W.failedFtls = window._W.failedFtls || [];
        window._W.failedFtls.push(e);
        return ""
      };
      window._W.utl = window._W.utl || function (e) {
        window._W.failedUtls = window._W.failedUtls || [];
        window._W.failedUtls.push(e);
        return ""
      };
      window._W.stl = window._W.stl || function (e) {
        window._W.failedStls = window._W.failedStls || [];
        window._W.failedStls.push(e);
        return ""
      };
      window._W.setCookie = function (e, t, i) {
        var n = new Date;
        n.setTime(n.getTime() + i * 24 * 60 * 60 * 1e3);
        var r = "expires=" + n.toUTCString();
        document.cookie = e + "=" + t + "; " + r
      };
      window._W.clearCookie = function (e) {
        window._W.setCookie(e, "", -1)
      };
      window._W.getCookie = function (e) {
        var t = e + "=";
        var i = document.cookie.split(";");
        for (var n = 0; n < i.length; n++) {
          var r = i[n];
          while (r.charAt(0) == " ") r = r.substring(1);
          if (r.indexOf(t) == 0) return r.substring(t.length, r.length)
        }
        return ""
      };
      window._W.jQuery = e;
      window._W.RECAPTCHA_PUBLIC_KEY = window["RECAPTCHA_PUBLIC_KEY"] = "6Lf4O9USAAAAAOSa9cF4SEtxBcjrwrLe1_yP00ke";
      window._W.INVISIBLE_RECAPTCHA_PUBLIC_KEY = window["INVISIBLE_RECAPTCHA_PUBLIC_KEY"] = "6LfRSRsUAAAAAKZnbFLRh9pFqexMBpUkku4TAYM7";
      return window._W
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  3: function (e, t, i) {
    (function (t) {
      e.exports = t["_"] = i(34)
    }).call(t, function () {
      return this
    }())
  },
  5: function (e, t, i) {
    var n, r;
    (function (o, s) {
      if (true) {
        !(n = [i(3), i(1), t], r = function (e, t, i) {
          o.Backbone = s(o, i, e, t)
        }.apply(t, n), r !== undefined && (e.exports = r))
      }
      else if (typeof t !== "undefined") {
        var a = require("underscore");
        s(o, t, a)
      }
      else {
        o.Backbone = s(o, {}, o._, o.jQuery || o.Zepto || o.ender || o.$)
      }
    })(this, function (e, t, i, n) {
      var r = e.Backbone;
      var o = [];
      var s = o.push;
      var a = o.slice;
      var l = o.splice;
      t.VERSION = "1.1.2";
      t.$ = n;
      t.noConflict = function () {
        e.Backbone = r;
        return this
      };
      t.emulateHTTP = false;
      t.emulateJSON = false;
      var u = t.Events = {
        on: function (e, t, i) {
          if (!d(this, "on", e, [t, i]) || !t) return this;
          this._events || (this._events = {});
          var n = this._events[e] || (this._events[e] = []);
          n.push({
            callback: t,
            context: i,
            ctx: i || this
          });
          return this
        },
        once: function (e, t, n) {
          if (!d(this, "once", e, [t, n]) || !t) return this;
          var r = this;
          var o = i.once(function () {
            r.off(e, o);
            t.apply(this, arguments)
          });
          o._callback = t;
          return this.on(e, o, n)
        },
        off: function (e, t, n) {
          var r, o, s, a, l, u, c, f;
          if (!this._events || !d(this, "off", e, [t, n])) return this;
          if (!e && !t && !n) {
            this._events = void 0;
            return this
          }
          a = e ? [e] : i.keys(this._events);
          for (l = 0, u = a.length; l < u; l++) {
            e = a[l];
            if (s = this._events[e]) {
              this._events[e] = r = [];
              if (t || n) {
                for (c = 0, f = s.length; c < f; c++) {
                  o = s[c];
                  if (t && t !== o.callback && t !== o.callback._callback || n && n !== o.context) {
                    r.push(o)
                  }
                }
              }
              if (!r.length) delete this._events[e]
            }
          }
          return this
        },
        trigger: function (e) {
          if (!this._events) return this;
          var t = a.call(arguments, 1);
          if (!d(this, "trigger", e, t)) return this;
          var i = this._events[e];
          var n = this._events.all;
          if (i) f(i, t);
          if (n) f(n, arguments);
          return this
        },
        stopListening: function (e, t, n) {
          var r = this._listeningTo;
          if (!r) return this;
          var o = !t && !n;
          if (!n && typeof t === "object") n = this;
          if (e)(r = {})[e._listenId] = e;
          for (var s in r) {
            e = r[s];
            e.off(t, n, this);
            if (o || i.isEmpty(e._events)) delete this._listeningTo[s]
          }
          return this
        }
      };
      var c = /\s+/;
      var d = function (e, t, i, n) {
        if (!i) return true;
        if (typeof i === "object") {
          for (var r in i) {
            e[t].apply(e, [r, i[r]].concat(n))
          }
          return false
        }
        if (c.test(i)) {
          var o = i.split(c);
          for (var s = 0, a = o.length; s < a; s++) {
            e[t].apply(e, [o[s]].concat(n))
          }
          return false
        }
        return true
      };
      var f = function (e, t) {
        var i, n = -1,
          r = e.length,
          o = t[0],
          s = t[1],
          a = t[2];
        switch (t.length) {
          case 0:
            while (++n < r)(i = e[n]).callback.call(i.ctx);
            return;
          case 1:
            while (++n < r)(i = e[n]).callback.call(i.ctx, o);
            return;
          case 2:
            while (++n < r)(i = e[n]).callback.call(i.ctx, o, s);
            return;
          case 3:
            while (++n < r)(i = e[n]).callback.call(i.ctx, o, s, a);
            return;
          default:
            while (++n < r)(i = e[n]).callback.apply(i.ctx, t);
            return
        }
      };
      var h = {
        listenTo: "on",
        listenToOnce: "once"
      };
      i.each(h, function (e, t) {
        u[t] = function (t, n, r) {
          var o = this._listeningTo || (this._listeningTo = {});
          var s = t._listenId || (t._listenId = i.uniqueId("l"));
          o[s] = t;
          if (!r && typeof n === "object") r = this;
          t[e](n, r, this);
          return this
        }
      });
      u.bind = u.on;
      u.unbind = u.off;
      i.extend(t, u);
      var p = t.Model = function (e, t) {
        var n = e || {};
        t || (t = {});
        this.cid = i.uniqueId("c");
        this.attributes = {};
        if (t.collection) this.collection = t.collection;
        if (t.parse) n = this.parse(n, t) || {};
        n = i.defaults({}, n, i.result(this, "defaults"));
        this.set(n, t);
        this.changed = {};
        this.initialize.apply(this, arguments)
      };
      i.extend(p.prototype, u, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function (e) {
          return i.clone(this.attributes)
        },
        sync: function () {
          return t.sync.apply(this, arguments)
        },
        get: function (e) {
          return this.attributes[e]
        },
        escape: function (e) {
          return i.escape(this.get(e))
        },
        has: function (e) {
          return this.get(e) != null
        },
        set: function (e, t, n) {
          var r, o, s, a, l, u, c, d;
          if (e == null) return this;
          if (typeof e === "object") {
            o = e;
            n = t
          }
          else {
            (o = {})[e] = t
          }
          n || (n = {});
          if (!this._validate(o, n)) return false;
          s = n.unset;
          l = n.silent;
          a = [];
          u = this._changing;
          this._changing = true;
          if (!u) {
            this._previousAttributes = i.clone(this.attributes);
            this.changed = {}
          }
          d = this.attributes, c = this._previousAttributes;
          if (this.idAttribute in o) this.id = o[this.idAttribute];
          for (r in o) {
            t = o[r];
            if (!i.isEqual(d[r], t)) a.push(r);
            if (!i.isEqual(c[r], t)) {
              this.changed[r] = t
            }
            else {
              delete this.changed[r]
            }
            s ? delete d[r] : d[r] = t
          }
          if (!l) {
            if (a.length) this._pending = n;
            for (var f = 0, h = a.length; f < h; f++) {
              this.trigger("change:" + a[f], this, d[a[f]], n)
            }
          }
          if (u) return this;
          if (!l) {
            while (this._pending) {
              n = this._pending;
              this._pending = false;
              this.trigger("change", this, n)
            }
          }
          this._pending = false;
          this._changing = false;
          return this
        },
        unset: function (e, t) {
          return this.set(e, void 0, i.extend({}, t, {
            unset: true
          }))
        },
        clear: function (e) {
          var t = {};
          for (var n in this.attributes) t[n] = void 0;
          return this.set(t, i.extend({}, e, {
            unset: true
          }))
        },
        hasChanged: function (e) {
          if (e == null) return !i.isEmpty(this.changed);
          return i.has(this.changed, e)
        },
        changedAttributes: function (e) {
          if (!e) return this.hasChanged() ? i.clone(this.changed) : false;
          var t, n = false;
          var r = this._changing ? this._previousAttributes : this.attributes;
          for (var o in e) {
            if (i.isEqual(r[o], t = e[o])) continue;
            (n || (n = {}))[o] = t
          }
          return n
        },
        previous: function (e) {
          if (e == null || !this._previousAttributes) return null;
          return this._previousAttributes[e]
        },
        previousAttributes: function () {
          return i.clone(this._previousAttributes)
        },
        fetch: function (e) {
          e = e ? i.clone(e) : {};
          if (e.parse === void 0) e.parse = true;
          var t = this;
          var n = e.success;
          e.success = function (i) {
            if (!t.set(t.parse(i, e), e)) return false;
            if (n) n(t, i, e);
            t.trigger("sync", t, i, e)
          };
          O(this, e);
          return this.sync("read", this, e)
        },
        save: function (e, t, n) {
          var r, o, s, a = this.attributes;
          if (e == null || typeof e === "object") {
            r = e;
            n = t
          }
          else {
            (r = {})[e] = t
          }
          n = i.extend({
            validate: true
          }, n);
          if (r && !n.wait) {
            if (!this.set(r, n)) return false
          }
          else {
            if (!this._validate(r, n)) return false
          }
          if (r && n.wait) {
            this.attributes = i.extend({}, a, r)
          }
          if (n.parse === void 0) n.parse = true;
          var l = this;
          var u = n.success;
          n.success = function (e) {
            l.attributes = a;
            var t = l.parse(e, n);
            if (n.wait) t = i.extend(r || {}, t);
            if (i.isObject(t) && !l.set(t, n)) {
              return false
            }
            if (u) u(l, e, n);
            l.trigger("sync", l, e, n)
          };
          O(this, n);
          o = this.isNew() ? "create" : n.patch ? "patch" : "update";
          if (o === "patch") n.attrs = r;
          s = this.sync(o, this, n);
          if (r && n.wait) this.attributes = a;
          return s
        },
        destroy: function (e) {
          e = e ? i.clone(e) : {};
          var t = this;
          var n = e.success;
          var r = function () {
            t.trigger("destroy", t, t.collection, e)
          };
          e.success = function (i) {
            if (e.wait || t.isNew()) r();
            if (n) n(t, i, e);
            if (!t.isNew()) t.trigger("sync", t, i, e)
          };
          if (this.isNew()) {
            e.success();
            return false
          }
          O(this, e);
          var o = this.sync("delete", this, e);
          if (!e.wait) r();
          return o
        },
        url: function () {
          var e = i.result(this, "urlRoot") || i.result(this.collection, "url") || G();
          if (this.isNew()) return e;
          return e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function (e, t) {
          return e
        },
        clone: function () {
          return new this.constructor(this.attributes)
        },
        isNew: function () {
          return !this.has(this.idAttribute)
        },
        isValid: function (e) {
          return this._validate({}, i.extend(e || {}, {
            validate: true
          }))
        },
        _validate: function (e, t) {
          if (!t.validate || !this.validate) return true;
          e = i.extend({}, this.attributes, e);
          var n = this.validationError = this.validate(e, t) || null;
          if (!n) return true;
          this.trigger("invalid", this, n, i.extend(t, {
            validationError: n
          }));
          return false
        }
      });
      var m = ["keys", "values", "pairs", "invert", "pick", "omit"];
      i.each(m, function (e) {
        p.prototype[e] = function () {
          var t = a.call(arguments);
          t.unshift(this.attributes);
          return i[e].apply(i, t)
        }
      });
      var v = t.Collection = function (e, t) {
        t || (t = {});
        if (t.model) this.model = t.model;
        if (t.comparator !== void 0) this.comparator = t.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (e) this.reset(e, i.extend({
          silent: true
        }, t))
      };
      var g = {
        add: true,
        remove: true,
        merge: true
      };
      var y = {
        add: true,
        remove: false
      };
      i.extend(v.prototype, u, {
        model: p,
        initialize: function () {},
        toJSON: function (e) {
          return this.map(function (t) {
            return t.toJSON(e)
          })
        },
        sync: function () {
          return t.sync.apply(this, arguments)
        },
        add: function (e, t) {
          return this.set(e, i.extend({
            merge: false
          }, t, y))
        },
        remove: function (e, t) {
          var n = !i.isArray(e);
          e = n ? [e] : i.clone(e);
          t || (t = {});
          var r, o, s, a;
          for (r = 0, o = e.length; r < o; r++) {
            a = e[r] = this.get(e[r]);
            if (!a) continue;
            delete this._byId[a.id];
            delete this._byId[a.cid];
            s = this.indexOf(a);
            this.models.splice(s, 1);
            this.length--;
            if (!t.silent) {
              t.index = s;
              a.trigger("remove", a, this, t)
            }
            this._removeReference(a, t)
          }
          return n ? e[0] : e
        },
        set: function (e, t) {
          t = i.defaults({}, t, g);
          if (t.parse) e = this.parse(e, t);
          var n = !i.isArray(e);
          e = n ? e ? [e] : [] : i.clone(e);
          var r, o, s, a, l, u, c;
          var d = t.at;
          var f = this.model;
          var h = this.comparator && d == null && t.sort !== false;
          var m = i.isString(this.comparator) ? this.comparator : null;
          var v = [],
            y = [],
            b = {};
          var w = t.add,
            T = t.merge,
            S = t.remove;
          var _ = !h && w && S ? [] : false;
          for (r = 0, o = e.length; r < o; r++) {
            l = e[r] || {};
            if (l instanceof p) {
              s = a = l
            }
            else {
              s = l[f.prototype.idAttribute || "id"]
            }
            if (u = this.get(s)) {
              if (S) b[u.cid] = true;
              if (T) {
                l = l === a ? a.attributes : l;
                if (t.parse) l = u.parse(l, t);
                u.set(l, t);
                if (h && !c && u.hasChanged(m)) c = true
              }
              e[r] = u
            }
            else if (w) {
              a = e[r] = this._prepareModel(l, t);
              if (!a) continue;
              v.push(a);
              this._addReference(a, t)
            }
            a = u || a;
            if (_ && (a.isNew() || !b[a.id])) _.push(a);
            b[a.id] = true
          }
          if (S) {
            for (r = 0, o = this.length; r < o; ++r) {
              if (!b[(a = this.models[r]).cid]) y.push(a)
            }
            if (y.length) this.remove(y, t)
          }
          if (v.length || _ && _.length) {
            if (h) c = true;
            this.length += v.length;
            if (d != null) {
              for (r = 0, o = v.length; r < o; r++) {
                this.models.splice(d + r, 0, v[r])
              }
            }
            else {
              if (_) this.models.length = 0;
              var M = _ || v;
              for (r = 0, o = M.length; r < o; r++) {
                this.models.push(M[r])
              }
            }
          }
          if (c) this.sort({
            silent: true
          });
          if (!t.silent) {
            for (r = 0, o = v.length; r < o; r++) {
              (a = v[r]).trigger("add", a, this, t)
            }
            if (c || _ && _.length) this.trigger("sort", this, t)
          }
          return n ? e[0] : e
        },
        reset: function (e, t) {
          t || (t = {});
          for (var n = 0, r = this.models.length; n < r; n++) {
            this._removeReference(this.models[n], t)
          }
          t.previousModels = this.models;
          this._reset();
          e = this.add(e, i.extend({
            silent: true
          }, t));
          if (!t.silent) this.trigger("reset", this, t);
          return e
        },
        push: function (e, t) {
          return this.add(e, i.extend({
            at: this.length
          }, t))
        },
        pop: function (e) {
          var t = this.at(this.length - 1);
          this.remove(t, e);
          return t
        },
        unshift: function (e, t) {
          return this.add(e, i.extend({
            at: 0
          }, t))
        },
        shift: function (e) {
          var t = this.at(0);
          this.remove(t, e);
          return t
        },
        slice: function () {
          return a.apply(this.models, arguments)
        },
        get: function (e) {
          if (e == null) return void 0;
          return this._byId[e] || this._byId[e.id] || this._byId[e.cid]
        },
        at: function (e) {
          return this.models[e]
        },
        where: function (e, t) {
          if (i.isEmpty(e)) return t ? void 0 : [];
          return this[t ? "find" : "filter"](function (t) {
            for (var i in e) {
              if (e[i] !== t.get(i)) return false
            }
            return true
          })
        },
        findWhere: function (e) {
          return this.where(e, true)
        },
        sort: function (e) {
          if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
          e || (e = {});
          if (i.isString(this.comparator) || this.comparator.length === 1) {
            this.models = this.sortBy(this.comparator, this)
          }
          else {
            this.models.sort(i.bind(this.comparator, this))
          }
          if (!e.silent) this.trigger("sort", this, e);
          return this
        },
        pluck: function (e) {
          return i.invoke(this.models, "get", e)
        },
        fetch: function (e) {
          e = e ? i.clone(e) : {};
          if (e.parse === void 0) e.parse = true;
          var t = e.success;
          var n = this;
          e.success = function (i) {
            var r = e.reset ? "reset" : "set";
            n[r](i, e);
            if (t) t(n, i, e);
            n.trigger("sync", n, i, e)
          };
          O(this, e);
          return this.sync("read", this, e)
        },
        create: function (e, t) {
          t = t ? i.clone(t) : {};
          if (!(e = this._prepareModel(e, t))) return false;
          if (!t.wait) this.add(e, t);
          var n = this;
          var r = t.success;
          t.success = function (e, i) {
            if (t.wait) n.add(e, t);
            if (r) r(e, i, t)
          };
          e.save(null, t);
          return e
        },
        parse: function (e, t) {
          return e
        },
        clone: function () {
          return new this.constructor(this.models)
        },
        _reset: function () {
          this.length = 0;
          this.models = [];
          this._byId = {}
        },
        _prepareModel: function (e, t) {
          if (e instanceof p) return e;
          t = t ? i.clone(t) : {};
          t.collection = this;
          var n = new this.model(e, t);
          if (!n.validationError) return n;
          this.trigger("invalid", this, n.validationError, t);
          return false
        },
        _addReference: function (e, t) {
          this._byId[e.cid] = e;
          if (e.id != null) this._byId[e.id] = e;
          if (!e.collection) e.collection = this;
          e.on("all", this._onModelEvent, this)
        },
        _removeReference: function (e, t) {
          if (this === e.collection) delete e.collection;
          e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, i, n) {
          if ((e === "add" || e === "remove") && i !== this) return;
          if (e === "destroy") this.remove(t, n);
          if (t && e === "change:" + t.idAttribute) {
            delete this._byId[t.previous(t.idAttribute)];
            if (t.id != null) this._byId[t.id] = t
          }
          this.trigger.apply(this, arguments)
        }
      });
      var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
      i.each(b, function (e) {
        v.prototype[e] = function () {
          var t = a.call(arguments);
          t.unshift(this.models);
          return i[e].apply(i, t)
        }
      });
      var w = ["groupBy", "countBy", "sortBy", "indexBy"];
      i.each(w, function (e) {
        v.prototype[e] = function (t, n) {
          var r = i.isFunction(t) ? t : function (e) {
            return e.get(t)
          };
          return i[e](this.models, r, n)
        }
      });
      var T = t.View = function (e) {
        this.cid = i.uniqueId("view");
        e || (e = {});
        i.extend(this, i.pick(e, _));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
      };
      var S = /^(\S+)\s*(.*)$/;
      var _ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
      i.extend(T.prototype, u, {
        tagName: "div",
        $: function (e) {
          return this.$el.find(e)
        },
        initialize: function () {},
        render: function () {
          return this
        },
        remove: function () {
          this.$el.remove();
          this.stopListening();
          return this
        },
        setElement: function (e, i) {
          if (this.$el) this.undelegateEvents();
          this.$el = e instanceof t.$ ? e : t.$(e);
          this.el = this.$el[0];
          if (i !== false) this.delegateEvents();
          return this
        },
        delegateEvents: function (e) {
          if (!(e || (e = i.result(this, "events")))) return this;
          this.undelegateEvents();
          for (var t in e) {
            var n = e[t];
            if (!i.isFunction(n)) n = this[e[t]];
            if (!n) continue;
            var r = t.match(S);
            var o = r[1],
              s = r[2];
            n = i.bind(n, this);
            o += ".delegateEvents" + this.cid;
            if (s === "") {
              this.$el.on(o, n)
            }
            else {
              this.$el.on(o, s, n)
            }
          }
          return this
        },
        undelegateEvents: function () {
          this.$el.off(".delegateEvents" + this.cid);
          return this
        },
        _ensureElement: function () {
          if (!this.el) {
            var e = i.extend({}, i.result(this, "attributes"));
            if (this.id) e.id = i.result(this, "id");
            if (this.className) e["class"] = i.result(this, "className");
            var n = t.$("<" + i.result(this, "tagName") + ">").attr(e);
            this.setElement(n, false)
          }
          else {
            this.setElement(i.result(this, "el"), false)
          }
        }
      });
      t.sync = function (e, n, r) {
        var o = C[e];
        i.defaults(r || (r = {}), {
          emulateHTTP: t.emulateHTTP,
          emulateJSON: t.emulateJSON
        });
        var s = {
          type: o,
          dataType: "json"
        };
        if (!r.url) {
          s.url = i.result(n, "url") || G()
        }
        if (r.data == null && n && (e === "create" || e === "update" || e === "patch")) {
          s.contentType = "application/json";
          s.data = JSON.stringify(r.attrs || n.toJSON(r))
        }
        if (r.emulateJSON) {
          s.contentType = "application/x-www-form-urlencoded";
          s.data = s.data ? {
            model: s.data
          } : {}
        }
        if (r.emulateHTTP && (o === "PUT" || o === "DELETE" || o === "PATCH")) {
          s.type = "POST";
          if (r.emulateJSON) s.data._method = o;
          var a = r.beforeSend;
          r.beforeSend = function (e) {
            e.setRequestHeader("X-HTTP-Method-Override", o);
            if (a) return a.apply(this, arguments)
          }
        }
        if (s.type !== "GET" && !r.emulateJSON) {
          s.processData = false
        }
        if (s.type === "PATCH" && M) {
          s.xhr = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
          }
        }
        var l = r.xhr = t.ajax(i.extend(s, r));
        n.trigger("request", n, l, r);
        return l
      };
      var M = typeof window !== "undefined" && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
      var C = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
      };
      t.ajax = function () {
        return t.$.ajax.apply(t.$, arguments)
      };
      var P = t.Router = function (e) {
        e || (e = {});
        if (e.routes) this.routes = e.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments)
      };
      var x = /\((.*?)\)/g;
      var A = /(\(\?)?:\w+/g;
      var k = /\*\w+/g;
      var E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
      i.extend(P.prototype, u, {
        initialize: function () {},
        route: function (e, n, r) {
          if (!i.isRegExp(e)) e = this._routeToRegExp(e);
          if (i.isFunction(n)) {
            r = n;
            n = ""
          }
          if (!r) r = this[n];
          var o = this;
          t.history.route(e, function (i) {
            var s = o._extractParameters(e, i);
            o.execute(r, s);
            o.trigger.apply(o, ["route:" + n].concat(s));
            o.trigger("route", n, s);
            t.history.trigger("route", o, n, s)
          });
          return this
        },
        execute: function (e, t) {
          if (e) e.apply(this, t)
        },
        navigate: function (e, i) {
          t.history.navigate(e, i);
          return this
        },
        _bindRoutes: function () {
          if (!this.routes) return;
          this.routes = i.result(this, "routes");
          var e, t = i.keys(this.routes);
          while ((e = t.pop()) != null) {
            this.route(e, this.routes[e])
          }
        },
        _routeToRegExp: function (e) {
          e = e.replace(E, "\\$&").replace(x, "(?:$1)?").replace(A, function (e, t) {
            return t ? e : "([^/?]+)"
          }).replace(k, "([^?]*?)");
          return new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function (e, t) {
          var n = e.exec(t).slice(1);
          return i.map(n, function (e, t) {
            if (t === n.length - 1) return e || null;
            return e ? decodeURIComponent(e) : null
          })
        }
      });
      var I = t.History = function () {
        this.handlers = [];
        i.bindAll(this, "checkUrl");
        if (typeof window !== "undefined") {
          this.location = window.location;
          this.history = window.history
        }
      };
      var D = /^[#\/]|\s+$/g;
      var F = /^\/+|\/+$/g;
      var H = /msie [\w.]+/;
      var R = /\/$/;
      var B = /#.*$/;
      I.started = false;
      i.extend(I.prototype, u, {
        interval: 50,
        atRoot: function () {
          return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function (e) {
          var t = (e || this).location.href.match(/#(.*)$/);
          return t ? t[1] : ""
        },
        getFragment: function (e, t) {
          if (e == null) {
            if (this._hasPushState || !this._wantsHashChange || t) {
              e = decodeURI(this.location.pathname + this.location.search);
              var i = this.root.replace(R, "");
              if (!e.indexOf(i)) e = e.slice(i.length)
            }
            else {
              e = this.getHash()
            }
          }
          return e.replace(D, "")
        },
        start: function (e) {
          if (I.started) throw new Error("Backbone.history has already been started");
          I.started = true;
          this.options = i.extend({
            root: "/"
          }, this.options, e);
          this.root = this.options.root;
          this._wantsHashChange = this.options.hashChange !== false;
          this._wantsPushState = !!this.options.pushState;
          this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
          var n = this.getFragment();
          var r = document.documentMode;
          var o = H.exec(navigator.userAgent.toLowerCase()) && (!r || r <= 7);
          this.root = ("/" + this.root + "/").replace(F, "/");
          if (o && this._wantsHashChange) {
            var s = t.$('<iframe src="javascript:0" tabindex="-1">');
            this.iframe = s.hide().appendTo("body")[0].contentWindow;
            this.navigate(n)
          }
          if (this._hasPushState) {
            t.$(window).on("popstate", this.checkUrl)
          }
          else if (this._wantsHashChange && "onhashchange" in window && !o) {
            t.$(window).on("hashchange", this.checkUrl)
          }
          else if (this._wantsHashChange) {
            this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
          }
          this.fragment = n;
          var a = this.location;
          if (this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !this.atRoot()) {
              this.fragment = this.getFragment(null, true);
              this.location.replace(this.root + "#" + this.fragment);
              return true
            }
            else if (this._hasPushState && this.atRoot() && a.hash) {
              this.fragment = this.getHash().replace(D, "");
              this.history.replaceState({}, document.title, this.root + this.fragment)
            }
          }
          if (!this.options.silent) return this.loadUrl()
        },
        stop: function () {
          t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
          if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
          I.started = false
        },
        route: function (e, t) {
          this.handlers.unshift({
            route: e,
            callback: t
          })
        },
        checkUrl: function (e) {
          var t = this.getFragment();
          if (t === this.fragment && this.iframe) {
            t = this.getFragment(this.getHash(this.iframe))
          }
          if (t === this.fragment) return false;
          if (this.iframe) this.navigate(t);
          this.loadUrl()
        },
        loadUrl: function (e) {
          e = this.fragment = this.getFragment(e);
          return i.any(this.handlers, function (t) {
            if (t.route.test(e)) {
              t.callback(e);
              return true
            }
          })
        },
        navigate: function (e, t) {
          if (!I.started) return false;
          if (!t || t === true) t = {
            trigger: !!t
          };
          var i = this.root + (e = this.getFragment(e || ""));
          e = e.replace(B, "");
          if (this.fragment === e) return;
          this.fragment = e;
          if (e === "" && i !== "/") i = i.slice(0, -1);
          if (this._hasPushState) {
            this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i)
          }
          else if (this._wantsHashChange) {
            this._updateHash(this.location, e, t.replace);
            if (this.iframe && e !== this.getFragment(this.getHash(this.iframe))) {
              if (!t.replace) this.iframe.document.open().close();
              this._updateHash(this.iframe.location, e, t.replace)
            }
          }
          else {
            return this.location.assign(i)
          }
          if (t.trigger) return this.loadUrl(e)
        },
        _updateHash: function (e, t, i) {
          if (i) {
            var n = e.href.replace(/(javascript:|#).*$/, "");
            e.replace(n + "#" + t)
          }
          else {
            e.hash = "#" + t
          }
        }
      });
      t.history = new I;
      var j = function (e, t) {
        var n = this;
        var r;
        if (e && i.has(e, "constructor")) {
          r = e.constructor
        }
        else {
          r = function () {
            return n.apply(this, arguments)
          }
        }
        i.extend(r, n, t);
        var o = function () {
          this.constructor = r
        };
        o.prototype = n.prototype;
        r.prototype = new o;
        if (e) i.extend(r.prototype, e);
        r.__super__ = n.prototype;
        return r
      };
      p.extend = v.extend = P.extend = T.extend = I.extend = j;
      var G = function () {
        throw new Error('A "url" property or function must be specified')
      };
      var O = function (e, t) {
        var i = t.error;
        t.error = function (n) {
          if (i) i(e, n, t);
          e.trigger("error", e, n, t)
        }
      };
      return t
    })
  },
  6: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(3), i(2), i(66), i(43)], r = function (e, t, i, n, r) {
      window.Mustache = n;
      var o = i.AdminType;
      var s = {
        date: "MMMM D, YYYY",
        shortDate: "M/D/YY",
        longDate: "M/D/YYYY",
        time: "h:mm a"
      };
      var a = function (e) {
        return function (t, i) {
          var n = i(t),
            o = r.unix(n);
          return o.format(s[e])
        }
      };
      var l = {
        expireCookie: function (e) {
          document.cookie = e + "=; expires=Thu, 18 Dec 2000 12:00:00 UTC"
        },
        setCookie: function (e, t) {
          l.expireCookie(e);
          document.cookie = e + "=" + t + "; path=/; domain=" + window.location.hostname
        }
      };

      function u() {
        return function (e, t) {
          return t(i.stl(e))
        }
      }
      var c = {
        buildTime: typeof window.buildTime !== "undefined" ? window.buildTime : null,
        ASSETS_BASE: typeof window.ASSETS_BASE !== "undefined" ? window.ASSETS_BASE : null,
        tl: function () {
          return function (e, t) {
            return t(i.utl(e))
          }
        },
        ftl: u,
        stl: u,
        esc_attr: function () {
          return function (e, i) {
            return t.escape(i(e))
          }
        },
        fmt: {
          date: function () {
            return a("date")
          },
          shortDate: function () {
            return a("shortDate")
          },
          longDate: function () {
            return a("longDate")
          },
          time: function () {
            return a("time")
          }
        },
        isWeeblyAdmin: function () {
          return o === "weebly"
        },
        td: function () {
          return function (e, i) {
            var n = ["d", "j", "m", "n", "y", "Y", "a", "A", "g", "h", "G", "H", "i", "s"];
            var o = ["DD", "D", "MM", "M", "YY", "YYYY", "a", "A", "hh", "h", "HH", "H", "mm", "ss"];
            t.each(n, function (t, i) {
              e = e.replace(t, o[i])
            });
            var s = e.split(/\|/);
            var a = s[0];
            var l = i("{{" + s[1] + "}}");
            var u = r(l).format(a);
            return u
          }
        },
        csrf_input: function () {
          var e = window.csrfToken;
          if (!e) {
            e = Math.random().toString(36).substring(2);
            l.setCookie("_csrf", e)
          }
          return "<input type='hidden' name='_csrf' value='" + e + "' />"
        }
      };
      n.origRender = n.render;
      n.render = function (e, i, r) {
        i = t.extend({}, i, c);
        r = t.extend({}, this.partialCache, r);
        return n.origRender.call(this, e, i, r)
      };
      n.compile = function (e) {
        return this.render.bind(this, e)
      };
      n.compilePartial = function (e, t) {
        this.partialCache = this.partialCache || {};
        this.partialCache[e] = t
      };
      var d = n.Writer.prototype;
      d.origCompile = d.compile;
      d.compile = function (t) {
        var i = d.origCompile.apply(this, [t]);
        return function (t) {
          var n = Array.prototype.slice.call(arguments);
          n[0] = e.extend(n[0] || {}, c);
          return i.apply(this, n)
        }
      };
      return n
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  7: function (e, t, i) {
    var n, r;
    !(n = [i(5), i(64), i(69), i(51), i(50), i(87), i(88), i(42)], r = function (e) {
      var t = {},
        i = e.RelationalModel.extend;
      e.Relational.store.addModelScope(t);
      e.RelationalModel.extend = function (e, n) {
        var r = i.apply(this, arguments);
        var o = e._class;
        if (o) {
          o = o.split(".");
          o = o[o.length - 1];
          t[o] = r
        }
        return r
      };
      e.Wreqr.Handlers.prototype.removeHandlers = function (e) {
        for (var t = 0; t < e.length; t++) {
          this.removeHandler(e[t])
        }
      };
      return e
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  21: function (e, t, i) {
    var n, r;
    !(n = [i(2), i(7)], r = function (e, t) {
      var i = new t.Marionette.Application;
      i.addRegions({
        contentRegion: "#wsite-content"
      });
      return i
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  32: function (e, t, i) {
    var n, r, o;
    (function (s) {
      if (true) {
        !(r = [i(1)], n = s, o = typeof n === "function" ? n.apply(t, r) : n, o !== undefined && (e.exports = o))
      }
      else {
        s(jQuery)
      }
    })(function (e) {
      var t = "ui-effects-",
        i = e;
      e.effects = {
        effect: {}
      };
      (function (e, t) {
        var i = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
          n = /^([\-+])=\s*(\d+\.?\d*)/,
          r = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
              return [e[1], e[2], e[3], e[4]]
            }
          }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
              return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
            }
          }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function (e) {
              return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
          }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function (e) {
              return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
          }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (e) {
              return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
          }],
          o = e.Color = function (t, i, n, r) {
            return new e.Color.fn.parse(t, i, n, r)
          },
          s = {
            rgba: {
              props: {
                red: {
                  idx: 0,
                  type: "byte"
                },
                green: {
                  idx: 1,
                  type: "byte"
                },
                blue: {
                  idx: 2,
                  type: "byte"
                }
              }
            },
            hsla: {
              props: {
                hue: {
                  idx: 0,
                  type: "degrees"
                },
                saturation: {
                  idx: 1,
                  type: "percent"
                },
                lightness: {
                  idx: 2,
                  type: "percent"
                }
              }
            }
          },
          a = {
            byte: {
              floor: true,
              max: 255
            },
            percent: {
              max: 1
            },
            degrees: {
              mod: 360,
              floor: true
            }
          },
          l = o.support = {},
          u = e("<p>")[0],
          c, d = e.each;
        u.style.cssText = "background-color:rgba(1,1,1,.5)";
        l.rgba = u.style.backgroundColor.indexOf("rgba") > -1;
        d(s, function (e, t) {
          t.cache = "_" + e;
          t.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
          }
        });

        function f(e, t, i) {
          var n = a[t.type] || {};
          if (e == null) {
            return i || !t.def ? null : t.def
          }
          e = n.floor ? ~~e : parseFloat(e);
          if (isNaN(e)) {
            return t.def
          }
          if (n.mod) {
            return (e + n.mod) % n.mod
          }
          return 0 > e ? 0 : n.max < e ? n.max : e
        }

        function h(t) {
          var i = o(),
            n = i._rgba = [];
          t = t.toLowerCase();
          d(r, function (e, r) {
            var o, a = r.re.exec(t),
              l = a && r.parse(a),
              u = r.space || "rgba";
            if (l) {
              o = i[u](l);
              i[s[u].cache] = o[s[u].cache];
              n = i._rgba = o._rgba;
              return false
            }
          });
          if (n.length) {
            if (n.join() === "0,0,0,0") {
              e.extend(n, c.transparent)
            }
            return i
          }
          return c[t]
        }
        o.fn = e.extend(o.prototype, {
          parse: function (i, n, r, a) {
            if (i === t) {
              this._rgba = [null, null, null, null];
              return this
            }
            if (i.jquery || i.nodeType) {
              i = e(i).css(n);
              n = t
            }
            var l = this,
              u = e.type(i),
              p = this._rgba = [];
            if (n !== t) {
              i = [i, n, r, a];
              u = "array"
            }
            if (u === "string") {
              return this.parse(h(i) || c._default)
            }
            if (u === "array") {
              d(s.rgba.props, function (e, t) {
                p[t.idx] = f(i[t.idx], t)
              });
              return this
            }
            if (u === "object") {
              if (i instanceof o) {
                d(s, function (e, t) {
                  if (i[t.cache]) {
                    l[t.cache] = i[t.cache].slice()
                  }
                })
              }
              else {
                d(s, function (t, n) {
                  var r = n.cache;
                  d(n.props, function (e, t) {
                    if (!l[r] && n.to) {
                      if (e === "alpha" || i[e] == null) {
                        return
                      }
                      l[r] = n.to(l._rgba)
                    }
                    l[r][t.idx] = f(i[e], t, true)
                  });
                  if (l[r] && e.inArray(null, l[r].slice(0, 3)) < 0) {
                    l[r][3] = 1;
                    if (n.from) {
                      l._rgba = n.from(l[r])
                    }
                  }
                })
              }
              return this
            }
          },
          is: function (e) {
            var t = o(e),
              i = true,
              n = this;
            d(s, function (e, r) {
              var o, s = t[r.cache];
              if (s) {
                o = n[r.cache] || r.to && r.to(n._rgba) || [];
                d(r.props, function (e, t) {
                  if (s[t.idx] != null) {
                    i = s[t.idx] === o[t.idx];
                    return i
                  }
                })
              }
              return i
            });
            return i
          },
          _space: function () {
            var e = [],
              t = this;
            d(s, function (i, n) {
              if (t[n.cache]) {
                e.push(i)
              }
            });
            return e.pop()
          },
          transition: function (e, t) {
            var i = o(e),
              n = i._space(),
              r = s[n],
              l = this.alpha() === 0 ? o("transparent") : this,
              u = l[r.cache] || r.to(l._rgba),
              c = u.slice();
            i = i[r.cache];
            d(r.props, function (e, n) {
              var r = n.idx,
                o = u[r],
                s = i[r],
                l = a[n.type] || {};
              if (s === null) {
                return
              }
              if (o === null) {
                c[r] = s
              }
              else {
                if (l.mod) {
                  if (s - o > l.mod / 2) {
                    o += l.mod
                  }
                  else if (o - s > l.mod / 2) {
                    o -= l.mod
                  }
                }
                c[r] = f((s - o) * t + o, n)
              }
            });
            return this[n](c)
          },
          blend: function (t) {
            if (this._rgba[3] === 1) {
              return this
            }
            var i = this._rgba.slice(),
              n = i.pop(),
              r = o(t)._rgba;
            return o(e.map(i, function (e, t) {
              return (1 - n) * r[t] + n * e
            }))
          },
          toRgbaString: function () {
            var t = "rgba(",
              i = e.map(this._rgba, function (e, t) {
                return e == null ? t > 2 ? 1 : 0 : e
              });
            if (i[3] === 1) {
              i.pop();
              t = "rgb("
            }
            return t + i.join() + ")"
          },
          toHslaString: function () {
            var t = "hsla(",
              i = e.map(this.hsla(), function (e, t) {
                if (e == null) {
                  e = t > 2 ? 1 : 0
                }
                if (t && t < 3) {
                  e = Math.round(e * 100) + "%"
                }
                return e
              });
            if (i[3] === 1) {
              i.pop();
              t = "hsl("
            }
            return t + i.join() + ")"
          },
          toHexString: function (t) {
            var i = this._rgba.slice(),
              n = i.pop();
            if (t) {
              i.push(~~(n * 255))
            }
            return "#" + e.map(i, function (e) {
              e = (e || 0).toString(16);
              return e.length === 1 ? "0" + e : e
            }).join("")
          },
          toString: function () {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
          }
        });
        o.fn.parse.prototype = o.fn;

        function p(e, t, i) {
          i = (i + 1) % 1;
          if (i * 6 < 1) {
            return e + (t - e) * i * 6
          }
          if (i * 2 < 1) {
            return t
          }
          if (i * 3 < 2) {
            return e + (t - e) * (2 / 3 - i) * 6
          }
          return e
        }
        s.hsla.to = function (e) {
          if (e[0] == null || e[1] == null || e[2] == null) {
            return [null, null, null, e[3]]
          }
          var t = e[0] / 255,
            i = e[1] / 255,
            n = e[2] / 255,
            r = e[3],
            o = Math.max(t, i, n),
            s = Math.min(t, i, n),
            a = o - s,
            l = o + s,
            u = l * .5,
            c, d;
          if (s === o) {
            c = 0
          }
          else if (t === o) {
            c = 60 * (i - n) / a + 360
          }
          else if (i === o) {
            c = 60 * (n - t) / a + 120
          }
          else {
            c = 60 * (t - i) / a + 240
          }
          if (a === 0) {
            d = 0
          }
          else if (u <= .5) {
            d = a / l
          }
          else {
            d = a / (2 - l)
          }
          return [Math.round(c) % 360, d, u, r == null ? 1 : r]
        };
        s.hsla.from = function (e) {
          if (e[0] == null || e[1] == null || e[2] == null) {
            return [null, null, null, e[3]]
          }
          var t = e[0] / 360,
            i = e[1],
            n = e[2],
            r = e[3],
            o = n <= .5 ? n * (1 + i) : n + i - n * i,
            s = 2 * n - o;
          return [Math.round(p(s, o, t + 1 / 3) * 255), Math.round(p(s, o, t) * 255), Math.round(p(s, o, t - 1 / 3) * 255), r]
        };
        d(s, function (i, r) {
          var s = r.props,
            a = r.cache,
            l = r.to,
            u = r.from;
          o.fn[i] = function (i) {
            if (l && !this[a]) {
              this[a] = l(this._rgba)
            }
            if (i === t) {
              return this[a].slice()
            }
            var n, r = e.type(i),
              c = r === "array" || r === "object" ? i : arguments,
              h = this[a].slice();
            d(s, function (e, t) {
              var i = c[r === "object" ? e : t.idx];
              if (i == null) {
                i = h[t.idx]
              }
              h[t.idx] = f(i, t)
            });
            if (u) {
              n = o(u(h));
              n[a] = h;
              return n
            }
            else {
              return o(h)
            }
          };
          d(s, function (t, r) {
            if (o.fn[t]) {
              return
            }
            o.fn[t] = function (o) {
              var s = e.type(o),
                a = t === "alpha" ? this._hsla ? "hsla" : "rgba" : i,
                l = this[a](),
                u = l[r.idx],
                c;
              if (s === "undefined") {
                return u
              }
              if (s === "function") {
                o = o.call(this, u);
                s = e.type(o)
              }
              if (o == null && r.empty) {
                return this
              }
              if (s === "string") {
                c = n.exec(o);
                if (c) {
                  o = u + parseFloat(c[2]) * (c[1] === "+" ? 1 : -1)
                }
              }
              l[r.idx] = o;
              return this[a](l)
            }
          })
        });
        o.hook = function (t) {
          var i = t.split(" ");
          d(i, function (t, i) {
            e.cssHooks[i] = {
              set: function (t, n) {
                var r, s, a = "";
                if (n !== "transparent" && (e.type(n) !== "string" || (r = h(n)))) {
                  n = o(r || n);
                  if (!l.rgba && n._rgba[3] !== 1) {
                    s = i === "backgroundColor" ? t.parentNode : t;
                    while ((a === "" || a === "transparent") && s && s.style) {
                      try {
                        a = e.css(s, "backgroundColor");
                        s = s.parentNode
                      }
                      catch (e) {}
                    }
                    n = n.blend(a && a !== "transparent" ? a : "_default")
                  }
                  n = n.toRgbaString()
                }
                try {
                  t.style[i] = n
                }
                catch (e) {}
              }
            };
            e.fx.step[i] = function (t) {
              if (!t.colorInit) {
                t.start = o(t.elem, i);
                t.end = o(t.end);
                t.colorInit = true
              }
              e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
            }
          })
        };
        o.hook(i);
        e.cssHooks.borderColor = {
          expand: function (e) {
            var t = {};
            d(["Top", "Right", "Bottom", "Left"], function (i, n) {
              t["border" + n + "Color"] = e
            });
            return t
          }
        };
        c = e.Color.names = {
          aqua: "#00ffff",
          black: "#000000",
          blue: "#0000ff",
          fuchsia: "#ff00ff",
          gray: "#808080",
          green: "#008000",
          lime: "#00ff00",
          maroon: "#800000",
          navy: "#000080",
          olive: "#808000",
          purple: "#800080",
          red: "#ff0000",
          silver: "#c0c0c0",
          teal: "#008080",
          white: "#ffffff",
          yellow: "#ffff00",
          transparent: [null, null, null, 0],
          _default: "#ffffff"
        }
      })(i);
      (function () {
        var t = ["add", "remove", "toggle"],
          n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
          };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, n) {
          e.fx.step[n] = function (e) {
            if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) {
              i.style(e.elem, n, e.end);
              e.setAttr = true
            }
          }
        });

        function r(t) {
          var i, n, r = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
            o = {};
          if (r && r.length && r[0] && r[r[0]]) {
            n = r.length;
            while (n--) {
              i = r[n];
              if (typeof r[i] === "string") {
                o[e.camelCase(i)] = r[i]
              }
            }
          }
          else {
            for (i in r) {
              if (typeof r[i] === "string") {
                o[i] = r[i]
              }
            }
          }
          return o
        }

        function o(t, i) {
          var r = {},
            o, s;
          for (o in i) {
            s = i[o];
            if (t[o] !== s) {
              if (!n[o]) {
                if (e.fx.step[o] || !isNaN(parseFloat(s))) {
                  r[o] = s
                }
              }
            }
          }
          return r
        }
        if (!e.fn.addBack) {
          e.fn.addBack = function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
          }
        }
        e.effects.animateClass = function (i, n, s, a) {
          var l = e.speed(n, s, a);
          return this.queue(function () {
            var n = e(this),
              s = n.attr("class") || "",
              a, u = l.children ? n.find("*").addBack() : n;
            u = u.map(function () {
              var t = e(this);
              return {
                el: t,
                start: r(this)
              }
            });
            a = function () {
              e.each(t, function (e, t) {
                if (i[t]) {
                  n[t + "Class"](i[t])
                }
              })
            };
            a();
            u = u.map(function () {
              this.end = r(this.el[0]);
              this.diff = o(this.start, this.end);
              return this
            });
            n.attr("class", s);
            u = u.map(function () {
              var t = this,
                i = e.Deferred(),
                n = e.extend({}, l, {
                  queue: false,
                  complete: function () {
                    i.resolve(t)
                  }
                });
              this.el.animate(this.diff, n);
              return i.promise()
            });
            e.when.apply(e, u.get()).done(function () {
              a();
              e.each(arguments, function () {
                var t = this.el;
                e.each(this.diff, function (e) {
                  t.css(e, "")
                })
              });
              l.complete.call(n[0])
            })
          })
        };
        e.fn.extend({
          addClass: function (t) {
            return function (i, n, r, o) {
              return n ? e.effects.animateClass.call(this, {
                add: i
              }, n, r, o) : t.apply(this, arguments)
            }
          }(e.fn.addClass),
          removeClass: function (t) {
            return function (i, n, r, o) {
              return arguments.length > 1 ? e.effects.animateClass.call(this, {
                remove: i
              }, n, r, o) : t.apply(this, arguments)
            }
          }(e.fn.removeClass),
          toggleClass: function (t) {
            return function (i, n, r, o, s) {
              if (typeof n === "boolean" || n === undefined) {
                if (!r) {
                  return t.apply(this, arguments)
                }
                else {
                  return e.effects.animateClass.call(this, n ? {
                    add: i
                  } : {
                    remove: i
                  }, r, o, s)
                }
              }
              else {
                return e.effects.animateClass.call(this, {
                  toggle: i
                }, n, r, o)
              }
            }
          }(e.fn.toggleClass),
          switchClass: function (t, i, n, r, o) {
            return e.effects.animateClass.call(this, {
              add: i,
              remove: t
            }, n, r, o)
          }
        })
      })();
      (function () {
        e.extend(e.effects, {
          version: "1.11.4",
          save: function (e, i) {
            for (var n = 0; n < i.length; n++) {
              if (i[n] !== null) {
                e.data(t + i[n], e[0].style[i[n]])
              }
            }
          },
          restore: function (e, i) {
            var n, r;
            for (r = 0; r < i.length; r++) {
              if (i[r] !== null) {
                n = e.data(t + i[r]);
                if (n === undefined) {
                  n = ""
                }
                e.css(i[r], n)
              }
            }
          },
          setMode: function (e, t) {
            if (t === "toggle") {
              t = e.is(":hidden") ? "show" : "hide"
            }
            return t
          },
          getBaseline: function (e, t) {
            var i, n;
            switch (e[0]) {
              case "top":
                i = 0;
                break;
              case "middle":
                i = .5;
                break;
              case "bottom":
                i = 1;
                break;
              default:
                i = e[0] / t.height
            }
            switch (e[1]) {
              case "left":
                n = 0;
                break;
              case "center":
                n = .5;
                break;
              case "right":
                n = 1;
                break;
              default:
                n = e[1] / t.width
            }
            return {
              x: n,
              y: i
            }
          },
          createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) {
              return t.parent()
            }
            var i = {
                width: t.outerWidth(true),
                height: t.outerHeight(true),
                float: t.css("float")
              },
              n = e("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
              }),
              r = {
                width: t.width(),
                height: t.height()
              },
              o = document.activeElement;
            try {
              o.id
            }
            catch (e) {
              o = document.body
            }
            t.wrap(n);
            if (t[0] === o || e.contains(t[0], o)) {
              e(o).focus()
            }
            n = t.parent();
            if (t.css("position") === "static") {
              n.css({
                position: "relative"
              });
              t.css({
                position: "relative"
              })
            }
            else {
              e.extend(i, {
                position: t.css("position"),
                zIndex: t.css("z-index")
              });
              e.each(["top", "left", "bottom", "right"], function (e, n) {
                i[n] = t.css(n);
                if (isNaN(parseInt(i[n], 10))) {
                  i[n] = "auto"
                }
              });
              t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
              })
            }
            t.css(r);
            return n.css(i).show()
          },
          removeWrapper: function (t) {
            var i = document.activeElement;
            if (t.parent().is(".ui-effects-wrapper")) {
              t.parent().replaceWith(t);
              if (t[0] === i || e.contains(t[0], i)) {
                e(i).focus()
              }
            }
            return t
          },
          setTransition: function (t, i, n, r) {
            r = r || {};
            e.each(i, function (e, i) {
              var o = t.cssUnit(i);
              if (o[0] > 0) {
                r[i] = o[0] * n + o[1]
              }
            });
            return r
          }
        });

        function i(t, i, n, r) {
          if (e.isPlainObject(t)) {
            i = t;
            t = t.effect
          }
          t = {
            effect: t
          };
          if (i == null) {
            i = {}
          }
          if (e.isFunction(i)) {
            r = i;
            n = null;
            i = {}
          }
          if (typeof i === "number" || e.fx.speeds[i]) {
            r = n;
            n = i;
            i = {}
          }
          if (e.isFunction(n)) {
            r = n;
            n = null
          }
          if (i) {
            e.extend(t, i)
          }
          n = n || i.duration;
          t.duration = e.fx.off ? 0 : typeof n === "number" ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default;
          t.complete = r || i.complete;
          return t
        }

        function n(t) {
          if (!t || typeof t === "number" || e.fx.speeds[t]) {
            return true
          }
          if (typeof t === "string" && !e.effects.effect[t]) {
            return true
          }
          if (e.isFunction(t)) {
            return true
          }
          if (typeof t === "object" && !t.effect) {
            return true
          }
          return false
        }
        e.fn.extend({
          effect: function () {
            var t = i.apply(this, arguments),
              n = t.mode,
              r = t.queue,
              o = e.effects.effect[t.effect];
            if (e.fx.off || !o) {
              if (n) {
                return this[n](t.duration, t.complete)
              }
              else {
                return this.each(function () {
                  if (t.complete) {
                    t.complete.call(this)
                  }
                })
              }
            }

            function s(i) {
              var n = e(this),
                r = t.complete,
                s = t.mode;

              function a() {
                if (e.isFunction(r)) {
                  r.call(n[0])
                }
                if (e.isFunction(i)) {
                  i()
                }
              }
              if (n.is(":hidden") ? s === "hide" : s === "show") {
                n[s]();
                a()
              }
              else {
                o.call(n[0], t, a)
              }
            }
            return r === false ? this.each(s) : this.queue(r || "fx", s)
          },
          show: function (e) {
            return function (t) {
              if (n(t)) {
                return e.apply(this, arguments)
              }
              else {
                var r = i.apply(this, arguments);
                r.mode = "show";
                return this.effect.call(this, r)
              }
            }
          }(e.fn.show),
          hide: function (e) {
            return function (t) {
              if (n(t)) {
                return e.apply(this, arguments)
              }
              else {
                var r = i.apply(this, arguments);
                r.mode = "hide";
                return this.effect.call(this, r)
              }
            }
          }(e.fn.hide),
          toggle: function (e) {
            return function (t) {
              if (n(t) || typeof t === "boolean") {
                return e.apply(this, arguments)
              }
              else {
                var r = i.apply(this, arguments);
                r.mode = "toggle";
                return this.effect.call(this, r)
              }
            }
          }(e.fn.toggle),
          cssUnit: function (t) {
            var i = this.css(t),
              n = [];
            e.each(["em", "px", "%", "pt"], function (e, t) {
              if (i.indexOf(t) > 0) {
                n = [parseFloat(i), t]
              }
            });
            return n
          }
        })
      })();
      (function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
          t[i] = function (t) {
            return Math.pow(t, e + 2)
          }
        });
        e.extend(t, {
          Sine: function (e) {
            return 1 - Math.cos(e * Math.PI / 2)
          },
          Circ: function (e) {
            return 1 - Math.sqrt(1 - e * e)
          },
          Elastic: function (e) {
            return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
          },
          Back: function (e) {
            return e * e * (3 * e - 2)
          },
          Bounce: function (e) {
            var t, i = 4;
            while (e < ((t = Math.pow(2, --i)) - 1) / 11) {}
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
          }
        });
        e.each(t, function (t, i) {
          e.easing["easeIn" + t] = i;
          e.easing["easeOut" + t] = function (e) {
            return 1 - i(1 - e)
          };
          e.easing["easeInOut" + t] = function (e) {
            return e < .5 ? i(e * 2) / 2 : 1 - i(e * -2 + 2) / 2
          }
        })
      })();
      return e.effects
    })
  },
  34: function (e, t, i) {
    var n, r;
    (function () {
      var i = this;
      var o = i._;
      var s = Array.prototype,
        a = Object.prototype,
        l = Function.prototype;
      var u = s.push,
        c = s.slice,
        d = a.toString,
        f = a.hasOwnProperty;
      var h = Array.isArray,
        p = Object.keys,
        m = l.bind,
        v = Object.create;
      var g = function () {};
      var y = function (e) {
        if (e instanceof y) return e;
        if (!(this instanceof y)) return new y(e);
        this._wrapped = e
      };
      if (true) {
        if (typeof e !== "undefined" && e.exports) {
          t = e.exports = y
        }
        t._ = y
      }
      else {
        i._ = y
      }
      y.VERSION = "1.8.3";
      var b = function (e, t, i) {
        if (t === void 0) return e;
        switch (i == null ? 3 : i) {
          case 1:
            return function (i) {
              return e.call(t, i)
            };
          case 2:
            return function (i, n) {
              return e.call(t, i, n)
            };
          case 3:
            return function (i, n, r) {
              return e.call(t, i, n, r)
            };
          case 4:
            return function (i, n, r, o) {
              return e.call(t, i, n, r, o)
            }
        }
        return function () {
          return e.apply(t, arguments)
        }
      };
      var w = function (e, t, i) {
        if (e == null) return y.identity;
        if (y.isFunction(e)) return b(e, t, i);
        if (y.isObject(e)) return y.matcher(e);
        return y.property(e)
      };
      y.iteratee = function (e, t) {
        return w(e, t, Infinity)
      };
      var T = function (e, t) {
        return function (i) {
          var n = arguments.length;
          if (n < 2 || i == null) return i;
          for (var r = 1; r < n; r++) {
            var o = arguments[r],
              s = e(o),
              a = s.length;
            for (var l = 0; l < a; l++) {
              var u = s[l];
              if (!t || i[u] === void 0) i[u] = o[u]
            }
          }
          return i
        }
      };
      var S = function (e) {
        if (!y.isObject(e)) return {};
        if (v) return v(e);
        g.prototype = e;
        var t = new g;
        g.prototype = null;
        return t
      };
      var _ = function (e) {
        return function (t) {
          return t == null ? void 0 : t[e]
        }
      };
      var M = Math.pow(2, 53) - 1;
      var C = _("length");
      var P = function (e) {
        var t = C(e);
        return typeof t == "number" && t >= 0 && t <= M
      };
      y.each = y.forEach = function (e, t, i) {
        t = b(t, i);
        var n, r;
        if (P(e)) {
          for (n = 0, r = e.length; n < r; n++) {
            t(e[n], n, e)
          }
        }
        else {
          var o = y.keys(e);
          for (n = 0, r = o.length; n < r; n++) {
            t(e[o[n]], o[n], e)
          }
        }
        return e
      };
      y.map = y.collect = function (e, t, i) {
        t = w(t, i);
        var n = !P(e) && y.keys(e),
          r = (n || e).length,
          o = Array(r);
        for (var s = 0; s < r; s++) {
          var a = n ? n[s] : s;
          o[s] = t(e[a], a, e)
        }
        return o
      };

      function x(e) {
        function t(t, i, n, r, o, s) {
          for (; o >= 0 && o < s; o += e) {
            var a = r ? r[o] : o;
            n = i(n, t[a], a, t)
          }
          return n
        }
        return function (i, n, r, o) {
          n = b(n, o, 4);
          var s = !P(i) && y.keys(i),
            a = (s || i).length,
            l = e > 0 ? 0 : a - 1;
          if (arguments.length < 3) {
            r = i[s ? s[l] : l];
            l += e
          }
          return t(i, n, r, s, l, a)
        }
      }
      y.reduce = y.foldl = y.inject = x(1);
      y.reduceRight = y.foldr = x(-1);
      y.find = y.detect = function (e, t, i) {
        var n;
        if (P(e)) {
          n = y.findIndex(e, t, i)
        }
        else {
          n = y.findKey(e, t, i)
        }
        if (n !== void 0 && n !== -1) return e[n]
      };
      y.filter = y.select = function (e, t, i) {
        var n = [];
        t = w(t, i);
        y.each(e, function (e, i, r) {
          if (t(e, i, r)) n.push(e)
        });
        return n
      };
      y.reject = function (e, t, i) {
        return y.filter(e, y.negate(w(t)), i)
      };
      y.every = y.all = function (e, t, i) {
        t = w(t, i);
        var n = !P(e) && y.keys(e),
          r = (n || e).length;
        for (var o = 0; o < r; o++) {
          var s = n ? n[o] : o;
          if (!t(e[s], s, e)) return false
        }
        return true
      };
      y.some = y.any = function (e, t, i) {
        t = w(t, i);
        var n = !P(e) && y.keys(e),
          r = (n || e).length;
        for (var o = 0; o < r; o++) {
          var s = n ? n[o] : o;
          if (t(e[s], s, e)) return true
        }
        return false
      };
      y.contains = y.includes = y.include = function (e, t, i, n) {
        if (!P(e)) e = y.values(e);
        if (typeof i != "number" || n) i = 0;
        return y.indexOf(e, t, i) >= 0
      };
      y.invoke = function (e, t) {
        var i = c.call(arguments, 2);
        var n = y.isFunction(t);
        return y.map(e, function (e) {
          var r = n ? t : e[t];
          return r == null ? r : r.apply(e, i)
        })
      };
      y.pluck = function (e, t) {
        return y.map(e, y.property(t))
      };
      y.where = function (e, t) {
        return y.filter(e, y.matcher(t))
      };
      y.findWhere = function (e, t) {
        return y.find(e, y.matcher(t))
      };
      y.max = function (e, t, i) {
        var n = -Infinity,
          r = -Infinity,
          o, s;
        if (t == null && e != null) {
          e = P(e) ? e : y.values(e);
          for (var a = 0, l = e.length; a < l; a++) {
            o = e[a];
            if (o > n) {
              n = o
            }
          }
        }
        else {
          t = w(t, i);
          y.each(e, function (e, i, o) {
            s = t(e, i, o);
            if (s > r || s === -Infinity && n === -Infinity) {
              n = e;
              r = s
            }
          })
        }
        return n
      };
      y.min = function (e, t, i) {
        var n = Infinity,
          r = Infinity,
          o, s;
        if (t == null && e != null) {
          e = P(e) ? e : y.values(e);
          for (var a = 0, l = e.length; a < l; a++) {
            o = e[a];
            if (o < n) {
              n = o
            }
          }
        }
        else {
          t = w(t, i);
          y.each(e, function (e, i, o) {
            s = t(e, i, o);
            if (s < r || s === Infinity && n === Infinity) {
              n = e;
              r = s
            }
          })
        }
        return n
      };
      y.shuffle = function (e) {
        var t = P(e) ? e : y.values(e);
        var i = t.length;
        var n = Array(i);
        for (var r = 0, o; r < i; r++) {
          o = y.random(0, r);
          if (o !== r) n[r] = n[o];
          n[o] = t[r]
        }
        return n
      };
      y.sample = function (e, t, i) {
        if (t == null || i) {
          if (!P(e)) e = y.values(e);
          return e[y.random(e.length - 1)]
        }
        return y.shuffle(e).slice(0, Math.max(0, t))
      };
      y.sortBy = function (e, t, i) {
        t = w(t, i);
        return y.pluck(y.map(e, function (e, i, n) {
          return {
            value: e,
            index: i,
            criteria: t(e, i, n)
          }
        }).sort(function (e, t) {
          var i = e.criteria;
          var n = t.criteria;
          if (i !== n) {
            if (i > n || i === void 0) return 1;
            if (i < n || n === void 0) return -1
          }
          return e.index - t.index
        }), "value")
      };
      var A = function (e) {
        return function (t, i, n) {
          var r = {};
          i = w(i, n);
          y.each(t, function (n, o) {
            var s = i(n, o, t);
            e(r, n, s)
          });
          return r
        }
      };
      y.groupBy = A(function (e, t, i) {
        if (y.has(e, i)) e[i].push(t);
        else e[i] = [t]
      });
      y.indexBy = A(function (e, t, i) {
        e[i] = t
      });
      y.countBy = A(function (e, t, i) {
        if (y.has(e, i)) e[i]++;
        else e[i] = 1
      });
      y.toArray = function (e) {
        if (!e) return [];
        if (y.isArray(e)) return c.call(e);
        if (P(e)) return y.map(e, y.identity);
        return y.values(e)
      };
      y.size = function (e) {
        if (e == null) return 0;
        return P(e) ? e.length : y.keys(e).length
      };
      y.partition = function (e, t, i) {
        t = w(t, i);
        var n = [],
          r = [];
        y.each(e, function (e, i, o) {
          (t(e, i, o) ? n : r).push(e)
        });
        return [n, r]
      };
      y.first = y.head = y.take = function (e, t, i) {
        if (e == null) return void 0;
        if (t == null || i) return e[0];
        return y.initial(e, e.length - t)
      };
      y.initial = function (e, t, i) {
        return c.call(e, 0, Math.max(0, e.length - (t == null || i ? 1 : t)))
      };
      y.last = function (e, t, i) {
        if (e == null) return void 0;
        if (t == null || i) return e[e.length - 1];
        return y.rest(e, Math.max(0, e.length - t))
      };
      y.rest = y.tail = y.drop = function (e, t, i) {
        return c.call(e, t == null || i ? 1 : t)
      };
      y.compact = function (e) {
        return y.filter(e, y.identity)
      };
      var k = function (e, t, i, n) {
        var r = [],
          o = 0;
        for (var s = n || 0, a = C(e); s < a; s++) {
          var l = e[s];
          if (P(l) && (y.isArray(l) || y.isArguments(l))) {
            if (!t) l = k(l, t, i);
            var u = 0,
              c = l.length;
            r.length += c;
            while (u < c) {
              r[o++] = l[u++]
            }
          }
          else if (!i) {
            r[o++] = l
          }
        }
        return r
      };
      y.flatten = function (e, t) {
        return k(e, t, false)
      };
      y.without = function (e) {
        return y.difference(e, c.call(arguments, 1))
      };
      y.uniq = y.unique = function (e, t, i, n) {
        if (!y.isBoolean(t)) {
          n = i;
          i = t;
          t = false
        }
        if (i != null) i = w(i, n);
        var r = [];
        var o = [];
        for (var s = 0, a = C(e); s < a; s++) {
          var l = e[s],
            u = i ? i(l, s, e) : l;
          if (t) {
            if (!s || o !== u) r.push(l);
            o = u
          }
          else if (i) {
            if (!y.contains(o, u)) {
              o.push(u);
              r.push(l)
            }
          }
          else if (!y.contains(r, l)) {
            r.push(l)
          }
        }
        return r
      };
      y.union = function () {
        return y.uniq(k(arguments, true, true))
      };
      y.intersection = function (e) {
        var t = [];
        var i = arguments.length;
        for (var n = 0, r = C(e); n < r; n++) {
          var o = e[n];
          if (y.contains(t, o)) continue;
          for (var s = 1; s < i; s++) {
            if (!y.contains(arguments[s], o)) break
          }
          if (s === i) t.push(o)
        }
        return t
      };
      y.difference = function (e) {
        var t = k(arguments, true, true, 1);
        return y.filter(e, function (e) {
          return !y.contains(t, e)
        })
      };
      y.zip = function () {
        return y.unzip(arguments)
      };
      y.unzip = function (e) {
        var t = e && y.max(e, C).length || 0;
        var i = Array(t);
        for (var n = 0; n < t; n++) {
          i[n] = y.pluck(e, n)
        }
        return i
      };
      y.object = function (e, t) {
        var i = {};
        for (var n = 0, r = C(e); n < r; n++) {
          if (t) {
            i[e[n]] = t[n]
          }
          else {
            i[e[n][0]] = e[n][1]
          }
        }
        return i
      };

      function E(e) {
        return function (t, i, n) {
          i = w(i, n);
          var r = C(t);
          var o = e > 0 ? 0 : r - 1;
          for (; o >= 0 && o < r; o += e) {
            if (i(t[o], o, t)) return o
          }
          return -1
        }
      }
      y.findIndex = E(1);
      y.findLastIndex = E(-1);
      y.sortedIndex = function (e, t, i, n) {
        i = w(i, n, 1);
        var r = i(t);
        var o = 0,
          s = C(e);
        while (o < s) {
          var a = Math.floor((o + s) / 2);
          if (i(e[a]) < r) o = a + 1;
          else s = a
        }
        return o
      };

      function I(e, t, i) {
        return function (n, r, o) {
          var s = 0,
            a = C(n);
          if (typeof o == "number") {
            if (e > 0) {
              s = o >= 0 ? o : Math.max(o + a, s)
            }
            else {
              a = o >= 0 ? Math.min(o + 1, a) : o + a + 1
            }
          }
          else if (i && o && a) {
            o = i(n, r);
            return n[o] === r ? o : -1
          }
          if (r !== r) {
            o = t(c.call(n, s, a), y.isNaN);
            return o >= 0 ? o + s : -1
          }
          for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e) {
            if (n[o] === r) return o
          }
          return -1
        }
      }
      y.indexOf = I(1, y.findIndex, y.sortedIndex);
      y.lastIndexOf = I(-1, y.findLastIndex);
      y.range = function (e, t, i) {
        if (t == null) {
          t = e || 0;
          e = 0
        }
        i = i || 1;
        var n = Math.max(Math.ceil((t - e) / i), 0);
        var r = Array(n);
        for (var o = 0; o < n; o++, e += i) {
          r[o] = e
        }
        return r
      };
      var D = function (e, t, i, n, r) {
        if (!(n instanceof t)) return e.apply(i, r);
        var o = S(e.prototype);
        var s = e.apply(o, r);
        if (y.isObject(s)) return s;
        return o
      };
      y.bind = function (e, t) {
        if (m && e.bind === m) return m.apply(e, c.call(arguments, 1));
        if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var i = c.call(arguments, 2);
        var n = function () {
          return D(e, n, t, this, i.concat(c.call(arguments)))
        };
        return n
      };
      y.partial = function (e) {
        var t = c.call(arguments, 1);
        var i = function () {
          var n = 0,
            r = t.length;
          var o = Array(r);
          for (var s = 0; s < r; s++) {
            o[s] = t[s] === y ? arguments[n++] : t[s]
          }
          while (n < arguments.length) o.push(arguments[n++]);
          return D(e, i, this, this, o)
        };
        return i
      };
      y.bindAll = function (e) {
        var t, i = arguments.length,
          n;
        if (i <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < i; t++) {
          n = arguments[t];
          e[n] = y.bind(e[n], e)
        }
        return e
      };
      y.memoize = function (e, t) {
        var i = function (n) {
          var r = i.cache;
          var o = "" + (t ? t.apply(this, arguments) : n);
          if (!y.has(r, o)) r[o] = e.apply(this, arguments);
          return r[o]
        };
        i.cache = {};
        return i
      };
      y.delay = function (e, t) {
        var i = c.call(arguments, 2);
        return setTimeout(function () {
          return e.apply(null, i)
        }, t)
      };
      y.defer = y.partial(y.delay, y, 1);
      y.throttle = function (e, t, i) {
        var n, r, o;
        var s = null;
        var a = 0;
        if (!i) i = {};
        var l = function () {
          a = i.leading === false ? 0 : y.now();
          s = null;
          o = e.apply(n, r);
          if (!s) n = r = null
        };
        return function () {
          var u = y.now();
          if (!a && i.leading === false) a = u;
          var c = t - (u - a);
          n = this;
          r = arguments;
          if (c <= 0 || c > t) {
            if (s) {
              clearTimeout(s);
              s = null
            }
            a = u;
            o = e.apply(n, r);
            if (!s) n = r = null
          }
          else if (!s && i.trailing !== false) {
            s = setTimeout(l, c)
          }
          return o
        }
      };
      y.debounce = function (e, t, i) {
        var n, r, o, s, a;
        var l = function () {
          var u = y.now() - s;
          if (u < t && u >= 0) {
            n = setTimeout(l, t - u)
          }
          else {
            n = null;
            if (!i) {
              a = e.apply(o, r);
              if (!n) o = r = null
            }
          }
        };
        return function () {
          o = this;
          r = arguments;
          s = y.now();
          var u = i && !n;
          if (!n) n = setTimeout(l, t);
          if (u) {
            a = e.apply(o, r);
            o = r = null
          }
          return a
        }
      };
      y.wrap = function (e, t) {
        return y.partial(t, e)
      };
      y.negate = function (e) {
        return function () {
          return !e.apply(this, arguments)
        }
      };
      y.compose = function () {
        var e = arguments;
        var t = e.length - 1;
        return function () {
          var i = t;
          var n = e[t].apply(this, arguments);
          while (i--) n = e[i].call(this, n);
          return n
        }
      };
      y.after = function (e, t) {
        return function () {
          if (--e < 1) {
            return t.apply(this, arguments)
          }
        }
      };
      y.before = function (e, t) {
        var i;
        return function () {
          if (--e > 0) {
            i = t.apply(this, arguments)
          }
          if (e <= 1) t = null;
          return i
        }
      };
      y.once = y.partial(y.before, 2);
      var F = !{
        toString: null
      }.propertyIsEnumerable("toString");
      var H = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

      function R(e, t) {
        var i = H.length;
        var n = e.constructor;
        var r = y.isFunction(n) && n.prototype || a;
        var o = "constructor";
        if (y.has(e, o) && !y.contains(t, o)) t.push(o);
        while (i--) {
          o = H[i];
          if (o in e && e[o] !== r[o] && !y.contains(t, o)) {
            t.push(o)
          }
        }
      }
      y.keys = function (e) {
        if (!y.isObject(e)) return [];
        if (p) return p(e);
        var t = [];
        for (var i in e)
          if (y.has(e, i)) t.push(i);
        if (F) R(e, t);
        return t
      };
      y.allKeys = function (e) {
        if (!y.isObject(e)) return [];
        var t = [];
        for (var i in e) t.push(i);
        if (F) R(e, t);
        return t
      };
      y.values = function (e) {
        var t = y.keys(e);
        var i = t.length;
        var n = Array(i);
        for (var r = 0; r < i; r++) {
          n[r] = e[t[r]]
        }
        return n
      };
      y.mapObject = function (e, t, i) {
        t = w(t, i);
        var n = y.keys(e),
          r = n.length,
          o = {},
          s;
        for (var a = 0; a < r; a++) {
          s = n[a];
          o[s] = t(e[s], s, e)
        }
        return o
      };
      y.pairs = function (e) {
        var t = y.keys(e);
        var i = t.length;
        var n = Array(i);
        for (var r = 0; r < i; r++) {
          n[r] = [t[r], e[t[r]]]
        }
        return n
      };
      y.invert = function (e) {
        var t = {};
        var i = y.keys(e);
        for (var n = 0, r = i.length; n < r; n++) {
          t[e[i[n]]] = i[n]
        }
        return t
      };
      y.functions = y.methods = function (e) {
        var t = [];
        for (var i in e) {
          if (y.isFunction(e[i])) t.push(i)
        }
        return t.sort()
      };
      y.extend = T(y.allKeys);
      y.extendOwn = y.assign = T(y.keys);
      y.findKey = function (e, t, i) {
        t = w(t, i);
        var n = y.keys(e),
          r;
        for (var o = 0, s = n.length; o < s; o++) {
          r = n[o];
          if (t(e[r], r, e)) return r
        }
      };
      y.pick = function (e, t, i) {
        var n = {},
          r = e,
          o, s;
        if (r == null) return n;
        if (y.isFunction(t)) {
          s = y.allKeys(r);
          o = b(t, i)
        }
        else {
          s = k(arguments, false, false, 1);
          o = function (e, t, i) {
            return t in i
          };
          r = Object(r)
        }
        for (var a = 0, l = s.length; a < l; a++) {
          var u = s[a];
          var c = r[u];
          if (o(c, u, r)) n[u] = c
        }
        return n
      };
      y.omit = function (e, t, i) {
        if (y.isFunction(t)) {
          t = y.negate(t)
        }
        else {
          var n = y.map(k(arguments, false, false, 1), String);
          t = function (e, t) {
            return !y.contains(n, t)
          }
        }
        return y.pick(e, t, i)
      };
      y.defaults = T(y.allKeys, true);
      y.create = function (e, t) {
        var i = S(e);
        if (t) y.extendOwn(i, t);
        return i
      };
      y.clone = function (e) {
        if (!y.isObject(e)) return e;
        return y.isArray(e) ? e.slice() : y.extend({}, e)
      };
      y.tap = function (e, t) {
        t(e);
        return e
      };
      y.isMatch = function (e, t) {
        var i = y.keys(t),
          n = i.length;
        if (e == null) return !n;
        var r = Object(e);
        for (var o = 0; o < n; o++) {
          var s = i[o];
          if (t[s] !== r[s] || !(s in r)) return false
        }
        return true
      };
      var B = function (e, t, i, n) {
        if (e === t) return e !== 0 || 1 / e === 1 / t;
        if (e == null || t == null) return e === t;
        if (e instanceof y) e = e._wrapped;
        if (t instanceof y) t = t._wrapped;
        var r = d.call(e);
        if (r !== d.call(t)) return false;
        switch (r) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e === "" + t;
          case "[object Number]":
            if (+e !== +e) return +t !== +t;
            return +e === 0 ? 1 / +e === 1 / t : +e === +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e === +t
        }
        var o = r === "[object Array]";
        if (!o) {
          if (typeof e != "object" || typeof t != "object") return false;
          var s = e.constructor,
            a = t.constructor;
          if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && ("constructor" in e && "constructor" in t)) {
            return false
          }
        }
        i = i || [];
        n = n || [];
        var l = i.length;
        while (l--) {
          if (i[l] === e) return n[l] === t
        }
        i.push(e);
        n.push(t);
        if (o) {
          l = e.length;
          if (l !== t.length) return false;
          while (l--) {
            if (!B(e[l], t[l], i, n)) return false
          }
        }
        else {
          var u = y.keys(e),
            c;
          l = u.length;
          if (y.keys(t).length !== l) return false;
          while (l--) {
            c = u[l];
            if (!(y.has(t, c) && B(e[c], t[c], i, n))) return false
          }
        }
        i.pop();
        n.pop();
        return true
      };
      y.isEqual = function (e, t) {
        return B(e, t)
      };
      y.isEmpty = function (e) {
        if (e == null) return true;
        if (P(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e))) return e.length === 0;
        return y.keys(e).length === 0
      };
      y.isElement = function (e) {
        return !!(e && e.nodeType === 1)
      };
      y.isArray = h || function (e) {
        return d.call(e) === "[object Array]"
      };
      y.isObject = function (e) {
        var t = typeof e;
        return t === "function" || t === "object" && !!e
      };
      y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
        y["is" + e] = function (t) {
          return d.call(t) === "[object " + e + "]"
        }
      });
      if (!y.isArguments(arguments)) {
        y.isArguments = function (e) {
          return y.has(e, "callee")
        }
      }
      if (typeof /./ != "function" && typeof Int8Array != "object") {
        y.isFunction = function (e) {
          return typeof e == "function" || false
        }
      }
      y.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
      };
      y.isNaN = function (e) {
        return y.isNumber(e) && e !== +e
      };
      y.isBoolean = function (e) {
        return e === true || e === false || d.call(e) === "[object Boolean]"
      };
      y.isNull = function (e) {
        return e === null
      };
      y.isUndefined = function (e) {
        return e === void 0
      };
      y.has = function (e, t) {
        return e != null && f.call(e, t)
      };
      y.noConflict = function () {
        i._ = o;
        return this
      };
      y.identity = function (e) {
        return e
      };
      y.constant = function (e) {
        return function () {
          return e
        }
      };
      y.noop = function () {};
      y.property = _;
      y.propertyOf = function (e) {
        return e == null ? function () {} : function (t) {
          return e[t]
        }
      };
      y.matcher = y.matches = function (e) {
        e = y.extendOwn({}, e);
        return function (t) {
          return y.isMatch(t, e)
        }
      };
      y.times = function (e, t, i) {
        var n = Array(Math.max(0, e));
        t = b(t, i, 1);
        for (var r = 0; r < e; r++) n[r] = t(r);
        return n
      };
      y.random = function (e, t) {
        if (t == null) {
          t = e;
          e = 0
        }
        return e + Math.floor(Math.random() * (t - e + 1))
      };
      y.now = Date.now || function () {
        return (new Date).getTime()
      };
      var j = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      var G = y.invert(j);
      var O = function (e) {
        var t = function (t) {
          return e[t]
        };
        var i = "(?:" + y.keys(e).join("|") + ")";
        var n = RegExp(i);
        var r = RegExp(i, "g");
        return function (e) {
          e = e == null ? "" : "" + e;
          return n.test(e) ? e.replace(r, t) : e
        }
      };
      y.escape = O(j);
      y.unescape = O(G);
      y.result = function (e, t, i) {
        var n = e == null ? void 0 : e[t];
        if (n === void 0) {
          n = i
        }
        return y.isFunction(n) ? n.call(e) : n
      };
      var N = 0;
      y.uniqueId = function (e) {
        var t = ++N + "";
        return e ? e + t : t
      };
      y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var L = /(.)^/;
      var V = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var W = /\\|'|\r|\n|\u2028|\u2029/g;
      var z = function (e) {
        return "\\" + V[e]
      };
      y.template = function (e, t, i) {
        if (!t && i) t = i;
        t = y.defaults({}, t, y.templateSettings);
        var n = RegExp([(t.escape || L).source, (t.interpolate || L).source, (t.evaluate || L).source].join("|") + "|$", "g");
        var r = 0;
        var o = "__p+='";
        e.replace(n, function (t, i, n, s, a) {
          o += e.slice(r, a).replace(W, z);
          r = a + t.length;
          if (i) {
            o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"
          }
          else if (n) {
            o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"
          }
          else if (s) {
            o += "';\n" + s + "\n__p+='"
          }
          return t
        });
        o += "';\n";
        if (!t.variable) o = "with(obj||{}){\n" + o + "}\n";
        o = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
          var s = new Function(t.variable || "obj", "_", o)
        }
        catch (e) {
          e.source = o;
          throw e
        }
        var a = function (e) {
          return s.call(this, e, y)
        };
        var l = t.variable || "obj";
        a.source = "function(" + l + "){\n" + o + "}";
        return a
      };
      y.chain = function (e) {
        var t = y(e);
        t._chain = true;
        return t
      };
      var U = function (e, t) {
        return e._chain ? y(t).chain() : t
      };
      y.mixin = function (e) {
        y.each(y.functions(e), function (t) {
          var i = y[t] = e[t];
          y.prototype[t] = function () {
            var e = [this._wrapped];
            u.apply(e, arguments);
            return U(this, i.apply(y, e))
          }
        })
      };
      y.mixin(y);
      y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = s[e];
        y.prototype[e] = function () {
          var i = this._wrapped;
          t.apply(i, arguments);
          if ((e === "shift" || e === "splice") && i.length === 0) delete i[0];
          return U(this, i)
        }
      });
      y.each(["concat", "join", "slice"], function (e) {
        var t = s[e];
        y.prototype[e] = function () {
          return U(this, t.apply(this._wrapped, arguments))
        }
      });
      y.prototype.value = function () {
        return this._wrapped
      };
      y.prototype.valueOf = y.prototype.toJSON = y.prototype.value;
      y.prototype.toString = function () {
        return "" + this._wrapped
      };
      if (true) {
        !(n = [], r = function () {
          return y
        }.apply(t, n), r !== undefined && (e.exports = r))
      }
    }).call(this)
  },
  40: function (e, t, i) {
    window.jsonrpc = {};
    jsonrpc.CallStack = function (e, t, i, n) {
      this._counter = 0;
      this._enterFn = e;
      this._exitFn = i;
      this._enterScope = t;
      this._exitScope = n
    };
    jsonrpc.CallStack.prototype = {
      enter: function () {
        this._counter = this._counter < 0 ? 1 : this._counter + 1;
        if (this._counter === 1) {
          this._enterFn.apply(this._enterScope, arguments)
        }
      },
      exit: function (e) {
        this._counter -= 1;
        if (this._counter === 0) {
          this._exitFn.apply(this._exitScope, arguments)
        }
      }
    };
    jsonrpc.DelayedTask = function (e, t, i) {
      this._fn = e || function () {};
      this._scope = t || undefined;
      this._args = i || [];
      this._id = null
    };
    jsonrpc.Observable = function () {
      this._listeners = []
    };
    jsonrpc.Observable.prototype = {
      bind: function (e, t) {
        var i = {
          fn: e,
          scope: t || this
        };
        this._listeners.push(i);
        return i
      },
      unbind: function (e) {
        var t = this._listeners.indexOf(e);
        if (t !== -1) {
          this._listeners.splice(t, 1)
        }
      },
      trigger: function () {
        var e;
        for (e = 0; e < this._listeners.length; e += 1) {
          this._listeners[e].fn.apply(this._listeners[e].scope, arguments)
        }
      }
    };
    jsonrpc.DelayedTask.prototype = {
      delay: function (e, t, i, n) {
        var r = this;
        this._fn = t || this._fn;
        this._scope = i || this._scope;
        this._args = n || this._args;
        this.cancel();
        this._id = window.setInterval(function () {
          window.clearInterval(r._id);
          r._id = null;
          r._fn.apply(r._scope, r._args)
        }, e)
      },
      cancel: function () {
        if (this._id) {
          window.clearInterval(this._id);
          this._id = null
        }
      }
    };
    jsonrpc.JsonRpc = function (e) {
      var t = e.split("/");
      this._url = e;
      this._end = t[t.length - 2];
      this.loading = new jsonrpc.Observable;
      this.loaded = new jsonrpc.Observable;
      this.unhandledFailure = new jsonrpc.Observable;
      this._loadingState = new jsonrpc.CallStack(this.loading.trigger, this.loading, this.loaded.trigger, this.loaded);
      this._requests = [];
      this._batchingMilliseconds = 10;
      this._delayedTask = new jsonrpc.DelayedTask
    };
    jsonrpc.JsonRpc.prototype = {
      setBatchingMilliseconds: function (e) {
        this._batchingMilliseconds = e
      },
      call: function () {
        var e = this._getParams.apply(this, arguments);
        this._loadingState.enter();
        if (e.standalone) {
          this._sendRequests([e])
        }
        else {
          this._requests.push(e);
          if (this._batchingMilliseconds) {
            this._delayedTask.delay(this._batchingMilliseconds, this._sendRequests, this)
          }
          else {
            this._sendRequests()
          }
        }
      },
      _sendRequests: function (e) {
        var t = this,
          i = [],
          n = [],
          r, o = [],
          s = [],
          a = true,
          l;
        if (typeof e === "undefined") {
          e = t._requests;
          t._requests = []
        }
        for (r = 0; r < e.length; r += 1) {
          e[r].request.id = r;
          if (e[r].secure) {
            s.push(e[r].request.method);
            n.push(e[r].request)
          }
          else {
            o.push(e[r].request.method);
            i.push(e[r].request)
          }
        }
        if (i.length > 0) {
          if (i.length === 1) {
            i = i[0]
          }
          l = t._url + (a ? "?" + this._end + "[" + o.join() + "]" : "");
          t._doJsonPost(l, i, u)
        }
        if (n.length > 0) {
          if (n.length === 1) {
            n = n[0]
          }
          l = t._url + (a ? "?" + this._end + "[" + s.join() + "]" : "");
          t._doJsonpGet(l, n, u)
        }

        function u(i, n, o) {
          var s;
          if (i) {
            s = t._isArray(n) ? n : [n]
          }
          else {
            s = [];
            for (r = 0; r < e.length; r += 1) {
              s[r] = {
                id: r,
                error: {
                  message: n
                }
              }
            }
          }
          t._handleResponses(e, s, o)
        }
      },
      _handleResponses: function (e, t, i) {
        var n, r, o;
        for (n = 0; n < t.length; n += 1) {
          r = t[n];
          o = e[r.id];
          this._handleResponse(o, r, i)
        }
      },
      _handleResponse: function (e, t, i) {
        var n = !t.error,
          r = n ? t.result : t.error.message;
        this._loadingState.exit();
        if (n) {
          e.success.call(e.scope, r, i)
        }
        else {
          e.failure.call(e.scope, r, i)
        }
        e.callback.call(e.scope, n, r, i)
      },
      _getParams: function () {
        var e = this,
          t = Array.prototype.slice.call(arguments),
          i = {
            request: {
              jsonrpc: "2.0",
              method: t.shift()
            }
          };
        i.request.params = [];
        while (t.length > 1 && !this._isFunction(t[0])) {
          i.request.params.push(t.shift())
        }
        if (this._isFunction(t[0])) {
          i.success = t[0];
          i.scope = t[1]
        }
        else {
          i.success = t[0].success;
          i.failure = t[0].failure;
          i.callback = t[0].callback;
          i.scope = t[0].scope;
          i.secure = !!t[0].secure;
          i.standalone = !!t[0].standalone
        }
        i.success = i.success || function () {
          return
        };
        i.failure = i.failure || function () {
          e.unhandledFailure.trigger.apply(e.unhandledFailure, arguments)
        };
        i.callback = i.callback || function () {
          return
        };
        return i
      },
      _isArray: function (e) {
        return Object.prototype.toString.apply(e) === "[object Array]"
      },
      _isFunction: function (e) {
        return Object.prototype.toString.apply(e) === "[object Function]"
      },
      _beforeSend: function (e) {},
      _doJsonPost: function (e, t, n) {
        var r = Weebly.jQuery || i(1),
          o = r.ajax({
            type: "POST",
            url: e,
            cache: false,
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            beforeSend: this._beforeSend,
            data: JSON.stringify(t),
            headers: {
              "x-wtok": Weebly.RequestToken
            }
          }).done(function (e) {
            var t = o.getResponseHeader("Content-Type");
            if (o.status !== 200) {
              n(false, 'Expected HTTP response "200 OK", found "' + o.status + " " + o.statusText + '"', o)
            }
            else if (t.indexOf("application/json") !== 0) {
              n(false, 'Expected JSON encoded response, found "' + t + '"', o)
            }
            else {
              n(true, e, o)
            }
          }).fail(function () {
            n(false, "HTTP request failed", o)
          })
      },
      _doJsonpGet: function (e, t, n) {
        e = "https://" + _W.securePrefix + e;
        var r = Weebly.jQuery || i(1),
          o = r.ajax({
            type: "GET",
            url: e,
            cache: false,
            jsonpCallback: "WJsonp",
            dataType: "jsonp",
            beforeSend: this._beforeSend,
            data: t,
            headers: {
              "x-wtok": Weebly.RequestToken
            }
          }).done(function (e) {
            n(true, e, o)
          }).fail(function () {
            n(false, "HTTP request failed", o)
          })
      }
    };
    e.exports = jsonrpc
  },
  42: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(3), i(2), i(5), i(40)], r = function (e, t, i, n, r) {
      var o = n.sync;
      t.extend(n, {
        sync: function (e, i, r) {
          var s;
          if (!i.rpc) {
            return o.apply(n, arguments)
          }
          switch (e) {
            case "delete":
              e = "destroy";
            case "create":
            case "update":
            case "patch":
              s = r.attrs || i.toJSON(r);
              break;
            case "read":
              if (i.rpc && e == "read") {
                r = t.extend({}, t.omit(r, "data"), r.data);
                s = t.extend({
                  filter: []
                }, r);
                var a = i.keydefs || i.model.prototype.keydefs;
                t.each(a.PRIMARY, function (e) {
                  if (i.get(e) != undefined && !t.findWhere(s.filter, {
                      property: e
                    })) {
                    s.filter.push({
                      property: e,
                      value: i.get(e)
                    })
                  }
                })
              }
              break;
            default:
              console.warn(e + " params not defined for this model ", i);
              s = r.attrs || i.toJSON()
          }
          if (i.rpc[e]) {
            var l = i.rpc[e](s);
            l.done(function (e) {
              return e.success === false ? r.error(e) : r.success(e)
            });
            l.fail(function (e) {
              return r.error(e)
            });
            return l
          }
          console.warn(e + " not defined for this model ", i)
        }
      });
      i.ns = function (e, t) {
        var t = t || window;
        var i = e.split(".");
        i.forEach(function (e) {
          if (typeof e !== "string") {
            t = e
          }
          else {
            if (!t[e]) {
              t[e] = {}
            }
            t = t[e]
          }
        });
        return t
      };
      i.setup_rpc = function (n) {
        var o = i.ns(n.namespace);
        var s = new r.JsonRpc(n.url);
        var a = function (i, n, r, o, a) {
          return function () {
            var o = e.Deferred();
            var l = t.toArray(arguments);
            if (l.length < n) {
              console.error("Wrong number of args for " + i);
              return
            }
            r = !!r;
            l.unshift(i);
            l.push({
              success: o.resolve,
              failure: o.reject,
              scope: o,
              secure: r,
              standalone: a
            });
            s.call.apply(s, l);
            return o
          }
        };
        t.each(n.actions, function (e, n) {
          var r = i.ns(n, o);
          t.each(e, function (e) {
            r[e.name] = a(n + "::" + e.name, e.len, e.secure, e.multiple, e.standalone)
          })
        })
      };
      i.setup_model_rpc = function (e) {
        var n = i.ns(e.rpc_namespace);
        var r = i.ns(e.model_namespace);
        var o = i.ns(e.collection_namespace);
        var s = i.ns(e.bootstrap_namespace);
        t.extend(r, e.models);
        t.extend(o, e.collections);
        t.extend(s, e.bootstrap);
        t.each(o, function (e, t) {
          if (n[t]) {
            o[t].rpc = n[t]
          }
        });
        t.each(r, function (e, i) {
          if (n[i]) {
            r[i].rpc = n[i];
            var s = r[i].relations;
            t.each(s, function (e) {
              if (o[e.relatedModel]) {
                e.collectionType = e.relatedModel + "Collection"
              }
            })
          }
        })
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  43: function (e, t) {
    (function (t) {
      var i, n = "2.8.1",
        r = typeof global !== "undefined" ? global : this,
        o, s = Math.round,
        a, l = 0,
        u = 1,
        c = 2,
        d = 3,
        f = 4,
        h = 5,
        p = 6,
        m = {},
        v = [],
        g = typeof e !== "undefined" && e.exports,
        y = /^\/?Date\((\-?\d+)/i,
        b = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        w = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
        T = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        S = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
        _ = /\d\d?/,
        M = /\d{1,3}/,
        C = /\d{1,4}/,
        P = /[+\-]?\d{1,6}/,
        x = /\d+/,
        A = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        k = /Z|[\+\-]\d\d:?\d\d/gi,
        E = /T/i,
        I = /[\+\-]?\d+(\.\d{1,3})?/,
        D = /\d{1,2}/,
        F = /\d/,
        H = /\d\d/,
        R = /\d{3}/,
        B = /\d{4}/,
        j = /[+-]?\d{6}/,
        G = /[+-]?\d+/,
        O = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        N = "YYYY-MM-DDTHH:mm:ssZ",
        L = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
          ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
          ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d{2}/],
          ["YYYY-DDD", /\d{4}-\d{3}/]
        ],
        V = [
          ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
          ["HH:mm", /(T| )\d\d:\d\d/],
          ["HH", /(T| )\d\d/]
        ],
        W = /([\+\-]|\d\d)/gi,
        z = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
        U = {
          Milliseconds: 1,
          Seconds: 1e3,
          Minutes: 6e4,
          Hours: 36e5,
          Days: 864e5,
          Months: 2592e6,
          Years: 31536e6
        },
        q = {
          ms: "millisecond",
          s: "second",
          m: "minute",
          h: "hour",
          d: "day",
          D: "date",
          w: "week",
          W: "isoWeek",
          M: "month",
          Q: "quarter",
          y: "year",
          DDD: "dayOfYear",
          e: "weekday",
          E: "isoWeekday",
          gg: "weekYear",
          GG: "isoWeekYear"
        },
        Y = {
          dayofyear: "dayOfYear",
          isoweekday: "isoWeekday",
          isoweek: "isoWeek",
          weekyear: "weekYear",
          isoweekyear: "isoWeekYear"
        },
        $ = {},
        X = {
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          M: 11
        },
        K = "DDD w W M D d".split(" "),
        Q = "M D H h m s w W".split(" "),
        J = {
          M: function () {
            return this.month() + 1
          },
          MMM: function (e) {
            return this.localeData().monthsShort(this, e)
          },
          MMMM: function (e) {
            return this.localeData().months(this, e)
          },
          D: function () {
            return this.date()
          },
          DDD: function () {
            return this.dayOfYear()
          },
          d: function () {
            return this.day()
          },
          dd: function (e) {
            return this.localeData().weekdaysMin(this, e)
          },
          ddd: function (e) {
            return this.localeData().weekdaysShort(this, e)
          },
          dddd: function (e) {
            return this.localeData().weekdays(this, e)
          },
          w: function () {
            return this.week()
          },
          W: function () {
            return this.isoWeek()
          },
          YY: function () {
            return pe(this.year() % 100, 2)
          },
          YYYY: function () {
            return pe(this.year(), 4)
          },
          YYYYY: function () {
            return pe(this.year(), 5)
          },
          YYYYYY: function () {
            var e = this.year(),
              t = e >= 0 ? "+" : "-";
            return t + pe(Math.abs(e), 6)
          },
          gg: function () {
            return pe(this.weekYear() % 100, 2)
          },
          gggg: function () {
            return pe(this.weekYear(), 4)
          },
          ggggg: function () {
            return pe(this.weekYear(), 5)
          },
          GG: function () {
            return pe(this.isoWeekYear() % 100, 2)
          },
          GGGG: function () {
            return pe(this.isoWeekYear(), 4)
          },
          GGGGG: function () {
            return pe(this.isoWeekYear(), 5)
          },
          e: function () {
            return this.weekday()
          },
          E: function () {
            return this.isoWeekday()
          },
          a: function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), true)
          },
          A: function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), false)
          },
          H: function () {
            return this.hours()
          },
          h: function () {
            return this.hours() % 12 || 12
          },
          m: function () {
            return this.minutes()
          },
          s: function () {
            return this.seconds()
          },
          S: function () {
            return Ce(this.milliseconds() / 100)
          },
          SS: function () {
            return pe(Ce(this.milliseconds() / 10), 2)
          },
          SSS: function () {
            return pe(this.milliseconds(), 3)
          },
          SSSS: function () {
            return pe(this.milliseconds(), 3)
          },
          Z: function () {
            var e = -this.zone(),
              t = "+";
            if (e < 0) {
              e = -e;
              t = "-"
            }
            return t + pe(Ce(e / 60), 2) + ":" + pe(Ce(e) % 60, 2)
          },
          ZZ: function () {
            var e = -this.zone(),
              t = "+";
            if (e < 0) {
              e = -e;
              t = "-"
            }
            return t + pe(Ce(e / 60), 2) + pe(Ce(e) % 60, 2)
          },
          z: function () {
            return this.zoneAbbr()
          },
          zz: function () {
            return this.zoneName()
          },
          X: function () {
            return this.unix()
          },
          Q: function () {
            return this.quarter()
          }
        },
        Z = {},
        ee = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];

      function te(e, t, i) {
        switch (arguments.length) {
          case 2:
            return e != null ? e : t;
          case 3:
            return e != null ? e : t != null ? t : i;
          default:
            throw new Error("Implement me")
        }
      }

      function ie() {
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false
        }
      }

      function ne(e) {
        if (i.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
          console.warn("Deprecation warning: " + e)
        }
      }

      function re(e, t) {
        var i = true;
        return de(function () {
          if (i) {
            ne(e);
            i = false
          }
          return t.apply(this, arguments)
        }, t)
      }

      function oe(e, t) {
        if (!Z[e]) {
          ne(t);
          Z[e] = true
        }
      }

      function se(e, t) {
        return function (i) {
          return pe(e.call(this, i), t)
        }
      }

      function ae(e, t) {
        return function (i) {
          return this.localeData().ordinal(e.call(this, i), t)
        }
      }
      while (K.length) {
        a = K.pop();
        J[a + "o"] = ae(J[a], a)
      }
      while (Q.length) {
        a = Q.pop();
        J[a + a] = se(J[a], 2)
      }
      J.DDDD = se(J.DDD, 3);

      function le() {}

      function ue(e, t) {
        if (t !== false) {
          Ee(e)
        }
        fe(this, e);
        this._d = new Date(+e._d)
      }

      function ce(e) {
        var t = _e(e),
          n = t.year || 0,
          r = t.quarter || 0,
          o = t.month || 0,
          s = t.week || 0,
          a = t.day || 0,
          l = t.hour || 0,
          u = t.minute || 0,
          c = t.second || 0,
          d = t.millisecond || 0;
        this._milliseconds = +d + c * 1e3 + u * 6e4 + l * 36e5;
        this._days = +a + s * 7;
        this._months = +o + r * 3 + n * 12;
        this._data = {};
        this._locale = i.localeData();
        this._bubble()
      }

      function de(e, t) {
        for (var i in t) {
          if (t.hasOwnProperty(i)) {
            e[i] = t[i]
          }
        }
        if (t.hasOwnProperty("toString")) {
          e.toString = t.toString
        }
        if (t.hasOwnProperty("valueOf")) {
          e.valueOf = t.valueOf
        }
        return e
      }

      function fe(e, t) {
        var i, n, r;
        if (typeof t._isAMomentObject !== "undefined") {
          e._isAMomentObject = t._isAMomentObject
        }
        if (typeof t._i !== "undefined") {
          e._i = t._i
        }
        if (typeof t._f !== "undefined") {
          e._f = t._f
        }
        if (typeof t._l !== "undefined") {
          e._l = t._l
        }
        if (typeof t._strict !== "undefined") {
          e._strict = t._strict
        }
        if (typeof t._tzm !== "undefined") {
          e._tzm = t._tzm
        }
        if (typeof t._isUTC !== "undefined") {
          e._isUTC = t._isUTC
        }
        if (typeof t._offset !== "undefined") {
          e._offset = t._offset
        }
        if (typeof t._pf !== "undefined") {
          e._pf = t._pf
        }
        if (typeof t._locale !== "undefined") {
          e._locale = t._locale
        }
        if (v.length > 0) {
          for (i in v) {
            n = v[i];
            r = t[n];
            if (typeof r !== "undefined") {
              e[n] = r
            }
          }
        }
        return e
      }

      function he(e) {
        if (e < 0) {
          return Math.ceil(e)
        }
        else {
          return Math.floor(e)
        }
      }

      function pe(e, t, i) {
        var n = "" + Math.abs(e),
          r = e >= 0;
        while (n.length < t) {
          n = "0" + n
        }
        return (r ? i ? "+" : "" : "-") + n
      }

      function me(e, t) {
        var i = {
          milliseconds: 0,
          months: 0
        };
        i.months = t.month() - e.month() + (t.year() - e.year()) * 12;
        if (e.clone().add(i.months, "M").isAfter(t)) {
          --i.months
        }
        i.milliseconds = +t - +e.clone().add(i.months, "M");
        return i
      }

      function ve(e, t) {
        var i;
        t = Re(t, e);
        if (e.isBefore(t)) {
          i = me(e, t)
        }
        else {
          i = me(t, e);
          i.milliseconds = -i.milliseconds;
          i.months = -i.months
        }
        return i
      }

      function ge(e, t) {
        return function (n, r) {
          var o, s;
          if (r !== null && !isNaN(+r)) {
            oe(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period).");
            s = n;
            n = r;
            r = s
          }
          n = typeof n === "string" ? +n : n;
          o = i.duration(n, r);
          ye(this, o, e);
          return this
        }
      }

      function ye(e, t, n, r) {
        var o = t._milliseconds,
          s = t._days,
          a = t._months;
        r = r == null ? true : r;
        if (o) {
          e._d.setTime(+e._d + o * n)
        }
        if (s) {
          dt(e, "Date", ct(e, "Date") + s * n)
        }
        if (a) {
          ut(e, ct(e, "Month") + a * n)
        }
        if (r) {
          i.updateOffset(e, s || a)
        }
      }

      function be(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
      }

      function we(e) {
        return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
      }

      function Te(e, t, i) {
        var n = Math.min(e.length, t.length),
          r = Math.abs(e.length - t.length),
          o = 0,
          s;
        for (s = 0; s < n; s++) {
          if (i && e[s] !== t[s] || !i && Ce(e[s]) !== Ce(t[s])) {
            o++
          }
        }
        return o + r
      }

      function Se(e) {
        if (e) {
          var t = e.toLowerCase().replace(/(.)s$/, "$1");
          e = q[e] || Y[t] || t
        }
        return e
      }

      function _e(e) {
        var t = {},
          i, n;
        for (n in e) {
          if (e.hasOwnProperty(n)) {
            i = Se(n);
            if (i) {
              t[i] = e[n]
            }
          }
        }
        return t
      }

      function Me(e) {
        var n, r;
        if (e.indexOf("week") === 0) {
          n = 7;
          r = "day"
        }
        else if (e.indexOf("month") === 0) {
          n = 12;
          r = "month"
        }
        else {
          return
        }
        i[e] = function (o, s) {
          var a, l, u = i._locale[e],
            c = [];
          if (typeof o === "number") {
            s = o;
            o = t
          }
          l = function (e) {
            var t = i().utc().set(r, e);
            return u.call(i._locale, t, o || "")
          };
          if (s != null) {
            return l(s)
          }
          else {
            for (a = 0; a < n; a++) {
              c.push(l(a))
            }
            return c
          }
        }
      }

      function Ce(e) {
        var t = +e,
          i = 0;
        if (t !== 0 && isFinite(t)) {
          if (t >= 0) {
            i = Math.floor(t)
          }
          else {
            i = Math.ceil(t)
          }
        }
        return i
      }

      function Pe(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
      }

      function xe(e, t, n) {
        return ot(i([e, 11, 31 + t - n]), t, n).week
      }

      function Ae(e) {
        return ke(e) ? 366 : 365
      }

      function ke(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
      }

      function Ee(e) {
        var t;
        if (e._a && e._pf.overflow === -2) {
          t = e._a[u] < 0 || e._a[u] > 11 ? u : e._a[c] < 1 || e._a[c] > Pe(e._a[l], e._a[u]) ? c : e._a[d] < 0 || e._a[d] > 23 ? d : e._a[f] < 0 || e._a[f] > 59 ? f : e._a[h] < 0 || e._a[h] > 59 ? h : e._a[p] < 0 || e._a[p] > 999 ? p : -1;
          if (e._pf._overflowDayOfYear && (t < l || t > c)) {
            t = c
          }
          e._pf.overflow = t
        }
      }

      function Ie(e) {
        if (e._isValid == null) {
          e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated;
          if (e._strict) {
            e._isValid = e._isValid && e._pf.charsLeftOver === 0 && e._pf.unusedTokens.length === 0
          }
        }
        return e._isValid
      }

      function De(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
      }

      function Fe(e) {
        var t = 0,
          i, n, r, o;
        while (t < e.length) {
          o = De(e[t]).split("-");
          i = o.length;
          n = De(e[t + 1]);
          n = n ? n.split("-") : null;
          while (i > 0) {
            r = He(o.slice(0, i).join("-"));
            if (r) {
              return r
            }
            if (n && n.length >= i && Te(o, n, true) >= i - 1) {
              break
            }
            i--
          }
          t++
        }
        return null
      }

      function He(e) {
        var t = null;
        if (!m[e] && g) {
          try {
            t = i.locale();
            require("./locale/" + e);
            i.locale(t)
          }
          catch (e) {}
        }
        return m[e]
      }

      function Re(e, t) {
        return t._isUTC ? i(e).zone(t._offset || 0) : i(e).local()
      }
      de(le.prototype, {
        set: function (e) {
          var t, i;
          for (i in e) {
            t = e[i];
            if (typeof t === "function") {
              this[i] = t
            }
            else {
              this["_" + i] = t
            }
          }
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (e) {
          return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (e) {
          return this._monthsShort[e.month()]
        },
        monthsParse: function (e) {
          var t, n, r;
          if (!this._monthsParse) {
            this._monthsParse = []
          }
          for (t = 0; t < 12; t++) {
            if (!this._monthsParse[t]) {
              n = i.utc([2e3, t]);
              r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, "");
              this._monthsParse[t] = new RegExp(r.replace(".", ""), "i")
            }
            if (this._monthsParse[t].test(e)) {
              return t
            }
          }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (e) {
          return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (e) {
          return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (e) {
          return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function (e) {
          var t, n, r;
          if (!this._weekdaysParse) {
            this._weekdaysParse = []
          }
          for (t = 0; t < 7; t++) {
            if (!this._weekdaysParse[t]) {
              n = i([2e3, 1]).day(t);
              r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, "");
              this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")
            }
            if (this._weekdaysParse[t].test(e)) {
              return t
            }
          }
        },
        _longDateFormat: {
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY LT",
          LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function (e) {
          var t = this._longDateFormat[e];
          if (!t && this._longDateFormat[e.toUpperCase()]) {
            t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) {
              return e.slice(1)
            });
            this._longDateFormat[e] = t
          }
          return t
        },
        isPM: function (e) {
          return (e + "").toLowerCase().charAt(0) === "p"
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function (e, t, i) {
          if (e > 11) {
            return i ? "pm" : "PM"
          }
          else {
            return i ? "am" : "AM"
          }
        },
        _calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        calendar: function (e, t) {
          var i = this._calendar[e];
          return typeof i === "function" ? i.apply(t) : i
        },
        _relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        relativeTime: function (e, t, i, n) {
          var r = this._relativeTime[i];
          return typeof r === "function" ? r(e, t, i, n) : r.replace(/%d/i, e)
        },
        pastFuture: function (e, t) {
          var i = this._relativeTime[e > 0 ? "future" : "past"];
          return typeof i === "function" ? i(t) : i.replace(/%s/i, t)
        },
        ordinal: function (e) {
          return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function (e) {
          return e
        },
        postformat: function (e) {
          return e
        },
        week: function (e) {
          return ot(e, this._week.dow, this._week.doy).week
        },
        _week: {
          dow: 0,
          doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function () {
          return this._invalidDate
        }
      });

      function Be(e) {
        if (e.match(/\[[\s\S]/)) {
          return e.replace(/^\[|\]$/g, "")
        }
        return e.replace(/\\/g, "")
      }

      function je(e) {
        var t = e.match(T),
          i, n;
        for (i = 0, n = t.length; i < n; i++) {
          if (J[t[i]]) {
            t[i] = J[t[i]]
          }
          else {
            t[i] = Be(t[i])
          }
        }
        return function (r) {
          var o = "";
          for (i = 0; i < n; i++) {
            o += t[i] instanceof Function ? t[i].call(r, e) : t[i]
          }
          return o
        }
      }

      function Ge(e, t) {
        if (!e.isValid()) {
          return e.localeData().invalidDate()
        }
        t = Oe(t, e.localeData());
        if (!$[t]) {
          $[t] = je(t)
        }
        return $[t](e)
      }

      function Oe(e, t) {
        var i = 5;

        function n(e) {
          return t.longDateFormat(e) || e
        }
        S.lastIndex = 0;
        while (i >= 0 && S.test(e)) {
          e = e.replace(S, n);
          S.lastIndex = 0;
          i -= 1
        }
        return e
      }

      function Ne(e, t) {
        var i, n = t._strict;
        switch (e) {
          case "Q":
            return F;
          case "DDDD":
            return R;
          case "YYYY":
          case "GGGG":
          case "gggg":
            return n ? B : C;
          case "Y":
          case "G":
          case "g":
            return G;
          case "YYYYYY":
          case "YYYYY":
          case "GGGGG":
          case "ggggg":
            return n ? j : P;
          case "S":
            if (n) {
              return F
            }
          case "SS":
            if (n) {
              return H
            }
          case "SSS":
            if (n) {
              return R
            }
          case "DDD":
            return M;
          case "MMM":
          case "MMMM":
          case "dd":
          case "ddd":
          case "dddd":
            return A;
          case "a":
          case "A":
            return t._locale._meridiemParse;
          case "X":
            return I;
          case "Z":
          case "ZZ":
            return k;
          case "T":
            return E;
          case "SSSS":
            return x;
          case "MM":
          case "DD":
          case "YY":
          case "GG":
          case "gg":
          case "HH":
          case "hh":
          case "mm":
          case "ss":
          case "ww":
          case "WW":
            return n ? H : _;
          case "M":
          case "D":
          case "d":
          case "H":
          case "h":
          case "m":
          case "s":
          case "w":
          case "W":
          case "e":
          case "E":
            return _;
          case "Do":
            return D;
          default:
            i = new RegExp(Xe($e(e.replace("\\", "")), "i"));
            return i
        }
      }

      function Le(e) {
        e = e || "";
        var t = e.match(k) || [],
          i = t[t.length - 1] || [],
          n = (i + "").match(W) || ["-", 0, 0],
          r = +(n[1] * 60) + Ce(n[2]);
        return n[0] === "+" ? -r : r
      }

      function Ve(e, t, n) {
        var r, o = n._a;
        switch (e) {
          case "Q":
            if (t != null) {
              o[u] = (Ce(t) - 1) * 3
            }
            break;
          case "M":
          case "MM":
            if (t != null) {
              o[u] = Ce(t) - 1
            }
            break;
          case "MMM":
          case "MMMM":
            r = n._locale.monthsParse(t);
            if (r != null) {
              o[u] = r
            }
            else {
              n._pf.invalidMonth = t
            }
            break;
          case "D":
          case "DD":
            if (t != null) {
              o[c] = Ce(t)
            }
            break;
          case "Do":
            if (t != null) {
              o[c] = Ce(parseInt(t, 10))
            }
            break;
          case "DDD":
          case "DDDD":
            if (t != null) {
              n._dayOfYear = Ce(t)
            }
            break;
          case "YY":
            o[l] = i.parseTwoDigitYear(t);
            break;
          case "YYYY":
          case "YYYYY":
          case "YYYYYY":
            o[l] = Ce(t);
            break;
          case "a":
          case "A":
            n._isPm = n._locale.isPM(t);
            break;
          case "H":
          case "HH":
          case "h":
          case "hh":
            o[d] = Ce(t);
            break;
          case "m":
          case "mm":
            o[f] = Ce(t);
            break;
          case "s":
          case "ss":
            o[h] = Ce(t);
            break;
          case "S":
          case "SS":
          case "SSS":
          case "SSSS":
            o[p] = Ce(("0." + t) * 1e3);
            break;
          case "X":
            n._d = new Date(parseFloat(t) * 1e3);
            break;
          case "Z":
          case "ZZ":
            n._useUTC = true;
            n._tzm = Le(t);
            break;
          case "dd":
          case "ddd":
          case "dddd":
            r = n._locale.weekdaysParse(t);
            if (r != null) {
              n._w = n._w || {};
              n._w["d"] = r
            }
            else {
              n._pf.invalidWeekday = t
            }
            break;
          case "w":
          case "ww":
          case "W":
          case "WW":
          case "d":
          case "e":
          case "E":
            e = e.substr(0, 1);
          case "gggg":
          case "GGGG":
          case "GGGGG":
            e = e.substr(0, 2);
            if (t) {
              n._w = n._w || {};
              n._w[e] = Ce(t)
            }
            break;
          case "gg":
          case "GG":
            n._w = n._w || {};
            n._w[e] = i.parseTwoDigitYear(t)
        }
      }

      function We(e) {
        var t, n, r, o, s, a, u;
        t = e._w;
        if (t.GG != null || t.W != null || t.E != null) {
          s = 1;
          a = 4;
          n = te(t.GG, e._a[l], ot(i(), 1, 4).year);
          r = te(t.W, 1);
          o = te(t.E, 1)
        }
        else {
          s = e._locale._week.dow;
          a = e._locale._week.doy;
          n = te(t.gg, e._a[l], ot(i(), s, a).year);
          r = te(t.w, 1);
          if (t.d != null) {
            o = t.d;
            if (o < s) {
              ++r
            }
          }
          else if (t.e != null) {
            o = t.e + s
          }
          else {
            o = s
          }
        }
        u = st(n, r, o, a, s);
        e._a[l] = u.year;
        e._dayOfYear = u.dayOfYear
      }

      function ze(e) {
        var t, i, n = [],
          r, o;
        if (e._d) {
          return
        }
        r = qe(e);
        if (e._w && e._a[c] == null && e._a[u] == null) {
          We(e)
        }
        if (e._dayOfYear) {
          o = te(e._a[l], r[l]);
          if (e._dayOfYear > Ae(o)) {
            e._pf._overflowDayOfYear = true
          }
          i = tt(o, 0, e._dayOfYear);
          e._a[u] = i.getUTCMonth();
          e._a[c] = i.getUTCDate()
        }
        for (t = 0; t < 3 && e._a[t] == null; ++t) {
          e._a[t] = n[t] = r[t]
        }
        for (; t < 7; t++) {
          e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t]
        }
        e._d = (e._useUTC ? tt : et).apply(null, n);
        if (e._tzm != null) {
          e._d.setUTCMinutes(e._d.getUTCMinutes() + e._tzm)
        }
      }

      function Ue(e) {
        var t;
        if (e._d) {
          return
        }
        t = _e(e._i);
        e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond];
        ze(e)
      }

      function qe(e) {
        var t = new Date;
        if (e._useUTC) {
          return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
        }
        else {
          return [t.getFullYear(), t.getMonth(), t.getDate()]
        }
      }

      function Ye(e) {
        if (e._f === i.ISO_8601) {
          Qe(e);
          return
        }
        e._a = [];
        e._pf.empty = true;
        var t = "" + e._i,
          n, r, o, s, a, l = t.length,
          u = 0;
        o = Oe(e._f, e._locale).match(T) || [];
        for (n = 0; n < o.length; n++) {
          s = o[n];
          r = (t.match(Ne(s, e)) || [])[0];
          if (r) {
            a = t.substr(0, t.indexOf(r));
            if (a.length > 0) {
              e._pf.unusedInput.push(a)
            }
            t = t.slice(t.indexOf(r) + r.length);
            u += r.length
          }
          if (J[s]) {
            if (r) {
              e._pf.empty = false
            }
            else {
              e._pf.unusedTokens.push(s)
            }
            Ve(s, r, e)
          }
          else if (e._strict && !r) {
            e._pf.unusedTokens.push(s)
          }
        }
        e._pf.charsLeftOver = l - u;
        if (t.length > 0) {
          e._pf.unusedInput.push(t)
        }
        if (e._isPm && e._a[d] < 12) {
          e._a[d] += 12
        }
        if (e._isPm === false && e._a[d] === 12) {
          e._a[d] = 0
        }
        ze(e);
        Ee(e)
      }

      function $e(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, i, n, r) {
          return t || i || n || r
        })
      }

      function Xe(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      }

      function Ke(e) {
        var t, i, n, r, o;
        if (e._f.length === 0) {
          e._pf.invalidFormat = true;
          e._d = new Date(NaN);
          return
        }
        for (r = 0; r < e._f.length; r++) {
          o = 0;
          t = fe({}, e);
          t._pf = ie();
          t._f = e._f[r];
          Ye(t);
          if (!Ie(t)) {
            continue
          }
          o += t._pf.charsLeftOver;
          o += t._pf.unusedTokens.length * 10;
          t._pf.score = o;
          if (n == null || o < n) {
            n = o;
            i = t
          }
        }
        de(e, i || t)
      }

      function Qe(e) {
        var t, i, n = e._i,
          r = O.exec(n);
        if (r) {
          e._pf.iso = true;
          for (t = 0, i = L.length; t < i; t++) {
            if (L[t][1].exec(n)) {
              e._f = L[t][0] + (r[6] || " ");
              break
            }
          }
          for (t = 0, i = V.length; t < i; t++) {
            if (V[t][1].exec(n)) {
              e._f += V[t][0];
              break
            }
          }
          if (n.match(k)) {
            e._f += "Z"
          }
          Ye(e)
        }
        else {
          e._isValid = false
        }
      }

      function Je(e) {
        Qe(e);
        if (e._isValid === false) {
          delete e._isValid;
          i.createFromInputFallback(e)
        }
      }

      function Ze(e) {
        var n = e._i,
          r;
        if (n === t) {
          e._d = new Date
        }
        else if (we(n)) {
          e._d = new Date(+n)
        }
        else if ((r = y.exec(n)) !== null) {
          e._d = new Date(+r[1])
        }
        else if (typeof n === "string") {
          Je(e)
        }
        else if (be(n)) {
          e._a = n.slice(0);
          ze(e)
        }
        else if (typeof n === "object") {
          Ue(e)
        }
        else if (typeof n === "number") {
          e._d = new Date(n)
        }
        else {
          i.createFromInputFallback(e)
        }
      }

      function et(e, t, i, n, r, o, s) {
        var a = new Date(e, t, i, n, r, o, s);
        if (e < 1970) {
          a.setFullYear(e)
        }
        return a
      }

      function tt(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        if (e < 1970) {
          t.setUTCFullYear(e)
        }
        return t
      }

      function it(e, t) {
        if (typeof e === "string") {
          if (!isNaN(e)) {
            e = parseInt(e, 10)
          }
          else {
            e = t.weekdaysParse(e);
            if (typeof e !== "number") {
              return null
            }
          }
        }
        return e
      }

      function nt(e, t, i, n, r) {
        return r.relativeTime(t || 1, !!i, e, n)
      }

      function rt(e, t, n) {
        var r = i.duration(e).abs(),
          o = s(r.as("s")),
          a = s(r.as("m")),
          l = s(r.as("h")),
          u = s(r.as("d")),
          c = s(r.as("M")),
          d = s(r.as("y")),
          f = o < X.s && ["s", o] || a === 1 && ["m"] || a < X.m && ["mm", a] || l === 1 && ["h"] || l < X.h && ["hh", l] || u === 1 && ["d"] || u < X.d && ["dd", u] || c === 1 && ["M"] || c < X.M && ["MM", c] || d === 1 && ["y"] || ["yy", d];
        f[2] = t;
        f[3] = +e > 0;
        f[4] = n;
        return nt.apply({}, f)
      }

      function ot(e, t, n) {
        var r = n - t,
          o = n - e.day(),
          s;
        if (o > r) {
          o -= 7
        }
        if (o < r - 7) {
          o += 7
        }
        s = i(e).add(o, "d");
        return {
          week: Math.ceil(s.dayOfYear() / 7),
          year: s.year()
        }
      }

      function st(e, t, i, n, r) {
        var o = tt(e, 0, 1).getUTCDay(),
          s, a;
        o = o === 0 ? 7 : o;
        i = i != null ? i : r;
        s = r - o + (o > n ? 7 : 0) - (o < r ? 7 : 0);
        a = 7 * (t - 1) + (i - r) + s + 1;
        return {
          year: a > 0 ? e : e - 1,
          dayOfYear: a > 0 ? a : Ae(e - 1) + a
        }
      }

      function at(e) {
        var n = e._i,
          r = e._f;
        e._locale = e._locale || i.localeData(e._l);
        if (n === null || r === t && n === "") {
          return i.invalid({
            nullInput: true
          })
        }
        if (typeof n === "string") {
          e._i = n = e._locale.preparse(n)
        }
        if (i.isMoment(n)) {
          return new ue(n, true)
        }
        else if (r) {
          if (be(r)) {
            Ke(e)
          }
          else {
            Ye(e)
          }
        }
        else {
          Ze(e)
        }
        return new ue(e)
      }
      i = function (e, i, n, r) {
        var o;
        if (typeof n === "boolean") {
          r = n;
          n = t
        }
        o = {};
        o._isAMomentObject = true;
        o._i = e;
        o._f = i;
        o._l = n;
        o._strict = r;
        o._isUTC = false;
        o._pf = ie();
        return at(o)
      };
      i.suppressDeprecationWarnings = false;
      i.createFromInputFallback = re("moment construction falls back to js Date. This is " + "discouraged and will be removed in upcoming major " + "release. Please refer to " + "https://github.com/moment/moment/issues/1407 for more info.", function (e) {
        e._d = new Date(e._i)
      });

      function lt(e, t) {
        var n, r;
        if (t.length === 1 && be(t[0])) {
          t = t[0]
        }
        if (!t.length) {
          return i()
        }
        n = t[0];
        for (r = 1; r < t.length; ++r) {
          if (t[r][e](n)) {
            n = t[r]
          }
        }
        return n
      }
      i.min = function () {
        var e = [].slice.call(arguments, 0);
        return lt("isBefore", e)
      };
      i.max = function () {
        var e = [].slice.call(arguments, 0);
        return lt("isAfter", e)
      };
      i.utc = function (e, i, n, r) {
        var o;
        if (typeof n === "boolean") {
          r = n;
          n = t
        }
        o = {};
        o._isAMomentObject = true;
        o._useUTC = true;
        o._isUTC = true;
        o._l = n;
        o._i = e;
        o._f = i;
        o._strict = r;
        o._pf = ie();
        return at(o).utc()
      };
      i.unix = function (e) {
        return i(e * 1e3)
      };
      i.duration = function (e, t) {
        var n = e,
          r = null,
          o, s, a, l;
        if (i.isDuration(e)) {
          n = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
          }
        }
        else if (typeof e === "number") {
          n = {};
          if (t) {
            n[t] = e
          }
          else {
            n.milliseconds = e
          }
        }
        else if (!!(r = b.exec(e))) {
          o = r[1] === "-" ? -1 : 1;
          n = {
            y: 0,
            d: Ce(r[c]) * o,
            h: Ce(r[d]) * o,
            m: Ce(r[f]) * o,
            s: Ce(r[h]) * o,
            ms: Ce(r[p]) * o
          }
        }
        else if (!!(r = w.exec(e))) {
          o = r[1] === "-" ? -1 : 1;
          a = function (e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * o
          };
          n = {
            y: a(r[2]),
            M: a(r[3]),
            d: a(r[4]),
            h: a(r[5]),
            m: a(r[6]),
            s: a(r[7]),
            w: a(r[8])
          }
        }
        else if (typeof n === "object" && ("from" in n || "to" in n)) {
          l = ve(i(n.from), i(n.to));
          n = {};
          n.ms = l.milliseconds;
          n.M = l.months
        }
        s = new ce(n);
        if (i.isDuration(e) && e.hasOwnProperty("_locale")) {
          s._locale = e._locale
        }
        return s
      };
      i.version = n;
      i.defaultFormat = N;
      i.ISO_8601 = function () {};
      i.momentProperties = v;
      i.updateOffset = function () {};
      i.relativeTimeThreshold = function (e, i) {
        if (X[e] === t) {
          return false
        }
        if (i === t) {
          return X[e]
        }
        X[e] = i;
        return true
      };
      i.lang = re("moment.lang is deprecated. Use moment.locale instead.", function (e, t) {
        return i.locale(e, t)
      });
      i.locale = function (e, t) {
        var n;
        if (e) {
          if (typeof t !== "undefined") {
            n = i.defineLocale(e, t)
          }
          else {
            n = i.localeData(e)
          }
          if (n) {
            i.duration._locale = i._locale = n
          }
        }
        return i._locale._abbr
      };
      i.defineLocale = function (e, t) {
        if (t !== null) {
          t.abbr = e;
          if (!m[e]) {
            m[e] = new le
          }
          m[e].set(t);
          i.locale(e);
          return m[e]
        }
        else {
          delete m[e];
          return null
        }
      };
      i.langData = re("moment.langData is deprecated. Use moment.localeData instead.", function (e) {
        return i.localeData(e)
      });
      i.localeData = function (e) {
        var t;
        if (e && e._locale && e._locale._abbr) {
          e = e._locale._abbr
        }
        if (!e) {
          return i._locale
        }
        if (!be(e)) {
          t = He(e);
          if (t) {
            return t
          }
          e = [e]
        }
        return Fe(e)
      };
      i.isMoment = function (e) {
        return e instanceof ue || e != null && e.hasOwnProperty("_isAMomentObject")
      };
      i.isDuration = function (e) {
        return e instanceof ce
      };
      for (a = ee.length - 1; a >= 0; --a) {
        Me(ee[a])
      }
      i.normalizeUnits = function (e) {
        return Se(e)
      };
      i.invalid = function (e) {
        var t = i.utc(NaN);
        if (e != null) {
          de(t._pf, e)
        }
        else {
          t._pf.userInvalidated = true
        }
        return t
      };
      i.parseZone = function () {
        return i.apply(null, arguments).parseZone()
      };
      i.parseTwoDigitYear = function (e) {
        return Ce(e) + (Ce(e) > 68 ? 1900 : 2e3)
      };
      de(i.fn = ue.prototype, {
        clone: function () {
          return i(this)
        },
        valueOf: function () {
          return +this._d + (this._offset || 0) * 6e4
        },
        unix: function () {
          return Math.floor(+this / 1e3)
        },
        toString: function () {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function () {
          return this._offset ? new Date(+this) : this._d
        },
        toISOString: function () {
          var e = i(this).utc();
          if (0 < e.year() && e.year() <= 9999) {
            return Ge(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
          }
          else {
            return Ge(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
          }
        },
        toArray: function () {
          var e = this;
          return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function () {
          return Ie(this)
        },
        isDSTShifted: function () {
          if (this._a) {
            return this.isValid() && Te(this._a, (this._isUTC ? i.utc(this._a) : i(this._a)).toArray()) > 0
          }
          return false
        },
        parsingFlags: function () {
          return de({}, this._pf)
        },
        invalidAt: function () {
          return this._pf.overflow
        },
        utc: function (e) {
          return this.zone(0, e)
        },
        local: function (e) {
          if (this._isUTC) {
            this.zone(0, e);
            this._isUTC = false;
            if (e) {
              this.add(this._d.getTimezoneOffset(), "m")
            }
          }
          return this
        },
        format: function (e) {
          var t = Ge(this, e || i.defaultFormat);
          return this.localeData().postformat(t)
        },
        add: ge(1, "add"),
        subtract: ge(-1, "subtract"),
        diff: function (e, t, n) {
          var r = Re(e, this),
            o = (this.zone() - r.zone()) * 6e4,
            s, a;
          t = Se(t);
          if (t === "year" || t === "month") {
            s = (this.daysInMonth() + r.daysInMonth()) * 432e5;
            a = (this.year() - r.year()) * 12 + (this.month() - r.month());
            a += (this - i(this).startOf("month") - (r - i(r).startOf("month"))) / s;
            a -= (this.zone() - i(this).startOf("month").zone() - (r.zone() - i(r).startOf("month").zone())) * 6e4 / s;
            if (t === "year") {
              a = a / 12
            }
          }
          else {
            s = this - r;
            a = t === "second" ? s / 1e3 : t === "minute" ? s / 6e4 : t === "hour" ? s / 36e5 : t === "day" ? (s - o) / 864e5 : t === "week" ? (s - o) / 6048e5 : s
          }
          return n ? a : he(a)
        },
        from: function (e, t) {
          return i.duration({
            to: this,
            from: e
          }).locale(this.locale()).humanize(!t)
        },
        fromNow: function (e) {
          return this.from(i(), e)
        },
        calendar: function (e) {
          var t = e || i(),
            n = Re(t, this).startOf("day"),
            r = this.diff(n, "days", true),
            o = r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
          return this.format(this.localeData().calendar(o, this))
        },
        isLeapYear: function () {
          return ke(this.year())
        },
        isDST: function () {
          return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function (e) {
          var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (e != null) {
            e = it(e, this.localeData());
            return this.add(e - t, "d")
          }
          else {
            return t
          }
        },
        month: ft("Month", true),
        startOf: function (e) {
          e = Se(e);
          switch (e) {
            case "year":
              this.month(0);
            case "quarter":
            case "month":
              this.date(1);
            case "week":
            case "isoWeek":
            case "day":
              this.hours(0);
            case "hour":
              this.minutes(0);
            case "minute":
              this.seconds(0);
            case "second":
              this.milliseconds(0)
          }
          if (e === "week") {
            this.weekday(0)
          }
          else if (e === "isoWeek") {
            this.isoWeekday(1)
          }
          if (e === "quarter") {
            this.month(Math.floor(this.month() / 3) * 3)
          }
          return this
        },
        endOf: function (e) {
          e = Se(e);
          return this.startOf(e).add(1, e === "isoWeek" ? "week" : e).subtract(1, "ms")
        },
        isAfter: function (e, t) {
          t = typeof t !== "undefined" ? t : "millisecond";
          return +this.clone().startOf(t) > +i(e).startOf(t)
        },
        isBefore: function (e, t) {
          t = typeof t !== "undefined" ? t : "millisecond";
          return +this.clone().startOf(t) < +i(e).startOf(t)
        },
        isSame: function (e, t) {
          t = t || "ms";
          return +this.clone().startOf(t) === +Re(e, this).startOf(t)
        },
        min: re("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (e) {
          e = i.apply(null, arguments);
          return e < this ? this : e
        }),
        max: re("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (e) {
          e = i.apply(null, arguments);
          return e > this ? this : e
        }),
        zone: function (e, t) {
          var n = this._offset || 0,
            r;
          if (e != null) {
            if (typeof e === "string") {
              e = Le(e)
            }
            if (Math.abs(e) < 16) {
              e = e * 60
            }
            if (!this._isUTC && t) {
              r = this._d.getTimezoneOffset()
            }
            this._offset = e;
            this._isUTC = true;
            if (r != null) {
              this.subtract(r, "m")
            }
            if (n !== e) {
              if (!t || this._changeInProgress) {
                ye(this, i.duration(n - e, "m"), 1, false)
              }
              else if (!this._changeInProgress) {
                this._changeInProgress = true;
                i.updateOffset(this, true);
                this._changeInProgress = null
              }
            }
          }
          else {
            return this._isUTC ? n : this._d.getTimezoneOffset()
          }
          return this
        },
        zoneAbbr: function () {
          return this._isUTC ? "UTC" : ""
        },
        zoneName: function () {
          return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function () {
          if (this._tzm) {
            this.zone(this._tzm)
          }
          else if (typeof this._i === "string") {
            this.zone(this._i)
          }
          return this
        },
        hasAlignedHourOffset: function (e) {
          if (!e) {
            e = 0
          }
          else {
            e = i(e).zone()
          }
          return (this.zone() - e) % 60 === 0
        },
        daysInMonth: function () {
          return Pe(this.year(), this.month())
        },
        dayOfYear: function (e) {
          var t = s((i(this).startOf("day") - i(this).startOf("year")) / 864e5) + 1;
          return e == null ? t : this.add(e - t, "d")
        },
        quarter: function (e) {
          return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
        },
        weekYear: function (e) {
          var t = ot(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
          return e == null ? t : this.add(e - t, "y")
        },
        isoWeekYear: function (e) {
          var t = ot(this, 1, 4).year;
          return e == null ? t : this.add(e - t, "y")
        },
        week: function (e) {
          var t = this.localeData().week(this);
          return e == null ? t : this.add((e - t) * 7, "d")
        },
        isoWeek: function (e) {
          var t = ot(this, 1, 4).week;
          return e == null ? t : this.add((e - t) * 7, "d")
        },
        weekday: function (e) {
          var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return e == null ? t : this.add(e - t, "d")
        },
        isoWeekday: function (e) {
          return e == null ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        isoWeeksInYear: function () {
          return xe(this.year(), 1, 4)
        },
        weeksInYear: function () {
          var e = this.localeData()._week;
          return xe(this.year(), e.dow, e.doy)
        },
        get: function (e) {
          e = Se(e);
          return this[e]()
        },
        set: function (e, t) {
          e = Se(e);
          if (typeof this[e] === "function") {
            this[e](t)
          }
          return this
        },
        locale: function (e) {
          if (e === t) {
            return this._locale._abbr
          }
          else {
            this._locale = i.localeData(e);
            return this
          }
        },
        lang: re("moment().lang() is deprecated. Use moment().localeData() instead.", function (e) {
          if (e === t) {
            return this.localeData()
          }
          else {
            this._locale = i.localeData(e);
            return this
          }
        }),
        localeData: function () {
          return this._locale
        }
      });

      function ut(e, t) {
        var i;
        if (typeof t === "string") {
          t = e.localeData().monthsParse(t);
          if (typeof t !== "number") {
            return e
          }
        }
        i = Math.min(e.date(), Pe(e.year(), t));
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, i);
        return e
      }

      function ct(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
      }

      function dt(e, t, i) {
        if (t === "Month") {
          return ut(e, i)
        }
        else {
          return e._d["set" + (e._isUTC ? "UTC" : "") + t](i)
        }
      }

      function ft(e, t) {
        return function (n) {
          if (n != null) {
            dt(this, e, n);
            i.updateOffset(this, t);
            return this
          }
          else {
            return ct(this, e)
          }
        }
      }
      i.fn.millisecond = i.fn.milliseconds = ft("Milliseconds", false);
      i.fn.second = i.fn.seconds = ft("Seconds", false);
      i.fn.minute = i.fn.minutes = ft("Minutes", false);
      i.fn.hour = i.fn.hours = ft("Hours", true);
      i.fn.date = ft("Date", true);
      i.fn.dates = re("dates accessor is deprecated. Use date instead.", ft("Date", true));
      i.fn.year = ft("FullYear", true);
      i.fn.years = re("years accessor is deprecated. Use year instead.", ft("FullYear", true));
      i.fn.days = i.fn.day;
      i.fn.months = i.fn.month;
      i.fn.weeks = i.fn.week;
      i.fn.isoWeeks = i.fn.isoWeek;
      i.fn.quarters = i.fn.quarter;
      i.fn.toJSON = i.fn.toISOString;

      function ht(e) {
        return e * 400 / 146097
      }

      function pt(e) {
        return e * 146097 / 400
      }
      de(i.duration.fn = ce.prototype, {
        _bubble: function () {
          var e = this._milliseconds,
            t = this._days,
            i = this._months,
            n = this._data,
            r, o, s, a = 0;
          n.milliseconds = e % 1e3;
          r = he(e / 1e3);
          n.seconds = r % 60;
          o = he(r / 60);
          n.minutes = o % 60;
          s = he(o / 60);
          n.hours = s % 24;
          t += he(s / 24);
          a = he(ht(t));
          t -= he(pt(a));
          i += he(t / 30);
          t %= 30;
          a += he(i / 12);
          i %= 12;
          n.days = t;
          n.months = i;
          n.years = a
        },
        abs: function () {
          this._milliseconds = Math.abs(this._milliseconds);
          this._days = Math.abs(this._days);
          this._months = Math.abs(this._months);
          this._data.milliseconds = Math.abs(this._data.milliseconds);
          this._data.seconds = Math.abs(this._data.seconds);
          this._data.minutes = Math.abs(this._data.minutes);
          this._data.hours = Math.abs(this._data.hours);
          this._data.months = Math.abs(this._data.months);
          this._data.years = Math.abs(this._data.years);
          return this
        },
        weeks: function () {
          return he(this.days() / 7)
        },
        valueOf: function () {
          return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Ce(this._months / 12) * 31536e6
        },
        humanize: function (e) {
          var t = rt(this, !e, this.localeData());
          if (e) {
            t = this.localeData().pastFuture(+this, t)
          }
          return this.localeData().postformat(t)
        },
        add: function (e, t) {
          var n = i.duration(e, t);
          this._milliseconds += n._milliseconds;
          this._days += n._days;
          this._months += n._months;
          this._bubble();
          return this
        },
        subtract: function (e, t) {
          var n = i.duration(e, t);
          this._milliseconds -= n._milliseconds;
          this._days -= n._days;
          this._months -= n._months;
          this._bubble();
          return this
        },
        get: function (e) {
          e = Se(e);
          return this[e.toLowerCase() + "s"]()
        },
        as: function (e) {
          var t, i;
          e = Se(e);
          t = this._days + this._milliseconds / 864e5;
          if (e === "month" || e === "year") {
            i = this._months + ht(t) * 12;
            return e === "month" ? i : i / 12
          }
          else {
            t += pt(this._months / 12);
            switch (e) {
              case "week":
                return t / 7;
              case "day":
                return t;
              case "hour":
                return t * 24;
              case "minute":
                return t * 24 * 60;
              case "second":
                return t * 24 * 60 * 60;
              case "millisecond":
                return t * 24 * 60 * 60 * 1e3;
              default:
                throw new Error("Unknown unit " + e)
            }
          }
        },
        lang: i.fn.lang,
        locale: i.fn.locale,
        toIsoString: re("toIsoString() is deprecated. Please use toISOString() instead " + "(notice the capitals)", function () {
          return this.toISOString()
        }),
        toISOString: function () {
          var e = Math.abs(this.years()),
            t = Math.abs(this.months()),
            i = Math.abs(this.days()),
            n = Math.abs(this.hours()),
            r = Math.abs(this.minutes()),
            o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
          if (!this.asSeconds()) {
            return "P0D"
          }
          return (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (i ? i + "D" : "") + (n || r || o ? "T" : "") + (n ? n + "H" : "") + (r ? r + "M" : "") + (o ? o + "S" : "")
        },
        localeData: function () {
          return this._locale
        }
      });

      function mt(e) {
        i.duration.fn[e] = function () {
          return this._data[e]
        }
      }
      for (a in U) {
        if (U.hasOwnProperty(a)) {
          mt(a.toLowerCase())
        }
      }
      i.duration.fn.asMilliseconds = function () {
        return this.as("ms")
      };
      i.duration.fn.asSeconds = function () {
        return this.as("s")
      };
      i.duration.fn.asMinutes = function () {
        return this.as("m")
      };
      i.duration.fn.asHours = function () {
        return this.as("h")
      };
      i.duration.fn.asDays = function () {
        return this.as("d")
      };
      i.duration.fn.asWeeks = function () {
        return this.as("weeks")
      };
      i.duration.fn.asMonths = function () {
        return this.as("M")
      };
      i.duration.fn.asYears = function () {
        return this.as("y")
      };
      i.locale("en", {
        ordinal: function (e) {
          var t = e % 10,
            i = Ce(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
          return e + i
        }
      });

      function vt(e) {
        if (typeof ender !== "undefined") {
          return
        }
        o = r.moment;
        if (e) {
          r.moment = re("Accessing Moment through the global scope is " + "deprecated, and will be removed in an upcoming " + "release.", i)
        }
        else {
          r.moment = i
        }
      }
      if (g) {
        e.exports = i
      }
      else if (typeof define === "function" && define.amd) {
        define("moment", function (e, t, n) {
          if (n.config && n.config() && n.config().noGlobal === true) {
            r.moment = o
          }
          return i
        });
        vt(true)
      }
      else {
        vt()
      }
    }).call(this)
  },
  50: function (e, t, i) {
    var n, r, o;
    (function (s, a) {
      if (true) {
        !(r = [t, i(5), i(3)], n = a, o = typeof n === "function" ? n.apply(t, r) : n, o !== undefined && (e.exports = o))
      }
      else if (typeof t !== "undefined") {
        a(t, require("backbone"), require("underscore"))
      }
      else {
        a(s, s.Backbone, s._)
      }
    })(this, function (e, t, i) {
      "use strict";
      t.Relational = {
        showWarnings: true
      };
      t.Semaphore = {
        _class: "Backbone.Semaphore",
        _permitsAvailable: null,
        _permitsUsed: 0,
        acquire: function () {
          if (this._permitsAvailable && this._permitsUsed >= this._permitsAvailable) {
            throw new Error("Max permits acquired")
          }
          else {
            this._permitsUsed++
          }
        },
        release: function () {
          if (this._permitsUsed === 0) {
            throw new Error("All permits released")
          }
          else {
            this._permitsUsed--
          }
        },
        isLocked: function () {
          return this._permitsUsed > 0
        },
        setAvailablePermits: function (e) {
          if (this._permitsUsed > e) {
            throw new Error("Available permits cannot be less than used permits")
          }
          this._permitsAvailable = e
        }
      };
      t.BlockingQueue = function () {
        this._queue = []
      };
      i.extend(t.BlockingQueue.prototype, t.Semaphore, {
        _class: "Backbone.BlockingQueue",
        _queue: null,
        add: function (e) {
          if (this.isBlocked()) {
            this._queue.push(e)
          }
          else {
            e()
          }
        },
        process: function () {
          var e = this._queue;
          this._queue = [];
          while (e && e.length) {
            e.shift()()
          }
        },
        block: function () {
          this.acquire()
        },
        unblock: function () {
          this.release();
          if (!this.isBlocked()) {
            this.process()
          }
        },
        isBlocked: function () {
          return this.isLocked()
        }
      });
      t.Relational.eventQueue = new t.BlockingQueue;
      t.Store = function () {
        this._collections = [];
        this._reverseRelations = [];
        this._orphanRelations = [];
        this._subModels = [];
        this._modelScopes = [e]
      };
      i.extend(t.Store.prototype, t.Events, {
        _class: "Backbone.Store",
        initializeRelation: function (e, n, r) {
          var o = !i.isString(n.type) ? n.type : t[n.type] || this.getObjectByName(n.type);
          if (o && o.prototype instanceof t.Relation) {
            new o(e, n, r)
          }
          else {
            t.Relational.showWarnings && typeof console !== "undefined" && console.warn("Relation=%o; missing or invalid relation type!", n)
          }
        },
        addModelScope: function (e) {
          this._modelScopes.push(e)
        },
        removeModelScope: function (e) {
          this._modelScopes = i.without(this._modelScopes, e)
        },
        addSubModels: function (e, t) {
          this._subModels.push({
            superModelType: t,
            subModels: e
          })
        },
        setupSuperModel: function (e) {
          i.find(this._subModels, function (t) {
            return i.each(t.subModels || [], function (i, n) {
              var r = this.getObjectByName(i);
              if (e === r) {
                t.superModelType._subModels[n] = e;
                e._superModel = t.superModelType;
                e._subModelTypeValue = n;
                e._subModelTypeAttribute = t.superModelType.prototype.subModelTypeAttribute;
                return true
              }
            }, this)
          }, this)
        },
        addReverseRelation: function (e) {
          var t = i.any(this._reverseRelations, function (t) {
            return i.all(e || [], function (e, i) {
              return e === t[i]
            })
          });
          if (!t && e.model && e.type) {
            this._reverseRelations.push(e);
            this._addRelation(e.model, e);
            this.retroFitRelation(e)
          }
        },
        addOrphanRelation: function (e) {
          var t = i.any(this._orphanRelations, function (t) {
            return i.all(e || [], function (e, i) {
              return e === t[i]
            })
          });
          if (!t && e.model && e.type) {
            this._orphanRelations.push(e)
          }
        },
        processOrphanRelations: function () {
          i.each(this._orphanRelations.slice(0), function (e) {
            var n = t.Relational.store.getObjectByName(e.relatedModel);
            if (n) {
              this.initializeRelation(null, e);
              this._orphanRelations = i.without(this._orphanRelations, e)
            }
          }, this)
        },
        _addRelation: function (e, t) {
          if (!e.prototype.relations) {
            e.prototype.relations = []
          }
          e.prototype.relations.push(t);
          i.each(e._subModels || [], function (e) {
            this._addRelation(e, t)
          }, this)
        },
        retroFitRelation: function (e) {
          var t = this.getCollection(e.model, false);
          t && t.each(function (t) {
            if (!(t instanceof e.model)) {
              return
            }
            new e.type(t, e)
          }, this)
        },
        getCollection: function (e, n) {
          if (e instanceof t.RelationalModel) {
            e = e.constructor
          }
          var r = e;
          while (r._superModel) {
            r = r._superModel
          }
          var o = i.find(this._collections, function (e) {
            return e.model === r
          });
          if (!o && n !== false) {
            o = this._createCollection(r)
          }
          return o
        },
        getObjectByName: function (e) {
          var t = e.split("."),
            n = null;
          i.find(this._modelScopes, function (e) {
            n = i.reduce(t || [], function (e, t) {
              return e ? e[t] : undefined
            }, e);
            if (n && n !== e) {
              return true
            }
          }, this);
          return n
        },
        _createCollection: function (e) {
          var i;
          if (e instanceof t.RelationalModel) {
            e = e.constructor
          }
          if (e.prototype instanceof t.RelationalModel) {
            i = new t.Collection;
            i.model = e;
            this._collections.push(i)
          }
          return i
        },
        resolveIdForItem: function (e, n) {
          var r = i.isString(n) || i.isNumber(n) ? n : null;
          if (r === null) {
            if (n instanceof t.RelationalModel) {
              r = n.id
            }
            else if (i.isObject(n)) {
              r = e.prototype._getNewId(n)
            }
          }
          if (!r && r !== 0) {
            r = null
          }
          return r
        },
        find: function (e, t) {
          var i = this.resolveIdForItem(e, t),
            n = this.getCollection(e);
          if (n) {
            var r = n.get(i);
            if (r instanceof e) {
              return r
            }
          }
          return null
        },
        register: function (e) {
          var t = this.getCollection(e);
          if (t) {
            var i = e.collection;
            t.add(e);
            e.collection = i
          }
        },
        checkId: function (e, i) {
          var n = this.getCollection(e),
            r = n && n.get(i);
          if (r && e !== r) {
            if (t.Relational.showWarnings && typeof console !== "undefined") {
              console.warn("Duplicate id! Old RelationalModel=%o, new RelationalModel=%o", r, e)
            }
            throw new Error("Cannot instantiate more than one Backbone.RelationalModel with the same id per type!")
          }
        },
        update: function (e) {
          var t = this.getCollection(e);
          if (!t.contains(e)) {
            this.register(e)
          }
          t._onModelEvent("change:" + e.idAttribute, e, t);
          e.trigger("relational:change:id", e, t)
        },
        unregister: function (e) {
          var n, r;
          if (e instanceof t.Model) {
            n = this.getCollection(e);
            r = [e]
          }
          else if (e instanceof t.Collection) {
            n = this.getCollection(e.model);
            r = i.clone(e.models)
          }
          else {
            n = this.getCollection(e);
            r = i.clone(n.models)
          }
          i.each(r, function (e) {
            this.stopListening(e);
            i.invoke(e.getRelations(), "stopListening")
          }, this);
          if (i.contains(this._collections, e)) {
            n.reset([])
          }
          else {
            i.each(r, function (e) {
              if (n.get(e)) {
                n.remove(e)
              }
              else {
                n.trigger("relational:remove", e, n)
              }
            }, this)
          }
        },
        reset: function () {
          this.stopListening();
          i.each(this._collections, function (e) {
            this.unregister(e)
          }, this);
          this._collections = [];
          this._subModels = [];
          this._modelScopes = [e]
        }
      });
      t.Relational.store = new t.Store;
      t.Relation = function (e, n, r) {
        this.instance = e;
        n = i.isObject(n) ? n : {};
        this.reverseRelation = i.defaults(n.reverseRelation || {}, this.options.reverseRelation);
        this.options = i.defaults(n, this.options, t.Relation.prototype.options);
        this.reverseRelation.type = !i.isString(this.reverseRelation.type) ? this.reverseRelation.type : t[this.reverseRelation.type] || t.Relational.store.getObjectByName(this.reverseRelation.type);
        this.key = this.options.key;
        this.keySource = this.options.keySource || this.key;
        this.keyDestination = this.options.keyDestination || this.keySource || this.key;
        this.model = this.options.model || this.instance.constructor;
        this.relatedModel = this.options.relatedModel;
        if (i.isFunction(this.relatedModel) && !(this.relatedModel.prototype instanceof t.RelationalModel)) {
          this.relatedModel = i.result(this, "relatedModel")
        }
        if (i.isString(this.relatedModel)) {
          this.relatedModel = t.Relational.store.getObjectByName(this.relatedModel)
        }
        if (!this.checkPreconditions()) {
          return
        }
        if (!this.options.isAutoRelation && this.reverseRelation.type && this.reverseRelation.key) {
          t.Relational.store.addReverseRelation(i.defaults({
            isAutoRelation: true,
            model: this.relatedModel,
            relatedModel: this.model,
            reverseRelation: this.options
          }, this.reverseRelation))
        }
        if (e) {
          var o = this.keySource;
          if (o !== this.key && typeof this.instance.get(this.key) === "object") {
            o = this.key
          }
          this.setKeyContents(this.instance.get(o));
          this.relatedCollection = t.Relational.store.getCollection(this.relatedModel);
          if (this.keySource !== this.key) {
            delete this.instance.attributes[this.keySource]
          }
          this.instance._relations[this.key] = this;
          this.initialize(r);
          if (this.options.autoFetch) {
            this.instance.fetchRelated(this.key, i.isObject(this.options.autoFetch) ? this.options.autoFetch : {})
          }
          this.listenTo(this.instance, "destroy", this.destroy).listenTo(this.relatedCollection, "relational:add relational:change:id", this.tryAddRelated).listenTo(this.relatedCollection, "relational:remove", this.removeRelated)
        }
      };
      t.Relation.extend = t.Model.extend;
      i.extend(t.Relation.prototype, t.Events, t.Semaphore, {
        _class: "Backbone.Relation",
        options: {
          createModels: true,
          includeInJSON: true,
          isAutoRelation: false,
          autoFetch: false,
          parse: false
        },
        instance: null,
        key: null,
        keyContents: null,
        relatedModel: null,
        relatedCollection: null,
        reverseRelation: null,
        related: null,
        checkPreconditions: function () {
          var e = this.instance,
            n = this.key,
            r = this.model,
            o = this.relatedModel,
            s = t.Relational.showWarnings && typeof console !== "undefined";
          if (!r || !n || !o) {
            s && console.warn("Relation=%o: missing model, key or relatedModel (%o, %o, %o).", this, r, n, o);
            return false
          }
          if (!(r.prototype instanceof t.RelationalModel)) {
            s && console.warn("Relation=%o: model does not inherit from Backbone.RelationalModel (%o).", this, e);
            return false
          }
          if (!(o.prototype instanceof t.RelationalModel)) {
            s && console.warn("Relation=%o: relatedModel does not inherit from Backbone.RelationalModel (%o).", this, o);
            return false
          }
          if (this instanceof t.HasMany && this.reverseRelation.type === t.HasMany) {
            s && console.warn("Relation=%o: relation is a HasMany, and the reverseRelation is HasMany as well.", this);
            return false
          }
          if (e && i.keys(e._relations).length) {
            var a = i.find(e._relations, function (e) {
              return e.key === n
            }, this);
            if (a) {
              s && console.warn("Cannot create relation=%o on %o for model=%o: already taken by relation=%o.", this, n, e, a);
              return false
            }
          }
          return true
        },
        setRelated: function (e) {
          this.related = e;
          this.instance.attributes[this.key] = e
        },
        _isReverseRelation: function (e) {
          return e.instance instanceof this.relatedModel && this.reverseRelation.key === e.key && this.key === e.reverseRelation.key
        },
        getReverseRelations: function (e) {
          var t = [];
          var n = !i.isUndefined(e) ? [e] : this.related && (this.related.models || [this.related]);
          i.each(n || [], function (e) {
            i.each(e.getRelations() || [], function (e) {
              if (this._isReverseRelation(e)) {
                t.push(e)
              }
            }, this)
          }, this);
          return t
        },
        destroy: function () {
          this.stopListening();
          if (this instanceof t.HasOne) {
            this.setRelated(null)
          }
          else if (this instanceof t.HasMany) {
            this.setRelated(this._prepareCollection())
          }
          i.each(this.getReverseRelations(), function (e) {
            e.removeRelated(this.instance)
          }, this)
        }
      });
      t.HasOne = t.Relation.extend({
        _class: "Backbone.HasOne",
        options: {
          reverseRelation: {
            type: "HasMany"
          }
        },
        initialize: function (e) {
          this.listenTo(this.instance, "relational:change:" + this.key, this.onChange);
          var t = this.findRelated(e);
          this.setRelated(t);
          i.each(this.getReverseRelations(), function (t) {
            t.addRelated(this.instance, e)
          }, this)
        },
        findRelated: function (e) {
          var t = null;
          e = i.defaults({
            parse: this.options.parse
          }, e);
          if (this.keyContents instanceof this.relatedModel) {
            t = this.keyContents
          }
          else if (this.keyContents || this.keyContents === 0) {
            var n = i.defaults({
              create: this.options.createModels
            }, e);
            t = this.relatedModel.findOrCreate(this.keyContents, n)
          }
          if (t) {
            this.keyId = null
          }
          return t
        },
        setKeyContents: function (e) {
          this.keyContents = e;
          this.keyId = t.Relational.store.resolveIdForItem(this.relatedModel, this.keyContents)
        },
        onChange: function (e, n, r) {
          if (this.isLocked()) {
            return
          }
          this.acquire();
          r = r ? i.clone(r) : {};
          var o = i.isUndefined(r.__related),
            s = o ? this.related : r.__related;
          if (o) {
            this.setKeyContents(n);
            var a = this.findRelated(r);
            this.setRelated(a)
          }
          if (s && this.related !== s) {
            i.each(this.getReverseRelations(s), function (e) {
              e.removeRelated(this.instance, null, r)
            }, this)
          }
          i.each(this.getReverseRelations(), function (e) {
            e.addRelated(this.instance, r)
          }, this);
          if (!r.silent && this.related !== s) {
            var l = this;
            this.changed = true;
            t.Relational.eventQueue.add(function () {
              l.instance.trigger("change:" + l.key, l.instance, l.related, r, true);
              l.changed = false
            })
          }
          this.release()
        },
        tryAddRelated: function (e, t, i) {
          if ((this.keyId || this.keyId === 0) && e.id === this.keyId) {
            this.addRelated(e, i);
            this.keyId = null
          }
        },
        addRelated: function (e, t) {
          var n = this;
          e.queue(function () {
            if (e !== n.related) {
              var r = n.related || null;
              n.setRelated(e);
              n.onChange(n.instance, e, i.defaults({
                __related: r
              }, t))
            }
          })
        },
        removeRelated: function (e, t, n) {
          if (!this.related) {
            return
          }
          if (e === this.related) {
            var r = this.related || null;
            this.setRelated(null);
            this.onChange(this.instance, e, i.defaults({
              __related: r
            }, n))
          }
        }
      });
      t.HasMany = t.Relation.extend({
        _class: "Backbone.HasMany",
        collectionType: null,
        options: {
          reverseRelation: {
            type: "HasOne"
          },
          collectionType: t.Collection,
          collectionKey: true,
          collectionOptions: {}
        },
        initialize: function (e) {
          this.listenTo(this.instance, "relational:change:" + this.key, this.onChange);
          this.collectionType = this.options.collectionType;
          if (i.isFunction(this.collectionType) && this.collectionType !== t.Collection && !(this.collectionType.prototype instanceof t.Collection)) {
            this.collectionType = i.result(this, "collectionType")
          }
          if (i.isString(this.collectionType)) {
            var n = this.collectionType;
            this.collectionType = t.Relational.store.getObjectByName(this.collectionType)
          }
          if (!this.collectionType) {
            if (n && t.Relational.showWarnings && typeof console !== "undefined") {
              console.warn("`collectionType` of " + n + " not found, using Backbone.Collection in its place.")
            }
            this.collectionType = t.Collection
          }
          if (this.collectionType !== t.Collection && !(this.collectionType.prototype instanceof t.Collection)) {
            throw new Error("`collectionType` must inherit from Backbone.Collection")
          }
          var r = this.findRelated(e);
          this.setRelated(r)
        },
        _prepareCollection: function (e) {
          if (this.related) {
            this.stopListening(this.related)
          }
          if (!e || !(e instanceof t.Collection)) {
            var n = i.isFunction(this.options.collectionOptions) ? this.options.collectionOptions(this.instance) : this.options.collectionOptions;
            e = new this.collectionType(null, n)
          }
          e.model = this.relatedModel;
          if (this.options.collectionKey) {
            var r = this.options.collectionKey === true ? this.options.reverseRelation.key : this.options.collectionKey;
            if (e[r] && e[r] !== this.instance) {
              if (t.Relational.showWarnings && typeof console !== "undefined") {
                console.warn("Relation=%o; collectionKey=%s already exists on collection=%o", this, r, this.options.collectionKey)
              }
            }
            else if (r) {
              e[r] = this.instance
            }
          }
          this.listenTo(e, "relational:add", this.handleAddition).listenTo(e, "relational:remove", this.handleRemoval).listenTo(e, "relational:reset", this.handleReset);
          return e
        },
        findRelated: function (e) {
          var n = null;
          e = i.defaults({
            parse: this.options.parse
          }, e);
          if (this.keyContents instanceof t.Collection) {
            this._prepareCollection(this.keyContents);
            n = this.keyContents
          }
          else {
            var r = [];
            i.each(this.keyContents, function (t) {
              if (t instanceof this.relatedModel) {
                var n = t
              }
              else {
                n = this.relatedModel.findOrCreate(t, i.extend({
                  merge: true
                }, e, {
                  create: this.options.createModels
                }))
              }
              n && r.push(n)
            }, this);
            if (this.related instanceof t.Collection) {
              n = this.related
            }
            else {
              n = this._prepareCollection()
            }
            n.set(r, i.defaults({
              merge: false,
              parse: false
            }, e))
          }
          this.keyIds = i.difference(this.keyIds, i.pluck(n.models, "id"));
          return n
        },
        setKeyContents: function (e) {
          this.keyContents = e instanceof t.Collection ? e : null;
          this.keyIds = [];
          if (!this.keyContents && (e || e === 0)) {
            this.keyContents = i.isArray(e) ? e : [e];
            i.each(this.keyContents, function (e) {
              var i = t.Relational.store.resolveIdForItem(this.relatedModel, e);
              if (i || i === 0) {
                this.keyIds.push(i)
              }
            }, this)
          }
        },
        onChange: function (e, n, r) {
          r = r ? i.clone(r) : {};
          this.setKeyContents(n);
          this.changed = false;
          var o = this.findRelated(r);
          this.setRelated(o);
          if (!r.silent) {
            var s = this;
            t.Relational.eventQueue.add(function () {
              if (s.changed) {
                s.instance.trigger("change:" + s.key, s.instance, s.related, r, true);
                s.changed = false
              }
            })
          }
        },
        handleAddition: function (e, n, r) {
          r = r ? i.clone(r) : {};
          this.changed = true;
          i.each(this.getReverseRelations(e), function (e) {
            e.addRelated(this.instance, r)
          }, this);
          var o = this;
          !r.silent && t.Relational.eventQueue.add(function () {
            o.instance.trigger("add:" + o.key, e, o.related, r)
          })
        },
        handleRemoval: function (e, n, r) {
          r = r ? i.clone(r) : {};
          this.changed = true;
          i.each(this.getReverseRelations(e), function (e) {
            e.removeRelated(this.instance, null, r)
          }, this);
          var o = this;
          !r.silent && t.Relational.eventQueue.add(function () {
            o.instance.trigger("remove:" + o.key, e, o.related, r)
          })
        },
        handleReset: function (e, n) {
          var r = this;
          n = n ? i.clone(n) : {};
          !n.silent && t.Relational.eventQueue.add(function () {
            r.instance.trigger("reset:" + r.key, r.related, n)
          })
        },
        tryAddRelated: function (e, t, n) {
          var r = i.contains(this.keyIds, e.id);
          if (r) {
            this.addRelated(e, n);
            this.keyIds = i.without(this.keyIds, e.id)
          }
        },
        addRelated: function (e, t) {
          var n = this;
          e.queue(function () {
            if (n.related && !n.related.get(e)) {
              n.related.add(e, i.defaults({
                parse: false
              }, t))
            }
          })
        },
        removeRelated: function (e, t, i) {
          if (this.related.get(e)) {
            this.related.remove(e, i)
          }
        }
      });
      t.RelationalModel = t.Model.extend({
        _class: "Backbone.RelationalModel",
        relations: null,
        _relations: null,
        _isInitialized: false,
        _deferProcessing: false,
        _queue: null,
        _attributeChangeFired: false,
        subModelTypeAttribute: "type",
        subModelTypes: null,
        keydefs: {},
        compoundKeyDelim: "-",
        constructor: function (e, n) {
          if (n && n.collection) {
            var r = this,
              o = this.collection = n.collection;
            delete n.collection;
            this._deferProcessing = true;
            var s = function (e) {
              if (e === r) {
                r._deferProcessing = false;
                r.processQueue();
                o.off("relational:add", s)
              }
            };
            o.on("relational:add", s);
            i.defer(function () {
              s(r)
            })
          }
          t.Relational.store.processOrphanRelations();
          t.Relational.store.listenTo(this, "relational:unregister", t.Relational.store.unregister);
          this._queue = new t.BlockingQueue;
          this._queue.block();
          t.Relational.eventQueue.block();
          try {
            t.Model.apply(this, arguments)
          }
          finally {
            t.Relational.eventQueue.unblock()
          }
          this.createSavepoint();
          this.on("sync", this.createSavepoint, this)
        },
        createSavepoint: function () {
          this.savepoint = JSON.parse(JSON.stringify(this));
          return this
        },
        rollback: function (e) {
          e = e || {};
          this.set(this.savepoint);
          this.changed = [];
          if (!e.silent) this.trigger("rollback", this, e)
        },
        commit: function (e) {
          e = e || {};
          var n = this,
            r = n.isNew(),
            o = [],
            s = [];
          if (r || n.hasChangedDeepSinceSavepoint()) {
            if (!r) {
              i.each(n.relations, function (t) {
                if (t.includeInJSON) {
                  o.push(t);
                  t.includeInJSON = false;
                  if (!t.isAutoRelation) {
                    var i = n.get(t.key);
                    s.push(i.commit(e))
                  }
                }
              })
            }
            s.push(n.save(null, e));
            i.each(o, function (e) {
              e.includeInJSON = true
            });
            if (!e.silent) n.trigger("commit", n, e)
          }
          return t.$.when.apply(t.$, s)
        },
        hasChangedDeepSinceSavepoint: function () {
          return !i.isEqual(this.toJSON(), this.savepoint)
        },
        trigger: function (e) {
          if (e.length > 5 && e.indexOf("change") === 0) {
            var i = this,
              n = arguments;
            t.Relational.eventQueue.add(function () {
              if (!i._isInitialized) {
                return
              }
              var r = true;
              if (e === "change") {
                r = i.hasChanged() || i._attributeChangeFired;
                i._attributeChangeFired = false
              }
              else {
                var o = e.slice(7),
                  s = i.getRelation(o);
                if (s) {
                  r = n[4] === true;
                  if (r) {
                    i.changed[o] = n[2]
                  }
                  else if (!s.changed) {
                    delete i.changed[o]
                  }
                }
                else if (r) {
                  i._attributeChangeFired = true
                }
              }
              r && t.Model.prototype.trigger.apply(i, n)
            })
          }
          else if (e === "destroy") {
            t.Model.prototype.trigger.apply(this, arguments);
            t.Relational.store.unregister(this)
          }
          else {
            t.Model.prototype.trigger.apply(this, arguments)
          }
          return this
        },
        initializeRelations: function (e) {
          this.acquire();
          this._relations = {};
          i.each(this.relations || [], function (i) {
            t.Relational.store.initializeRelation(this, i, e)
          }, this);
          this._isInitialized = true;
          this.release();
          this.processQueue()
        },
        updateRelations: function (e, t) {
          if (this._isInitialized && !this.isLocked()) {
            i.each(this._relations, function (i) {
              if (!e || (i.keySource in e || i.key in e)) {
                var n = this.attributes[i.keySource] || this.attributes[i.key],
                  r = e && (e[i.keySource] || e[i.key]);
                if (i.related !== n || n === null && r === null) {
                  this.trigger("relational:change:" + i.key, this, n, t || {})
                }
              }
              if (i.keySource !== i.key) {
                delete this.attributes[i.keySource]
              }
            }, this)
          }
        },
        queue: function (e) {
          this._queue.add(e)
        },
        processQueue: function () {
          if (this._isInitialized && !this._deferProcessing && this._queue.isBlocked()) {
            this._queue.unblock()
          }
        },
        getRelation: function (e) {
          return this._relations[e]
        },
        getRelations: function () {
          return i.values(this._relations)
        },
        fetchRelated: function (e, n, r) {
          n = i.extend({
            update: true,
            remove: false
          }, n);
          var o, s, a = [],
            l = this.getRelation(e),
            u = l && (l.keyIds && l.keyIds.slice(0) || (l.keyId || l.keyId === 0 ? [l.keyId] : []));
          if (r) {
            o = l.related instanceof t.Collection ? l.related.models : [l.related];
            i.each(o, function (e) {
              if (e.id || e.id === 0) {
                u.push(e.id)
              }
            })
          }
          if (u && u.length) {
            var c = [];
            o = i.map(u, function (e) {
              var t = l.relatedModel.findModel(e);
              if (!t) {
                var i = {};
                i[l.relatedModel.prototype.idAttribute] = e;
                t = l.relatedModel.findOrCreate(i, n);
                c.push(t)
              }
              return t
            }, this);
            if (l.related instanceof t.Collection && i.isFunction(l.related.url)) {
              s = l.related.url(o)
            }
            if (s && s !== l.related.url()) {
              var d = i.defaults({
                error: function () {
                  var e = arguments;
                  i.each(c, function (t) {
                    t.trigger("destroy", t, t.collection, n);
                    n.error && n.error.apply(t, e)
                  })
                },
                url: s
              }, n);
              a = [l.related.fetch(d)]
            }
            else {
              a = i.map(o, function (e) {
                var t = i.defaults({
                  error: function () {
                    if (i.contains(c, e)) {
                      e.trigger("destroy", e, e.collection, n);
                      n.error && n.error.apply(e, arguments)
                    }
                  }
                }, n);
                return e.fetch(t)
              }, this)
            }
          }
          return a
        },
        get: function (e) {
          var n = t.Model.prototype.get.call(this, e);
          if (!this.dotNotation || e.indexOf(".") === -1) {
            return n
          }
          var r = e.split(".");
          var o = i.reduce(r, function (e, n) {
            if (i.isNull(e) || i.isUndefined(e)) {
              return undefined
            }
            else if (e instanceof t.Model) {
              return t.Model.prototype.get.call(e, n)
            }
            else if (e instanceof t.Collection) {
              return t.Collection.prototype.at.call(e, n)
            }
            else {
              throw new Error("Attribute must be an instanceof Backbone.Model or Backbone.Collection. Is: " + e + ", currentSplit: " + n)
            }
          }, this);
          if (n !== undefined && o !== undefined) {
            throw new Error("Ambiguous result for '" + e + "'. direct result: " + n + ", dotNotation: " + o)
          }
          return n || o
        },
        _getNewId: function (e) {
          var t = this,
            i = null,
            n = "",
            r = false,
            o, s = t.keydefs.PRIMARY;
          if (s) {
            s.forEach(function (i, s) {
              o = e[i] || t.attributes && t.attributes[i];
              if (o || o === 0) {
                n += (n ? t.compoundKeyDelim : "") + (e[i] || t.attributes && t.attributes[i])
              }
              else {
                r = true
              }
            });
            if (!r) i = n
          }
          if (!i) {
            i = e && t.idAttribute in e && e[t.idAttribute]
          }
          return i
        },
        set: function (e, n, r) {
          t.Relational.eventQueue.block();
          var o;
          if (i.isObject(e) || e == null) {
            o = e;
            r = n
          }
          else {
            o = {};
            o[e] = n
          }
          try {
            var s = this.id,
              a = this._getNewId(o);
            t.Relational.store.checkId(this, a);
            var l = t.Model.prototype.set.apply(this, arguments);
            if (a) {
              this.id = a
            }
            if (!this._isInitialized && !this.isLocked()) {
              this.constructor.initializeModelHierarchy();
              if (a || a === 0) {
                t.Relational.store.register(this)
              }
              this.initializeRelations(r)
            }
            else if (a && a !== s) {
              t.Relational.store.update(this)
            }
            if (o) {
              this.updateRelations(o, r)
            }
          }
          finally {
            t.Relational.eventQueue.unblock()
          }
          return l
        },
        clone: function () {
          var e = i.clone(this.attributes);
          if (!i.isUndefined(e[this.idAttribute])) {
            e[this.idAttribute] = null
          }
          i.each(this.getRelations(), function (t) {
            delete e[t.key]
          });
          return new this.constructor(e)
        },
        toJSON: function (e) {
          if (this.isLocked()) {
            return this.id
          }
          this.acquire();
          var n = t.Model.prototype.toJSON.call(this, e);
          if (this.constructor._superModel && !(this.constructor._subModelTypeAttribute in n)) {
            n[this.constructor._subModelTypeAttribute] = this.constructor._subModelTypeValue
          }
          i.each(this._relations, function (r) {
            var o = n[r.key],
              s = r.options.includeInJSON,
              a = null;
            if (s === true) {
              if (o && i.isFunction(o.toJSON)) {
                a = o.toJSON(e)
              }
            }
            else if (i.isString(s)) {
              if (o instanceof t.Collection) {
                a = o.pluck(s)
              }
              else if (o instanceof t.Model) {
                a = o.get(s)
              }
              if (s === r.relatedModel.prototype.idAttribute) {
                if (r instanceof t.HasMany) {
                  a = a.concat(r.keyIds)
                }
                else if (r instanceof t.HasOne) {
                  a = a || r.keyId;
                  if (!a && !i.isObject(r.keyContents)) {
                    a = r.keyContents || null
                  }
                }
              }
            }
            else if (i.isArray(s)) {
              if (o instanceof t.Collection) {
                a = [];
                o.each(function (e) {
                  var t = {};
                  i.each(s, function (i) {
                    t[i] = e.get(i)
                  });
                  a.push(t)
                })
              }
              else if (o instanceof t.Model) {
                a = {};
                i.each(s, function (e) {
                  a[e] = o.get(e)
                })
              }
            }
            else {
              delete n[r.key]
            }
            if (s) {
              n[r.keyDestination] = a
            }
            if (r.keyDestination !== r.key) {
              delete n[r.key]
            }
          });
          this.release();
          return n
        }
      }, {
        setup: function (e) {
          this.prototype.relations = (this.prototype.relations || []).slice(0);
          this._subModels = {};
          this._superModel = null;
          if (this.prototype.hasOwnProperty("subModelTypes")) {
            t.Relational.store.addSubModels(this.prototype.subModelTypes, this)
          }
          else {
            this.prototype.subModelTypes = null
          }
          i.each(this.prototype.relations || [], function (e) {
            if (!e.model) {
              e.model = this
            }
            if (e.reverseRelation && e.model === this) {
              var n = true;
              if (i.isString(e.relatedModel)) {
                var r = t.Relational.store.getObjectByName(e.relatedModel);
                n = r && r.prototype instanceof t.RelationalModel
              }
              if (n) {
                t.Relational.store.initializeRelation(null, e)
              }
              else if (i.isString(e.relatedModel)) {
                t.Relational.store.addOrphanRelation(e)
              }
            }
          }, this);
          return this
        },
        build: function (e, t) {
          this.initializeModelHierarchy();
          var i = this._findSubModelType(this, e) || this;
          return new i(e, t)
        },
        _findSubModelType: function (e, t) {
          if (e._subModels && e.prototype.subModelTypeAttribute in t) {
            var i = t[e.prototype.subModelTypeAttribute];
            var n = e._subModels[i];
            if (n) {
              return n
            }
            else {
              for (i in e._subModels) {
                n = this._findSubModelType(e._subModels[i], t);
                if (n) {
                  return n
                }
              }
            }
          }
          return null
        },
        initializeModelHierarchy: function () {
          this.inheritRelations();
          if (this.prototype.subModelTypes) {
            var e = i.keys(this._subModels);
            var n = i.omit(this.prototype.subModelTypes, e);
            i.each(n, function (e) {
              var i = t.Relational.store.getObjectByName(e);
              i && i.initializeModelHierarchy()
            })
          }
        },
        inheritRelations: function () {
          if (!i.isUndefined(this._superModel) && !i.isNull(this._superModel)) {
            return
          }
          t.Relational.store.setupSuperModel(this);
          if (this._superModel) {
            this._superModel.inheritRelations();
            if (this._superModel.prototype.relations) {
              var e = i.filter(this._superModel.prototype.relations || [], function (e) {
                return !i.any(this.prototype.relations || [], function (t) {
                  return e.relatedModel === t.relatedModel && e.key === t.key
                }, this)
              }, this);
              this.prototype.relations = e.concat(this.prototype.relations)
            }
          }
          else {
            this._superModel = false
          }
        },
        findOrCreate: function (e, t) {
          t || (t = {});
          var n = i.isObject(e) && t.parse && this.prototype.parse ? this.prototype.parse(i.clone(e)) : e;
          var r = this.findModel(n);
          if (i.isObject(e)) {
            if (r && t.merge !== false) {
              delete t.collection;
              delete t.url;
              r.set(n, t)
            }
            else if (!r && t.create !== false) {
              r = this.build(e, t)
            }
          }
          return r
        },
        find: function (e, t) {
          t || (t = {});
          t.create = false;
          return this.findOrCreate(e, t)
        },
        findModel: function (e) {
          return t.Relational.store.find(this, e)
        }
      });
      i.extend(t.RelationalModel.prototype, t.Semaphore);
      var n = t.Collection.prototype.__initialize = t.Collection.prototype.initialize;
      t.Collection.prototype.initialize = function (e, t) {
        n.apply(this, arguments);
        this.createSavepoint();
        this.on("sync", this.createSavepoint, this)
      };
      t.Collection.prototype.createSavepoint = function () {
        this._added = [];
        this._removed = [];
        return this;
        i.each(this.models, function (e) {
          e.createSavepoint()
        })
      };
      t.Collection.prototype.rollback = function (e) {
        e = e || {};
        this.add(this._removed, {
          silent: true
        });
        i.each(this.models, function (e) {
          e.rollback()
        });
        this.remove(this._added, {
          silent: true
        });
        this.createSavepoint();
        if (!e.silent) this.trigger("rollback", this, e);
        return this
      };
      t.Collection.prototype.hasChangedDeepSinceSavepoint = function () {
        if (this._removed.length || this._added.length) {
          return true
        }
        return !!i.find(this.models, function (e) {
          return e.hasChangedDeepSinceSavepoint()
        })
      };
      t.Collection.prototype.commit = function (e) {
        var n = [];
        if (this.hasChangedDeepSinceSavepoint()) {
          e = e || {};
          i.each(this._removed, function (e) {
            n.push(e.destroy())
          });
          i.each(this.models, function (e) {
            n.push(e.commit())
          });
          this.createSavepoint();
          if (!e.silent) this.trigger("commit", this, e)
        }
        return t.$.when.apply(t.$, n)
      };
      t.Collection.prototype._class = "Backbone.Collection";
      t.Collection.prototype.__prepareModel = t.Collection.prototype._prepareModel;
      t.Collection.prototype._prepareModel = function (e, n) {
        var r;
        if (e instanceof t.Model) {
          if (!e.collection) {
            e.collection = this
          }
          r = e
        }
        else {
          n = n ? i.clone(n) : {};
          n.collection = this;
          if (typeof this.model.findOrCreate !== "undefined") {
            r = this.model.findOrCreate(e, n)
          }
          else {
            r = new this.model(e, n)
          }
          if (r && r.validationError) {
            this.trigger("invalid", this, e, n);
            r = false
          }
        }
        return r
      };
      var r = t.Collection.prototype.__set = t.Collection.prototype.set;
      t.Collection.prototype.set = function (e, n) {
        if (!(this.model.prototype instanceof t.RelationalModel)) {
          return r.apply(this, arguments)
        }
        if (n && n.parse) {
          e = this.parse(e, n)
        }
        var o = !i.isArray(e),
          s = [],
          a = [];
        e = o ? e ? [e] : [] : i.clone(e);
        i.each(e, function (e) {
          if (!(e instanceof t.Model)) {
            e = t.Collection.prototype._prepareModel.call(this, e, n)
          }
          if (e) {
            a.push(e);
            if (!(this.get(e) || this.get(e.cid))) {
              s.push(e)
            }
            else if (e.id != null) {
              this._byId[e.id] = e
            }
          }
        }, this);
        a = o ? a.length ? a[0] : null : a;
        var l = r.call(this, a, i.defaults({
          parse: false
        }, n));
        i.each(s, function (e) {
          if (this.get(e) || this.get(e.cid)) {
            this.trigger("relational:add", e, this, n)
          }
        }, this);
        return l
      };
      var o = t.Collection.prototype.__get = t.Collection.prototype.get;
      t.Collection.prototype.get = function (e) {
        if (!(this.model.prototype instanceof t.RelationalModel)) {
          return o.apply(this, arguments)
        }
        if (e == null) return void 0;
        var i = t.Relational.store.resolveIdForItem(this.model, e);
        return this._byId[i != null ? i : e.cid || e]
      };
      var s = t.Collection.prototype.__add = t.Collection.prototype.add;
      t.Collection.prototype.add = function (e, n) {
        if (!(this.model.prototype instanceof t.RelationalModel)) {
          return s.apply(this, arguments)
        }
        var r = s.call(this, e, i.defaults(n || {}, {
          add: true,
          merge: false,
          remove: false
        }));
        this._added = this._added.concat(r);
        return r
      };
      var a = t.Collection.prototype.__remove = t.Collection.prototype.remove;
      t.Collection.prototype.remove = function (e, n) {
        if (!(this.model.prototype instanceof t.RelationalModel)) {
          this._removed = this._removed.concat(e);
          return a.apply(this, arguments)
        }
        var r = !i.isArray(e),
          o = [];
        e = r ? e ? [e] : [] : i.clone(e);
        n || (n = {});
        i.each(e, function (e) {
          e = this.get(e) || e && this.get(e.cid);
          e && o.push(e)
        }, this);
        var s = a.call(this, r ? o.length ? o[0] : null : o, n);
        i.each(o, function (e) {
          this.trigger("relational:remove", e, this, n)
        }, this);
        this._removed = this._removed.concat(o);
        return s
      };
      var l = t.Collection.prototype.__reset = t.Collection.prototype.reset;
      t.Collection.prototype.reset = function (e, n) {
        n = i.extend({
          merge: true
        }, n);
        var r = l.call(this, e, n);
        this._added = [];
        this._removed = [];
        if (this.model.prototype instanceof t.RelationalModel) {
          this.trigger("relational:reset", this, n)
        }
        this.createSavepoint();
        return r
      };
      var u = t.Collection.prototype.__sort = t.Collection.prototype.sort;
      t.Collection.prototype.sort = function (e) {
        var i = u.call(this, e);
        if (this.model.prototype instanceof t.RelationalModel) {
          this.trigger("relational:reset", this, e)
        }
        return i
      };
      var c = t.Collection.prototype.__trigger = t.Collection.prototype.trigger;
      t.Collection.prototype.trigger = function (e) {
        if (!(this.model.prototype instanceof t.RelationalModel)) {
          return c.apply(this, arguments)
        }
        if (e === "add" || e === "remove" || e === "reset" || e === "sort") {
          var n = this,
            r = arguments;
          if (i.isObject(r[3])) {
            r = i.toArray(r);
            r[3] = i.clone(r[3])
          }
          t.Relational.eventQueue.add(function () {
            c.apply(n, r)
          })
        }
        else {
          c.apply(this, arguments)
        }
        return this
      };
      t.RelationalModel.extend = function (e, i) {
        var n = t.Model.extend.apply(this, arguments);
        n.setup(this);
        return n
      }
    })
  },
  51: function (e, t, i) {
    (function (t) {
      if (true) {
        e.exports = t(i(5), i(3))
      }
      else if (typeof define === "function" && define.amd) {
        define(["backbone", "underscore"], t)
      }
    })(function (e, t) {
      e.Validation = function (t) {
        "use strict";
        var i = {
          forceUpdate: false,
          selector: "name",
          labelFormatter: "sentenceCase",
          valid: Function.prototype,
          invalid: Function.prototype
        };
        var n = {
          formatLabel: function (e, t) {
            return u[i.labelFormatter](e, t)
          },
          format: function () {
            var e = Array.prototype.slice.call(arguments),
              t = e.shift();
            return t.replace(/\{(\d+)\}/g, function (t, i) {
              return typeof e[i] !== "undefined" ? e[i] : t
            })
          }
        };
        var r = function (i, n, o) {
          n = n || {};
          o = o || "";
          t.each(i, function (t, s) {
            if (i.hasOwnProperty(s)) {
              if (t && typeof t === "object" && !(t instanceof Array || t instanceof Date || t instanceof RegExp || t instanceof e.Model || t instanceof e.Collection)) {
                r(t, n, o + s + ".")
              }
              else {
                n[o + s] = t
              }
            }
          });
          return n
        };
        var o = function () {
          var e = function (e) {
            return t.reduce(t.keys(t.result(e, "validation") || {}), function (e, t) {
              e[t] = void 0;
              return e
            }, {})
          };
          var o = function (e, i) {
            var n = e.validation ? t.result(e, "validation")[i] || {} : {};
            if (t.isFunction(n) || t.isString(n)) {
              n = {
                fn: n
              }
            }
            if (!t.isArray(n)) {
              n = [n]
            }
            return t.reduce(n, function (e, i) {
              t.each(t.without(t.keys(i), "msg"), function (t) {
                e.push({
                  fn: c[t],
                  val: i[t],
                  msg: i.msg
                })
              });
              return e
            }, [])
          };
          var a = function (e, i, r, s) {
            return t.reduce(o(e, i), function (o, a) {
              var l = t.extend({}, n, c),
                u = a.fn.call(l, r, i, a.val, e, s);
              if (u === false || o === false) {
                return false
              }
              if (u && !o) {
                return t.result(a, "msg") || u
              }
              return o
            }, "")
          };
          var l = function (e, i) {
            var n, o = {},
              s = true,
              l = t.clone(i),
              u = r(i);
            t.each(u, function (t, i) {
              n = a(e, i, t, l);
              if (n) {
                o[i] = n;
                s = false
              }
            });
            return {
              invalidAttrs: o,
              isValid: s
            }
          };
          var u = function (i, n) {
            return {
              preValidate: function (e, i) {
                var n = this,
                  r = {},
                  o;
                if (t.isObject(e)) {
                  t.each(e, function (e, t) {
                    o = n.preValidate(t, e);
                    if (o) {
                      r[t] = o
                    }
                  });
                  return t.isEmpty(r) ? undefined : r
                }
                else {
                  return a(this, e, i, t.extend({}, this.attributes))
                }
              },
              isValid: function (e) {
                var i = r(this.attributes);
                if (t.isString(e)) {
                  return !a(this, e, i[e], t.extend({}, this.attributes))
                }
                if (t.isArray(e)) {
                  return t.reduce(e, function (e, n) {
                    return e && !a(this, n, i[n], t.extend({}, this.attributes))
                  }, true, this)
                }
                if (e === true) {
                  this.validate()
                }
                return this.validation ? this._isValid : true
              },
              validate: function (o, s) {
                var a = this,
                  u = !o,
                  c = t.extend({}, n, s),
                  d = e(a),
                  f = t.extend({}, d, a.attributes, o),
                  h = r(o || f),
                  p = l(a, f);
                a._isValid = p.isValid;
                t.each(d, function (e, t) {
                  var n = p.invalidAttrs.hasOwnProperty(t);
                  if (!n) {
                    c.valid(i, t, c.selector)
                  }
                });
                t.each(d, function (e, t) {
                  var n = p.invalidAttrs.hasOwnProperty(t),
                    r = h.hasOwnProperty(t);
                  if (n && (r || u)) {
                    c.invalid(i, t, p.invalidAttrs[t], c.selector)
                  }
                });
                t.defer(function () {
                  a.trigger("validated", a._isValid, a, p.invalidAttrs);
                  a.trigger("validated:" + (a._isValid ? "valid" : "invalid"), a, p.invalidAttrs)
                });
                if (!c.forceUpdate && t.intersection(t.keys(p.invalidAttrs), t.keys(h)).length > 0) {
                  return p.invalidAttrs
                }
              }
            }
          };
          var d = function (e, i, n) {
            t.extend(i, u(e, n))
          };
          var f = function (e) {
            delete e.validate;
            delete e.preValidate;
            delete e.isValid
          };
          var h = function (e) {
            d(this.view, e, this.options)
          };
          var p = function (e) {
            f(e)
          };
          return {
            version: "0.9.1",
            configure: function (e) {
              t.extend(i, e)
            },
            bind: function (e, n) {
              n = t.extend({}, i, s, n);
              var r = n.model || e.model,
                o = n.collection || e.collection;
              if (typeof r === "undefined" && typeof o === "undefined") {
                throw "Before you execute the binding your view must have a model or a collection.\n" + "See http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information."
              }
              if (r) {
                d(e, r, n)
              }
              else if (o) {
                o.each(function (t) {
                  d(e, t, n)
                });
                o.bind("add", h, {
                  view: e,
                  options: n
                });
                o.bind("remove", p)
              }
            },
            unbind: function (e, i) {
              i = t.extend({}, i);
              var n = i.model || e.model,
                r = i.collection || e.collection;
              if (n) {
                f(n)
              }
              else if (r) {
                r.each(function (e) {
                  f(e)
                });
                r.unbind("add", h);
                r.unbind("remove", p)
              }
            },
            mixin: u(null, i)
          }
        }();
        var s = o.callbacks = {
          valid: function (e, t, i) {
            e.$("[" + i + '~="' + t + '"]').removeClass("invalid").removeAttr("data-error")
          },
          invalid: function (e, t, i, n) {
            e.$("[" + n + '~="' + t + '"]').addClass("invalid").attr("data-error", i)
          }
        };
        var a = o.patterns = {
          digits: /^\d+$/,
          number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
          email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
          url: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,
          domain: /^(?:[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9])*\.)+[a-zA-Z]{2,6}$/
        };
        var l = o.messages = {
          required: "{0} is required",
          acceptance: "{0} must be accepted",
          min: "{0} must be greater than or equal to {1}",
          max: "{0} must be less than or equal to {1}",
          range: "{0} must be between {1} and {2}",
          length: "{0} must be {1} characters",
          minLength: "{0} must be at least {1} characters",
          maxLength: "{0} must be at most {1} characters",
          rangeLength: "{0} must be between {1} and {2} characters",
          oneOf: "{0} must be one of: {1}",
          equalTo: "{0} must be the same as {1}",
          digits: "{0} must only contain digits",
          number: "{0} must be a number",
          int: "{0} must be a whole number",
          email: "{0} must be a valid email",
          url: "{0} must be a valid url",
          domain: "{0} must be a valid domain",
          inlinePattern: "{0} is invalid"
        };
        var u = o.labelFormatters = {
          none: function (e) {
            return e
          },
          sentenceCase: function (e) {
            return e.replace(/(?:^\w|[A-Z]|\b\w)/g, function (e, t) {
              return t === 0 ? e.toUpperCase() : " " + e.toLowerCase()
            }).replace(/_/g, " ")
          },
          label: function (e, t) {
            return t.labels && t.labels[e] || u.sentenceCase(e, t)
          }
        };
        var c = o.validators = function () {
          var e = String.prototype.trim ? function (e) {
            return e === null ? "" : String.prototype.trim.call(e)
          } : function (e) {
            var t = /^\s+/,
              i = /\s+$/;
            return e === null ? "" : e.toString().replace(t, "").replace(i, "")
          };
          var i = function (e) {
            return t.isNumber(e) || t.isString(e) && e.match(a.number)
          };
          var n = function (i) {
            return !(t.isNull(i) || t.isUndefined(i) || t.isString(i) && e(i) === "" || t.isArray(i) && t.isEmpty(i))
          };
          return {
            fn: function (e, i, n, r, o) {
              if (t.isString(n)) {
                n = r[n]
              }
              return n.call(r, e, i, o)
            },
            required: function (e, i, r, o, s) {
              var a = t.isFunction(r) ? r.call(o, e, i, s) : r;
              if (!a && !n(e)) {
                return false
              }
              if (a && !n(e)) {
                return this.format(l.required, this.formatLabel(i, o))
              }
            },
            acceptance: function (e, i, n, r) {
              if (e !== "true" && (!t.isBoolean(e) || e === false)) {
                return this.format(l.acceptance, this.formatLabel(i, r))
              }
            },
            min: function (e, t, n, r) {
              if (!i(e) || e < n) {
                return this.format(l.min, this.formatLabel(t, r), n)
              }
            },
            max: function (e, t, n, r) {
              if (!i(e) || e > n) {
                return this.format(l.max, this.formatLabel(t, r), n)
              }
            },
            range: function (e, t, n, r) {
              if (!i(e) || e < n[0] || e > n[1]) {
                return this.format(l.range, this.formatLabel(t, r), n[0], n[1])
              }
            },
            length: function (e, i, n, r) {
              if (!t.isString(e) || e.length !== n) {
                return this.format(l.length, this.formatLabel(i, r), n)
              }
            },
            minLength: function (e, i, n, r) {
              if (!t.isString(e) || e.length < n) {
                return this.format(l.minLength, this.formatLabel(i, r), n)
              }
            },
            maxLength: function (e, i, n, r) {
              if (!t.isString(e) || e.length > n) {
                return this.format(l.maxLength, this.formatLabel(i, r), n)
              }
            },
            rangeLength: function (e, i, n, r) {
              if (!t.isString(e) || e.length < n[0] || e.length > n[1]) {
                return this.format(l.rangeLength, this.formatLabel(i, r), n[0], n[1])
              }
            },
            oneOf: function (e, i, n, r) {
              if (!t.include(n, e)) {
                return this.format(l.oneOf, this.formatLabel(i, r), n.join(", "))
              }
            },
            equalTo: function (e, t, i, n, r) {
              if (e !== r[i]) {
                return this.format(l.equalTo, this.formatLabel(t, n), this.formatLabel(i, n))
              }
            },
            pattern: function (e, t, i, r) {
              if (!n(e) || !e.toString().match(a[i] || i)) {
                return this.format(l[i] || l.inlinePattern, this.formatLabel(t, r), i)
              }
            },
            url: function (e, t, i, n) {
              if (!a.url.test(e)) {
                return this.format(l.url, this.formatLabel(t, n))
              }
            },
            domain: function (e, t, i, n) {
              if (!a.domain.test(e)) {
                return this.format(l.domain, this.formatLabel(t, n))
              }
            },
            email: function (e, t, i, n) {
              if (!a.email.test(e)) {
                return this.format(l.email, this.formatLabel(t, n))
              }
            },
            number: function (e, t, i, n) {
              if (isNaN(parseFloat(e)) || !isFinite(e)) {
                return this.format(l.number, this.formatLabel(t, n))
              }
            },
            int: function (e, t, i, n) {
              if (e % 1 !== 0) {
                return this.format(l.int, this.formatLabel(t, n))
              }
            }
          }
        }();
        t.each(c, function (e, i) {
          c[i] = t.bind(c[i], t.extend({}, n, c))
        });
        return o
      }(t);
      return e.Validation
    })
  },
  56: function (e, t, i) {
    var n, r;
    !(n = [i(2)], r = function (e) {
      var t = {
        htmlDecode: function (e) {
          var t = document.createElement("div");
          t.innerHTML = e;
          return t.childNodes.length === 0 ? "" : t.childNodes[0].nodeValue
        },
        isIE: function () {
          return /(MSIE|Trident)/.test(navigator.userAgent)
        },
        isEdge: function () {
          return /(edge)/.test(navigator.userAgent.toLowerCase())
        },
        isChrome: function () {
          return /(Chrome)/.test(navigator.userAgent)
        },
        getURLParameter: function (e, t) {
          var i = t || window.location.search.substring(1);
          var n = i.split("&");
          for (var r = 0; r < n.length; r++) {
            var o = n[r].split("=");
            if (o[0] == e) {
              return decodeURIComponent(o[1])
            }
          }
          return ""
        },
        splitName: function (e) {
          var t;
          if (/^[^\s]*\s[^\s]*\s?$/i.test(e)) {
            return e.split(" ")
          }
          else if (t = e.match(/^([^\s]*\s[^\s]\.?)\s(.*)\s?$/i)) {
            return t.slice(1)
          }
          else if (t = e.match(/^(.*)\s([^\s]*)\s(jr|sr|ii|iii|iv|v|vi|vii|viii|ix|x)\.?\s?$/i)) {
            return t.slice(1)
          }
          else if (t = e.match(/^([^\s]*\s[^\s]*)\s(.*)\s?$/i)) {
            return t.slice(1)
          }
          else {
            return [e, ""]
          }
        },
        isValidEmail: function (e) {
          return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
        },
        numberWithCommas: function (e) {
          return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        getSiteDomain: function () {
          var t = false;
          if (e.Location.custom_domain) {
            t = e.Location.custom_domain
          }
          else if (e.Location.weebly_subdomain) {
            t = e.Location.weebly_subdomain + ".weebly.com"
          }
          return t
        },
        generateTimeInterval: function (e, t) {
          var i, n, r = [],
            e = e || 12,
            t = t || 30;
          for (i = 0; i <= 23; i++) {
            for (n = 0; n < 60; n += t) {
              var o = ("00" + n).slice(-2),
                s = i,
                a = "";
              if (e === 12) {
                a = "am";
                if (i === 0) {
                  s = 12
                }
                else if (i === 12) {
                  s = i;
                  a = "pm"
                }
                else if (i > 12) {
                  s = i - e;
                  a = "pm"
                }
              }
              else {
                s = ("00" + i).slice(-2)
              }
              r.push(s + ":" + o + " " + a)
            }
          }
          return r
        },
        hasValidUrl: function (e) {
          return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(e)
        },
        isCyclic: function (e) {
          try {
            JSON.stringify(e, function (e, t) {
              if (typeof t === "object") {
                return t
              }
              return undefined
            })
          }
          catch (e) {
            if (e instanceof TypeError) {
              return true
            }
            throw e
          }
          return false
        },
        setDropEffect: function (e) {
          var t;
          if (e.originalEvent) {
            e = e.originalEvent
          }
          if (e.dataTransfer) {
            t = ["move", "linkMove"].indexOf(e.dataTransfer.effectAllowed) !== -1;
            e.dataTransfer.dropEffect = t ? "move" : "copy"
          }
        },
        getCookie: function (e) {
          var t = "; " + document.cookie;
          var i = t.split("; " + e + "=");
          if (i.length >= 2) {
            return unescape(i.pop().split(";").shift())
          }
          return null
        },
        setCookie: function (e, t, i) {
          var n = "";
          if (i) {
            var r = new Date;
            r.setTime(r.getTime() + i * 24 * 60 * 60 * 1e3);
            n = "; expires=" + r.toUTCString()
          }
          document.cookie = e + "=" + t + n + "; path=/"
        },
        eraseCookie: function (e) {
          this.setCookie(e, "", -1)
        },
        roundNumber: function (e, t) {
          return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
        },
        getNestedValue: function (e, t, i) {
          var n = e;
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            if (o in n) {
              n = n[o]
            }
            else {
              return i
            }
          }
          return n
        },
        isProtocolSecure: function () {
          return document.location.protocol == "https:"
        },
        mapObjectValues: function (e, t) {
          var i = [e];
          while (i.length) {
            var n = i[0];
            var r = Object.keys(n);
            r.forEach(function (e) {
              if (window._.isObject(n[e])) {
                i.push(n[e])
              }
              else {
                n[e] = t(n[e]);
                if (window._.isUndefined(n[e])) {
                  delete n[e]
                }
              }
            });
            i.shift()
          }
          return e
        },
        getFrontDoorOnboardingLink: function (e) {
          return e ? "/app/front-door/users/" + e + "/getting-started" : "/"
        }
      };
      return t
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  63: function (e, t, i) {
    var n, r;
    !(n = [i(2)], r = function (e) {
      return {
        chromeless: false,
        content_field_js_render: false,
        defaultPlaceholderText: e.stl("javascript.editor.config_1"),
        areaDefaultPlaceholderText: {
          phone: e.stl("javascript.editor.config_2"),
          headline: e.stl("javascript.editor.config_3"),
          "headline-paragraph": e.stl("javascript.editor.config_4")
        }
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  64: function (e, t, i) {
    (function (t, n) {
      true ? e.exports = n(i(3), i(5)) : typeof define === "function" && define.amd ? define(["underscore", "backbone"], n) : (t.Backbone = t.Backbone || {}, t.Backbone.Radio = n(t._, t.Backbone))
    })(this, function (e, t) {
      "use strict";
      e = "default" in e ? e["default"] : e;
      t = "default" in t ? t["default"] : t;
      var i = {};
      i.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (e) {
        return typeof e
      } : function (e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol ? "symbol" : typeof e
      };
      i;
      var n = t.Radio;
      var r = t.Radio = {};
      r.VERSION = "1.0.4";
      r.noConflict = function () {
        t.Radio = n;
        return this
      };
      r.DEBUG = false;
      r._debugText = function (e, t, i) {
        return e + (i ? " on the " + i + " channel" : "") + ': "' + t + '"'
      };
      r.debugLog = function (e, t, i) {
        if (r.DEBUG && console && console.warn) {
          console.warn(r._debugText(e, t, i))
        }
      };
      var o = /\s+/;
      r._eventsApi = function (t, n, r, s) {
        if (!r) {
          return false
        }
        var a = {};
        if ((typeof r === "undefined" ? "undefined" : i.typeof(r)) === "object") {
          for (var l in r) {
            var u = t[n].apply(t, [l, r[l]].concat(s));
            o.test(l) ? e.extend(a, u) : a[l] = u
          }
          return a
        }
        if (o.test(r)) {
          var c = r.split(o);
          for (var d = 0, f = c.length; d < f; d++) {
            a[c[d]] = t[n].apply(t, [c[d]].concat(s))
          }
          return a
        }
        return false
      };
      r._callHandler = function (e, t, i) {
        var n = i[0],
          r = i[1],
          o = i[2];
        switch (i.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n);
          case 2:
            return e.call(t, n, r);
          case 3:
            return e.call(t, n, r, o);
          default:
            return e.apply(t, i)
        }
      };

      function s(e, t, i, n) {
        var r = e[t];
        if ((!i || i === r.callback || i === r.callback._callback) && (!n || n === r.context)) {
          delete e[t];
          return true
        }
      }

      function a(t, i, n, r) {
        t || (t = {});
        var o = i ? [i] : e.keys(t);
        var a = false;
        for (var l = 0, u = o.length; l < u; l++) {
          i = o[l];
          if (!t[i]) {
            continue
          }
          if (s(t, i, n, r)) {
            a = true
          }
        }
        return a
      }
      var l = {};

      function u(t) {
        return l[t] || (l[t] = e.bind(r.log, r, t))
      }
      e.extend(r, {
        log: function t(i, n) {
          if (typeof console === "undefined") {
            return
          }
          var r = e.toArray(arguments).slice(2);
          console.log("[" + i + '] "' + n + '"', r)
        },
        tuneIn: function e(t) {
          var i = r.channel(t);
          i._tunedIn = true;
          i.on("all", u(t));
          return this
        },
        tuneOut: function e(t) {
          var i = r.channel(t);
          i._tunedIn = false;
          i.off("all", u(t));
          delete l[t];
          return this
        }
      });

      function c(t) {
        return e.isFunction(t) ? t : function () {
          return t
        }
      }
      r.Requests = {
        request: function t(i) {
          var n = e.toArray(arguments).slice(1);
          var o = r._eventsApi(this, "request", i, n);
          if (o) {
            return o
          }
          var s = this.channelName;
          var a = this._requests;
          if (s && this._tunedIn) {
            r.log.apply(this, [s, i].concat(n))
          }
          if (a && (a[i] || a["default"])) {
            var l = a[i] || a["default"];
            n = a[i] ? n : arguments;
            return r._callHandler(l.callback, l.context, n)
          }
          else {
            r.debugLog("An unhandled request was fired", i, s)
          }
        },
        reply: function e(t, i, n) {
          if (r._eventsApi(this, "reply", t, [i, n])) {
            return this
          }
          this._requests || (this._requests = {});
          if (this._requests[t]) {
            r.debugLog("A request was overwritten", t, this.channelName)
          }
          this._requests[t] = {
            callback: c(i),
            context: n || this
          };
          return this
        },
        replyOnce: function t(i, n, o) {
          if (r._eventsApi(this, "replyOnce", i, [n, o])) {
            return this
          }
          var s = this;
          var a = e.once(function () {
            s.stopReplying(i);
            return c(n).apply(this, arguments)
          });
          return this.reply(i, a, o)
        },
        stopReplying: function e(t, i, n) {
          if (r._eventsApi(this, "stopReplying", t)) {
            return this
          }
          if (!t && !i && !n) {
            delete this._requests
          }
          else if (!a(this._requests, t, i, n)) {
            r.debugLog("Attempted to remove the unregistered request", t, this.channelName)
          }
          return this
        }
      };
      r._channels = {};
      r.channel = function (e) {
        if (!e) {
          throw new Error("You must provide a name for the channel.")
        }
        if (r._channels[e]) {
          return r._channels[e]
        }
        else {
          return r._channels[e] = new r.Channel(e)
        }
      };
      r.Channel = function (e) {
        this.channelName = e
      };
      e.extend(r.Channel.prototype, t.Events, r.Requests, {
        reset: function e() {
          this.off();
          this.stopListening();
          this.stopReplying();
          return this
        }
      });
      var d;
      var f;
      var h = [t.Events, r.Requests];
      e.each(h, function (t) {
        e.each(t, function (t, i) {
          r[i] = function (t) {
            f = e.toArray(arguments).slice(1);
            d = this.channel(t);
            return d[i].apply(d, f)
          }
        })
      });
      r.reset = function (t) {
        var i = !t ? this._channels : [this._channels[t]];
        e.each(i, function (e) {
          e.reset()
        })
      };
      return r
    })
  },
  66: function (e, t, i) {
    var n, r, o;
    (function i(s, a) {
      if (typeof t === "object" && t && typeof t.nodeName !== "string") {
        a(t)
      }
      else if (true) {
        !(r = [t], n = a, o = typeof n === "function" ? n.apply(t, r) : n, o !== undefined && (e.exports = o))
      }
      else {
        s.Mustache = {};
        a(Mustache)
      }
    })(this, function e(t) {
      var i = Object.prototype.toString;
      var n = Array.isArray || function e(t) {
        return i.call(t) === "[object Array]"
      };

      function r(e) {
        return typeof e === "function"
      }

      function o(e) {
        return n(e) ? "array" : typeof e
      }

      function s(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
      }

      function a(e, t) {
        return e != null && typeof e === "object" && t in e
      }
      var l = RegExp.prototype.test;

      function u(e, t) {
        return l.call(e, t)
      }
      var c = /\S/;

      function d(e) {
        return !u(c, e)
      }
      var f = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
      };

      function h(e) {
        return String(e).replace(/[&<>"'\/]/g, function e(t) {
          return f[t]
        })
      }
      var p = /\s*/;
      var m = /\s+/;
      var v = /\s*=/;
      var g = /\s*\}/;
      var y = /#|\^|\/|>|\{|&|=|!/;

      function b(e, i) {
        if (!e) return [];
        var r = [];
        var o = [];
        var a = [];
        var l = false;
        var u = false;

        function c() {
          if (l && !u) {
            while (a.length) delete o[a.pop()]
          }
          else {
            a = []
          }
          l = false;
          u = false
        }
        var f, h, b;

        function _(e) {
          if (typeof e === "string") e = e.split(m, 2);
          if (!n(e) || e.length !== 2) throw new Error("Invalid tags: " + e);
          f = new RegExp(s(e[0]) + "\\s*");
          h = new RegExp("\\s*" + s(e[1]));
          b = new RegExp("\\s*" + s("}" + e[1]))
        }
        _(i || t.tags);
        var M = new S(e);
        var C, P, x, A, k, E;
        while (!M.eos()) {
          C = M.pos;
          x = M.scanUntil(f);
          if (x) {
            for (var I = 0, D = x.length; I < D; ++I) {
              A = x.charAt(I);
              if (d(A)) {
                a.push(o.length)
              }
              else {
                u = true
              }
              o.push(["text", A, C, C + 1]);
              C += 1;
              if (A === "\n") c()
            }
          }
          if (!M.scan(f)) break;
          l = true;
          P = M.scan(y) || "name";
          M.scan(p);
          if (P === "=") {
            x = M.scanUntil(v);
            M.scan(v);
            M.scanUntil(h)
          }
          else if (P === "{") {
            x = M.scanUntil(b);
            M.scan(g);
            M.scanUntil(h);
            P = "&"
          }
          else {
            x = M.scanUntil(h)
          }
          if (!M.scan(h)) throw new Error("Unclosed tag at " + M.pos);
          k = [P, x, C, M.pos];
          o.push(k);
          if (P === "#" || P === "^") {
            r.push(k)
          }
          else if (P === "/") {
            E = r.pop();
            if (!E) throw new Error('Unopened section "' + x + '" at ' + C);
            if (E[1] !== x) throw new Error('Unclosed section "' + E[1] + '" at ' + C)
          }
          else if (P === "name" || P === "{" || P === "&") {
            u = true
          }
          else if (P === "=") {
            _(x)
          }
        }
        E = r.pop();
        if (E) throw new Error('Unclosed section "' + E[1] + '" at ' + M.pos);
        return T(w(o))
      }

      function w(e) {
        var t = [];
        var i, n;
        for (var r = 0, o = e.length; r < o; ++r) {
          i = e[r];
          if (i) {
            if (i[0] === "text" && n && n[0] === "text") {
              n[1] += i[1];
              n[3] = i[3]
            }
            else {
              t.push(i);
              n = i
            }
          }
        }
        return t
      }

      function T(e) {
        var t = [];
        var i = t;
        var n = [];
        var r, o;
        for (var s = 0, a = e.length; s < a; ++s) {
          r = e[s];
          switch (r[0]) {
            case "#":
            case "^":
              i.push(r);
              n.push(r);
              i = r[4] = [];
              break;
            case "/":
              o = n.pop();
              o[5] = r[2];
              i = n.length > 0 ? n[n.length - 1][4] : t;
              break;
            default:
              i.push(r)
          }
        }
        return t
      }

      function S(e) {
        this.string = e;
        this.tail = e;
        this.pos = 0
      }
      S.prototype.eos = function e() {
        return this.tail === ""
      };
      S.prototype.scan = function e(t) {
        var i = this.tail.match(t);
        if (!i || i.index !== 0) return "";
        var n = i[0];
        this.tail = this.tail.substring(n.length);
        this.pos += n.length;
        return n
      };
      S.prototype.scanUntil = function e(t) {
        var i = this.tail.search(t),
          n;
        switch (i) {
          case -1:
            n = this.tail;
            this.tail = "";
            break;
          case 0:
            n = "";
            break;
          default:
            n = this.tail.substring(0, i);
            this.tail = this.tail.substring(i)
        }
        this.pos += n.length;
        return n
      };

      function _(e, t) {
        this.view = e;
        this.cache = {
          ".": this.view
        };
        this.parent = t
      }
      _.prototype.push = function e(t) {
        return new _(t, this)
      };
      _.prototype.lookup = function e(t) {
        var i = this.cache;
        var n;
        if (i.hasOwnProperty(t)) {
          n = i[t]
        }
        else {
          var o = this,
            s, l, u = false;
          while (o) {
            if (t.indexOf(".") > 0) {
              n = o.view;
              s = t.split(".");
              l = 0;
              while (n != null && l < s.length) {
                if (l === s.length - 1) u = a(n, s[l]);
                n = n[s[l++]]
              }
            }
            else {
              n = o.view[t];
              u = a(o.view, t)
            }
            if (u) break;
            o = o.parent
          }
          i[t] = n
        }
        if (r(n)) n = n.call(this.view);
        return n
      };

      function M() {
        this.cache = {}
      }
      M.prototype.clearCache = function e() {
        this.cache = {}
      };
      M.prototype.parse = function e(t, i) {
        var n = this.cache;
        var r = n[t];
        if (r == null) r = n[t] = b(t, i);
        return r
      };
      M.prototype.render = function e(t, i, n) {
        var r = this.parse(t);
        var o = i instanceof _ ? i : new _(i);
        return this.renderTokens(r, o, n, t)
      };
      M.prototype.renderTokens = function e(t, i, n, r) {
        var o = "";
        var s, a, l;
        for (var u = 0, c = t.length; u < c; ++u) {
          l = undefined;
          s = t[u];
          a = s[0];
          if (a === "#") l = this.renderSection(s, i, n, r);
          else if (a === "^") l = this.renderInverted(s, i, n, r);
          else if (a === ">") l = this.renderPartial(s, i, n, r);
          else if (a === "&") l = this.unescapedValue(s, i);
          else if (a === "name") l = this.escapedValue(s, i);
          else if (a === "text") l = this.rawValue(s);
          if (l !== undefined) o += l
        }
        return o
      };
      M.prototype.renderSection = function e(t, i, o, s) {
        var a = this;
        var l = "";
        var u = i.lookup(t[1]);

        function c(e) {
          return a.render(e, i, o)
        }
        if (!u) return;
        if (n(u)) {
          for (var d = 0, f = u.length; d < f; ++d) {
            l += this.renderTokens(t[4], i.push(u[d]), o, s)
          }
        }
        else if (typeof u === "object" || typeof u === "string" || typeof u === "number") {
          l += this.renderTokens(t[4], i.push(u), o, s)
        }
        else if (r(u)) {
          if (typeof s !== "string") throw new Error("Cannot use higher-order sections without the original template");
          u = u.call(i.view, s.slice(t[3], t[5]), c);
          if (u != null) l += u
        }
        else {
          l += this.renderTokens(t[4], i, o, s)
        }
        return l
      };
      M.prototype.renderInverted = function e(t, i, r, o) {
        var s = i.lookup(t[1]);
        if (!s || n(s) && s.length === 0) return this.renderTokens(t[4], i, r, o)
      };
      M.prototype.renderPartial = function e(t, i, n) {
        if (!n) return;
        var o = r(n) ? n(t[1]) : n[t[1]];
        if (o != null) return this.renderTokens(this.parse(o), i, n, o)
      };
      M.prototype.unescapedValue = function e(t, i) {
        var n = i.lookup(t[1]);
        if (n != null) return n
      };
      M.prototype.escapedValue = function e(i, n) {
        var r = n.lookup(i[1]);
        if (r != null) return t.escape(r)
      };
      M.prototype.rawValue = function e(t) {
        return t[1]
      };
      t.name = "mustache.js";
      t.version = "2.1.3";
      t.tags = ["{{", "}}"];
      var C = new M;
      t.clearCache = function e() {
        return C.clearCache()
      };
      t.parse = function e(t, i) {
        return C.parse(t, i)
      };
      t.render = function e(t, i, n) {
        if (typeof t !== "string") {
          throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + o(t) + '" was given as the first ' + "argument for mustache#render(template, view, partials)")
        }
        return C.render(t, i, n)
      };
      t.to_html = function e(i, n, o, s) {
        var a = t.render(i, n, o);
        if (r(s)) {
          s(a)
        }
        else {
          return a
        }
      };
      t.escape = h;
      t.Scanner = S;
      t.Context = _;
      t.Writer = M
    })
  },
  67: function (e, t, i) {
    (function (t, n) {
      if (true) {
        var r = i(3);
        var o = i(5);
        e.exports = n(r, o)
      }
      else if (typeof define === "function" && define.amd) {
        define(["underscore", "backbone"], n)
      }
    })(this, function (e, t) {
      "option strict";
      t.ChildViewContainer = function (e, t) {
        var i = function (e) {
          this._views = {};
          this._indexByModel = {};
          this._indexByCustom = {};
          this._updateLength();
          t.each(e, this.add, this)
        };
        t.extend(i.prototype, {
          add: function (e, t) {
            var i = e.cid;
            this._views[i] = e;
            if (e.model) {
              this._indexByModel[e.model.cid] = i
            }
            if (t) {
              this._indexByCustom[t] = i
            }
            this._updateLength();
            return this
          },
          findByModel: function (e) {
            return this.findByModelCid(e.cid)
          },
          findByModelCid: function (e) {
            var t = this._indexByModel[e];
            return this.findByCid(t)
          },
          findByCustom: function (e) {
            var t = this._indexByCustom[e];
            return this.findByCid(t)
          },
          findByIndex: function (e) {
            return t.values(this._views)[e]
          },
          findByCid: function (e) {
            return this._views[e]
          },
          remove: function (e) {
            var i = e.cid;
            if (e.model) {
              delete this._indexByModel[e.model.cid]
            }
            t.any(this._indexByCustom, function (e, t) {
              if (e === i) {
                delete this._indexByCustom[t];
                return true
              }
            }, this);
            delete this._views[i];
            this._updateLength();
            return this
          },
          call: function (e) {
            this.apply(e, t.tail(arguments))
          },
          apply: function (e, i) {
            t.each(this._views, function (n) {
              if (t.isFunction(n[e])) {
                n[e].apply(n, i || [])
              }
            })
          },
          _updateLength: function () {
            this.length = t.size(this._views)
          }
        });
        var n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        t.each(n, function (e) {
          i.prototype[e] = function () {
            var i = t.values(this._views);
            var n = [i].concat(t.toArray(arguments));
            return t[e].apply(t, n)
          }
        });
        return i
      }(t, e);
      return t.ChildViewContainer
    })
  },
  68: function (e, t, i) {
    (function (t, n) {
      if (true) {
        var r = i(3);
        var o = i(5);
        var s = i(70);
        var a = i(67);
        e.exports = n(r, o, s, a)
      }
      else if (typeof define === "function" && define.amd) {
        define(["underscore", "backbone", "backbone.wreqr", "backbone.babysitter"], n)
      }
    })(this, function (e, t) {
      var i = function (e, t, i) {
        "use strict";
        var n = {};
        t.Marionette = n;
        n.$ = t.$;
        var r = Array.prototype.slice;

        function o(e, t) {
          var i = new Error(e);
          i.name = t || "Error";
          throw i
        }
        n.extend = t.Model.extend;
        n.getOption = function (e, t) {
          if (!e || !t) {
            return
          }
          var i;
          if (e.options && t in e.options && e.options[t] !== undefined) {
            i = e.options[t]
          }
          else {
            i = e[t]
          }
          return i
        };
        n.normalizeMethods = function (e) {
          var t = {},
            n;
          i.each(e, function (e, r) {
            n = e;
            if (!i.isFunction(n)) {
              n = this[n]
            }
            if (!n) {
              return
            }
            t[r] = n
          }, this);
          return t
        };
        n.normalizeUIKeys = function (e, t) {
          if (typeof e === "undefined") {
            return
          }
          i.each(i.keys(e), function (i) {
            var n = /@ui.[a-zA-Z_$0-9]*/g;
            if (i.match(n)) {
              e[i.replace(n, function (e) {
                return t[e.slice(4)]
              })] = e[i];
              delete e[i]
            }
          });
          return e
        };
        n.triggerMethod = function () {
          var e = /(^|:)(\w)/gi;

          function t(e, t, i) {
            return i.toUpperCase()
          }
          var n = function (n) {
            var r = "on" + n.replace(e, t);
            var o = this[r];
            if (i.isFunction(this.trigger)) {
              this.trigger.apply(this, arguments)
            }
            if (i.isFunction(o)) {
              return o.apply(this, i.tail(arguments))
            }
          };
          return n
        }();
        n.MonitorDOMRefresh = function (e) {
          function t(e) {
            e._isShown = true;
            r(e)
          }

          function n(e) {
            e._isRendered = true;
            r(e)
          }

          function r(e) {
            if (e._isShown && e._isRendered && o(e)) {
              if (i.isFunction(e.triggerMethod)) {
                e.triggerMethod("dom:refresh")
              }
            }
          }

          function o(t) {
            return e.contains(t.el)
          }
          return function (e) {
            e.listenTo(e, "show", function () {
              t(e)
            });
            e.listenTo(e, "render", function () {
              n(e)
            })
          }
        }(document.documentElement);
        (function (e) {
          "use strict";

          function t(e, t, n, r) {
            var s = r.split(/\s+/);
            i.each(s, function (i) {
              var r = e[i];
              if (!r) {
                o("Method '" + i + "' was configured as an event handler, but does not exist.")
              }
              e.listenTo(t, n, r)
            })
          }

          function n(e, t, i, n) {
            e.listenTo(t, i, n)
          }

          function r(e, t, n, r) {
            var o = r.split(/\s+/);
            i.each(o, function (i) {
              var r = e[i];
              e.stopListening(t, n, r)
            })
          }

          function s(e, t, i, n) {
            e.stopListening(t, i, n)
          }

          function a(e, t, n, r, o) {
            if (!t || !n) {
              return
            }
            if (i.isFunction(n)) {
              n = n.call(e)
            }
            i.each(n, function (n, s) {
              if (i.isFunction(n)) {
                r(e, t, s, n)
              }
              else {
                o(e, t, s, n)
              }
            })
          }
          e.bindEntityEvents = function (e, i, r) {
            a(e, i, r, n, t)
          };
          e.unbindEntityEvents = function (e, t, i) {
            a(e, t, i, s, r)
          }
        })(n);
        n.Callbacks = function () {
          this._deferred = n.$.Deferred();
          this._callbacks = []
        };
        i.extend(n.Callbacks.prototype, {
          add: function (e, t) {
            this._callbacks.push({
              cb: e,
              ctx: t
            });
            this._deferred.done(function (i, n) {
              if (t) {
                i = t
              }
              e.call(i, n)
            })
          },
          run: function (e, t) {
            this._deferred.resolve(t, e)
          },
          reset: function () {
            var e = this._callbacks;
            this._deferred = n.$.Deferred();
            this._callbacks = [];
            i.each(e, function (e) {
              this.add(e.cb, e.ctx)
            }, this)
          }
        });
        n.Controller = function (e) {
          this.triggerMethod = n.triggerMethod;
          this.options = e || {};
          if (i.isFunction(this.initialize)) {
            this.initialize(this.options)
          }
        };
        n.Controller.extend = n.extend;
        i.extend(n.Controller.prototype, t.Events, {
          close: function () {
            this.stopListening();
            var e = Array.prototype.slice.call(arguments);
            this.triggerMethod.apply(this, ["close"].concat(e));
            this.unbind()
          }
        });
        n.Region = function (e) {
          this.options = e || {};
          this.el = n.getOption(this, "el");
          if (!this.el) {
            o("An 'el' must be specified for a region.", "NoElError")
          }
          if (this.initialize) {
            var t = Array.prototype.slice.apply(arguments);
            this.initialize.apply(this, t)
          }
        };
        i.extend(n.Region, {
          buildRegion: function (e, t) {
            var n = i.isString(e);
            var r = i.isString(e.selector);
            var s = i.isUndefined(e.regionType);
            var a = i.isFunction(e);
            if (!a && !n && !r) {
              o("Region must be specified as a Region type, a selector string or an object with selector property")
            }
            var l, u;
            if (n) {
              l = e
            }
            if (e.selector) {
              l = e.selector;
              delete e.selector
            }
            if (a) {
              u = e
            }
            if (!a && s) {
              u = t
            }
            if (e.regionType) {
              u = e.regionType;
              delete e.regionType
            }
            if (n || a) {
              e = {}
            }
            e.el = l;
            var c = new u(e);
            if (e.parentEl) {
              c.getEl = function (t) {
                var n = e.parentEl;
                if (i.isFunction(n)) {
                  n = n()
                }
                return n.find(t)
              }
            }
            return c
          }
        });
        i.extend(n.Region.prototype, t.Events, {
          show: function (e) {
            this.ensureEl();
            var t = e.isClosed || i.isUndefined(e.$el);
            var r = e !== this.currentView;
            if (r) {
              this.close()
            }
            e.render();
            n.triggerMethod.call(this, "before:show", e);
            n.triggerMethod.call(e, "before:show");
            if (r || t) {
              this.open(e)
            }
            this.currentView = e;
            n.triggerMethod.call(this, "show", e);
            n.triggerMethod.call(e, "show")
          },
          ensureEl: function () {
            if (!this.$el || this.$el.length === 0) {
              this.$el = this.getEl(this.el)
            }
          },
          getEl: function (e) {
            return n.$(e)
          },
          open: function (e) {
            this.$el.empty().append(e.el)
          },
          close: function () {
            var e = this.currentView;
            if (!e || e.isClosed) {
              return
            }
            if (e.close) {
              e.close()
            }
            else if (e.remove) {
              e.remove()
            }
            n.triggerMethod.call(this, "close", e);
            delete this.currentView
          },
          attachView: function (e) {
            this.currentView = e
          },
          reset: function () {
            this.close();
            delete this.$el
          }
        });
        n.Region.extend = n.extend;
        n.RegionManager = function (e) {
          var t = e.Controller.extend({
            constructor: function (t) {
              this._regions = {};
              e.Controller.prototype.constructor.call(this, t)
            },
            addRegions: function (e, t) {
              var n = {};
              i.each(e, function (e, r) {
                if (i.isString(e)) {
                  e = {
                    selector: e
                  }
                }
                if (e.selector) {
                  e = i.defaults({}, e, t)
                }
                var o = this.addRegion(r, e);
                n[r] = o
              }, this);
              return n
            },
            addRegion: function (t, n) {
              var r;
              var o = i.isObject(n);
              var s = i.isString(n);
              var a = !!n.selector;
              if (s || o && a) {
                r = e.Region.buildRegion(n, e.Region)
              }
              else if (i.isFunction(n)) {
                r = e.Region.buildRegion(n, e.Region)
              }
              else {
                r = n
              }
              this._store(t, r);
              this.triggerMethod("region:add", t, r);
              return r
            },
            get: function (e) {
              return this._regions[e]
            },
            removeRegion: function (e) {
              var t = this._regions[e];
              this._remove(e, t)
            },
            removeRegions: function () {
              i.each(this._regions, function (e, t) {
                this._remove(t, e)
              }, this)
            },
            closeRegions: function () {
              i.each(this._regions, function (e, t) {
                e.close()
              }, this)
            },
            close: function () {
              this.removeRegions();
              e.Controller.prototype.close.apply(this, arguments)
            },
            _store: function (e, t) {
              this._regions[e] = t;
              this._setLength()
            },
            _remove: function (e, t) {
              t.close();
              delete this._regions[e];
              this._setLength();
              this.triggerMethod("region:remove", e, t)
            },
            _setLength: function () {
              this.length = i.size(this._regions)
            }
          });
          var n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
          i.each(n, function (e) {
            t.prototype[e] = function () {
              var t = i.values(this._regions);
              var n = [t].concat(i.toArray(arguments));
              return i[e].apply(i, n)
            }
          });
          return t
        }(n);
        n.TemplateCache = function (e) {
          this.templateId = e
        };
        i.extend(n.TemplateCache, {
          templateCaches: {},
          get: function (e) {
            var t = this.templateCaches[e];
            if (!t) {
              t = new n.TemplateCache(e);
              this.templateCaches[e] = t
            }
            return t.load()
          },
          clear: function () {
            var e;
            var t = r.call(arguments);
            var i = t.length;
            if (i > 0) {
              for (e = 0; e < i; e++) {
                delete this.templateCaches[t[e]]
              }
            }
            else {
              this.templateCaches = {}
            }
          }
        });
        i.extend(n.TemplateCache.prototype, {
          load: function () {
            if (this.compiledTemplate) {
              return this.compiledTemplate
            }
            var e = this.loadTemplate(this.templateId);
            this.compiledTemplate = this.compileTemplate(e);
            return this.compiledTemplate
          },
          loadTemplate: function (e) {
            var t = n.$(e).html();
            if (!t || t.length === 0) {
              o("Could not find template: '" + e + "'", "NoTemplateError")
            }
            return t
          },
          compileTemplate: function (e) {
            return i.template(e)
          }
        });
        n.Renderer = {
          render: function (e, t) {
            if (!e) {
              o("Cannot render the template since it's false, null or undefined.", "TemplateNotFoundError")
            }
            var i;
            if (typeof e === "function") {
              i = e
            }
            else {
              i = n.TemplateCache.get(e)
            }
            return i(t)
          }
        };
        n.View = t.View.extend({
          constructor: function (e) {
            i.bindAll(this, "render");
            if (i.isObject(this.behaviors)) {
              new n.Behaviors(this)
            }
            this.options = i.extend({}, i.result(this, "options"), i.isFunction(e) ? e.call(this) : e);
            this.events = this.normalizeUIKeys(i.result(this, "events"));
            t.View.prototype.constructor.apply(this, arguments);
            n.MonitorDOMRefresh(this);
            this.listenTo(this, "show", this.onShowCalled)
          },
          triggerMethod: n.triggerMethod,
          normalizeMethods: n.normalizeMethods,
          getTemplate: function () {
            return n.getOption(this, "template")
          },
          mixinTemplateHelpers: function (e) {
            e = e || {};
            var t = n.getOption(this, "templateHelpers");
            if (i.isFunction(t)) {
              t = t.call(this)
            }
            return i.extend(e, t)
          },
          normalizeUIKeys: function (e) {
            var t = i.result(this, "ui");
            return n.normalizeUIKeys(e, t)
          },
          configureTriggers: function () {
            if (!this.triggers) {
              return
            }
            var e = {};
            var t = this.normalizeUIKeys(i.result(this, "triggers"));
            i.each(t, function (t, n) {
              var r = i.isObject(t);
              var o = r ? t.event : t;
              e[n] = function (e) {
                if (e) {
                  var i = e.preventDefault;
                  var n = e.stopPropagation;
                  var s = r ? t.preventDefault : i;
                  var a = r ? t.stopPropagation : n;
                  if (s && i) {
                    i.apply(e)
                  }
                  if (a && n) {
                    n.apply(e)
                  }
                }
                var l = {
                  view: this,
                  model: this.model,
                  collection: this.collection
                };
                this.triggerMethod(o, l)
              }
            }, this);
            return e
          },
          delegateEvents: function (e) {
            this._delegateDOMEvents(e);
            n.bindEntityEvents(this, this.model, n.getOption(this, "modelEvents"));
            n.bindEntityEvents(this, this.collection, n.getOption(this, "collectionEvents"))
          },
          _delegateDOMEvents: function (e) {
            e = e || this.events;
            if (i.isFunction(e)) {
              e = e.call(this)
            }
            var n = {};
            var r = i.result(this, "behaviorEvents") || {};
            var o = this.configureTriggers();
            i.extend(n, r, e, o);
            t.View.prototype.delegateEvents.call(this, n)
          },
          undelegateEvents: function () {
            var e = Array.prototype.slice.call(arguments);
            t.View.prototype.undelegateEvents.apply(this, e);
            n.unbindEntityEvents(this, this.model, n.getOption(this, "modelEvents"));
            n.unbindEntityEvents(this, this.collection, n.getOption(this, "collectionEvents"))
          },
          onShowCalled: function () {},
          close: function () {
            if (this.isClosed) {
              return
            }
            var e = Array.prototype.slice.call(arguments);
            var t = this.triggerMethod.apply(this, ["before:close"].concat(e));
            if (t === false) {
              return
            }
            this.isClosed = true;
            this.triggerMethod.apply(this, ["close"].concat(e));
            this.unbindUIElements();
            this.remove()
          },
          bindUIElements: function () {
            if (!this.ui) {
              return
            }
            if (!this._uiBindings) {
              this._uiBindings = this.ui
            }
            var e = i.result(this, "_uiBindings");
            this.ui = {};
            i.each(i.keys(e), function (t) {
              var i = e[t];
              this.ui[t] = this.$(i)
            }, this)
          },
          unbindUIElements: function () {
            if (!this.ui || !this._uiBindings) {
              return
            }
            i.each(this.ui, function (e, t) {
              delete this.ui[t]
            }, this);
            this.ui = this._uiBindings;
            delete this._uiBindings
          }
        });
        n.ItemView = n.View.extend({
          constructor: function () {
            n.View.prototype.constructor.apply(this, arguments)
          },
          serializeData: function () {
            var e = {};
            if (this.model) {
              e = this.model.toJSON()
            }
            else if (this.collection) {
              e = {
                items: this.collection.toJSON()
              }
            }
            return e
          },
          render: function () {
            this.isClosed = false;
            this.triggerMethod("before:render", this);
            this.triggerMethod("item:before:render", this);
            var e = this.serializeData();
            e = this.mixinTemplateHelpers(e);
            var t = this.getTemplate();
            var i = n.Renderer.render(t, e);
            this.$el.html(i);
            this.bindUIElements();
            this.triggerMethod("render", this);
            this.triggerMethod("item:rendered", this);
            return this
          },
          close: function () {
            if (this.isClosed) {
              return
            }
            this.triggerMethod("item:before:close");
            n.View.prototype.close.apply(this, arguments);
            this.triggerMethod("item:closed")
          }
        });
        n.CollectionView = n.View.extend({
          itemViewEventPrefix: "itemview",
          constructor: function (e) {
            this._initChildViewStorage();
            n.View.prototype.constructor.apply(this, arguments);
            this._initialEvents();
            this.initRenderBuffer()
          },
          initRenderBuffer: function () {
            this.elBuffer = document.createDocumentFragment();
            this._bufferedChildren = []
          },
          startBuffering: function () {
            this.initRenderBuffer();
            this.isBuffering = true
          },
          endBuffering: function () {
            this.isBuffering = false;
            this.appendBuffer(this, this.elBuffer);
            this._triggerShowBufferedChildren();
            this.initRenderBuffer()
          },
          _triggerShowBufferedChildren: function () {
            if (this._isShown) {
              i.each(this._bufferedChildren, function (e) {
                n.triggerMethod.call(e, "show")
              });
              this._bufferedChildren = []
            }
          },
          _initialEvents: function () {
            if (this.collection) {
              this.listenTo(this.collection, "add", this.addChildView);
              this.listenTo(this.collection, "remove", this.removeItemView);
              this.listenTo(this.collection, "reset", this.render)
            }
          },
          addChildView: function (e, t, i) {
            this.closeEmptyView();
            var n = this.getItemView(e);
            var r = this.collection.indexOf(e);
            this.addItemView(e, n, r)
          },
          onShowCalled: function () {
            this.children.each(function (e) {
              n.triggerMethod.call(e, "show")
            })
          },
          triggerBeforeRender: function () {
            this.triggerMethod("before:render", this);
            this.triggerMethod("collection:before:render", this)
          },
          triggerRendered: function () {
            this.triggerMethod("render", this);
            this.triggerMethod("collection:rendered", this)
          },
          render: function () {
            this.isClosed = false;
            this.triggerBeforeRender();
            this._renderChildren();
            this.triggerRendered();
            return this
          },
          _renderChildren: function () {
            this.startBuffering();
            this.closeEmptyView();
            this.closeChildren();
            if (!this.isEmpty(this.collection)) {
              this.showCollection()
            }
            else {
              this.showEmptyView()
            }
            this.endBuffering()
          },
          showCollection: function () {
            var e;
            this.collection.each(function (t, i) {
              e = this.getItemView(t);
              this.addItemView(t, e, i)
            }, this)
          },
          showEmptyView: function () {
            var e = this.getEmptyView();
            if (e && !this._showingEmptyView) {
              this._showingEmptyView = true;
              var i = new t.Model;
              this.addItemView(i, e, 0)
            }
          },
          closeEmptyView: function () {
            if (this._showingEmptyView) {
              this.closeChildren();
              delete this._showingEmptyView
            }
          },
          getEmptyView: function () {
            return n.getOption(this, "emptyView")
          },
          getItemView: function (e) {
            var t = n.getOption(this, "itemView");
            if (!t) {
              o("An `itemView` must be specified", "NoItemViewError")
            }
            return t
          },
          addItemView: function (e, t, r) {
            var o = n.getOption(this, "itemViewOptions");
            if (i.isFunction(o)) {
              o = o.call(this, e, r)
            }
            var s = this.buildItemView(e, t, o);
            this.addChildViewEventForwarding(s);
            this.triggerMethod("before:item:added", s);
            this.children.add(s);
            this.renderItemView(s, r);
            if (this._isShown && !this.isBuffering) {
              n.triggerMethod.call(s, "show")
            }
            this.triggerMethod("after:item:added", s);
            return s
          },
          addChildViewEventForwarding: function (e) {
            var t = n.getOption(this, "itemViewEventPrefix");
            this.listenTo(e, "all", function () {
              var o = r.call(arguments);
              var s = o[0];
              var a = this.normalizeMethods(this.getItemEvents());
              o[0] = t + ":" + s;
              o.splice(1, 0, e);
              if (typeof a !== "undefined" && i.isFunction(a[s])) {
                a[s].apply(this, o)
              }
              n.triggerMethod.apply(this, o)
            }, this)
          },
          getItemEvents: function () {
            if (i.isFunction(this.itemEvents)) {
              return this.itemEvents.call(this)
            }
            return this.itemEvents
          },
          renderItemView: function (e, t) {
            e.render();
            this.appendHtml(this, e, t)
          },
          buildItemView: function (e, t, n) {
            var r = i.extend({
              model: e
            }, n);
            return new t(r)
          },
          removeItemView: function (e) {
            var t = this.children.findByModel(e);
            this.removeChildView(t);
            this.checkEmpty()
          },
          removeChildView: function (e) {
            if (e) {
              this.stopListening(e);
              if (e.close) {
                e.close()
              }
              else if (e.remove) {
                e.remove()
              }
              this.children.remove(e)
            }
            this.triggerMethod("item:removed", e)
          },
          isEmpty: function (e) {
            return !this.collection || this.collection.length === 0
          },
          checkEmpty: function () {
            if (this.isEmpty(this.collection)) {
              this.showEmptyView()
            }
          },
          appendBuffer: function (e, t) {
            e.$el.append(t)
          },
          appendHtml: function (e, t, i) {
            if (e.isBuffering) {
              e.elBuffer.appendChild(t.el);
              e._bufferedChildren.push(t)
            }
            else {
              e.$el.append(t.el)
            }
          },
          _initChildViewStorage: function () {
            this.children = new t.ChildViewContainer
          },
          close: function () {
            if (this.isClosed) {
              return
            }
            this.triggerMethod("collection:before:close");
            this.closeChildren();
            this.triggerMethod("collection:closed");
            n.View.prototype.close.apply(this, arguments)
          },
          closeChildren: function () {
            this.children.each(function (e) {
              this.removeChildView(e)
            }, this);
            this.checkEmpty()
          }
        });
        n.CompositeView = n.CollectionView.extend({
          constructor: function () {
            n.CollectionView.prototype.constructor.apply(this, arguments)
          },
          _initialEvents: function () {
            this.once("render", function () {
              if (this.collection) {
                this.listenTo(this.collection, "add", this.addChildView);
                this.listenTo(this.collection, "remove", this.removeItemView);
                this.listenTo(this.collection, "reset", this._renderChildren)
              }
            })
          },
          getItemView: function (e) {
            var t = n.getOption(this, "itemView") || this.constructor;
            if (!t) {
              o("An `itemView` must be specified", "NoItemViewError")
            }
            return t
          },
          serializeData: function () {
            var e = {};
            if (this.model) {
              e = this.model.toJSON()
            }
            return e
          },
          render: function () {
            this.isRendered = true;
            this.isClosed = false;
            this.resetItemViewContainer();
            this.triggerBeforeRender();
            var e = this.renderModel();
            this.$el.html(e);
            this.bindUIElements();
            this.triggerMethod("composite:model:rendered");
            this._renderChildren();
            this.triggerMethod("composite:rendered");
            this.triggerRendered();
            return this
          },
          _renderChildren: function () {
            if (this.isRendered) {
              this.triggerMethod("composite:collection:before:render");
              n.CollectionView.prototype._renderChildren.call(this);
              this.triggerMethod("composite:collection:rendered")
            }
          },
          renderModel: function () {
            var e = {};
            e = this.serializeData();
            e = this.mixinTemplateHelpers(e);
            var t = this.getTemplate();
            return n.Renderer.render(t, e)
          },
          appendBuffer: function (e, t) {
            var i = this.getItemViewContainer(e);
            i.append(t)
          },
          appendHtml: function (e, t, i) {
            if (e.isBuffering) {
              e.elBuffer.appendChild(t.el);
              e._bufferedChildren.push(t)
            }
            else {
              var n = this.getItemViewContainer(e);
              n.append(t.el)
            }
          },
          getItemViewContainer: function (e) {
            if ("$itemViewContainer" in e) {
              return e.$itemViewContainer
            }
            var t;
            var r = n.getOption(e, "itemViewContainer");
            if (r) {
              var s = i.isFunction(r) ? r.call(this) : r;
              t = e.$(s);
              if (t.length <= 0) {
                o("The specified `itemViewContainer` was not found: " + e.itemViewContainer, "ItemViewContainerMissingError")
              }
            }
            else {
              t = e.$el
            }
            e.$itemViewContainer = t;
            return t
          },
          resetItemViewContainer: function () {
            if (this.$itemViewContainer) {
              delete this.$itemViewContainer
            }
          }
        });
        n.Layout = n.ItemView.extend({
          regionType: n.Region,
          constructor: function (e) {
            e = e || {};
            this._firstRender = true;
            this._initializeRegions(e);
            n.ItemView.prototype.constructor.call(this, e)
          },
          render: function () {
            if (this.isClosed) {
              this._initializeRegions()
            }
            if (this._firstRender) {
              this._firstRender = false
            }
            else if (!this.isClosed) {
              this._reInitializeRegions()
            }
            return n.ItemView.prototype.render.apply(this, arguments)
          },
          close: function () {
            if (this.isClosed) {
              return
            }
            this.regionManager.close();
            n.ItemView.prototype.close.apply(this, arguments)
          },
          addRegion: function (e, t) {
            var i = {};
            i[e] = t;
            return this._buildRegions(i)[e]
          },
          addRegions: function (e) {
            this.regions = i.extend({}, this.regions, e);
            return this._buildRegions(e)
          },
          removeRegion: function (e) {
            delete this.regions[e];
            return this.regionManager.removeRegion(e)
          },
          _buildRegions: function (e) {
            var t = this;
            var i = {
              regionType: n.getOption(this, "regionType"),
              parentEl: function () {
                return t.$el
              }
            };
            return this.regionManager.addRegions(e, i)
          },
          _initializeRegions: function (e) {
            var t;
            this._initRegionManager();
            if (i.isFunction(this.regions)) {
              t = this.regions(e)
            }
            else {
              t = this.regions || {}
            }
            this.addRegions(t)
          },
          _reInitializeRegions: function () {
            this.regionManager.closeRegions();
            this.regionManager.each(function (e) {
              e.reset()
            })
          },
          _initRegionManager: function () {
            this.regionManager = new n.RegionManager;
            this.listenTo(this.regionManager, "region:add", function (e, t) {
              this[e] = t;
              this.trigger("region:add", e, t)
            });
            this.listenTo(this.regionManager, "region:remove", function (e, t) {
              delete this[e];
              this.trigger("region:remove", e, t)
            })
          }
        });
        n.Behavior = function (e, t) {
          function i(t, i) {
            this.view = i;
            this.defaults = e.result(this, "defaults") || {};
            this.options = e.extend({}, this.defaults, t);
            this.$ = function () {
              return this.view.$.apply(this.view, arguments)
            };
            this.initialize.apply(this, arguments)
          }
          e.extend(i.prototype, {
            initialize: function () {},
            triggerMethod: n.triggerMethod
          });
          e.extend(i, {
            extend: t.View.extend
          });
          return i
        }(i, t);
        n.Behaviors = function (e, t) {
          function i(e) {
            this.behaviors = i.parseBehaviors(e, e.behaviors);
            i.wrap(e, this.behaviors, ["bindUIElements", "unbindUIElements", "delegateEvents", "undelegateEvents", "onShow", "onClose", "behaviorEvents", "triggerMethod", "setElement"])
          }
          var n = {
            setElement: function (e, i) {
              e.apply(this, t.tail(arguments, 2));
              t.each(i, function (e) {
                e.$el = this.$el
              }, this)
            },
            onShow: function (i, n) {
              var r = t.tail(arguments, 2);
              t.each(n, function (t) {
                e.triggerMethod.apply(t, ["show"].concat(r))
              });
              if (t.isFunction(i)) {
                i.apply(this, r)
              }
            },
            onClose: function (i, n) {
              var r = t.tail(arguments, 2);
              t.each(n, function (t) {
                e.triggerMethod.apply(t, ["close"].concat(r))
              });
              if (t.isFunction(i)) {
                i.apply(this, r)
              }
            },
            bindUIElements: function (e, i) {
              e.apply(this);
              t.invoke(i, e)
            },
            unbindUIElements: function (e, i) {
              e.apply(this);
              t.invoke(i, e)
            },
            triggerMethod: function (e, i) {
              var n = t.tail(arguments, 2);
              e.apply(this, n);
              t.each(i, function (t) {
                e.apply(t, n)
              })
            },
            delegateEvents: function (i, n) {
              var r = t.tail(arguments, 2);
              i.apply(this, r);
              t.each(n, function (t) {
                e.bindEntityEvents(this, this.model, e.getOption(t, "modelEvents"));
                e.bindEntityEvents(this, this.collection, e.getOption(t, "collectionEvents"))
              }, this)
            },
            undelegateEvents: function (i, n) {
              var r = t.tail(arguments, 2);
              i.apply(this, r);
              t.each(n, function (t) {
                e.unbindEntityEvents(this, this.model, e.getOption(t, "modelEvents"));
                e.unbindEntityEvents(this, this.collection, e.getOption(t, "collectionEvents"))
              }, this)
            },
            behaviorEvents: function (i, n) {
              var r = {};
              var o = t.result(this, "ui");
              t.each(n, function (i, n) {
                var s = {};
                var a = t.result(i, "events") || {};
                var l = t.result(i, "ui");
                var u = t.extend({}, o, l);
                a = e.normalizeUIKeys(a, u);
                t.each(t.keys(a), function (e) {
                  var r = new Array(n + 2).join(" ");
                  var o = e + r;
                  var l = t.isFunction(a[e]) ? a[e] : i[a[e]];
                  s[o] = t.bind(l, i)
                });
                r = t.extend(r, s)
              });
              return r
            }
          };
          t.extend(i, {
            behaviorsLookup: function () {
              throw new Error("You must define where your behaviors are stored. See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.behaviors.md#behaviorslookup")
            },
            getBehaviorClass: function (e, n) {
              if (e.behaviorClass) {
                return e.behaviorClass
              }
              return t.isFunction(i.behaviorsLookup) ? i.behaviorsLookup.apply(this, arguments)[n] : i.behaviorsLookup[n]
            },
            parseBehaviors: function (e, n) {
              return t.map(n, function (t, n) {
                var r = i.getBehaviorClass(t, n);
                return new r(t, e)
              })
            },
            wrap: function (e, i, r) {
              t.each(r, function (r) {
                e[r] = t.partial(n[r], e[r], i)
              })
            }
          });
          return i
        }(n, i);
        n.AppRouter = t.Router.extend({
          constructor: function (e) {
            t.Router.prototype.constructor.apply(this, arguments);
            this.options = e || {};
            var i = n.getOption(this, "appRoutes");
            var r = this._getController();
            this.processAppRoutes(r, i)
          },
          appRoute: function (e, t) {
            var i = this._getController();
            this._addAppRoute(i, e, t)
          },
          processAppRoutes: function (e, t) {
            if (!t) {
              return
            }
            var n = i.keys(t).reverse();
            i.each(n, function (i) {
              this._addAppRoute(e, i, t[i])
            }, this)
          },
          _getController: function () {
            return n.getOption(this, "controller")
          },
          _addAppRoute: function (e, t, n) {
            var r = e[n];
            if (!r) {
              o("Method '" + n + "' was not found on the controller")
            }
            this.route(t, n, i.bind(r, e))
          }
        });
        n.Application = function (e) {
          this._initRegionManager();
          this._initCallbacks = new n.Callbacks;
          this.vent = new t.Wreqr.EventAggregator;
          this.commands = new t.Wreqr.Commands;
          this.reqres = new t.Wreqr.RequestResponse;
          this.submodules = {};
          i.extend(this, e);
          this.triggerMethod = n.triggerMethod
        };
        i.extend(n.Application.prototype, t.Events, {
          execute: function () {
            this.commands.execute.apply(this.commands, arguments)
          },
          request: function () {
            return this.reqres.request.apply(this.reqres, arguments)
          },
          addInitializer: function (e) {
            this._initCallbacks.add(e)
          },
          start: function (e) {
            this.triggerMethod("initialize:before", e);
            this._initCallbacks.run(e, this);
            this.triggerMethod("initialize:after", e);
            this.triggerMethod("start", e)
          },
          addRegions: function (e) {
            return this._regionManager.addRegions(e)
          },
          closeRegions: function () {
            this._regionManager.closeRegions()
          },
          removeRegion: function (e) {
            this._regionManager.removeRegion(e)
          },
          getRegion: function (e) {
            return this._regionManager.get(e)
          },
          module: function (e, t) {
            var i = n.Module.getClass(t);
            var o = r.call(arguments);
            o.unshift(this);
            return i.create.apply(i, o)
          },
          _initRegionManager: function () {
            this._regionManager = new n.RegionManager;
            this.listenTo(this._regionManager, "region:add", function (e, t) {
              this[e] = t
            });
            this.listenTo(this._regionManager, "region:remove", function (e, t) {
              delete this[e]
            })
          }
        });
        n.Application.extend = n.extend;
        n.Module = function (e, t, r) {
          this.moduleName = e;
          this.options = i.extend({}, this.options, r);
          this.initialize = r.initialize || this.initialize;
          this.submodules = {};
          this._setupInitializersAndFinalizers();
          this.app = t;
          this.startWithParent = true;
          this.triggerMethod = n.triggerMethod;
          if (i.isFunction(this.initialize)) {
            this.initialize(this.options, e, t)
          }
        };
        n.Module.extend = n.extend;
        i.extend(n.Module.prototype, t.Events, {
          initialize: function () {},
          addInitializer: function (e) {
            this._initializerCallbacks.add(e)
          },
          addFinalizer: function (e) {
            this._finalizerCallbacks.add(e)
          },
          start: function (e) {
            if (this._isInitialized) {
              return
            }
            i.each(this.submodules, function (t) {
              if (t.startWithParent) {
                t.start(e)
              }
            });
            this.triggerMethod("before:start", e);
            this._initializerCallbacks.run(e, this);
            this._isInitialized = true;
            this.triggerMethod("start", e)
          },
          stop: function () {
            if (!this._isInitialized) {
              return
            }
            this._isInitialized = false;
            n.triggerMethod.call(this, "before:stop");
            i.each(this.submodules, function (e) {
              e.stop()
            });
            this._finalizerCallbacks.run(undefined, this);
            this._initializerCallbacks.reset();
            this._finalizerCallbacks.reset();
            n.triggerMethod.call(this, "stop")
          },
          addDefinition: function (e, t) {
            this._runModuleDefinition(e, t)
          },
          _runModuleDefinition: function (e, r) {
            if (!e) {
              return
            }
            var o = i.flatten([this, this.app, t, n, n.$, i, r]);
            e.apply(this, o)
          },
          _setupInitializersAndFinalizers: function () {
            this._initializerCallbacks = new n.Callbacks;
            this._finalizerCallbacks = new n.Callbacks
          }
        });
        i.extend(n.Module, {
          create: function (e, t, n) {
            var o = e;
            var s = r.call(arguments);
            s.splice(0, 3);
            t = t.split(".");
            var a = t.length;
            var l = [];
            l[a - 1] = n;
            i.each(t, function (t, i) {
              var r = o;
              o = this._getModule(r, t, e, n);
              this._addModuleDefinition(r, o, l[i], s)
            }, this);
            return o
          },
          _getModule: function (e, t, n, r, o) {
            var s = i.extend({}, r);
            var a = this.getClass(r);
            var l = e[t];
            if (!l) {
              l = new a(t, n, s);
              e[t] = l;
              e.submodules[t] = l
            }
            return l
          },
          getClass: function (e) {
            var t = n.Module;
            if (!e) {
              return t
            }
            if (e.prototype instanceof t) {
              return e
            }
            return e.moduleClass || t
          },
          _addModuleDefinition: function (e, t, i, n) {
            var r = this._getDefine(i);
            var o = this._getStartWithParent(i, t);
            if (r) {
              t.addDefinition(r, n)
            }
            this._addStartWithParent(e, t, o)
          },
          _getStartWithParent: function (e, t) {
            var r;
            if (i.isFunction(e) && e.prototype instanceof n.Module) {
              r = t.constructor.prototype.startWithParent;
              return i.isUndefined(r) ? true : r
            }
            if (i.isObject(e)) {
              r = e.startWithParent;
              return i.isUndefined(r) ? true : r
            }
            return true
          },
          _getDefine: function (e) {
            if (i.isFunction(e) && !(e.prototype instanceof n.Module)) {
              return e
            }
            if (i.isObject(e)) {
              return e.define
            }
            return null
          },
          _addStartWithParent: function (e, t, i) {
            t.startWithParent = t.startWithParent && i;
            if (!t.startWithParent || !!t.startWithParentIsConfigured) {
              return
            }
            t.startWithParentIsConfigured = true;
            e.addInitializer(function (e) {
              if (t.startWithParent) {
                t.start(e)
              }
            })
          }
        });
        return n
      }(this, t, e);
      return t.Marionette
    })
  },
  69: function (e, t, i) {
    (function (t) {
      if (true) {
        e.exports = t(i(3), i(5))
      }
      else if (typeof define == "function" && define.amd) {
        define(["underscore", "backbone"], t)
      }
      else if (typeof _ !== "undefined" && typeof Backbone !== "undefined") {
        var n = Backbone.PageableCollection;
        var r = t(_, Backbone);
        Backbone.PageableCollection.noConflict = function () {
          Backbone.PageableCollection = n;
          return r
        }
      }
    })(function (e, t) {
      "use strict";
      var i = e.extend;
      var n = e.omit;
      var r = e.clone;
      var o = e.each;
      var s = e.pick;
      var a = e.contains;
      var l = e.isEmpty;
      var u = e.pairs;
      var c = e.invert;
      var d = e.isArray;
      var f = e.isFunction;
      var h = e.isObject;
      var p = e.keys;
      var m = e.isUndefined;
      var v = e.result;
      var g = Math.ceil;
      var y = Math.floor;
      var b = Math.max;
      var w = t.Collection.prototype;

      function T(t, i) {
        if (!e.isNumber(t) || e.isNaN(t) || !e.isFinite(t) || ~~t !== t) {
          throw new TypeError("`" + i + "` must be a finite integer")
        }
        return t
      }

      function S(e) {
        var t, i, n, r, o = {},
          s = decodeURIComponent;
        var a = e.split("&");
        for (var l = 0, u = a.length; l < u; l++) {
          var c = a[l];
          t = c.split("="), i = t[0], n = t[1] || true;
          i = s(i), n = s(n), r = o[i];
          if (d(r)) r.push(n);
          else if (r) o[i] = [r, n];
          else o[i] = n
        }
        return o
      }

      function _(e, t, i) {
        var n = e._events[t];
        if (n && n.length) {
          var r = n[n.length - 1];
          var o = r.callback;
          r.callback = function () {
            try {
              o.apply(this, arguments);
              i()
            }
            catch (e) {
              throw e
            }
            finally {
              r.callback = o
            }
          }
        }
        else i()
      }
      var M = /[\s'"]/g;
      var C = /[<>\s'"]/g;
      var P = t.PageableCollection = t.Collection.extend({
        state: {
          firstPage: 1,
          lastPage: null,
          currentPage: null,
          pageSize: 25,
          totalPages: null,
          totalRecords: null,
          sortKey: null,
          order: -1
        },
        mode: "server",
        queryParams: {
          currentPage: "page",
          pageSize: "per_page",
          totalPages: "total_pages",
          totalRecords: "total_entries",
          sortKey: "sort_by",
          order: "order",
          directions: {
            "-1": "asc",
            1: "desc"
          }
        },
        constructor: function (e, t) {
          w.constructor.apply(this, arguments);
          t = t || {};
          var n = this.mode = t.mode || this.mode || x.mode;
          var o = i({}, x.queryParams, this.queryParams, t.queryParams || {});
          o.directions = i({}, x.queryParams.directions, this.queryParams.directions, o.directions || {});
          this.queryParams = o;
          var s = this.state = i({}, x.state, this.state, t.state || {});
          s.currentPage = s.currentPage == null ? s.firstPage : s.currentPage;
          if (!d(e)) e = e ? [e] : [];
          if (n != "server" && s.totalRecords == null && !l(e)) {
            s.totalRecords = e.length
          }
          this.switchMode(n, i({
            fetch: false,
            resetState: false,
            models: e
          }, t));
          var a = t.comparator;
          if (s.sortKey && !a) {
            this.setSorting(s.sortKey, s.order, t)
          }
          if (n != "server") {
            var u = this.fullCollection;
            if (a && t.full) {
              this.comparator = null;
              u.comparator = a
            }
            if (t.full) u.sort();
            if (e && !l(e)) {
              this.reset([].slice.call(e), i({
                silent: true
              }, t));
              this.getPage(s.currentPage);
              e.splice.apply(e, [0, e.length].concat(this.models))
            }
          }
          this._initState = r(this.state)
        },
        _makeFullCollection: function (e, i) {
          var n = ["url", "model", "sync", "comparator"];
          var r = this.constructor.prototype;
          var o, s, a;
          var l = {};
          for (o = 0, s = n.length; o < s; o++) {
            a = n[o];
            if (!m(r[a])) {
              l[a] = r[a]
            }
          }
          var u = new(t.Collection.extend(l))(e, i);
          for (o = 0, s = n.length; o < s; o++) {
            a = n[o];
            if (this[a] !== r[a]) {
              u[a] = this[a]
            }
          }
          return u
        },
        _makeCollectionEventHandler: function (e, t) {
          return function n(s, a, l, u) {
            var c = e._handlers;
            o(p(c), function (i) {
              var n = c[i];
              e.off(i, n);
              t.off(i, n)
            });
            var d = r(e.state);
            var f = d.firstPage;
            var h = f === 0 ? d.currentPage : d.currentPage - 1;
            var v = d.pageSize;
            var y = h * v,
              b = y + v;
            if (s == "add") {
              var w, T, S, M, u = u || {};
              if (l == t) {
                T = t.indexOf(a);
                if (T >= y && T < b) {
                  M = e;
                  w = S = T - y
                }
              }
              else {
                w = e.indexOf(a);
                T = y + w;
                M = t;
                var S = !m(u.at) ? u.at + y : T
              }
              if (!u.onRemove) {
                ++d.totalRecords;
                delete u.onRemove
              }
              e.state = e._checkState(d);
              if (M) {
                M.add(a, i({}, u || {}, {
                  at: S
                }));
                var C = w >= v ? a : !m(u.at) && S < b && e.length > v ? e.at(v) : null;
                if (C) {
                  _(l, s, function () {
                    e.remove(C, {
                      onAdd: true
                    })
                  })
                }
              }
            }
            if (s == "remove") {
              if (!u.onAdd) {
                if (!--d.totalRecords) {
                  d.totalRecords = null;
                  d.totalPages = null
                }
                else {
                  var P = d.totalPages = g(d.totalRecords / v);
                  d.lastPage = f === 0 ? P - 1 : P || f;
                  if (d.currentPage > P) d.currentPage = d.lastPage
                }
                e.state = e._checkState(d);
                var x, A = u.index;
                if (l == e) {
                  if (x = t.at(b)) {
                    _(e, s, function () {
                      e.push(x, {
                        onRemove: true
                      })
                    })
                  }
                  t.remove(a)
                }
                else if (A >= y && A < b) {
                  if (x = t.at(b - 1)) {
                    _(e, s, function () {
                      e.push(x, {
                        onRemove: true
                      })
                    })
                  }
                  e.remove(a)
                }
              }
              else delete u.onAdd
            }
            if (s == "reset") {
              u = l;
              l = a;
              if (l == e && u.from == null && u.to == null) {
                var k = t.models.slice(0, y);
                var E = t.models.slice(y + e.models.length);
                t.reset(k.concat(e.models).concat(E), u)
              }
              else if (l == t) {
                if (!(d.totalRecords = t.models.length)) {
                  d.totalRecords = null;
                  d.totalPages = null
                }
                if (e.mode == "client") {
                  d.lastPage = d.currentPage = d.firstPage
                }
                e.state = e._checkState(d);
                e.reset(t.models.slice(y, b), i({}, u, {
                  parse: false
                }))
              }
            }
            if (s == "sort") {
              u = l;
              l = a;
              if (l === t) {
                e.reset(t.models.slice(y, b), i({}, u, {
                  parse: false
                }))
              }
            }
            o(p(c), function (i) {
              var n = c[i];
              o([e, t], function (e) {
                e.on(i, n);
                var t = e._events[i] || [];
                t.unshift(t.pop())
              })
            })
          }
        },
        _checkState: function (e) {
          var t = this.mode;
          var i = this.links;
          var n = e.totalRecords;
          var r = e.pageSize;
          var o = e.currentPage;
          var s = e.firstPage;
          var a = e.totalPages;
          if (n != null && r != null && o != null && s != null && (t == "infinite" ? i : true)) {
            n = T(n, "totalRecords");
            r = T(r, "pageSize");
            o = T(o, "currentPage");
            s = T(s, "firstPage");
            if (r < 1) {
              throw new RangeError("`pageSize` must be >= 1")
            }
            a = e.totalPages = g(n / r);
            if (s < 0 || s > 1) {
              throw new RangeError("`firstPage must be 0 or 1`")
            }
            e.lastPage = s === 0 ? b(0, a - 1) : a || s;
            if (t == "infinite") {
              if (!i[o + ""]) {
                throw new RangeError("No link found for page " + o)
              }
            }
            else if (o < s || a > 0 && (s ? o > a : o >= a)) {
              throw new RangeError("`currentPage` must be firstPage <= currentPage " + (s ? ">" : ">=") + " totalPages if " + s + "-based. Got " + o + ".")
            }
          }
          return e
        },
        setPageSize: function (e, t) {
          e = T(e, "pageSize");
          t = t || {
            first: false
          };
          var r = this.state;
          var o = g(r.totalRecords / e);
          var s = o ? b(r.firstPage, y(o * (r.firstPage ? r.currentPage : r.currentPage + 1) / r.totalPages)) : r.firstPage;
          r = this.state = this._checkState(i({}, r, {
            pageSize: e,
            currentPage: t.first ? r.firstPage : s,
            totalPages: o
          }));
          return this.getPage(r.currentPage, n(t, ["first"]))
        },
        switchMode: function (t, s) {
          if (!a(["server", "client", "infinite"], t)) {
            throw new TypeError('`mode` must be one of "server", "client" or "infinite"')
          }
          s = s || {
            fetch: true,
            resetState: true
          };
          var l = this.state = s.resetState ? r(this._initState) : this._checkState(i({}, this.state));
          this.mode = t;
          var u = this;
          var c = this.fullCollection;
          var d = this._handlers = this._handlers || {},
            f;
          if (t != "server" && !c) {
            c = this._makeFullCollection(s.models || [], s);
            c.pageableCollection = this;
            this.fullCollection = c;
            var h = this._makeCollectionEventHandler(this, c);
            o(["add", "remove", "reset", "sort"], function (t) {
              d[t] = f = e.bind(h, {}, t);
              u.on(t, f);
              c.on(t, f)
            });
            c.comparator = this._fullComparator
          }
          else if (t == "server" && c) {
            o(p(d), function (e) {
              f = d[e];
              u.off(e, f);
              c.off(e, f)
            });
            delete this._handlers;
            this._fullComparator = c.comparator;
            delete this.fullCollection
          }
          if (t == "infinite") {
            var m = this.links = {};
            var v = l.firstPage;
            var y = g(l.totalRecords / l.pageSize);
            var w = v === 0 ? b(0, y - 1) : y || v;
            for (var T = l.firstPage; T <= w; T++) {
              m[T] = this.url
            }
          }
          else if (this.links) delete this.links;
          return s.fetch ? this.fetch(n(s, "fetch", "resetState")) : this
        },
        hasPrevious: function () {
          var e = this.state;
          var t = e.currentPage;
          if (this.mode != "infinite") return t > e.firstPage;
          return !!this.links[t - 1]
        },
        hasNext: function () {
          var e = this.state;
          var t = this.state.currentPage;
          if (this.mode != "infinite") return t < e.lastPage;
          return !!this.links[t + 1]
        },
        getFirstPage: function (e) {
          return this.getPage("first", e)
        },
        getPreviousPage: function (e) {
          return this.getPage("prev", e)
        },
        getNextPage: function (e) {
          return this.getPage("next", e)
        },
        getLastPage: function (e) {
          return this.getPage("last", e)
        },
        getPage: function (e, t) {
          var r = this.mode,
            o = this.fullCollection;
          t = t || {
            fetch: false
          };
          var s = this.state,
            a = s.firstPage,
            u = s.currentPage,
            c = s.lastPage,
            d = s.pageSize;
          var f = e;
          switch (e) {
            case "first":
              f = a;
              break;
            case "prev":
              f = u - 1;
              break;
            case "next":
              f = u + 1;
              break;
            case "last":
              f = c;
              break;
            default:
              f = T(e, "index")
          }
          this.state = this._checkState(i({}, s, {
            currentPage: f
          }));
          t.from = u, t.to = f;
          var h = (a === 0 ? f : f - 1) * d;
          var p = o && o.length ? o.models.slice(h, h + d) : [];
          if ((r == "client" || r == "infinite" && !l(p)) && !t.fetch) {
            this.reset(p, n(t, "fetch"));
            return this
          }
          if (r == "infinite") t.url = this.links[f];
          return this.fetch(n(t, "fetch"))
        },
        getPageByOffset: function (e, t) {
          if (e < 0) {
            throw new RangeError("`offset must be > 0`")
          }
          e = T(e);
          var i = y(e / this.state.pageSize);
          if (this.state.firstPage !== 0) i++;
          if (i > this.state.lastPage) i = this.state.lastPage;
          return this.getPage(i, t)
        },
        sync: function (e, n, r) {
          var o = this;
          if (o.mode == "infinite") {
            var s = r.success;
            var a = o.state.currentPage;
            r.success = function (e, t, n) {
              var l = o.links;
              var u = o.parseLinks(e, i({
                xhr: n
              }, r));
              if (u.first) l[o.state.firstPage] = u.first;
              if (u.prev) l[a - 1] = u.prev;
              if (u.next) l[a + 1] = u.next;
              if (s) s(e, t, n)
            }
          }
          return (w.sync || t.sync).call(o, e, n, r)
        },
        parseLinks: function (e, t) {
          var i = {};
          var n = t.xhr.getResponseHeader("Link");
          if (n) {
            var r = ["first", "prev", "next"];
            o(n.split(","), function (e) {
              var t = e.split(";");
              var n = t[0].replace(C, "");
              var s = t.slice(1);
              o(s, function (e) {
                var t = e.split("=");
                var o = t[0].replace(M, "");
                var s = t[1].replace(M, "");
                if (o == "rel" && a(r, s)) i[s] = n
              })
            })
          }
          return i
        },
        parse: function (e, t) {
          var n = this.parseState(e, r(this.queryParams), r(this.state), t);
          if (n) this.state = this._checkState(i({}, this.state, n));
          return this.parseRecords(e, t)
        },
        parseState: function (t, i, s, a) {
          if (t && t.length === 2 && h(t[0]) && d(t[1])) {
            var l = r(s);
            var f = t[0];
            o(u(n(i, "directions")), function (t) {
              var i = t[0],
                n = t[1];
              var r = f[n];
              if (!m(r) && !e.isNull(r)) l[i] = f[n]
            });
            if (f.order) {
              l.order = c(i.directions)[f.order] * 1
            }
            return l
          }
        },
        parseRecords: function (e, t) {
          if (e && e.length === 2 && h(e[0]) && d(e[1])) {
            return e[1]
          }
          return e
        },
        fetch: function (e) {
          e = e || {};
          var t = this._checkState(this.state);
          var o = this.mode;
          if (o == "infinite" && !e.url) {
            e.url = this.links[t.currentPage]
          }
          var a = e.data || {};
          var l = v(e, "url") || v(this, "url") || "";
          var c = l.indexOf("?");
          if (c != -1) {
            i(a, S(l.slice(c + 1)));
            l = l.slice(0, c)
          }
          e.url = l;
          e.data = a;
          var d = this.mode == "client" ? s(this.queryParams, "sortKey", "order") : n(s(this.queryParams, p(x.queryParams)), "directions");
          var h, g, y, b, T = u(d),
            _ = r(this);
          for (h = 0; h < T.length; h++) {
            g = T[h], y = g[0], b = g[1];
            b = f(b) ? b.call(_) : b;
            if (t[y] != null && b != null) {
              a[b] = t[y]
            }
          }
          if (t.sortKey && t.order) {
            a[d.order] = this.queryParams.directions[t.order + ""]
          }
          else if (!t.sortKey) delete a[d.order];
          var M = u(n(this.queryParams, p(x.queryParams)));
          for (h = 0; h < M.length; h++) {
            g = M[h];
            b = g[1];
            b = f(b) ? b.call(_) : b;
            if (b != null) a[g[0]] = b
          }
          if (o != "server") {
            var C = this,
              P = this.fullCollection;
            var A = e.success;
            e.success = function (t, n, r) {
              r = r || {};
              if (m(e.silent)) delete r.silent;
              else r.silent = e.silent;
              var s = t.models;
              if (o == "client") P.reset(s, r);
              else {
                P.add(s, i({
                  at: P.length
                }, i(r, {
                  parse: false
                })));
                C.trigger("reset", C, r)
              }
              if (A) A(t, n, r)
            };
            return w.fetch.call(this, i({}, e, {
              silent: true
            }))
          }
          return w.fetch.call(this, e)
        },
        _makeComparator: function (e, t, i) {
          var n = this.state;
          e = e || n.sortKey;
          t = t || n.order;
          if (!e || !t) return;
          if (!i) i = function (e, t) {
            return e.get(t)
          };
          return function (n, r) {
            var o = i(n, e),
              s = i(r, e),
              a;
            if (t === 1) a = o, o = s, s = a;
            if (o === s) return 0;
            else if (o < s) return -1;
            return 1
          }
        },
        setSorting: function (t, n, r) {
          var o = this.state;
          o.sortKey = t;
          o.order = n = n || o.order;
          var s = this.fullCollection;
          var a = false,
            l = false;
          if (!t) a = l = true;
          var u = this.mode;
          r = i({
            side: u == "client" ? u : "server",
            full: true
          }, r);
          var c = this._makeComparator(t, n, r.sortValue);
          var d = r.full,
            f = r.side;
          if (f == "client") {
            if (d) {
              if (s) s.comparator = c;
              a = true
            }
            else {
              this.comparator = c;
              l = true
            }
          }
          else if (f == "server" && !d) {
            this.comparator = c
          }
          if (a) this.comparator = null;
          if (l && s) s.comparator = null;
          this.fetchOptions = e.extend({}, this.fetchOptions, {
            sort: [{
              property: t,
              direction: n > 0 ? "ASC" : "DESC"
            }]
          });
          return this
        }
      });
      var x = P.prototype;
      return P
    })
  },
  70: function (e, t, i) {
    (function (t, n) {
      if (true) {
        var r = i(3);
        var o = i(5);
        e.exports = n(r, o)
      }
      else if (typeof define === "function" && define.amd) {
        define(["underscore", "backbone"], n)
      }
    })(this, function (e, t) {
      "use strict";
      t.Wreqr = function (e, t, i) {
        "use strict";
        var n = {};
        n.Handlers = function (e, t) {
          "use strict";
          var i = function (e) {
            this.options = e;
            this._wreqrHandlers = {};
            if (t.isFunction(this.initialize)) {
              this.initialize(e)
            }
          };
          i.extend = e.Model.extend;
          t.extend(i.prototype, e.Events, {
            setHandlers: function (e) {
              t.each(e, function (e, i) {
                var n = null;
                if (t.isObject(e) && !t.isFunction(e)) {
                  n = e.context;
                  e = e.callback
                }
                this.setHandler(i, e, n)
              }, this)
            },
            setHandler: function (e, t, i) {
              var n = {
                callback: t,
                context: i
              };
              this._wreqrHandlers[e] = n;
              this.trigger("handler:add", e, t, i)
            },
            hasHandler: function (e) {
              return !!this._wreqrHandlers[e]
            },
            getHandler: function (e) {
              var t = this._wreqrHandlers[e];
              if (!t) {
                throw new Error("Handler not found for '" + e + "'")
              }
              return function () {
                var e = Array.prototype.slice.apply(arguments);
                return t.callback.apply(t.context, e)
              }
            },
            removeHandler: function (e) {
              delete this._wreqrHandlers[e]
            },
            removeAllHandlers: function () {
              this._wreqrHandlers = {}
            }
          });
          return i
        }(e, i);
        n.CommandStorage = function () {
          "use strict";
          var t = function (e) {
            this.options = e;
            this._commands = {};
            if (i.isFunction(this.initialize)) {
              this.initialize(e)
            }
          };
          i.extend(t.prototype, e.Events, {
            getCommands: function (e) {
              var t = this._commands[e];
              if (!t) {
                t = {
                  command: e,
                  instances: []
                };
                this._commands[e] = t
              }
              return t
            },
            addCommand: function (e, t) {
              var i = this.getCommands(e);
              i.instances.push(t)
            },
            clearCommands: function (e) {
              var t = this.getCommands(e);
              t.instances = []
            }
          });
          return t
        }();
        n.Commands = function (e) {
          "use strict";
          return e.Handlers.extend({
            storageType: e.CommandStorage,
            constructor: function (t) {
              this.options = t || {};
              this._initializeStorage(this.options);
              this.on("handler:add", this._executeCommands, this);
              var i = Array.prototype.slice.call(arguments);
              e.Handlers.prototype.constructor.apply(this, i)
            },
            execute: function (e, t) {
              e = arguments[0];
              t = Array.prototype.slice.call(arguments, 1);
              if (this.hasHandler(e)) {
                this.getHandler(e).apply(this, t)
              }
              else {
                this.storage.addCommand(e, t)
              }
            },
            _executeCommands: function (e, t, n) {
              var r = this.storage.getCommands(e);
              i.each(r.instances, function (e) {
                t.apply(n, e)
              });
              this.storage.clearCommands(e)
            },
            _initializeStorage: function (e) {
              var t;
              var n = e.storageType || this.storageType;
              if (i.isFunction(n)) {
                t = new n
              }
              else {
                t = n
              }
              this.storage = t
            }
          })
        }(n);
        n.RequestResponse = function (e) {
          "use strict";
          return e.Handlers.extend({
            request: function () {
              var e = arguments[0];
              var t = Array.prototype.slice.call(arguments, 1);
              return this.getHandler(e).apply(this, t)
            }
          })
        }(n);
        n.EventAggregator = function (e, t) {
          "use strict";
          var i = function () {};
          i.extend = e.Model.extend;
          t.extend(i.prototype, e.Events);
          return i
        }(e, i);
        return n
      }(t, t.Marionette, e);
      return t.Wreqr
    })
  },
  71: function (e, t, n) {
    (function (e) {
      var t = t || {};
      t.version = "2.9.5";
      t.meIndex = 0;
      t.plugins = {
        silverlight: [{
          version: [3, 0],
          types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
        }],
        flash: [{
          version: [9, 0, 124],
          types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
        }],
        youtube: [{
          version: null,
          types: ["video/youtube", "video/x-youtube"]
        }],
        vimeo: [{
          version: null,
          types: ["video/vimeo"]
        }]
      };
      t.Utility = {
        encodeUrl: function (e) {
          return encodeURIComponent(e)
        },
        escapeHTML: function (e) {
          return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
        },
        absolutizeUrl: function (e) {
          var t = document.createElement("div");
          t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>';
          return t.firstChild.href
        },
        getScriptPath: function (e) {
          for (var t = 0, i, n = "", r = "", o, s = document.getElementsByTagName("script"), a = s.length, l = e.length; t < a; t++) {
            o = s[t].src;
            for (i = 0; i < l; i++) {
              r = e[i];
              if (o.indexOf(r) > -1) {
                n = o.substring(0, o.indexOf(r));
                break
              }
            }
            if (n !== "") break
          }
          return n
        },
        secondsToTimeCode: function (e, t, i, n) {
          if (typeof i == "undefined") i = false;
          else if (typeof n == "undefined") n = 25;
          var r = Math.floor(e / 3600) % 24,
            o = Math.floor(e / 60) % 60,
            s = Math.floor(e % 60);
          e = Math.floor((e % 1 * n).toFixed(3));
          return (t || r > 0 ? (r < 10 ? "0" + r : r) + ":" : "") + (o < 10 ? "0" + o : o) + ":" + (s < 10 ? "0" + s : s) + (i ? ":" + (e < 10 ? "0" + e : e) : "")
        },
        timeCodeToSeconds: function (e, t, i, n) {
          if (typeof i == "undefined") i = false;
          else if (typeof n == "undefined") n = 25;
          e = e.split(":");
          t = parseInt(e[0], 10);
          var r = parseInt(e[1], 10),
            o = parseInt(e[2], 10),
            s = 0,
            a = 0;
          if (i) s = parseInt(e[3]) / n;
          return a = t * 3600 + r * 60 + o + s
        },
        convertSMPTEtoSeconds: function (e) {
          if (typeof e != "string") return false;
          e = e.replace(",", ".");
          var t = 0,
            i = e.indexOf(".") != -1 ? e.split(".")[1].length : 0,
            n = 1;
          e = e.split(":").reverse();
          for (var r = 0; r < e.length; r++) {
            n = 1;
            if (r > 0) n = Math.pow(60, r);
            t += Number(e[r]) * n
          }
          return Number(t.toFixed(i))
        },
        removeSwf: function (e) {
          var i = document.getElementById(e);
          if (i && i.nodeName == "OBJECT")
            if (t.MediaFeatures.isIE) {
              i.style.display = "none";
              (function () {
                i.readyState == 4 ? t.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
              })()
            }
          else i.parentNode.removeChild(i)
        },
        removeObjectInIE: function (e) {
          if (e = document.getElementById(e)) {
            for (var t in e)
              if (typeof e[t] == "function") e[t] = null;
            e.parentNode.removeChild(e)
          }
        }
      };
      t.PluginDetector = {
        hasPluginVersion: function (e, t) {
          var i = this.plugins[e];
          t[1] = t[1] || 0;
          t[2] = t[2] || 0;
          return i[0] > t[0] || i[0] == t[0] && i[1] > t[1] || i[0] == t[0] && i[1] == t[1] && i[2] >= t[2] ? true : false
        },
        nav: window.navigator,
        ua: window.navigator.userAgent.toLowerCase(),
        plugins: [],
        addPlugin: function (e, t, i, n, r) {
          this.plugins[e] = this.detectPlugin(t, i, n, r)
        },
        detectPlugin: function (e, t, i, n) {
          var r = [0, 0, 0],
            o;
          if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[e] == "object") {
            if ((i = this.nav.plugins[e].description) && !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[t] && !this.nav.mimeTypes[t].enabledPlugin)) {
              r = i.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
              for (e = 0; e < r.length; e++) r[e] = parseInt(r[e].match(/\d+/), 10)
            }
          }
          else if (typeof window.ActiveXObject != "undefined") try {
            if (o = new ActiveXObject(i)) r = n(o)
          }
          catch (e) {}
          return r
        }
      };
      t.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (e) {
        var t = [];
        if (e = e.GetVariable("$version")) {
          e = e.split(" ")[1].split(",");
          t = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)]
        }
        return t
      });
      t.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (e) {
        var t = [0, 0, 0, 0],
          i = function (e, t, i, n) {
            for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);) t[i] += n;
            t[i] -= n
          };
        i(e, t, 0, 1);
        i(e, t, 1, 1);
        i(e, t, 2, 1e4);
        i(e, t, 2, 1e3);
        i(e, t, 2, 100);
        i(e, t, 2, 10);
        i(e, t, 2, 1);
        i(e, t, 3, 1);
        return t
      });
      t.MediaFeatures = {
        init: function () {
          var e = this,
            i = document,
            n = t.PluginDetector.nav,
            r = t.PluginDetector.ua.toLowerCase(),
            o, s = ["source", "track", "audio", "video"];
          e.isiPad = r.match(/ipad/i) !== null;
          e.isiPhone = r.match(/iphone/i) !== null;
          e.isiOS = e.isiPhone || e.isiPad;
          e.isAndroid = r.match(/android/i) !== null;
          e.isBustedAndroid = r.match(/android 2\.[12]/) !== null;
          e.isIE = n.appName.toLowerCase().indexOf("microsoft") != -1;
          e.isChrome = r.match(/chrome/gi) !== null;
          e.isFirefox = r.match(/firefox/gi) !== null;
          e.isWebkit = r.match(/webkit/gi) !== null;
          e.isGecko = r.match(/gecko/gi) !== null && !e.isWebkit;
          e.isOpera = r.match(/opera/gi) !== null;
          e.hasTouch = "ontouchstart" in window;
          for (n = 0; n < s.length; n++) o = document.createElement(s[n]);
          e.supportsMediaTag = typeof o.canPlayType !== "undefined" || e.isBustedAndroid;
          e.hasSemiNativeFullScreen = typeof o.webkitEnterFullscreen !== "undefined";
          e.hasWebkitNativeFullScreen = typeof o.webkitRequestFullScreen !== "undefined";
          e.hasMozNativeFullScreen = typeof o.mozRequestFullScreen !== "undefined";
          e.hasTrueNativeFullScreen = e.hasWebkitNativeFullScreen || e.hasMozNativeFullScreen;
          e.nativeFullScreenEnabled = e.hasTrueNativeFullScreen;
          if (e.hasMozNativeFullScreen) e.nativeFullScreenEnabled = o.mozFullScreenEnabled;
          if (this.isChrome) e.hasSemiNativeFullScreen = false;
          if (e.hasTrueNativeFullScreen) {
            e.fullScreenEventName = e.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange";
            e.isFullScreen = function () {
              if (o.mozRequestFullScreen) return i.mozFullScreen;
              else if (o.webkitRequestFullScreen) return i.webkitIsFullScreen
            };
            e.requestFullScreen = function (t) {
              if (e.hasWebkitNativeFullScreen) t.webkitRequestFullScreen();
              else e.hasMozNativeFullScreen && t.mozRequestFullScreen()
            };
            e.cancelFullScreen = function () {
              if (e.hasWebkitNativeFullScreen) document.webkitCancelFullScreen();
              else e.hasMozNativeFullScreen && document.mozCancelFullScreen()
            }
          }
          if (e.hasSemiNativeFullScreen && r.match(/mac os x 10_5/i)) {
            e.hasNativeFullScreen = false;
            e.hasSemiNativeFullScreen = false
          }
        }
      };
      t.MediaFeatures.init();
      t.HtmlMediaElement = {
        pluginType: "native",
        isFullScreen: false,
        setCurrentTime: function (e) {
          this.currentTime = e
        },
        setMuted: function (e) {
          this.muted = e
        },
        setVolume: function (e) {
          this.volume = e
        },
        stop: function () {
          this.pause()
        },
        setSrc: function (e) {
          for (var t = this.getElementsByTagName("source"); t.length > 0;) this.removeChild(t[0]);
          if (typeof e == "string") this.src = e;
          else {
            var i;
            for (t = 0; t < e.length; t++) {
              i = e[t];
              if (this.canPlayType(i.type)) this.src = i.src
            }
          }
        },
        setVideoSize: function (e, t) {
          this.width = e;
          this.height = t
        }
      };
      t.PluginMediaElement = function (e, t, i) {
        this.id = e;
        this.pluginType = t;
        this.src = i;
        this.events = {}
      };
      t.PluginMediaElement.prototype = {
        pluginElement: null,
        pluginType: "",
        isFullScreen: false,
        playbackRate: -1,
        defaultPlaybackRate: -1,
        seekable: [],
        played: [],
        paused: true,
        ended: false,
        seeking: false,
        duration: 0,
        error: null,
        tagName: "",
        muted: false,
        volume: 1,
        currentTime: 0,
        play: function () {
          if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
          }
        },
        load: function () {
          if (this.pluginApi != null) {
            this.pluginType != "youtube" && this.pluginApi.loadMedia();
            this.paused = false
          }
        },
        pause: function () {
          if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
          }
        },
        stop: function () {
          if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
          }
        },
        canPlayType: function (e) {
          var i, n, r, o = t.plugins[this.pluginType];
          for (i = 0; i < o.length; i++) {
            r = o[i];
            if (t.PluginDetector.hasPluginVersion(this.pluginType, r.version))
              for (n = 0; n < r.types.length; n++)
                if (e == r.types[n]) return true
          }
          return false
        },
        positionFullscreenButton: function (e, t, i) {
          this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(e, t, i)
        },
        hideFullscreenButton: function () {
          this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
        },
        setSrc: function (e) {
          if (typeof e == "string") {
            this.pluginApi.setSrc(t.Utility.absolutizeUrl(e));
            this.src = t.Utility.absolutizeUrl(e)
          }
          else {
            var i, n;
            for (i = 0; i < e.length; i++) {
              n = e[i];
              if (this.canPlayType(n.type)) {
                this.pluginApi.setSrc(t.Utility.absolutizeUrl(n.src));
                this.src = t.Utility.absolutizeUrl(e)
              }
            }
          }
        },
        setCurrentTime: function (e) {
          if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e);
            this.currentTime = e
          }
        },
        setVolume: function (e) {
          if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.setVolume(e * 100) : this.pluginApi.setVolume(e);
            this.volume = e
          }
        },
        setMuted: function (e) {
          if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
              e ? this.pluginApi.mute() : this.pluginApi.unMute();
              this.muted = e;
              this.dispatchEvent("volumechange")
            }
            else this.pluginApi.setMuted(e);
            this.muted = e
          }
        },
        setVideoSize: function (e, t) {
          if (this.pluginElement.style) {
            this.pluginElement.style.width = e + "px";
            this.pluginElement.style.height = t + "px"
          }
          this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
        },
        setFullscreen: function (e) {
          this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
        },
        enterFullScreen: function () {
          this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
        },
        exitFullScreen: function () {
          this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(false)
        },
        addEventListener: function (e, t) {
          this.events[e] = this.events[e] || [];
          this.events[e].push(t)
        },
        removeEventListener: function (e, t) {
          if (!e) {
            this.events = {};
            return true
          }
          var n = this.events[e];
          if (!n) return true;
          if (!t) {
            this.events[e] = [];
            return true
          }
          for (i = 0; i < n.length; i++)
            if (n[i] === t) {
              this.events[e].splice(i, 1);
              return true
            }
          return false
        },
        dispatchEvent: function (e) {
          var t, i, n = this.events[e];
          if (n) {
            i = Array.prototype.slice.call(arguments, 1);
            for (t = 0; t < n.length; t++) n[t].apply(null, i)
          }
        },
        attributes: {},
        hasAttribute: function (e) {
          return e in this.attributes
        },
        removeAttribute: function (e) {
          delete this.attributes[e]
        },
        getAttribute: function (e) {
          if (this.hasAttribute(e)) return this.attributes[e];
          return ""
        },
        setAttribute: function (e, t) {
          this.attributes[e] = t
        },
        remove: function () {
          t.Utility.removeSwf(this.pluginElement.id)
        }
      };
      t.MediaPluginBridge = {
        pluginMediaElements: {},
        htmlMediaElements: {},
        registerPluginElement: function (e, t, i) {
          this.pluginMediaElements[e] = t;
          this.htmlMediaElements[e] = i
        },
        initPlugin: function (e) {
          var t = this.pluginMediaElements[e],
            i = this.htmlMediaElements[e];
          if (t) {
            switch (t.pluginType) {
              case "flash":
                t.pluginElement = t.pluginApi = document.getElementById(e);
                break;
              case "silverlight":
                t.pluginElement = document.getElementById(t.id);
                t.pluginApi = t.pluginElement.Content.MediaElementJS
            }
            t.pluginApi != null && t.success && t.success(t, i)
          }
        },
        fireEvent: function (e, t, i) {
          var n, r;
          e = this.pluginMediaElements[e];
          e.ended = false;
          e.paused = true;
          t = {
            type: t,
            target: e
          };
          for (n in i) {
            e[n] = i[n];
            t[n] = i[n]
          }
          r = i.bufferedTime || 0;
          t.target.buffered = t.buffered = {
            start: function () {
              return 0
            },
            end: function () {
              return r
            },
            length: 1
          };
          e.dispatchEvent(t.type, t)
        }
      };
      t.MediaElementDefaults = {
        mode: "auto",
        plugins: ["flash", "silverlight", "youtube", "vimeo"],
        enablePluginDebug: false,
        type: "",
        pluginPath: t.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
        flashName: "flashmediaelement.swf",
        flashStreamer: "",
        enablePluginSmoothing: false,
        silverlightName: "silverlightmediaelement.xap",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        pluginWidth: -1,
        pluginHeight: -1,
        pluginVars: [],
        timerRate: 250,
        startVolume: .8,
        success: function () {},
        error: function () {}
      };
      t.MediaElement = function (e, i) {
        return t.HtmlMediaElementShim.create(e, i)
      };
      t.HtmlMediaElementShim = {
        create: function (e, i) {
          var n = t.MediaElementDefaults,
            r = typeof e == "string" ? document.getElementById(e) : e,
            o = r.tagName.toLowerCase(),
            s = o === "audio" || o === "video",
            a = s ? r.getAttribute("src") : r.getAttribute("href");
          o = r.getAttribute("poster");
          var l = r.getAttribute("autoplay"),
            u = r.getAttribute("preload"),
            c = r.getAttribute("controls"),
            d;
          for (d in i) n[d] = i[d];
          a = typeof a == "undefined" || a === null || a == "" ? null : a;
          o = typeof o == "undefined" || o === null ? "" : o;
          u = typeof u == "undefined" || u === null || u === "false" ? "none" : u;
          l = !(typeof l == "undefined" || l === null || l === "false");
          c = !(typeof c == "undefined" || c === null || c === "false");
          d = this.determinePlayback(r, n, t.MediaFeatures.supportsMediaTag, s, a);
          d.url = d.url !== null ? t.Utility.absolutizeUrl(d.url) : "";
          if (d.method == "native") {
            if (t.MediaFeatures.isBustedAndroid) {
              r.src = d.url;
              r.addEventListener("click", function () {
                r.play()
              }, false)
            }
            return this.updateNative(d, n, l, u)
          }
          else if (d.method !== "") return this.createPlugin(d, n, o, l, u, c);
          else {
            this.createErrorMessage(d, n, o);
            return this
          }
        },
        determinePlayback: function (e, i, n, r, o) {
          var s = [],
            a, l, u = {
              method: "",
              url: "",
              htmlMediaElement: e,
              isVideo: e.tagName.toLowerCase() != "audio"
            },
            c, d;
          if (typeof i.type != "undefined" && i.type !== "")
            if (typeof i.type == "string") s.push({
              type: i.type,
              url: o
            });
            else
              for (a = 0; a < i.type.length; a++) s.push({
                type: i.type[a],
                url: o
              });
          else if (o !== null) {
            l = this.formatType(o, e.getAttribute("type"));
            s.push({
              type: l,
              url: o
            })
          }
          else
            for (a = 0; a < e.childNodes.length; a++) {
              l = e.childNodes[a];
              if (l.nodeType == 1 && l.tagName.toLowerCase() == "source") {
                o = l.getAttribute("src");
                l = this.formatType(o, l.getAttribute("type"));
                s.push({
                  type: l,
                  url: o
                })
              }
            }
          if (!r && s.length > 0 && s[0].url !== null && this.getTypeFromFile(s[0].url).indexOf("audio") > -1) u.isVideo = false;
          if (t.MediaFeatures.isBustedAndroid) e.canPlayType = function (e) {
            return e.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
          };
          if (n && (i.mode === "auto" || i.mode === "auto_plugin" || i.mode === "native")) {
            if (!r) {
              a = document.createElement(u.isVideo ? "video" : "audio");
              e.parentNode.insertBefore(a, e);
              e.style.display = "none";
              u.htmlMediaElement = e = a
            }
            for (a = 0; a < s.length; a++)
              if (e.canPlayType(s[a].type).replace(/no/, "") !== "" || e.canPlayType(s[a].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                u.method = "native";
                u.url = s[a].url;
                break
              }
            if (u.method === "native") {
              if (u.url !== null) e.src = u.url;
              if (i.mode !== "auto_plugin") return u
            }
          }
          if (i.mode === "auto" || i.mode === "auto_plugin" || i.mode === "shim")
            for (a = 0; a < s.length; a++) {
              l = s[a].type;
              for (e = 0; e < i.plugins.length; e++) {
                o = i.plugins[e];
                c = t.plugins[o];
                for (n = 0; n < c.length; n++) {
                  d = c[n];
                  if (d.version == null || t.PluginDetector.hasPluginVersion(o, d.version))
                    for (r = 0; r < d.types.length; r++)
                      if (l == d.types[r]) {
                        u.method = o;
                        u.url = s[a].url;
                        return u
                      }
                }
              }
            }
          if (i.mode === "auto_plugin" && u.method === "native") return u;
          if (u.method === "" && s.length > 0) u.url = s[0].url;
          return u
        },
        formatType: function (e, t) {
          return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
        },
        getTypeFromFile: function (e) {
          e = e.substring(e.lastIndexOf(".") + 1);
          return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(e) ? "video" : "audio") + "/" + this.getTypeFromExtension(e)
        },
        getTypeFromExtension: function (e) {
          switch (e) {
            case "mp4":
            case "m4v":
              return "mp4";
            case "webm":
            case "webma":
            case "webmv":
              return "webm";
            case "ogg":
            case "oga":
            case "ogv":
              return "ogg";
            default:
              return e
          }
        },
        createErrorMessage: function (e, t, i) {
          var n = e.htmlMediaElement,
            r = document.createElement("div");
          r.className = "me-cannotplay";
          try {
            r.style.width = n.width + "px";
            r.style.height = n.height + "px"
          }
          catch (e) {}
          r.innerHTML = i !== "" ? '<a href="' + e.url + '"><img src="' + i + '" width="100%" height="100%" /></a>' : '<a href="' + e.url + '"><span>Download File</span></a>';
          n.parentNode.insertBefore(r, n);
          n.style.display = "none";
          t.error(n)
        },
        createPlugin: function (e, i, n, r, o, s) {
          n = e.htmlMediaElement;
          var a = 1,
            l = 1,
            u = "me_" + e.method + "_" + t.meIndex++,
            c = new t.PluginMediaElement(u, e.method, e.url),
            d = document.createElement("div"),
            f;
          c.tagName = n.tagName;
          for (f = 0; f < n.attributes.length; f++) {
            var h = n.attributes[f];
            h.specified == true && c.setAttribute(h.name, h.value)
          }
          for (f = n.parentNode; f !== null && f.tagName.toLowerCase() != "body";) {
            if (f.parentNode.tagName.toLowerCase() == "p") {
              f.parentNode.parentNode.insertBefore(f, f.parentNode);
              break
            }
            f = f.parentNode
          }
          if (e.isVideo) {
            a = i.videoWidth > 0 ? i.videoWidth : n.getAttribute("width") !== null ? n.getAttribute("width") : i.defaultVideoWidth;
            l = i.videoHeight > 0 ? i.videoHeight : n.getAttribute("height") !== null ? n.getAttribute("height") : i.defaultVideoHeight;
            a = t.Utility.encodeUrl(a);
            l = t.Utility.encodeUrl(l)
          }
          else if (i.enablePluginDebug) {
            a = 320;
            l = 240
          }
          c.success = i.success;
          t.MediaPluginBridge.registerPluginElement(u, c, n);
          d.className = "me-plugin";
          d.id = u + "_container";
          e.isVideo ? n.parentNode.insertBefore(d, n) : document.body.insertBefore(d, document.body.childNodes[0]);
          r = ["id=" + u, "isvideo=" + (e.isVideo ? "true" : "false"), "autoplay=" + (r ? "true" : "false"), "preload=" + o, "width=" + a, "startvolume=" + i.startVolume, "timerrate=" + i.timerRate, "flashstreamer=" + i.flashStreamer, "height=" + l];
          if (e.url !== null) e.method == "flash" ? r.push("file=" + t.Utility.encodeUrl(e.url)) : r.push("file=" + e.url);
          i.enablePluginDebug && r.push("debug=true");
          i.enablePluginSmoothing && r.push("smoothing=true");
          s && r.push("controls=true");
          if (i.pluginVars) r = r.concat(i.pluginVars);
          switch (e.method) {
            case "silverlight":
              d.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + u + '" name="' + u + '" width="' + a + '" height="' + l + '"><param name="initParams" value="' + r.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + i.pluginPath + i.silverlightName + '" /></object>';
              break;
            case "flash":
              if (t.MediaFeatures.isIE) {
                e = document.createElement("div");
                d.appendChild(e);
                e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + u + '" width="' + a + '" height="' + l + '"><param name="movie" value="' + i.pluginPath + i.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + r.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
              }
              else d.innerHTML = '<embed id="' + u + '" name="' + u + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + i.pluginPath + i.flashName + '" flashvars="' + r.join("&") + '" width="' + a + '" height="' + l + '"></embed>';
              break;
            case "youtube":
              i = e.url.substr(e.url.lastIndexOf("=") + 1);
              youtubeSettings = {
                container: d,
                containerId: d.id,
                pluginMediaElement: c,
                pluginId: u,
                videoId: i,
                height: l,
                width: a
              };
              t.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? t.YouTubeApi.createFlash(youtubeSettings) : t.YouTubeApi.enqueueIframe(youtubeSettings);
              break;
            case "vimeo":
              c.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1);
              d.innerHTML = '<object width="' + a + '" height="' + l + '"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="flashvars" value="api=1" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=' + c.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" /><embed src="//vimeo.com/moogaloop.swf?api=1&amp;clip_id=' + c.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="' + a + '" height="' + l + '"></embed></object>'
          }
          n.style.display = "none";
          return c
        },
        updateNative: function (e, i) {
          var n = e.htmlMediaElement,
            r;
          for (r in t.HtmlMediaElement) n[r] = t.HtmlMediaElement[r];
          i.success(n, n);
          return n
        }
      };
      t.YouTubeApi = {
        isIframeStarted: false,
        isIframeLoaded: false,
        loadIframeApi: function () {
          if (!this.isIframeStarted) {
            var e = document.createElement("script");
            e.src = "http://www.youtube.com/player_api";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
            this.isIframeStarted = true
          }
        },
        iframeQueue: [],
        enqueueIframe: function (e) {
          if (this.isLoaded) this.createIframe(e);
          else {
            this.loadIframeApi();
            this.iframeQueue.push(e)
          }
        },
        createIframe: function (e) {
          var i = e.pluginMediaElement,
            n = new YT.Player(e.containerId, {
              height: e.height,
              width: e.width,
              videoId: e.videoId,
              playerVars: {
                controls: 0
              },
              events: {
                onReady: function () {
                  e.pluginMediaElement.pluginApi = n;
                  t.MediaPluginBridge.initPlugin(e.pluginId);
                  setInterval(function () {
                    t.YouTubeApi.createEvent(n, i, "timeupdate")
                  }, 250)
                },
                onStateChange: function (e) {
                  t.YouTubeApi.handleStateChange(e.data, n, i)
                }
              }
            })
        },
        createEvent: function (e, t, i) {
          i = {
            type: i,
            target: t
          };
          if (e && e.getDuration) {
            t.currentTime = i.currentTime = e.getCurrentTime();
            t.duration = i.duration = e.getDuration();
            i.paused = t.paused;
            i.ended = t.ended;
            i.muted = e.isMuted();
            i.volume = e.getVolume() / 100;
            i.bytesTotal = e.getVideoBytesTotal();
            i.bufferedBytes = e.getVideoBytesLoaded();
            var n = i.bufferedBytes / i.bytesTotal * i.duration;
            i.target.buffered = i.buffered = {
              start: function () {
                return 0
              },
              end: function () {
                return n
              },
              length: 1
            }
          }
          t.dispatchEvent(i.type, i)
        },
        iFrameReady: function () {
          for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
        },
        flashPlayers: {},
        createFlash: function (e) {
          this.flashPlayers[e.pluginId] = e;
          var i, n = "http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
          if (t.MediaFeatures.isIE) {
            i = document.createElement("div");
            e.container.appendChild(i);
            i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '"><param name="movie" value="' + n + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
          }
          else e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + n + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; "><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
        },
        flashReady: function (e) {
          var i = this.flashPlayers[e],
            n = document.getElementById(e),
            r = i.pluginMediaElement;
          r.pluginApi = r.pluginElement = n;
          t.MediaPluginBridge.initPlugin(e);
          n.cueVideoById(i.videoId);
          e = i.containerId + "_callback";
          window[e] = function (e) {
            t.YouTubeApi.handleStateChange(e, n, r)
          };
          n.addEventListener("onStateChange", e);
          setInterval(function () {
            t.YouTubeApi.createEvent(n, r, "timeupdate")
          }, 250)
        },
        handleStateChange: function (e, i, n) {
          switch (e) {
            case -1:
              n.paused = true;
              n.ended = true;
              t.YouTubeApi.createEvent(i, n, "loadedmetadata");
              break;
            case 0:
              n.paused = false;
              n.ended = true;
              t.YouTubeApi.createEvent(i, n, "ended");
              break;
            case 1:
              n.paused = false;
              n.ended = false;
              t.YouTubeApi.createEvent(i, n, "play");
              t.YouTubeApi.createEvent(i, n, "playing");
              break;
            case 2:
              n.paused = true;
              n.ended = false;
              t.YouTubeApi.createEvent(i, n, "pause");
              break;
            case 3:
              t.YouTubeApi.createEvent(i, n, "progress")
          }
        }
      };

      function n() {
        t.YouTubeApi.iFrameReady()
      }

      function r(e) {
        t.YouTubeApi.flashReady(e)
      }
      window.mejs = t;
      window.MediaElement = t.MediaElement;
      if (typeof e != "undefined") t.$ = e;
      else if (typeof ender != "undefined") t.$ = ender;
      (function (i) {
        t.MepDefaults = {
          poster: "",
          defaultVideoWidth: 480,
          defaultVideoHeight: 270,
          videoWidth: -1,
          videoHeight: -1,
          defaultAudioWidth: 400,
          defaultAudioHeight: 30,
          defaultSeekBackwardInterval: function (e) {
            return e.duration * .05
          },
          defaultSeekForwardInterval: function (e) {
            return e.duration * .05
          },
          audioWidth: -1,
          audioHeight: -1,
          startVolume: .8,
          loop: false,
          enableAutosize: true,
          alwaysShowHours: false,
          showTimecodeFrameCount: false,
          framesPerSecond: 25,
          autosizeProgress: true,
          alwaysShowControls: false,
          iPadUseNativeControls: false,
          iPhoneUseNativeControls: false,
          AndroidUseNativeControls: false,
          features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
          isVideo: true,
          enableKeyboard: true,
          pauseOtherPlayers: true,
          keyActions: [{
            keys: [32, 179],
            action: function (e, t) {
              t.paused || t.ended ? t.play() : t.pause()
            }
          }, {
            keys: [38],
            action: function (e, t) {
              t.setVolume(Math.min(t.volume + .1, 1))
            }
          }, {
            keys: [40],
            action: function (e, t) {
              t.setVolume(Math.max(t.volume - .1, 0))
            }
          }, {
            keys: [37, 227],
            action: function (e, t) {
              if (!isNaN(t.duration) && t.duration > 0) {
                if (e.isVideo) {
                  e.showControls();
                  e.startControlsTimer()
                }
                var i = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                t.setCurrentTime(i)
              }
            }
          }, {
            keys: [39, 228],
            action: function (e, t) {
              if (!isNaN(t.duration) && t.duration > 0) {
                if (e.isVideo) {
                  e.showControls();
                  e.startControlsTimer()
                }
                var i = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                t.setCurrentTime(i)
              }
            }
          }, {
            keys: [70],
            action: function (e) {
              if (typeof e.enterFullScreen != "undefined") e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
            }
          }]
        };
        t.mepIndex = 0;
        t.players = [];
        t.MediaElementPlayer = function (e, n) {
          if (!(this instanceof t.MediaElementPlayer)) return new t.MediaElementPlayer(e, n);
          this.$media = this.$node = i(e);
          this.node = this.media = this.$media[0];
          if (typeof this.node.player != "undefined") return this.node.player;
          else this.node.player = this;
          if (typeof n == "undefined") n = this.$node.data("mejsoptions");
          this.options = i.extend({}, t.MepDefaults, n);
          t.players.push(this);
          this.init();
          return this
        };
        t.MediaElementPlayer.prototype = {
          hasFocus: false,
          controlsAreVisible: true,
          init: function () {
            var e = this,
              n = t.MediaFeatures,
              r = i.extend(true, {}, e.options, {
                success: function (t, i) {
                  e.meReady(t, i)
                },
                error: function (t) {
                  e.handleError(t)
                }
              }),
              o = e.media.tagName.toLowerCase();
            e.isDynamic = o !== "audio" && o !== "video";
            e.isVideo = e.isDynamic ? e.options.isVideo : o !== "audio" && e.options.isVideo;
            if (n.isiPad && e.options.iPadUseNativeControls || n.isiPhone && e.options.iPhoneUseNativeControls) {
              e.$media.attr("controls", "controls");
              if (n.isiPad && e.media.getAttribute("autoplay") !== null) {
                e.media.load();
                e.media.play()
              }
            }
            else if (!(n.isAndroid && e.AndroidUseNativeControls)) {
              e.$media.removeAttr("controls");
              e.id = "mep_" + t.mepIndex++;
              e.container = i('<div id="' + e.id + '" class="mejs-container"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(e.$media[0].className).insertBefore(e.$media);
              e.container.addClass((n.isAndroid ? "mejs-android " : "") + (n.isiOS ? "mejs-ios " : "") + (n.isiPad ? "mejs-ipad " : "") + (n.isiPhone ? "mejs-iphone " : "") + (e.isVideo ? "mejs-video " : "mejs-audio "));
              if (n.isiOS) {
                n = e.$media.clone();
                e.container.find(".mejs-mediaelement").append(n);
                e.$media.remove();
                e.$node = e.$media = n;
                e.node = e.media = n[0]
              }
              else e.container.find(".mejs-mediaelement").append(e.$media);
              e.controls = e.container.find(".mejs-controls");
              e.layers = e.container.find(".mejs-layers");
              n = e.isVideo ? "video" : "audio";
              o = n.substring(0, 1).toUpperCase() + n.substring(1);
              e.width = e.options[n + "Width"] > 0 || e.options[n + "Width"].toString().indexOf("%") > -1 ? e.options[n + "Width"] : e.media.style.width !== "" && e.media.style.width !== null ? e.media.style.width : e.media.getAttribute("width") !== null ? e.$media.attr("width") : e.options["default" + o + "Width"];
              e.height = e.options[n + "Height"] > 0 || e.options[n + "Height"].toString().indexOf("%") > -1 ? e.options[n + "Height"] : e.media.style.height !== "" && e.media.style.height !== null ? e.media.style.height : e.$media[0].getAttribute("height") !== null ? e.$media.attr("height") : e.options["default" + o + "Height"];
              e.setPlayerSize(e.width, e.height);
              r.pluginWidth = e.height;
              r.pluginHeight = e.width
            }
            t.MediaElement(e.$media[0], r)
          },
          showControls: function (e) {
            var t = this;
            e = typeof e == "undefined" || e;
            if (!t.controlsAreVisible) {
              if (e) {
                t.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                  t.controlsAreVisible = true
                });
                t.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                  t.controlsAreVisible = true
                })
              }
              else {
                t.controls.css("visibility", "visible").css("display", "block");
                t.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                t.controlsAreVisible = true
              }
              t.setControlsSize()
            }
          },
          hideControls: function (e) {
            var t = this;
            e = typeof e == "undefined" || e;
            if (t.controlsAreVisible)
              if (e) {
                t.controls.stop(true, true).fadeOut(200, function () {
                  i(this).css("visibility", "hidden").css("display", "block");
                  t.controlsAreVisible = false
                });
                t.container.find(".mejs-control").stop(true, true).fadeOut(200, function () {
                  i(this).css("visibility", "hidden").css("display", "block")
                })
              }
            else {
              t.controls.css("visibility", "hidden").css("display", "block");
              t.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
              t.controlsAreVisible = false
            }
          },
          controlsTimer: null,
          startControlsTimer: function (e) {
            var t = this;
            e = typeof e != "undefined" ? e : 1500;
            t.killControlsTimer("start");
            t.controlsTimer = setTimeout(function () {
              t.hideControls();
              t.killControlsTimer("hide")
            }, e)
          },
          killControlsTimer: function () {
            if (this.controlsTimer !== null) {
              clearTimeout(this.controlsTimer);
              delete this.controlsTimer;
              this.controlsTimer = null
            }
          },
          controlsEnabled: true,
          disableControls: function () {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
          },
          enableControls: function () {
            this.showControls(false);
            this.controlsEnabled = true
          },
          meReady: function (e, n) {
            var r = this,
              o = t.MediaFeatures,
              s = n.getAttribute("autoplay");
            s = !(typeof s == "undefined" || s === null || s === "false");
            var a;
            if (!r.created) {
              r.created = true;
              r.media = e;
              r.domNode = n;
              if (!(o.isAndroid && r.options.AndroidUseNativeControls) && !(o.isiPad && r.options.iPadUseNativeControls) && !(o.isiPhone && r.options.iPhoneUseNativeControls)) {
                r.buildposter(r, r.controls, r.layers, r.media);
                r.buildkeyboard(r, r.controls, r.layers, r.media);
                r.buildoverlays(r, r.controls, r.layers, r.media);
                r.findTracks();
                for (a in r.options.features) {
                  o = r.options.features[a];
                  if (r["build" + o]) try {
                    r["build" + o](r, r.controls, r.layers, r.media)
                  }
                  catch (e) {}
                }
                r.container.trigger("controlsready");
                r.setPlayerSize(r.width, r.height);
                r.setControlsSize();
                if (r.isVideo) {
                  if (t.MediaFeatures.hasTouch) r.$media.bind("touchstart", function () {
                    if (r.controlsAreVisible) r.hideControls(false);
                    else r.controlsEnabled && r.showControls(false)
                  });
                  else {
                    (r.media.pluginType == "native" ? r.$media : i(r.media.pluginElement)).click(function () {
                      e.paused ? e.play() : e.pause()
                    });
                    r.container.bind("mouseenter mouseover", function () {
                      if (r.controlsEnabled)
                        if (!r.options.alwaysShowControls) {
                          r.killControlsTimer("enter");
                          r.showControls();
                          r.startControlsTimer(2500)
                        }
                    }).bind("mousemove", function () {
                      if (r.controlsEnabled) {
                        r.controlsAreVisible || r.showControls();
                        r.options.alwaysShowControls || r.startControlsTimer(2500)
                      }
                    }).bind("mouseleave", function () {
                      r.controlsEnabled && !r.media.paused && !r.options.alwaysShowControls && r.startControlsTimer(1e3)
                    })
                  }
                  s && !r.options.alwaysShowControls && r.hideControls();
                  r.options.enableAutosize && r.media.addEventListener("loadedmetadata", function (e) {
                    if (r.options.videoHeight <= 0 && r.domNode.getAttribute("height") === null && !isNaN(e.target.videoHeight)) {
                      r.setPlayerSize(e.target.videoWidth, e.target.videoHeight);
                      r.setControlsSize();
                      r.media.setVideoSize(e.target.videoWidth, e.target.videoHeight)
                    }
                  }, false)
                }
                e.addEventListener("play", function () {
                  for (var e = 0, i = t.players.length; e < i; e++) {
                    var n = t.players[e];
                    n.id != r.id && r.options.pauseOtherPlayers && !n.paused && !n.ended && n.pause();
                    n.hasFocus = false
                  }
                  r.hasFocus = true
                }, false);
                r.media.addEventListener("ended", function () {
                  try {
                    r.media.setCurrentTime(0)
                  }
                  catch (e) {}
                  r.media.pause();
                  r.setProgressRail && r.setProgressRail();
                  r.setCurrentRail && r.setCurrentRail();
                  if (r.options.loop) r.media.play();
                  else !r.options.alwaysShowControls && r.controlsEnabled && r.showControls()
                }, false);
                r.media.addEventListener("loadedmetadata", function () {
                  r.updateDuration && r.updateDuration();
                  r.updateCurrent && r.updateCurrent();
                  if (!r.isFullScreen) {
                    r.setPlayerSize(r.width, r.height);
                    r.setControlsSize()
                  }
                }, false);
                setTimeout(function () {
                  r.setPlayerSize(r.width, r.height);
                  r.setControlsSize()
                }, 50);
                i(window).resize(function () {
                  r.isFullScreen || t.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || r.setPlayerSize(r.width, r.height);
                  r.setControlsSize()
                });
                r.media.pluginType == "youtube" && r.container.find(".mejs-overlay-play").hide()
              }
              if (s && e.pluginType == "native") {
                e.load();
                e.play()
              }
              if (r.options.success) typeof r.options.success == "string" ? window[r.options.success](r.media, r.domNode, r) : r.options.success(r.media, r.domNode, r)
            }
          },
          handleError: function (e) {
            this.controls.hide();
            this.options.error && this.options.error(e)
          },
          setPlayerSize: function (e, t) {
            if (typeof e != "undefined") this.width = e;
            if (typeof t != "undefined") this.height = t;
            if (this.height.toString().indexOf("%") > 0 || this.$node.css("max-width") === "100%") {
              var n = this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : this.options.defaultVideoWidth,
                r = this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight : this.options.defaultVideoHeight,
                o = this.container.parent().width();
              n = parseInt(o * r / n, 10);
              if (this.container.parent()[0].tagName.toLowerCase() === "body") {
                o = i(window).width();
                n = i(window).height()
              }
              if (n != 0) {
                this.container.width(o).height(n);
                this.$media.width("100%").height("100%");
                this.container.find("object, embed, iframe").width("100%").height("100%");
                this.isVideo && this.media.setVideoSize && this.media.setVideoSize(o, n);
                this.layers.children(".mejs-layer").width("100%").height("100%")
              }
            }
            else {
              this.container.width(this.width).height(this.height);
              this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
          },
          setControlsSize: function () {
            var e = 0,
              t = 0,
              n = this.controls.find(".mejs-time-rail"),
              r = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var o = n.siblings();
            if (this.options && !this.options.autosizeProgress) t = parseInt(n.css("width"));
            if (t === 0 || !t) {
              o.each(function () {
                if (i(this).css("position") != "absolute") e += i(this).outerWidth(true)
              });
              t = this.controls.width() - e - (n.outerWidth(true) - n.width()) - 1
            }
            n.width(t);
            r.width(t - (r.outerWidth(true) - r.width()));
            this.setProgressRail && this.setProgressRail();
            this.setCurrentRail && this.setCurrentRail()
          },
          buildposter: function (e, t, n, r) {
            var o = i('<div class="mejs-poster mejs-layer"></div>').appendTo(n);
            t = e.$media.attr("poster");
            if (e.options.poster !== "") t = e.options.poster;
            t !== "" && t != null ? this.setPoster(t) : o.hide();
            r.addEventListener("play", function () {
              o.hide()
            }, false)
          },
          setPoster: function (e) {
            var t = this.container.find(".mejs-poster"),
              n = t.find("img");
            if (n.length == 0) n = i('<img width="100%" height="100%" />').appendTo(t);
            n.attr("src", e)
          },
          buildoverlays: function (e, n, r, o) {
            if (e.isVideo) {
              var s = i('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(r),
                a = i('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(r),
                l = i('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(r).click(function () {
                  o.paused ? o.play() : o.pause()
                });
              o.addEventListener("play", function () {
                l.hide();
                s.hide();
                n.find(".mejs-time-buffering").hide();
                a.hide()
              }, false);
              o.addEventListener("playing", function () {
                l.hide();
                s.hide();
                n.find(".mejs-time-buffering").hide();
                a.hide()
              }, false);
              o.addEventListener("seeking", function () {
                s.show();
                n.find(".mejs-time-buffering").show()
              }, false);
              o.addEventListener("seeked", function () {
                s.hide();
                n.find(".mejs-time-buffering").hide()
              }, false);
              o.addEventListener("pause", function () {
                t.MediaFeatures.isiPhone || l.show()
              }, false);
              o.addEventListener("waiting", function () {
                s.show();
                n.find(".mejs-time-buffering").show()
              }, false);
              o.addEventListener("loadeddata", function () {
                s.show();
                n.find(".mejs-time-buffering").show()
              }, false);
              o.addEventListener("canplay", function () {
                s.hide();
                n.find(".mejs-time-buffering").hide()
              }, false);
              o.addEventListener("error", function () {
                s.hide();
                n.find(".mejs-time-buffering").hide();
                a.show();
                a.find("mejs-overlay-error").html("Error loading this resource")
              }, false)
            }
          },
          buildkeyboard: function (e, t, n, r) {
            i(document).keydown(function (t) {
              if (e.hasFocus && e.options.enableKeyboard)
                for (var i = 0, n = e.options.keyActions.length; i < n; i++)
                  for (var o = e.options.keyActions[i], s = 0, a = o.keys.length; s < a; s++)
                    if (t.keyCode == o.keys[s]) {
                      t.preventDefault();
                      o.action(e, r, t.keyCode);
                      return false
                    }
              return true
            });
            i(document).click(function (t) {
              if (i(t.target).closest(".mejs-container").length == 0) e.hasFocus = false
            })
          },
          findTracks: function () {
            var e = this,
              t = e.$media.find("track");
            e.tracks = [];
            t.each(function (t, n) {
              n = i(n);
              e.tracks.push({
                srclang: n.attr("srclang").toLowerCase(),
                src: n.attr("src"),
                kind: n.attr("kind"),
                label: n.attr("label") || "",
                entries: [],
                isLoaded: false
              })
            })
          },
          changeSkin: function (e) {
            this.container[0].className = "mejs-container " + e;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize()
          },
          play: function () {
            this.media.play()
          },
          pause: function () {
            this.media.pause()
          },
          load: function () {
            this.media.load()
          },
          setMuted: function (e) {
            this.media.setMuted(e)
          },
          setCurrentTime: function (e) {
            this.media.setCurrentTime(e)
          },
          getCurrentTime: function () {
            return this.media.currentTime
          },
          setVolume: function (e) {
            this.media.setVolume(e)
          },
          getVolume: function () {
            return this.media.volume
          },
          setSrc: function (e) {
            this.media.setSrc(e)
          },
          remove: function () {
            if (this.media.pluginType === "flash") this.media.remove();
            else this.media.pluginType === "native" && this.$media.prop("controls", true);
            this.isDynamic || this.$node.insertBefore(this.container);
            this.container.remove()
          }
        };
        if (typeof e != "undefined") e.fn.mediaelementplayer = function (e) {
          return this.each(function () {
            new t.MediaElementPlayer(this, e)
          })
        };
        i(document).ready(function () {
          i(".mejs-player").mediaelementplayer()
        });
        window.MediaElementPlayer = t.MediaElementPlayer
      })(t.$);
      (function (e) {
        e.extend(t.MepDefaults, {
          playpauseText: "Play/Pause"
        });
        e.extend(MediaElementPlayer.prototype, {
          buildplaypause: function (t, i, n, r) {
            var o = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '"></button></div>').appendTo(i).click(function (e) {
              e.preventDefault();
              r.paused ? r.play() : r.pause();
              return false
            });
            r.addEventListener("play", function () {
              o.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            r.addEventListener("playing", function () {
              o.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            r.addEventListener("pause", function () {
              o.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            r.addEventListener("paused", function () {
              o.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
          }
        })
      })(t.$);
      (function (e) {
        e.extend(t.MepDefaults, {
          stopText: "Stop"
        });
        e.extend(MediaElementPlayer.prototype, {
          buildstop: function (i, n, r, o) {
            e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '"></button></div>').appendTo(n).click(function () {
              o.paused || o.pause();
              if (o.currentTime > 0) {
                o.setCurrentTime(0);
                n.find(".mejs-time-current").width("0px");
                n.find(".mejs-time-handle").css("left", "0px");
                n.find(".mejs-time-float-current").html(t.Utility.secondsToTimeCode(0));
                n.find(".mejs-currenttime").html(t.Utility.secondsToTimeCode(0));
                r.find(".mejs-poster").show()
              }
            })
          }
        })
      })(t.$);
      (function (e) {
        e.extend(MediaElementPlayer.prototype, {
          buildprogress: function (i, n, r, o) {
            e('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(n);
            n.find(".mejs-time-buffering").hide();
            var s = n.find(".mejs-time-total");
            r = n.find(".mejs-time-loaded");
            var a = n.find(".mejs-time-current"),
              l = n.find(".mejs-time-handle"),
              u = n.find(".mejs-time-float"),
              c = n.find(".mejs-time-float-current"),
              d = function (e) {
                e = e.pageX;
                var i = s.offset(),
                  n = s.outerWidth(),
                  r = 0;
                r = 0;
                var a = e - i.left;
                if (e > i.left && e <= n + i.left && o.duration) {
                  r = (e - i.left) / n;
                  r = r <= .02 ? 0 : r * o.duration;
                  f && o.setCurrentTime(r);
                  if (!t.MediaFeatures.hasTouch) {
                    u.css("left", a);
                    c.html(t.Utility.secondsToTimeCode(r));
                    u.show()
                  }
                }
              },
              f = false;
            s.bind("mousedown", function (t) {
              if (t.which === 1) {
                f = true;
                d(t);
                e(document).bind("mousemove.dur", function (e) {
                  d(e)
                }).bind("mouseup.dur", function () {
                  f = false;
                  u.hide();
                  e(document).unbind(".dur")
                });
                return false
              }
            }).bind("mouseenter", function () {
              e(document).bind("mousemove.dur", function (e) {
                d(e)
              });
              t.MediaFeatures.hasTouch || u.show()
            }).bind("mouseleave", function () {
              if (!f) {
                e(document).unbind(".dur");
                u.hide()
              }
            });
            o.addEventListener("progress", function (e) {
              i.setProgressRail(e);
              i.setCurrentRail(e)
            }, false);
            o.addEventListener("timeupdate", function (e) {
              i.setProgressRail(e);
              i.setCurrentRail(e)
            }, false);
            this.loaded = r;
            this.total = s;
            this.current = a;
            this.handle = l
          },
          setProgressRail: function (e) {
            var t = e != undefined ? e.target : this.media,
              i = null;
            if (t && t.buffered && t.buffered.length > 0 && t.buffered.end && t.duration) i = t.buffered.end(0) / t.duration;
            else if (t && t.bytesTotal != undefined && t.bytesTotal > 0 && t.bufferedBytes != undefined) i = t.bufferedBytes / t.bytesTotal;
            else if (e && e.lengthComputable && e.total != 0) i = e.loaded / e.total;
            if (i !== null) {
              i = Math.min(1, Math.max(0, i));
              this.loaded && this.total && this.loaded.width(this.total.width() * i)
            }
          },
          setCurrentRail: function () {
            if (this.media.currentTime != undefined && this.media.duration)
              if (this.total && this.handle) {
                var e = this.total.width() * this.media.currentTime / this.media.duration,
                  t = e - this.handle.outerWidth(true) / 2;
                this.current.width(e);
                this.handle.css("left", t)
              }
          }
        })
      })(t.$);
      (function (e) {
        e.extend(t.MepDefaults, {
          duration: -1,
          timeAndDurationSeparator: " <span> | </span> "
        });
        e.extend(MediaElementPlayer.prototype, {
          buildcurrent: function (t, i, n, r) {
            e('<div class="mejs-time"><span class="mejs-currenttime">' + (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(i);
            this.currenttime = this.controls.find(".mejs-currenttime");
            r.addEventListener("timeupdate", function () {
              t.updateCurrent()
            }, false)
          },
          buildduration: function (i, n, r, o) {
            if (n.children().last().find(".mejs-currenttime").length > 0) e(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? t.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (i.options.alwaysShowHours ? "00:" : "") + (i.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(n.find(".mejs-time"));
            else {
              n.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
              e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? t.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (i.options.alwaysShowHours ? "00:" : "") + (i.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(n)
            }
            this.durationD = this.controls.find(".mejs-duration");
            o.addEventListener("timeupdate", function () {
              i.updateDuration()
            }, false)
          },
          updateCurrent: function () {
            if (this.currenttime) this.currenttime.html(t.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
          },
          updateDuration: function () {
            if (this.media.duration && this.durationD) this.durationD.html(t.Utility.secondsToTimeCode(this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
          }
        })
      })(t.$);
      (function (e) {
        e.extend(t.MepDefaults, {
          muteText: "Mute Toggle",
          hideVolumeOnTouchDevices: true,
          audioVolume: "horizontal",
          videoVolume: "vertical"
        });
        e.extend(MediaElementPlayer.prototype, {
          buildvolume: function (i, n, r, o) {
            if (!(t.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)) {
              var s = this.isVideo ? this.options.videoVolume : this.options.audioVolume,
                a = s == "horizontal" ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + this.id + '" title="' + this.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(n) : e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + this.id + '" title="' + this.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(n),
                l = this.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                u = this.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                c = this.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                d = this.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                f = function (e, t) {
                  if (!l.is(":visible") && typeof t != "undefined") {
                    l.show();
                    f(e, true);
                    l.hide()
                  }
                  else {
                    e = Math.max(0, e);
                    e = Math.min(e, 1);
                    e == 0 ? a.removeClass("mejs-mute").addClass("mejs-unmute") : a.removeClass("mejs-unmute").addClass("mejs-mute");
                    if (s == "vertical") {
                      var i = u.height(),
                        n = u.position(),
                        r = i - i * e;
                      d.css("top", n.top + r - d.height() / 2);
                      c.height(i - r);
                      c.css("top", n.top + r)
                    }
                    else {
                      i = u.width();
                      n = u.position();
                      i = i * e;
                      d.css("left", n.left + i - d.width() / 2);
                      c.width(i)
                    }
                  }
                },
                h = function (e) {
                  var t = null,
                    i = u.offset();
                  if (s == "vertical") {
                    t = u.height();
                    parseInt(u.css("top").replace(/px/, ""), 10);
                    t = (t - (e.pageY - i.top)) / t;
                    if (i.top == 0 || i.left == 0) return
                  }
                  else {
                    t = u.width();
                    t = (e.pageX - i.left) / t
                  }
                  t = Math.max(0, t);
                  t = Math.min(t, 1);
                  f(t);
                  t == 0 ? o.setMuted(true) : o.setMuted(false);
                  o.setVolume(t)
                },
                p = false,
                m = false;
              a.hover(function () {
                l.show();
                m = true
              }, function () {
                m = false;
                !p && s == "vertical" && l.hide()
              });
              l.bind("mouseover", function () {
                m = true
              }).bind("mousedown", function (t) {
                h(t);
                e(document).bind("mousemove.vol", function (e) {
                  h(e)
                }).bind("mouseup.vol", function () {
                  p = false;
                  e(document).unbind(".vol");
                  !m && s == "vertical" && l.hide()
                });
                p = true;
                return false
              });
              a.find("button").click(function () {
                o.setMuted(!o.muted)
              });
              o.addEventListener("volumechange", function () {
                if (!p)
                  if (o.muted) {
                    f(0);
                    a.removeClass("mejs-mute").addClass("mejs-unmute")
                  }
                else {
                  f(o.volume);
                  a.removeClass("mejs-unmute").addClass("mejs-mute")
                }
              }, false);
              if (this.container.is(":visible")) {
                f(i.options.startVolume);
                o.pluginType === "native" && o.setVolume(i.options.startVolume)
              }
            }
          }
        })
      })(t.$);
      (function (e) {
        e.extend(t.MepDefaults, {
          usePluginFullScreen: true,
          newWindowCallback: function () {
            return ""
          },
          fullscreenText: "Fullscreen"
        });
        e.extend(MediaElementPlayer.prototype, {
          isFullScreen: false,
          isNativeFullScreen: false,
          docStyleOverflow: null,
          isInIframe: false,
          buildfullscreen: function (i, n, r, o) {
            if (i.isVideo) {
              i.isInIframe = window.location != window.parent.location;
              if (t.MediaFeatures.hasTrueNativeFullScreen) {
                r = null;
                r = t.MediaFeatures.hasMozNativeFullScreen ? e(document) : i.container;
                r.bind(t.MediaFeatures.fullScreenEventName, function () {
                  if (t.MediaFeatures.isFullScreen()) {
                    i.isNativeFullScreen = true;
                    i.setControlsSize()
                  }
                  else {
                    i.isNativeFullScreen = false;
                    i.exitFullScreen()
                  }
                })
              }
              var s = this,
                a = e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + s.id + '" title="' + s.options.fullscreenText + '"></button></div>').appendTo(n);
              if (s.media.pluginType === "native" || !s.options.usePluginFullScreen && !t.MediaFeatures.isFirefox) a.click(function () {
                t.MediaFeatures.hasTrueNativeFullScreen && t.MediaFeatures.isFullScreen() || i.isFullScreen ? i.exitFullScreen() : i.enterFullScreen()
              });
              else {
                var l = null;
                if (function () {
                    var e = document.createElement("x"),
                      t = document.documentElement,
                      i = window.getComputedStyle;
                    if (!("pointerEvents" in e.style)) return false;
                    e.style.pointerEvents = "auto";
                    e.style.pointerEvents = "x";
                    t.appendChild(e);
                    i = i && i(e, "").pointerEvents === "auto";
                    t.removeChild(e);
                    return !!i
                  }() && !t.MediaFeatures.isOpera) {
                  var u = false,
                    c = function () {
                      if (u) {
                        d.hide();
                        f.hide();
                        h.hide();
                        a.css("pointer-events", "");
                        s.controls.css("pointer-events", "");
                        u = false
                      }
                    },
                    d = e('<div class="mejs-fullscreen-hover" />').appendTo(s.container).mouseover(c),
                    f = e('<div class="mejs-fullscreen-hover"  />').appendTo(s.container).mouseover(c),
                    h = e('<div class="mejs-fullscreen-hover"  />').appendTo(s.container).mouseover(c),
                    p = function () {
                      var e = {
                        position: "absolute",
                        top: 0,
                        left: 0
                      };
                      d.css(e);
                      f.css(e);
                      h.css(e);
                      d.width(s.container.width()).height(s.container.height() - s.controls.height());
                      e = a.offset().left - s.container.offset().left;
                      fullScreenBtnWidth = a.outerWidth(true);
                      f.width(e).height(s.controls.height()).css({
                        top: s.container.height() - s.controls.height()
                      });
                      h.width(s.container.width() - e - fullScreenBtnWidth).height(s.controls.height()).css({
                        top: s.container.height() - s.controls.height(),
                        left: e + fullScreenBtnWidth
                      })
                    };
                  e(document).resize(function () {
                    p()
                  });
                  a.mouseover(function () {
                    if (!s.isFullScreen) {
                      var e = a.offset(),
                        t = i.container.offset();
                      o.positionFullscreenButton(e.left - t.left, e.top - t.top, false);
                      a.css("pointer-events", "none");
                      s.controls.css("pointer-events", "none");
                      d.show();
                      h.show();
                      f.show();
                      p();
                      u = true
                    }
                  });
                  o.addEventListener("fullscreenchange", function () {
                    c()
                  })
                }
                else a.mouseover(function () {
                  if (l !== null) {
                    clearTimeout(l);
                    delete l
                  }
                  var e = a.offset(),
                    t = i.container.offset();
                  o.positionFullscreenButton(e.left - t.left, e.top - t.top, true)
                }).mouseout(function () {
                  if (l !== null) {
                    clearTimeout(l);
                    delete l
                  }
                  l = setTimeout(function () {
                    o.hideFullscreenButton()
                  }, 1500)
                })
              }
              i.fullscreenBtn = a;
              e(document).bind("keydown", function (e) {
                if ((t.MediaFeatures.hasTrueNativeFullScreen && t.MediaFeatures.isFullScreen() || s.isFullScreen) && e.keyCode == 27) i.exitFullScreen()
              })
            }
          },
          enterFullScreen: function () {
            var i = this;
            if (!(i.media.pluginType !== "native" && (t.MediaFeatures.isFirefox || i.options.usePluginFullScreen))) {
              docStyleOverflow = document.documentElement.style.overflow;
              document.documentElement.style.overflow = "hidden";
              normalHeight = i.container.height();
              normalWidth = i.container.width();
              if (i.media.pluginType === "native")
                if (t.MediaFeatures.hasTrueNativeFullScreen) {
                  t.MediaFeatures.requestFullScreen(i.container[0]);
                  i.isInIframe && setTimeout(function t() {
                    if (i.isNativeFullScreen) e(window).width() !== screen.width ? i.exitFullScreen() : setTimeout(t, 500)
                  }, 500)
                }
              else if (t.MediaFeatures.hasSemiNativeFullScreen) {
                i.media.webkitEnterFullscreen();
                return
              }
              if (i.isInIframe) {
                var n = i.options.newWindowCallback(this);
                if (n !== "")
                  if (t.MediaFeatures.hasTrueNativeFullScreen) setTimeout(function () {
                    if (!i.isNativeFullScreen) {
                      i.pause();
                      window.open(n, i.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                    }
                  }, 250);
                  else {
                    i.pause();
                    window.open(n, i.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                    return
                  }
              }
              i.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
              setTimeout(function () {
                i.container.css({
                  width: "100%",
                  height: "100%"
                });
                i.setControlsSize()
              }, 500);
              if (i.pluginType === "native") i.$media.width("100%").height("100%");
              else {
                i.container.find("object, embed, iframe").width("100%").height("100%");
                i.media.setVideoSize(e(window).width(), e(window).height())
              }
              i.layers.children("div").width("100%").height("100%");
              i.fullscreenBtn && i.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
              i.setControlsSize();
              i.isFullScreen = true
            }
          },
          exitFullScreen: function () {
            if (this.media.pluginType !== "native" && t.MediaFeatures.isFirefox) this.media.setFullscreen(false);
            else {
              if (t.MediaFeatures.hasTrueNativeFullScreen && (t.MediaFeatures.isFullScreen() || this.isFullScreen)) t.MediaFeatures.cancelFullScreen();
              document.documentElement.style.overflow = docStyleOverflow;
              this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
              if (this.pluginType === "native") this.$media.width(normalWidth).height(normalHeight);
              else {
                this.container.find("object embed").width(normalWidth).height(normalHeight);
                this.media.setVideoSize(normalWidth, normalHeight)
              }
              this.layers.children("div").width(normalWidth).height(normalHeight);
              this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
              this.setControlsSize();
              this.isFullScreen = false
            }
          }
        })
      })(t.$);
      (function (e) {
        e.extend(t.MepDefaults, {
          startLanguage: "",
          tracksText: "Captions/Subtitles"
        });
        e.extend(MediaElementPlayer.prototype, {
          hasChapters: false,
          buildtracks: function (t, i, n, r) {
            if (t.isVideo)
              if (t.tracks.length != 0) {
                var o;
                t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(n).hide();
                t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>').prependTo(n).hide();
                t.captionsText = t.captions.find(".mejs-captions-text");
                t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" /><label for="' + t.id + '_captions_none">None</label></li></ul></div></div>').appendTo(i).hover(function () {
                  e(this).find(".mejs-captions-selector").css("visibility", "visible")
                }, function () {
                  e(this).find(".mejs-captions-selector").css("visibility", "hidden")
                }).delegate("input[type=radio]", "click", function () {
                  lang = this.value;
                  if (lang == "none") t.selectedTrack = null;
                  else
                    for (o = 0; o < t.tracks.length; o++)
                      if (t.tracks[o].srclang == lang) {
                        t.selectedTrack = t.tracks[o];
                        t.captions.attr("lang", t.selectedTrack.srclang);
                        t.displayCaptions();
                        break
                      }
                });
                t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : t.container.bind("mouseenter", function () {
                  t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("mouseleave", function () {
                  r.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                });
                t.trackToLoad = -1;
                t.selectedTrack = null;
                t.isLoadingTrack = false;
                for (o = 0; o < t.tracks.length; o++) t.tracks[o].kind == "subtitles" && t.addTrackButton(t.tracks[o].srclang, t.tracks[o].label);
                t.loadNextTrack();
                r.addEventListener("timeupdate", function () {
                  t.displayCaptions()
                }, false);
                r.addEventListener("loadedmetadata", function () {
                  t.displayChapters()
                }, false);
                t.container.hover(function () {
                  if (t.hasChapters) {
                    t.chapters.css("visibility", "visible");
                    t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight())
                  }
                }, function () {
                  t.hasChapters && !r.paused && t.chapters.fadeOut(200, function () {
                    e(this).css("visibility", "hidden");
                    e(this).css("display", "block")
                  })
                });
                t.node.getAttribute("autoplay") !== null && t.chapters.css("visibility", "hidden")
              }
          },
          loadNextTrack: function () {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
              this.isLoadingTrack = true;
              this.loadTrack(this.trackToLoad)
            }
            else this.isLoadingTrack = false
          },
          loadTrack: function (i) {
            var n = this,
              r = n.tracks[i];
            e.ajax({
              url: r.src,
              dataType: "text",
              success: function (e) {
                r.entries = typeof e == "string" && /<tt\s+xml/gi.exec(e) ? t.TrackFormatParser.dfxp.parse(e) : t.TrackFormatParser.webvvt.parse(e);
                r.isLoaded = true;
                n.enableTrackButton(r.srclang, r.label);
                n.loadNextTrack();
                r.kind == "chapters" && n.media.duration > 0 && n.drawChapters(r)
              },
              error: function () {
                n.loadNextTrack()
              }
            })
          },
          enableTrackButton: function (i, n) {
            if (n === "") n = t.language.codes[i] || i;
            this.captionsButton.find("input[value=" + i + "]").prop("disabled", false).siblings("label").html(n);
            this.options.startLanguage == i && e("#" + this.id + "_captions_" + i).click();
            this.adjustLanguageBox()
          },
          addTrackButton: function (i, n) {
            if (n === "") n = t.language.codes[i] || i;
            this.captionsButton.find("ul").append(e('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + i + '" value="' + i + '" disabled="disabled" /><label for="' + this.id + "_captions_" + i + '">' + n + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + i + "]").remove()
          },
          adjustLanguageBox: function () {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
          },
          displayCaptions: function () {
            if (typeof this.tracks != "undefined") {
              var e, t = this.selectedTrack;
              if (t != null && t.isLoaded)
                for (e = 0; e < t.entries.times.length; e++)
                  if (this.media.currentTime >= t.entries.times[e].start && this.media.currentTime <= t.entries.times[e].stop) {
                    this.captionsText.html(t.entries.text[e]);
                    this.captions.show().height(0);
                    return
                  }
              this.captions.hide()
            }
          },
          displayChapters: function () {
            var e;
            for (e = 0; e < this.tracks.length; e++)
              if (this.tracks[e].kind == "chapters" && this.tracks[e].isLoaded) {
                this.drawChapters(this.tracks[e]);
                this.hasChapters = true;
                break
              }
          },
          drawChapters: function (i) {
            var n = this,
              r, o, s = o = 0;
            n.chapters.empty();
            for (r = 0; r < i.entries.times.length; r++) {
              o = i.entries.times[r].stop - i.entries.times[r].start;
              o = Math.floor(o / n.media.duration * 100);
              if (o + s > 100 || r == i.entries.times.length - 1 && o + s < 100) o = 100 - s;
              n.chapters.append(e('<div class="mejs-chapter" rel="' + i.entries.times[r].start + '" style="left: ' + s.toString() + "%;width: " + o.toString() + '%;"><div class="mejs-chapter-block' + (r == i.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + i.entries.text[r] + '</span><span class="ch-time">' + t.Utility.secondsToTimeCode(i.entries.times[r].start) + "&ndash;" + t.Utility.secondsToTimeCode(i.entries.times[r].stop) + "</span></div></div>"));
              s += o
            }
            n.chapters.find("div.mejs-chapter").click(function () {
              n.media.setCurrentTime(parseFloat(e(this).attr("rel")));
              n.media.paused && n.media.play()
            });
            n.chapters.show()
          }
        });
        t.language = {
          codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
          }
        };
        t.TrackFormatParser = {
          webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function (i) {
              var n = 0;
              i = t.TrackFormatParser.split2(i, /\r?\n/);
              for (var r = {
                  text: [],
                  times: []
                }, o, s; n < i.length; n++)
                if (this.pattern_identifier.exec(i[n])) {
                  n++;
                  if ((o = this.pattern_timecode.exec(i[n])) && n < i.length) {
                    n++;
                    s = i[n];
                    for (n++; i[n] !== "" && n < i.length;) {
                      s = s + "\n" + i[n];
                      n++
                    }
                    s = e.trim(s).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>");
                    r.text.push(s);
                    r.times.push({
                      start: t.Utility.convertSMPTEtoSeconds(o[1]) == 0 ? .2 : t.Utility.convertSMPTEtoSeconds(o[1]),
                      stop: t.Utility.convertSMPTEtoSeconds(o[3]),
                      settings: o[5]
                    })
                  }
                }
              return r
            }
          },
          dfxp: {
            parse: function (i) {
              i = e(i).filter("tt");
              var n = 0;
              n = i.children("div").eq(0);
              var r = n.find("p");
              n = i.find("#" + n.attr("style"));
              var o, s;
              i = {
                text: [],
                times: []
              };
              if (n.length) {
                s = n.removeAttr("id").get(0).attributes;
                if (s.length) {
                  o = {};
                  for (n = 0; n < s.length; n++) o[s[n].name.split(":")[1]] = s[n].value
                }
              }
              for (n = 0; n < r.length; n++) {
                var a;
                s = {
                  start: null,
                  stop: null,
                  style: null
                };
                if (r.eq(n).attr("begin")) s.start = t.Utility.convertSMPTEtoSeconds(r.eq(n).attr("begin"));
                if (!s.start && r.eq(n - 1).attr("end")) s.start = t.Utility.convertSMPTEtoSeconds(r.eq(n - 1).attr("end"));
                if (r.eq(n).attr("end")) s.stop = t.Utility.convertSMPTEtoSeconds(r.eq(n).attr("end"));
                if (!s.stop && r.eq(n + 1).attr("begin")) s.stop = t.Utility.convertSMPTEtoSeconds(r.eq(n + 1).attr("begin"));
                if (o) {
                  a = "";
                  for (var l in o) a += l + ":" + o[l] + ";"
                }
                if (a) s.style = a;
                if (s.start == 0) s.start = .2;
                i.times.push(s);
                s = e.trim(r.eq(n).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>");
                i.text.push(s);
                if (i.times.start == 0) i.times.start = 2
              }
              return i
            }
          },
          split2: function (e, t) {
            return e.split(t)
          }
        };
        if ("x\n\ny".split(/\n/gi).length != 3) t.TrackFormatParser.split2 = function (e, t) {
          var i = [],
            n = "",
            r;
          for (r = 0; r < e.length; r++) {
            n += e.substring(r, r + 1);
            if (t.test(n)) {
              i.push(n.replace(t, ""));
              n = ""
            }
          }
          i.push(n);
          return i
        }
      })(t.$);
      (function (e) {
        e.extend(t.MepDefaults, {
          contextMenuItems: [{
            render: function (e) {
              if (typeof e.enterFullScreen == "undefined") return null;
              return e.isFullScreen ? "Turn off Fullscreen" : "Go Fullscreen"
            },
            click: function (e) {
              e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
            }
          }, {
            render: function (e) {
              return e.media.muted ? "Unmute" : "Mute"
            },
            click: function (e) {
              e.media.muted ? e.setMuted(false) : e.setMuted(true)
            }
          }, {
            isSeparator: true
          }, {
            render: function () {
              return "Download Video"
            },
            click: function (e) {
              window.location.href = e.media.currentSrc
            }
          }]
        });
        e.extend(MediaElementPlayer.prototype, {
          buildcontextmenu: function (t) {
            t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide();
            t.container.bind("contextmenu", function (e) {
              if (t.isContextMenuEnabled) {
                e.preventDefault();
                t.renderContextMenu(e.clientX - 1, e.clientY - 1);
                return false
              }
            });
            t.container.bind("click", function () {
              t.contextMenu.hide()
            });
            t.contextMenu.bind("mouseleave", function () {
              t.startContextMenuTimer()
            })
          },
          isContextMenuEnabled: true,
          enableContextMenu: function () {
            this.isContextMenuEnabled = true
          },
          disableContextMenu: function () {
            this.isContextMenuEnabled = false
          },
          contextMenuTimeout: null,
          startContextMenuTimer: function () {
            var e = this;
            e.killContextMenuTimer();
            e.contextMenuTimer = setTimeout(function () {
              e.hideContextMenu();
              e.killContextMenuTimer()
            }, 750)
          },
          killContextMenuTimer: function () {
            var e = this.contextMenuTimer;
            if (e != null) {
              clearTimeout(e);
              delete e
            }
          },
          hideContextMenu: function () {
            this.contextMenu.hide()
          },
          renderContextMenu: function (t, i) {
            for (var n = this, r = "", o = n.options.contextMenuItems, s = 0, a = o.length; s < a; s++)
              if (o[s].isSeparator) r += '<div class="mejs-contextmenu-separator"></div>';
              else {
                var l = o[s].render(n);
                if (l != null) r += '<div class="mejs-contextmenu-item" data-itemindex="' + s + '" id="element-' + Math.random() * 1e6 + '">' + l + "</div>"
              }
            n.contextMenu.empty().append(e(r)).css({
              top: i,
              left: t
            }).show();
            n.contextMenu.find(".mejs-contextmenu-item").each(function () {
              var t = e(this),
                i = parseInt(t.data("itemindex"), 10),
                r = n.options.contextMenuItems[i];
              typeof r.show != "undefined" && r.show(t, n);
              t.click(function () {
                typeof r.click != "undefined" && r.click(n);
                n.contextMenu.hide()
              })
            });
            setTimeout(function () {
              n.killControlsTimer("rev3")
            }, 100)
          }
        })
      })(t.$)
    }).call(t, n(1))
  },
  87: function (e, t, i) {
    var n, r;
    !(n = [i(6), i(68)], r = function (e, t) {
      t.Renderer.render = function (t, i) {
        if (!t) {
          var n = new Error("Cannot render the template since it's false, null or undefined.");
          n.name = "TemplateNotFoundError";
          throw n
        }
        if (typeof t === "function") {
          return t(i)
        }
        return e.render(t, i)
      };
      return t
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  88: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(3), i(5)], r = function (e, t, i) {
      i.preventClose = function (n) {
        var r = this;
        if (!this.defer) {
          this.defer = e.Deferred();
          if (i.preventClose.preventer) {
            var o = i.preventClose.preventer();
            if (o && o.promise) {
              this.defer = o
            }
            else if (o) {
              this.defer.resolve()
            }
            else {
              this.defer.reject()
            }
            this.defer.fail(function () {
              delete i.preventClose.preventer
            })
          }
          else {
            this.defer.reject()
          }
          this.defer.always(function () {
            t.defer(function () {
              delete r.defer
            })
          })
        }
        this.defer.fail(function () {
          n()
        })
      };
      i.preventClose.ifModelChanged = function (i, n) {
        if (!i.hasChangedDeepSinceSavepoint()) return false;
        var r = e.Deferred();
        if (n) {
          n(function () {
            r.reject()
          }, function () {
            r.resolve()
          })
        }
        else {
          t.defer(function () {
            if (confirm("Are you sure? You'll lose your current changes.")) {
              r.reject()
            }
            else {
              r.resolve()
            }
          })
        }
        return r.promise()
      };
      var n = i.View.prototype.constructor;
      i.View.prototype.constructor = function () {
        n.apply(this, arguments);
        if (this.preventClose) {
          i.preventClose.preventer = t.bind(this.preventClose, this)
        }
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  90: function (e, t, i) {
    (function (t) {
      e.exports = t["PlatformElement"] = i(173)
    }).call(t, function () {
      return this
    }())
  },
  102: function (e, t, i) {
    var n;
    (function () {
      "use strict";
      var r;
      var o;

      function s(e) {
        if (typeof this === "undefined" || Object.getPrototypeOf(this) !== s.prototype) {
          return new s(e)
        }
        r = this;
        r.version = "3.3.1";
        r.tools = new k;
        if (r.isSupported()) {
          r.tools.extend(r.defaults, e || {});
          a(r.defaults);
          r.store = {
            elements: {},
            containers: []
          };
          r.sequences = {};
          r.history = [];
          r.uid = 0;
          r.initialized = false
        }
        else if (typeof console !== "undefined" && console !== null) {
          console.log("ScrollReveal is not supported in this browser.")
        }
        return r
      }
      s.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {
          x: 0,
          y: 0,
          z: 0
        },
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        beforeReveal: function (e) {},
        afterReveal: function (e) {},
        beforeReset: function (e) {},
        afterReset: function (e) {}
      };
      s.prototype.isSupported = function () {
        var e = document.documentElement.style;
        return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
      };
      s.prototype.reveal = function (e, t, i, n) {
        var o;
        var s;
        var f;
        var h;
        var g;
        var y;
        if (t !== undefined && typeof t === "number") {
          i = t;
          t = {}
        }
        else if (t === undefined || t === null) {
          t = {}
        }
        o = a(t);
        s = l(e, o);
        if (!s.length) {
          console.log('ScrollReveal: reveal on "' + e + '" failed, no elements found.');
          return r
        }
        if (i && typeof i === "number") {
          y = u();
          g = r.sequences[y] = {
            id: y,
            interval: i,
            elemIds: [],
            active: false
          }
        }
        for (var b = 0; b < s.length; b++) {
          h = s[b].getAttribute("data-sr-id");
          if (h) {
            f = r.store.elements[h]
          }
          else {
            f = {
              id: u(),
              domEl: s[b],
              seen: false,
              revealing: false
            };
            f.domEl.setAttribute("data-sr-id", f.id)
          }
          if (g) {
            f.sequence = {
              id: g.id,
              index: g.elemIds.length
            };
            g.elemIds.push(f.id)
          }
          c(f, t, o);
          d(f);
          p(f);
          if (r.tools.isMobile() && !f.config.mobile || !r.isSupported()) {
            f.domEl.setAttribute("style", f.styles.inline);
            f.disabled = true
          }
          else if (!f.revealing) {
            f.domEl.setAttribute("style", f.styles.inline + f.styles.transform.initial)
          }
        }
        if (!n && r.isSupported()) {
          m(e, t, i);
          if (r.initTimeout) {
            window.clearTimeout(r.initTimeout)
          }
          r.initTimeout = window.setTimeout(v, 0)
        }
        return r
      };
      s.prototype.sync = function () {
        if (r.history.length && r.isSupported()) {
          for (var e = 0; e < r.history.length; e++) {
            var t = r.history[e];
            r.reveal(t.target, t.config, t.interval, true)
          }
          v()
        }
        else {
          console.log("ScrollReveal: sync failed, no reveals found.")
        }
        return r
      };

      function a(e) {
        if (e && e.container) {
          if (typeof e.container === "string") {
            return window.document.documentElement.querySelector(e.container)
          }
          else if (r.tools.isNode(e.container)) {
            return e.container
          }
          else {
            console.log('ScrollReveal: invalid container "' + e.container + '" provided.');
            console.log("ScrollReveal: falling back to default container.")
          }
        }
        return r.defaults.container
      }

      function l(e, t) {
        if (typeof e === "string") {
          return Array.prototype.slice.call(t.querySelectorAll(e))
        }
        else if (r.tools.isNode(e)) {
          return [e]
        }
        else if (r.tools.isNodeList(e)) {
          return Array.prototype.slice.call(e)
        }
        return []
      }

      function u() {
        return ++r.uid
      }

      function c(e, t, i) {
        if (t.container) t.container = i;
        if (!e.config) {
          e.config = r.tools.extendClone(r.defaults, t)
        }
        else {
          e.config = r.tools.extendClone(e.config, t)
        }
        if (e.config.origin === "top" || e.config.origin === "bottom") {
          e.config.axis = "Y"
        }
        else {
          e.config.axis = "X"
        }
      }

      function d(e) {
        var t = window.getComputedStyle(e.domEl);
        if (!e.styles) {
          e.styles = {
            transition: {},
            transform: {},
            computed: {}
          };
          e.styles.inline = e.domEl.getAttribute("style") || "";
          e.styles.inline += "; visibility: visible; ";
          e.styles.computed.opacity = t.opacity;
          if (!t.transition || t.transition === "all 0s ease 0s") {
            e.styles.computed.transition = ""
          }
          else {
            e.styles.computed.transition = t.transition + ", "
          }
        }
        e.styles.transition.instant = f(e, 0);
        e.styles.transition.delayed = f(e, e.config.delay);
        e.styles.transform.initial = " -webkit-transform:";
        e.styles.transform.target = " -webkit-transform:";
        h(e);
        e.styles.transform.initial += "transform:";
        e.styles.transform.target += "transform:";
        h(e)
      }

      function f(e, t) {
        var i = e.config;
        return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s; " + "transition: " + e.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s; "
      }

      function h(e) {
        var t = e.config;
        var i;
        var n = e.styles.transform;
        if (t.origin === "top" || t.origin === "left") {
          i = /^-/.test(t.distance) ? t.distance.substr(1) : "-" + t.distance
        }
        else {
          i = t.distance
        }
        if (parseInt(t.distance)) {
          n.initial += " translate" + t.axis + "(" + i + ")";
          n.target += " translate" + t.axis + "(0)"
        }
        if (t.scale) {
          n.initial += " scale(" + t.scale + ")";
          n.target += " scale(1)"
        }
        if (t.rotate.x) {
          n.initial += " rotateX(" + t.rotate.x + "deg)";
          n.target += " rotateX(0)"
        }
        if (t.rotate.y) {
          n.initial += " rotateY(" + t.rotate.y + "deg)";
          n.target += " rotateY(0)"
        }
        if (t.rotate.z) {
          n.initial += " rotateZ(" + t.rotate.z + "deg)";
          n.target += " rotateZ(0)"
        }
        n.initial += "; opacity: " + t.opacity + ";";
        n.target += "; opacity: " + e.styles.computed.opacity + ";"
      }

      function p(e) {
        var t = e.config.container;
        if (t && r.store.containers.indexOf(t) === -1) {
          r.store.containers.push(e.config.container)
        }
        r.store.elements[e.id] = e
      }

      function m(e, t, i) {
        var n = {
          target: e,
          config: t,
          interval: i
        };
        r.history.push(n)
      }

      function v() {
        if (r.isSupported()) {
          b();
          for (var e = 0; e < r.store.containers.length; e++) {
            r.store.containers[e].addEventListener("scroll", g);
            r.store.containers[e].addEventListener("resize", g)
          }
          if (!r.initialized) {
            window.addEventListener("scroll", g);
            window.addEventListener("resize", g);
            r.initialized = true;
          }
        }
        return r
      }

      function g() {
        o(b)
      }

      function y() {
        var e;
        var t;
        var i;
        var n;
        r.tools.forOwn(r.sequences, function (o) {
          n = r.sequences[o];
          e = false;
          for (var s = 0; s < n.elemIds.length; s++) {
            i = n.elemIds[s];
            t = r.store.elements[i];
            if (A(t) && !e) {
              e = true
            }
          }
          n.active = e
        })
      }

      function b() {
        var e;
        var t;
        y();
        r.tools.forOwn(r.store.elements, function (i) {
          t = r.store.elements[i];
          e = _(t);
          if (S(t)) {
            t.config.beforeReveal(t.domEl);
            if (e) {
              t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed)
            }
            else {
              t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant)
            }
            T("reveal", t, e);
            t.revealing = true;
            t.seen = true;
            if (t.sequence) {
              w(t, e)
            }
          }
          else if (M(t)) {
            t.config.beforeReset(t.domEl);
            t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant);
            T("reset", t);
            t.revealing = false
          }
        })
      }

      function w(e, t) {
        var i = 0;
        var n = 0;
        var o = r.sequences[e.sequence.id];
        o.blocked = true;
        if (t && e.config.useDelay === "onload") {
          n = e.config.delay
        }
        if (e.sequence.timer) {
          i = Math.abs(e.sequence.timer.started - new Date);
          window.clearTimeout(e.sequence.timer)
        }
        e.sequence.timer = {
          started: new Date
        };
        e.sequence.timer.clock = window.setTimeout(function () {
          o.blocked = false;
          e.sequence.timer = null;
          g()
        }, Math.abs(o.interval) + n - i)
      }

      function T(e, t, i) {
        var n = 0;
        var r = 0;
        var o = "after";
        switch (e) {
          case "reveal":
            r = t.config.duration;
            if (i) {
              r += t.config.delay
            }
            o += "Reveal";
            break;
          case "reset":
            r = t.config.duration;
            o += "Reset";
            break
        }
        if (t.timer) {
          n = Math.abs(t.timer.started - new Date);
          window.clearTimeout(t.timer.clock)
        }
        t.timer = {
          started: new Date
        };
        t.timer.clock = window.setTimeout(function () {
          t.config[o](t.domEl);
          t.timer = null
        }, r - n)
      }

      function S(e) {
        if (e.sequence) {
          var t = r.sequences[e.sequence.id];
          return t.active && !t.blocked && !e.revealing && !e.disabled
        }
        return A(e) && !e.revealing && !e.disabled
      }

      function _(e) {
        var t = e.config.useDelay;
        return t === "always" || t === "onload" && !r.initialized || t === "once" && !e.seen
      }

      function M(e) {
        if (e.sequence) {
          var t = r.sequences[e.sequence.id];
          return !t.active && e.config.reset && e.revealing && !e.disabled
        }
        return !A(e) && e.config.reset && e.revealing && !e.disabled
      }

      function C(e) {
        return {
          width: e.clientWidth,
          height: e.clientHeight
        }
      }

      function P(e) {
        if (e && e !== window.document.documentElement) {
          var t = x(e);
          return {
            x: e.scrollLeft + t.left,
            y: e.scrollTop + t.top
          }
        }
        else {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          }
        }
      }

      function x(e) {
        var t = 0;
        var i = 0;
        var n = e.offsetHeight;
        var r = e.offsetWidth;
        do {
          if (!isNaN(e.offsetTop)) {
            t += e.offsetTop
          }
          if (!isNaN(e.offsetLeft)) {
            i += e.offsetLeft
          }
          e = e.offsetParent
        } while (e);
        return {
          top: t,
          left: i,
          height: n,
          width: r
        }
      }

      function A(e) {
        var t = x(e.domEl);
        var i = C(e.config.container);
        var n = P(e.config.container);
        var r = e.config.viewFactor;
        var o = t.height;
        var s = t.width;
        var a = t.top;
        var l = t.left;
        var u = a + o;
        var c = l + s;
        return d() || f();

        function d() {
          var t = a + o * r;
          var d = l + s * r;
          var f = u - o * r;
          var h = c - s * r;
          var p = n.y + e.config.viewOffset.top;
          var m = n.x + e.config.viewOffset.left;
          var v = n.y - e.config.viewOffset.bottom + i.height;
          var g = n.x - e.config.viewOffset.right + i.width;
          return t < v && f > p && d > m && h < g
        }

        function f() {
          return window.getComputedStyle(e.domEl).position === "fixed"
        }
      }

      function k() {}
      k.prototype.isObject = function (e) {
        return e !== null && typeof e === "object" && e.constructor === Object
      };
      k.prototype.isNode = function (e) {
        return typeof window.Node === "object" ? e instanceof window.Node : e && typeof e === "object" && typeof e.nodeType === "number" && typeof e.nodeName === "string"
      };
      k.prototype.isNodeList = function (e) {
        var t = Object.prototype.toString.call(e);
        var i = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return typeof window.NodeList === "object" ? e instanceof window.NodeList : e && typeof e === "object" && i.test(t) && typeof e.length === "number" && (e.length === 0 || this.isNode(e[0]))
      };
      k.prototype.forOwn = function (e, t) {
        if (!this.isObject(e)) {
          throw new TypeError('Expected "object", but received "' + typeof e + '".')
        }
        else {
          for (var i in e) {
            if (e.hasOwnProperty(i)) {
              t(i)
            }
          }
        }
      };
      k.prototype.extend = function (e, t) {
        this.forOwn(t, function (i) {
          if (this.isObject(t[i])) {
            if (!e[i] || !this.isObject(e[i])) {
              e[i] = {}
            }
            this.extend(e[i], t[i])
          }
          else {
            e[i] = t[i]
          }
        }.bind(this));
        return e
      };
      k.prototype.extendClone = function (e, t) {
        return this.extend(this.extend({}, e), t)
      };
      k.prototype.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      };
      o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
      };
      if (true) {
        !(n = function () {
          return s
        }.call(t, i, t, e), n !== undefined && (e.exports = n))
      }
      else if (typeof e !== "undefined" && e.exports) {
        e.exports = s
      }
      else {
        window.ScrollReveal = s
      }
    })()
  },
  124: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(2), i(71)], r = function (e, t) {
      var i;
      var n = [];
      var r = function (t) {
        var i = t.width();
        if (i === 0) {
          var n = t.parentsUntil(".platform-element-contents");
          if (n.eq(n.length - 1).prop("tagName").toUpperCase() !== "HTML") {
            var r = 0;
            n.each(function (t) {
              if (t + 1 !== n.length) {
                r += o(e(this).css("padding-left"));
                r += o(e(this).css("padding-right"));
                r += o(e(this).css("margin-left"));
                r += o(e(this).css("margin-right"))
              }
            });
            i = Math.max(n.eq(n.length - 1).width() - r, 0)
          }
        }
        i = i && i < 400 ? i < 235 ? 235 : i : 400;
        return i;

        function o(e) {
          if (e.indexOf("px") !== -1 && e.indexOf("calc") === -1) {
            return parseInt(e)
          }
          return 0
        }
      };
      var o = function () {
        e.each(n, function () {
          var t = e(this.container).parents(".wsite-html5audio");
          var i = r(t.parent());
          this.setPlayerSize(i, this.height);
          this.setControlsSize()
        })
      };
      var s = function (t) {
        var i = e(".wsite-html5audio audio", t),
          o = false;
        n = [];
        i.each(function () {
          var t = e(this),
            i = t.parents(".wsite-html5audio"),
            a = t.attr("data-track"),
            l = t.attr("data-artist"),
            u = t.attr("data-autostart"),
            c;
          t.attr("preload", "none");
          u = u === "yes" ? true : false;
          if (u && !o) {
            o = true
          }
          else {
            u = false
          }
          c = r(i.parent());
          var d = {
            audioWidth: c,
            enableKeyboard: false,
            success: function (e, t, i) {
              if (window.Weebly.mobile_navigation && window.Weebly.mobile_navigation.resizeScreen) {
                window.Weebly.mobile_navigation.resizeScreen()
              }
              s(e, i)
            }
          };
          var f = t.attr("src");
          if (typeof f == "undefined" || f === null || f == "" || f.charAt(f.length - 1) == "/") {
            d.type = "audio/mp3"
          }
          if (u) {
            d.success = function (e, t, i) {
              if (i && i.play) {
                if (e.pluginType === "native") {
                  i.load()
                }
                s(e, i);
                i.play()
              }
            }
          }
          var h = new window.mejs.MediaElementPlayer(t, d);
          n.push(h);
          var p = i.find(".mejs-container");
          if (p.length > 0) {
            var m = a && a.length > 0,
              v = l && l.length > 0;
            var g = '<div class="wsite-mejs-track">';
            if (m && v) {
              g += '<span class="wsite-mejs-title">' + a + "</span>" + '<span class="wsite-mejs-track-sep"> - </span>' + '<span class="wsite-mejs-artist">' + l + "</span>" + "</div>"
            }
            else if (m) {
              g += '<span class="wsite-mejs-title">' + a + "</span>" + "</div>"
            }
            else if (v) {
              g += '<span class="wsite-mejs-artist">' + l + "</span>" + "</div>"
            }
            else {
              g = ""
            }
            p.append(g)
          }
        });

        function s(t, i) {
          var n = e("#" + i.id).find("button");
          t.addEventListener("play", function () {
            n.blur()
          }, false);
          t.addEventListener("pause", function () {
            n.blur()
          }, false)
        }
      };
      e(function () {
        if (window.Weebly.EDITOR) {
          window.editorApp.vent.on("themeRendered", o);
          return
        }
        s();
        o();
        e(window).load(o)
      });
      return {
        init: s
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  125: function (e, t, i) {
    var n, r;
    !(n = [i(2), i(1), i(63), i(5)], r = function (e, t, i, n) {
      var r = n.Model.extend({
        save: function (n, r, o) {
          var s = this,
            a = this.attributes;
          if (n == null || typeof n === "object") {
            a = n;
            o = r
          }
          else {
            (a = {})[n] = r
          }
          if (a) {
            if (!this.set(a, o)) return false
          }
          if (window.inEditor && window.inEditor() && !i.chromeless) {
            return e.Editor.RPC.PlatformElementInstance.updateSettings(s.page_element_id, s.toJSON())
          }
          else {
            var l = new t.Deferred;
            l.resolve({
              success: false,
              message: "You cannot update settings outside of the editor."
            });
            return l.promise()
          }
        }
      });
      return r
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  149: function (e, t, i) {
    var n, r;
    !(n = [i(222)], r = function (e) {
      "use strict";
      var t = new e;
      return t
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  154: function (e, t, i) {
    (function (t) {
      if (!t["window"]) t["window"] = {};
      e.exports = t["window"]["$"] = i(171)
    }).call(t, function () {
      return this
    }())
  },
  157: function (e, t, i) {
    var n, r;
    (function (o, s) {
      if (true) {
        !(n = [i(1)], r = function (e) {
          return s(o, e)
        }.apply(t, n), r !== undefined && (e.exports = r))
      }
      else if (typeof e == "object" && e.exports) {
        e.exports = s(o, require("jquery"))
      }
      else {
        o.jQueryBridget = s(o, o.jQuery)
      }
    })(window, function e(t, i) {
      "use strict";
      var n = Array.prototype.slice;
      var r = t.console;
      var o = typeof r == "undefined" ? function () {} : function (e) {
        r.error(e)
      };

      function s(e, r, s) {
        s = s || i || t.jQuery;
        if (!s) {
          return
        }
        if (!r.prototype.option) {
          r.prototype.option = function (e) {
            if (!s.isPlainObject(e)) {
              return
            }
            this.options = s.extend(true, this.options, e)
          }
        }
        s.fn[e] = function (e) {
          if (typeof e == "string") {
            var t = n.call(arguments, 1);
            return l(this, e, t)
          }
          u(this, e);
          return this
        };

        function l(t, i, n) {
          var r;
          var a = "$()." + e + '("' + i + '")';
          t.each(function (t, l) {
            var u = s.data(l, e);
            if (!u) {
              o(e + " not initialized. Cannot call methods, i.e. " + a);
              return
            }
            var c = u[i];
            if (!c || i.charAt(0) == "_") {
              o(a + " is not a valid method");
              return
            }
            var d = c.apply(u, n);
            r = r === undefined ? d : r
          });
          return r !== undefined ? r : t
        }

        function u(t, i) {
          t.each(function (t, n) {
            var o = s.data(n, e);
            if (o) {
              o.option(i);
              o._init()
            }
            else {
              o = new r(n, i);
              s.data(n, e, o)
            }
          })
        }
        a(s)
      }

      function a(e) {
        if (!e || e && e.bridget) {
          return
        }
        e.bridget = s
      }
      a(i || t.jQuery);
      return s
    })
  },
  161: function (e, t, i) {
    var n, r, o;
    (function (s) {
      if (true) {
        !(r = [i(1), i(32)], n = s, o = typeof n === "function" ? n.apply(t, r) : n, o !== undefined && (e.exports = o))
      }
      else {
        s(jQuery)
      }
    })(function (e) {
      return e.effects.effect.fade = function (t, i) {
        var n = e(this),
          r = e.effects.setMode(n, t.mode || "toggle");
        n.animate({
          opacity: r
        }, {
          queue: false,
          duration: t.duration,
          easing: t.easing,
          complete: i
        })
      }
    })
  },
  162: function (e, t, i) {
    var n, r, o;
    (function (s) {
      if (true) {
        !(r = [i(1), i(32)], n = s, o = typeof n === "function" ? n.apply(t, r) : n, o !== undefined && (e.exports = o))
      }
      else {
        s(jQuery)
      }
    })(function (e) {
      return e.effects.effect.highlight = function (t, i) {
        var n = e(this),
          r = ["backgroundImage", "backgroundColor", "opacity"],
          o = e.effects.setMode(n, t.mode || "show"),
          s = {
            backgroundColor: n.css("backgroundColor")
          };
        if (o === "hide") {
          s.opacity = 0
        }
        e.effects.save(n, r);
        n.show().css({
          backgroundImage: "none",
          backgroundColor: t.color || "#ffff99"
        }).animate(s, {
          queue: false,
          duration: t.duration,
          easing: t.easing,
          complete: function () {
            if (o === "hide") {
              n.hide()
            }
            e.effects.restore(n, r);
            i()
          }
        })
      }
    })
  },
  165: function (e, t, i) {
    var n, r;
    (function (o) {
      if (true) {
        !(n = [i(1)], r = function (e) {
          return o(e)
        }.apply(t, n), r !== undefined && (e.exports = r))
      }
      else if (typeof e === "object" && typeof e.exports === "object") {
        e.exports = o(require("jquery"))
      }
      else {
        o(window.jQuery)
      }
    })(function (e) {
      "use strict";

      function t(e) {
        if (e === undefined) {
          e = window.navigator.userAgent
        }
        e = e.toLowerCase();
        var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        var i = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
        var n = {},
          r = {
            browser: t[5] || t[3] || t[1] || "",
            version: t[2] || t[4] || "0",
            versionNumber: t[4] || t[2] || "0",
            platform: i[0] || ""
          };
        if (r.browser) {
          n[r.browser] = true;
          n.version = r.version;
          n.versionNumber = parseInt(r.versionNumber, 10)
        }
        if (r.platform) {
          n[r.platform] = true
        }
        if (n.android || n.bb || n.blackberry || n.ipad || n.iphone || n.ipod || n.kindle || n.playbook || n.silk || n["windows phone"]) {
          n.mobile = true
        }
        if (n.cros || n.mac || n.linux || n.win) {
          n.desktop = true
        }
        if (n.chrome || n.opr || n.safari) {
          n.webkit = true
        }
        if (n.rv || n.iemobile) {
          var o = "msie";
          r.browser = o;
          n[o] = true
        }
        if (n.edge) {
          delete n.edge;
          var s = "msedge";
          r.browser = s;
          n[s] = true
        }
        if (n.safari && n.blackberry) {
          var a = "blackberry";
          r.browser = a;
          n[a] = true
        }
        if (n.safari && n.playbook) {
          var l = "playbook";
          r.browser = l;
          n[l] = true
        }
        if (n.bb) {
          var u = "blackberry";
          r.browser = u;
          n[u] = true
        }
        if (n.opr) {
          var c = "opera";
          r.browser = c;
          n[c] = true
        }
        if (n.safari && n.android) {
          var d = "android";
          r.browser = d;
          n[d] = true
        }
        if (n.safari && n.kindle) {
          var f = "kindle";
          r.browser = f;
          n[f] = true
        }
        if (n.safari && n.silk) {
          var h = "silk";
          r.browser = h;
          n[h] = true
        }
        n.name = r.browser;
        n.platform = r.platform;
        return n
      }
      window.jQBrowser = t(window.navigator.userAgent);
      window.jQBrowser.uaMatch = t;
      if (e) {
        e.browser = window.jQBrowser
      }
      return window.jQBrowser
    })
  },
  166: function (e, t, i) {
    var n, r, o;
    var r, s;
    var r, n, a;
    var r, l;
    var n, u;
    var r, c;
    var n, d;
    var r, o;
    (function (n, s) {
      "use strict";
      if (true) {
        !(r = [i(1)], o = function (e) {
          s(n, e)
        }.apply(t, r), o !== undefined && (e.exports = o))
      }
      else if (typeof e == "object" && e.exports) {
        e.exports = s(n, require("jquery"))
      }
      else {
        n.jQueryBridget = s(n, n.jQuery)
      }
    })(window, function e(t, i) {
      "use strict";
      var n = Array.prototype.slice;
      var r = t.console;
      var o = typeof r == "undefined" ? function () {} : function (e) {
        r.error(e)
      };

      function s(e, r, s) {
        s = s || i || t.jQuery;
        if (!s) {
          return
        }
        if (!r.prototype.option) {
          r.prototype.option = function (e) {
            if (!s.isPlainObject(e)) {
              return
            }
            this.options = s.extend(true, this.options, e)
          }
        }
        s.fn[e] = function (e) {
          if (typeof e == "string") {
            var t = n.call(arguments, 1);
            return l(this, e, t)
          }
          u(this, e);
          return this
        };

        function l(t, i, n) {
          var r;
          var a = "$()." + e + '("' + i + '")';
          t.each(function (t, l) {
            var u = s.data(l, e);
            if (!u) {
              o(e + " not initialized. Cannot call methods, i.e. " + a);
              return
            }
            var c = u[i];
            if (!c || i.charAt(0) == "_") {
              o(a + " is not a valid method");
              return
            }
            var d = c.apply(u, n);
            r = r === undefined ? d : r
          });
          return r !== undefined ? r : t
        }

        function u(t, i) {
          t.each(function (t, n) {
            var o = s.data(n, e);
            if (o) {
              o.option(i);
              o._init()
            }
            else {
              o = new r(n, i);
              s.data(n, e, o)
            }
          })
        }
        a(s)
      }

      function a(e) {
        if (!e || e && e.bridget) {
          return
        }
        e.bridget = s
      }
      a(i || t.jQuery);
      return s
    });
    (function (r, o) {
      if (true) {
        !(n = o, d = typeof n === "function" ? n.call(t, i, t, e) : n)
      }
      else if (typeof e == "object" && e.exports) {
        e.exports = o()
      }
      else {
        r.EvEmitter = o()
      }
    })(this, function () {
      function e() {}
      var t = e.prototype;
      t.on = function (e, t) {
        if (!e || !t) {
          return
        }
        var i = this._events = this._events || {};
        var n = i[e] = i[e] || [];
        if (n.indexOf(t) == -1) {
          n.push(t)
        }
        return this
      };
      t.once = function (e, t) {
        if (!e || !t) {
          return
        }
        this.on(e, t);
        var i = this._onceEvents = this._onceEvents || {};
        var n = i[e] = i[e] || {};
        n[t] = true;
        return this
      };
      t.off = function (e, t) {
        var i = this._events && this._events[e];
        if (!i || !i.length) {
          return
        }
        var n = i.indexOf(t);
        if (n != -1) {
          i.splice(n, 1)
        }
        return this
      };
      t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (!i || !i.length) {
          return
        }
        var n = 0;
        var r = i[n];
        t = t || [];
        var o = this._onceEvents && this._onceEvents[e];
        while (r) {
          var s = o && o[r];
          if (s) {
            this.off(e, r);
            delete o[r]
          }
          r.apply(this, t);
          n += s ? 0 : 1;
          r = i[n]
        }
        return this
      };
      return e
    });
    (function (i, n) {
      "use strict";
      if (true) {
        !(r = [], c = function () {
          return n()
        }.apply(t, r))
      }
      else if (typeof e == "object" && e.exports) {
        e.exports = n()
      }
      else {
        i.getSize = n()
      }
    })(window, function e() {
      "use strict";

      function t(e) {
        var t = parseFloat(e);
        var i = e.indexOf("%") == -1 && !isNaN(t);
        return i && t
      }

      function i() {}
      var n = typeof console == "undefined" ? i : function (e) {
        console.error(e)
      };
      var r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
      var o = r.length;

      function s() {
        var e = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        };
        for (var t = 0; t < o; t++) {
          var i = r[t];
          e[i] = 0
        }
        return e
      }

      function a(e) {
        var t = getComputedStyle(e);
        if (!t) {
          n("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1")
        }
        return t
      }
      var l = false;
      var u;

      function c() {
        if (l) {
          return
        }
        l = true;
        var e = document.createElement("div");
        e.style.width = "200px";
        e.style.padding = "1px 2px 3px 4px";
        e.style.borderStyle = "solid";
        e.style.borderWidth = "1px 2px 3px 4px";
        e.style.boxSizing = "border-box";
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = a(e);
        d.isBoxSizeOuter = u = t(n.width) == 200;
        i.removeChild(e)
      }

      function d(e) {
        c();
        if (typeof e == "string") {
          e = document.querySelector(e)
        }
        if (!e || typeof e != "object" || !e.nodeType) {
          return
        }
        var i = a(e);
        if (i.display == "none") {
          return s()
        }
        var n = {};
        n.width = e.offsetWidth;
        n.height = e.offsetHeight;
        var l = n.isBorderBox = i.boxSizing == "border-box";
        for (var d = 0; d < o; d++) {
          var f = r[d];
          var h = i[f];
          var p = parseFloat(h);
          n[f] = !isNaN(p) ? p : 0
        }
        var m = n.paddingLeft + n.paddingRight;
        var v = n.paddingTop + n.paddingBottom;
        var g = n.marginLeft + n.marginRight;
        var y = n.marginTop + n.marginBottom;
        var b = n.borderLeftWidth + n.borderRightWidth;
        var w = n.borderTopWidth + n.borderBottomWidth;
        var T = l && u;
        var S = t(i.width);
        if (S !== false) {
          n.width = S + (T ? 0 : m + b)
        }
        var _ = t(i.height);
        if (_ !== false) {
          n.height = _ + (T ? 0 : v + w)
        }
        n.innerWidth = n.width - (m + b);
        n.innerHeight = n.height - (v + w);
        n.outerWidth = n.width + g;
        n.outerHeight = n.height + y;
        return n
      }
      return d
    });
    (function (r, o) {
      "use strict";
      if (true) {
        !(n = o, u = typeof n === "function" ? n.call(t, i, t, e) : n)
      }
      else if (typeof e == "object" && e.exports) {
        e.exports = o()
      }
      else {
        r.matchesSelector = o()
      }
    })(window, function e() {
      "use strict";
      var t = function () {
        var e = Element.prototype;
        if (e.matches) {
          return "matches"
        }
        if (e.matchesSelector) {
          return "matchesSelector"
        }
        var t = ["webkit", "moz", "ms", "o"];
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          var r = n + "MatchesSelector";
          if (e[r]) {
            return r
          }
        }
      }();
      return function e(i, n) {
        return i[t](n)
      }
    });
    (function (i, n) {
      if (true) {
        !(r = [u], l = function (e) {
          return n(i, e)
        }.apply(t, r))
      }
      else if (typeof e == "object" && e.exports) {
        e.exports = n(i, require("desandro-matches-selector"))
      }
      else {
        i.fizzyUIUtils = n(i, i.matchesSelector)
      }
    })(window, function e(t, i) {
      var n = {};
      n.extend = function (e, t) {
        for (var i in t) {
          e[i] = t[i]
        }
        return e
      };
      n.modulo = function (e, t) {
        return (e % t + t) % t
      };
      n.makeArray = function (e) {
        var t = [];
        if (Array.isArray(e)) {
          t = e
        }
        else if (e && typeof e.length == "number") {
          for (var i = 0; i < e.length; i++) {
            t.push(e[i])
          }
        }
        else {
          t.push(e)
        }
        return t
      };
      n.removeFrom = function (e, t) {
        var i = e.indexOf(t);
        if (i != -1) {
          e.splice(i, 1)
        }
      };
      n.getParent = function (e, t) {
        while (e != document.body) {
          e = e.parentNode;
          if (i(e, t)) {
            return e
          }
        }
      };
      n.getQueryElement = function (e) {
        if (typeof e == "string") {
          return document.querySelector(e)
        }
        return e
      };
      n.handleEvent = function (e) {
        var t = "on" + e.type;
        if (this[t]) {
          this[t](e)
        }
      };
      n.filterFindElements = function (e, t) {
        e = n.makeArray(e);
        var r = [];
        e.forEach(function (e) {
          if (!(e instanceof HTMLElement)) {
            return
          }
          if (!t) {
            r.push(e);
            return
          }
          if (i(e, t)) {
            r.push(e)
          }
          var n = e.querySelectorAll(t);
          for (var o = 0; o < n.length; o++) {
            r.push(n[o])
          }
        });
        return r
      };
      n.debounceMethod = function (e, t, i) {
        var n = e.prototype[t];
        var r = t + "Timeout";
        e.prototype[t] = function () {
          var e = this[r];
          if (e) {
            clearTimeout(e)
          }
          var t = arguments;
          var o = this;
          this[r] = setTimeout(function () {
            n.apply(o, t);
            delete o[r]
          }, i || 100)
        }
      };
      n.docReady = function (e) {
        if (document.readyState == "complete") {
          e()
        }
        else {
          document.addEventListener("DOMContentLoaded", e)
        }
      };
      n.toDashed = function (e) {
        return e.replace(/(.)([A-Z])/g, function (e, t, i) {
          return t + "-" + i
        }).toLowerCase()
      };
      var r = t.console;
      n.htmlInit = function (e, i) {
        n.docReady(function () {
          var o = n.toDashed(i);
          var s = "data-" + o;
          var a = document.querySelectorAll("[" + s + "]");
          var l = document.querySelectorAll(".js-" + o);
          var u = n.makeArray(a).concat(n.makeArray(l));
          var c = s + "-options";
          var d = t.jQuery;
          u.forEach(function (t) {
            var n = t.getAttribute(s) || t.getAttribute(c);
            var o;
            try {
              o = n && JSON.parse(n)
            }
            catch (e) {
              if (r) {
                r.error("Error parsing " + s + " on " + t.className + ": " + e)
              }
              return
            }
            var a = new e(t, o);
            if (d) {
              d.data(t, i, a)
            }
          })
        })
      };
      return n
    });
    (function (i, o) {
      if (true) {
        !(r = [d, c], n = o, a = typeof n === "function" ? n.apply(t, r) : n)
      }
      else if (typeof e == "object" && e.exports) {
        e.exports = o(require("ev-emitter"), require("get-size"))
      }
      else {
        i.Outlayer = {};
        i.Outlayer.Item = o(i.EvEmitter, i.getSize)
      }
    })(window, function e(t, i) {
      "use strict";

      function n(e) {
        for (var t in e) {
          return false
        }
        t = null;
        return true
      }
      var r = document.documentElement.style;
      var o = typeof r.transition == "string" ? "transition" : "WebkitTransition";
      var s = typeof r.transform == "string" ? "transform" : "WebkitTransform";
      var a = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      }[o];
      var l = {
        transform: s,
        transition: o,
        transitionDuration: o + "Duration",
        transitionProperty: o + "Property",
        transitionDelay: o + "Delay"
      };

      function u(e, t) {
        if (!e) {
          return
        }
        this.element = e;
        this.layout = t;
        this.position = {
          x: 0,
          y: 0
        };
        this._create()
      }
      var c = u.prototype = Object.create(t.prototype);
      c.constructor = u;
      c._create = function () {
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
        };
        this.css({
          position: "absolute"
        })
      };
      c.handleEvent = function (e) {
        var t = "on" + e.type;
        if (this[t]) {
          this[t](e)
        }
      };
      c.getSize = function () {
        this.size = i(this.element)
      };
      c.css = function (e) {
        var t = this.element.style;
        for (var i in e) {
          var n = l[i] || i;
          t[n] = e[i]
        }
      };
      c.getPosition = function () {
        var e = getComputedStyle(this.element);
        var t = this.layout._getOption("originLeft");
        var i = this.layout._getOption("originTop");
        var n = e[t ? "left" : "right"];
        var r = e[i ? "top" : "bottom"];
        var o = this.layout.size;
        var s = n.indexOf("%") != -1 ? parseFloat(n) / 100 * o.width : parseInt(n, 10);
        var a = r.indexOf("%") != -1 ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
        s = isNaN(s) ? 0 : s;
        a = isNaN(a) ? 0 : a;
        s -= t ? o.paddingLeft : o.paddingRight;
        a -= i ? o.paddingTop : o.paddingBottom;
        this.position.x = s;
        this.position.y = a
      };
      c.layoutPosition = function () {
        var e = this.layout.size;
        var t = {};
        var i = this.layout._getOption("originLeft");
        var n = this.layout._getOption("originTop");
        var r = i ? "paddingLeft" : "paddingRight";
        var o = i ? "left" : "right";
        var s = i ? "right" : "left";
        var a = this.position.x + e[r];
        t[o] = this.getXValue(a);
        t[s] = "";
        var l = n ? "paddingTop" : "paddingBottom";
        var u = n ? "top" : "bottom";
        var c = n ? "bottom" : "top";
        var d = this.position.y + e[l];
        t[u] = this.getYValue(d);
        t[c] = "";
        this.css(t);
        this.emitEvent("layout", [this])
      };
      c.getXValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
      };
      c.getYValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
      };
      c._transitionTo = function (e, t) {
        this.getPosition();
        var i = this.position.x;
        var n = this.position.y;
        var r = parseInt(e, 10);
        var o = parseInt(t, 10);
        var s = r === this.position.x && o === this.position.y;
        this.setPosition(e, t);
        if (s && !this.isTransitioning) {
          this.layoutPosition();
          return
        }
        var a = e - i;
        var l = t - n;
        var u = {};
        u.transform = this.getTranslate(a, l);
        this.transition({
          to: u,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: true
        })
      };
      c.getTranslate = function (e, t) {
        var i = this.layout._getOption("originLeft");
        var n = this.layout._getOption("originTop");
        e = i ? e : -e;
        t = n ? t : -t;
        return "translate3d(" + e + "px, " + t + "px, 0)"
      };
      c.goTo = function (e, t) {
        this.setPosition(e, t);
        this.layoutPosition()
      };
      c.moveTo = c._transitionTo;
      c.setPosition = function (e, t) {
        this.position.x = parseInt(e, 10);
        this.position.y = parseInt(t, 10)
      };
      c._nonTransition = function (e) {
        this.css(e.to);
        if (e.isCleaning) {
          this._removeStyles(e.to)
        }
        for (var t in e.onTransitionEnd) {
          e.onTransitionEnd[t].call(this)
        }
      };
      c.transition = function (e) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
          this._nonTransition(e);
          return
        }
        var t = this._transn;
        for (var i in e.onTransitionEnd) {
          t.onEnd[i] = e.onTransitionEnd[i]
        }
        for (i in e.to) {
          t.ingProperties[i] = true;
          if (e.isCleaning) {
            t.clean[i] = true
          }
        }
        if (e.from) {
          this.css(e.from);
          var n = this.element.offsetHeight;
          n = null
        }
        this.enableTransition(e.to);
        this.css(e.to);
        this.isTransitioning = true
      };

      function d(e) {
        return e.replace(/([A-Z])/g, function (e) {
          return "-" + e.toLowerCase()
        })
      }
      var f = "opacity," + d(s);
      c.enableTransition = function () {
        if (this.isTransitioning) {
          return
        }
        var e = this.layout.options.transitionDuration;
        e = typeof e == "number" ? e + "ms" : e;
        this.css({
          transitionProperty: f,
          transitionDuration: e,
          transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(a, this, false)
      };
      c.onwebkitTransitionEnd = function (e) {
        this.ontransitionend(e)
      };
      c.onotransitionend = function (e) {
        this.ontransitionend(e)
      };
      var h = {
        "-webkit-transform": "transform"
      };
      c.ontransitionend = function (e) {
        if (e.target !== this.element) {
          return
        }
        var t = this._transn;
        var i = h[e.propertyName] || e.propertyName;
        delete t.ingProperties[i];
        if (n(t.ingProperties)) {
          this.disableTransition()
        }
        if (i in t.clean) {
          this.element.style[e.propertyName] = "";
          delete t.clean[i]
        }
        if (i in t.onEnd) {
          var r = t.onEnd[i];
          r.call(this);
          delete t.onEnd[i]
        }
        this.emitEvent("transitionEnd", [this])
      };
      c.disableTransition = function () {
        this.removeTransitionStyles();
        this.element.removeEventListener(a, this, false);
        this.isTransitioning = false
      };
      c._removeStyles = function (e) {
        var t = {};
        for (var i in e) {
          t[i] = ""
        }
        this.css(t)
      };
      var p = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      };
      c.removeTransitionStyles = function () {
        this.css(p)
      };
      c.stagger = function (e) {
        e = isNaN(e) ? 0 : e;
        this.staggerDelay = e + "ms"
      };
      c.removeElem = function () {
        this.element.parentNode.removeChild(this.element);
        this.css({
          display: ""
        });
        this.emitEvent("remove", [this])
      };
      c.remove = function () {
        if (!o || !parseFloat(this.layout.options.transitionDuration)) {
          this.removeElem();
          return
        }
        this.once("transitionEnd", function () {
          this.removeElem()
        });
        this.hide()
      };
      c.reveal = function () {
        delete this.isHidden;
        this.css({
          display: ""
        });
        var e = this.layout.options;
        var t = {};
        var i = this.getHideRevealTransitionEndProperty("visibleStyle");
        t[i] = this.onRevealTransitionEnd;
        this.transition({
          from: e.hiddenStyle,
          to: e.visibleStyle,
          isCleaning: true,
          onTransitionEnd: t
        })
      };
      c.onRevealTransitionEnd = function () {
        if (!this.isHidden) {
          this.emitEvent("reveal")
        }
      };
      c.getHideRevealTransitionEndProperty = function (e) {
        var t = this.layout.options[e];
        if (t.opacity) {
          return "opacity"
        }
        for (var i in t) {
          return i
        }
      };
      c.hide = function () {
        this.isHidden = true;
        this.css({
          display: ""
        });
        var e = this.layout.options;
        var t = {};
        var i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        t[i] = this.onHideTransitionEnd;
        this.transition({
          from: e.visibleStyle,
          to: e.hiddenStyle,
          isCleaning: true,
          onTransitionEnd: t
        })
      };
      c.onHideTransitionEnd = function () {
        if (this.isHidden) {
          this.css({
            display: "none"
          });
          this.emitEvent("hide")
        }
      };
      c.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        })
      };
      return u
    });
    (function (i, n) {
      "use strict";
      if (true) {
        !(r = [d, c, l, a], s = function (e, t, r, o) {
          return n(i, e, t, r, o)
        }.apply(t, r))
      }
      else if (typeof e == "object" && e.exports) {
        e.exports = n(i, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"))
      }
      else {
        i.Outlayer = n(i, i.EvEmitter, i.getSize, i.fizzyUIUtils, i.Outlayer.Item)
      }
    })(window, function e(t, i, n, r, o) {
      "use strict";
      var s = t.console;
      var a = t.jQuery;
      var l = function () {};
      var u = 0;
      var c = {};

      function d(e, t) {
        var i = r.getQueryElement(e);
        if (!i) {
          if (s) {
            s.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
          }
          return
        }
        this.element = i;
        if (a) {
          this.$element = a(this.element)
        }
        this.options = r.extend({}, this.constructor.defaults);
        this.option(t);
        var n = ++u;
        this.element.outlayerGUID = n;
        c[n] = this;
        this._create();
        var o = this._getOption("initLayout");
        if (o) {
          this.layout()
        }
      }
      d.namespace = "outlayer";
      d.Item = o;
      d.defaults = {
        containerStyle: {
          position: "relative"
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
        }
      };
      var f = d.prototype;
      r.extend(f, i.prototype);
      f.option = function (e) {
        r.extend(this.options, e)
      };
      f._getOption = function (e) {
        var t = this.constructor.compatOptions[e];
        return t && this.options[t] !== undefined ? this.options[t] : this.options[e]
      };
      d.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      };
      f._create = function () {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        r.extend(this.element.style, this.options.containerStyle);
        var e = this._getOption("resize");
        if (e) {
          this.bindResize()
        }
      };
      f.reloadItems = function () {
        this.items = this._itemize(this.element.children)
      };
      f._itemize = function (e) {
        var t = this._filterFindItemElements(e);
        var i = this.constructor.Item;
        var n = [];
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          var s = new i(o, this);
          n.push(s)
        }
        return n
      };
      f._filterFindItemElements = function (e) {
        return r.filterFindElements(e, this.options.itemSelector)
      };
      f.getItemElements = function () {
        return this.items.map(function (e) {
          return e.element
        })
      };
      f.layout = function () {
        this._resetLayout();
        this._manageStamps();
        var e = this._getOption("layoutInstant");
        var t = e !== undefined ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t);
        this._isLayoutInited = true
      };
      f._init = f.layout;
      f._resetLayout = function () {
        this.getSize()
      };
      f.getSize = function () {
        this.size = n(this.element)
      };
      f._getMeasurement = function (e, t) {
        var i = this.options[e];
        var r;
        if (!i) {
          this[e] = 0
        }
        else {
          if (typeof i == "string") {
            r = this.element.querySelector(i)
          }
          else if (i instanceof HTMLElement) {
            r = i
          }
          this[e] = r ? n(r)[t] : i
        }
      };
      f.layoutItems = function (e, t) {
        e = this._getItemsForLayout(e);
        this._layoutItems(e, t);
        this._postLayout()
      };
      f._getItemsForLayout = function (e) {
        return e.filter(function (e) {
          return !e.isIgnored
        })
      };
      f._layoutItems = function (e, t) {
        this._emitCompleteOnItems("layout", e);
        if (!e || !e.length) {
          return
        }
        var i = [];
        e.forEach(function (e) {
          var n = this._getItemLayoutPosition(e);
          n.item = e;
          n.isInstant = t || e.isLayoutInstant;
          i.push(n)
        }, this);
        this._processLayoutQueue(i)
      };
      f._getItemLayoutPosition = function () {
        return {
          x: 0,
          y: 0
        }
      };
      f._processLayoutQueue = function (e) {
        this.updateStagger();
        e.forEach(function (e, t) {
          this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }, this)
      };
      f.updateStagger = function () {
        var e = this.options.stagger;
        if (e === null || e === undefined) {
          this.stagger = 0;
          return
        }
        this.stagger = m(e);
        return this.stagger
      };
      f._positionItem = function (e, t, i, n, r) {
        if (n) {
          e.goTo(t, i)
        }
        else {
          e.stagger(r * this.stagger);
          e.moveTo(t, i)
        }
      };
      f._postLayout = function () {
        this.resizeContainer()
      };
      f.resizeContainer = function () {
        var e = this._getOption("resizeContainer");
        if (!e) {
          return
        }
        var t = this._getContainerSize();
        if (t) {
          this._setContainerMeasure(t.width, true);
          this._setContainerMeasure(t.height, false)
        }
      };
      f._getContainerSize = l;
      f._setContainerMeasure = function (e, t) {
        if (e === undefined) {
          return
        }
        var i = this.size;
        if (i.isBorderBox) {
          e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth
        }
        e = Math.max(e, 0);
        this.element.style[t ? "width" : "height"] = e + "px"
      };
      f._emitCompleteOnItems = function (e, t) {
        var i = this;

        function n() {
          i.dispatchEvent(e + "Complete", null, [t])
        }
        var r = t.length;
        if (!t || !r) {
          n();
          return
        }
        var o = 0;

        function s() {
          o++;
          if (o == r) {
            n()
          }
        }
        t.forEach(function (t) {
          t.once(e, s)
        })
      };
      f.dispatchEvent = function (e, t, i) {
        var n = t ? [t].concat(i) : i;
        this.emitEvent(e, n);
        if (a) {
          this.$element = this.$element || a(this.element);
          if (t) {
            var r = a.Event(t);
            r.type = e;
            this.$element.trigger(r, i)
          }
          else {
            this.$element.trigger(e, i)
          }
        }
      };
      f.ignore = function (e) {
        var t = this.getItem(e);
        if (t) {
          t.isIgnored = true
        }
      };
      f.unignore = function (e) {
        var t = this.getItem(e);
        if (t) {
          delete t.isIgnored
        }
      };
      f.stamp = function (e) {
        e = this._find(e);
        if (!e) {
          return
        }
        this.stamps = this.stamps.concat(e);
        e.forEach(this.ignore, this)
      };
      f.unstamp = function (e) {
        e = this._find(e);
        if (!e) {
          return
        }
        e.forEach(function (e) {
          r.removeFrom(this.stamps, e);
          this.unignore(e)
        }, this)
      };
      f._find = function (e) {
        if (!e) {
          return
        }
        if (typeof e == "string") {
          e = this.element.querySelectorAll(e)
        }
        e = r.makeArray(e);
        return e
      };
      f._manageStamps = function () {
        if (!this.stamps || !this.stamps.length) {
          return
        }
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this)
      };
      f._getBoundingRect = function () {
        var e = this.element.getBoundingClientRect();
        var t = this.size;
        this._boundingRect = {
          left: e.left + t.paddingLeft + t.borderLeftWidth,
          top: e.top + t.paddingTop + t.borderTopWidth,
          right: e.right - (t.paddingRight + t.borderRightWidth),
          bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
      };
      f._manageStamp = l;
      f._getElementOffset = function (e) {
        var t = e.getBoundingClientRect();
        var i = this._boundingRect;
        var r = n(e);
        var o = {
          left: t.left - i.left - r.marginLeft,
          top: t.top - i.top - r.marginTop,
          right: i.right - t.right - r.marginRight,
          bottom: i.bottom - t.bottom - r.marginBottom
        };
        return o
      };
      f.handleEvent = r.handleEvent;
      f.bindResize = function () {
        t.addEventListener("resize", this);
        this.isResizeBound = true
      };
      f.unbindResize = function () {
        t.removeEventListener("resize", this);
        this.isResizeBound = false
      };
      f.onresize = function () {
        this.resize()
      };
      r.debounceMethod(d, "onresize", 100);
      f.resize = function () {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
          return
        }
        this.layout()
      };
      f.needsResizeLayout = function () {
        var e = n(this.element);
        var t = this.size && e;
        return t && e.innerWidth !== this.size.innerWidth
      };
      f.addItems = function (e) {
        var t = this._itemize(e);
        if (t.length) {
          this.items = this.items.concat(t)
        }
        return t
      };
      f.appended = function (e) {
        var t = this.addItems(e);
        if (!t.length) {
          return
        }
        this.layoutItems(t, true);
        this.reveal(t)
      };
      f.prepended = function (e) {
        var t = this._itemize(e);
        if (!t.length) {
          return
        }
        var i = this.items.slice(0);
        this.items = t.concat(i);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(t, true);
        this.reveal(t);
        this.layoutItems(i)
      };
      f.reveal = function (e) {
        this._emitCompleteOnItems("reveal", e);
        if (!e || !e.length) {
          return
        }
        var t = this.updateStagger();
        e.forEach(function (e, i) {
          e.stagger(i * t);
          e.reveal()
        })
      };
      f.hide = function (e) {
        this._emitCompleteOnItems("hide", e);
        if (!e || !e.length) {
          return
        }
        var t = this.updateStagger();
        e.forEach(function (e, i) {
          e.stagger(i * t);
          e.hide()
        })
      };
      f.revealItemElements = function (e) {
        var t = this.getItems(e);
        this.reveal(t)
      };
      f.hideItemElements = function (e) {
        var t = this.getItems(e);
        this.hide(t)
      };
      f.getItem = function (e) {
        for (var t = 0; t < this.items.length; t++) {
          var i = this.items[t];
          if (i.element == e) {
            return i
          }
        }
      };
      f.getItems = function (e) {
        e = r.makeArray(e);
        var t = [];
        e.forEach(function (e) {
          var i = this.getItem(e);
          if (i) {
            t.push(i)
          }
        }, this);
        return t
      };
      f.remove = function (e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t);
        if (!t || !t.length) {
          return
        }
        t.forEach(function (e) {
          e.remove();
          r.removeFrom(this.items, e)
        }, this)
      };
      f.destroy = function () {
        var e = this.element.style;
        e.height = "";
        e.position = "";
        e.width = "";
        this.items.forEach(function (e) {
          e.destroy()
        });
        this.unbindResize();
        var t = this.element.outlayerGUID;
        delete c[t];
        delete this.element.outlayerGUID;
        if (a) {
          a.removeData(this.element, this.constructor.namespace)
        }
      };
      d.data = function (e) {
        e = r.getQueryElement(e);
        var t = e && e.outlayerGUID;
        return t && c[t]
      };
      d.create = function (e, t) {
        var i = h(d);
        i.defaults = r.extend({}, d.defaults);
        r.extend(i.defaults, t);
        i.compatOptions = r.extend({}, d.compatOptions);
        i.namespace = e;
        i.data = d.data;
        i.Item = h(o);
        r.htmlInit(i, e);
        if (a && a.bridget) {
          a.bridget(e, i)
        }
        return i
      };

      function h(e) {
        function t() {
          e.apply(this, arguments)
        }
        t.prototype = Object.create(e.prototype);
        t.prototype.constructor = t;
        return t
      }
      var p = {
        ms: 1,
        s: 1e3
      };

      function m(e) {
        if (typeof e == "number") {
          return e
        }
        var t = e.match(/(^\d*\.?\d*)(\w*)/);
        var i = t && t[1];
        var n = t && t[2];
        if (!i.length) {
          return 0
        }
        i = parseFloat(i);
        var r = p[n] || 1;
        return i * r
      }
      d.Item = o;
      return d
    });
    (function (i, a) {
      if (true) {
        !(r = [s, c], n = a, o = typeof n === "function" ? n.apply(t, r) : n, o !== undefined && (e.exports = o))
      }
      else if (typeof e == "object" && e.exports) {
        e.exports = a(require("outlayer"), require("get-size"))
      }
      else {
        i.Masonry = a(i.Outlayer, i.getSize)
      }
    })(window, function e(t, i) {
      var n = t.create("masonry");
      n.compatOptions.fitWidth = "isFitWidth";
      n.prototype._resetLayout = function () {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        this.colYs = [];
        for (var e = 0; e < this.cols; e++) {
          this.colYs.push(0)
        }
        this.maxY = 0
      };
      n.prototype.measureColumns = function () {
        this.getContainerWidth();
        if (!this.columnWidth) {
          var e = this.items[0];
          var t = e && e.element;
          this.columnWidth = t && i(t).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter;
        var r = this.containerWidth + this.gutter;
        var o = r / n;
        var s = n - r % n;
        var a = s && s < 1 ? "round" : "floor";
        o = Math[a](o);
        this.cols = Math.max(o, 1)
      };
      n.prototype.getContainerWidth = function () {
        var e = this._getOption("fitWidth");
        var t = e ? this.element.parentNode : this.element;
        var n = i(t);
        this.containerWidth = n && n.innerWidth
      };
      n.prototype._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth;
        var i = t && t < 1 ? "round" : "ceil";
        var n = Math[i](e.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        var r = this._getColGroup(n);
        var o = Math.min.apply(Math, r);
        var s = r.indexOf(o);
        var a = {
          x: this.columnWidth * s,
          y: o
        };
        var l = o + e.size.outerHeight;
        var u = this.cols + 1 - r.length;
        for (var c = 0; c < u; c++) {
          this.colYs[s + c] = l
        }
        return a
      };
      n.prototype._getColGroup = function (e) {
        if (e < 2) {
          return this.colYs
        }
        var t = [];
        var i = this.cols + 1 - e;
        for (var n = 0; n < i; n++) {
          var r = this.colYs.slice(n, n + e);
          t[n] = Math.max.apply(Math, r)
        }
        return t
      };
      n.prototype._manageStamp = function (e) {
        var t = i(e);
        var n = this._getElementOffset(e);
        var r = this._getOption("originLeft");
        var o = r ? n.left : n.right;
        var s = o + t.outerWidth;
        var a = Math.floor(o / this.columnWidth);
        a = Math.max(0, a);
        var l = Math.floor(s / this.columnWidth);
        l -= s % this.columnWidth ? 0 : 1;
        l = Math.min(this.cols - 1, l);
        var u = this._getOption("originTop");
        var c = (u ? n.top : n.bottom) + t.outerHeight;
        for (var d = a; d <= l; d++) {
          this.colYs[d] = Math.max(c, this.colYs[d])
        }
      };
      n.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
          height: this.maxY
        };
        if (this._getOption("fitWidth")) {
          e.width = this._getContainerFitWidth()
        }
        return e
      };
      n.prototype._getContainerFitWidth = function () {
        var e = 0;
        var t = this.cols;
        while (--t) {
          if (this.colYs[t] !== 0) {
            break
          }
          e++
        }
        return (this.cols - e) * this.columnWidth - this.gutter
      };
      n.prototype.needsResizeLayout = function () {
        var e = this.containerWidth;
        this.getContainerWidth();
        return e != this.containerWidth
      };
      return n
    })
  },
  167: function (e, t, i) {
    (function (e, t) {
      e(function () {
        "use strict";
        var e = {};
        e.mobileDetectRules = {
          phones: {
            iPhone: "\\biPhone\\b|\\biPod\\b",
            BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
            HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
            Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
            Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
            Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
            Samsung: "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C",
            LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
            Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
            Asus: "Asus.*Galaxy|PadFone.*Mobile",
            NokiaLumia: "Lumia [0-9]{3,4}",
            Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
            Palm: "PalmSource|Palm",
            Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
            Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
            Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
            Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
            iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
            SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
            Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
            Alcatel: "Alcatel",
            Nintendo: "Nintendo 3DS",
            Amoi: "Amoi",
            INQ: "INQ",
            GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
          },
          tablets: {
            iPad: "iPad|iPad.*Mobile",
            NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
            SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",
            Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
            SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
            HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
            AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",
            BlackBerryTablet: "PlayBook|RIM Tablet",
            HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
            MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
            NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
            AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
            ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
            LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
            FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
            PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
            LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
            DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
            YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
            MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
            ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
            IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
            IRUTablet: "M702pro",
            MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
            EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
            AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
            ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
            AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
            NokiaLumiaTablet: "Lumia 2520",
            SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
            PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
            CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
            CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
            MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
            MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
            SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
            RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
            FlyTablet: "IQ310|Fly Vision",
            bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus",
            HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
            NecTablet: "\\bN-06D|\\bN-08D",
            PantechTablet: "Pantech.*P4100",
            BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
            VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
            ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
            PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
            NabiTablet: "Android.*\\bNabi",
            KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
            DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
            TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
            PlaystationTablet: "Playstation.*(Portable|Vita)",
            TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
            PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
            AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
            DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
            GalapadTablet: "Android.*\\bG1\\b",
            MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
            KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
            AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
            PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
            YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
            ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
            GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
            PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
            OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
            HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
            DPSTablet: "DPS Dream 9|DPS Dual 7",
            VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
            CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
            MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
            ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
            GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
            ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
            VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
            ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
            StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
            VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
            EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
            RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
            iMobileTablet: "i-mobile i-note",
            TolinoTablet: "tolino tab [0-9.]+|tolino shine",
            AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
            AMPETablet: "Android.* A78 ",
            SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
            TecnoTablet: "TECNO P9",
            JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
            iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
            FX2Tablet: "FX2 PAD7|FX2 PAD10",
            XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
            ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
            OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
            CaptivaTablet: "CAPTIVA PAD",
            IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
            TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
            OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
            JaytechTablet: "TPC-PA762",
            BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
            DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
            EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
            LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
            AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
            MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
            CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
            WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
            MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
            NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
            NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
            LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
            UbislateTablet: "UbiSlate[\\s]?7C",
            PocketBookTablet: "Pocketbook",
            KocasoTablet: "\\b(TB-1207)\\b",
            HisenseTablet: "\\b(F5281|E2371)\\b",
            Hudl: "Hudl HT7S3|Hudl 2",
            TelstraTablet: "T-Hub2",
            GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b"
          },
          oss: {
            AndroidOS: "Android",
            BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
            PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
            SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
            WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
            WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
            iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
            MeeGoOS: "MeeGo",
            MaemoOS: "Maemo",
            JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
            webOS: "webOS|hpwOS",
            badaOS: "\\bBada\\b",
            BREWOS: "BREW"
          },
          uas: {
            Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
            Dolfin: "\\bDolfin\\b",
            Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
            Skyfire: "Skyfire",
            Edge: "Mobile Safari/[.0-9]* Edge",
            IE: "IEMobile|MSIEMobile",
            Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
            Bolt: "bolt",
            TeaShark: "teashark",
            Blazer: "Blazer",
            Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
            UCBrowser: "UC.*Browser|UCWEB",
            baiduboxapp: "baiduboxapp",
            baidubrowser: "baidubrowser",
            DiigoBrowser: "DiigoBrowser",
            Puffin: "Puffin",
            Mercury: "\\bMercury\\b",
            ObigoBrowser: "Obigo",
            NetFront: "NF-Browser",
            GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
            PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
          },
          props: {
            Mobile: "Mobile/[VER]",
            Build: "Build/[VER]",
            Version: "Version/[VER]",
            VendorID: "VendorID/[VER]",
            iPad: "iPad.*CPU[a-z ]+[VER]",
            iPhone: "iPhone.*CPU[a-z ]+[VER]",
            iPod: "iPod.*CPU[a-z ]+[VER]",
            Kindle: "Kindle/[VER]",
            Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
            Coast: ["Coast/[VER]"],
            Dolfin: "Dolfin/[VER]",
            Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
            Fennec: "Fennec/[VER]",
            Edge: "Edge/[VER]",
            IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
            NetFront: "NetFront/[VER]",
            NokiaBrowser: "NokiaBrowser/[VER]",
            Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
            "Opera Mini": "Opera Mini/[VER]",
            "Opera Mobi": "Version/[VER]",
            "UC Browser": "UC Browser[VER]",
            MQQBrowser: "MQQBrowser/[VER]",
            MicroMessenger: "MicroMessenger/[VER]",
            baiduboxapp: "baiduboxapp/[VER]",
            baidubrowser: "baidubrowser/[VER]",
            SamsungBrowser: "SamsungBrowser/[VER]",
            Iron: "Iron/[VER]",
            Safari: ["Version/[VER]", "Safari/[VER]"],
            Skyfire: "Skyfire/[VER]",
            Tizen: "Tizen/[VER]",
            Webkit: "webkit[ /][VER]",
            PaleMoon: "PaleMoon/[VER]",
            Gecko: "Gecko/[VER]",
            Trident: "Trident/[VER]",
            Presto: "Presto/[VER]",
            Goanna: "Goanna/[VER]",
            iOS: " \\bi?OS\\b [VER][ ;]{1}",
            Android: "Android [VER]",
            BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
            BREW: "BREW [VER]",
            Java: "Java/[VER]",
            "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
            "Windows Phone": "Windows Phone [VER]",
            "Windows CE": "Windows CE/[VER]",
            "Windows NT": "Windows NT [VER]",
            Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
            webOS: ["webOS/[VER]", "hpwOS/[VER];"]
          },
          utils: {
            Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
            MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
            DesktopMode: "WPDesktop",
            TV: "SonyDTV|HbbTV",
            WebKit: "(webkit)[ /]([\\w.]+)",
            Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
            Watch: "SM-V700"
          }
        };
        e.detectMobileBrowsers = {
          fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          tabletPattern: /android|ipad|playbook|silk/i
        };
        var i = Object.prototype.hasOwnProperty,
          n;
        e.FALLBACK_PHONE = "UnknownPhone";
        e.FALLBACK_TABLET = "UnknownTablet";
        e.FALLBACK_MOBILE = "UnknownMobile";
        n = "isArray" in Array ? Array.isArray : function (e) {
          return Object.prototype.toString.call(e) === "[object Array]"
        };

        function r(e, t) {
          return e != null && t != null && e.toLowerCase() === t.toLowerCase()
        }

        function o(e, t) {
          var i, n, r = e.length;
          if (!r || !t) {
            return false
          }
          i = t.toLowerCase();
          for (n = 0; n < r; ++n) {
            if (i === e[n].toLowerCase()) {
              return true
            }
          }
          return false
        }

        function s(e) {
          for (var t in e) {
            if (i.call(e, t)) {
              e[t] = new RegExp(e[t], "i")
            }
          }
        }(function t() {
          var r, o, a, l, u, c, d = e.mobileDetectRules;
          for (r in d.props) {
            if (i.call(d.props, r)) {
              o = d.props[r];
              if (!n(o)) {
                o = [o]
              }
              u = o.length;
              for (l = 0; l < u; ++l) {
                a = o[l];
                c = a.indexOf("[VER]");
                if (c >= 0) {
                  a = a.substring(0, c) + "([\\w._\\+]+)" + a.substring(c + 5)
                }
                o[l] = new RegExp(a, "i")
              }
              d.props[r] = o
            }
          }
          s(d.oss);
          s(d.phones);
          s(d.tablets);
          s(d.uas);
          s(d.utils);
          d.oss0 = {
            WindowsPhoneOS: d.oss.WindowsPhoneOS,
            WindowsMobileOS: d.oss.WindowsMobileOS
          }
        })();
        e.findMatch = function (e, t) {
          for (var n in e) {
            if (i.call(e, n)) {
              if (e[n].test(t)) {
                return n
              }
            }
          }
          return null
        };
        e.findMatches = function (e, t) {
          var n = [];
          for (var r in e) {
            if (i.call(e, r)) {
              if (e[r].test(t)) {
                n.push(r)
              }
            }
          }
          return n
        };
        e.getVersionStr = function (t, n) {
          var r = e.mobileDetectRules.props,
            o, s, a, l;
          if (i.call(r, t)) {
            o = r[t];
            a = o.length;
            for (s = 0; s < a; ++s) {
              l = o[s].exec(n);
              if (l !== null) {
                return l[1]
              }
            }
          }
          return null
        };
        e.getVersion = function (t, i) {
          var n = e.getVersionStr(t, i);
          return n ? e.prepareVersionNo(n) : NaN
        };
        e.prepareVersionNo = function (e) {
          var t;
          t = e.split(/[a-z._ \/\-]/i);
          if (t.length === 1) {
            e = t[0]
          }
          if (t.length > 1) {
            e = t[0] + ".";
            t.shift();
            e += t.join("")
          }
          return Number(e)
        };
        e.isMobileFallback = function (t) {
          return e.detectMobileBrowsers.fullPattern.test(t) || e.detectMobileBrowsers.shortPattern.test(t.substr(0, 4))
        };
        e.isTabletFallback = function (t) {
          return e.detectMobileBrowsers.tabletPattern.test(t)
        };
        e.prepareDetectionCache = function (i, n, r) {
          if (i.mobile !== t) {
            return
          }
          var o, s, l;
          s = e.findMatch(e.mobileDetectRules.tablets, n);
          if (s) {
            i.mobile = i.tablet = s;
            i.phone = null;
            return
          }
          o = e.findMatch(e.mobileDetectRules.phones, n);
          if (o) {
            i.mobile = i.phone = o;
            i.tablet = null;
            return
          }
          if (e.isMobileFallback(n)) {
            l = a.isPhoneSized(r);
            if (l === t) {
              i.mobile = e.FALLBACK_MOBILE;
              i.tablet = i.phone = null
            }
            else if (l) {
              i.mobile = i.phone = e.FALLBACK_PHONE;
              i.tablet = null
            }
            else {
              i.mobile = i.tablet = e.FALLBACK_TABLET;
              i.phone = null
            }
          }
          else if (e.isTabletFallback(n)) {
            i.mobile = i.tablet = e.FALLBACK_TABLET;
            i.phone = null
          }
          else {
            i.mobile = i.tablet = i.phone = null
          }
        };
        e.mobileGrade = function (e) {
          var t = e.mobile() !== null;
          if (e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || (e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3) || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t) {
            return "A"
          }
          if (e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS")) {
            return "B"
          }
          if (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile") <= 5.2) {
            return "C"
          }
          return "C"
        };
        e.detectOS = function (t) {
          return e.findMatch(e.mobileDetectRules.oss0, t) || e.findMatch(e.mobileDetectRules.oss, t)
        };
        e.getDeviceSmallerSide = function () {
          return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
        };

        function a(e, t) {
          this.ua = e || "";
          this._cache = {};
          this.maxPhoneWidth = t || 600
        }
        a.prototype = {
          constructor: a,
          mobile: function () {
            e.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile
          },
          phone: function () {
            e.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone
          },
          tablet: function () {
            e.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet
          },
          userAgent: function () {
            if (this._cache.userAgent === t) {
              this._cache.userAgent = e.findMatch(e.mobileDetectRules.uas, this.ua)
            }
            return this._cache.userAgent
          },
          userAgents: function () {
            if (this._cache.userAgents === t) {
              this._cache.userAgents = e.findMatches(e.mobileDetectRules.uas, this.ua)
            }
            return this._cache.userAgents
          },
          os: function () {
            if (this._cache.os === t) {
              this._cache.os = e.detectOS(this.ua)
            }
            return this._cache.os
          },
          version: function (t) {
            return e.getVersion(t, this.ua)
          },
          versionStr: function (t) {
            return e.getVersionStr(t, this.ua)
          },
          is: function (t) {
            return o(this.userAgents(), t) || r(t, this.os()) || r(t, this.phone()) || r(t, this.tablet()) || o(e.findMatches(e.mobileDetectRules.utils, this.ua), t)
          },
          match: function (e) {
            if (!(e instanceof RegExp)) {
              e = new RegExp(e, "i")
            }
            return e.test(this.ua)
          },
          isPhoneSized: function (e) {
            return a.isPhoneSized(e || this.maxPhoneWidth)
          },
          mobileGrade: function () {
            if (this._cache.grade === t) {
              this._cache.grade = e.mobileGrade(this)
            }
            return this._cache.grade
          }
        };
        if (typeof window !== "undefined" && window.screen) {
          a.isPhoneSized = function (i) {
            return i < 0 ? t : e.getDeviceSmallerSide() <= i
          }
        }
        else {
          a.isPhoneSized = function () {}
        }
        a._impl = e;
        a.version = "1.3.7 2017-09-06";
        return a
      })
    })(function (t) {
      if (typeof e !== "undefined" && e.exports) {
        return function (t) {
          e.exports = t()
        }
      }
      else if (true) {
        return i(251)
      }
      else if (typeof window !== "undefined") {
        return function (e) {
          window.MobileDetect = e()
        }
      }
      else {
        throw new Error("unknown environment")
      }
    }())
  },
  168: function (e, t, i) {
    (function (e) {
      (function (e, t, i) {
        VimeoPlayer = {
          player: null,
          defaults: {
            videoId: "139480129",
            mute: true,
            loop: true,
            autoplay: true
          },
          init: function t(i, n) {
            var r = this;
            r.userOptions = n;
            r.$node = e(i);
            r.options = e.extend(true, {}, r.defaults, r.userOptions);
            r.ID = (new Date).getTime();
            r.createBackgroundVideo();
            return r
          },
          createBackgroundVideo: function i() {
            var n = this;
            var r = "https://player.vimeo.com/video/{video-id}?title=0&byline=0&portrait=0&badge=0" + "&autoplay={autoplay}&loop={loop}";
            r = r.replace("{video-id}", n.options.videoId);
            r = r.replace("{autoplay}", n.options.autoplay);
            r = r.replace("{loop}", n.options.loop);
            var o = e("<div/>", {
              class: "vimeoplayer-container",
              id: "vimeoplayer-container-" + n.ID
            });
            var s = e("<div/>", {
              class: "vimeoplayer-shield"
            });
            var a = e("<iframe/>", {
              src: r,
              id: n.ID,
              class: "vimeoplayer-player",
              frameborder: 0
            });
            n.resize(a);
            o.append(a, s);
            n.$container = o;
            n.$node.append(o);
            var l = this.onIframeReady.bind(this);
            t.addEventListener ? t.addEventListener("message", l, false) : t.attachEvent("onmessage", l, false)
          },
          destroy: function () {
            var e = this;
            e.$node.removeData("VimeoPlayer");
            e.$container.remove();
            e.$node = null;
            e.$container = null
          },
          resize: function (e) {
            var t = this.$node.outerWidth();
            var i = 16 / 9;
            var n = Math.ceil(t / i);
            e.prop({
              width: t,
              height: n
            })
          },
          onIframeReady: function (t) {
            if (typeof t.data !== "string") {
              return
            }
            var i = this;
            var n = JSON.parse(t.data);
            if (n.event === "ready" && i.volumeSet !== true) {
              i.volumeSet = true;
              var r = e('iframe[id="' + i.ID + '"]');
              var o = i.options.mute ? "0" : "100";
              var n = JSON.stringify({
                method: "setVolume",
                value: o
              });
              r[0].contentWindow.postMessage(n, r.attr("src"))
            }
          }
        };
        e.fn.VimeoPlayer = function (t) {
          return this.each(function () {
            var i = this;
            var n = Object.create(VimeoPlayer);
            n.init(i, t);
            e.data(i, "VimeoPlayer", n)
          })
        }
      })(e, window, document)
    }).call(t, i(1))
  },
  170: function (e, t, i) {
    (function (e) {
      if (typeof Object.create !== "function") {
        Object.create = function (e) {
          function t() {}
          t.prototype = e;
          return new t
        }
      }(function (e, t, i) {
        var n = function e(n) {
            var o = i.createElement("script"),
              s = i.getElementsByTagName("head")[0];
            if (t.location.origin == "file://") {
              o.src = "http://www.youtube.com/iframe_api"
            }
            else {
              o.src = "//www.youtube.com/iframe_api"
            }
            s.appendChild(o);
            s = null;
            o = null;
            r(n)
          },
          r = function i(n) {
            if (typeof YT === "undefined" && typeof t.loadingPlayer === "undefined") {
              t.loadingPlayer = true;
              t.dfd = e.Deferred();
              t.onYouTubeIframeAPIReady = function () {
                t.onYouTubeIframeAPIReady = null;
                t.dfd.resolve("done");
                n()
              }
            }
            else if (typeof YT === "object") {
              n()
            }
            else {
              t.dfd.done(function (e) {
                n()
              })
            }
          };
        YTPlayer = {
          player: null,
          defaults: {
            ratio: 16 / 9,
            videoId: "LSmgKRx5pBo",
            mute: true,
            repeat: true,
            width: e(t).width(),
            playButtonClass: "YTPlayer-play",
            pauseButtonClass: "YTPlayer-pause",
            muteButtonClass: "YTPlayer-mute",
            volumeUpClass: "YTPlayer-volume-up",
            volumeDownClass: "YTPlayer-volume-down",
            start: 0,
            pauseOnScroll: false,
            fitToBackground: true,
            playerVars: {
              iv_load_policy: 3,
              modestbranding: 1,
              autoplay: 1,
              controls: 0,
              showinfo: 0,
              wmode: "opaque",
              branding: 0,
              autohide: 0
            },
            events: null
          },
          init: function i(r, o) {
            var s = this;
            s.userOptions = o;
            s.$node = e(r);
            s.$window = e(t);
            s.defaults.events = {
              onReady: function (e) {
                s.onPlayerReady(e);
                if (s.options.pauseOnScroll) {
                  s.pauseOnScroll()
                }
                if (typeof s.options.callback == "function") {
                  s.options.callback.call(this)
                }
              },
              onStateChange: function (e) {
                if (e.data === 1) {
                  s.$node.addClass("loaded")
                }
                else if (e.data === 0 && s.options.repeat) {
                  s.player.seekTo(s.options.start)
                }
              }
            };
            s.options = e.extend(true, {}, s.defaults, s.userOptions);
            s.options.height = Math.ceil(s.options.width / s.options.ratio);
            s.ID = (new Date).getTime();
            s.holderID = "YTPlayer-ID-" + s.ID;
            s.createBackgroundVideo();
            s.$window.on("resize.YTplayer" + s.ID, function () {
              s.resize(s)
            });
            n(s.onYouTubeIframeAPIReady.bind(s));
            s.resize(s);
            return s
          },
          pauseOnScroll: function e() {
            var t = this;
            t.$window.on("scroll.YTplayer" + t.ID, function () {
              var e = t.player.getPlayerState();
              if (e === 1) {
                t.player.pauseVideo()
              }
            });
            t.$window.scrollStopped(function () {
              var e = t.player.getPlayerState();
              if (e === 2) {
                t.player.playVideo()
              }
            })
          },
          createBackgroundVideo: function t() {
            var i = this;
            var n = e('<div id="ytplayer-container' + i.ID + '">\t\t\t\t\t\t\t\t\t\t<div id="' + i.holderID + '" class="ytplayer-player"></div>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t<div id="ytplayer-shield" class="ytplayer-shield"></div>');
            i.$node.append(n);
            i.$YTPlayerString = n;
            n = null
          },
          resize: function i(n) {
            var r = e(t);
            if (!n.options.fitToBackground) {
              r = n.$node
            }
            var o = r.outerWidth(),
              s = r.outerHeight(),
              a, l, u = e("#" + n.holderID);
            if (o / n.options.ratio < s) {
              a = Math.ceil(s * n.options.ratio);
              u.width(a).height(s).css({
                left: (o - a) / 2,
                top: 0
              })
            }
            else {
              l = Math.ceil(o / n.options.ratio);
              u.width(o).height(l).css({
                left: 0,
                top: (s - l) / 2
              })
            }
            u = null;
            r = null
          },
          onYouTubeIframeAPIReady: function e() {
            var i = this;
            i.player = new t.YT.Player(i.holderID, i.options)
          },
          onPlayerReady: function e(t) {
            if (this.options.mute) {
              t.target.mute()
            }
            if (this.options.playerVars && this.options.playerVars.autoplay) {
              t.target.playVideo()
            }
          },
          getPlayer: function e() {
            return this.player
          },
          destroy: function i() {
            var n = this;
            n.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded");
            n.$YTPlayerString.remove();
            e(t).off("resize.YTplayer" + n.ID);
            e(t).off("scroll.YTplayer" + n.ID);
            n.$node = null;
            n.$YTPlayerString = null;
            n.player.destroy();
            n.player = null
          }
        };
        e.fn.scrollStopped = function (t) {
          var i = e(this),
            n = this;
          i.scroll(function () {
            if (i.data("scrollTimeout")) {
              clearTimeout(i.data("scrollTimeout"))
            }
            i.data("scrollTimeout", setTimeout(t, 250, n))
          })
        };
        e.fn.YTPlayer = function (t) {
          return this.each(function () {
            var i = this;
            e(i).data("yt-init", true);
            var n = Object.create(YTPlayer);
            n.init(i, t);
            e.data(i, "ytPlayer", n)
          })
        }
      })(e, window, document)
    }).call(t, i(1))
  },
  171: function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(1), __webpack_require__(165)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_W, $) {
      _W.evalJSON = function (json) {
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        if (cx.test(json)) {
          json = json.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
          })
        }
        try {
          return eval("(" + json + ")")
        }
        catch (e) {}
        throw new SyntaxError("Badly formed JSON string: " + json)
      };
      $.fn.up = function (e) {
        return this.eq(0).parent().closest(e || "*")
      };
      $.fn.down = function (e) {
        if (!e) {
          return this.eq(0).children(":first")
        }
        return this.eq(0).find(e || "*").eq(0)
      };
      var idCounter = 1;
      $.fn.identify = function () {
        var e = this.attr("id");
        if (!e && this.length) {
          do {
            e = "anonymous_element_" + idCounter++
          } while ($("#" + e).length);
          this.attr("id", e)
        }
        return e
      };
      $.fn.placeholder = function () {
        if (!("placeholder" in document.createElement("input"))) {
          var e, t;
          this.each(function (i, n) {
            t = n.getAttribute("placeholder");
            if (t && n.nodeName.toLowerCase() === "input") {
              e = $(n).on({
                focus: function (e) {
                  if (n.value === t) {
                    $(n).removeClass("wsite-placeholder");
                    n.value = ""
                  }
                },
                blur: function (e) {
                  if (!n.value.length) {
                    n.value = t;
                    n.className += " wsite-placeholder"
                  }
                }
              });
              n.className += " wsite-placeholder";
              n.value = t
            }
          })
        }
      };
      $.extend({
        isValidSelector: function (e) {
          try {
            var t = $(e)
          }
          catch (e) {
            return false
          }
          return true
        }
      });
      if (!document.observe) {
        document.observe = function (e, t) {
          if (e == "dom:loaded") {
            $(document).ready(t)
          }
        }
      }
      return $
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  },
  173: function (e, t, i) {
    var n, r;
    !(n = [i(5)], r = function (e) {
      var t = e.View.prototype;
      var n = e.View.extend({
        initialize: function (e) {
          t.initialize.apply(this, arguments)
        },
        render: function () {
          if (window.inEditor && window.inEditor()) {
            i(149).request("page:navigate")
          }
        },
        remove: function () {
          t.remove.apply(this, arguments)
        },
        setElement: function () {
          t.setElement.apply(this, arguments)
        },
        delegateEvents: function () {
          t.delegateEvents.apply(this, arguments)
        },
        undelegateEvents: function () {
          t.undelegateEvents.apply(this, arguments)
        }
      });
      return n
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  174: function (e, t, i) {
    var n, r;
    !(n = [i(2), i(3), i(1), i(5), i(90), i(125)], r = function (e, t, i, n, r, o) {
      var s = {
        "w-global": e,
        underscore: t,
        jquery: i,
        backbone: n,
        "util/platform/elements/PlatformElement": r,
        "util/platform/elements/PlatformElementSettings": o
      };
      return function (e, t) {
        var i = e.map(function (e) {
          return s[e]
        });
        t.apply(t, i)
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  204: function (e, t, i) {
    (function (t) {
      e.exports = t["require"] = i(174)
    }).call(t, function () {
      return this
    }())
  },
  206: function (module, exports) {
    (function () {
      var b = void 0,
        f = !0,
        j = null,
        l = !1;

      function m() {
        return function () {}
      }

      function p(e) {
        return function () {
          return this[e]
        }
      }

      function s(e) {
        return function () {
          return e
        }
      }
      var t;
      document.createElement("video");
      document.createElement("audio");
      document.createElement("track");

      function u(e, t, i) {
        if ("string" === typeof e) {
          0 === e.indexOf("#") && (e = e.slice(1));
          if (u.wa[e]) return u.wa[e];
          e = u.v(e)
        }
        if (!e || !e.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return e.player || new u.w(e, t, i)
      }
      var v = u;
      window.Rd = window.Sd = u;
      u.Rb = "4.2";
      u.Dc = "https:" == document.location.protocol ? "https://" : "http://";
      u.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        children: {
          mediaLoader: {},
          posterImage: {},
          textTrackDisplay: {},
          loadingSpinner: {},
          bigPlayButton: {},
          controlBar: {}
        },
        notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
      };
      "GENERATED_CDN_VSN" !== u.Rb && (v.options.flash.swf = u.Dc + "vjs.zencdn.net/" + u.Rb + "/video-js.swf");
      u.wa = {};
      u.ka = u.CoreObject = m();
      u.ka.extend = function (e) {
        var t, i;
        e = e || {};
        t = e.init || e.i || this.prototype.init || this.prototype.i || m();
        i = function () {
          t.apply(this, arguments)
        };
        i.prototype = u.k.create(this.prototype);
        i.prototype.constructor = i;
        i.extend = u.ka.extend;
        i.create = u.ka.create;
        for (var n in e) e.hasOwnProperty(n) && (i.prototype[n] = e[n]);
        return i
      };
      u.ka.create = function () {
        var e = u.k.create(this.prototype);
        this.apply(e, arguments);
        return e
      };
      u.d = function (e, t, i) {
        var n = u.getData(e);
        n.z || (n.z = {});
        n.z[t] || (n.z[t] = []);
        i.s || (i.s = u.s++);
        n.z[t].push(i);
        n.W || (n.disabled = l, n.W = function (t) {
          if (!n.disabled) {
            t = u.hc(t);
            var i = n.z[t.type];
            if (i)
              for (var i = i.slice(0), r = 0, o = i.length; r < o && !t.mc(); r++) i[r].call(e, t)
          }
        });
        1 == n.z[t].length && (document.addEventListener ? e.addEventListener(t, n.W, l) : document.attachEvent && e.attachEvent("on" + t, n.W))
      };
      u.o = function (e, t, i) {
        if (u.lc(e)) {
          var n = u.getData(e);
          if (n.z)
            if (t) {
              var r = n.z[t];
              if (r) {
                if (i) {
                  if (i.s)
                    for (n = 0; n < r.length; n++) r[n].s === i.s && r.splice(n--, 1)
                }
                else n.z[t] = [];
                u.dc(e, t)
              }
            }
          else
            for (r in n.z) t = r, n.z[t] = [], u.dc(e, t)
        }
      };
      u.dc = function (e, t) {
        var i = u.getData(e);
        0 === i.z[t].length && (delete i.z[t], document.removeEventListener ? e.removeEventListener(t, i.W, l) : document.detachEvent && e.detachEvent("on" + t, i.W));
        u.Ab(i.z) && (delete i.z, delete i.W, delete i.disabled);
        u.Ab(i) && u.sc(e)
      };
      u.hc = function (e) {
        function t() {
          return f
        }

        function i() {
          return l
        }
        if (!e || !e.Bb) {
          var n = e || window.event;
          e = {};
          for (var r in n) "layerX" !== r && "layerY" !== r && (e[r] = n[r]);
          e.target || (e.target = e.srcElement || document);
          e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement;
          e.preventDefault = function () {
            n.preventDefault && n.preventDefault();
            e.returnValue = l;
            e.zb = t
          };
          e.zb = i;
          e.stopPropagation = function () {
            n.stopPropagation && n.stopPropagation();
            e.cancelBubble = f;
            e.Bb = t
          };
          e.Bb = i;
          e.stopImmediatePropagation = function () {
            n.stopImmediatePropagation && n.stopImmediatePropagation();
            e.mc = t;
            e.stopPropagation()
          };
          e.mc = i;
          if (e.clientX != j) {
            r = document.documentElement;
            var o = document.body;
            e.pageX = e.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0);
            e.pageY = e.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)
          }
          e.which = e.charCode || e.keyCode;
          e.button != j && (e.button = e.button & 1 ? 0 : e.button & 4 ? 1 : e.button & 2 ? 2 : 0)
        }
        return e
      };
      u.j = function (e, t) {
        var i = u.lc(e) ? u.getData(e) : {},
          n = e.parentNode || e.ownerDocument;
        "string" === typeof t && (t = {
          type: t,
          target: e
        });
        t = u.hc(t);
        i.W && i.W.call(e, t);
        if (n && !t.Bb() && t.bubbles !== l) u.j(n, t);
        else if (!n && !t.zb() && (i = u.getData(t.target), t.target[t.type])) {
          i.disabled = f;
          if ("function" === typeof t.target[t.type]) t.target[t.type]();
          i.disabled = l
        }
        return !t.zb()
      };
      u.U = function (e, t, i) {
        function n() {
          u.o(e, t, n);
          i.apply(this, arguments)
        }
        n.s = i.s = i.s || u.s++;
        u.d(e, t, n)
      };
      var w = Object.prototype.hasOwnProperty;
      u.e = function (e, t) {
        var i, n;
        i = document.createElement(e || "div");
        for (n in t) w.call(t, n) && (-1 !== n.indexOf("aria-") || "role" == n ? i.setAttribute(n, t[n]) : i[n] = t[n]);
        return i
      };
      u.$ = function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      };
      u.k = {};
      u.k.create = Object.create || function (e) {
        function t() {}
        t.prototype = e;
        return new t
      };
      u.k.ta = function (e, t, i) {
        for (var n in e) w.call(e, n) && t.call(i || this, n, e[n])
      };
      u.k.B = function (e, t) {
        if (!t) return e;
        for (var i in t) w.call(t, i) && (e[i] = t[i]);
        return e
      };
      u.k.fc = function (e, t) {
        var i, n, r;
        e = u.k.copy(e);
        for (i in t) w.call(t, i) && (n = e[i], r = t[i], e[i] = u.k.nc(n) && u.k.nc(r) ? u.k.fc(n, r) : t[i]);
        return e
      };
      u.k.copy = function (e) {
        return u.k.B({}, e)
      };
      u.k.nc = function (e) {
        return !!e && "object" === typeof e && "[object Object]" === e.toString() && e.constructor === Object
      };
      u.bind = function (e, t, i) {
        function n() {
          return t.apply(e, arguments)
        }
        t.s || (t.s = u.s++);
        n.s = i ? i + "_" + t.s : t.s;
        return n
      };
      u.qa = {};
      u.s = 1;
      u.expando = "vdata" + (new Date).getTime();
      u.getData = function (e) {
        var t = e[u.expando];
        t || (t = e[u.expando] = u.s++, u.qa[t] = {});
        return u.qa[t]
      };
      u.lc = function (e) {
        e = e[u.expando];
        return !(!e || u.Ab(u.qa[e]))
      };
      u.sc = function (e) {
        var t = e[u.expando];
        if (t) {
          delete u.qa[t];
          try {
            delete e[u.expando]
          }
          catch (t) {
            e.removeAttribute ? e.removeAttribute(u.expando) : e[u.expando] = j
          }
        }
      };
      u.Ab = function (e) {
        for (var t in e)
          if (e[t] !== j) return l;
        return f
      };
      u.n = function (e, t) {
        -1 == (" " + e.className + " ").indexOf(" " + t + " ") && (e.className = "" === e.className ? t : e.className + " " + t)
      };
      u.t = function (e, t) {
        var i, n;
        if (-1 != e.className.indexOf(t)) {
          i = e.className.split(" ");
          for (n = i.length - 1; 0 <= n; n--) i[n] === t && i.splice(n, 1);
          e.className = i.join(" ")
        }
      };
      u.ma = u.e("video");
      u.F = navigator.userAgent;
      u.Jc = /iPhone/i.test(u.F);
      u.Ic = /iPad/i.test(u.F);
      u.Kc = /iPod/i.test(u.F);
      u.Hc = u.Jc || u.Ic || u.Kc;
      var aa = u,
        x;
      var y = u.F.match(/OS (\d+)_/i);
      x = y && y[1] ? y[1] : b;
      aa.Dd = x;
      u.Fc = /Android/i.test(u.F);
      var ba = u,
        z;
      var A = u.F.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
        B, C;
      A ? (B = A[1] && parseFloat(A[1]), C = A[2] && parseFloat(A[2]), z = B && C ? parseFloat(A[1] + "." + A[2]) : B ? B : j) : z = j;
      ba.Ec = z;
      u.Lc = u.Fc && /webkit/i.test(u.F) && 2.3 > u.Ec;
      u.Gc = /Firefox/i.test(u.F);
      u.Ed = /Chrome/i.test(u.F);
      u.Oc = "ontouchstart" in window;
      u.wb = function (e) {
        var t, i, n, r;
        t = {};
        if (e && e.attributes && 0 < e.attributes.length) {
          i = e.attributes;
          for (var o = i.length - 1; 0 <= o; o--) {
            n = i[o].name;
            r = i[o].value;
            if ("boolean" === typeof e[n] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + n + ",")) r = r !== j ? f : l;
            t[n] = r
          }
        }
        return t
      };
      u.Id = function (e, t) {
        var i = "";
        document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(e, "").getPropertyValue(t) : e.currentStyle && (i = e["client" + t.substr(0, 1).toUpperCase() + t.substr(1)] + "px");
        return i
      };
      u.yb = function (e, t) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
      };
      u.Nb = {};
      u.v = function (e) {
        0 === e.indexOf("#") && (e = e.slice(1));
        return document.getElementById(e)
      };
      u.Ka = function (e, t) {
        t = t || e;
        var i = Math.floor(e % 60),
          n = Math.floor(e / 60 % 60),
          r = Math.floor(e / 3600),
          o = Math.floor(t / 60 % 60),
          s = Math.floor(t / 3600);
        if (isNaN(e) || Infinity === e) r = n = i = "-";
        r = 0 < r || 0 < s ? r + ":" : "";
        return r + (((r || 10 <= o) && 10 > n ? "0" + n : n) + ":") + (10 > i ? "0" + i : i)
      };
      u.Rc = function () {
        document.body.focus();
        document.onselectstart = s(l)
      };
      u.zd = function () {
        document.onselectstart = s(f)
      };
      u.trim = function (e) {
        return (e + "").replace(/^\s+|\s+$/g, "")
      };
      u.round = function (e, t) {
        t || (t = 0);
        return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
      };
      u.sb = function (e, t) {
        return {
          length: 1,
          start: function () {
            return e
          },
          end: function () {
            return t
          }
        }
      };
      u.get = function (e, t, i) {
        var n, r;
        "undefined" === typeof XMLHttpRequest && (window.XMLHttpRequest = function () {
          try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
          }
          catch (e) {}
          try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
          }
          catch (e) {}
          try {
            return new window.ActiveXObject("Msxml2.XMLHTTP")
          }
          catch (e) {}
          throw Error("This browser does not support XMLHttpRequest.")
        });
        r = new XMLHttpRequest;
        try {
          r.open("GET", e)
        }
        catch (e) {
          i(e)
        }
        n = 0 === e.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === e.indexOf("http");
        r.onreadystatechange = function () {
          4 === r.readyState && (200 === r.status || n && 0 === r.status ? t(r.responseText) : i && i())
        };
        try {
          r.send()
        }
        catch (e) {
          i && i(e)
        }
      };
      u.rd = function (e) {
        try {
          var t = window.localStorage || l;
          t && (t.volume = e)
        }
        catch (e) {
          22 == e.code || 1014 == e.code ? u.log("LocalStorage Full (VideoJS)", e) : 18 == e.code ? u.log("LocalStorage not allowed (VideoJS)", e) : u.log("LocalStorage Error (VideoJS)", e)
        }
      };
      u.jc = function (e) {
        e.match(/^https?:\/\//) || (e = u.e("div", {
          innerHTML: '<a href="' + e + '">x</a>'
        }).firstChild.href);
        return e
      };
      u.log = function () {
        u.log.history = u.log.history || [];
        u.log.history.push(arguments);
        window.console && window.console.log(Array.prototype.slice.call(arguments))
      };
      u.Zc = function (e) {
        var t, i;
        e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect());
        if (!t) return {
          left: 0,
          top: 0
        };
        e = document.documentElement;
        i = document.body;
        return {
          left: t.left + (window.pageXOffset || i.scrollLeft) - (e.clientLeft || i.clientLeft || 0),
          top: t.top + (window.pageYOffset || i.scrollTop) - (e.clientTop || i.clientTop || 0)
        }
      };
      u.c = u.ka.extend({
        i: function (e, t, i) {
          this.b = e;
          this.g = u.k.copy(this.g);
          t = this.options(t);
          this.Q = t.id || (t.el && t.el.id ? t.el.id : e.id() + "_component_" + u.s++);
          this.ed = t.name || j;
          this.a = t.el || this.e();
          this.G = [];
          this.pb = {};
          this.V = {};
          if ((e = this.g) && e.children) {
            var n = this;
            u.k.ta(e.children, function (e, t) {
              t !== l && !t.loadEvent && (n[e] = n.Z(e, t))
            })
          }
          this.L(i)
        }
      });
      t = u.c.prototype;
      t.D = function () {
        this.j("dispose");
        if (this.G)
          for (var e = this.G.length - 1; 0 <= e; e--) this.G[e].D && this.G[e].D();
        this.V = this.pb = this.G = j;
        this.o();
        this.a.parentNode && this.a.parentNode.removeChild(this.a);
        u.sc(this.a);
        this.a = j
      };
      t.K = p("b");
      t.options = function (e) {
        return e === b ? this.g : this.g = u.k.fc(this.g, e)
      };
      t.e = function (e, t) {
        return u.e(e, t)
      };
      t.v = p("a");
      t.id = p("Q");
      t.name = p("ed");
      t.children = p("G");
      t.Z = function (e, t) {
        var i, n;
        "string" === typeof e ? (n = e, t = t || {}, i = t.componentClass || u.$(n), t.name = n, i = new window.videojs[i](this.b || this, t)) : i = e;
        this.G.push(i);
        "function" === typeof i.id && (this.pb[i.id()] = i);
        (n = n || i.name && i.name()) && (this.V[n] = i);
        "function" === typeof i.el && i.el() && (this.ra || this.a).appendChild(i.el());
        return i
      };
      t.removeChild = function (e) {
        "string" === typeof e && (e = this.V[e]);
        if (e && this.G) {
          for (var t = l, i = this.G.length - 1; 0 <= i; i--)
            if (this.G[i] === e) {
              t = f;
              this.G.splice(i, 1);
              break
            }
          t && (this.pb[e.id] = j, this.V[e.name] = j, (t = e.v()) && t.parentNode === (this.ra || this.a) && (this.ra || this.a).removeChild(e.v()))
        }
      };
      t.T = s("");
      t.d = function (e, t) {
        u.d(this.a, e, u.bind(this, t));
        return this
      };
      t.o = function (e, t) {
        u.o(this.a, e, t);
        return this
      };
      t.U = function (e, t) {
        u.U(this.a, e, u.bind(this, t));
        return this
      };
      t.j = function (e, t) {
        u.j(this.a, e, t);
        return this
      };
      t.L = function (e) {
        e && (this.aa ? e.call(this) : (this.Ra === b && (this.Ra = []), this.Ra.push(e)));
        return this
      };
      t.Ta = function () {
        this.aa = f;
        var e = this.Ra;
        if (e && 0 < e.length) {
          for (var t = 0, i = e.length; t < i; t++) e[t].call(this);
          this.Ra = [];
          this.j("ready")
        }
      };
      t.n = function (e) {
        u.n(this.a, e);
        return this
      };
      t.t = function (e) {
        u.t(this.a, e);
        return this
      };
      t.show = function () {
        this.a.style.display = "block";
        return this
      };
      t.C = function () {
        this.a.style.display = "none";
        return this
      };

      function D(e) {
        e.t("vjs-lock-showing")
      }
      t.disable = function () {
        this.C();
        this.show = m()
      };
      t.width = function (e, t) {
        return E(this, "width", e, t)
      };
      t.height = function (e, t) {
        return E(this, "height", e, t)
      };
      t.Vc = function (e, t) {
        return this.width(e, f).height(t)
      };

      function E(e, t, i, n) {
        if (i !== b) return e.a.style[t] = -1 !== ("" + i).indexOf("%") || -1 !== ("" + i).indexOf("px") ? i : "auto" === i ? "" : i + "px", n || e.j("resize"), e;
        if (!e.a) return 0;
        i = e.a.style[t];
        n = i.indexOf("px");
        return -1 !== n ? parseInt(i.slice(0, n), 10) : parseInt(e.a["offset" + u.$(t)], 10)
      }
      u.q = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t);
          var i = l;
          this.d("touchstart", function (e) {
            e.preventDefault();
            i = f
          });
          this.d("touchmove", function () {
            i = l
          });
          var n = this;
          this.d("touchend", function (e) {
            i && n.p(e);
            e.preventDefault()
          });
          this.d("click", this.p);
          this.d("focus", this.Na);
          this.d("blur", this.Ma)
        }
      });
      t = u.q.prototype;
      t.e = function (e, t) {
        t = u.k.B({
          className: this.T(),
          innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.pa || "Need Text") + "</span></div>",
          od: "button",
          "aria-live": "polite",
          tabIndex: 0
        }, t);
        return u.c.prototype.e.call(this, e, t)
      };
      t.T = function () {
        return "vjs-control " + u.c.prototype.T.call(this)
      };
      t.p = m();
      t.Na = function () {
        u.d(document, "keyup", u.bind(this, this.ba))
      };
      t.ba = function (e) {
        if (32 == e.which || 13 == e.which) e.preventDefault(), this.p()
      };
      t.Ma = function () {
        u.o(document, "keyup", u.bind(this, this.ba))
      };
      u.O = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t);
          this.Qc = this.V[this.g.barName];
          this.handle = this.V[this.g.handleName];
          e.d(this.qc, u.bind(this, this.update));
          this.d("mousedown", this.Oa);
          this.d("touchstart", this.Oa);
          this.d("focus", this.Na);
          this.d("blur", this.Ma);
          this.d("click", this.p);
          this.b.d("controlsvisible", u.bind(this, this.update));
          e.L(u.bind(this, this.update));
          this.P = {}
        }
      });
      t = u.O.prototype;
      t.e = function (e, t) {
        t = t || {};
        t.className += " vjs-slider";
        t = u.k.B({
          od: "slider",
          "aria-valuenow": 0,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          tabIndex: 0
        }, t);
        return u.c.prototype.e.call(this, e, t)
      };
      t.Oa = function (e) {
        e.preventDefault();
        u.Rc();
        this.P.move = u.bind(this, this.Gb);
        this.P.end = u.bind(this, this.Hb);
        u.d(document, "mousemove", this.P.move);
        u.d(document, "mouseup", this.P.end);
        u.d(document, "touchmove", this.P.move);
        u.d(document, "touchend", this.P.end);
        this.Gb(e)
      };
      t.Hb = function () {
        u.zd();
        u.o(document, "mousemove", this.P.move, l);
        u.o(document, "mouseup", this.P.end, l);
        u.o(document, "touchmove", this.P.move, l);
        u.o(document, "touchend", this.P.end, l);
        this.update()
      };
      t.update = function () {
        if (this.a) {
          var e, t = this.xb(),
            i = this.handle,
            n = this.Qc;
          isNaN(t) && (t = 0);
          e = t;
          if (i) {
            e = this.a.offsetWidth;
            var r = i.v().offsetWidth;
            e = r ? r / e : 0;
            t *= 1 - e;
            e = t + e / 2;
            i.v().style.left = u.round(100 * t, 2) + "%"
          }
          n.v().style.width = u.round(100 * e, 2) + "%"
        }
      };

      function F(e, t) {
        var i, n, r, o;
        i = e.a;
        n = u.Zc(i);
        o = r = i.offsetWidth;
        i = e.handle;
        if (e.g.Ad) return o = n.top, n = t.changedTouches ? t.changedTouches[0].pageY : t.pageY, i && (i = i.v().offsetHeight, o += i / 2, r -= i), Math.max(0, Math.min(1, (o - n + r) / r));
        r = n.left;
        n = t.changedTouches ? t.changedTouches[0].pageX : t.pageX;
        i && (i = i.v().offsetWidth, r += i / 2, o -= i);
        return Math.max(0, Math.min(1, (n - r) / o))
      }
      t.Na = function () {
        u.d(document, "keyup", u.bind(this, this.ba))
      };
      t.ba = function (e) {
        37 == e.which ? (e.preventDefault(),
          this.wc()) : 39 == e.which && (e.preventDefault(), this.xc())
      };
      t.Ma = function () {
        u.o(document, "keyup", u.bind(this, this.ba))
      };
      t.p = function (e) {
        e.stopImmediatePropagation();
        e.preventDefault()
      };
      u.ea = u.c.extend();
      u.ea.prototype.defaultValue = 0;
      u.ea.prototype.e = function (e, t) {
        t = t || {};
        t.className += " vjs-slider-handle";
        t = u.k.B({
          innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        }, t);
        return u.c.prototype.e.call(this, "div", t)
      };
      u.la = u.c.extend();

      function ca(e, t) {
        e.Z(t);
        t.d("click", u.bind(e, function () {
          D(this)
        }))
      }
      u.la.prototype.e = function () {
        var e = this.options().Tc || "ul";
        this.ra = u.e(e, {
          className: "vjs-menu-content"
        });
        e = u.c.prototype.e.call(this, "div", {
          append: this.ra,
          className: "vjs-menu"
        });
        e.appendChild(this.ra);
        u.d(e, "click", function (e) {
          e.preventDefault();
          e.stopImmediatePropagation()
        });
        return e
      };
      u.N = u.q.extend({
        i: function (e, t) {
          u.q.call(this, e, t);
          this.selected(t.selected)
        }
      });
      u.N.prototype.e = function (e, t) {
        return u.q.prototype.e.call(this, "li", u.k.B({
          className: "vjs-menu-item",
          innerHTML: this.g.label
        }, t))
      };
      u.N.prototype.p = function () {
        this.selected(f)
      };
      u.N.prototype.selected = function (e) {
        e ? (this.n("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.t("vjs-selected"), this.a.setAttribute("aria-selected", l))
      };
      u.R = u.q.extend({
        i: function (e, t) {
          u.q.call(this, e, t);
          this.va = this.Ja();
          this.Z(this.va);
          this.I && 0 === this.I.length && this.C();
          this.d("keyup", this.ba);
          this.a.setAttribute("aria-haspopup", f);
          this.a.setAttribute("role", "button")
        }
      });
      t = u.R.prototype;
      t.oa = l;
      t.Ja = function () {
        var e = new u.la(this.b);
        this.options().title && e.v().appendChild(u.e("li", {
          className: "vjs-menu-title",
          innerHTML: u.$(this.A),
          xd: -1
        }));
        if (this.I = this.createItems())
          for (var t = 0; t < this.I.length; t++) ca(e, this.I[t]);
        return e
      };
      t.sa = m();
      t.T = function () {
        return this.className + " vjs-menu-button " + u.q.prototype.T.call(this)
      };
      t.Na = m();
      t.Ma = m();
      t.p = function () {
        this.U("mouseout", u.bind(this, function () {
          D(this.va);
          this.a.blur()
        }));
        this.oa ? G(this) : H(this)
      };
      t.ba = function (e) {
        e.preventDefault();
        32 == e.which || 13 == e.which ? this.oa ? G(this) : H(this) : 27 == e.which && this.oa && G(this)
      };

      function H(e) {
        e.oa = f;
        e.va.n("vjs-lock-showing");
        e.a.setAttribute("aria-pressed", f);
        e.I && 0 < e.I.length && e.I[0].v().focus()
      }

      function G(e) {
        e.oa = l;
        D(e.va);
        e.a.setAttribute("aria-pressed", l)
      }
      u.w = u.c.extend({
        i: function (e, t, i) {
          this.M = e;
          t = u.k.B(da(e), t);
          this.u = {};
          this.rc = t.poster;
          this.rb = t.controls;
          e.controls = l;
          u.c.call(this, this, t, i);
          this.controls() ? this.n("vjs-controls-enabled") : this.n("vjs-controls-disabled");
          this.U("play", function (e) {
            u.j(this.a, {
              type: "firstplay",
              target: this.a
            }) || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation())
          });
          this.d("ended", this.fd);
          this.d("play", this.Jb);
          this.d("firstplay", this.gd);
          this.d("pause", this.Ib);
          this.d("progress", this.jd);
          this.d("durationchange", this.pc);
          this.d("error", this.Fb);
          this.d("fullscreenchange", this.hd);
          u.wa[this.Q] = this;
          t.plugins && u.k.ta(t.plugins, function (e, t) {
            this[e](t)
          }, this);
          var n, r, o, s;
          n = this.tc;
          e = function () {
            n();
            clearInterval(r);
            r = setInterval(u.bind(this, n), 250)
          };
          t = function () {
            n();
            clearInterval(r)
          };
          this.d("mousedown", e);
          this.d("mousemove", n);
          this.d("mouseup", t);
          this.d("keydown", n);
          this.d("keyup", n);
          this.d("touchstart", e);
          this.d("touchmove", n);
          this.d("touchend", t);
          this.d("touchcancel", t);
          o = setInterval(u.bind(this, function () {
            this.ja && (this.ja = l, I(this, f), clearTimeout(s), s = setTimeout(u.bind(this, function () {
              this.ja || I(this, l)
            }), 2e3))
          }), 250);
          this.d("dispose", function () {
            clearInterval(o);
            clearTimeout(s)
          })
        }
      });
      t = u.w.prototype;
      t.g = u.options;
      t.D = function () {
        this.j("dispose");
        this.o("dispose");
        u.wa[this.Q] = j;
        this.M && this.M.player && (this.M.player = j);
        this.a && this.a.player && (this.a.player = j);
        clearInterval(this.Qa);
        this.ya();
        this.h && this.h.D();
        u.c.prototype.D.call(this)
      };

      function da(e) {
        var t = {
          sources: [],
          tracks: []
        };
        u.k.B(t, u.wb(e));
        if (e.hasChildNodes()) {
          var i, n, r, o;
          e = e.childNodes;
          r = 0;
          for (o = e.length; r < o; r++) i = e[r], n = i.nodeName.toLowerCase(), "source" === n ? t.sources.push(u.wb(i)) : "track" === n && t.tracks.push(u.wb(i))
        }
        return t
      }
      t.e = function () {
        var e = this.a = u.c.prototype.e.call(this, "div"),
          t = this.M;
        t.removeAttribute("width");
        t.removeAttribute("height");
        if (t.hasChildNodes()) {
          var i, n, r, o, s;
          i = t.childNodes;
          n = i.length;
          for (s = []; n--;) r = i[n], o = r.nodeName.toLowerCase(), "track" === o && s.push(r);
          for (i = 0; i < s.length; i++) t.removeChild(s[i])
        }
        t.id = t.id || "vjs_video_" + u.s++;
        e.id = t.id;
        e.className = t.className;
        t.id += "_html5_api";
        t.className = "vjs-tech";
        t.player = e.player = this;
        this.n("vjs-paused");
        this.width(this.g.width, f);
        this.height(this.g.height, f);
        t.parentNode && t.parentNode.insertBefore(e, t);
        u.yb(t, e);
        return e
      };

      function J(e, t, i) {
        e.h ? (e.aa = l, e.h.D(), e.Db && (e.Db = l, clearInterval(e.Qa)), e.Eb && K(e), e.h = l) : "Html5" !== t && e.M && (u.l.gc(e.M), e.M = j);
        e.ia = t;
        e.aa = l;
        var n = u.k.B({
          source: i,
          parentEl: e.a
        }, e.g[t.toLowerCase()]);
        i && (i.src == e.u.src && 0 < e.u.currentTime && (n.startTime = e.u.currentTime), e.u.src = i.src);
        e.h = new window.videojs[t](e, n);
        e.h.L(function () {
          this.b.Ta();
          if (!this.m.progressEvents) {
            var e = this.b;
            e.Db = f;
            e.Qa = setInterval(u.bind(e, function () {
              this.u.kb < this.buffered().end(0) ? this.j("progress") : 1 == this.Ia() && (clearInterval(this.Qa), this.j("progress"))
            }), 500);
            e.h.U("progress", function () {
              this.m.progressEvents = f;
              var e = this.b;
              e.Db = l;
              clearInterval(e.Qa)
            })
          }
          this.m.timeupdateEvents || (e = this.b, e.Eb = f, e.d("play", e.Ac), e.d("pause", e.ya), e.h.U("timeupdate", function () {
            this.m.timeupdateEvents = f;
            K(this.b)
          }))
        })
      }

      function K(e) {
        e.Eb = l;
        e.ya();
        e.o("play", e.Ac);
        e.o("pause", e.ya)
      }
      t.Ac = function () {
        this.ec && this.ya();
        this.ec = setInterval(u.bind(this, function () {
          this.j("timeupdate")
        }), 250)
      };
      t.ya = function () {
        clearInterval(this.ec)
      };
      t.fd = function () {
        this.g.loop && (this.currentTime(0), this.play())
      };
      t.Jb = function () {
        u.t(this.a, "vjs-paused");
        u.n(this.a, "vjs-playing")
      };
      t.gd = function () {
        this.g.starttime && this.currentTime(this.g.starttime);
        this.n("vjs-has-started")
      };
      t.Ib = function () {
        u.t(this.a, "vjs-playing");
        u.n(this.a, "vjs-paused")
      };
      t.jd = function () {
        1 == this.Ia() && this.j("loadedalldata")
      };
      t.pc = function () {
        this.duration(L(this, "duration"))
      };
      t.Fb = function (e) {
        u.log("Video Error", e)
      };
      t.hd = function () {
        this.H ? this.n("vjs-fullscreen") : this.t("vjs-fullscreen")
      };

      function M(e, t, i) {
        if (e.h && !e.h.aa) e.h.L(function () {
          this[t](i)
        });
        else try {
          e.h[t](i)
        }
        catch (e) {
          throw u.log(e), e
        }
      }

      function L(e, t) {
        if (e.h && e.h.aa) try {
          return e.h[t]()
        }
        catch (i) {
          throw e.h[t] === b ? u.log("Video.js: " + t + " method not defined for " + e.ia + " playback technology.", i) : "TypeError" == i.name ? (u.log("Video.js: " + t + " unavailable on " + e.ia + " playback technology element.", i), e.h.aa = l) : u.log(i), i
        }
      }
      t.play = function () {
        M(this, "play");
        return this
      };
      t.pause = function () {
        M(this, "pause");
        return this
      };
      t.paused = function () {
        return L(this, "paused") === l ? l : f
      };
      t.currentTime = function (e) {
        return e !== b ? (this.u.oc = e, M(this, "setCurrentTime", e), this.Eb && this.j("timeupdate"), this) : this.u.currentTime = L(this, "currentTime") || 0
      };
      t.duration = function (e) {
        if (e !== b) return this.u.duration = parseFloat(e), this;
        this.u.duration === b && this.pc();
        return this.u.duration
      };
      t.buffered = function () {
        var e = L(this, "buffered"),
          t = e.length - 1,
          i = this.u.kb = this.u.kb || 0;
        e && (0 <= t && e.end(t) !== i) && (i = e.end(t), this.u.kb = i);
        return u.sb(0, i)
      };
      t.Ia = function () {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
      };
      t.volume = function (e) {
        if (e !== b) return e = Math.max(0, Math.min(1, parseFloat(e))), this.u.volume = e, M(this, "setVolume", e), u.rd(e), this;
        e = parseFloat(L(this, "volume"));
        return isNaN(e) ? 1 : e
      };
      t.muted = function (e) {
        return e !== b ? (M(this, "setMuted", e), this) : L(this, "muted") || l
      };
      t.Sa = function () {
        return L(this, "supportsFullScreen") || l
      };
      t.xa = function () {
        var e = u.Nb.xa;
        this.H = f;
        e ? (u.d(document, e.ub, u.bind(this, function (t) {
          this.H = document[e.H];
          this.H === l && u.o(document, e.ub, arguments.callee);
          this.j("fullscreenchange")
        })), this.a[e.uc]()) : this.h.Sa() ? M(this, "enterFullScreen") : (this.ad = f, this.Wc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.ic)), document.documentElement.style.overflow = "hidden", u.n(document.body, "vjs-full-window"), this.j("enterFullWindow"), this.j("fullscreenchange"));
        return this
      };
      t.nb = function () {
        var e = u.Nb.xa;
        this.H = l;
        if (e) document[e.mb]();
        else this.h.Sa() ? M(this, "exitFullScreen") : (N(this), this.j("fullscreenchange"));
        return this
      };
      t.ic = function (e) {
        27 === e.keyCode && (this.H === f ? this.nb() : N(this))
      };

      function N(e) {
        e.ad = l;
        u.o(document, "keydown", e.ic);
        document.documentElement.style.overflow = e.Wc;
        u.t(document.body, "vjs-full-window");
        e.j("exitFullWindow")
      }
      t.src = function (e) {
        if (e instanceof Array) {
          var t;
          e: {
            t = e;
            for (var i = 0, n = this.g.techOrder; i < n.length; i++) {
              var r = u.$(n[i]),
                o = window.videojs[r];
              if (o.isSupported())
                for (var s = 0, a = t; s < a.length; s++) {
                  var c = a[s];
                  if (o.canPlaySource(c)) {
                    t = {
                      source: c,
                      h: r
                    };
                    break e
                  }
                }
            }
            t = l
          }
          t ? (e = t.source, t = t.h, t == this.ia ? this.src(e) : J(this, t, e)) : this.a.appendChild(u.e("p", {
            innerHTML: this.options().notSupportedMessage
          }))
        }
        else e instanceof Object ? window.videojs[this.ia].canPlaySource(e) ? this.src(e.src) : this.src([e]) : (this.u.src = e, this.aa ? (M(this, "src", e), "auto" == this.g.preload && this.load(), this.g.autoplay && this.play()) : this.L(function () {
          this.src(e)
        }));
        return this
      };
      t.load = function () {
        M(this, "load");
        return this
      };
      t.currentSrc = function () {
        return L(this, "currentSrc") || this.u.src || ""
      };
      t.Pa = function (e) {
        return e !== b ? (M(this, "setPreload", e), this.g.preload = e, this) : L(this, "preload")
      };
      t.autoplay = function (e) {
        return e !== b ? (M(this, "setAutoplay", e), this.g.autoplay = e, this) : L(this, "autoplay")
      };
      t.loop = function (e) {
        return e !== b ? (M(this, "setLoop", e), this.g.loop = e, this) : L(this, "loop")
      };
      t.poster = function (e) {
        e !== b && (this.rc = e);
        return this.rc
      };
      t.controls = function (e) {
        return e !== b ? (e = !!e, this.rb !== e && ((this.rb = e) ? (this.t("vjs-controls-disabled"), this.n("vjs-controls-enabled"), this.j("controlsenabled")) : (this.t("vjs-controls-enabled"), this.n("vjs-controls-disabled"), this.j("controlsdisabled"))), this) : this.rb
      };
      u.w.prototype.Qb;
      t = u.w.prototype;
      t.Pb = function (e) {
        return e !== b ? (e = !!e, this.Qb !== e && ((this.Qb = e) ? (this.n("vjs-using-native-controls"), this.j("usingnativecontrols")) : (this.t("vjs-using-native-controls"), this.j("usingcustomcontrols"))), this) : this.Qb
      };
      t.error = function () {
        return L(this, "error")
      };
      t.seeking = function () {
        return L(this, "seeking")
      };
      t.ja = f;
      t.tc = function () {
        this.ja = f
      };
      t.Ob = f;

      function I(e, t) {
        return t !== b ? (t = !!t, t !== e.Ob && ((e.Ob = t) ? (e.ja = f, e.t("vjs-user-inactive"), e.n("vjs-user-active"), e.j("useractive")) : (e.ja = l, e.h.U("mousemove", function (e) {
          e.stopPropagation();
          e.preventDefault()
        }), e.t("vjs-user-active"), e.n("vjs-user-inactive"), e.j("userinactive"))), e) : e.Ob
      }
      var O, P, Q;
      Q = document.createElement("div");
      P = {};
      Q.Fd !== b ? (P.uc = "requestFullscreen", P.mb = "exitFullscreen", P.ub = "fullscreenchange", P.H = "fullScreen") : (document.mozCancelFullScreen ? (O = "moz", P.H = O + "FullScreen") : (O = "webkit", P.H = O + "IsFullScreen"), Q[O + "RequestFullScreen"] && (P.uc = O + "RequestFullScreen", P.mb = O + "CancelFullScreen"), P.ub = O + "fullscreenchange");
      document[P.mb] && (u.Nb.xa = P);
      u.Ea = u.c.extend();
      u.Ea.prototype.g = {
        Kd: "play",
        children: {
          playToggle: {},
          currentTimeDisplay: {},
          timeDivider: {},
          durationDisplay: {},
          remainingTimeDisplay: {},
          progressControl: {},
          fullscreenToggle: {},
          volumeControl: {},
          muteToggle: {}
        }
      };
      u.Ea.prototype.e = function () {
        return u.e("div", {
          className: "vjs-control-bar"
        })
      };
      u.Wb = u.q.extend({
        i: function (e, t) {
          u.q.call(this, e, t);
          e.d("play", u.bind(this, this.Jb));
          e.d("pause", u.bind(this, this.Ib))
        }
      });
      t = u.Wb.prototype;
      t.pa = "Play";
      t.T = function () {
        return "vjs-play-control " + u.q.prototype.T.call(this)
      };
      t.p = function () {
        this.b.paused() ? this.b.play() : this.b.pause()
      };
      t.Jb = function () {
        u.t(this.a, "vjs-paused");
        u.n(this.a, "vjs-playing");
        this.a.children[0].children[0].innerHTML = "Pause"
      };
      t.Ib = function () {
        u.t(this.a, "vjs-playing");
        u.n(this.a, "vjs-paused");
        this.a.children[0].children[0].innerHTML = "Play"
      };
      u.Xa = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t);
          e.d("timeupdate", u.bind(this, this.Ba))
        }
      });
      u.Xa.prototype.e = function () {
        var e = u.c.prototype.e.call(this, "div", {
          className: "vjs-current-time vjs-time-controls vjs-control"
        });
        this.content = u.e("div", {
          className: "vjs-current-time-display",
          innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
          "aria-live": "off"
        });
        e.appendChild(u.e("div").appendChild(this.content));
        return e
      };
      u.Xa.prototype.Ba = function () {
        var e = this.b.Lb ? this.b.u.currentTime : this.b.currentTime();
        this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.Ka(e, this.b.duration())
      };
      u.Ya = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t);
          e.d("timeupdate", u.bind(this, this.Ba))
        }
      });
      u.Ya.prototype.e = function () {
        var e = u.c.prototype.e.call(this, "div", {
          className: "vjs-duration vjs-time-controls vjs-control"
        });
        this.content = u.e("div", {
          className: "vjs-duration-display",
          innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
          "aria-live": "off"
        });
        e.appendChild(u.e("div").appendChild(this.content));
        return e
      };
      u.Ya.prototype.Ba = function () {
        var e = this.b.duration();
        e && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.Ka(e))
      };
      u.$b = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t)
        }
      });
      u.$b.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
          className: "vjs-time-divider",
          innerHTML: "<div><span>/</span></div>"
        })
      };
      u.eb = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t);
          e.d("timeupdate", u.bind(this, this.Ba))
        }
      });
      u.eb.prototype.e = function () {
        var e = u.c.prototype.e.call(this, "div", {
          className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        this.content = u.e("div", {
          className: "vjs-remaining-time-display",
          innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
          "aria-live": "off"
        });
        e.appendChild(u.e("div").appendChild(this.content));
        return e
      };
      u.eb.prototype.Ba = function () {
        this.b.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.Ka(this.b.duration() - this.b.currentTime()))
      };
      u.Fa = u.q.extend({
        i: function (e, t) {
          u.q.call(this, e, t)
        }
      });
      u.Fa.prototype.pa = "Fullscreen";
      u.Fa.prototype.T = function () {
        return "vjs-fullscreen-control " + u.q.prototype.T.call(this)
      };
      u.Fa.prototype.p = function () {
        this.b.H ? (this.b.nb(), this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.b.xa(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
      };
      u.cb = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t)
        }
      });
      u.cb.prototype.g = {
        children: {
          seekBar: {}
        }
      };
      u.cb.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
          className: "vjs-progress-control vjs-control"
        })
      };
      u.Xb = u.O.extend({
        i: function (e, t) {
          u.O.call(this, e, t);
          e.d("timeupdate", u.bind(this, this.Aa));
          e.L(u.bind(this, this.Aa))
        }
      });
      t = u.Xb.prototype;
      t.g = {
        children: {
          loadProgressBar: {},
          playProgressBar: {},
          seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
      };
      t.qc = "timeupdate";
      t.e = function () {
        return u.O.prototype.e.call(this, "div", {
          className: "vjs-progress-holder",
          "aria-label": "video progress bar"
        })
      };
      t.Aa = function () {
        var e = this.b.Lb ? this.b.u.currentTime : this.b.currentTime();
        this.a.setAttribute("aria-valuenow", u.round(100 * this.xb(), 2));
        this.a.setAttribute("aria-valuetext", u.Ka(e, this.b.duration()))
      };
      t.xb = function () {
        var e;
        "Flash" === this.b.ia && this.b.seeking() ? (e = this.b.u, e = e.oc ? e.oc : this.b.currentTime()) : e = this.b.currentTime();
        return e / this.b.duration()
      };
      t.Oa = function (e) {
        u.O.prototype.Oa.call(this, e);
        this.b.Lb = f;
        this.Bd = !this.b.paused();
        this.b.pause()
      };
      t.Gb = function (e) {
        e = F(this, e) * this.b.duration();
        e == this.b.duration() && (e -= .1);
        this.b.currentTime(e)
      };
      t.Hb = function (e) {
        u.O.prototype.Hb.call(this, e);
        this.b.Lb = l;
        this.Bd && this.b.play()
      };
      t.xc = function () {
        this.b.currentTime(this.b.currentTime() + 5)
      };
      t.wc = function () {
        this.b.currentTime(this.b.currentTime() - 5)
      };
      u.$a = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t);
          e.d("progress", u.bind(this, this.update))
        }
      });
      u.$a.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
          className: "vjs-load-progress",
          innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
        })
      };
      u.$a.prototype.update = function () {
        this.a.style && (this.a.style.width = u.round(100 * this.b.Ia(), 2) + "%")
      };
      u.Vb = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t)
        }
      });
      u.Vb.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
          className: "vjs-play-progress",
          innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
        })
      };
      u.fb = u.ea.extend();
      u.fb.prototype.defaultValue = "00:00";
      u.fb.prototype.e = function () {
        return u.ea.prototype.e.call(this, "div", {
          className: "vjs-seek-handle"
        })
      };
      u.hb = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t);
          e.h && (e.h.m && e.h.m.volumeControl === l) && this.n("vjs-hidden");
          e.d("loadstart", u.bind(this, function () {
            e.h.m && e.h.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
          }))
        }
      });
      u.hb.prototype.g = {
        children: {
          volumeBar: {}
        }
      };
      u.hb.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
          className: "vjs-volume-control vjs-control"
        })
      };
      u.gb = u.O.extend({
        i: function (e, t) {
          u.O.call(this, e, t);
          e.d("volumechange", u.bind(this, this.Aa));
          e.L(u.bind(this, this.Aa));
          setTimeout(u.bind(this, this.update), 0)
        }
      });
      t = u.gb.prototype;
      t.Aa = function () {
        this.a.setAttribute("aria-valuenow", u.round(100 * this.b.volume(), 2));
        this.a.setAttribute("aria-valuetext", u.round(100 * this.b.volume(), 2) + "%")
      };
      t.g = {
        children: {
          volumeLevel: {},
          volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
      };
      t.qc = "volumechange";
      t.e = function () {
        return u.O.prototype.e.call(this, "div", {
          className: "vjs-volume-bar",
          "aria-label": "volume level"
        })
      };
      t.Gb = function (e) {
        this.b.volume(F(this, e))
      };
      t.xb = function () {
        return this.b.muted() ? 0 : this.b.volume()
      };
      t.xc = function () {
        this.b.volume(this.b.volume() + .1)
      };
      t.wc = function () {
        this.b.volume(this.b.volume() - .1)
      };
      u.ac = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t)
        }
      });
      u.ac.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
          className: "vjs-volume-level",
          innerHTML: '<span class="vjs-control-text"></span>'
        })
      };
      u.ib = u.ea.extend();
      u.ib.prototype.defaultValue = "00:00";
      u.ib.prototype.e = function () {
        return u.ea.prototype.e.call(this, "div", {
          className: "vjs-volume-handle"
        })
      };
      u.da = u.q.extend({
        i: function (e, t) {
          u.q.call(this, e, t);
          e.d("volumechange", u.bind(this, this.update));
          e.h && (e.h.m && e.h.m.volumeControl === l) && this.n("vjs-hidden");
          e.d("loadstart", u.bind(this, function () {
            e.h.m && e.h.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
          }))
        }
      });
      u.da.prototype.e = function () {
        return u.q.prototype.e.call(this, "div", {
          className: "vjs-mute-control vjs-control",
          innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
      };
      u.da.prototype.p = function () {
        this.b.muted(this.b.muted() ? l : f)
      };
      u.da.prototype.update = function () {
        var e = this.b.volume(),
          t = 3;
        0 === e || this.b.muted() ? t = 0 : .33 > e ? t = 1 : .67 > e && (t = 2);
        this.b.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute");
        for (e = 0; 4 > e; e++) u.t(this.a, "vjs-vol-" + e);
        u.n(this.a, "vjs-vol-" + t)
      };
      u.na = u.R.extend({
        i: function (e, t) {
          u.R.call(this, e, t);
          e.d("volumechange", u.bind(this, this.update));
          e.h && (e.h.m && e.h.m.Bc === l) && this.n("vjs-hidden");
          e.d("loadstart", u.bind(this, function () {
            e.h.m && e.h.m.Bc === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
          }));
          this.n("vjs-menu-button")
        }
      });
      u.na.prototype.Ja = function () {
        var e = new u.la(this.b, {
            Tc: "div"
          }),
          t = new u.gb(this.b, u.k.B({
            Ad: f
          }, this.g.Td));
        e.Z(t);
        return e
      };
      u.na.prototype.p = function () {
        u.da.prototype.p.call(this);
        u.R.prototype.p.call(this)
      };
      u.na.prototype.e = function () {
        return u.q.prototype.e.call(this, "div", {
          className: "vjs-volume-menu-button vjs-menu-button vjs-control",
          innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
      };
      u.na.prototype.update = u.da.prototype.update;
      u.bb = u.q.extend({
        i: function (e, t) {
          u.q.call(this, e, t);
          (!e.poster() || !e.controls()) && this.C();
          e.d("play", u.bind(this, this.C))
        }
      });
      u.bb.prototype.e = function () {
        var e = u.e("div", {
            className: "vjs-poster",
            tabIndex: -1
          }),
          t = this.b.poster();
        t && ("backgroundSize" in e.style ? e.style.backgroundImage = 'url("' + t + '")' : e.appendChild(u.e("img", {
          src: t
        })));
        return e
      };
      u.bb.prototype.p = function () {
        this.K().controls() && this.b.play()
      };
      u.Ub = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t);
          e.d("canplay", u.bind(this, this.C));
          e.d("canplaythrough", u.bind(this, this.C));
          e.d("playing", u.bind(this, this.C));
          e.d("seeked", u.bind(this, this.C));
          e.d("seeking", u.bind(this, this.show));
          e.d("seeked", u.bind(this, this.C));
          e.d("error", u.bind(this, this.show));
          e.d("waiting", u.bind(this, this.show))
        }
      });
      u.Ub.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
          className: "vjs-loading-spinner"
        })
      };
      u.Va = u.q.extend();
      u.Va.prototype.e = function () {
        return u.q.prototype.e.call(this, "div", {
          className: "vjs-big-play-button",
          innerHTML: "<span></span>",
          "aria-label": "play video"
        })
      };
      u.Va.prototype.p = function () {
        this.b.play()
      };
      u.r = u.c.extend({
        i: function (e, t, i) {
          u.c.call(this, e, t, i);
          var n, r;
          r = this;
          n = this.K();
          e = function () {
            if (n.controls() && !n.Pb()) {
              var e, t;
              r.d("mousedown", r.p);
              r.d("touchstart", function (e) {
                e.preventDefault();
                e.stopPropagation();
                t = I(this.b)
              });
              e = function (e) {
                e.stopPropagation();
                t && this.b.tc()
              };
              r.d("touchmove", e);
              r.d("touchleave", e);
              r.d("touchcancel", e);
              r.d("touchend", e);
              var i, o, s;
              i = 0;
              r.d("touchstart", function () {
                i = (new Date).getTime();
                s = f
              });
              e = function () {
                s = l
              };
              r.d("touchmove", e);
              r.d("touchleave", e);
              r.d("touchcancel", e);
              r.d("touchend", function () {
                s === f && (o = (new Date).getTime() - i, 250 > o && this.j("tap"))
              });
              r.d("tap", r.kd)
            }
          };
          t = u.bind(r, r.nd);
          this.L(e);
          n.d("controlsenabled", e);
          n.d("controlsdisabled", t)
        }
      });
      u.r.prototype.nd = function () {
        this.o("tap");
        this.o("touchstart");
        this.o("touchmove");
        this.o("touchleave");
        this.o("touchcancel");
        this.o("touchend");
        this.o("click");
        this.o("mousedown")
      };
      u.r.prototype.p = function (e) {
        0 === e.button && this.K().controls() && (this.K().paused() ? this.K().play() : this.K().pause())
      };
      u.r.prototype.kd = function () {
        I(this.K(), !I(this.K()))
      };
      u.r.prototype.m = {
        volumeControl: f,
        fullscreenResize: l,
        progressEvents: l,
        timeupdateEvents: l
      };
      u.media = {};
      u.media.Ua = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");

      function ea() {
        var e = u.media.Ua[i];
        return function () {
          throw Error('The "' + e + "\" method is not available on the playback technology's API")
        }
      }
      for (var i = u.media.Ua.length - 1; 0 <= i; i--) u.r.prototype[u.media.Ua[i]] = ea();
      u.l = u.r.extend({
        i: function (e, t, i) {
          this.m.volumeControl = u.l.Sc();
          this.m.movingMediaElementInDOM = !u.Hc;
          this.m.fullscreenResize = f;
          u.r.call(this, e, t, i);
          (t = t.source) && this.a.currentSrc === t.src && 0 < this.a.networkState ? e.j("loadstart") : t && (this.a.src = t.src);
          if (u.Oc && e.options().nativeControlsForTouch !== l) {
            var n, r, o, s;
            n = this;
            r = this.K();
            t = r.controls();
            n.a.controls = !!t;
            o = function () {
              n.a.controls = f
            };
            s = function () {
              n.a.controls = l
            };
            r.d("controlsenabled", o);
            r.d("controlsdisabled", s);
            t = function () {
              r.o("controlsenabled", o);
              r.o("controlsdisabled", s)
            };
            n.d("dispose", t);
            r.d("usingcustomcontrols", t);
            r.Pb(f)
          }
          e.L(function () {
            this.M && (this.g.autoplay && this.paused()) && (delete this.M.poster, this.play())
          });
          for (e = u.l.Za.length - 1; 0 <= e; e--) u.d(this.a, u.l.Za[e], u.bind(this.b, this.Yc));
          this.Ta()
        }
      });
      t = u.l.prototype;
      t.D = function () {
        u.r.prototype.D.call(this)
      };
      t.e = function () {
        var e = this.b,
          t = e.M,
          i;
        if (!t || this.m.movingMediaElementInDOM === l) t ? (i = t.cloneNode(l), u.l.gc(t), t = i, e.M = j) : t = u.e("video", {
          id: e.id() + "_html5_api",
          className: "vjs-tech"
        }), t.player = e, u.yb(t, e.v());
        i = ["autoplay", "preload", "loop", "muted"];
        for (var n = i.length - 1; 0 <= n; n--) {
          var r = i[n];
          e.g[r] !== j && (t[r] = e.g[r])
        }
        return t
      };
      t.Yc = function (e) {
        this.j(e);
        e.stopPropagation()
      };
      t.play = function () {
        this.a.play()
      };
      t.pause = function () {
        this.a.pause()
      };
      t.paused = function () {
        return this.a.paused
      };
      t.currentTime = function () {
        return this.a.currentTime
      };
      t.qd = function (e) {
        try {
          this.a.currentTime = e
        }
        catch (e) {
          u.log(e, "Video is not ready. (Video.js)")
        }
      };
      t.duration = function () {
        return this.a.duration || 0
      };
      t.buffered = function () {
        return this.a.buffered
      };
      t.volume = function () {
        return this.a.volume
      };
      t.vd = function (e) {
        this.a.volume = e
      };
      t.muted = function () {
        return this.a.muted
      };
      t.td = function (e) {
        this.a.muted = e
      };
      t.width = function () {
        return this.a.offsetWidth
      };
      t.height = function () {
        return this.a.offsetHeight
      };
      t.Sa = function () {
        return "function" == typeof this.a.webkitEnterFullScreen && (/Android/.test(u.F) || !/Chrome|Mac OS X 10.5/.test(u.F)) ? f : l
      };
      t.src = function (e) {
        this.a.src = e
      };
      t.load = function () {
        this.a.load()
      };
      t.currentSrc = function () {
        return this.a.currentSrc
      };
      t.Pa = function () {
        return this.a.Pa
      };
      t.ud = function (e) {
        this.a.Pa = e
      };
      t.autoplay = function () {
        return this.a.autoplay
      };
      t.pd = function (e) {
        this.a.autoplay = e
      };
      t.controls = function () {
        return this.a.controls
      };
      t.loop = function () {
        return this.a.loop
      };
      t.sd = function (e) {
        this.a.loop = e
      };
      t.error = function () {
        return this.a.error
      };
      t.seeking = function () {
        return this.a.seeking
      };
      u.l.isSupported = function () {
        return !!u.ma.canPlayType
      };
      u.l.lb = function (e) {
        try {
          return !!u.ma.canPlayType(e.type)
        }
        catch (e) {
          return ""
        }
      };
      u.l.Sc = function () {
        var e = u.ma.volume;
        u.ma.volume = e / 2 + .1;
        return e !== u.ma.volume
      };
      u.l.Za = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
      u.l.gc = function (e) {
        if (e) {
          e.player = j;
          for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
          e.removeAttribute("src");
          "function" === typeof e.load && e.load()
        }
      };
      u.Lc && (document.createElement("video").constructor.prototype.canPlayType = function (e) {
        return e && -1 != e.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
      });
      u.f = u.r.extend({
        i: function (e, t, i) {
          u.r.call(this, e, t, i);
          var n = t.source;
          i = t.parentEl;
          var r = this.a = u.e("div", {
              id: e.id() + "_temp_flash"
            }),
            o = e.id() + "_flash_api";
          e = e.g;
          var s = u.k.B({
              readyFunction: "videojs.Flash.onReady",
              eventProxyFunction: "videojs.Flash.onEvent",
              errorEventProxyFunction: "videojs.Flash.onError",
              autoplay: e.autoplay,
              preload: e.Pa,
              loop: e.loop,
              muted: e.muted
            }, t.flashVars),
            a = u.k.B({
              wmode: "opaque",
              bgcolor: "#000000"
            }, t.params),
            l = u.k.B({
              id: o,
              name: o,
              class: "vjs-tech"
            }, t.attributes);
          n && (n.type && u.f.cd(n.type) ? (e = u.f.yc(n.src), s.rtmpConnection = encodeURIComponent(e.qb), s.rtmpStream = encodeURIComponent(e.Mb)) : s.src = encodeURIComponent(u.jc(n.src)));
          u.yb(r, i);
          t.startTime && this.L(function () {
            this.load();
            this.play();
            this.currentTime(t.startTime)
          });
          if (t.iFrameMode === f && !u.Gc) {
            var c = u.e("iframe", {
              id: o + "_iframe",
              name: o + "_iframe",
              className: "vjs-tech",
              scrolling: "no",
              marginWidth: 0,
              marginHeight: 0,
              frameBorder: 0
            });
            s.readyFunction = "ready";
            s.eventProxyFunction = "events";
            s.errorEventProxyFunction = "errors";
            u.d(c, "load", u.bind(this, function () {
              var e, i = c.contentWindow;
              e = c.contentDocument ? c.contentDocument : c.contentWindow.document;
              e.write(u.f.kc(t.swf, s, a, l));
              i.player = this.b;
              i.ready = u.bind(this.b, function (t) {
                var i = this.h;
                i.a = e.getElementById(t);
                u.f.ob(i)
              });
              i.events = u.bind(this.b, function (e, t) {
                this && "flash" === this.ia && this.j(t)
              });
              i.errors = u.bind(this.b, function (e, t) {
                u.log("Flash Error", t)
              })
            }));
            r.parentNode.replaceChild(c, r)
          }
          else u.f.Xc(t.swf, r, s, a, l)
        }
      });
      t = u.f.prototype;
      t.D = function () {
        u.r.prototype.D.call(this)
      };
      t.play = function () {
        this.a.vjs_play()
      };
      t.pause = function () {
        this.a.vjs_pause()
      };
      t.src = function (e) {
        u.f.bd(e) ? (e = u.f.yc(e), this.Od(e.qb), this.Pd(e.Mb)) : (e = u.jc(e), this.a.vjs_src(e));
        if (this.b.autoplay()) {
          var t = this;
          setTimeout(function () {
            t.play()
          }, 0)
        }
      };
      t.currentSrc = function () {
        var e = this.a.vjs_getProperty("currentSrc");
        if (e == j) {
          var t = this.Md(),
            i = this.Nd();
          t && i && (e = u.f.wd(t, i))
        }
        return e
      };
      t.load = function () {
        this.a.vjs_load()
      };
      t.poster = function () {
        this.a.vjs_getProperty("poster")
      };
      t.buffered = function () {
        return u.sb(0, this.a.vjs_getProperty("buffered"))
      };
      t.Sa = s(l);
      var R = u.f.prototype,
        S = "rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
        T = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");

      function fa() {
        var e = S[U],
          t = e.charAt(0).toUpperCase() + e.slice(1);
        R["set" + t] = function (t) {
          return this.a.vjs_setProperty(e, t)
        }
      }

      function V(e) {
        R[e] = function () {
          return this.a.vjs_getProperty(e)
        }
      }
      var U;
      for (U = 0; U < S.length; U++) V(S[U]), fa();
      for (U = 0; U < T.length; U++) V(T[U]);
      u.f.isSupported = function () {
        return 10 <= u.f.version()[0]
      };
      u.f.lb = function (e) {
        if (e.type in u.f.$c || e.type in u.f.zc) return "maybe"
      };
      u.f.$c = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
      };
      u.f.zc = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
      };
      u.f.onReady = function (e) {
        e = u.v(e);
        var t = e.player || e.parentNode.player,
          i = t.h;
        e.player = t;
        i.a = e;
        u.f.ob(i)
      };
      u.f.ob = function (e) {
        e.v().vjs_getProperty ? e.Ta() : setTimeout(function () {
          u.f.ob(e)
        }, 50)
      };
      u.f.onEvent = function (e, t) {
        u.v(e).player.j(t)
      };
      u.f.onError = function (e, t) {
        u.v(e).player.j("error");
        u.log("Flash Error", t, e)
      };
      u.f.version = function () {
        var e = "0,0,0";
        try {
          e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        }
        catch (t) {
          try {
            navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
          }
          catch (e) {}
        }
        return e.split(",")
      };
      u.f.Xc = function (e, t, i, n, r) {
        e = u.f.kc(e, i, n, r);
        e = u.e("div", {
          innerHTML: e
        }).childNodes[0];
        i = t.parentNode;
        t.parentNode.replaceChild(e, t);
        var o = i.childNodes[0];
        setTimeout(function () {
          o.style.display = "block"
        }, 1e3)
      };
      u.f.kc = function (e, t, i, n) {
        var r = "",
          o = "",
          s = "";
        t && u.k.ta(t, function (e, t) {
          r += e + "=" + t + "&amp;"
        });
        i = u.k.B({
          movie: e,
          flashvars: r,
          allowScriptAccess: "always",
          allowNetworking: "all"
        }, i);
        u.k.ta(i, function (e, t) {
          o += '<param name="' + e + '" value="' + t + '" />'
        });
        n = u.k.B({
          data: e,
          width: "100%",
          height: "100%"
        }, n);
        u.k.ta(n, function (e, t) {
          s += e + '="' + t + '" '
        });
        return '<object type="application/x-shockwave-flash"' + s + ">" + o + "</object>"
      };
      u.f.wd = function (e, t) {
        return e + "&" + t
      };
      u.f.yc = function (e) {
        var t = {
          qb: "",
          Mb: ""
        };
        if (!e) return t;
        var i = e.indexOf("&"),
          n; - 1 !== i ? n = i + 1 : (i = n = e.lastIndexOf("/") + 1, 0 === i && (i = n = e.length));
        t.qb = e.substring(0, i);
        t.Mb = e.substring(n, e.length);
        return t
      };
      u.f.cd = function (e) {
        return e in u.f.zc
      };
      u.f.Nc = /^rtmp[set]?:\/\//i;
      u.f.bd = function (e) {
        return u.f.Nc.test(e)
      };
      u.Mc = u.c.extend({
        i: function (e, t, i) {
          u.c.call(this, e, t, i);
          if (!e.g.sources || 0 === e.g.sources.length) {
            t = 0;
            for (i = e.g.techOrder; t < i.length; t++) {
              var n = u.$(i[t]),
                r = window.videojs[n];
              if (r && r.isSupported()) {
                J(e, n);
                break
              }
            }
          }
          else e.src(e.g.sources)
        }
      });

      function W(e) {
        e.za = e.za || [];
        return e.za
      }

      function X(e, t, i) {
        for (var n = e.za, r = 0, o = n.length, s, a; r < o; r++) s = n[r], s.id() === t ? (s.show(), a = s) : i && (s.J() == i && 0 < s.mode()) && s.disable();
        (t = a ? a.J() : i ? i : l) && e.j(t + "trackchange")
      }
      u.X = u.c.extend({
        i: function (e, t) {
          u.c.call(this, e, t);
          this.Q = t.id || "vjs_" + t.kind + "_" + t.language + "_" + u.s++;
          this.vc = t.src;
          this.Uc = t["default"] || t.dflt;
          this.yd = t.title;
          this.Jd = t.srclang;
          this.dd = t.label;
          this.fa = [];
          this.bc = [];
          this.ga = this.ha = 0;
          this.b.d("fullscreenchange", u.bind(this, this.Pc))
        }
      });
      t = u.X.prototype;
      t.J = p("A");
      t.src = p("vc");
      t.tb = p("Uc");
      t.title = p("yd");
      t.label = p("dd");
      t.readyState = p("ha");
      t.mode = p("ga");
      t.Pc = function () {
        this.a.style.fontSize = this.b.H ? 140 * (screen.width / this.b.width()) + "%" : ""
      };
      t.e = function () {
        return u.c.prototype.e.call(this, "div", {
          className: "vjs-" + this.A + " vjs-text-track"
        })
      };
      t.show = function () {
        Y(this);
        this.ga = 2;
        u.c.prototype.show.call(this)
      };
      t.C = function () {
        Y(this);
        this.ga = 1;
        u.c.prototype.C.call(this)
      };
      t.disable = function () {
        2 == this.ga && this.C();
        this.b.o("timeupdate", u.bind(this, this.update, this.Q));
        this.b.o("ended", u.bind(this, this.reset, this.Q));
        this.reset();
        this.b.V.textTrackDisplay.removeChild(this);
        this.ga = 0
      };

      function Y(e) {
        0 === e.ha && e.load();
        0 === e.ga && (e.b.d("timeupdate", u.bind(e, e.update, e.Q)), e.b.d("ended", u.bind(e, e.reset, e.Q)), ("captions" === e.A || "subtitles" === e.A) && e.b.V.textTrackDisplay.Z(e))
      }
      t.load = function () {
        0 === this.ha && (this.ha = 1, u.get(this.vc, u.bind(this, this.ld), u.bind(this, this.Fb)))
      };
      t.Fb = function (e) {
        this.error = e;
        this.ha = 3;
        this.j("error")
      };
      t.ld = function (e) {
        var t, i;
        e = e.split("\n");
        for (var n = "", r = 1, o = e.length; r < o; r++)
          if (n = u.trim(e[r])) {
            -1 == n.indexOf("-->") ? (t = n, n = u.trim(e[++r])) : t = this.fa.length;
            t = {
              id: t,
              index: this.fa.length
            };
            i = n.split(" --> ");
            t.startTime = ga(i[0]);
            t.ua = ga(i[1]);
            for (i = []; e[++r] && (n = u.trim(e[r]));) i.push(n);
            t.text = i.join("<br/>");
            this.fa.push(t)
          }
        this.ha = 2;
        this.j("loaded")
      };

      function ga(e) {
        var t = e.split(":");
        e = 0;
        var i, n, r;
        3 == t.length ? (i = t[0], n = t[1], t = t[2]) : (i = 0, n = t[0], t = t[1]);
        t = t.split(/\s+/);
        t = t.splice(0, 1)[0];
        t = t.split(/\.|,/);
        r = parseFloat(t[1]);
        t = t[0];
        e += 3600 * parseFloat(i);
        e += 60 * parseFloat(n);
        e += parseFloat(t);
        r && (e += r / 1e3);
        return e
      }
      t.update = function () {
        if (0 < this.fa.length) {
          var e = this.b.currentTime();
          if (this.Kb === b || e < this.Kb || this.La <= e) {
            var t = this.fa,
              i = this.b.duration(),
              n = 0,
              r = l,
              o = [],
              s, a, u, c;
            e >= this.La || this.La === b ? c = this.vb !== b ? this.vb : 0 : (r = f, c = this.Cb !== b ? this.Cb : t.length - 1);
            for (;;) {
              u = t[c];
              if (u.ua <= e) n = Math.max(n, u.ua), u.Ha && (u.Ha = l);
              else if (e < u.startTime) {
                if (i = Math.min(i, u.startTime), u.Ha && (u.Ha = l), !r) break
              }
              else r ? (o.splice(0, 0, u), a === b && (a = c), s = c) : (o.push(u), s === b && (s = c), a = c), i = Math.min(i, u.ua), n = Math.max(n, u.startTime), u.Ha = f;
              if (r)
                if (0 === c) break;
                else c--;
              else if (c === t.length - 1) break;
              else c++
            }
            this.bc = o;
            this.La = i;
            this.Kb = n;
            this.vb = s;
            this.Cb = a;
            e = this.bc;
            t = "";
            i = 0;
            for (n = e.length; i < n; i++) t += '<span class="vjs-tt-cue">' + e[i].text + "</span>";
            this.a.innerHTML = t;
            this.j("cuechange")
          }
        }
      };
      t.reset = function () {
        this.La = 0;
        this.Kb = this.b.duration();
        this.Cb = this.vb = 0
      };
      u.Sb = u.X.extend();
      u.Sb.prototype.A = "captions";
      u.Yb = u.X.extend();
      u.Yb.prototype.A = "subtitles";
      u.Tb = u.X.extend();
      u.Tb.prototype.A = "chapters";
      u.Zb = u.c.extend({
        i: function (e, t, i) {
          u.c.call(this, e, t, i);
          if (e.g.tracks && 0 < e.g.tracks.length) {
            t = this.b;
            e = e.g.tracks;
            var n;
            for (i = 0; i < e.length; i++) {
              n = e[i];
              var r = t,
                o = n.kind,
                s = n.label,
                a = n.language,
                l = n;
              n = r.za = r.za || [];
              l = l || {};
              l.kind = o;
              l.label = s;
              l.language = a;
              o = u.$(o || "subtitles");
              r = new window.videojs[o + "Track"](r, l);
              n.push(r)
            }
          }
        }
      });
      u.Zb.prototype.e = function () {
        return u.c.prototype.e.call(this, "div", {
          className: "vjs-text-track-display"
        })
      };
      u.Y = u.N.extend({
        i: function (e, t) {
          var i = this.ca = t.track;
          t.label = i.label();
          t.selected = i.tb();
          u.N.call(this, e, t);
          this.b.d(i.J() + "trackchange", u.bind(this, this.update))
        }
      });
      u.Y.prototype.p = function () {
        u.N.prototype.p.call(this);
        X(this.b, this.ca.Q, this.ca.J())
      };
      u.Y.prototype.update = function () {
        this.selected(2 == this.ca.mode())
      };
      u.ab = u.Y.extend({
        i: function (e, t) {
          t.track = {
            J: function () {
              return t.kind
            },
            K: e,
            label: function () {
              return t.kind + " off"
            },
            tb: s(l),
            mode: s(l)
          };
          u.Y.call(this, e, t);
          this.selected(f)
        }
      });
      u.ab.prototype.p = function () {
        u.Y.prototype.p.call(this);
        X(this.b, this.ca.Q, this.ca.J())
      };
      u.ab.prototype.update = function () {
        for (var e = W(this.b), t = 0, i = e.length, n, r = f; t < i; t++) n = e[t], n.J() == this.ca.J() && 2 == n.mode() && (r = l);
        this.selected(r)
      };
      u.S = u.R.extend({
        i: function (e, t) {
          u.R.call(this, e, t);
          1 >= this.I.length && this.C()
        }
      });
      u.S.prototype.sa = function () {
        var e = [],
          t;
        e.push(new u.ab(this.b, {
          kind: this.A
        }));
        for (var i = 0; i < W(this.b).length; i++) t = W(this.b)[i], t.J() === this.A && e.push(new u.Y(this.b, {
          track: t
        }));
        return e
      };
      u.Ca = u.S.extend({
        i: function (e, t, i) {
          u.S.call(this, e, t, i);
          this.a.setAttribute("aria-label", "Captions Menu")
        }
      });
      u.Ca.prototype.A = "captions";
      u.Ca.prototype.pa = "Captions";
      u.Ca.prototype.className = "vjs-captions-button";
      u.Ga = u.S.extend({
        i: function (e, t, i) {
          u.S.call(this, e, t, i);
          this.a.setAttribute("aria-label", "Subtitles Menu")
        }
      });
      u.Ga.prototype.A = "subtitles";
      u.Ga.prototype.pa = "Subtitles";
      u.Ga.prototype.className = "vjs-subtitles-button";
      u.Da = u.S.extend({
        i: function (e, t, i) {
          u.S.call(this, e, t, i);
          this.a.setAttribute("aria-label", "Chapters Menu")
        }
      });
      t = u.Da.prototype;
      t.A = "chapters";
      t.pa = "Chapters";
      t.className = "vjs-chapters-button";
      t.sa = function () {
        for (var e = [], t, i = 0; i < W(this.b).length; i++) t = W(this.b)[i], t.J() === this.A && e.push(new u.Y(this.b, {
          track: t
        }));
        return e
      };
      t.Ja = function () {
        for (var e = W(this.b), t = 0, i = e.length, n, r, o = this.I = []; t < i; t++)
          if (n = e[t], n.J() == this.A && n.tb()) {
            if (2 > n.readyState()) {
              this.Gd = n;
              n.d("loaded", u.bind(this, this.Ja));
              return
            }
            r = n;
            break
          }
        e = this.va = new u.la(this.b);
        e.a.appendChild(u.e("li", {
          className: "vjs-menu-title",
          innerHTML: u.$(this.A),
          xd: -1
        }));
        if (r) {
          n = r.fa;
          for (var s, t = 0, i = n.length; t < i; t++) s = n[t], s = new u.Wa(this.b, {
            track: r,
            cue: s
          }), o.push(s), e.Z(s)
        }
        0 < this.I.length && this.show();
        return e
      };
      u.Wa = u.N.extend({
        i: function (e, t) {
          var i = this.ca = t.track,
            n = this.cue = t.cue,
            r = e.currentTime();
          t.label = n.text;
          t.selected = n.startTime <= r && r < n.ua;
          u.N.call(this, e, t);
          i.d("cuechange", u.bind(this, this.update))
        }
      });
      u.Wa.prototype.p = function () {
        u.N.prototype.p.call(this);
        this.b.currentTime(this.cue.startTime);
        this.update(this.cue.startTime)
      };
      u.Wa.prototype.update = function () {
        var e = this.cue,
          t = this.b.currentTime();
        this.selected(e.startTime <= t && t < e.ua)
      };
      u.k.B(u.Ea.prototype.g.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
      });
      if ("undefined" !== typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
      else {
        u.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        u.JSON.parse = function (a, c) {
          function d(e, t) {
            var i, n, r = e[t];
            if (r && "object" === typeof r)
              for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (n = d(r, i), n !== b ? r[i] = n : delete r[i]);
            return c.call(e, t, r)
          }
          var e;
          a = String(a);
          Z.lastIndex = 0;
          Z.test(a) && (a = a.replace(Z, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
          }));
          if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof c ? d({
            "": e
          }, "") : e;
          throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
      }
      u.cc = function () {
        var e, t, i = document.getElementsByTagName("video");
        if (i && 0 < i.length)
          for (var n = 0, r = i.length; n < r; n++)
            if ((t = i[n]) && t.getAttribute) t.player === b && (e = t.getAttribute("data-setup"), e !== j && (e = u.JSON.parse(e || "{}"), v(t, e)));
            else {
              u.jb();
              break
            }
        else u.Cc || u.jb()
      };
      u.jb = function () {
        setTimeout(u.cc, 1)
      };
      "complete" === document.readyState ? u.Cc = f : u.U(window, "load", function () {
        u.Cc = f
      });
      u.jb();
      u.md = function (e, t) {
        u.w.prototype[e] = t
      };
      var ha = this;
      ha.Cd = f;

      function $(e, t) {
        var i = e.split("."),
          n = ha;
        !(i[0] in n) && n.execScript && n.execScript("var " + i[0]);
        for (var r; i.length && (r = i.shift());) !i.length && t !== b ? n[r] = t : n = n[r] ? n[r] : n[r] = {}
      }
      $("videojs", u);
      $("_V_", u);
      $("videojs.options", u.options);
      $("videojs.players", u.wa);
      $("videojs.cache", u.qa);
      $("videojs.Component", u.c);
      u.c.prototype.player = u.c.prototype.K;
      u.c.prototype.dispose = u.c.prototype.D;
      u.c.prototype.createEl = u.c.prototype.e;
      u.c.prototype.el = u.c.prototype.v;
      u.c.prototype.addChild = u.c.prototype.Z;
      u.c.prototype.children = u.c.prototype.children;
      u.c.prototype.on = u.c.prototype.d;
      u.c.prototype.off = u.c.prototype.o;
      u.c.prototype.one = u.c.prototype.U;
      u.c.prototype.trigger = u.c.prototype.j;
      u.c.prototype.triggerReady = u.c.prototype.Ta;
      u.c.prototype.show = u.c.prototype.show;
      u.c.prototype.hide = u.c.prototype.C;
      u.c.prototype.width = u.c.prototype.width;
      u.c.prototype.height = u.c.prototype.height;
      u.c.prototype.dimensions = u.c.prototype.Vc;
      u.c.prototype.ready = u.c.prototype.L;
      u.c.prototype.addClass = u.c.prototype.n;
      u.c.prototype.removeClass = u.c.prototype.t;
      $("videojs.Player", u.w);
      u.w.prototype.dispose = u.w.prototype.D;
      u.w.prototype.requestFullScreen = u.w.prototype.xa;
      u.w.prototype.cancelFullScreen = u.w.prototype.nb;
      u.w.prototype.bufferedPercent = u.w.prototype.Ia;
      u.w.prototype.usingNativeControls = u.w.prototype.Pb;
      $("videojs.MediaLoader", u.Mc);
      $("videojs.TextTrackDisplay", u.Zb);
      $("videojs.ControlBar", u.Ea);
      $("videojs.Button", u.q);
      $("videojs.PlayToggle", u.Wb);
      $("videojs.FullscreenToggle", u.Fa);
      $("videojs.BigPlayButton", u.Va);
      $("videojs.LoadingSpinner", u.Ub);
      $("videojs.CurrentTimeDisplay", u.Xa);
      $("videojs.DurationDisplay", u.Ya);
      $("videojs.TimeDivider", u.$b);
      $("videojs.RemainingTimeDisplay", u.eb);
      $("videojs.Slider", u.O);
      $("videojs.ProgressControl", u.cb);
      $("videojs.SeekBar", u.Xb);
      $("videojs.LoadProgressBar", u.$a);
      $("videojs.PlayProgressBar", u.Vb);
      $("videojs.SeekHandle", u.fb);
      $("videojs.VolumeControl", u.hb);
      $("videojs.VolumeBar", u.gb);
      $("videojs.VolumeLevel", u.ac);
      $("videojs.VolumeMenuButton", u.na);
      $("videojs.VolumeHandle", u.ib);
      $("videojs.MuteToggle", u.da);
      $("videojs.PosterImage", u.bb);
      $("videojs.Menu", u.la);
      $("videojs.MenuItem", u.N);
      $("videojs.MenuButton", u.R);
      u.R.prototype.createItems = u.R.prototype.sa;
      u.S.prototype.createItems = u.S.prototype.sa;
      u.Da.prototype.createItems = u.Da.prototype.sa;
      $("videojs.SubtitlesButton", u.Ga);
      $("videojs.CaptionsButton", u.Ca);
      $("videojs.ChaptersButton", u.Da);
      $("videojs.MediaTechController", u.r);
      u.r.prototype.features = u.r.prototype.m;
      u.r.prototype.m.volumeControl = u.r.prototype.m.Bc;
      u.r.prototype.m.fullscreenResize = u.r.prototype.m.Hd;
      u.r.prototype.m.progressEvents = u.r.prototype.m.Ld;
      u.r.prototype.m.timeupdateEvents = u.r.prototype.m.Qd;
      $("videojs.Html5", u.l);
      u.l.Events = u.l.Za;
      u.l.isSupported = u.l.isSupported;
      u.l.canPlaySource = u.l.lb;
      u.l.prototype.setCurrentTime = u.l.prototype.qd;
      u.l.prototype.setVolume = u.l.prototype.vd;
      u.l.prototype.setMuted = u.l.prototype.td;
      u.l.prototype.setPreload = u.l.prototype.ud;
      u.l.prototype.setAutoplay = u.l.prototype.pd;
      u.l.prototype.setLoop = u.l.prototype.sd;
      $("videojs.Flash", u.f);
      u.f.isSupported = u.f.isSupported;
      u.f.canPlaySource = u.f.lb;
      u.f.onReady = u.f.onReady;
      $("videojs.TextTrack", u.X);
      u.X.prototype.label = u.X.prototype.label;
      $("videojs.CaptionsTrack", u.Sb);
      $("videojs.SubtitlesTrack", u.Yb);
      $("videojs.ChaptersTrack", u.Tb);
      $("videojs.autoSetup", u.cc);
      $("videojs.plugin", u.md);
      $("videojs.createTimeRange", u.sb)
    })()
  },
  222: function (e, t, i) {
    var n, r;
    !(n = [i(3), i(7)], r = function (e, t) {
      "use strict";
      var i = function () {
        var i = this.incoming = {
          vent: new t.Wreqr.EventAggregator,
          reqres: new t.Wreqr.RequestResponse,
          commands: new t.Wreqr.Commands
        };
        var n = this.outgoing = {
          vent: new t.Wreqr.EventAggregator,
          reqres: new t.Wreqr.RequestResponse,
          commands: new t.Wreqr.Commands
        };
        this.on = e.bind(i.vent.on, i.vent);
        this.off = e.bind(i.vent.off, i.vent);
        this.once = e.bind(i.vent.once, i.vent);
        this.reqres = {
          request: this.request,
          setHandler: e.bind(i.reqres.setHandler, i.reqres),
          setHandlers: e.bind(i.reqres.setHandlers, i.reqres),
          removeHandler: e.bind(i.reqres.removeHandler, i.reqres),
          removeHandlers: e.bind(i.reqres.removeHandlers, i.reqres),
          removeAllHandlers: e.bind(i.reqres.removeAllHandlers, i.reqres)
        };
        this.commands = {
          execute: this.execute,
          setHandler: e.bind(i.commands.setHandler, i.commands),
          setHandlers: e.bind(i.commands.setHandlers, i.commands),
          removeHandler: e.bind(i.commands.removeHandler, i.commands),
          removeHandlers: e.bind(i.commands.removeHandlers, i.commands),
          removeAllHandlers: e.bind(i.commands.removeAllHandlers, i.commands)
        }
      };
      i.prototype.trigger = function () {
        return this.outgoing.vent.trigger.apply(this.outgoing.vent, arguments)
      };
      i.prototype.request = function () {
        return this.outgoing.reqres.request.apply(this.outgoing.reqres, arguments)
      };
      i.prototype.execute = function () {
        return this.outgoing.commands.execute.apply(this.outgoing.commands, arguments)
      };
      i.prototype.ajax = function () {
        Array.prototype.unshift.call(arguments, "ajax:request");
        return this.request.apply(this, arguments)
      };
      i.prototype.RPC = function () {
        Array.prototype.unshift.call(arguments, "ajax:rpc");
        return this.request.apply(this, arguments)
      };
      return i
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  227: function (e, t, i) {
    var n, r;
    !(n = [i(228)], r = function () {
      return {}
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  228: function (e, t, i) {
    var n, r;
    !(n = [], r = function () {
      if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (e, t) {
          t = t || 0;
          return this.substr(t, e.length) === e
        }
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  229: function (e, t, i) {
    var n, r;
    !(n = [i(2), i(1)], r = function (e, t) {
      window.blogCommentDisplayForm = function (i, n, r) {
        var o = t("#" + n);
        var s = o.data("isReplyFormOpen") || false;
        var a = o.prev(".reply-comment").find("span").first();
        var l = e.stl("javascript.site.comments_1");
        if (o.data("locked")) return;
        o.data("locked", true);
        var u = o.data("replyText");
        if (!u) {
          u = a.html();
          o.data("replyText", u)
        }
        var c = t("#" + n + " iframe");
        if (!c.length) {
          c = t('<iframe src="' + i + '" frameborder="0" allowtransparency="true" scrolling="no"></iframe>');
          t("#" + n + " > div > div").first().append(c)
        }
        if (s) {
          a.html(u);
          o.data("isReplyFormOpen", false);
          o.down().slideUp(1e3, function () {
            o.data("locked", false);
            o.hide()
          })
        }
        else {
          a.html(l);
          o.data("isReplyFormOpen", true);
          o.show().down().slideUp(0).slideDown(1e3, function () {
            o.data("locked", false)
          })
        }
        return false
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  230: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(231)], r = function (e, t) {
      var i = function () {
        var i = e(".products__published");
        i.each(function () {
          var i = e(this);
          var n = i.find("[data-max-page]").data("max-page");
          t.bindSlideshowListener(i);
          if (i.find(".product-grid-image").length > 0) {
            t.initializeMasonry(i, true)
          }
          if (i.find(".product-grid-single-row__wrapper").length > 0) {
            t.assignRowScrollListener(i, n, r)
          }
          else if (i.find(".product-grid__more").length > 0) {
            t.assignShowMorePagination(i, n, r)
          }
          else {
            i.find(".js-page-num").eq(0).addClass("wsite-selected");
            t.listenToPagination(i, n, r)
          }
        })
      };
      var n = function () {
        var i = e(".categories__published");
        i.each(function () {
          var i = e(this);
          var n = i.find("[data-max-page]").data("max-page");
          if (i.find(".product-grid-image").length > 0) {
            t.initializeMasonry(i)
          }
          if (i.find(".product-grid-single-row__wrapper").length > 0) {
            t.assignRowScrollListener(i, n, r)
          }
          else if (i.find(".product-grid__more").length > 0) {
            t.assignShowMorePagination(i, n, r)
          }
          else {
            i.find(".js-page-num").eq(0).addClass("wsite-selected");
            t.listenToPagination(i, n, r)
          }
        })
      };
      var r = function (i, n) {
        var r = i.find(".pagination__overlay");
        var o = i.attr("data-page-element-id");
        var s = i.attr("data-page-id");
        var a = "/store/element/" + o + "/page/" + s + "/pagination/" + n;
        var l = i.find(".product-grid-single-row__wrapper");
        if (l.length === 0) {
          r.show()
        }
        e.ajax({
          url: a
        }).done(function (n) {
          if (l.length > 0) {
            l.append(e(n).find(".product-grid__item"))
          }
          else if (i.find(".product-grid__paging").length > 0) {
            e("body, html").animate({
              scrollTop: i.offset().top - 70 + "px"
            }, 300);
            i.find(".commerce-layout-wrapper").html(n);
            r.hide()
          }
          else {
            i.find(".commerce-layout-wrapper").children().eq(0).append(e(n).children());
            i.find(".product-grid__more").removeClass("disabled");
            r.hide()
          }
          if (i.hasClass("products__published")) {
            t.bindSlideshowListener(i)
          }
          t.initializeMasonry(i)
        })
      };
      e(document).ready(function () {
        i();
        n()
      })
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  231: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(3), i(6), i(166), i(157)], r = function (e, t, i, n, r) {
      var o = '<div class="product-pagination" data-max-page="{{max_page}}">\n' + '<div class="product-grid__paging clearfix">\n' + '<a class="product-grid__paging--link js-products-prev">\n' + '<span class="product-grid__paging--arrow"></span>\n' + "</a>\n" + '<div class="pagination-wrapper">\n' + '<a class="product-grid__paging--count js-page-num wsite-first" data-page="1">1</a>\n' + "{{#show_head_ellipsis}}\n" + '<span class="pagination-ellipsis"></span>\n' + "{{/show_head_ellipsis}}\n" + "{{#pages}}\n" + '<a class="product-grid__paging--count js-page-num" data-page="{{.}}">{{.}}</a>\n' + "{{/pages}}\n" + "{{#show_tail_ellipsis}}\n" + '<span class="pagination-ellipsis"></span>\n' + "{{/show_tail_ellipsis}}\n" + '<a class="product-grid__paging--count js-page-num wsite-last" data-page="{{max_page}}">{{max_page}}</a>\n' + "</div>\n" + '<a class="product-grid__paging--link product-grid--next js-products-next">\n' + '<span class="product-grid__paging--arrow"></span>\n' + "</a>\n" + "</div>\n" + "</div>";
      var s = {
        bindSlideshowListener: function (t) {
          var i, n;
          var r = false;
          var o = function (e, t, i) {
            var n = e.eq(t % e.length);
            n.css({
              marginTop: -1 * i,
              paddingTop: i
            }).fadeIn(400, function () {
              e.not(n).hide()
            })
          };
          var s = function (t) {
            var s = 0;
            var a = e(t.currentTarget);
            var l = a.find(".js-slideshow-img");
            n = a.clone();
            r = true;
            if (l.length > 1) {
              var u = a.find(".js-default-img");
              var c = parseFloat(u.css("paddingTop"));
              o(l, ++s, c);
              clearInterval(i);
              i = setInterval(function () {
                o(l, ++s, c)
              }, 1e3)
            }
          };
          var a = function (t) {
            if (r) {
              r = false;
              var o = e(t.currentTarget);
              o.replaceWith(n);
              clearInterval(i)
            }
          };
          t.off("mouseenter.slideshow", ".product-grid__item").on("mouseenter.slideshow", ".product-grid__item", s).off("mouseleave.slideshow", ".product-grid__item").on("mouseleave.slideshow", ".product-grid__item", a)
        },
        listenToPagination: function (e, t, i) {
          var n = e.find(".js-products-prev, .js-products-next");
          var r = e.find(".js-page-num");
          n.off("click.arrow").on("click.arrow", function (n) {
            this.onArrowClick(n, e, t, i)
          }.bind(this));
          r.off("click.number").on("click.number", function (n) {
            this.onNumberClick(n, e, t, i)
          }.bind(this))
        },
        onArrowClick: function (t, i, n, r) {
          var o = e(t.currentTarget);
          var s = o.hasClass("js-products-prev") ? -1 : 1;
          var a = o.siblings(".pagination-wrapper");
          var l = parseInt(a.children(".wsite-selected").attr("data-page"));
          var u = l + s;
          if (u >= 1 && u <= n) {
            this.gotoPage(i, u, n, r)
          }
        },
        onNumberClick: function (t, i, n, r) {
          var o = e(t.currentTarget);
          var s = parseInt(o.attr("data-page"));
          if (s >= 1 && s <= n) {
            this.gotoPage(i, s, n, r)
          }
        },
        gotoPage: function (e, t, i, n) {
          this.renderPagination(e, t, i, n);
          this.renderPage(e, t, n)
        },
        renderPagination: function (e, t, n, r) {
          var s = e.find(".product-pagination");
          var a = this.getPaginationData(t, n);
          var l = i.render(o, a);
          s.replaceWith(l);
          e.find('a[data-page="' + t + '"]').addClass("wsite-selected");
          this.listenToPagination(e, n, r)
        },
        assignShowMorePagination: function (t, i, n) {
          t.find(".product-grid__more").on("click", function (r) {
            var o = e(r.currentTarget);
            var s = o.data("current-page");
            if (s < i && !o.hasClass("disabled")) {
              o.data("current-page", ++s);
              o.addClass("disabled");
              this.renderPage(t, s, n)
            }
            if (s === i) {
              o.remove()
            }
          }.bind(this))
        },
        assignRowScrollListener: function (e, i, n) {
          var r = e.find(".product-grid__item");
          if (r.length === 0) {
            return
          }
          var o = r.outerWidth(true);
          var s = e.find(".js-row-wrapper");
          this.scrollIntervalFired = false;
          this.scrollInterval = null;
          e.find(".js-scroll-arrow").off("mousedown touchstart mouseup touchend").on("mousedown touchstart", function (e) {
            this.onSingleRowArrowMousedown(e, s)
          }.bind(this)).on("mouseup touchend", function (e) {
            this.onSingleArrowMouseUp(e, s, o)
          }.bind(this));
          if (i > 1) {
            this.singleRowWidth = 0;
            s.off("scroll.singlerow").on("scroll.singlerow", t.throttle(function (t) {
              this.onSingleRowScroll(t, e, i, o, n)
            }.bind(this), 150))
          }
        },
        onSingleRowArrowMousedown: function (t, i) {
          if (t.which === 3) {
            return
          }
          var n = e(t.currentTarget);
          var r = n.hasClass("js-scroll-left") ? -1 : 1;
          this.scrollTimeout = setTimeout(function () {
            this.scrollInterval = setInterval(function () {
              this.intervalFired = true;
              i.animate({
                scrollLeft: r < 0 ? "-=30" : "+=30"
              }, 10)
            }.bind(this), 15)
          }.bind(this), 150)
        },
        onSingleArrowMouseUp: function (t, i, n) {
          if (t.which === 3) {
            return
          }
          var r = e(t.currentTarget);
          var o = r.hasClass("js-scroll-left") ? -1 : 1;
          if (!this.intervalFired) {
            var s = n;
            var a = i.scrollLeft() % n;
            if (a > 0) {
              if (o < 0) {
                s = a
              }
              else {
                s -= a
              }
            }
            s = Math.ceil(s);
            i.animate({
              scrollLeft: o < 0 ? "-=" + s + "px" : "+=" + s + "px"
            }, 100)
          }
          clearTimeout(this.scrollTimeout);
          clearInterval(this.scrollInterval);
          this.intervalFired = false;
          this.scrollInterval = null
        },
        onSingleRowScroll: function (t, i, n, r, o) {
          var s = e(t.currentTarget);
          if (this.singleRowWidth === 0) {
            var a = i.find(".js-row-wrapper").get(0);
            this.singleRowWidth = a.scrollWidth
          }
          if (s.scrollLeft() > this.singleRowWidth - s.width() * 2) {
            var l = s.data("current-page");
            if (l < n) {
              this.renderPage(i, ++l, o);
              s.data("current-page", l);
              this.singleRowWidth = 0
            }
          }
        },
        initializeMasonry: function (t) {
          var i = t.find(".product-grid-masonry");
          if (i.length > 0) {
            if (i.data("masonry")) {
              i.masonry("destroy")
            }
            if (!e.fn.masonry) {
              r("masonry", n, e)
            }
            var o = {
              itemSelector: ".product-grid__item",
              columnWidth: ".product-grid__item",
              gutter: ".product-grid-masonry--gutter",
              percentPosition: true
            };
            var s = i.find("img");
            var a = [];
            s.each(function () {
              var t = e(this);
              var i = this.complete;
              if (!i) {
                var n = new e.Deferred;
                a.push(n);
                t.on("load", function () {
                  n.resolve()
                })
              }
            });
            e.when.apply(e, a).done(function () {
              i.masonry(o)
            })
          }
        },
        removeListeners: function (t) {
          t.off("mouseenter mouseleave click");
          t.find(".js-products-prev, .js-products-next").off("click");
          t.find(".js-page-num").off("click");
          t.find(".js-row-wrapper").off("scroll.singlerow");
          t.find(".js-scroll-arrow").off("mousedown mouseup mouseleave touchstart touchend");
          if (e.fn.masonry) {
            t.find(".product-grid-masonry").masonry("destroy")
          }
        },
        renderPage: function (e, t, i) {
          var n = t - 1;
          i(e, n)
        },
        resetPagination: function (e, t) {
          e.replaceWith(t)
        },
        getPaginationData: function (e, i) {
          var n;
          var r = t.range(1, e);
          var o = t.range(e + 1, i + 1);
          if (i > 5 && e > 2) {
            r.splice(0, e - 3)
          }
          if (i > 5 && e < i - 2) {
            o.splice(2, o.length)
          }
          n = r.concat([e], o);
          n = t.filter(n, function (e) {
            return e !== 1 && e !== i
          });
          return {
            max_page: i,
            pages: n,
            show_head_ellipsis: r[0] > 2,
            show_tail_ellipsis: t.last(o) < i - 1
          }
        }
      };
      return s
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  233: function (e, t, i) {
    var n, r;
    !(n = [i(1)], r = function (e) {
      var t = "gdpr-kb-p";
      var i = 1;
      var n = function () {
        return document.cookie.indexOf(t + "=") > 0
      };
      var r = function (e) {
        e.replaceWith("<p>" + window._W.stl("javascript.site.published.cookie-opt-out_1") + "</p>")
      };
      var o = function () {
        document.cookie = t + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
      };
      e(document).ready(function () {
        var t = window._W.isEUUser;
        var i = window._W.showCookieToAll;
        if (["eu", ""].indexOf(i) !== -1 && !t) {
          e(".wsite-cookie-opt-out--wrapper").remove();
          return
        }
        var s = e(".wsite-cookie-opt-out");
        if (s.length) {
          if (n()) {
            s.on("click", function (e) {
              e.preventDefault();
              o();
              r(s)
            })
          }
          else {
            r(s)
          }
        }
      })
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  234: function (e, t, i) {
    var n, r;
    !(n = [i(227), i(1), i(248), i(154), i(32), i(162), i(161), i(243), i(90), i(125), i(237), i(229), i(235), i(238), i(239), i(230), i(233), i(3), i(6)], r = function () {}.apply(t, n), r !== undefined && (e.exports = r))
  },
  235: function (e, t, i) {
    var n, r;
    !(n = [i(2), i(1), i(236)], r = function (e, t, i) {
      var n = window.STYLE_PREFIX || "weebly";
      var r = false;
      var o = [];

      function s() {
        if (window.location.href.match(/posted=(.*)$/)) {
          var e = t.parseJSON(decodeURIComponent(window.location.href.match(/posted=(.*)$/)[1].replace(/\+/g, " ")));
          t("form").each(function (i, n) {
            var r = t(n);
            t.each(e, function (e, i) {
              if (typeof i === "object") {
                t.each(i, function (t, i) {
                  r.find("input").each(function (n, r) {
                    if (r.name.replace(/_u\d*/, "") == e + "[" + t + "]" || r.name == e + "[" + t + "]") {
                      if (r.type === "checkbox") {
                        r.checked = 1
                      }
                      else {
                        r.value = i
                      }
                    }
                  })
                })
              }
              else {
                r.find("input,textarea,select,button").each(function (t, o) {
                  if (o.name.replace(/_u\d*/, "") == e || o.name == e) {
                    var s = o.name;
                    if (n[s][0] && n[s][0].type === "radio") {
                      r.find("radio[name=" + s + "]").each(function (e, t) {
                        if (t.value == i) {
                          t.checked = true
                        }
                      })
                    }
                    else {
                      o.value = i
                    }
                  }
                })
              }
            })
          })
        }
        if (window.location.href.match(/form-errors=(.*?)&/) && window.location.href.match(/ucfid%22%3A%22(.*?)%/)) {
          var i = window.location.href.match(/form\-errors=(.*?)&/)[1].split(",");
          var r = window.location.href.match(/ucfid%22%3A%22(.*?)%/)[1];
          var o = t("#form-" + r);
          t.each(i, function (e, i) {
            i = decodeURIComponent(i);
            o.find("input,textarea,select,button").each(function (e, r) {
              if (r.name.replace(/_u\d*/, "") == i || r.name.replace(/.*_u/, "_u") == i || r.name.replace(/\[.*\]$/, "") == i) {
                t(r).addClass("form-input-error").up("." + n + "-form-field").addClass("form-field-error")
              }
            })
          });
          t("#" + r + "-form-parent").after("<div>Please correct the highlighted fields</div>")
        }
        if (window.location.href.match(/success\=1/) && window.location.href.match(/ucfid\=(.*)/)) {
          var r = window.location.href.match(/ucfid\=(.*?)&/)[1];
          var o = t("#form-" + r);
          var s = "Your data was successfully submitted.";
          var a = window.location.href.match(/text=(.*?)&/);
          if (a) {
            s = c(decodeURIComponent(a[1].replace(/\+/g, " ")))
          }
          o.html("<div>" + s + "</div>")
        }
      }

      function a() {
        function i(i) {
          var r = i.origin == location.protocol + location.port + "//" + location.hostname;
          if (!r) {
            if (e.resellerSite && e.configDomain) {
              var o = i.origin == location.protocol + location.port + "//" + e.configDomain;
              if (!o) {
                return
              }
            }
            else {
              return
            }
          }
          var s = e.evalJSON(i.data);
          switch (s.action) {
            case "finished":
              var a = s.data.ucfid;
              var l = t("#form-" + a);
              l.hide();
              var u = t("#" + a + "-msg");
              if (!u.length) {
                u = t('<div id="' + a + '-msg"/>').insertAfter(l)
              }
              u.html(s.data.message);
              u.effect("highlight", {}, 2e3);
              t("body").animate({
                scrollTop: u.offset().top
              }, {
                easing: "easeOutQuart",
                duration: 2e3
              });
              return;
            case "redirect":
              window.location = s.data.location;
              return;
            case "error":
              var c = s.data["error-fields"];
              var a = s.data.ucfid;
              var l = t("#form-" + a);
              l.find("input,textarea,select,button").filter(".form-input-error").each(function (e, i) {
                t(i).removeClass("form-input-error").up("." + n + "-form-field").removeClass("form-field-error")
              });
              t.each(c, function (e, i) {
                l.find("input,textarea,select,button").each(function (e, r) {
                  if (r.name.replace(/_u\d*/, "") == i || r.name.replace(/.*_u/, "_u") == i || r.name.replace(/\[.*\]$/, "") == i) {
                    t(r).addClass("form-input-error").up("." + n + "-form-field").addClass("form-field-error")
                  }
                })
              });
              var u = t("#" + a + "-msg");
              if (!u.length) {
                u = t('<div id="' + a + '-msg"/>').insertAfter(l)
              }
              u.html(s.data.message);
              window.formSubmitted = false;
              return
          }
        }
        t("form").each(function (n, r) {
          var o = t(r);
          var s = o.attr("action") || "";
          var a = window.location.host;
          if (s.match(/formSubmit\.php$/)) {
            if (e.resellerSite != true) {
              s = s.replace(/(.*)\/formSubmit\.php$/, window.location.protocol + "//" + a + "/ajax/apps/formSubmitAjax.php")
            }
            else {
              s = s.replace("formSubmit.php", "formSubmitAjax.php");
              if (s.startsWith("http:") && window.location.protocol == "https:") {
                s = s.replace("http:", "https:")
              }
              t("<input>").attr({
                type: "hidden",
                id: "formLocation",
                name: "formLocation",
                value: window.location.host
              }).appendTo(o)
            }
            if (e.nestedSiteDomain && a !== e.nestedSiteDomain) {
              t("<input>").attr({
                type: "hidden",
                id: "nestedSite",
                name: "nestedSite",
                value: e.nestedSiteDomain
              }).appendTo(o)
            }
            o.attr("action", s);
            o.attr("accept-charset", "UTF-8");
            var l = o.attr("id") + "-target-" + Date.now();
            var u = t('<iframe name="' + l + '"/>').hide().attr("id", l).insertAfter(o);
            var c = u[0];
            o.attr("target", c.id);
            if (!window.postMessage) {
              u.on("load", function () {
                try {
                  var e = (c.contentDocument || c.contentWindow.document).location.href;
                  var t = (c.contentDocument || c.contentWindow.document).body.firstChild.nodeValue;
                  if (e != "about:blank") {
                    i({
                      data: t,
                      source: c.contentWindow
                    })
                  }
                }
                catch (e) {}
              })
            }
          }
        });
        if (window.postMessage) {
          t(window).on("message", function (e) {
            try {
              i(e.originalEvent)
            }
            catch (e) {}
          })
        }
      }

      function l() {
        t("." + n + "-form-instructions").each(function (e, t) {
          i.setupFieldInstructions(t, n)
        })
      }

      function u() {
        t("input[name=" + n + "_approved]").val("approved");
        t(document).off("mousedown", u).off("keydown", u)
      }

      function c(e) {
        var t = document.createElement("div");
        var i = document.createTextNode(e);
        t.appendChild(i);
        return t.innerHTML
      }

      function d() {
        if (e.recaptchaUrl === undefined) {
          return
        }
        t(".recaptcha").each(function (i) {
          if (t(i).data("recaptcha") !== 0) {
            t.getScript(e.recaptchaUrl);
            r = true;
            return false
          }
        })
      }

      function f() {
        t("form").on("click", ".wsite-button", function () {
          var e = t(this);
          var i = e.closest("form");
          var n = i.siblings(".recaptcha");
          if (n.length > 0 && n.data("recaptcha") === 1 && r) {
            p(n, i)
          }
          else {
            m(i)
          }
        })
      }
      var h = {};

      function p(e, t) {
        var i = e.attr("id");
        if (typeof h[i] === "number") {
          window.grecaptcha.reset(h[i]);
          window.grecaptcha.execute(h[i])
        }
        else {
          h[i] = window.grecaptcha.render(i, {
            sitekey: e.data("sitekey"),
            "data-badge": "inline",
            callback: function (e) {
              var n = t.find("input[name=recaptcha_token]");
              if (n.length > 0) {
                n.val(e)
              }
              m(t);
              window.grecaptcha.reset(h[i])
            }
          }, true);
          window.grecaptcha.execute(h[i])
        }
      }

      function m(e) {
        var t = e.id;
        if (o.length > 0) {
          o.forEach(function (e) {
            if (e === t) {
              return
            }
          })
        }
        e.submit();
        o.push(t)
      }
      t(document).ready(function () {
        s();
        l();
        a();
        d();
        f();
        t(document).on("mousedown", u).on("keydown", u)
      })
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  236: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(3)], r = function (e, t) {
      var i = false;
      var n = false;
      var r = {
        createFieldInstructions: function (t) {
          var i = e('<div class="instructions-container">').html(t);
          var n = e('<span class="wsite-instructions-container-caret"/>');
          i.append(n);
          e("body").append(i);
          return i
        },
        setupFieldInstructions: function (t, o) {
          var s = e(t);
          if (!s.html()) {
            return
          }
          if (!i) {
            var a = window.getComputedStyle(document.body);
            n = a.getPropertyValue("overflow") === "hidden" || a.getPropertyValue("overflow-y") === "hidden" || a.getPropertyValue("overflow-x") === "hidden";
            i = true
          }
          if (o == null) {
            o = "wsite"
          }
          var l = s.parents("." + o + "-form-field");
          l.data("form-instruction", {
            instructions: r.createFieldInstructions(t.innerHTML)
          });
          r.createHelpIcon(l)
        },
        createHelpIcon: function (t) {
          var i = t.data("form-instruction");
          var r = i.instructions;
          var o = e('<span class="wsite-instructions-help"/>');
          t.find(".wsite-form-label").append(o);
          var s = function (i) {
            if (i.type === "touchstart" && e.contains(t[0], i.target)) {
              return
            }
            r.hide();
            e(document).off(".formfieldinstructions")
          };
          var a = function () {
            var t = r.find(".wsite-instructions-container-caret");
            var i = window.getComputedStyle(t[0], ":before").getPropertyValue("border-width");
            i = parseInt(i, 10) || 10;
            var a = o.offset();
            var l = o.outerWidth();
            var u = o.outerHeight();
            var c = r.offset();
            var d = r.outerWidth();
            var f = r.outerHeight();
            var h = a.top - f - (i + 5);
            var p = l + a.left - i * 2 - i / 2;
            if (p + d > document.body.clientWidth) {
              p = p - d + l + i * 2 + i / 2;
              if (p < 0) {
                p = 10
              }
            }
            r.removeClass("caret-top caret-bottom");
            var m;
            if (n) {
              m = h < 0
            }
            else {
              m = h < e(document.body).scrollTop()
            }
            if (m) {
              h = h + u + f + (i * 2 + 10);
              r.addClass("caret-top")
            }
            else {
              r.addClass("caret-bottom")
            }
            r.css({
              top: h,
              left: p
            }).show().find(".wsite-instructions-container-caret").css({
              left: a.left - p + i / 2
            });
            setTimeout(function () {
              e(document).on({
                "touchmove.formfieldinstructions": s,
                "touchstart.formfieldinstructions": s
              })
            }, 250)
          };
          o.on({
            mouseover: a,
            mouseout: s,
            touchstart: function (e) {
              e.preventDefault();
              a()
            }
          })
        }
      };
      return r
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  237: function (e, t, i) {
    var n, r;
    !(n = [i(1)], r = function (e) {
      var t = function () {
        var t = function () {
          var t = e(".wsite-view-link-full");
          var i = e(".wsite-view-link-mobile");
          var n = window.location.href || "";
          if (n.indexOf("?") > -1) {
            n += "&"
          }
          else {
            n += "?"
          }
          t.attr("href", n + "view=full");
          i.attr("href", n + "view=mobile")
        };
        t();
        var i = window.History;
        if (!i || !i.enabled) {
          return
        }
        History.Adapter.bind(window, "statechange", t)
      };
      e(document).ready(t);
      var i = window.STYLE_PREFIX || "weebly";
      var n = function () {
        for (var e = 0; e < document.styleSheets.length; e++) {
          try {
            if (document.styleSheets[e].title == i + "-theme-css") {
              var t = document.styleSheets[e];
              var n = t.cssRules || t.rules;
              return n && n.length > 0
            }
          }
          catch (e) {}
        }
        return false
      };
      var r = function (e) {
        if (n()) {
          e()
        }
        else {
          var t = setInterval(function () {
            if (n()) {
              clearInterval(t);
              e()
            }
          }, 200)
        }
      };
      if (!window.whenThemeCSSLoaded) {
        window.whenThemeCSSLoaded = r
      }
      if (!window.isThemeCSSLoaded) {
        window.isThemeCSSLoaded = n
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  238: function (e, t, i) {
    var n, r;
    !(n = [i(1)], r = function (e) {
      function t() {
        e("#wsite-header-search-form").on("click", "span.wsite-search-button", function (t) {
          e(t.delegateTarget).submit()
        }).on("submit", function (e) {
          return document.body.className.indexOf("wsite-page-weebly/apps/preview") === -1
        });
        e("form.wsite-search-element-form").on("click", "span.wsite-search-element-submit", function (t) {
          e(t.delegateTarget).submit()
        }).on("submit", function () {
          return document.body.className.indexOf("wsite-page-weebly/apps/preview") === -1
        })
      }
      e(document).ready(t)
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  239: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(56), i(241), i(102)], r = function (e, t, i, n) {
      var r = function () {
        var n = e(".wsite-section[data-video_type]");
        var r = false;
        var o = !document.location.pathname.match(/preview.php$/) || t.getURLParameter("view") !== "mobile";
        n.each(function (t, n) {
          var s = e(n);
          var a = s.data();
          i.applyBackgroundVideo(s, a, r, o)
        })
      };
      var o = function () {
        if (!n.prototype.isSupported()) {
          document.documentElement.className += " wsite-sr-disabled";
          return
        }
        e(".wsite-section-effect-reveal").each(function () {
          var t = e(this);
          var n = {
            reveal: {}
          };
          i.applyBackgroundEffects(t, n, false)
        })
      };
      var s = function () {
        e(".wsite-section-effect-parallax").each(function () {
          var t = e(this);
          var n = {
            parallax: {}
          };
          i.applyBackgroundEffects(t, n, false)
        })
      };
      e(document).ready(function () {
        if (e(".wsite-section").length) {
          r();
          s();
          o()
        }
      })
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  240: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(3), i(206)], r = function (e, t) {
      var i = "UploadPlayer";
      var n = "uploadplayer";
      var r = n + "-container";
      var o = n + "-shield";
      var s = n + "-player";
      var a = "/weebly/libraries/videojs/video-js.swf";
      var l = 1.77777777777778;
      var u = "objectFit" in document.documentElement.style;
      var c = {
        player: null,
        init: function i(n, r) {
          window.videojs.options.flash.swf = a;
          this.$node = e(n);
          this.options = t.chain(r).pick(["video_url", "background_url", "autoplay", "loop", "mute"]).defaults({
            autoplay: true,
            loop: true,
            mute: true,
            controls: false,
            techOrder: ["html5", "flash"],
            preload: "none"
          }).value();
          this.ID = this.$node.data("section") || (new Date).getTime();
          this.createBackgroundVideo();
          return this
        },
        createBackgroundVideo: function () {
          var i = s + "-" + this.ID;
          var a = window.videojs.players[i];
          if (a) {
            a.dispose()
          }
          var l = r + "-" + this.ID;
          var c = e("<div/>", {
            class: r,
            id: l
          });
          var d = e("<div/>", {
            class: o
          });
          var f = e("<video>", {
            class: s + " video-js",
            id: i,
            poster: this.options.background_url,
            append: e("<source>", {
              src: this.options.video_url,
              type: "video/mp4"
            })
          });
          c.append(f, d);
          this.$video = f;
          this.$container = c;
          this.$node.append(c);
          this.player = window.videojs(i, this.options);
          this.player.muted(this.options.mute);
          if (!u) {
            this.$video.addClass("js-no-object-fit");
            this.cover();
            e(window).on("resize." + n, t.throttle(this.cover.bind(this), 25))
          }
        },
        destroy: function () {
          this.player.dispose();
          this.$node.removeData(i);
          this.$container.remove();
          this.$node = null;
          this.$container = null;
          if (!u) {
            e(window).off("resize." + n)
          }
        },
        cover: function () {
          var e = this.$node.outerHeight();
          var t = this.$node.outerWidth();
          this.size(e, t);
          this.center(e, t)
        },
        size: function (e, t) {
          var i = {};
          var n = e / t;
          var r = this.$video.outerHeight();
          var o = this.$video.outerWidth();
          var s = r / o;
          if (s >= n) {
            i.width = "100%";
            i.height = ""
          }
          else {
            i.width = "";
            i.height = e + "px"
          }
          this.$video.css(i)
        },
        center: function (e, t) {
          var i = {};
          var n = this.$video.outerHeight();
          var r = this.$video.outerWidth();
          if (Math.ceil(n) > Math.ceil(e)) {
            i.marginTop = -(n - e) / 2;
            i.marginLeft = ""
          }
          if (Math.ceil(r) > Math.ceil(t)) {
            i.marginTop = "";
            i.marginLeft = -(r - t) / 2
          }
          this.$video.css(i)
        }
      };
      e.fn[i] = function (t) {
        return this.each(function () {
          if (e.data(this, i)) {
            return
          }
          var n = Object.create(c);
          n.init(this, t);
          e.data(this, i, n)
        })
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  241: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(3), i(167), i(102), i(170), i(168), i(240)], r = function (e, t, i, n) {
      var r;
      var o = {
        applyBackgroundVideo: function (e, t, n, r) {
          if (!e) {
            return
          }
          if (r) {
            e.css("minHeight", 270)
          }
          e.data("properties", t);
          if (!r && !n || new i(window.navigator.userAgent).mobile()) {
            return
          }
          switch (t.video_type) {
            case "youtube":
              this.initYoutubeVideo(e, t);
              break;
            case "vimeo":
              this.initVimeoVideo(e, t);
              break;
            case "upload":
              this.initUploadedVideo(e, t);
              break;
            case "gallery":
              this.initGalleryVideo(e, t);
              break
          }
          e.data("has-video", true)
        },
        initYoutubeVideo: function (e, t) {
          e.YTPlayer({
            videoId: t.video_id,
            repeat: t.loop,
            mute: t.mute,
            fitToBackground: false,
            pauseOnScroll: false,
            playerVars: {
              autoplay: t.autoplay,
              controls: 0,
              showinfo: 0,
              modestbranding: 1,
              wmode: "transparent",
              branding: 0,
              rel: 0,
              autohide: 0,
              origin: window.location.origin
            }
          })
        },
        initVimeoVideo: function (e, t) {
          e.VimeoPlayer({
            videoId: t.video_id,
            loop: t.loop,
            mute: t.mute,
            autoplay: t.autoplay
          })
        },
        initUploadedVideo: function (e, t) {
          e.UploadPlayer(t)
        },
        initGalleryVideo: function (e, t) {
          e.UploadPlayer(t)
        },
        toggleVideoBackground: function (e) {
          if (!e) {
            return
          }
          if (e.data("ytPlayer")) {
            e.find('[id^="ytplayer"]').toggle()
          }
          else if (e.data("VimeoPlayer")) {
            e.find('[id^="vimeoplayer"]').toggle()
          }
          else if (e.data("UploadPlayer")) {
            e.find('[id^="uploadplayer"]').toggle()
          }
        },
        destroyVideoBackground: function (e) {
          if (!e) {
            return
          }
          if (e.data("ytPlayer")) {
            e.data("ytPlayer").destroy()
          }
          else if (e.data("VimeoPlayer")) {
            e.data("VimeoPlayer").destroy()
          }
          else if (e.data("UploadPlayer")) {
            e.data("UploadPlayer").destroy()
          }
          e.removeData("has-video")
        },
        applyBackgroundEffects: function (o, s, a) {
          Object.keys(s).forEach(function (l) {
            var u = s[l];
            if (t.isObject(u["css"]) && !t.isArray(u["css"])) {
              Object.keys(u["css"]).forEach(function (e) {
                o.css(e, u["css"][e])
              })
            }
            if (t.isArray(u["classes"])) {
              u["classes"].forEach(function (e) {
                o.addClass(e)
              })
            }
            switch (l) {
              case "parallax":
                var c = new i(window.navigator.userAgent);
                if (c.mobile() || c.tablet()) {
                  o.css("background-attachment", "")
                }
                break;
              case "reveal":
                if (!r) {
                  r = n()
                }
                var d = a ? o.find(".weebly-content-area") : o.find(".wsite-section-elements");
                var f = a ? d.children(':not(".wsite-spacer-li")') : d.children(':not(".wsite-spacer")');
                if (f.length === 0) {
                  break
                }
                f.each(function (t, i) {
                  var n = e(i);
                  if (a && n.attr("id") !== "empty-message") {
                    n.data("before-reveal-style", i.style)
                  }
                  n.addClass("sr-nodelist")
                });
                var h = d[0].querySelectorAll(".sr-nodelist");
                var p = {
                  opacity: 0,
                  scale: 1,
                  easing: "ease-in",
                  afterReveal: function (t) {
                    var i = e(t);
                    if (a) {
                      if (i.data("before-reveal-style")) {
                        t.style = i.data("before-reveal-style");
                        i.removeData("before-reveal-style")
                      }
                      i.removeAttr("data-sr-id")
                    }
                    i.removeClass("sr-nodelist")
                  },
                  sequenceInterval: 100
                };
                if (o.hasClass("wsite-header-section")) {
                  p = t.extend({
                    duration: 700,
                    delay: 800
                  }, p)
                }
                else {
                  p = t.extend({
                    duration: 300,
                    delay: 300,
                    origin: "top",
                    distance: "10px"
                  }, p)
                }
                var m = t.defaults({}, p);
                r.reveal(h, m, m.sequenceInterval);
                break
            }
          })
        },
        getSectionElement: function (t) {
          return e('.wsite-section[data-section="' + t + '"]')
        }
      };
      return o
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  243: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(32)], r = function (e) {
      (function (e, t) {
        e.effects.effect.slide = function (t, i) {
          var n = e(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height"],
            o = e.effects.setMode(n, t.mode || "show"),
            s = o === "show",
            a = t.direction || "left",
            l = a === "up" || a === "down" ? "top" : "left",
            u = a === "up" || a === "left",
            c, d = {};
          e.effects.save(n, r);
          n.show();
          var f = t.wrapper;
          if (f) {
            f = e(f).show();
            if (!/relative|absolute/.test(n.css("position"))) {
              n.css("position", "relative")
            }
          }
          else {
            f = e.effects.createWrapper(n)
          }
          f.css("overflow", "hidden");
          var c = t.distance || (l == "top" ? n.height() ? n.outerHeight(true) : f.height() : n.width() ? n.outerWidth(true) : f.width());
          if (s) {
            n.css(l, u ? isNaN(c) ? "-" + c : -c : c)
          }
          d[l] = (s ? u ? "+=" : "-=" : u ? "-=" : "+=") + c;
          n.animate(d, {
            queue: false,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
              if (o === "hide") {
                n.hide()
              }
              e.effects.restore(n, r);
              if (t.wrapper) {
                f.css("overflow", "");
                if (o == "hide") {
                  f.hide()
                }
              }
              else {
                e.effects.removeWrapper(n)
              }
              i()
            }
          })
        }
      })(e)
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  247: function (e, t, i) {
    (function (t) {
      e.exports = t["platformElementRequire"] = i(204)
    }).call(t, function () {
      return this
    }())
  },
  248: function (e, t, i) {
    var n = i(1);
    (function (e, t, i) {
      var n = ["top", "right", "bottom", "left", "opacity", "height", "width"],
        r = ["top", "right", "bottom", "left"],
        o = ["-webkit-", "-moz-", "-o-", ""],
        s = ["avoidTransforms", "useTranslate3d", "leaveTransforms"],
        a = /^([+-]=)?([\d+-.]+)(.*)$/,
        l = /([A-Z])/g,
        u = {
          secondary: {},
          meta: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        c = "px",
        d = "jQe",
        f = "cubic-bezier(",
        h = ")",
        p = null,
        m = false;
      var v = document.body || document.documentElement,
        g = v.style,
        y = "webkitTransitionEnd oTransitionEnd transitionend",
        b = g.WebkitTransition !== undefined || g.MozTransition !== undefined || g.OTransition !== undefined || g.transition !== undefined,
        w = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix,
        T = w;
      if (e.expr && e.expr.filters) {
        p = e.expr.filters.animated;
        e.expr.filters.animated = function (t) {
          return e(t).data("events") && e(t).data("events")[y] ? true : p.call(this, t)
        }
      }

      function S(e) {
        return e.match(/\D+$/)
      }

      function _(e, t, i, n) {
        if (i == "d") return;
        if (!E(e)) return;
        var r = a.exec(t),
          o = e.css(i) === "auto" ? 0 : e.css(i),
          s = typeof o == "string" ? k(o) : o,
          l = typeof t == "string" ? k(t) : t,
          u = n === true ? 0 : s,
          c = e.is(":hidden"),
          d = e.translation();
        if (i == "left") u = parseInt(s, 10) + d.x;
        if (i == "right") u = parseInt(s, 10) + d.x;
        if (i == "top") u = parseInt(s, 10) + d.y;
        if (i == "bottom") u = parseInt(s, 10) + d.y;
        if (!r && t == "show") {
          u = 1;
          if (c) e.css({
            display: "block",
            opacity: 0
          })
        }
        else if (!r && t == "hide") {
          u = 0
        }
        if (r) {
          var f = parseFloat(r[2]);
          if (r[1]) f = (r[1] === "-=" ? -1 : 1) * f + parseInt(u, 10);
          return f
        }
        else {
          return u
        }
      }

      function M(e, t, i) {
        return (i === true || T === true && i !== false) && w ? "translate3d(" + e + "px, " + t + "px, 0)" : "translate(" + e + "px," + t + "px)"
      }

      function C(t, i, n, o, s, a, l, c) {
        var f = t.data(d),
          h = f && !A(f) ? f : e.extend(true, {}, u),
          p = s,
          m = e.inArray(i, r) > -1;
        if (m) {
          var v = h.meta,
            g = k(t.css(i)) || 0,
            y = i + "_o";
          p = s - g;
          v[i] = p;
          v[y] = t.css(i) == "auto" ? 0 + p : g + p || 0;
          h.meta = v;
          if (l && p === 0) {
            p = 0 - v[y];
            v[i] = p;
            v[y] = 0
          }
        }
        return t.data(d, P(t, h, i, n, o, p, a, l, c))
      }

      function P(e, t, i, n, r, s, a, l, u) {
        var c = false,
          d = a === true && l === true;
        t = t || {};
        if (!t.original) {
          t.original = {};
          c = true
        }
        t.properties = t.properties || {};
        t.secondary = t.secondary || {};
        var f = t.meta,
          h = t.original,
          p = t.properties,
          m = t.secondary;
        for (var v = o.length - 1; v >= 0; v--) {
          var g = o[v] + "transition-property",
            y = o[v] + "transition-duration",
            b = o[v] + "transition-timing-function";
          i = d ? o[v] + "transform" : i;
          if (c) {
            h[g] = e.css(g) || "";
            h[y] = e.css(y) || "";
            h[b] = e.css(b) || ""
          }
          m[i] = d ? M(f.left, f.top, u) : s;
          p[g] = (p[g] ? p[g] + "," : "") + i;
          p[y] = (p[y] ? p[y] + "," : "") + n + "ms";
          p[b] = (p[b] ? p[b] + "," : "") + r
        }
        return t
      }

      function x(e) {
        for (var t in e) {
          if ((t == "width" || t == "height") && (e[t] == "show" || e[t] == "hide" || e[t] == "toggle")) {
            return true
          }
        }
        return false
      }

      function A(e) {
        for (var t in e) {
          return false
        }
        return true
      }

      function k(e) {
        return parseFloat(e.replace(S(e), ""))
      }

      function E(e) {
        var t = true;
        e.each(function (e, i) {
          t = t && i.ownerDocument;
          return t
        });
        return t
      }

      function I(t, i, r) {
        if (!E(r)) {
          return false
        }
        var o = e.inArray(t, n) > -1;
        if ((t == "width" || t == "height" || t == "opacity") && parseFloat(i) === parseFloat(r.css(t))) o = false;
        return o
      }
      e.extend({
        toggle3DByDefault: function () {
          return T = !T
        },
        toggleDisabledByDefault: function () {
          return m = !m
        }
      });
      e.fn.translation = function () {
        if (!this[0]) {
          return null
        }
        var e = this[0],
          t = window.getComputedStyle(e, null),
          i = {
            x: 0,
            y: 0
          };
        if (t) {
          for (var n = o.length - 1; n >= 0; n--) {
            var r = t.getPropertyValue(o[n] + "transform");
            if (r && /matrix/i.test(r)) {
              var s = r.replace(/^matrix\(/i, "").split(/, |\)$/g);
              i = {
                x: parseInt(s[4], 10),
                y: parseInt(s[5], 10)
              };
              break
            }
          }
        }
        return i
      };
      e.fn.animate = function (i, n, a, l) {
        i = i || {};
        var u = !(typeof i["bottom"] !== "undefined" || typeof i["right"] !== "undefined"),
          p = e.speed(n, a, l),
          v = this,
          g = 0,
          w = function () {
            g--;
            if (g === 0) {
              if (typeof p.complete === "function") {
                p.complete.apply(v, arguments)
              }
            }
          },
          T = typeof i["avoidCSSTransitions"] !== "undefined" ? i["avoidCSSTransitions"] : m;
        if (T === true || !b || A(i) || x(i) || p.duration <= 0 || e.fn.animate.defaults.avoidTransforms === true && i["avoidTransforms"] !== false) {
          return t.apply(this, arguments)
        }
        return this[p.queue === true ? "queue" : "each"](function () {
          var n = e(this),
            a = e.extend({}, p),
            l = function (t) {
              var s = n.data(d) || {
                  original: {}
                },
                a = {};
              if (t.eventPhase != 2) return;
              if (i.leaveTransforms !== true) {
                for (var l = o.length - 1; l >= 0; l--) {
                  a[o[l] + "transform"] = ""
                }
                if (u && typeof s.meta !== "undefined") {
                  for (var f = 0, h; h = r[f]; ++f) {
                    a[h] = s.meta[h + "_o"] + c;
                    e(this).css(h, a[h])
                  }
                }
              }
              n.unbind(y).css(s.original).css(a).data(d, null);
              if (i.opacity === "hide") {
                n.css({
                  display: "none",
                  opacity: ""
                })
              }
              w.call(this)
            },
            m = {
              bounce: f + "0.0, 0.35, .5, 1.3" + h,
              linear: "linear",
              swing: "ease-in-out",
              easeInQuad: f + "0.550, 0.085, 0.680, 0.530" + h,
              easeInCubic: f + "0.550, 0.055, 0.675, 0.190" + h,
              easeInQuart: f + "0.895, 0.030, 0.685, 0.220" + h,
              easeInQuint: f + "0.755, 0.050, 0.855, 0.060" + h,
              easeInSine: f + "0.470, 0.000, 0.745, 0.715" + h,
              easeInExpo: f + "0.950, 0.050, 0.795, 0.035" + h,
              easeInCirc: f + "0.600, 0.040, 0.980, 0.335" + h,
              easeInBack: f + "0.600, -0.280, 0.735, 0.045" + h,
              easeOutQuad: f + "0.250, 0.460, 0.450, 0.940" + h,
              easeOutCubic: f + "0.215, 0.610, 0.355, 1.000" + h,
              easeOutQuart: f + "0.165, 0.840, 0.440, 1.000" + h,
              easeOutQuint: f + "0.230, 1.000, 0.320, 1.000" + h,
              easeOutSine: f + "0.390, 0.575, 0.565, 1.000" + h,
              easeOutExpo: f + "0.190, 1.000, 0.220, 1.000" + h,
              easeOutCirc: f + "0.075, 0.820, 0.165, 1.000" + h,
              easeOutBack: f + "0.175, 0.885, 0.320, 1.275" + h,
              easeInOutQuad: f + "0.455, 0.030, 0.515, 0.955" + h,
              easeInOutCubic: f + "0.645, 0.045, 0.355, 1.000" + h,
              easeInOutQuart: f + "0.770, 0.000, 0.175, 1.000" + h,
              easeInOutQuint: f + "0.860, 0.000, 0.070, 1.000" + h,
              easeInOutSine: f + "0.445, 0.050, 0.550, 0.950" + h,
              easeInOutExpo: f + "1.000, 0.000, 0.000, 1.000" + h,
              easeInOutCirc: f + "0.785, 0.135, 0.150, 0.860" + h,
              easeInOutBack: f + "0.680, -0.550, 0.265, 1.550" + h
            },
            v = {},
            b = m[a.easing || "swing"] ? m[a.easing || "swing"] : a.easing || "swing";
          for (var T in i) {
            if (e.inArray(T, s) === -1) {
              var S = e.inArray(T, r) > -1,
                M = _(n, i[T], T, S && i.avoidTransforms !== true);
              if (i.avoidTransforms !== true && I(T, M, n)) {
                C(n, T, a.duration, b, S && i.avoidTransforms === true ? M + c : M, S && i.avoidTransforms !== true, u, i.useTranslate3d)
              }
              else {
                v[T] = i[T]
              }
            }
          }
          n.unbind(y);
          var P = n.data(d);
          if (P && !A(P) && !A(P.secondary)) {
            g++;
            n.css(P.properties);
            var x = P.secondary;
            setTimeout(function () {
              n.bind(y, l).css(x)
            })
          }
          else {
            a.queue = false
          }
          if (!A(v)) {
            g++;
            t.apply(n, [v, {
              duration: a.duration,
              easing: e.easing[a.easing] ? a.easing : e.easing.swing ? "swing" : "linear",
              complete: w,
              queue: a.queue
            }])
          }
          return true
        })
      };
      e.fn.animate.defaults = {};
      e.fn.stop = function (t, n, r) {
        if (!b) return i.apply(this, [t, n]);
        if (t) this.queue([]);
        this.each(function () {
          var s = e(this),
            a = s.data(d);
          if (a && !A(a)) {
            var u, f = {};
            if (n) {
              f = a.secondary;
              if (!r && typeof a.meta["left_o"] !== undefined || typeof a.meta["top_o"] !== undefined) {
                f["left"] = typeof a.meta["left_o"] !== undefined ? a.meta["left_o"] : "auto";
                f["top"] = typeof a.meta["top_o"] !== undefined ? a.meta["top_o"] : "auto";
                for (u = o.length - 1; u >= 0; u--) {
                  f[o[u] + "transform"] = ""
                }
              }
            }
            else if (!A(a.secondary)) {
              var h = window.getComputedStyle(s[0], null);
              if (h) {
                for (var p in a.secondary) {
                  if (a.secondary.hasOwnProperty(p)) {
                    p = p.replace(l, "-$1").toLowerCase();
                    f[p] = h.getPropertyValue(p);
                    if (!r && /matrix/i.test(f[p])) {
                      var m = f[p].replace(/^matrix\(/i, "").split(/, |\)$/g);
                      f["left"] = parseFloat(m[4]) + parseFloat(s.css("left")) + c || "auto";
                      f["top"] = parseFloat(m[5]) + parseFloat(s.css("top")) + c || "auto";
                      for (u = o.length - 1; u >= 0; u--) {
                        f[o[u] + "transform"] = ""
                      }
                    }
                  }
                }
              }
            }
            s.unbind(y);
            s.css(a.original).css(f).data(d, null)
          }
          else {
            i.apply(s, [t, n])
          }
        });
        return this
      };
      if (!(RegExp(" AppleWebKit/").test(navigator.userAgent) && RegExp(" Mobile/").test(navigator.userAgent))) {
        e.toggleDisabledByDefault()
      }
    })(n, n.fn.animate, n.fn.stop)
  },
  251: function (e, t) {
    e.exports = function () {
      throw new Error("define cannot be used indirect")
    }
  },
  306: function (e, t, i) {
    var n, r;
    !(n = [i(2), i(6), i(63), i(3), i(600), i(1), i(32), i(311)], r = function (e, t, n, r, o, s) {
      window.getCartCount = function () {
        var e = le() ? 0 : "-";
        return e
      };
      var a = null;
      window.getCartNavElement = function () {
        return a
      };
      window.reportCartNavElement = function () {
        return
      };
      var l;
      var u;

      function c() {
        if (le()) {
          if (!l) {
            l = i(149);
            u = i(605)
          }
          return true
        }
        return false
      }
      var d;
      var f;
      var h;
      var p = window.STYLE_PREFIX || "weebly";
      var m;
      var v = 300;
      var g = p + "-nav-handle";
      var y = p + "-nav-";
      var b = p + "-menu-default";
      var w = p + "-menu-item-wrap";
      var T = p + "-menu-item";
      var S = p + "-menu-wrap";
      var _ = p + "-menu";
      var M = p + "-menu-subitem-wrap";
      var C = p + "-menu-subitem";
      var P = p + "-nav-current";
      var x = p + "-menus";
      var A = p + "-nav-more-a";
      var k = p + "-nav-more";
      var E = p + "-nav-cart-a";
      var I = p + "-nav-cart";
      var D = p + "-nav-cart-num";
      var F = p + "-nav-login-a";

      function H(e) {
        var t = e.closest("." + b);
        if (t.length) {
          return t
        }
        return e.parent()
      }

      function R(e) {
        var t = e.find("." + T);
        if (t.length) {
          return t
        }
        return e.find("a").first()
      }

      function B(e) {
        var t = e.find("." + w);
        if (t.length) {
          return t
        }
        t = e.find("." + g);
        if (t.length) {
          return t
        }
        return e.find("li")
      }

      function j(e) {
        var t = e.closest("." + S);
        if (t.length) {
          return t
        }
        return e.parent()
      }

      function G(e) {
        return e.find("." + S).first()
      }

      function O(e) {
        var t = e.find("." + M);
        if (t.length) {
          return t
        }
        return e.find("li")
      }

      function N(e) {
        var t = e.find("." + C);
        if (t.length) {
          return t
        }
        return e.find("a")
      }
      window.initPublishedFlyoutMenus = function (e, t, i, n, r, o, a) {
        h = t;
        m = a;
        ae(o);
        d = te();
        if (e.length > 0) {
          var l = function () {
            f = n;
            var t = s("<div>", {
              id: x
            }).appendTo("body");
            var i = K(e[0].id);
            if (i) {
              window.navFlyoutMenu = new window.FlyoutMenu(H(i), {
                relocate: t,
                aLiId: n
              });
              L(e)
            }
            else if (e[0].isCart) {
              var r = s("." + b);
              if (r.length) {
                window.navFlyoutMenu = new window.FlyoutMenu(r[0], {
                  relocate: t,
                  aLiId: n
                })
              }
              L(e)
            }
          };
          if (r) {
            l()
          }
          else {
            J(l)
          }
        }
        window.refreshPublishedFlyoutMenus = function () {
          L(e)
        };
        s(".wsite-logo img").on("load", window.refreshPublishedFlyoutMenus);
        s(window).on("load", window.refreshPublishedFlyoutMenus)
      };
      window.flyoutMenusRefreshable = true;
      window.initEditorFlyoutMenus = function (e, t) {
        f = e;
        m = t;
        ae(t.templates);
        J(function () {
          t();

          function t() {
            var t = window.getTopLevelSummary();
            if (t.length > 0) {
              var i = K(t[0].id);
              if (i) {
                var n = H(i);
                if (!n.is("table,tbody,thead,tr")) {
                  window.navFlyoutMenu = new window.FlyoutMenu(n, {
                    relocate: "#" + x,
                    aLiId: e
                  });
                  d = te();
                  L(t)
                }
                else {
                  window.navFlyoutMenu = null
                }
              }
              else if (t[0].isCart) {
                var r = s("." + b);
                if (r.length) {
                  window.navFlyoutMenu = new window.FlyoutMenu(r[0], {
                    relocate: "#" + x,
                    aLiId: e
                  })
                }
                L(t)
              }
              else {
                window.navFlyoutMenu = null
              }
            }
          }
        })
      };
      window.refreshNavCondense = function (t) {
        if (typeof t === "object") {
          r.extend(e, t)
        }
        if (window.navFlyoutMenu && !(e.view && e.view.isMobileView)) {
          L(window.getTopLevelSummary())
        }
      };
      window.disableFlyouts = false;
      window.FlyoutMenu = function (e, t) {
        var i = this;
        i.mouseoverItems = [];
        e = s(e);
        t = t || {};
        var n = "ontouchstart" in window;
        var r = (t.delay || .5) * 1e3;
        var o = t.relocate ? s(t.relocate) : false;
        var a;

        function d(e) {
          e.css("position", "relative");
          R(e).add(N(e)).css("position", "relative");
          var a = false;
          var d = false;
          var f = false;
          var h = 0;
          var p = false;
          var m = false;
          var g = false;
          var y;
          var b;

          function w(e) {
            if (n && a) {
              e.preventDefault()
            }
          }

          function T() {
            if (window.disableFlyouts) {
              return false
            }
            i.mouseoverItems.push(e);
            h++;
            f = true;
            if (!d && !a) {
              if (b) {
                e.data("hasChildren", true);
                q(e).each(function (e, t) {
                  if (t._flyoutmenu_contract) {
                    t._flyoutmenu_contract()
                  }
                });
                M();
                e.data("isExpanded", true)
              }
            }
          }

          function S() {
            if (window.disableFlyouts) {
              return false
            }
            f = false;
            if (d) {
              var t = h;
              setTimeout(function () {
                if (h == t && d && !a) {
                  C();
                  e.data("isExpanded", false)
                }
              }, r)
            }
          }

          function _() {
            if (window.disableFlyouts) {
              return false
            }
            h++
          }

          function M() {
            a = true;
            var i = {
              wrapper: y,
              duration: v,
              complete: function () {
                a = false;
                d = true;
                if (!f) {
                  C()
                }
                else {
                  e[0]._flyoutmenu_contract = C;
                  e[0]._flyoutmenu_hide = function () {
                    a = false;
                    d = false;
                    f = false;
                    e[0]._flyoutmenu_contract = null;
                    e[0]._flyoutmenu_hide = null;
                    y.hide()
                  }
                }
                if (c()) {
                  var t = s(this);
                  var i = t.offset();
                  l.trigger(u.EVENTS.SUBNAV_SHOWN, {
                    top: i.top,
                    left: i.left,
                    width: t.outerWidth(),
                    height: t.outerHeight()
                  })
                }
              }
            };
            var n = X(e);
            y.css("left", -1e4);
            y.show();
            var r = y.offsetParent();
            var o = r.is("body") ? {
              top: 0,
              left: 0
            } : r.offset();
            b.show();
            var h;
            if (V(e, true, t.aLiId)) {
              p = false;
              y.css("top", -o.top + n[0].top);
              h = y.outerWidth();
              if (n[1].left + h > s("body").outerWidth()) {
                m = false;
                y.css("left", -o.left + n[0].left - h);
                i.direction = "right";
                b.show("slide", i)
              }
              else {
                m = true;
                y.css("left", -o.left + n[1].left);
                i.direction = "left";
                b.show("slide", i)
              }
            }
            else {
              p = true;
              y.css("top", -o.top + n[1].top);
              h = y.outerWidth();
              var w = y.outerHeight();
              if (n[0].left + h > s("body").outerWidth()) {
                y.css("left", -o.left + n[1].left - h)
              }
              else {
                y.css("left", -o.left + n[0].left)
              }
              var T;
              if (e.parentsUntil("body").filter(function () {
                  return s(this).css("position") === "fixed"
                }).length > 0) {
                var S = s(window);
                T = S.height() + S.scrollTop()
              }
              else {
                T = s(document).height()
              }
              var _ = parseInt(y.css("top"), 10) - w - e.outerHeight();
              if (n[1].top + w > T && _ > 0) {
                y.css("top", _ + "px");
                i.direction = "down";
                g = true
              }
              else {
                i.direction = "up";
                g = false
              }
              b.hide();
              b.show("slide", i)
            }
          }

          function C(t) {
            if (window.disableFlyouts || !e.parent().length) {
              return
            }
            if (t) {
              f = false
            }
            a = true;
            e[0]._flyoutmenu_contract = null;
            e[0]._flyoutmenu_hide = null;
            var i = {
              wrapper: y,
              duration: v,
              complete: function () {
                a = false;
                d = false;
                if (f) {
                  M()
                }
                if (c()) {
                  l.trigger(u.EVENTS.SUBNAV_HIDDEN)
                }
              }
            };
            if (p) {
              if (g) {
                i.direction = "down"
              }
              else {
                i.direction = "up"
              }
              b.hide("slide", i)
            }
            else {
              if (m) {
                i.direction = "left";
                b.hide("slide", i)
              }
              else {
                i.direction = "right";
                b.hide("slide", i)
              }
            }
          }
          b = Y(e);
          if (b) {
            y = j(b);
            y.css("position", "absolute");
            y.hide();
            if (o) {
              y.on("mouseover", T);
              y.on("mouseout", S);
              y.on("click", function (e) {
                w(e)
              })
            }
            else {
              y.on("mouseover", _);
              y.on("click", function (e) {
                w(e)
              })
            }
          }
          e.on("mouseover", T);
          e.on("mouseout", S);
          e.on("click", function (e) {
            w(e)
          });
          e[0]._flyoutmenu_destroy = function (t) {
            e.off("mouseover", T);
            e.off("mouseout", S);
            e.off("click", w);
            if (y) {
              if (o) {
                y.off("mouseover", T);
                y.off("mouseout", S);
                y.off("click", w)
              }
              else {
                y.off("mouseover", _);
                y.off("click", w)
              }
              O(y).each(function () {
                this._flyoutmenu_destroy()
              });
              if (t) {
                y.detach()
              }
              var i = y;
              y = null;
              b = null;
              return i
            }
          };
          e[0]._get_sublist = function () {
            return b
          }
        }
        this.contract = function () {
          a.each(function (e, t) {
            if (t._flyoutmenu_contract) {
              t._flyoutmenu_contract(true)
            }
          })
        };
        this.hideSubmenus = function () {
          a.each(function (e, t) {
            if (t._flyoutmenu_hide) {
              t._flyoutmenu_hide()
            }
          })
        };
        this.destroy = function () {
          a.each(function (e, t) {
            if (t._flyoutmenu_destroy) {
              t._flyoutmenu_destroy()
            }
          })
        };
        this.addItem = function (e) {
          e = s(e);
          var t = z(e);
          if (t.length) {
            d(t);
            var i = Y(t);
            if (i) {
              O(i).each(function () {
                d(s(this))
              })
            }
            if (o && i) {
              o.append(j(i))
            }
            a = a.add(t);
            f()
          }
        };
        this.removeItem = function (e) {
          e = s(e);
          var t = z(e);
          if (t.length) {
            if (t[0]._flyoutmenu_destroy) {
              t[0]._flyoutmenu_destroy(true)
            }
            t.remove();
            a = a.not(t);
            f()
          }
        };
        this.getMainList = function () {
          return e
        };

        function f() {
          var t = 1;
          W(e).each(function () {
            this.className = this.className.replace(new RegExp(y + "\\d+"), "");
            var e = s(this);
            if (e.css("display") != "none") {
              e.addClass(y + t);
              t++
            }
          })
        }
        this.writeOrderingClassNames = f;
        a = U(e);
        a.each(function () {
          d(s(this))
        });
        f();
        if (o) {
          W(e).each(function (e, t) {
            var i = Y(s(t));
            if (i) {
              o.append(j(i))
            }
          })
        }
      };

      function L(t) {
        if (!window.navFlyoutMenu) {
          return
        }
        var i = window.currentPage || h;
        var r = window.navFlyoutMenu.getMainList();
        var l = r.children();
        var u = s("body").find("#" + F);
        var c = s("body").find("#" + E);
        var f = m && m["hasCustomMembership"];
        var p = m && m["hasCustomMinicart"];
        var v = l.filter(function () {
          return !!s(this).find("#" + E).length
        });
        if (!v.length) {
          v = undefined
        }
        var b = window.getCartCount();
        var w = window.location.host;
        var T = window.location.pathname;
        var _ = window._W.stl("javascript.cartText") + " (<span id='" + D + "'></span>)";
        var M;
        if (w.indexOf(".checkout.weebly.com") > -1 || w.indexOf(".checkout.editmysite.com") > -1 || T.indexOf("store/checkout") > -1 || typeof e == "object" && e.EDITOR && !e.COMMERCE_ENABLED || (typeof e != "object" || !e.Commerce || typeof e.Commerce.hasCart != "boolean") || typeof e == "object" && e.Commerce && e.Commerce.hasCart === false) {
          if (v) {
            v.remove();
            l = r.children();
            window.navFlyoutMenu.writeOrderingClassNames()
          }
        }
        else {
          if (!v) {
            if (p) {
              c.html(_);
              v = undefined
            }
            else {
              v = ie(_)
            }
            M = p ? c : R(v);
            M.attr("id", E).css("position", "relative");
            if (le()) {
              if (!n.chromeless) {
                M = p ? c.parent() : z(v);
                M.attr("data-content", window._W.utl("javascript.editor.cartNotification")).popover({
                  trigger: "hover",
                  placement: "bottom",
                  container: "#_editor-ui",
                  delay: {
                    show: 500,
                    hide: 100
                  }
                })
              }
            }
            M = p ? c.parent() : z(v);
            M.addClass(I).css("position", "relative");
            a = p ? c : v;
            window.reportCartNavElement();
            if (!p) {
              r.append(v);
              l = r.children();
              window.navFlyoutMenu.writeOrderingClassNames()
            }
          }
          s("#" + D).text(b)
        }
        var C;
        if (v && p) {
          C = null
        }
        else if (v) {
          C = z(v)
        }
        var x;
        if (f) {
          x = s("#" + F)
        }
        else {
          x = l.filter(function () {
            return !!s(this).find("#" + F).length
          })
        }
        if (!x.length) {
          x = undefined
        }
        var H = e.allowMemberRegistration ? e.stl("html.weebly.libraries.flyout_menus_jq_7") : e.stl("html.weebly.libraries.flyout_menus_jq_8");
        var j = o.some(function (e) {
          return e.get("membership_required")
        });
        var O = le() && (j || e.allowMemberRegistration || e.memberCount > 0 || e.groupCount > 0) && e.showMemberLoginLink;
        var L = window._W && e.showLogin;
        if ((O || L) && !x) {
          x = ie(H);
          if (le()) {
            x.attr("id", "pgmember-login")
          }
          else {
            x.attr("id", "member-login")
          }
          R(x).attr("id", F);
          if (f) {
            s(".wsite-custom-membership-wrapper").html(x)
          }
          else {
            if (v && !p) {
              x.insertBefore(v)
            }
            else {
              r.append(x)
            }
          }
          l = r.children();
          window.navFlyoutMenu.writeOrderingClassNames()
        }
        else if (!O && !L && x) {
          x.remove();
          l = r.children();
          window.navFlyoutMenu.writeOrderingClassNames()
        }
        if (le()) {
          if (x) {
            var V = R(x);
            V = u.length ? u : V;
            if (u.length) {
              V.text(H)
            }
            if (!n.chromeless) {
              V.attr("data-content", e.utl("html.weebly.libraries.flyout_menus_jq_5")).popover({
                trigger: "hover",
                placement: "bottom",
                container: "body",
                delay: {
                  show: 500,
                  hide: 100
                }
              })
            }
          }
        }
        if (window.DISABLE_NAV_MORE) {
          return
        }
        var W = d ? d.clone(true, true) : te();
        var U = l.filter(function () {
          return !!s(this).find("#" + A).length
        });
        if (!U.length) {
          U = undefined
        }
        var q = false;
        if (U) {
          U.hide();
          q = true
        }
        var Y;
        if (q) {
          Y = z(U);
          if (Y[0]._flyoutmenu_destroy) {
            Y = Y[0]._flyoutmenu_destroy(true)
          }
          else {
            var $ = B(Y)[0];
            if ($._flyoutmenu_destroy) {
              Y = $._flyoutmenu_destroy(true)
            }
          }
        }
        var Q = [];
        var J = [];
        var Z = false;
        var ee;
        var re;
        var se = null;
        var ae;
        var ue;
        for (ae = 0; ae < t.length; ae++) {
          ue = K(t[ae].id, r);
          if (ue) {
            ue.show();
            Q.push(ue)
          }
        }
        if (v) {
          Q.push(v)
        }
        if (x) {
          Q.push(x)
        }
        for (ae = 0; ae < Q.length; ae++) {
          ue = Q[ae];
          var ce = z(ue);
          var de = X(ce);
          if (!ae) {}
          else if (ae == 1) {
            ee = Math.abs(de[0].top - J[0][0].top) > Math.abs(de[0].left - J[0][0].left);
            if (ee) {
              re = ce.closest(".wsite-nav-vertical");
              if (re.length) {
                se = re.offset().top + (parseInt(re.css("padding-top"), 10) || 0) + re.height()
              }
            }
          }
          else if (!ee) {
            if (Math.abs(de[0].top - J[ae - 1][0].top) > 5) {
              Z = true;
              break
            }
          }
          else {
            if (se !== null) {
              if (de[1].top > se) {
                Z = true;
                break
              }
            }
          }
          J.push(de)
        }
        var fe = [];
        var he;
        var pe;
        var me;
        s("body").toggleClass("wsite-nav-condensed", !!Z);
        if (Z) {
          if (U) {
            U.show()
          }
          else {
            U = W;
            R(U).attr("id", A).css("position", "relative").on("click", false);
            if (x && !f) {
              U.insertBefore(x)
            }
            else if (v && !p) {
              U.insertBefore(v)
            }
            else {
              r.append(U)
            }
          }
          var ve = z(U).addClass(k).css("position", "relative");
          var ge = z(Q[0]);
          var ye = null;
          if (x && !f) {
            ye = z(x)
          }
          var be = C || ye || ve;
          var we = Q.length - 1;
          if (v) {
            we--
          }
          if (x) {
            we--
          }
          for (ae = we; ae >= 0; ae--) {
            var Te = X(ge);
            var Se = X(be);
            if (ee && Se[1].top > se || !ee && Math.abs(Te[0].top - Se[0].top) > 5) {
              Q[ae].hide();
              fe.unshift(ae)
            }
            else {
              break
            }
          }
          if (fe.length === 0) {
            U.remove();
            s("body").removeClass("wsite-nav-condensed")
          }
          else if (fe.length == t.length) {
            for (ae = 0; ae < fe.length; ae++) {
              var _e = K(t[fe[ae]].id, r);
              if (_e) {
                _e.show()
              }
            }
            U.remove();
            s("body").removeClass("wsite-nav-condensed")
          }
          else {
            var Me = [];
            var Ce;
            for (var Pe = 0; Pe < fe.length; Pe++) {
              he = t[fe[Pe]];
              if (o.length) {
                he = o.getPage(he.id).toJSON()
              }
              he = s.extend({}, he);
              he.title_html = he.title;
              he.membership_required = he["membership-required"];
              if (le()) {
                he.url = "page://" + he.id
              }
              var xe = K(he.id, r);
              if (xe) {
                Ce = z(xe)[0]._get_sublist()
              }
              if (!Ce && Y) {
                Ce = !!Y.find("#" + y + he.id + " ." + S).length
              }
              if (Ce) {
                he.has_children = true;
                he.children = false
              }
              Me.push(he)
            }
            var Ae = s(ne(oe("navigation/flyout/list") || oe("menu/submenu-main"), {
              children: Me
            }));
            if (le()) {
              window.processNavLinks(Ae)
            }
            N(Ae).each(function () {
              var e = s(this).closest("[id]");
              var n = e.attr("id");
              if (!n) {
                return
              }
              n = n.replace(/[^\d]/g, "");
              var o;
              s.each(t, function () {
                if (this.id === n) {
                  o = this;
                  return false
                }
              });
              if (!o) {
                return
              }
              if (e.is("span." + g)) {
                e = e.children();
                e.unwrap()
              }
              pe = y + o.id;
              e.attr("id", pe);
              if (pe.replace(/[^\d]/g, "") == i) {
                e.addClass(P)
              }
              me = R(e);
              if (!o.onclick) {
                var a = o.url;
                if (window.IS_ARCHIVE || a.match(/^http:\/\//)) {
                  me.attr("href", a)
                }
                else {
                  var l = s(s.map(Q, function (e) {
                    return e.get()
                  }));
                  var u = R(l.filter("[id*=" + n + "]"));
                  var c = u.attr("href");
                  var d = u.data("membership-required");
                  if (c) {
                    me.attr("href", c)
                  }
                  else if (!o.nonclickable) {
                    me.attr("href", "/" + a)
                  }
                  if (typeof d === "number") {
                    me.attr("data-membership-required", "" + d)
                  }
                }
                if (o.target) {
                  me.attr("target", o.target)
                }
              }
              var f;
              var h = K(o.id, r);
              if (h) {
                f = z(h)[0]._flyoutmenu_destroy()
              }
              if (!f && Y) {
                f = G(Y.find("#" + y + o.id));
                if (!f.length) {
                  f = undefined
                }
              }
              if (f) {
                G(e).replaceWith(f)
              }
            });
            ve.append(Ae);
            window.navFlyoutMenu.addItem(ve)
          }
        }
        if (Y) {
          for (ae = 0; ae < fe[0]; ae++) {
            he = t[ae];
            var ke = K(he.id, r);
            var Ee = Y.find("#" + y + he.id + " ." + S + ":first");
            if (Ee.length) {
              if (ke[0]._flyoutmenu_destroy) {
                ke[0]._flyoutmenu_destroy()
              }
              ke.append(Ee);
              window.navFlyoutMenu.addItem(ke)
            }
          }
        }
        window.navFlyoutMenu.writeOrderingClassNames()
      }

      function V(e, t, i) {
        var n = e.closest("." + b);
        if (!n.length) {
          n = e.parent();
          if (n.hasClass(g)) {
            n = n.parent()
          }
        }
        var r = W(n, t, i);
        if (r.length >= 2) {
          var o = r.eq(0).offset();
          var s = r.eq(1).offset();
          var a = Math.abs(o.left - s.left) - Math.abs(o.top - s.top);
          if (a !== 0) {
            return a < 0
          }
        }
        return !$(e)
      }

      function W(e, t, i) {
        var n = e.find("." + w);
        if (n.length) {
          return n
        }
        var n = e.find("." + g);
        if (n.length) {
          return n
        }
        var r = [];
        e.children().each(function (e, n) {
          var o = s(n);
          if (!t || o.hasClass(g) || o.hasClass(k) || n.id.match(/^pg/) || i && n.id == i) {
            var a = z(o);
            if (a.length) {
              r.push(a[0])
            }
          }
        });
        return s(r)
      }

      function z(e) {
        if (e.hasClass(g)) {
          var t = e.find("." + w).first();
          if (t.length) {
            e = t
          }
          else {
            e = e.children().first()
          }
        }
        if (!e.hasClass(b)) {
          return e
        }
      }

      function U(e) {
        return B(e).add(O(e))
      }

      function q(e) {
        var t = e.closest("." + g).siblings().find("." + w + ":first-child");
        if (t.length) {
          return t
        }
        if (e.parent().hasClass(g)) {
          return e.parent().siblings().children(":first-child")
        }
        else {
          return e.siblings()
        }
      }

      function Y(e) {
        var t = e.find("." + _).first();
        if (t.length) {
          return t
        }
        t = e.closest("." + M + ", ." + w).find("." + _).first();
        if (t.length) {
          return t
        }
        t = e.find("ul").first();
        if (!t.length) {
          var i = e.next();
          if (i.hasClass(b)) {
            t = i.children().first()
          }
        }
        if (t.length) {
          return t
        }
      }

      function $(e) {
        return !e.closest("." + _).length
      }

      function X(e) {
        var t = e.is("a") ? e : e.find("a");
        var i = e.offset();
        var n = {
          top: i.top + e[0].offsetHeight,
          left: i.left + e[0].offsetWidth
        };
        if (!t) {
          return [i, n]
        }
        var r = t.offset();
        var o = {
          top: r.top + t[0].offsetHeight,
          left: r.left + t[0].offsetWidth
        };
        var s, a;
        if (Math.abs(i.left - n.left) < 10) {
          s = r;
          a = o
        }
        else {
          s = {
            top: Math.min(i.top, r.top),
            left: Math.min(i.left, r.left)
          };
          a = {
            top: Math.max(n.top, o.top),
            left: Math.max(n.left, o.left)
          }
        }
        return [s, a]
      }

      function K(e, t) {
        var i = s("#pg" + e, t);
        if (!i.length && f) {
          i = s("#" + f, t)
        }
        if (i.length) {
          return i
        }
      }

      function Q() {
        if (le()) {
          for (var e = 0; e < document.styleSheets.length; e++) {
            try {
              if (document.styleSheets[e].title == p + "-theme-css") {
                var t = document.styleSheets[e];
                var i = t.cssRules || t.rules;
                return i && i.length > 0
              }
            }
            catch (e) {}
          }
          return false
        }
        return true
      }

      function J(e) {
        if (Q()) {
          e()
        }
        else {
          var t = setInterval(function () {
            if (Q()) {
              clearInterval(t);
              e()
            }
          }, 200)
        }
      }
      if (!window.whenThemeCSSLoaded) {
        window.whenThemeCSSLoaded = J
      }
      e.Menus = {
        inVerticalList: V
      };
      var Z;
      var ee;

      function te() {
        return ie(e.stl("html.weebly.libraries.flyout_menus_jq_6"))
      }

      function ie(e) {
        return s(ne(re(), {
          title_html: e,
          url: "#",
          has_children: false
        }))
      }

      function ne(e, i) {
        return t.render(e, i, se())
      }

      function re() {
        if (!ee) {
          ee = oe("navigation/item") || oe("menu/item")
        }
        return ee
      }

      function oe(e) {
        return se()[e]
      }

      function se() {
        return Z || {}
      }

      function ae(e) {
        Z = r.extend({}, window.objectify(e))
      }
      window.objectify = function (e) {
        return r.isEmpty(e) ? {} : e
      };

      function le() {
        return window.inEditor && window.inEditor()
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  311: function (e, t, i) {
    var n, r, o;
    (function (s) {
      if (true) {
        !(r = [i(1), i(32)], n = s, o = typeof n === "function" ? n.apply(t, r) : n, o !== undefined && (e.exports = o))
      }
      else {
        s(jQuery)
      }
    })(function (e) {
      return e.effects.effect.slide = function (t, i) {
        var n = e(this),
          r = ["position", "top", "bottom", "left", "right", "width", "height"],
          o = e.effects.setMode(n, t.mode || "show"),
          s = o === "show",
          a = t.direction || "left",
          l = a === "up" || a === "down" ? "top" : "left",
          u = a === "up" || a === "left",
          c, d = {};
        e.effects.save(n, r);
        n.show();
        c = t.distance || n[l === "top" ? "outerHeight" : "outerWidth"](true);
        e.effects.createWrapper(n).css({
          overflow: "hidden"
        });
        if (s) {
          n.css(l, u ? isNaN(c) ? "-" + c : -c : c)
        }
        d[l] = (s ? u ? "+=" : "-=" : u ? "-=" : "+=") + c;
        n.animate(d, {
          queue: false,
          duration: t.duration,
          easing: t.easing,
          complete: function () {
            if (o === "hide") {
              n.hide()
            }
            e.effects.restore(n, r);
            e.effects.removeWrapper(n);
            i()
          }
        })
      }
    })
  },
  597: function (e, t, i) {
    var n, r;
    !(n = [i(2), i(3)], r = function (e, t) {
      var i = {
        for: function (i) {
          var n = ["blog", "link", "nonclickable", "store", "category", "product"];
          var r = t.contains(n, i) ? this[i] : this["page"];
          r.layout = r.layout || window.getDefaultPageType(window.currentThemeData, e.view.isMobileView);
          return r
        },
        page: {
          title: e.stl("javascript.editor.page-manager.entities.Defaults_2"),
          kind: "page"
        },
        nonclickable: {
          title: e.stl("javascript.editor.page-manager.entities.Defaults_8"),
          kind: "nonclickable",
          nonclickable: 1
        },
        link: {
          title: e.stl("javascript.editor.page-manager.entities.Defaults_3"),
          kind: "page",
          extlink: "http://",
          search_hidden: 1
        },
        blog: {
          title: e.stl("javascript.editor.page-manager.entities.Defaults_4"),
          kind: "blog"
        },
        store: {
          title: e.stl("javascript.editor.page-manager.entities.Defaults_5"),
          kind: "store",
          layout: "no-header",
          store_page_kind: "category",
          store_page_kind_id: "1"
        },
        category: {
          title: e.stl("javascript.editor.page-manager.entities.Defaults_6"),
          kind: "store",
          layout: "no-header",
          store_page_kind: "category"
        },
        product: {
          title: e.stl("javascript.editor.page-manager.entities.Defaults_7"),
          kind: "store",
          layout: "no-header",
          store_page_kind: "product"
        }
      };
      return i
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  598: function (e, t, i) {
    var n, r;
    !(n = [i(3)], r = function (e) {
      var t = {
        initialize: function (e) {
          this.length = 0;
          this.items = {};
          if (e.length > 0) {
            this.flatten(e)
          }
          return this
        },
        flatten: function (e) {
          var t = this;
          e.each(function (e) {
            t.add(e);
            t.flatten(e.get("children"))
          })
        },
        toJSON: function () {
          var t = {};
          e.each(this.items, function (e) {
            t[e.id] = e.toJSON()
          });
          return t
        },
        get: function (e) {
          return this.items[e]
        },
        add: function (e) {
          if (this.items[e.id]) return;
          this.length += 1;
          this.items[e.id] = e
        },
        remove: function (e) {
          this.length -= 1;
          delete this.items[e.id]
        },
        each: function (t) {
          e.each(this.items, function (e, i) {
            t.call(null, e, i)
          });
          return this
        },
        some: function (t) {
          return e.some(this.items, function (e, i) {
            return t.call(null, e, i)
          })
        },
        map: function (t) {
          return e.map(this.items, function (e, i) {
            return t.call(null, e, i)
          })
        },
        find: function (t) {
          return e.find(this.items, function (e, i) {
            return t.call(null, e, i)
          })
        }
      };
      return t
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  599: function (e, t, i) {
    var n, r;
    !(n = [i(2), i(1), i(3), i(5), i(597), i(598)], r = function (e, t, i, n, r, o) {
      var s = n.Model.extend({
        defaults: function (e) {
          if (this.isNew() && e) return r.for(e);
          return {}
        },
        initialize: function (e) {
          e = e || {};
          this.set(this.defaults(e.page_kind));
          this.initChildren();
          this.on("change", this.onModelChange.bind(this));
          this.listenTo(this.get("children"), {
            changed: function (e) {
              this.trigger("changed", e)
            },
            "page:go": function (e) {
              this.trigger("page:go", e)
            },
            removed: function (e) {
              this.trigger("removed", e)
            }
          })
        },
        onModelChange: function () {
          var e = i.keys(this.changedAttributes());
          var t = ["title", "hidden", "pwprotected", "membership_required", "nav_menu"];
          var n = i.intersection(t, e).length > 0;
          if (n) {
            this.trigger("changed", this)
          }
          var r = ["title", "hidden", "layout", "store_page_kind_id"];
          var o = i.intersection(r, e).length > 0;
          if (o) {
            this.trigger("page:go", this)
          }
        },
        initChildren: function () {
          var e = this.get("children");
          if (e instanceof a === false) {
            this.set("children", new a(e, {
              subcollection: true
            }))
          }
        },
        isCommercePage: function () {
          return i.contains(["store", "category", "product"], this.get("page_kind"))
        },
        hasCommerceModel: function (e) {
          return this.hasCategory(e) || this.hasProduct(e)
        },
        hasProduct: function (e) {
          return this.get("store_page_kind_id") == e.get("site_product_id")
        },
        hasCategory: function (e) {
          return this.get("store_page_kind_id") == e.get("site_category_id")
        },
        commerceCleanup: function () {
          var t = this;
          e.Editor.RPC.Page.cleanupCommercePage(t.id).done(function () {
            t.set({
              hidden: 1,
              kind: "page",
              page_kind: "page",
              store_page_kind: null,
              store_page_kind_id: null
            })
          })
        },
        unescapedAttr: function (e) {
          var i = this.get(e);
          return t("<div/>").html(i).text()
        },
        sync: function (t, n, r) {
          var o = n.hasChanged("store_page_kind_id");
          if (n.collection) {
            n.set("order", n.collection.indexOf(n) + 1)
          }
          if (n.isNew()) {
            if (n.collection.allPagesProtected()) {
              n.set("pwprotected", 1)
            }
          }
          return e.Editor.RPC.Page.savePage(window.currentSite, n.id, n.attributes).then(function (e) {
            e = i.mapObject(e, function (e, t) {
              if (e === "0" || e === "1") e = parseInt(e, 10);
              return e
            });
            var t = n.isNew();
            var r = t ? "save" : "sync";
            var s = !i.isEqual(n.toJSON(), e);
            n.set(e, {
              silent: true
            });
            n.trigger(r, n);
            if (s) {
              n.trigger("change", n)
            }
            if (o) {
              n.trigger("page:go", n)
            }
            return n
          })
        },
        destroy: function (t) {
          this.trigger("destroy", this, this.collection, this.collection.indexOf(this));
          return e.Editor.RPC.Page.removePage(window.currentSite, this.id)
        },
        copy: function () {
          var t = this;
          var n = e.Editor.RPC.Page.copyPage(window.currentSite, t.id);
          return n.then(function (e) {
            var n = i.extend(t.toJSON(), {
              id: e.page_id,
              children: []
            });
            return new s(n)
          })
        },
        toJSON: function (e) {
          var t = i.clone(this.attributes);
          t.children = this.get("children").toJSON();
          return t
        },
        canBeHomepage: function () {
          var e = this.get("page_kind");
          return e !== "nonclickable" && e !== "link"
        }
      });
      var a = n.Collection.extend({
        model: s,
        initialize: function (e, t) {
          t = t || {};
          if (!t.subcollection) {
            this.on({
              "save add": function (e) {
                if (!e.isNew()) {
                  this.getHash().add(e)
                }
              },
              removed: function (e) {
                this.getHash().remove(e)
              }
            }, this)
          }
          this.on("destroy", this.relocateChildren, this);
          n.Collection.prototype.initialize.apply(this, arguments)
        },
        saveHierarchy: function (t) {
          this.mirrorHierarchy(t);
          return e.Editor.RPC.Page.saveHierarchy(window.currentSite, t)
        },
        mirrorHierarchy: function (e) {
          var t = this.getHash();

          function n(e, r) {
            var o = 1;
            i.each(r, function (i) {
              var r = t.get(i.id);
              r.collection.remove(r, {
                silent: true
              });
              e.add(r, {
                silent: true
              });
              r.set("order", o++);
              n(r.get("children"), i.children)
            })
          }
          n(this, e)
        },
        relocateChildren: function (e, t, i) {
          var n = e.get("children");
          var r = n.at(0);
          while (r) {
            n.remove(r);
            t.add(r, {
              at: i++
            });
            r = n.at(0)
          }
          this.trigger("removed", e)
        },
        onSitePasswordChange: function (e, t) {
          var i = this.getHash();
          if (!t) {
            i.each(function (e) {
              e.set("pwprotected", 0)
            });
            return
          }
          var n = i.find(function (e) {
            return e.get("pwprotected")
          });
          if (!e && !n) {
            i.each(function (e) {
              e.set("pwprotected", 1)
            })
          }
        },
        allPagesProtected: function () {
          return i.all(this.getHash().items, function (e) {
            return parseInt(e.get("pwprotected")) == 1
          })
        },
        reset: function (e, t) {
          delete this.pageHash;
          n.Collection.prototype.reset.call(this, e, t)
        },
        getHash: function () {
          this.pageHash = this.pageHash || o.initialize(this);
          return this.pageHash
        },
        getPage: function (e) {
          return this.getHash().get(e)
        },
        getHomepage: function () {
          return this.at(0)
        },
        isHomepage: function (e) {
          return e.id === this.getHomepage().id
        },
        canDeleteHomepage: function () {
          var e = this.at(1);
          return e && e.get("page_kind") !== "external" && e.get("page_kind") !== "nonclickable"
        },
        cleanupCommercePages: function (e) {
          this.getHash().each(function (t) {
            if (t.isCommercePage() && t.hasCommerceModel(e)) {
              t.commerceCleanup()
            }
          })
        }
      });
      return {
        PageModel: s,
        PageCollection: a
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  600: function (e, t, i) {
    var n, r;
    !(n = [i(599)], r = function (e) {
      var t = function () {
        return new e.PageCollection
      };
      return t()
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  605: function (e, t, i) {
    var n, r;
    !(n = [], r = function () {
      return {
        EVENTS: {
          DOCUMENT_READY: "documentReady",
          DOCUMENT_RESIZED: "documentSizeChanged",
          AREA_TEXT_EDITING_START: "startedEditingAreaText",
          AREA_TEXT_EDITING_END: "finishedEditingAreaText",
          TEXT_EDITING_START: "startedEditingText",
          TEXT_EDITING_END: "finishedEditingText",
          TEXT_EDITING_TOOLBAR_UPDATE: "updateToolbarStates",
          SUBNAV_SHOWN: "navShown",
          SUBNAV_HIDDEN: "navHidden",
          NAV_CLICKED: "navClicked",
          NAV_PREVIOUS_PAGE_CLICKED: "navPreviousPageClicked",
          NAV_NEXT_PAGE_CLICKED: "navNextPageClicked",
          PAGE_RENDER_FAIL: "renderPageFailed",
          SITE_INIT_FAIL: "initializeEditorFailed",
          EDITING_POST_TITLE: "startedEditingPostTitle",
          EDITED_POST_TITLE: "finishedEditingPostTitle",
          INITIALIZE_BLOG_POST_EDITOR_FAILED: "initializeBlogPostEditorFailed"
        },
        COMMANDS: {},
        REQUESTS: {}
      }
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  609: function (e, t, i) {
    var n, r;
    !(n = [i(1), i(626)], r = function (e) {
      e(document).ready(function () {
        e("a[rel=lightbox]").removeAttr("rel").add('a[rel^="lightbox["]').addClass("w-fancybox");
        if (e.fn.fancybox) {
          e(".w-fancybox").fancybox({
            prevEffect: "none",
            nextEffect: "none",
            padding: 10,
            helpers: {
              title: {
                type: "inside"
              },
              thumbs: {
                width: 50,
                height: 50
              }
            }
          });
          window.lightboxLoaded = true
        }
      })
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  620: function (e, t, i) {
    var n, r;
    !(n = [i(2), i(1), i(3), i(6), i(234), i(21), i(5), i(154), i(306), i(609), i(124), i(90), i(247)], r = function (e, t, i, n, r, o, s) {
      o.start();
      i.each(e.templates, function (e, t) {
        n.compilePartial(t, e)
      });
      e.events = {};
      i.extend(e.events, s.Events);
      if (document.createEvent && document.addEventListener) {
        var a = document.createEvent("Event");
        a.initEvent("appReady", true, false);
        document.dispatchEvent(a);
        document.documentElement.appReady = 1
      }
      else if (document.documentElement.appReady === 0) {
        document.documentElement.appReady++
      }
      else {
        document.documentElement.appReady = 1
      }
      t(document).ready(function () {
        if (window.initFlyouts !== undefined) {
          window.initFlyouts()
        }
      })
    }.apply(t, n), r !== undefined && (e.exports = r))
  },
  626: function (e, t, i) {
    var n = i(1);
    (function (e, t, i, n) {
      "use strict";
      var r = i(e),
        o = i(t),
        s = i.fancybox = function () {
          s.open.apply(this, arguments)
        },
        a = null,
        l = t.createTouch !== n,
        u = function (e) {
          return e && e.hasOwnProperty && e instanceof i
        },
        c = function (e) {
          return e && i.type(e) === "string"
        },
        d = function (e) {
          return c(e) && e.indexOf("%") > 0
        },
        f = function (e) {
          return e && !(e.style.overflow && e.style.overflow === "hidden") && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
        },
        h = function (e, t) {
          var i = parseInt(e, 10);
          if (t && d(e)) {
            i = s.getViewport()[t] / 100 * i
          }
          return Math.ceil(i)
        },
        p = function (e, t) {
          return h(e, t) + "px"
        };
      i.extend(s, {
        version: "2.1.0",
        defaults: {
          padding: 15,
          margin: 20,
          width: 800,
          height: 600,
          minWidth: 100,
          minHeight: 100,
          maxWidth: 9999,
          maxHeight: 9999,
          autoSize: true,
          autoHeight: false,
          autoWidth: false,
          autoResize: !l,
          autoCenter: !l,
          fitToView: true,
          aspectRatio: false,
          topRatio: .5,
          leftRatio: .5,
          scrolling: "auto",
          wrapCSS: "",
          arrows: true,
          closeBtn: true,
          closeClick: false,
          nextClick: false,
          mouseWheel: true,
          autoPlay: false,
          playSpeed: 3e3,
          preload: 3,
          modal: false,
          loop: true,
          ajax: {
            dataType: "html",
            headers: {
              "X-fancyBox": true
            }
          },
          iframe: {
            scrolling: "auto",
            preload: true
          },
          swf: {
            wmode: "transparent",
            allowfullscreen: "true",
            allowscriptaccess: "always"
          },
          keys: {
            next: {
              13: "left",
              34: "up",
              39: "left",
              40: "up"
            },
            prev: {
              8: "right",
              33: "down",
              37: "right",
              38: "down"
            },
            close: [27],
            play: [32],
            toggle: [70]
          },
          direction: {
            next: "left",
            prev: "right"
          },
          scrollOutside: true,
          index: 0,
          type: null,
          href: null,
          content: null,
          title: null,
          tpl: {
            wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
            image: '<img class="fancybox-image" src="{href}" alt="" />',
            iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + (i.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
            closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
            next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
            prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
          },
          openEffect: "fade",
          openSpeed: 250,
          openEasing: "swing",
          openOpacity: true,
          openMethod: "zoomIn",
          closeEffect: "fade",
          closeSpeed: 250,
          closeEasing: "swing",
          closeOpacity: true,
          closeMethod: "zoomOut",
          nextEffect: "elastic",
          nextSpeed: 250,
          nextEasing: "swing",
          nextMethod: "changeIn",
          prevEffect: "elastic",
          prevSpeed: 250,
          prevEasing: "swing",
          prevMethod: "changeOut",
          helpers: {
            overlay: {
              closeClick: true,
              speedOut: 200,
              showEarly: true,
              css: {}
            },
            title: {
              type: "float"
            }
          },
          onCancel: i.noop,
          beforeLoad: i.noop,
          afterLoad: i.noop,
          beforeShow: i.noop,
          afterShow: i.noop,
          beforeChange: i.noop,
          beforeClose: i.noop,
          afterClose: i.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: false,
        isOpen: false,
        isOpened: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
          timer: null,
          isActive: false
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (e, t) {
          if (!e) {
            return
          }
          if (!i.isPlainObject(t)) {
            t = {}
          }
          if (false === s.close(true)) {
            return
          }
          if (!i.isArray(e)) {
            e = u(e) ? i(e).get() : [e]
          }
          i.each(e, function (r, o) {
            var a = {},
              l, d, f, h, p, m, v;
            if (i.type(o) === "object") {
              if (o.nodeType) {
                o = i(o)
              }
              if (u(o)) {
                a = {
                  href: o.attr("href"),
                  title: o.attr("title"),
                  isDom: true,
                  element: o
                };
                if (i.metadata) {
                  i.extend(true, a, o.metadata())
                }
              }
              else {
                a = o
              }
            }
            l = t.href || a.href || (c(o) ? o : null);
            d = t.title !== n ? t.title : a.title || "";
            f = t.content || a.content;
            h = f ? "html" : t.type || a.type;
            if (!h && a.isDom) {
              h = o.data("fancybox-type");
              if (!h) {
                p = o.prop("class").match(/fancybox\.(\w+)/);
                h = p ? p[1] : null
              }
            }
            if (c(l)) {
              if (!h) {
                if (s.isImage(l)) {
                  h = "image"
                }
                else if (s.isSWF(l)) {
                  h = "swf"
                }
                else if (l.charAt(0) === "#") {
                  h = "inline"
                }
                else if (c(o)) {
                  h = "html";
                  f = o
                }
              }
              if (h === "ajax") {
                m = l.split(/\s+/, 2);
                l = m.shift();
                v = m.shift()
              }
            }
            if (!f) {
              if (h === "inline") {
                if (l) {
                  f = i(c(l) ? l.replace(/.*(?=#[^\s]+$)/, "") : l)
                }
                else if (a.isDom) {
                  f = o
                }
              }
              else if (h === "html") {
                f = l
              }
              else if (!h && !l && a.isDom) {
                h = "inline";
                f = o
              }
            }
            i.extend(a, {
              href: l,
              type: h,
              content: f,
              title: d,
              selector: v
            });
            e[r] = a
          });
          s.opts = i.extend(true, {}, s.defaults, t);
          if (t.keys !== n) {
            s.opts.keys = t.keys ? i.extend({}, s.defaults.keys, t.keys) : false
          }
          s.group = e;
          return s._start(s.opts.index)
        },
        cancel: function () {
          var e = s.coming;
          if (!e || false === s.trigger("onCancel")) {
            return
          }
          s.hideLoading();
          if (s.ajaxLoad) {
            s.ajaxLoad.abort()
          }
          s.ajaxLoad = null;
          if (s.imgPreload) {
            s.imgPreload.onload = s.imgPreload.onerror = null
          }
          if (e.wrap) {
            e.wrap.stop(true).trigger("onReset").remove()
          }
          if (!s.current) {
            s.trigger("afterClose")
          }
          s.coming = null
        },
        close: function (e) {
          s.cancel();
          if (false === s.trigger("beforeClose")) {
            return
          }
          s.unbindEvents();
          if (!s.isOpen || e === true) {
            i(".fancybox-wrap").stop(true).trigger("onReset").remove();
            s._afterZoomOut()
          }
          else {
            s.isOpen = s.isOpened = false;
            s.isClosing = true;
            i(".fancybox-item, .fancybox-nav").remove();
            s.wrap.stop(true, true).removeClass("fancybox-opened");
            if (s.wrap.css("position") === "fixed") {
              s.wrap.css(s._getPosition(true))
            }
            s.transitions[s.current.closeMethod]()
          }
        },
        play: function (e) {
          var t = function () {
              clearTimeout(s.player.timer)
            },
            n = function () {
              t();
              if (s.current && s.player.isActive) {
                s.player.timer = setTimeout(s.next, s.current.playSpeed)
              }
            },
            r = function () {
              t();
              i("body").unbind(".player");
              s.player.isActive = false;
              s.trigger("onPlayEnd")
            },
            o = function () {
              if (s.current && (s.current.loop || s.current.index < s.group.length - 1)) {
                s.player.isActive = true;
                i("body").bind({
                  "afterShow.player onUpdate.player": n,
                  "onCancel.player beforeClose.player": r,
                  "beforeLoad.player": t
                });
                n();
                s.trigger("onPlayStart")
              }
            };
          if (e === true || !s.player.isActive && e !== false) {
            o()
          }
          else {
            r()
          }
        },
        next: function (e) {
          var t = s.current;
          if (t) {
            if (!c(e)) {
              e = t.direction.next
            }
            s.jumpto(t.index + 1, e, "next")
          }
        },
        prev: function (e) {
          var t = s.current;
          if (t) {
            if (!c(e)) {
              e = t.direction.prev
            }
            s.jumpto(t.index - 1, e, "prev")
          }
        },
        jumpto: function (e, t, i) {
          var r = s.current;
          if (!r) {
            return
          }
          e = h(e);
          s.direction = t || r.direction[e >= r.index ? "next" : "prev"];
          s.router = i || "jumpto";
          if (r.loop) {
            if (e < 0) {
              e = r.group.length + e % r.group.length
            }
            e = e % r.group.length
          }
          if (r.group[e] !== n) {
            s.cancel();
            s._start(e)
          }
        },
        reposition: function (e, t) {
          var i;
          if (s.isOpen) {
            i = s._getPosition(t);
            if (e && e.type === "scroll") {
              delete i.position;
              s.wrap.stop(true, true).animate(i, 200)
            }
            else {
              s.wrap.css(i)
            }
          }
        },
        update: function (e) {
          var t = e && e.type,
            i = !t || t === "orientationchange";
          if (i) {
            clearTimeout(a);
            a = null
          }
          if (!s.isOpen || a) {
            return
          }
          if (i || l) {
            s.wrap.removeAttr("style").addClass("fancybox-tmp");
            s.trigger("onUpdate")
          }
          a = setTimeout(function () {
            var i = s.current;
            if (!i) {
              return
            }
            s.wrap.removeClass("fancybox-tmp");
            if (t !== "scroll") {
              s._setDimension()
            }
            if (!(t === "scroll" && i.canShrink)) {
              s.reposition(e)
            }
            s.trigger("onUpdate");
            a = null
          }, l ? 500 : i ? 20 : 300)
        },
        toggle: function (e) {
          if (s.isOpen) {
            s.current.fitToView = i.type(e) === "boolean" ? e : !s.current.fitToView;
            s.update()
          }
        },
        hideLoading: function () {
          o.unbind("keypress.fb");
          i("#fancybox-loading").remove()
        },
        showLoading: function () {
          var e, t;
          s.hideLoading();
          o.bind("keypress.fb", function (e) {
            if ((e.which || e.keyCode) === 27) {
              e.preventDefault();
              s.cancel()
            }
          });
          e = i('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body");
          if (!s.defaults.fixed) {
            t = s.getViewport();
            e.css({
              position: "absolute",
              top: t.h * .5 + t.y,
              left: t.w * .5 + t.x
            })
          }
        },
        getViewport: function () {
          var t = s.current ? s.current.locked : false,
            i = {
              x: r.scrollLeft(),
              y: r.scrollTop()
            };
          if (t) {
            i.w = t[0].clientWidth;
            i.h = t[0].clientHeight
          }
          else {
            i.w = l && e.innerWidth ? e.innerWidth : r.width();
            i.h = l && e.innerHeight ? e.innerHeight : r.height()
          }
          return i
        },
        unbindEvents: function () {
          if (s.wrap && u(s.wrap)) {
            s.wrap.unbind(".fb")
          }
          o.unbind(".fb");
          r.unbind(".fb")
        },
        bindEvents: function () {
          var e = s.current,
            t;
          if (!e) {
            return
          }
          r.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), s.update);
          t = e.keys;
          if (t) {
            o.bind("keydown.fb", function (r) {
              var o = r.which || r.keyCode,
                a = r.target || r.srcElement;
              if (!r.ctrlKey && !r.altKey && !r.shiftKey && !r.metaKey && !(a && (a.type || i(a).is("[contenteditable]")))) {
                i.each(t, function (t, a) {
                  if (e.group.length > 1 && a[o] !== n) {
                    s[t](a[o]);
                    r.preventDefault();
                    return false
                  }
                  if (i.inArray(o, a) > -1) {
                    s[t]();
                    r.preventDefault();
                    return false
                  }
                })
              }
            })
          }
          if (i.fn.mousewheel && e.mouseWheel) {
            s.wrap.bind("mousewheel.fb", function (t, n, r, o) {
              var a = t.target || null,
                l = i(a),
                u = false;
              while (l.length) {
                if (u || l.is(".fancybox-skin") || l.is(".fancybox-wrap")) {
                  break
                }
                u = f(l[0]);
                l = i(l).parent()
              }
              if (n !== 0 && !u) {
                if (s.group.length > 1 && !e.canShrink) {
                  if (o > 0 || r > 0) {
                    s.prev(o > 0 ? "down" : "left")
                  }
                  else if (o < 0 || r < 0) {
                    s.next(o < 0 ? "up" : "right")
                  }
                  t.preventDefault()
                }
              }
            })
          }
        },
        trigger: function (e, t) {
          var n, r = t || s.coming || s.current;
          if (!r) {
            return
          }
          if (i.isFunction(r[e])) {
            n = r[e].apply(r, Array.prototype.slice.call(arguments, 1))
          }
          if (n === false) {
            return false
          }
          if (e === "onCancel" && !s.isOpened) {
            s.isActive = false
          }
          if (r.helpers) {
            i.each(r.helpers, function (t, n) {
              if (n && s.helpers[t] && i.isFunction(s.helpers[t][e])) {
                s.helpers[t][e](n, r)
              }
            })
          }
          i.event.trigger(e + ".fb")
        },
        isImage: function (e) {
          return c(e) && e.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i)
        },
        isSWF: function (e) {
          return c(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (e) {
          var t = {},
            n, r, o, a, u;
          e = h(e);
          n = s.group[e] || null;
          if (!n) {
            return false
          }
          t = i.extend(true, {}, s.opts, n);
          a = t.margin;
          u = t.padding;
          if (i.type(a) === "number") {
            t.margin = [a, a, a, a]
          }
          if (i.type(u) === "number") {
            t.padding = [u, u, u, u]
          }
          if (t.modal) {
            i.extend(true, t, {
              closeBtn: false,
              closeClick: false,
              nextClick: false,
              arrows: false,
              mouseWheel: false,
              keys: null,
              helpers: {
                overlay: {
                  closeClick: false
                }
              }
            })
          }
          if (t.autoSize) {
            t.autoWidth = t.autoHeight = true
          }
          if (t.width === "auto") {
            t.autoWidth = true
          }
          if (t.height === "auto") {
            t.autoHeight = true
          }
          t.group = s.group;
          t.index = e;
          s.coming = t;
          if (false === s.trigger("beforeLoad")) {
            s.coming = null;
            return
          }
          o = t.type;
          r = t.href;
          if (!o) {
            s.coming = null;
            if (s.current && s.router && s.router !== "jumpto") {
              s.current.index = e;
              return s[s.router](s.direction)
            }
            return false
          }
          s.isActive = true;
          if (o === "image" || o === "swf") {
            t.autoHeight = t.autoWidth = false;
            t.scrolling = "visible"
          }
          if (o === "image") {
            t.aspectRatio = true
          }
          if (o === "iframe" && l) {
            t.scrolling = "scroll"
          }
          t.wrap = i(t.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent);
          i.extend(t, {
            skin: i(".fancybox-skin", t.wrap),
            outer: i(".fancybox-outer", t.wrap),
            inner: i(".fancybox-inner", t.wrap)
          });
          i.each(["Top", "Right", "Bottom", "Left"], function (e, i) {
            t.skin.css("padding" + i, p(t.padding[e]))
          });
          s.trigger("onReady");
          if (o === "inline" || o === "html") {
            if (!t.content || !t.content.length) {
              return s._error("content")
            }
          }
          else if (!r) {
            return s._error("href")
          }
          if (o === "image") {
            s._loadImage()
          }
          else if (o === "ajax") {
            s._loadAjax()
          }
          else if (o === "iframe") {
            s._loadIframe()
          }
          else {
            s._afterLoad()
          }
        },
        _error: function (e) {
          i.extend(s.coming, {
            type: "html",
            autoWidth: true,
            autoHeight: true,
            minWidth: 0,
            minHeight: 0,
            scrolling: "no",
            hasError: e
          });
          s._afterLoad();
          s.close(true)
        },
        _loadImage: function () {
          var e = s.imgPreload = new Image;
          e.onload = function () {
            this.onload = this.onerror = null;
            s.coming.width = this.width;
            s.coming.height = this.height;
            s._afterLoad()
          };
          e.onerror = function () {
            this.onload = this.onerror = null;
            s._error("image")
          };
          e.src = s.coming.href;
          if (e.complete === n || !e.complete) {
            s.showLoading()
          }
        },
        _loadAjax: function () {
          var e = s.coming;
          s.showLoading();
          s.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
            url: e.href,
            error: function (e, t) {
              if (s.coming && t !== "abort") {
                s._error("ajax", e)
              }
              else {
                s.hideLoading()
              }
            },
            success: function (t, i) {
              if (i === "success") {
                e.content = t;
                s._afterLoad()
              }
            }
          }))
        },
        _loadIframe: function () {
          var e = s.coming,
            t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
          i(e.wrap).bind("onReset", function () {
            try {
              i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
            }
            catch (e) {}
          });
          if (e.iframe.preload) {
            s.showLoading();
            t.one("load", function () {
              i(this).data("ready", 1);
              if (!l) {
                i(this).bind("load.fb", s.update)
              }
              i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
              s._afterLoad()
            })
          }
          e.content = t.appendTo(e.inner);
          if (!e.iframe.preload) {
            s._afterLoad()
          }
        },
        _preloadImages: function () {
          var e = s.group,
            t = s.current,
            i = e.length,
            n = t.preload ? Math.min(t.preload, i - 1) : 0,
            r, o;
          for (o = 1; o <= n; o += 1) {
            r = e[(t.index + o) % i];
            if (r.type === "image" && r.href) {
              (new Image).src = r.href
            }
          }
        },
        _afterLoad: function () {
          var e = s.coming,
            t = s.current,
            n = "fancybox-placeholder",
            r, o, a, l, c, d;
          s.hideLoading();
          if (!e || s.isActive === false) {
            return
          }
          if (false === s.trigger("afterLoad", e, t)) {
            e.wrap.stop(true).trigger("onReset").remove();
            s.coming = null;
            return
          }
          if (t) {
            s.trigger("beforeChange", t);
            t.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove();
            if (t.wrap.css("position") === "fixed") {
              t.wrap.css(s._getPosition(true))
            }
          }
          s.unbindEvents();
          r = e;
          o = e.content;
          a = e.type;
          l = e.scrolling;
          i.extend(s, {
            wrap: r.wrap,
            skin: r.skin,
            outer: r.outer,
            inner: r.inner,
            current: r,
            previous: t
          });
          c = r.href;
          switch (a) {
            case "inline":
            case "ajax":
            case "html":
              if (r.selector) {
                o = i("<div>").html(o).find(r.selector)
              }
              else if (u(o)) {
                if (!o.data(n)) {
                  o.data(n, i('<div class="' + n + '"></div>').insertAfter(o).hide())
                }
                o = o.show().detach();
                r.wrap.bind("onReset", function () {
                  if (i(this).find(o).length) {
                    o.hide().replaceAll(o.data(n)).data(n, false)
                  }
                })
              }
              break;
            case "image":
              o = r.tpl.image.replace("{href}", c);
              break;
            case "swf":
              o = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + c + '"></param>';
              d = "";
              i.each(r.swf, function (e, t) {
                o += '<param name="' + e + '" value="' + t + '"></param>';
                d += " " + e + '="' + t + '"'
              });
              o += '<embed src="' + c + '" type="application/x-shockwave-flash" width="100%" height="100%"' + d + "></embed></object>";
              break
          }
          if (!(u(o) && o.parent().is(r.inner))) {
            r.inner.append(o)
          }
          s.trigger("beforeShow");
          r.inner.css("overflow", l === "yes" ? "scroll" : l === "no" ? "hidden" : l);
          s._setDimension();
          r.wrap.removeClass("fancybox-tmp");
          r.pos = i.extend({}, r.dim, s._getPosition(true));
          s.isOpen = false;
          s.coming = null;
          s.bindEvents();
          if (!s.isOpened) {
            i(".fancybox-wrap").not(r.wrap).stop(true).trigger("onReset").remove()
          }
          else if (t.prevMethod) {
            s.transitions[t.prevMethod]()
          }
          s.transitions[s.isOpened ? r.nextMethod : r.openMethod]();
          s._preloadImages()
        },
        _setDimension: function () {
          var e = s.getViewport(),
            t = 0,
            n = false,
            r = false,
            o = s.wrap,
            a = s.skin,
            l = s.inner,
            u = s.current,
            c = u.width,
            f = u.height,
            m = u.minWidth,
            v = u.minHeight,
            g = u.maxWidth,
            y = u.maxHeight,
            b = u.scrolling,
            w = u.scrollOutside ? u.scrollbarWidth : 0,
            T = u.margin,
            S = T[1] + T[3],
            _ = T[0] + T[2],
            M, C, P, x, A, k, E, I, D, F, H, R, B, j, G;
          o.add(a).add(l).width("auto").height("auto");
          M = a.outerWidth(true) - a.width();
          C = a.outerHeight(true) - a.height();
          P = S + M;
          x = _ + C;
          A = d(c) ? (e.w - P) * h(c) / 100 : c;
          k = d(f) ? (e.h - x) * h(f) / 100 : f;
          if (u.type === "iframe") {
            j = u.content;
            if (u.autoHeight && j.data("ready") === 1) {
              try {
                if (j[0].contentWindow.document.location) {
                  l.width(A).height(9999);
                  G = j.contents().find("body");
                  if (w) {
                    G.css("overflow-x", "hidden")
                  }
                  k = G.height()
                }
              }
              catch (e) {}
            }
          }
          else if (u.autoWidth || u.autoHeight) {
            l.addClass("fancybox-tmp");
            if (!u.autoWidth) {
              l.width(A)
            }
            if (!u.autoHeight) {
              l.height(k)
            }
            if (u.autoWidth) {
              A = l.width()
            }
            if (u.autoHeight) {
              k = l.height()
            }
            l.removeClass("fancybox-tmp")
          }
          c = h(A);
          f = h(k);
          D = A / k;
          m = h(d(m) ? h(m, "w") - P : m);
          g = h(d(g) ? h(g, "w") - P : g);
          v = h(d(v) ? h(v, "h") - x : v);
          y = h(d(y) ? h(y, "h") - x : y);
          E = g;
          I = y;
          R = e.w - S;
          B = e.h - _;
          if (u.aspectRatio) {
            if (c > g) {
              c = g;
              f = c / D
            }
            if (f > y) {
              f = y;
              c = f * D
            }
            if (c < m) {
              c = m;
              f = c / D
            }
            if (f < v) {
              f = v;
              c = f * D
            }
          }
          else {
            c = Math.max(m, Math.min(c, g));
            f = Math.max(v, Math.min(f, y))
          }
          if (u.fitToView) {
            g = Math.min(e.w - P, g);
            y = Math.min(e.h - x, y);
            l.width(h(c)).height(h(f));
            o.width(h(c + M));
            F = o.width();
            H = o.height();
            if (u.aspectRatio) {
              while ((F > R || H > B) && c > m && f > v) {
                if (t++ > 19) {
                  break
                }
                f = Math.max(v, Math.min(y, f - 10));
                c = f * D;
                if (c < m) {
                  c = m;
                  f = c / D
                }
                if (c > g) {
                  c = g;
                  f = c / D
                }
                l.width(h(c)).height(h(f));
                o.width(h(c + M));
                F = o.width();
                H = o.height()
              }
            }
            else {
              c = Math.max(m, Math.min(c, c - (F - R)));
              f = Math.max(v, Math.min(f, f - (H - B)))
            }
          }
          if (w && b === "auto" && f < k && c + M + w < R) {
            c += w
          }
          l.width(h(c)).height(h(f));
          o.width(h(c + M));
          F = o.width();
          H = o.height();
          n = (F > R || H > B) && c > m && f > v;
          r = u.aspectRatio ? c < E && f < I && c < A && f < k : (c < E || f < I) && (c < A || f < k);
          i.extend(u, {
            dim: {
              width: p(F),
              height: p(H)
            },
            origWidth: A,
            origHeight: k,
            canShrink: n,
            canExpand: r,
            wPadding: M,
            hPadding: C,
            wrapSpace: H - a.outerHeight(true),
            skinSpace: a.height() - f
          });
          if (!j && u.autoHeight && f > v && f < y && !r) {
            l.height("auto")
          }
        },
        _getPosition: function (e) {
          var t = s.current,
            i = s.getViewport(),
            n = t.margin,
            r = s.wrap.width() + n[1] + n[3],
            o = s.wrap.height() + n[0] + n[2],
            a = {
              position: "absolute",
              top: n[0],
              left: n[3]
            };
          if (t.autoCenter && t.fixed && !e && o <= i.h && r <= i.w) {
            a.position = "fixed"
          }
          else if (!t.locked) {
            a.top += i.y;
            a.left += i.x
          }
          a.top = p(Math.max(a.top, a.top + (i.h - o) * t.topRatio));
          a.left = p(Math.max(a.left, a.left + (i.w - r) * t.leftRatio));
          return a
        },
        _afterZoomIn: function () {
          var e = s.current;
          if (!e) {
            return
          }
          s.isOpen = s.isOpened = true;
          s.wrap.addClass("fancybox-opened").css("overflow", "visible");
          s.reposition();
          if (e.closeClick || e.nextClick) {
            s.inner.css("cursor", "pointer").bind("click.fb", function (t) {
              if (!i(t.target).is("a") && !i(t.target).parent().is("a")) {
                s[e.closeClick ? "close" : "next"]()
              }
            })
          }
          if (e.closeBtn) {
            i(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", s.close)
          }
          if (e.arrows && s.group.length > 1) {
            if (e.loop || e.index > 0) {
              i(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev)
            }
            if (e.loop || e.index < s.group.length - 1) {
              i(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)
            }
          }
          s.trigger("afterShow");
          if (!e.loop && e.index === e.group.length - 1) {
            s.play(false)
          }
          else if (s.opts.autoPlay && !s.player.isActive) {
            s.opts.autoPlay = false;
            s.play()
          }
        },
        _afterZoomOut: function () {
          var e = s.current;
          i(".fancybox-wrap").stop(true).trigger("onReset").remove();
          i.extend(s, {
            group: {},
            opts: {},
            router: false,
            current: null,
            isActive: false,
            isOpened: false,
            isOpen: false,
            isClosing: false,
            wrap: null,
            skin: null,
            outer: null,
            inner: null
          });
          s.trigger("afterClose", e)
        }
      });
      s.transitions = {
        getOrigPosition: function () {
          var e = s.current,
            t = e.element,
            i = e.orig,
            n = {},
            r = 50,
            o = 50,
            a = e.hPadding,
            l = e.wPadding,
            c = s.getViewport();
          if (!i && e.isDom && t.is(":visible")) {
            i = t.find("img:first");
            if (!i.length) {
              i = t
            }
          }
          if (u(i)) {
            n = i.offset();
            if (i.is("img")) {
              r = i.outerWidth();
              o = i.outerHeight()
            }
          }
          else {
            n.top = c.y + (c.h - o) * e.topRatio;
            n.left = c.x + (c.w - r) * e.leftRatio
          }
          if (e.locked) {
            n.top -= c.y;
            n.left -= c.x
          }
          n = {
            top: p(n.top - a * e.topRatio),
            left: p(n.left - l * e.leftRatio),
            width: p(r + l),
            height: p(o + a)
          };
          return n
        },
        step: function (e, t) {
          var i, n, r, o = t.prop,
            a = s.current,
            l = a.wrapSpace,
            u = a.skinSpace;
          if (o === "width" || o === "height") {
            i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start);
            if (s.isClosing) {
              i = 1 - i
            }
            n = o === "width" ? a.wPadding : a.hPadding;
            r = e - n;
            s.skin[o](h(o === "width" ? r : r - l * i));
            s.inner[o](h(o === "width" ? r : r - l * i - u * i))
          }
        },
        zoomIn: function () {
          var e = s.current,
            t = e.pos,
            n = e.openEffect,
            r = n === "elastic",
            o = i.extend({
              opacity: 1
            }, t);
          delete o.position;
          if (r) {
            t = this.getOrigPosition();
            if (e.openOpacity) {
              t.opacity = .1
            }
          }
          else if (n === "fade") {
            t.opacity = .1
          }
          s.wrap.css(t).animate(o, {
            duration: n === "none" ? 0 : e.openSpeed,
            easing: e.openEasing,
            step: r ? this.step : null,
            complete: s._afterZoomIn
          })
        },
        zoomOut: function () {
          var e = s.current,
            t = e.closeEffect,
            i = t === "elastic",
            n = {
              opacity: .1
            };
          if (i) {
            n = this.getOrigPosition();
            if (e.closeOpacity) {
              n.opacity = .1
            }
          }
          s.wrap.animate(n, {
            duration: t === "none" ? 0 : e.closeSpeed,
            easing: e.closeEasing,
            step: i ? this.step : null,
            complete: s._afterZoomOut
          })
        },
        changeIn: function () {
          var e = s.current,
            t = e.nextEffect,
            i = e.pos,
            n = {
              opacity: 1
            },
            r = s.direction,
            o = 200,
            a;
          i.opacity = .1;
          if (t === "elastic") {
            a = r === "down" || r === "up" ? "top" : "left";
            if (r === "down" || r === "right") {
              i[a] = p(h(i[a]) - o);
              n[a] = "+=" + o + "px"
            }
            else {
              i[a] = p(h(i[a]) + o);
              n[a] = "-=" + o + "px"
            }
          }
          if (t === "none") {
            s._afterZoomIn()
          }
          else {
            s.wrap.css(i).animate(n, {
              duration: e.nextSpeed,
              easing: e.nextEasing,
              complete: s._afterZoomIn
            })
          }
        },
        changeOut: function () {
          var e = s.previous,
            t = e.prevEffect,
            n = {
              opacity: .1
            },
            r = s.direction,
            o = 200;
          if (t === "elastic") {
            n[r === "down" || r === "up" ? "top" : "left"] = (r === "up" || r === "left" ? "-" : "+") + "=" + o + "px"
          }
          e.wrap.animate(n, {
            duration: t === "none" ? 0 : e.prevSpeed,
            easing: e.prevEasing,
            complete: function () {
              i(this).trigger("onReset").remove()
            }
          })
        }
      };
      s.helpers.overlay = {
        overlay: null,
        update: function () {
          var e = "100%",
            n;
          this.overlay.width(e).height("100%");
          if (i.browser.msie) {
            n = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth);
            if (o.width() > n) {
              e = o.width()
            }
          }
          else if (o.width() > r.width()) {
            e = o.width()
          }
          this.overlay.width(e).height(o.height())
        },
        onReady: function (e, n) {
          i(".fancybox-overlay").stop(true, true);
          if (!this.overlay) {
            i.extend(this, {
              overlay: i('<div class="fancybox-overlay"></div>').appendTo(n.parent),
              margin: o.height() > r.height() || i("body").css("overflow-y") === "scroll" ? i("body").css("margin-right") : false,
              el: t.all && !t.querySelector ? i("html") : i("body")
            })
          }
          if (n.fixed && !l) {
            this.overlay.addClass("fancybox-overlay-fixed");
            if (n.autoCenter) {
              this.overlay.append(n.wrap);
              n.locked = this.overlay
            }
          }
          if (e.showEarly === true) {
            this.beforeShow.apply(this, arguments)
          }
        },
        beforeShow: function (e, t) {
          var n = this.overlay.unbind(".fb").width("auto").height("auto").css(e.css);
          if (e.closeClick) {
            n.bind("click.fb", function (e) {
              if (i(e.target).hasClass("fancybox-overlay")) {
                s.close()
              }
            })
          }
          if (t.fixed && !l) {
            if (t.locked) {
              this.el.addClass("fancybox-lock");
              if (this.margin !== false) {
                i("body").css("margin-right", h(this.margin) + t.scrollbarWidth)
              }
            }
          }
          else {
            this.update()
          }
          n.show()
        },
        onUpdate: function (e, t) {
          if (!t.fixed || l) {
            this.update()
          }
        },
        afterClose: function (e) {
          var t = this,
            n = e.speedOut || 0;
          if (t.overlay && !s.isActive) {
            t.overlay.fadeOut(n || 0, function () {
              i("body").css("margin-right", t.margin);
              t.el.removeClass("fancybox-lock");
              t.overlay.remove();
              t.overlay = null
            })
          }
        }
      };
      s.helpers.title = {
        beforeShow: function (e) {
          var t = s.current.title,
            n = e.type,
            r, o;
          if (!c(t) || i.trim(t) === "") {
            return
          }
          r = i('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + t + "</div>");
          switch (n) {
            case "inside":
              o = s.skin;
              break;
            case "outside":
              o = s.wrap;
              break;
            case "over":
              o = s.inner;
              break;
            default:
              o = s.skin;
              r.appendTo("body").width(r.width()).wrapInner('<span class="child"></span>');
              s.current.margin[2] += Math.abs(h(r.css("margin-bottom")));
              break
          }
          if (e.position === "top") {
            r.prependTo(o)
          }
          else {
            r.appendTo(o)
          }
        }
      };
      i.fn.fancybox = function (e) {
        var t, n = i(this),
          r = this.selector || "",
          a = function (o) {
            var a = i(this).blur(),
              l = t,
              u, c;
            if (!(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey) && !a.is(".fancybox-wrap")) {
              u = e.groupAttr || "data-fancybox-group";
              c = a.attr(u);
              if (!c) {
                u = "rel";
                c = a.get(0)[u]
              }
              if (c && c !== "" && c !== "nofollow") {
                a = r.length ? i(r) : n;
                a = a.filter("[" + u + '="' + c + '"]');
                l = a.index(this)
              }
              e.index = l;
              if (s.open(a, e) !== false) {
                o.preventDefault()
              }
            }
          };
        e = e || {};
        t = e.index || 0;
        if (!r || e.live === false) {
          n.unbind("click.fb-start").bind("click.fb-start", a)
        }
        else {
          o.undelegate(r, "click.fb-start").delegate(r + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a)
        }
        return this
      };
      o.ready(function () {
        if (i.scrollbarWidth === n) {
          i.scrollbarWidth = function () {
            var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
              t = e.children(),
              n = t.innerWidth() - t.height(99).innerWidth();
            e.remove();
            return n
          }
        }
        if (i.support.fixedPosition === n) {
          i.support.fixedPosition = function () {
            var e = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
              t = e[0].offsetTop === 20 || e[0].offsetTop === 15;
            e.remove();
            return t
          }()
        }
        i.extend(s.defaults, {
          scrollbarWidth: i.scrollbarWidth(),
          fixed: i.support.fixedPosition,
          parent: i("body")
        })
      })
    })(window, document, n);
    (function (e) {
      var t = e.fancybox;
      t.helpers.thumbs = {
        wrap: null,
        list: null,
        width: 0,
        source: function (t) {
          var i;
          if (t.element) {
            i = e(t.element).find("img").attr("src")
          }
          if (!i && t.type === "image" && t.href) {
            i = t.href
          }
          return i
        },
        init: function (t, i) {
          var n = this,
            r, o = t.width || 50,
            s = t.height || 50,
            a = t.source || this.source;
          r = "";
          for (var l = 0; l < i.group.length; l++) {
            r += '<li><a style="width:' + o + "px;height:" + s + 'px;" href="javascript:window.jQuery.fancybox.jumpto(' + l + ');"></a></li>'
          }
          this.wrap = e('<div id="fancybox-thumbs"></div>').addClass(t.position || "bottom").appendTo("body");
          this.list = e("<ul>" + r + "</ul>").appendTo(this.wrap);
          e.each(i.group, function (t) {
            var r = a(i.group[t]);
            if (!r) {
              return
            }
            e("<img />").load(function () {
              var i = this.width,
                r = this.height,
                a, l, u;
              if (!n.list || !i || !r) {
                return
              }
              a = i / o;
              l = r / s;
              u = n.list.children().eq(t).find("a");
              if (a >= 1 && l >= 1) {
                if (a > l) {
                  i = Math.floor(i / l);
                  r = s
                }
                else {
                  i = o;
                  r = Math.floor(r / a)
                }
              }
              e(this).css({
                width: i,
                height: r,
                top: Math.floor(s / 2 - r / 2),
                left: Math.floor(o / 2 - i / 2)
              });
              u.width(o).height(s);
              e(this).hide().appendTo(u).fadeIn(300)
            }).attr("src", r)
          });
          this.width = this.list.children().eq(0).outerWidth(true);
          this.list.width(this.width * (i.group.length + 1)).css("left", Math.floor(e(window).width() * .5 - (i.index * this.width + this.width * .5)))
        },
        beforeLoad: function (e, t) {
          if (t.group.length < 2) {
            t.helpers.thumbs = false;
            return
          }
          t.margin[e.position === "top" ? 0 : 2] += (e.height || 50) + 15
        },
        afterShow: function (e, t) {
          if (this.list) {
            this.onUpdate(e, t)
          }
          else {
            this.init(e, t)
          }
          this.list.children().removeClass("active").eq(t.index).addClass("active")
        },
        onUpdate: function (t, i) {
          if (this.list) {
            this.list.stop(true).animate({
              left: Math.floor(e(window).width() * .5 - (i.index * this.width + this.width * .5))
            }, 150)
          }
        },
        beforeClose: function () {
          if (this.wrap) {
            this.wrap.remove()
          }
          this.wrap = null;
          this.list = null;
          this.width = 0
        }
      }
    })(n)
  }
});