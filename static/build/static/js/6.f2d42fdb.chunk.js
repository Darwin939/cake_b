(this.webpackJsonpntfront = this.webpackJsonpntfront || []).push([
  [6],
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
          return function (t, n, r, i, o, l) {
            var c = l();
            "week" !== n ||
              e.week ||
              e.weeks ||
              ((t = Math.round(Math.abs(i - c) / 864e5)), (n = "day"));
            var u = (function (e, t, n) {
                return function (r) {
                  return "function" === typeof r
                    ? r(e, t).replace(/%d/g, a(n, e))
                    : r.replace(/%d/g, a(n, e));
                };
              })(t, c - i, null != e.numbers ? e.numbers : void 0),
              s = [];
            if (
              ("ago" === r && e.prefixAgo && s.push(u(e.prefixAgo)),
              "from now" === r && e.prefixFromNow && s.push(u(e.prefixFromNow)),
              t > 1)
            ) {
              var d = e[n + "s"] || e[n] || "%d " + n;
              s.push(u(d));
            } else {
              var f = e[n] || e[n + "s"] || "%d " + n;
              s.push(u(f));
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
                i = void 0;
              try {
                for (
                  var o, l = e[Symbol.iterator]();
                  !(a = (o = l.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  a = !0
                );
              } catch (c) {
                (r = !0), (i = c);
              } finally {
                try {
                  !a && l.return && l.return();
                } finally {
                  if (r) throw i;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        },
        i = (function () {
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
        o = (function (e) {
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
      function d(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var f = o.Component,
        m = 86400,
        p = (function (e) {
          function t() {
            var e, n, a;
            s(this, t);
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              (n = a = d(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(i)
                )
              )),
              (a.isStillMounted = !1),
              (a.tick = function (e) {
                if (a.isStillMounted && a.props.live) {
                  var t = (0, c.default)(a.props.date).valueOf();
                  if (t) {
                    var n = a.props.now(),
                      r = Math.round(Math.abs(n - t) / 1e3),
                      i = r < 60 ? 1e3 : r < 3600 ? 6e4 : r < m ? 36e5 : 0,
                      o = Math.min(
                        Math.max(i, 1e3 * a.props.minPeriod),
                        1e3 * a.props.maxPeriod
                      );
                    o &&
                      (a.timeoutId && clearTimeout(a.timeoutId),
                      (a.timeoutId = setTimeout(a.tick, o))),
                      e || a.forceUpdate();
                  } else console.warn("[react-timeago] Invalid Date provided");
                }
              }),
              d(a, n)
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
            i(t, [
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
                    i = e.component,
                    u = (e.live, e.minPeriod, e.maxPeriod, e.title),
                    s = e.now,
                    d = (function (e, t) {
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
                    f = (0, c.default)(t).valueOf();
                  if (!f) return null;
                  var p = s(),
                    h = Math.round(Math.abs(p - f) / 1e3),
                    v = f < p ? "ago" : "from now",
                    b =
                      h < 60
                        ? [Math.round(h), "second"]
                        : h < 3600
                        ? [Math.round(h / 60), "minute"]
                        : h < m
                        ? [Math.round(h / 3600), "hour"]
                        : h < 604800
                        ? [Math.round(h / m), "day"]
                        : h < 2592e3
                        ? [Math.round(h / 604800), "week"]
                        : h < 31536e3
                        ? [Math.round(h / 2592e3), "month"]
                        : [Math.round(h / 31536e3), "year"],
                    g = r(b, 2),
                    y = g[0],
                    x = g[1],
                    E =
                      "undefined" === typeof u
                        ? "string" === typeof t
                          ? t
                          : (0, c.default)(t)
                              .toISOString()
                              .substr(0, 16)
                              .replace("T", " ")
                        : u,
                    w =
                      "time" === i
                        ? Object.assign({}, d, {
                            dateTime: (0, c.default)(t).toISOString(),
                          })
                        : d,
                    O = l.default.bind(null, y, x, v);
                  return o.createElement(
                    i,
                    a({}, w, { title: E }),
                    n(y, x, v, f, O, s)
                  );
                },
              },
            ]),
            t
          );
        })(f);
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
            i = ((s = r), Array.isArray(s) ? s : Array.from(s)),
            o = i[0],
            l = i[1],
            c = i.slice(2),
            u = [o, l - 1].concat(a(c));
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
    55: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        i = n(11);
      t.a = function (e) {
        var t = e.children,
          n = Object(i.a)("(min-width:500px)"),
          a = Object(i.a)("(min-height:500px)");
        return r.a.createElement(
          "div",
          {
            className: "w-100 bg-white rounded ".concat(
              n && a && "mv-20",
              " max-width-990px"
            ),
          },
          t
        );
      };
    },
    56: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(8),
        r = n(0),
        i = n.n(r),
        o = n(55),
        l = n(26),
        c = n(4),
        u = n(11),
        s =
          (n(49),
          function (e) {
            var t = e.chat,
              n = Object(c.b)(),
              a = Object(c.c)(function (e) {
                return e.chat.unreadMessages;
              }),
              r = Object(c.c)(function (e) {
                return e.chat.dialogueID.id;
              }),
              o = Object(u.a)("(min-width:500px)"),
              l = Object(u.a)("(min-height:500px)");
            return i.a.createElement(
              "div",
              {
                className:
                  "w-100 pl-15 d-flex  cursor-pointer hover-whitegray bg-white",
                key: t.id,
                style: { height: "65px" },
                onClick: function () {
                  r !== t.user_id &&
                    (n({ type: "SET_DIALOGUE_ID", payload: t.user_id }),
                    n({ type: "FETCH_DIALOGUE_MESSAGES_CLEAR" }));
                },
              },
              i.a.createElement(
                "div",
                { style: { padding: "8px 8px 8px 0" } },
                i.a.createElement("img", {
                  className: "rounded-circle",
                  src: "".concat(t.avatar),
                  width: 50,
                  height: 50,
                })
              ),
              i.a.createElement(
                "div",
                { className: "w-100 border-bottom pr-15" },
                i.a.createElement(
                  "div",
                  { style: { padding: "8px 0", height: "100%" } },
                  i.a.createElement(
                    "div",
                    { className: "d-flex w-100 justify-content-between" },
                    i.a.createElement(
                      "div",
                      null,
                      t.first_name,
                      " ",
                      t.last_name
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { className: "d-flex justify-content-between" },
                    i.a.createElement(
                      "div",
                      {
                        className: "text-muted",
                        style: {
                          maxWidth: "".concat(o && l ? "220px" : "170px"),
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        },
                      },
                      t.last_message.content
                    ),
                    !a.loading &&
                      (function (e, t) {
                        for (var n = 0; n < e.length; n++)
                          if (e[n].from_user_id === t) return !0;
                        return !1;
                      })(a.data, t.user_id) &&
                      r !== t.user_id &&
                      i.a.createElement(
                        "div",
                        {
                          className:
                            "ml-10 rounded-circle bg-blue text-white text-align-center mr-20",
                          style: { width: "20px", height: "20px" },
                        },
                        (function (e, t) {
                          for (var n = null, a = 0; a < e.length; a++)
                            e[a].from_user_id === t && (n = a);
                          var r = 0;
                          return (
                            e[n].messages.forEach(function () {
                              return r++;
                            }),
                            r
                          );
                        })(a.data, t.user_id)
                      )
                  )
                )
              )
            );
          }),
        d = function (e) {
          var t = e.listChats,
            n = e.lastElementRef;
          return i.a.createElement(
            "div",
            {
              className:
                "w-390px d-flex flex-column h-100 position-relative border-right-grey",
              style: { maxWidth: "330px", minWidth: "330px" },
            },
            i.a.createElement(
              "div",
              {
                className:
                  "h-50px d-flex cursor-select flex-column h-50px font-size-20 text-align-center justify-content-center w-100 border-bottom",
                style: { minHeight: "50px" },
              },
              "\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"
            ),
            i.a.createElement(
              "div",
              {
                className: "h-100 rounded-left w-100",
                style: { overflow: "hidden auto" },
              },
              t.loading
                ? "LOADING"
                : t.data.map(function (e, t) {
                    return i.a.createElement(
                      "div",
                      { ref: n, key: t },
                      i.a.createElement(s, { chat: e })
                    );
                  }),
              i.a.createElement("div", { className: "mv-20" })
            )
          );
        },
        f = function (e) {
          var t = e.listChats,
            n = e.lastElementRef,
            a = e.setChatListInMobile;
          return i.a.createElement(
            "div",
            { className: "w-100 h-100" },
            t.loading
              ? "LOADING"
              : t.data.map(function (e, t) {
                  return i.a.createElement(
                    "div",
                    {
                      ref: n,
                      key: t,
                      onClick: function () {
                        return a(!1);
                      },
                    },
                    i.a.createElement(s, { chat: e })
                  );
                })
          );
        },
        m = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement("div", {
              style: {
                width: "20px",
                borderBottom: "1px solid black",
                height: "1px",
                marginTop: "3px",
              },
            }),
            i.a.createElement("div", {
              style: {
                width: "20px",
                borderBottom: "1px solid black",
                height: "1px",
                marginTop: "3px",
              },
            }),
            i.a.createElement("div", {
              style: {
                width: "20px",
                borderBottom: "1px solid black",
                height: "1px",
                marginTop: "3px",
              },
            })
          );
        },
        p = function (e) {
          var t = e.tabletActive,
            n = e.setTabletActive,
            a = e.listChats,
            r = e.lastElementRef;
          return i.a.createElement(
            "div",
            { className: "d-flex flex-column border-right-grey p-5" },
            t
              ? i.a.createElement(
                  "div",
                  {
                    onClick: function () {
                      return n(!1);
                    },
                  },
                  i.a.createElement(m, null)
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    "div",
                    {
                      className: "h-100 rounded-left",
                      style: {
                        overflow: "hidden auto",
                        maxWidth: "300px",
                        minWidth: "300px",
                      },
                    },
                    a.loading
                      ? "LOADING"
                      : a.data.map(function (e, t) {
                          return i.a.createElement(
                            "div",
                            {
                              ref: r,
                              key: t,
                              onClick: function () {
                                return n(!0);
                              },
                            },
                            i.a.createElement(s, { chat: e })
                          );
                        }),
                    i.a.createElement("div", { className: "mv-20" })
                  )
                )
          );
        },
        h = function (e) {
          var t = e.setChatListInMobile,
            n = Object(c.b)(),
            o = Object(c.c)(function (e) {
              return e.chat.listChats;
            }),
            s = Object(r.useState)(1),
            m = Object(a.a)(s, 2),
            h = m[0],
            v = m[1];
          Object(r.useEffect)(
            function () {
              n({ type: "LIST_CHATS_LOADING", payload: !0 }),
                l.b.send(
                  JSON.stringify({ command: "list_chats", page: "".concat(h) })
                );
            },
            [h]
          );
          var b = Object(r.useRef)(),
            g = Object(r.useCallback)(
              function (e) {
                o.loading ||
                  ((b.current = new IntersectionObserver(function (e) {
                    e[0].isIntersecting && o.hasMore && v(h + 1);
                  })),
                  e && b.current.observe(e));
              },
              [o.loading, o.hasMore, o.data]
            ),
            y = Object(u.a)("(min-width:1100px)"),
            x = Object(u.a)("(min-width:500px)"),
            E = Object(u.a)("(min-height:500px)"),
            w = Object(r.useState)(!0),
            O = Object(a.a)(w, 2),
            j = O[0],
            _ = O[1];
          return y
            ? i.a.createElement(d, { listChats: o, lastElementRef: g })
            : x && E
            ? i.a.createElement(p, {
                tabletActive: j,
                setTabletActive: _,
                listChats: o,
                lastElementRef: g,
              })
            : i.a.createElement(f, {
                listChats: o,
                lastElementRef: g,
                setChatListInMobile: t,
              });
        },
        v = n(46),
        b = n.n(v),
        g = n(44),
        y = n.n(g),
        x = n(45),
        E = n.n(x),
        w = function (e) {
          var t = e.message,
            n =
              e.from.username ===
              (null === t || void 0 === t ? void 0 : t.author)
                ? "start"
                : "end";
          return i.a.createElement(
            "div",
            { className: "d-flex justify-content-".concat(n) },
            i.a.createElement(
              "div",
              {
                className: "rounded text-break-word",
                style: {
                  margin: " 5px",
                  maxWidth: "80%",
                  background: "rgb(29, 161, 242)",
                  color: "rgb(255, 255, 255)",
                  padding: "0.375rem 0.75rem",
                },
              },
              null === t || void 0 === t ? void 0 : t.content,
              i.a.createElement(
                "div",
                {
                  className: "d-flex justify-content-end",
                  style: {
                    fontSize: "0.7rem",
                    alignSelf: "flex-end",
                    color: "rgba(250, 250, 250, 0.5)",
                  },
                },
                i.a.createElement(b.a, {
                  date: new Date(
                    1e3 * (null === t || void 0 === t ? void 0 : t.timestamp)
                  ),
                  formatter: E()(y.a),
                })
              )
            )
          );
        },
        O = function () {
          var e,
            t = Object(c.c)(function (e) {
              return e.chat;
            }),
            n = t.dialogue,
            o = t.dialogueID,
            u = t.listChats,
            s = t.newMessages,
            d = Object(c.b)(),
            f = Object(r.useState)(1),
            m = Object(a.a)(f, 2),
            p = m[0],
            h = m[1];
          Object(r.useEffect)(
            function () {
              n.loading ||
                (d({ type: "FETCH_DIALOGUE_MESSAGES_LOADING", payload: !0 }),
                l.b.send(
                  JSON.stringify({
                    command: "fetch_messages",
                    recipient: "".concat(o.id),
                    page: "".concat(p),
                  })
                ));
            },
            [p, o.id]
          ),
            Object(r.useEffect)(
              function () {
                h(1);
              },
              [o.id]
            );
          var v = Object(r.useRef)(),
            b = Object(r.useCallback)(
              function (e) {
                n.loading ||
                  ((v.current = new IntersectionObserver(function (e) {
                    e[0].isIntersecting && n.hasMore && h(p + 1);
                  })),
                  e && v.current.observe(e));
              },
              [n.loading, n.hasMore, n.data, s]
            );
          return i.a.createElement(
            "div",
            { className: "h-100 position-relative" },
            i.a.createElement(
              "div",
              {
                className:
                  "h-100 position-absolute w-100 d-flex flex-column justify-content-end",
              },
              i.a.createElement(
                "div",
                {
                  className:
                    "h-auto max-height-100 rounded-left p-20 w-100 d-flex",
                  style: {
                    overflow: "hidden scroll",
                    flexDirection: "column-reverse",
                  },
                },
                !u.loading &&
                  (null === (e = n.data) || void 0 === e
                    ? void 0
                    : e.map(function (e, t) {
                        return t === n.data.length - 5
                          ? i.a.createElement(
                              "div",
                              { ref: b, key: t },
                              i.a.createElement(w, {
                                message: e,
                                from: u.data.find(function (e) {
                                  return e.user_id === o.id;
                                }),
                              })
                            )
                          : i.a.createElement(
                              "div",
                              { key: t },
                              i.a.createElement(w, {
                                message: e,
                                from: u.data.find(function (e) {
                                  return e.user_id === o.id;
                                }),
                              })
                            );
                      }))
              )
            )
          );
        },
        j = n(5),
        _ = function (e) {
          var t = e.setChatListInMobile,
            n = Object(c.c)(function (e) {
              return e.chat.listChats;
            }),
            a = Object(c.c)(function (e) {
              return e.chat.dialogueID.id;
            }),
            r = n.data.find(function (e) {
              return e.user_id === a;
            }),
            o = Object(u.a)("(min-width:500px)"),
            l = Object(u.a)("(min-height:500px)"),
            s = Object(c.b)();
          return i.a.createElement(
            "div",
            {
              className:
                " bg-white z-1 w-100 rounded-right border-bottom d-flex align-items-center",
              style: { minHeight: "50px" },
            },
            n.loading
              ? "loading"
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  (!l || !o) &&
                    i.a.createElement(
                      "div",
                      {
                        onClick: function () {
                          t(!0),
                            s({ type: "LIST_CHATS_DATA_CLEAR" }),
                            s({ type: "SET_DIALOGUE_ID", payload: 0 }),
                            s({ type: "FETCH_DIALOGUE_MESSAGES_CLEAR" });
                        },
                        className: "ml-10",
                      },
                      i.a.createElement(j.a, {
                        name: "back",
                        className: "fill-dark w-30px cursor-pointer hover-blue",
                      })
                    ),
                  i.a.createElement("div", {
                    className: "ml-20 rounded-circle",
                    style: {
                      background: "url(".concat(
                        r.avatar,
                        ") no-repeat 50% 50% / cover"
                      ),
                      width: "30px",
                      height: "30px",
                    },
                  }),
                  i.a.createElement(
                    "div",
                    { className: "ml-20" },
                    r.first_name,
                    " ",
                    r.last_name
                  )
                )
          );
        },
        M = function () {
          var e = Object(c.c)(function (e) {
              return e.chat;
            }),
            t =
              (Object(c.b)(),
              function () {
                "" !== u.trim() &&
                  (e.dialogue.loading ||
                    (s(""),
                    l.b.send(
                      JSON.stringify({
                        command: "new_message",
                        message: u,
                        recipient: e.dialogueID.id,
                      })
                    )));
              }),
            n = Object(r.useState)(""),
            o = Object(a.a)(n, 2),
            u = o[0],
            s = o[1];
          return i.a.createElement(
            "div",
            {
              className:
                "position-relative rounded-right border-top d-flex justify-content-between w-100",
              style: { minHeight: "50px" },
            },
            i.a.createElement(
              "label",
              {
                htmlFor: "image_uploads",
                className:
                  "cursor-pointer p-10 d-flex align-items-center hover-blue",
                title:
                  "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
                style: { maxWidth: "60px" },
              },
              i.a.createElement(j.a, {
                name: "add-file",
                width: "40px",
                height: "40px",
              }),
              i.a.createElement("input", {
                id: "image_uploads",
                accept: ".jpg, .jpeg, .png",
                style: { width: "0px", height: "0px" },
                type: "file",
                onChange: function (e) {},
              })
            ),
            i.a.createElement("input", {
              type: "text",
              placeholder:
                "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
              value: u,
              className:
                "w-100 m-5 outline-none  border-transparent rounded p-10",
              onChange: function (e) {
                s(e.target.value);
              },
              style: {
                border: "1px solid rgb(221, 221, 221)",
                fontSize: "16px",
              },
              onKeyPress: function (e) {
                return (function (e) {
                  "Enter" === e.key && t();
                })(e);
              },
            }),
            i.a.createElement(
              "div",
              {
                className:
                  "cursor-pointer p-10 d-flex align-items-center hover-blue ",
                title:
                  "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
                onClick: function () {
                  return t();
                },
              },
              i.a.createElement(j.a, {
                name: "send",
                width: "40px",
                height: "40px",
              })
            )
          );
        },
        N = function (e) {
          var t = e.setChatListInMobile;
          return i.a.createElement(
            "div",
            {
              className:
                "w-100 h-100 d-flex flex-column justify-content-between position-relative ",
            },
            0 !==
              Object(c.c)(function (e) {
                return e.chat.dialogueID.id;
              })
              ? i.a.createElement(
                  "div",
                  { className: "h-100 d-flex flex-column position-relative" },
                  i.a.createElement(_, { setChatListInMobile: t }),
                  i.a.createElement(O, null),
                  i.a.createElement(M, null)
                )
              : i.a.createElement(
                  "div",
                  {
                    className:
                      "h-100 w-100 d-flex justify-content-center align-items-center text-align-center font-size-20",
                  },
                  "\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0437\u0430\u043a\u0430\u0437 \u0438 \u043d\u0430\u0447\u043d\u0438\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433 \u0441 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u043e\u043c"
                )
          );
        },
        I = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(h, null),
            i.a.createElement(N, null)
          );
        },
        A = function (e) {
          var t = e.chatListInMobile,
            n = e.setChatListInMobile;
          return t
            ? i.a.createElement(h, { setChatListInMobile: n })
            : i.a.createElement(N, { setChatListInMobile: n });
        };
      t.default = function () {
        var e = Object(c.b)();
        Object(r.useEffect)(function () {
          e({ type: "LIST_CHATS_DATA_CLEAR" });
        }, []),
          Object(r.useEffect)(function () {
            return function () {
              e({ type: "SET_DIALOGUE_ID", payload: 0 });
            };
          }, []);
        var t = Object(r.useState)(!0),
          n = Object(a.a)(t, 2),
          s = n[0],
          d = n[1],
          f = Object(u.a)("(min-width:500px)"),
          m = Object(u.a)("(min-height:500px)");
        return Object(l.c)().store.connected
          ? i.a.createElement(
              o.a,
              null,
              i.a.createElement(
                "div",
                { className: "d-flex h-100 rounded" },
                f && m
                  ? i.a.createElement(I, null)
                  : i.a.createElement(A, {
                      chatListInMobile: s,
                      setChatListInMobile: d,
                    })
              )
            )
          : i.a.createElement(
              "div",
              { className: "text-white text-align-center m-20 font-size-24" },
              "\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d"
            );
      };
    },
  },
]);
//# sourceMappingURL=6.f2d42fdb.chunk.js.map
