(this.webpackJsonpntfront = this.webpackJsonpntfront || []).push([
  [4],
  {
    44: function (e, t, n) {
      "use strict";
      function a(e, t, n, a) {
        var r = e % 10;
        return 1 === r && (1 === e || e > 20)
          ? t
          : r > 1 && r < 5 && (e > 20 || e < 10)
          ? n
          : a;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        prefixAgo: null,
        prefixFromNow: "\u0447\u0435\u0440\u0435\u0437",
        suffixAgo: "\u043d\u0430\u0437\u0430\u0434",
        suffixFromNow: null,
        seconds:
          "\u043c\u0435\u043d\u044c\u0448\u0435 \u043c\u0438\u043d\u0443\u0442\u044b",
        minute: "\u043c\u0438\u043d\u0443\u0442\u0443",
        minutes: function (e) {
          return a(
            e,
            "%d \u043c\u0438\u043d\u0443\u0442\u0430",
            "%d \u043c\u0438\u043d\u0443\u0442\u044b",
            "%d \u043c\u0438\u043d\u0443\u0442"
          );
        },
        hour: "\u0447\u0430\u0441",
        hours: function (e) {
          return a(
            e,
            "%d \u0447\u0430\u0441",
            "%d \u0447\u0430\u0441\u0430",
            "%d \u0447\u0430\u0441\u043e\u0432"
          );
        },
        day: "\u0434\u0435\u043d\u044c",
        days: function (e) {
          return a(
            e,
            "%d \u0434\u0435\u043d\u044c",
            "%d \u0434\u043d\u044f",
            "%d \u0434\u043d\u0435\u0439"
          );
        },
        month: "\u043c\u0435\u0441\u044f\u0446",
        months: function (e) {
          return a(
            e,
            "%d \u043c\u0435\u0441\u044f\u0446",
            "%d \u043c\u0435\u0441\u044f\u0446\u0430",
            "%d \u043c\u0435\u0441\u044f\u0446\u0435\u0432"
          );
        },
        year: "\u0433\u043e\u0434",
        years: function (e) {
          return a(
            e,
            "%d \u0433\u043e\u0434",
            "%d \u0433\u043e\u0434\u0430",
            "%d \u043b\u0435\u0442"
          );
        },
      };
      t.default = r;
    },
    45: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function (t, n, r, o, i, l) {
            var c = l();
            "week" !== n ||
              e.week ||
              e.weeks ||
              ((t = Math.round(Math.abs(o - c) / 864e5)), (n = "day"));
            var u = (function (e, t, n) {
                return function (r) {
                  return "function" === typeof r
                    ? r(e, t).replace(/%d/g, a(n, e))
                    : r.replace(/%d/g, a(n, e));
                };
              })(t, c - o, null != e.numbers ? e.numbers : void 0),
              s = [];
            if (
              ("ago" === r && e.prefixAgo && s.push(u(e.prefixAgo)),
              "from now" === r && e.prefixFromNow && s.push(u(e.prefixFromNow)),
              t > 1)
            ) {
              var f = e[n + "s"] || e[n] || "%d " + n;
              s.push(u(f));
            } else {
              var d = e[n] || e[n + "s"] || "%d " + n;
              s.push(u(d));
            }
            "ago" === r && e.suffixAgo && s.push(u(e.suffixAgo)),
              "from now" === r && e.suffixFromNow && s.push(u(e.suffixFromNow));
            var m = "string" === typeof e.wordSeparator ? e.wordSeparator : " ";
            return s.join(m);
          };
        });
      !(function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
      })(n(0));
      var a = function (e, t) {
        return e && 10 === e.length
          ? String(t)
              .split("")
              .map(function (t) {
                return t.match(/^[0-9]$/) ? e[parseInt(t)] : t;
              })
              .join("")
          : String(t);
      };
    },
    46: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        r = function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                a = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(a = (i = l.next()).done) &&
                  (n.push(i.value), !t || n.length !== t);
                  a = !0
                );
              } catch (c) {
                (r = !0), (o = c);
              } finally {
                try {
                  !a && l.return && l.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        i = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(0)),
        l = u(n(47)),
        c = u(n(48));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var d = i.Component,
        m = 86400,
        p = (function (e) {
          function t() {
            var e, n, a;
            s(this, t);
            for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (n = a = f(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(o)
                )
              )),
              (a.isStillMounted = !1),
              (a.tick = function (e) {
                if (a.isStillMounted && a.props.live) {
                  var t = (0, c.default)(a.props.date).valueOf();
                  if (t) {
                    var n = a.props.now(),
                      r = Math.round(Math.abs(n - t) / 1e3),
                      o = r < 60 ? 1e3 : r < 3600 ? 6e4 : r < m ? 36e5 : 0,
                      i = Math.min(
                        Math.max(o, 1e3 * a.props.minPeriod),
                        1e3 * a.props.maxPeriod
                      );
                    i &&
                      (a.timeoutId && clearTimeout(a.timeoutId),
                      (a.timeoutId = setTimeout(a.tick, i))),
                      e || a.forceUpdate();
                  } else console.warn("[react-timeago] Invalid Date provided");
                }
              }),
              f(a, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.isStillMounted = !0), this.props.live && this.tick(!0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  (this.props.live === e.live && this.props.date === e.date) ||
                    (!this.props.live &&
                      this.timeoutId &&
                      clearTimeout(this.timeoutId),
                    this.tick());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this.isStillMounted = !1),
                    this.timeoutId &&
                      (clearTimeout(this.timeoutId), (this.timeoutId = void 0));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.formatter,
                    o = e.component,
                    u = (e.live, e.minPeriod, e.maxPeriod, e.title),
                    s = e.now,
                    f = (function (e, t) {
                      var n = {};
                      for (var a in e)
                        t.indexOf(a) >= 0 ||
                          (Object.prototype.hasOwnProperty.call(e, a) &&
                            (n[a] = e[a]));
                      return n;
                    })(e, [
                      "date",
                      "formatter",
                      "component",
                      "live",
                      "minPeriod",
                      "maxPeriod",
                      "title",
                      "now",
                    ]),
                    d = (0, c.default)(t).valueOf();
                  if (!d) return null;
                  var p = s(),
                    v = Math.round(Math.abs(p - d) / 1e3),
                    h = d < p ? "ago" : "from now",
                    b =
                      v < 60
                        ? [Math.round(v), "second"]
                        : v < 3600
                        ? [Math.round(v / 60), "minute"]
                        : v < m
                        ? [Math.round(v / 3600), "hour"]
                        : v < 604800
                        ? [Math.round(v / m), "day"]
                        : v < 2592e3
                        ? [Math.round(v / 604800), "week"]
                        : v < 31536e3
                        ? [Math.round(v / 2592e3), "month"]
                        : [Math.round(v / 31536e3), "year"],
                    y = r(b, 2),
                    w = y[0],
                    g = y[1],
                    E =
                      "undefined" === typeof u
                        ? "string" === typeof t
                          ? t
                          : (0, c.default)(t)
                              .toISOString()
                              .substr(0, 16)
                              .replace("T", " ")
                        : u,
                    x =
                      "time" === o
                        ? Object.assign({}, f, {
                            dateTime: (0, c.default)(t).toISOString(),
                          })
                        : f,
                    O = l.default.bind(null, w, g, h);
                  return i.createElement(
                    o,
                    a({}, x, { title: E }),
                    n(w, g, h, d, O, s)
                  );
                },
              },
            ]),
            t
          );
        })(d);
      (p.displayName = "TimeAgo"),
        (p.defaultProps = {
          live: !0,
          component: "time",
          minPeriod: 0,
          maxPeriod: 1 / 0,
          formatter: l.default,
          now: function () {
            return Date.now();
          },
        }),
        (t.default = p);
    },
    47: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, n) {
          1 !== e && (t += "s");
          return e + " " + t + " " + n;
        });
      !(function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
      })(n(0));
    },
    48: function (e, t, n) {
      "use strict";
      function a(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = new Date(e);
          if (!Number.isNaN(t.valueOf())) return t;
          var n = String(e).match(/\d+/g);
          if (null == n || n.length <= 2) return t;
          var r = n.map(function (e) {
              return parseInt(e);
            }),
            o = ((s = r), Array.isArray(s) ? s : Array.from(s)),
            i = o[0],
            l = o[1],
            c = o.slice(2),
            u = [i, l - 1].concat(a(c));
          return new Date(Date.UTC.apply(Date, a(u)));
          var s;
        });
    },
    49: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        });
      var a = function (e) {
          var t = Math.round(new Date().getTime() / 1e3 - e),
            n = Math.floor(t / 31536e3);
          return n > 1
            ? "\u0431\u043e\u043b\u044c\u0448\u0435 \u0433\u043e\u0434\u0430 \u043d\u0430\u0437\u0430\u0434"
            : (n = Math.floor(t / 2592e3)) > 1
            ? 1 === n
              ? "1 \u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434"
              : "".concat(
                  n,
                  n > 1 && n < 5
                    ? " \u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0437\u0430\u0434"
                    : " \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043d\u0430\u0437\u0430\u0434"
                )
            : (n = Math.floor(t / 86400)) > 1
            ? 1 === n
              ? "1 \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434"
              : "".concat(
                  n,
                  n > 1 && n < 5
                    ? " \u0434\u043d\u044f \u043d\u0430\u0437\u0430\u0434"
                    : " \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434"
                )
            : (n = Math.floor(t / 3600)) > 1
            ? 1 === n
              ? "1 \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434"
              : "".concat(
                  n,
                  n > 1 && n < 5
                    ? " \u0447\u0430\u0441\u0430 \u043d\u0430\u0437\u0430\u0434"
                    : " \u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434"
                )
            : (n = Math.floor(t / 60)) > 1
            ? 1 === n
              ? "1 \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434"
              : "".concat(
                  n,
                  n > 1 && n < 5
                    ? " \u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434"
                    : " \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434"
                )
            : t > 1
            ? 1 === t
              ? "1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u043d\u0430\u0437\u0430\u0434"
              : "".concat(
                  t,
                  t > 1 && t < 5
                    ? " \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u043d\u0430\u0437\u0430\u0434"
                    : " \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430\u0437\u0430\u0434"
                )
            : void 0;
        },
        r = function (e) {
          var t = new Date().getTime() / 1e3 - e,
            n = Math.floor(t / 2592e3);
          return n > 1
            ? n < 2
              ? "\u0447\u0435\u0440\u0435\u0437 1 \u043c\u0435\u0441\u044f\u0446 "
              : "\u0447\u0435\u0440\u0435\u0437 ".concat(
                  n,
                  n > 1 && n < 5
                    ? " \u043c\u0435\u0441\u044f\u0446\u0430"
                    : " \u043c\u0435\u0441\u044f\u0446\u0435\u0432"
                )
            : (n = Math.floor(t / 86400)) > 1
            ? n < 2
              ? "\u0447\u0435\u0440\u0435\u0437 1 \u0434\u0435\u043d\u044c"
              : "\u0447\u0435\u0440\u0435\u0437 ".concat(
                  n,
                  n > 1 && n < 5
                    ? " \u0434\u043d\u044f"
                    : " \u0434\u043d\u0435\u0439"
                )
            : "\u0441\u0435\u0433\u043e\u0434\u043d\u044f";
        };
    },
    50: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a);
      t.a = function (e) {
        var t = e.children;
        return r.a.createElement(
          "div",
          { className: "d-flex flex-grow-1" },
          r.a.createElement(
            "div",
            { className: "w-100 max-width-600px " },
            r.a.createElement("div", { className: "w-100" }, t)
          )
        );
      };
    },
    51: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a);
      t.a = function (e) {
        var t = e.title;
        return r.a.createElement(
          "div",
          { className: "text-white mt-20 mb-5 font-size-20" },
          t
        );
      };
    },
    52: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        o = n(8),
        i = n(5),
        l = [
          "\u042f\u043d\u0432\u0430\u0440\u044c",
          "\u0424\u0435\u0432\u0440\u0430\u043b\u044c",
          "\u041c\u0430\u0440\u0442",
          "\u0410\u043f\u0440\u0435\u043b\u044c",
          "\u041c\u0430\u0439",
          "\u0418\u044e\u043d\u044c",
          "\u0418\u044e\u043b\u044c",
          "\u0410\u0432\u0433\u0443\u0441\u0442",
          "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c",
          "\u041e\u043a\u0442\u044f\u0431\u0440\u044c",
          "\u041d\u043e\u044f\u0431\u0440\u044c",
          "\u0414\u0435\u043a\u0430\u0431\u0440\u044c",
        ],
        c = [
          "\u0412\u0441",
          "\u041f\u043d",
          "\u0412\u0442",
          "\u0421\u0440",
          "\u0427\u0442",
          "\u041f\u0442",
          "\u0421\u0431",
        ],
        u = function () {
          for (
            var e = Object(a.useState)(new Date().getMonth()),
              t = Object(o.a)(e, 2),
              n = t[0],
              u = t[1],
              s = Object(a.useState)(new Date().getFullYear()),
              f = Object(o.a)(s, 2),
              d = f[0],
              m = f[1],
              p = Object(a.useState)(new Date(d, n, 0).getDate()),
              v = Object(o.a)(p, 2),
              h = v[0],
              b = v[1],
              y = Object(a.useState)(new Date(d, n, 1).getDay()),
              w = Object(o.a)(y, 2),
              g = w[0],
              E = w[1],
              x = c.map(function (e) {
                return r.a.createElement(
                  "th",
                  {
                    key: e,
                    className: "text-dark text-align-center font-size-20",
                  },
                  e
                );
              }),
              O = [],
              j = 0;
            j < g;
            j++
          )
            O.push(r.a.createElement("td", null));
          for (
            var N =
                new Date().getFullYear() === d && new Date().getMonth() === n
                  ? new Date().getDate()
                  : null,
              M = [],
              _ = 1;
            _ <= h;
            _++
          ) {
            var S = _ === N ? "bg-blue rounded" : "";
            M.push(
              r.a.createElement(
                "td",
                {
                  key: _,
                  className: "text-dark font-size-20 text-align-center ".concat(
                    S,
                    " cursor-pointer"
                  ),
                },
                _
              )
            );
          }
          var k = [].concat(O, M),
            D = [],
            P = [];
          k.forEach(function (e, t) {
            t % 7 !== 0 ? P.push(e) : (D.push(P), (P = []).push(e)),
              t === k.length - 1 && D.push(P);
          });
          var T = D.map(function (e, t) {
            return r.a.createElement("tr", null, e);
          });
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: "text-white w-100 mb-5 font-size-20 mt-20" },
              "\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"
            ),
            r.a.createElement(
              "div",
              { className: "bg-white p-5 w-100 rounded cursor-select" },
              r.a.createElement(
                "div",
                {
                  className:
                    "pl-20 pr-20 d-flex justify-content-between font-size-20",
                },
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(i.a, {
                    name: "back",
                    className: "fill-dark w-30px cursor-pointer hover-blue",
                    onClick: function () {
                      return (
                        u(0 === n ? 11 : n - 1),
                        m(0 === n ? d - 1 : d),
                        E(new Date(d, 0 === n ? 11 : n - 1, 1).getDay()),
                        void b(32 - new Date(d, n - 1, 32).getDate())
                      );
                    },
                  })
                ),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement("span", null, l[n]),
                  " ",
                  r.a.createElement("span", null, d)
                ),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(i.a, {
                    name: "back",
                    className:
                      "fill-dark w-30px cursor-pointer transform-rotate-180 hover-blue",
                    onClick: function () {
                      return (
                        u(11 === n ? 0 : n + 1),
                        m(11 === n ? d + 1 : d),
                        E(new Date(d, n + 1, 1).getDay()),
                        void b(
                          32 - new Date(d, 11 === n ? 0 : n + 1, 32).getDate()
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "table",
                  { className: "w-100 h-300px" },
                  r.a.createElement(
                    "thead",
                    null,
                    r.a.createElement("tr", null, x)
                  ),
                  r.a.createElement("tbody", null, T)
                )
              )
            )
          );
        },
        s = function () {
          return r.a.createElement(
            "footer",
            {
              className:
                "text-white mt-15 w-100 text-align-center mt-15 cursor-pointer",
            },
            r.a.createElement("span", null, " \xa9 NaTeste, Inc., 2020"),
            "\xa9 TOO NaNabke 2020",
            r.a.createElement(
              "span",
              null,
              " \u0423\u0441\u043b\u043e\u0432\u0438\u044f"
            ),
            r.a.createElement(
              "span",
              null,
              " \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"
            )
          );
        },
        f = n(11);
      t.a = function () {
        return (
          Object(f.a)("(min-width:1100px)") &&
          r.a.createElement(
            "div",
            { className: "w-350px h-100" },
            r.a.createElement(
              "div",
              { className: "d-flex flex-column h-100" },
              r.a.createElement(u, null),
              r.a.createElement(s, null)
            )
          )
        );
      };
    },
    53: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        o = function () {
          return r.a.createElement(
            "div",
            { className: "d-flex justify-content-center" },
            r.a.createElement("div", {
              className:
                "animation-rotate mt-10 border-radius-50 border-loading",
              style: { width: "30px", height: "30px" },
            })
          );
        },
        i = n(11),
        l = n(44),
        c = n.n(l),
        u = n(45),
        s = n.n(u),
        f = n(46),
        d = n.n(f),
        m = function (e) {
          var t = e.item,
            n = Object(i.a)("(min-width:680px)");
          return r.a.createElement(
            "div",
            { className: "d-flex w-100 mb-15 align-items-start" },
            r.a.createElement("div", {
              className: "".concat(
                n ? "mr-10" : "mr-5",
                " top-10 position-sticky  rounded"
              ),
              style: {
                background: "url(".concat(
                  t.field0,
                  ") no-repeat 50% 50% / cover"
                ),
                minWidth: "".concat(n ? "80px" : "60px"),
                height: "".concat(n ? "80px" : "60px"),
              },
            }),
            r.a.createElement(
              "div",
              {
                className: "w-100 rounded bg-white ".concat(
                  n ? "p-15" : "p-5",
                  " d-flex flex-column text-break overflow-hidden"
                ),
              },
              r.a.createElement(
                "div",
                {
                  className: "d-flex justify-content-between border-bottom ",
                  style: { fontSize: "".concat(n ? "20px" : "14px") },
                },
                r.a.createElement("div", null, t.field1),
                r.a.createElement("div", { className: "text-muted" }, t.field2)
              ),
              r.a.createElement(
                "div",
                {
                  className: "p-5",
                  style: { fontSize: "".concat(n ? "16px" : "14px") },
                },
                t.field3
              ),
              (t.field4 || t.field5) &&
                r.a.createElement(
                  "div",
                  {
                    className: "d-flex justify-content-between mt-5",
                    style: { fontSize: "".concat(n ? "16px" : "14px") },
                  },
                  r.a.createElement(
                    "div",
                    { className: "text-muted align-self-end" },
                    t.field4
                  ),
                  r.a.createElement(
                    "div",
                    { className: "text-muted align-self-end" },
                    t.field5
                  )
                ),
              r.a.createElement(
                "div",
                {
                  className: "d-flex justify-content-between mt-5",
                  style: { fontSize: "".concat(n ? "16px" : "14px") },
                },
                r.a.createElement(
                  "div",
                  { className: "text-muted align-self-end" },
                  t.field6
                ),
                r.a.createElement(
                  "div",
                  { className: "text-muted align-self-end" },
                  r.a.createElement(d.a, {
                    date: new Date(1e3 * t.field7),
                    formatter: s()(c.a),
                  })
                )
              ),
              t.field8 &&
                r.a.createElement(
                  "div",
                  {
                    className: "d-flex justify-content-end mt-5",
                    style: { fontSize: "".concat(n ? "16px" : "14px") },
                  },
                  r.a.createElement(
                    "div",
                    {
                      className: "btn",
                      onClick: function () {
                        return t.field8;
                      },
                    },
                    "\u0412\u0437\u044f\u0442\u044c \u0437\u0430\u043a\u0430\u0437"
                  )
                )
            )
          );
        };
      t.a = function (e) {
        var t = e.page,
          n = e.setPage,
          i = e.data,
          l = e.loading,
          c = e.error,
          u = e.hasMore,
          s = e.type,
          f = Object(a.useRef)(),
          d = Object(a.useCallback)(
            function (e) {
              l ||
                (f.current && f.current.disconnect(),
                (f.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && u && n(t + 1);
                })),
                e && f.current.observe(e));
            },
            [l, u]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          !l &&
            void 0 !== i &&
            i.map(function (e) {
              return r.a.createElement(
                "div",
                { ref: d, key: e.id },
                "avatar-card" === s && r.a.createElement(m, { item: e })
              );
            }),
          l && r.a.createElement(o, null),
          u && r.a.createElement("div", { className: "mv-20" }),
          c &&
            r.a.createElement(
              "div",
              { className: "text-white text-align-center m-20" },
              "\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d"
            ),
          !l &&
            !c &&
            0 === i.length &&
            r.a.createElement(
              "div",
              { className: "text-white text-align-center m-20" },
              "\u041f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"
            )
        );
      };
    },
    60: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(50),
        i = n(8),
        l = n(4),
        c = n(21),
        u = "".concat(c.a, "/api/myorders/"),
        s = n(51),
        f = n(53),
        d = n(49),
        m = function () {
          var e = Object(l.b)(),
            t = Object(a.useState)(1),
            n = Object(i.a)(t, 2),
            o = n[0],
            c = n[1],
            m = Object(a.useState)([]),
            p = Object(i.a)(m, 2),
            v = p[0],
            h = p[1],
            b = Object(l.c)(function (e) {
              return e.myOrders;
            });
          return (
            Object(a.useEffect)(
              function () {
                e(
                  (function (e) {
                    return function (t) {
                      return (
                        t({ type: "GET_MY_ORDERS_FETCHING" }),
                        fetch("".concat(u, "?page=").concat(e), {
                          method: "get",
                        })
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            t({ type: "GET_MY_ORDERS_SUCCESS", payload: e });
                          })
                          .catch(function (e) {
                            return t({
                              type: "GET_MY_ORDERS_ERROR",
                              payload: e,
                            });
                          })
                      );
                    };
                  })(o)
                );
              },
              [o]
            ),
            Object(a.useEffect)(
              function () {
                var e,
                  t =
                    null === (e = b.data) || void 0 === e
                      ? void 0
                      : e.map(function (e) {
                          var t;
                          return {
                            field0:
                              null === (t = e.customer.avatar) || void 0 === t
                                ? void 0
                                : t.file,
                            field1: e.title,
                            field2:
                              "\u043d\u0443\u0436\u0435\u043d " +
                              Object(d.b)(e.deadline),
                            field3: e.description,
                            field4:
                              "\u0426\u0435\u043d\u0430 " +
                              e.price +
                              " \u0442\u0433",
                            field5:
                              "\u0412\u0435\u0441 " +
                              e.weight +
                              " \u043a\u0433",
                            field6: ""
                              .concat(e.customer.first_name, " ")
                              .concat(e.customer.last_name),
                            field7: Object(d.a)(e.created_at),
                          };
                        });
                h(t);
              },
              [b.data]
            ),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(s.a, {
                title:
                  "\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b",
              }),
              r.a.createElement(f.a, {
                data: v,
                page: o,
                setPage: function (e) {
                  return c(e);
                },
                loading: b.isFetching,
                error: b.error,
                hasMore: b.hasMore,
                type: "avatar-card",
              })
            )
          );
        },
        p = n(52);
      t.default = function () {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(o.a, null, r.a.createElement(m, null)),
          r.a.createElement(p.a, null)
        );
      };
    },
  },
]);
//# sourceMappingURL=4.74978a51.chunk.js.map
