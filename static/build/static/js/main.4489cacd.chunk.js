(this.webpackJsonpntfront = this.webpackJsonpntfront || []).push([
  [1],
  {
    24: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return p;
        }),
        r.d(t, "c", function () {
          return v;
        });
      var n = r(2),
        a = r(12),
        l = r(0),
        c = r.n(l),
        i = r(9),
        o = new WebSocket("ws://thawing-reef-32246.herokuapp.com/ws/chat/1/"),
        u = function (e, t) {
          return { connected: t.connected };
        };
      var f = (function (e) {
          var t = c.a.createContext({ state: e });
          return [
            t,
            function (r) {
              var l = c.a.useReducer(u, e),
                f = Object(a.a)(l, 2),
                s = f[0],
                h = f[1],
                p = Object(i.b)(),
                v = Object(i.c)(function (e) {
                  return e.chat;
                });
              return (
                (o.onopen = function () {
                  h(Object(n.a)(Object(n.a)({}, s), {}, { connected: !0 })),
                    o.send(JSON.stringify({ command: "unread_messages" })),
                    p({ type: "UNREAD_MESSAGES_LOADING", payload: !0 }),
                    setInterval(function () {
                      o.send(JSON.stringify({ command: "ping" }));
                    }, 3e4);
                }),
                (o.onmessage = function (e) {
                  if ('{"pong": "pong"}' !== e.data) {
                    var t = JSON.parse(e.data);
                    if ("list_chats" !== t.command)
                      return "new_message" === t.command
                        ? (p({ type: "NEW_MESSAGES_DATA", payload: t.message }),
                          (t.sender_id !== "".concat(v.dialogueID.id) &&
                            "1" !== t.sender_id) ||
                            p({
                              type: "FETCH_DIALOGUE_MESSAGES_NEWDATA",
                              payload: t.message,
                            }),
                          p({ type: "UNREAD_MESSAGES_LOADING", payload: !0 }),
                          void o.send(
                            JSON.stringify({ command: "unread_messages" })
                          ))
                        : void ("unread_message" !== t.command
                            ? "messages" === t.command &&
                              (p({
                                type: "FETCH_DIALOGUE_MESSAGES_DATA",
                                payload: t,
                              }),
                              p({
                                type: "UNREAD_MESSAGES_LOADING",
                                payload: !0,
                              }),
                              o.send(
                                JSON.stringify({ command: "unread_messages" })
                              ))
                            : t.from_user_id !== "".concat(v.dialogueID.id) &&
                              p({ type: "UNREAD_MESSAGES_DATA", payload: t }));
                    p({ type: "LIST_CHATS_DATA", payload: t });
                  }
                }),
                c.a.createElement(
                  t.Provider,
                  Object.assign({ value: { store: s, dispatch: h } }, r)
                )
              );
            },
          ];
        })({ connected: !1 }),
        s = Object(a.a)(f, 2),
        h = s[0],
        p = s[1],
        v = function () {
          var e = Object(l.useContext)(h),
            t = e.store,
            r = e.dispatch;
          if (!t)
            throw new Error("useSocket must be used within a UserContext");
          return { store: t, dispatch: r };
        };
    },
    29: function (e, t, r) {
      e.exports = r(40);
    },
    38: function (e, t, r) {},
    4: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n);
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var i = a.a.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
        o = a.a.createElement("path", {
          d:
            "M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3zm1-9H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z",
        }),
        u = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = c(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            l({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            i,
            o
          );
        },
        f = a.a.forwardRef(function (e, t) {
          return a.a.createElement(u, l({ svgRef: t }, e));
        });
      r.p;
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function h(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var p = a.a.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
        v = a.a.createElement("path", {
          d:
            "M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z",
        }),
        d = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = h(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            s({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            p,
            v
          );
        },
        m = a.a.forwardRef(function (e, t) {
          return a.a.createElement(d, s({ svgRef: t }, e));
        });
      r.p;
      function g() {
        return (g =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function E(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var O = a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        y = a.a.createElement("path", {
          d:
            "M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z",
        }),
        b = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = E(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            g({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            O,
            y
          );
        },
        w = a.a.forwardRef(function (e, t) {
          return a.a.createElement(b, g({ svgRef: t }, e));
        });
      r.p;
      function j() {
        return (j =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function R(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var S = a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        _ = a.a.createElement("path", {
          d: "M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z",
        }),
        x = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = R(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            j({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            S,
            _
          );
        },
        M = a.a.forwardRef(function (e, t) {
          return a.a.createElement(x, j({ svgRef: t }, e));
        });
      r.p;
      function z() {
        return (z =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function I(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var L = a.a.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
        P = a.a.createElement("path", {
          d:
            "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z",
        }),
        C = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = I(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            z({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            L,
            P
          );
        },
        H = a.a.forwardRef(function (e, t) {
          return a.a.createElement(C, z({ svgRef: t }, e));
        });
      r.p;
      function N() {
        return (N =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function A(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var F = a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        T = a.a.createElement("path", {
          d:
            "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
        }),
        V = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = A(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            N({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            F,
            T
          );
        },
        G = a.a.forwardRef(function (e, t) {
          return a.a.createElement(V, N({ svgRef: t }, e));
        });
      r.p;
      function D() {
        return (D =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function k(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var B = a.a.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
        U = a.a.createElement("path", {
          d:
            "M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z",
        }),
        W = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = k(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            D({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            B,
            U
          );
        },
        J = a.a.forwardRef(function (e, t) {
          return a.a.createElement(W, D({ svgRef: t }, e));
        });
      r.p;
      function Y() {
        return (Y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Z(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var q = a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        K = a.a.createElement("path", {
          d:
            "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
        }),
        Q = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = Z(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            Y({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            q,
            K
          );
        },
        X = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Q, Y({ svgRef: t }, e));
        });
      r.p;
      function $() {
        return ($ =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ee(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var te = a.a.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
        }),
        re = a.a.createElement("path", {
          d:
            "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 4h7l5 5v8.58l-1.84-1.84c1.28-1.94 1.07-4.57-.64-6.28C14.55 8.49 13.28 8 12 8c-1.28 0-2.55.49-3.53 1.46-1.95 1.95-1.95 5.11 0 7.05.97.97 2.25 1.46 3.53 1.46.96 0 1.92-.28 2.75-.83L17.6 20H6V4zm8.11 11.1c-.56.56-1.31.88-2.11.88s-1.55-.31-2.11-.88c-.56-.56-.88-1.31-.88-2.11s.31-1.55.88-2.11c.56-.57 1.31-.88 2.11-.88s1.55.31 2.11.88c.56.56.88 1.31.88 2.11s-.31 1.55-.88 2.11z",
        }),
        ne = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = ee(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            $({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            te,
            re
          );
        },
        ae = a.a.forwardRef(function (e, t) {
          return a.a.createElement(ne, $({ svgRef: t }, e));
        });
      r.p;
      function le() {
        return (le =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ce(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var ie = a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        oe = a.a.createElement("path", {
          d:
            "M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z",
        }),
        ue = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = ce(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            le({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            ie,
            oe
          );
        },
        fe = a.a.forwardRef(function (e, t) {
          return a.a.createElement(ue, le({ svgRef: t }, e));
        });
      r.p;
      function se() {
        return (se =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function he(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var pe = a.a.createElement(
          "g",
          {
            transform:
              "translate(0.000000,355.000000) scale(0.100000,-0.100000)",
            stroke: "none",
          },
          a.a.createElement("path", {
            d:
              "M5090 1775 l0 -1775 40 0 40 0 0 1775 0 1775 -40 0 -40 0 0 -1775z",
          }),
          a.a.createElement("path", {
            d:
              "M0 1615 l0 -1215 2350 0 2350 0 0 1215 0 1215 -2350 0 -2350 0 0 -1215z m3335 745 c331 -28 498 -146 572 -405 14 -50 17 -120 21 -432 l4 -373 124 0 124 0 0 -175 0 -175 -365 0 -365 0 0 64 0 64 -75 -42 c-140 -81 -283 -112 -431 -95 -268 30 -432 170 -464 397 -46 327 206 571 596 574 125 1 185 -11 297 -58 l77 -32 0 90 c0 118 -14 162 -70 220 -58 60 -127 82 -243 76 -91 -4 -166 -32 -234 -87 l-38 -30 -183 33 c-101 19 -186 36 -189 39 -11 11 59 107 118 161 110 102 285 169 484 185 55 5 105 9 110 9 6 1 64 -3 130 -8z m-1520 -22 c148 -37 248 -146 297 -325 20 -72 22 -108 26 -470 l4 -393 114 0 114 0 0 -175 0 -175 -360 0 -360 0 0 513 c0 308 -4 526 -10 548 -16 58 -51 82 -124 87 -74 5 -153 -15 -238 -60 l-58 -31 0 -353 0 -354 120 0 120 0 0 -175 0 -175 -475 0 -475 0 0 175 0 175 115 0 115 0 0 415 0 415 -115 0 -115 0 0 180 0 180 355 0 354 0 3 -75 3 -75 54 36 c167 113 367 155 536 112z",
          }),
          a.a.createElement("path", {
            d:
              "M3057 1466 c-82 -31 -117 -85 -117 -183 0 -136 61 -198 195 -198 81 0 160 32 258 105 l57 43 0 73 0 73 -42 25 c-115 67 -267 94 -351 62z",
          }),
          a.a.createElement("path", {
            d:
              "M5948 2607 l-238 -172 0 -122 0 -123 -100 0 -100 0 0 -185 0 -185 100 0 99 0 3 -462 c3 -449 4 -465 25 -516 62 -151 171 -213 378 -213 130 0 230 18 348 63 l27 10 0 175 0 175 -22 -6 c-138 -36 -204 -29 -238 27 -19 30 -20 53 -20 390 l0 357 140 0 140 0 0 185 0 185 -140 0 -140 0 0 295 c0 230 -3 295 -12 294 -7 -1 -120 -78 -250 -172z",
          }),
          a.a.createElement("path", {
            d:
              "M10438 2607 l-238 -172 0 -122 0 -123 -100 0 -100 0 0 -185 0 -185 100 0 99 0 3 -462 c3 -449 4 -465 25 -516 62 -151 171 -213 378 -213 130 0 230 18 348 63 l27 10 0 175 0 175 -22 -6 c-138 -36 -204 -29 -238 27 -19 30 -20 53 -20 390 l0 357 140 0 140 0 0 185 0 185 -140 0 -140 0 0 295 c0 230 -3 295 -12 294 -7 -1 -120 -78 -250 -172z",
          }),
          a.a.createElement("path", {
            d:
              "M7321 2209 c-327 -64 -584 -324 -646 -654 -21 -107 -15 -294 10 -390 58 -217 233 -410 442 -489 146 -54 185 -60 393 -61 231 0 292 12 446 85 80 39 118 65 181 124 88 83 141 152 127 165 -10 10 -355 121 -374 121 -7 0 -37 -22 -67 -50 -174 -159 -423 -164 -566 -11 -55 58 -83 111 -101 191 l-14 60 574 0 574 0 0 53 c0 28 -7 95 -15 147 -56 371 -266 625 -578 700 -88 21 -299 26 -386 9z m286 -355 c84 -41 165 -149 180 -241 l6 -33 -312 0 c-357 0 -328 -11 -290 105 35 104 103 169 206 195 58 14 151 3 210 -26z",
          }),
          a.a.createElement("path", {
            d:
              "M11811 2209 c-327 -64 -584 -324 -646 -654 -21 -107 -15 -294 10 -390 58 -217 233 -410 442 -489 146 -54 185 -60 393 -61 231 0 292 12 446 85 80 39 118 65 181 124 88 83 141 152 127 165 -10 10 -355 121 -374 121 -7 0 -37 -22 -67 -50 -174 -159 -423 -164 -566 -11 -55 58 -83 111 -101 191 l-14 60 574 0 574 0 0 53 c0 28 -7 95 -15 147 -56 371 -266 625 -578 700 -88 21 -299 26 -386 9z m286 -355 c84 -41 165 -149 180 -241 l6 -33 -312 0 c-357 0 -328 -11 -290 105 35 104 103 169 206 195 58 14 151 3 210 -26z",
          }),
          a.a.createElement("path", {
            d:
              "M8824 2191 c-155 -39 -269 -122 -326 -239 -32 -64 -33 -71 -33 -192 0 -121 1 -128 32 -191 84 -171 252 -253 668 -329 235 -43 295 -77 295 -164 0 -94 -77 -131 -259 -124 -80 3 -117 9 -152 25 -83 37 -135 96 -163 186 -5 15 -23 17 -186 17 l-180 0 0 -270 0 -270 180 0 180 0 0 30 c0 17 2 30 5 30 2 0 21 -11 41 -25 66 -45 127 -58 296 -63 124 -3 174 0 235 13 164 36 299 127 362 244 102 192 71 460 -66 581 -60 52 -203 123 -315 154 -47 14 -157 37 -245 51 -254 41 -313 65 -313 126 0 46 17 69 68 92 65 29 218 28 313 -2 71 -23 134 -73 145 -116 l6 -25 179 0 179 0 0 230 0 230 -180 0 c-176 0 -180 0 -180 -21 0 -16 -4 -19 -17 -14 -10 4 -52 16 -93 27 -108 30 -375 35 -476 9z",
          })
        ),
        ve = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = he(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            se(
              {
                fill: "#fff",
                viewBox: "0 0 1279.000000 355.000000",
                preserveAspectRatio: "xMidYMid meet",
                ref: t,
              },
              n
            ),
            r ? a.a.createElement("title", null, r) : null,
            pe
          );
        },
        de = a.a.forwardRef(function (e, t) {
          return a.a.createElement(ve, se({ svgRef: t }, e));
        });
      r.p;
      function me() {
        return (me =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ge(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Ee = a.a.createElement("path", {
          d:
            "M22.4792 33.9375C23.2917 34.75 24.6042 34.75 25.4167 33.9375L32.8958 26.4583C33.7083 25.6458 33.7083 24.3333 32.8958 23.5208L25.4167 16.0417C24.6042 15.2292 23.2917 15.2292 22.4792 16.0417C21.6667 16.8542 21.6667 18.1667 22.4792 18.9792L26.3958 22.9167H8.33333C7.1875 22.9167 6.25 23.8542 6.25 25C6.25 26.1458 7.1875 27.0833 8.33333 27.0833H26.3958L22.4792 31C21.6667 31.8125 21.6875 33.1458 22.4792 33.9375ZM39.5833 6.25H10.4167C8.10417 6.25 6.25 8.125 6.25 10.4167V16.6667C6.25 17.8125 7.1875 18.75 8.33333 18.75C9.47917 18.75 10.4167 17.8125 10.4167 16.6667V12.5C10.4167 11.3542 11.3542 10.4167 12.5 10.4167H37.5C38.6458 10.4167 39.5833 11.3542 39.5833 12.5V37.5C39.5833 38.6458 38.6458 39.5833 37.5 39.5833H12.5C11.3542 39.5833 10.4167 38.6458 10.4167 37.5V33.3333C10.4167 32.1875 9.47917 31.25 8.33333 31.25C7.1875 31.25 6.25 32.1875 6.25 33.3333V39.5833C6.25 41.875 8.125 43.75 10.4167 43.75H39.5833C41.875 43.75 43.75 41.875 43.75 39.5833V10.4167C43.75 8.125 41.875 6.25 39.5833 6.25Z",
        }),
        Oe = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = ge(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            me({ viewBox: "0 0 50 50", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            Ee
          );
        },
        ye = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Oe, me({ svgRef: t }, e));
        });
      r.p;
      function be() {
        return (be =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function we(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var je = a.a.createElement("path", {
          d: "M0,0h24v24H0V0z",
          fill: "none",
        }),
        Re = a.a.createElement(
          "g",
          null,
          a.a.createElement("path", {
            d:
              "M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z",
          }),
          a.a.createElement("rect", { height: 2, width: 6, x: 9, y: 7 }),
          a.a.createElement("rect", { height: 2, width: 2, x: 16, y: 7 }),
          a.a.createElement("rect", { height: 2, width: 6, x: 9, y: 10 }),
          a.a.createElement("rect", { height: 2, width: 2, x: 16, y: 10 })
        ),
        Se = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = we(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            be(
              {
                enableBackground: "new 0 0 24 24",
                viewBox: "0 0 24 24",
                ref: t,
              },
              n
            ),
            r ? a.a.createElement("title", null, r) : null,
            je,
            Re
          );
        },
        _e = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Se, be({ svgRef: t }, e));
        });
      r.p;
      function xe() {
        return (xe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Me(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var ze = a.a.createElement("path", {
          d: "M0,0h24v24H0V0z",
          fill: "none",
        }),
        Ie = a.a.createElement(
          "g",
          null,
          a.a.createElement("path", {
            d:
              "M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z",
          }),
          a.a.createElement("rect", { height: 2, width: 6, x: 9, y: 7 }),
          a.a.createElement("rect", { height: 2, width: 2, x: 16, y: 7 }),
          a.a.createElement("rect", { height: 2, width: 6, x: 9, y: 10 }),
          a.a.createElement("rect", { height: 2, width: 2, x: 16, y: 10 })
        ),
        Le = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = Me(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            xe(
              {
                enableBackground: "new 0 0 24 24",
                viewBox: "0 0 24 24",
                ref: t,
              },
              n
            ),
            r ? a.a.createElement("title", null, r) : null,
            ze,
            Ie
          );
        },
        Pe = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Le, xe({ svgRef: t }, e));
        });
      r.p;
      function Ce() {
        return (Ce =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function He(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Ne = a.a.createElement(
          "g",
          null,
          a.a.createElement("path", {
            d:
              "M0,0v24h24V0H0z M1,13V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4C2.34,16,1,14.66,1,13z M23,18c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1s1,0.45,1,1V18z",
            fill: "none",
          }),
          a.a.createElement("path", {
            d:
              "M23,8v10c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1S23,7.45,23,8z M4,16 c-1.66,0-3-1.34-3-3V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4z M7,10c0,1.66,1.34,3,3,3s3-1.34,3-3 s-1.34-3-3-3S7,8.34,7,10z",
          })
        ),
        Ae = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = He(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            Ce(
              {
                enableBackground: "new 0 0 24 24",
                viewBox: "0 0 24 24",
                ref: t,
              },
              n
            ),
            r ? a.a.createElement("title", null, r) : null,
            Ne
          );
        },
        Fe = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Ae, Ce({ svgRef: t }, e));
        });
      r.p;
      function Te() {
        return (Te =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Ve(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Ge = a.a.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
        }),
        De = a.a.createElement("path", {
          d:
            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z",
        }),
        ke = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = Ve(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            Te({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            Ge,
            De
          );
        },
        Be = a.a.forwardRef(function (e, t) {
          return a.a.createElement(ke, Te({ svgRef: t }, e));
        });
      r.p;
      function Ue() {
        return (Ue =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function We(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Je = a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        Ye = a.a.createElement("path", {
          d:
            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
        }),
        Ze = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = We(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            Ue({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            Je,
            Ye
          );
        },
        qe = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Ze, Ue({ svgRef: t }, e));
        });
      r.p;
      function Ke() {
        return (Ke =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Qe(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Xe = a.a.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
        }),
        $e = a.a.createElement("path", {
          d:
            "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z",
        }),
        et = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = Qe(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            Ke({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            Xe,
            $e
          );
        },
        tt = a.a.forwardRef(function (e, t) {
          return a.a.createElement(et, Ke({ svgRef: t }, e));
        });
      r.p;
      function rt() {
        return (rt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function nt(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var at = a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        lt = a.a.createElement("path", {
          d:
            "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z",
        }),
        ct = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = nt(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            rt({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            at,
            lt
          );
        },
        it = a.a.forwardRef(function (e, t) {
          return a.a.createElement(ct, rt({ svgRef: t }, e));
        });
      r.p;
      function ot() {
        return (ot =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ut(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var ft = a.a.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
        }),
        st = a.a.createElement("path", {
          d:
            "M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z",
        }),
        ht = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = ut(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            ot({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            ft,
            st
          );
        },
        pt = a.a.forwardRef(function (e, t) {
          return a.a.createElement(ht, ot({ svgRef: t }, e));
        });
      r.p;
      function vt() {
        return (vt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function dt(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var mt = a.a.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
        }),
        gt = a.a.createElement("path", {
          d:
            "M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8c.31-.31.09-.85-.36-.85H6c0-3.9 3.18-7.05 7.1-7 3.72.05 6.85 3.18 6.9 6.9.05 3.91-3.1 7.1-7 7.1-1.61 0-3.1-.55-4.28-1.48-.4-.31-.96-.28-1.32.08-.42.42-.39 1.13.08 1.49C9 20.29 10.91 21 13 21c5.05 0 9.14-4.17 9-9.26-.13-4.69-4.05-8.61-8.74-8.74zm-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74z",
        }),
        Et = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = dt(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            vt({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            mt,
            gt
          );
        },
        Ot = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Et, vt({ svgRef: t }, e));
        });
      r.p;
      function yt() {
        return (yt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function bt(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var wt = a.a.createElement("path", {
          d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
          fill: "none",
        }),
        jt = a.a.createElement("path", {
          d:
            "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
        }),
        Rt = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = bt(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            yt({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            wt,
            jt
          );
        },
        St = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Rt, yt({ svgRef: t }, e));
        });
      r.p;
      function _t() {
        return (_t =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function xt(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Mt = a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        zt = a.a.createElement("path", {
          d:
            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
        }),
        It = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = xt(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            _t({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            Mt,
            zt
          );
        },
        Lt = a.a.forwardRef(function (e, t) {
          return a.a.createElement(It, _t({ svgRef: t }, e));
        });
      r.p;
      function Pt() {
        return (Pt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Ct(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Ht = a.a.createElement("path", {
          d:
            "M 4 2 C 4 3.3333333 4.8142205 4.2752743 5.5527344 4.6445312 C 6.2912483 5.0137882 7 5 7 5 L 11 5 L 11 7.0761719 C 7.0556483 7.5978668 4 10.977502 4 15.0625 L 4 20 C 4 21.105 4.895 22 6 22 L 18 22 C 19.105 22 20 21.105 20 20 L 20 15.0625 C 20 10.977502 16.944352 7.5978668 13 7.0761719 L 13 5 L 17 5 C 17 5 17.708752 5.013788 18.447266 4.6445312 C 19.18578 4.2752744 20 3.3333333 20 2 L 18 2 C 18 2.6666667 17.81422 2.7247257 17.552734 2.8554688 C 17.291248 2.9862117 17 3 17 3 L 7 3 C 7 3 6.7087517 2.9862118 6.4472656 2.8554688 C 6.1857795 2.7247256 6 2.6666667 6 2 L 4 2 z M 12 11 C 12.74 11 13.424531 11.214406 14.019531 11.566406 L 11.292969 14.292969 C 10.901969 14.683969 10.901969 15.316031 11.292969 15.707031 C 11.487969 15.902031 11.744 16 12 16 C 12.256 16 12.512031 15.902031 12.707031 15.707031 L 15.433594 12.980469 C 15.785594 13.575469 16 14.26 16 15 C 16 17.206 14.206 19 12 19 C 9.794 19 8 17.206 8 15 C 8 12.794 9.794 11 12 11 z",
        }),
        Nt = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = Ct(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            Pt({ viewBox: "0 0 24 24", ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            Ht
          );
        },
        At = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Nt, Pt({ svgRef: t }, e));
        });
      r.p;
      function Ft() {
        return (Ft =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Tt(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Vt = a.a.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
        }),
        Gt = a.a.createElement("path", {
          d:
            "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
        }),
        Dt = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = Tt(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            Ft(
              {
                viewBox: "0 0 24 24",
                fill: "black",
                width: "48px",
                height: "48px",
                ref: t,
              },
              n
            ),
            r ? a.a.createElement("title", null, r) : null,
            Vt,
            Gt
          );
        },
        kt = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Dt, Ft({ svgRef: t }, e));
        });
      r.p;
      function Bt() {
        return (Bt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Ut(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Wt = a.a.createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none",
        }),
        Jt = a.a.createElement("path", {
          d:
            "M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z",
        }),
        Yt = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = Ut(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            Bt({ height: 24, viewBox: "0 0 24 24", width: 24, ref: t }, n),
            r ? a.a.createElement("title", null, r) : null,
            Wt,
            Jt
          );
        },
        Zt = a.a.forwardRef(function (e, t) {
          return a.a.createElement(Yt, Bt({ svgRef: t }, e));
        });
      r.p;
      function qt() {
        return (qt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Kt(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var Qt = a.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        Xt = a.a.createElement("path", {
          d:
            "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z",
        }),
        $t = function (e) {
          var t = e.svgRef,
            r = e.title,
            n = Kt(e, ["svgRef", "title"]);
          return a.a.createElement(
            "svg",
            qt(
              { viewBox: "0 0 24 24", width: "18px", height: "18px", ref: t },
              n
            ),
            r ? a.a.createElement("title", null, r) : null,
            Qt,
            Xt
          );
        },
        er = a.a.forwardRef(function (e, t) {
          return a.a.createElement($t, qt({ svgRef: t }, e));
        });
      r.p,
        (t.a = function (e) {
          var t = e.name,
            r = e.width,
            n = e.height,
            l = e.className,
            c = e.onClick,
            i = function () {
              switch (t) {
                case "chat":
                  return a.a.createElement(Zt, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "chat-filled":
                  return a.a.createElement(er, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "add-file":
                  return a.a.createElement(f, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "search":
                  return a.a.createElement(kt, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "add-image":
                  return a.a.createElement(m, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "add-image-filled":
                  return a.a.createElement(w, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "back":
                  return a.a.createElement(M, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "delete":
                  return a.a.createElement(H, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "delete-filled":
                  return a.a.createElement(G, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "edit":
                  return a.a.createElement(J, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "edit-filled":
                  return a.a.createElement(X, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "find-order":
                  return a.a.createElement(ae, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "find-order-filled":
                  return a.a.createElement(fe, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "logo":
                  return a.a.createElement(de, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "logout":
                  return a.a.createElement(ye, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "orders":
                  return a.a.createElement(_e, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "orders-filled":
                  return a.a.createElement(Pe, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "payments":
                  return a.a.createElement(Fe, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "profile":
                  return a.a.createElement(Be, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "profile-filled":
                  return a.a.createElement(qe, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "save":
                  return a.a.createElement(tt, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "save-filled":
                  return a.a.createElement(it, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "send":
                  return a.a.createElement(pt, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "send-filled":
                  return a.a.createElement(it, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "time-ago":
                  return a.a.createElement(Ot, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "todo":
                  return a.a.createElement(St, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "todo-filled":
                  return a.a.createElement(Lt, {
                    width: r,
                    height: n,
                    className: l,
                  });
                case "weight":
                  return a.a.createElement(At, {
                    width: r,
                    height: n,
                    className: l,
                  });
                default:
                  return a.a.createElement("div", null);
              }
            };
          return c ? a.a.createElement("div", { onClick: c }, i()) : i();
        });
    },
    40: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        a = r.n(n),
        l = r(16),
        c = r.n(l),
        i = r(3),
        o = r(9),
        u = r(24),
        f =
          (r(38),
          function () {
            var e = Object(n.lazy)(function () {
                return Promise.all([r.e(0), r.e(5)]).then(r.bind(null, 80));
              }),
              t = Object(n.lazy)(function () {
                return Promise.all([r.e(0), r.e(4)]).then(r.bind(null, 78));
              }),
              l = Object(n.lazy)(function () {
                return Promise.all([r.e(0), r.e(6)]).then(r.bind(null, 82));
              }),
              c = Object(n.lazy)(function () {
                return r.e(8).then(r.bind(null, 79));
              }),
              o = Object(n.lazy)(function () {
                return r.e(7).then(r.bind(null, 81));
              });
            return a.a.createElement(
              n.Suspense,
              { fallback: "" },
              a.a.createElement(
                i.d,
                null,
                a.a.createElement(
                  i.b,
                  { exact: !0, path: "/" },
                  a.a.createElement(i.a, { to: "/orders" })
                ),
                a.a.createElement(
                  i.b,
                  { path: "/find-order" },
                  a.a.createElement(e, null)
                ),
                a.a.createElement(
                  i.b,
                  { path: "/profile" },
                  a.a.createElement(t, null)
                ),
                a.a.createElement(
                  i.b,
                  { path: "/orders/:userID" },
                  a.a.createElement(c, null)
                ),
                a.a.createElement(
                  i.b,
                  { exact: !0, path: "/orders" },
                  a.a.createElement(l, null)
                ),
                a.a.createElement(
                  i.b,
                  { path: "/todo-list" },
                  a.a.createElement(o, null)
                ),
                a.a.createElement(
                  i.b,
                  { path: "/chat" },
                  a.a.createElement(c, null)
                )
              )
            );
          }),
        s = r(6),
        h = Object(s.a)(),
        p = r(12),
        v = r(11),
        d = r(4),
        m = [
          {
            id: "1",
            title: "\u0410\u043a\u043a\u0430\u0443\u043d\u0442",
            icon: a.a.createElement(d.a, { name: "profile" }),
            filledIcon: a.a.createElement(d.a, { name: "profile-filled" }),
            path: "/profile",
          },
          {
            id: "2",
            title: "\u0417\u0430\u043a\u0430\u0437\u044b",
            icon: a.a.createElement(d.a, { name: "orders" }),
            filledIcon: a.a.createElement(d.a, { name: "orders-filled" }),
            path: "/orders",
          },
          {
            id: "3",
            title:
              "\u041d\u0430\u0439\u0442\u0438 \u0437\u0430\u043a\u0430\u0437",
            icon: a.a.createElement(d.a, { name: "find-order" }),
            filledIcon: a.a.createElement(d.a, { name: "find-order-filled" }),
            path: "/find-order",
          },
          {
            id: "4",
            title: "\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b",
            icon: a.a.createElement(d.a, { name: "todo" }),
            filledIcon: a.a.createElement(d.a, { name: "todo-filled" }),
            path: "/todo-list",
          },
          {
            id: "5",
            title: "\u0427\u0430\u0442",
            icon: a.a.createElement(d.a, { name: "chat" }),
            filledIcon: a.a.createElement(d.a, { name: "chat-filled" }),
            path: "/chat",
          },
        ],
        g = function (e, t) {
          for (var r = 0, n = 0; n < e.length; n++)
            t !== e[n].from_user_id && (r += e[n].messages.length);
          return 0 === r ? null : r;
        },
        E = function () {
          var e = Object(n.useState)(""),
            t = Object(p.a)(e, 2),
            r = t[0],
            l = t[1],
            c = Object(n.useState)(""),
            i = Object(p.a)(c, 2),
            u = i[0],
            f = i[1],
            s = Object(o.c)(function (e) {
              return e.chat.unreadMessages.data;
            }),
            h = Object(o.c)(function (e) {
              return e.chat.dialogueID.id;
            }),
            E = Object(o.c)(function (e) {
              return e.resolution;
            });
          return (
            console.log(E),
            a.a.createElement(
              "div",
              {
                className:
                  "d-flex flex-column flex-grow-1 align-items-end text-white-opacity",
              },
              a.a.createElement(
                "div",
                {
                  className: "d-flex flex-column align-items-end h-100 ".concat(
                    E > 1280 && "w-275px"
                  ),
                },
                a.a.createElement(
                  "div",
                  {
                    className:
                      "d-flex flex-column justify-content-between position-fixed pg-20 h-100 w-275",
                  },
                  a.a.createElement(
                    "div",
                    null,
                    E.width > 1280 &&
                      a.a.createElement(
                        "div",
                        null,
                        a.a.createElement(d.a, {
                          name: "logo",
                          width: 180,
                          className: "m-10",
                        })
                      ),
                    m.map(function (e) {
                      return "\u0427\u0430\u0442" === e.title
                        ? a.a.createElement(
                            "div",
                            { key: e.id },
                            a.a.createElement(
                              v.a,
                              {
                                onMouseEnter: function () {
                                  return f(e.path);
                                },
                                onMouseLeave: function () {
                                  return f("");
                                },
                                key: e.id,
                                className: "d-flex align-items-center text-decoration-none p-5 m-10 ".concat(
                                  u === e.path && "hover"
                                ),
                                isActive: function (e, t) {
                                  l(t.pathname);
                                },
                                to: e.path,
                              },
                              a.a.createElement(
                                "div",
                                {
                                  className: "icon-30 position-relative ".concat(
                                    r === e.path || u === e.path
                                      ? "fill-white"
                                      : "fill-gray"
                                  ),
                                },
                                r === e.path || u === e.path
                                  ? e.filledIcon
                                  : e.icon,
                                a.a.createElement(
                                  "div",
                                  {
                                    className: "position-absolute ".concat(
                                      null !== g(s, h) &&
                                        "bg-white text-align-center rounded-circle"
                                    ),
                                    style: {
                                      top: "0",
                                      right: "0",
                                      fontSize: "15px",
                                      width: "18px",
                                      height: "18px",
                                      color: "black",
                                    },
                                  },
                                  g(s, h)
                                )
                              ),
                              E.width > 1280 &&
                                a.a.createElement(
                                  "div",
                                  {
                                    className: "mg-20 font-size-20 ".concat(
                                      r === e.path && "text-white"
                                    ),
                                  },
                                  e.title
                                )
                            )
                          )
                        : a.a.createElement(
                            "div",
                            { key: e.id },
                            a.a.createElement(
                              v.a,
                              {
                                onMouseEnter: function () {
                                  return f(e.path);
                                },
                                onMouseLeave: function () {
                                  return f("");
                                },
                                key: e.id,
                                className: "d-flex align-items-center text-decoration-none p-5 m-10 ".concat(
                                  u === e.path && "hover"
                                ),
                                isActive: function (e, t) {
                                  l(t.pathname);
                                },
                                to: e.path,
                              },
                              a.a.createElement(
                                "div",
                                {
                                  className: "icon-30 ".concat(
                                    r === e.path || u === e.path
                                      ? "fill-white"
                                      : "fill-gray"
                                  ),
                                },
                                r === e.path || u === e.path
                                  ? e.filledIcon
                                  : e.icon
                              ),
                              E.width > 1280 &&
                                a.a.createElement(
                                  "div",
                                  {
                                    className: "mg-20 font-size-20 ".concat(
                                      r === e.path && "text-white"
                                    ),
                                  },
                                  e.title
                                )
                            )
                          );
                    })
                  ),
                  a.a.createElement(
                    v.a,
                    {
                      onMouseEnter: function () {
                        return f("/logout");
                      },
                      onMouseLeave: function () {
                        return f("");
                      },
                      className: "d-flex align-items-center text-decoration-none p-5 m-10 ".concat(
                        "/logout" === u && "hover"
                      ),
                      to: "/logout",
                    },
                    a.a.createElement(d.a, {
                      name: "logout",
                      className: "icon-30 ".concat(
                        "/logout" === u ? "fill-white" : "fill-gray"
                      ),
                    }),
                    E.width > 1280 &&
                      a.a.createElement(
                        "div",
                        {
                          className: "mg-20 font-size-20 ".concat(
                            "/logout" === u && "text-white"
                          ),
                        },
                        "\u0412\u044b\u0439\u0442\u0438"
                      )
                  )
                )
              )
            )
          );
        },
        O = function (e) {
          var t = e.children,
            r = Object(o.b)();
          return (
            window.addEventListener(
              "resize",
              function () {
                var e = {
                  width: window.innerWidth,
                  height: window.innerHeight,
                };
                r({ type: "SET_RESOLUTION", payload: e });
              },
              !1
            ),
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(E, null),
              a.a.createElement(
                "div",
                {
                  className:
                    "d-flex align-items-start flex-grow-1 flex-shrink-1",
                },
                a.a.createElement(
                  "div",
                  { className: "min-width-990px d-flex h-100 " },
                  t
                )
              )
            )
          );
        },
        y = r(10),
        b = r(2),
        w = Object(y.c)({
          info: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { isFetching: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_PROFILE_INFO_FETCHING":
                return { isFetching: !0 };
              case "GET_PROFILE_INFO_SUCCESS":
                return { data: t.payload, isFetching: !1 };
              case "GET_PROFILE_INFO_ERROR":
                return { error: t.payload, isFetching: !1 };
              case "EDIT_PROFILE_INFO_FETCHING":
                return { isFetching: !0 };
              case "EDIT_PROFILE_INFO_SUCCESS":
                return { data: t.payload, isFetching: !1 };
              case "EDIT_PROFILE_INFO_ERROR":
                return { error: t.payload, isFetching: !1 };
              default:
                return e;
            }
          },
          avatar: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { isFetching: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_PROFILE_AVATAR_FETCHING":
                return { isFetching: !0 };
              case "GET_PROFILE_AVATAR_SUCCESS":
                return { data: t.payload, isFetching: !1 };
              case "GET_PROFILE_AVATAR_ERROR":
                return { error: t.payload, isFetching: !1 };
              case "EDIT_PROFILE_AVATAR_FETCHING":
                return Object(b.a)(Object(b.a)({}, e), {}, { isFetching: !0 });
              case "EDIT_PROFILE_AVATAR_SUCCESS":
                return { data: t.payload, isFetching: !1 };
              case "EDIT_PROFILE_AVATAR_ERROR":
                return { error: t.payload, isFetching: !1 };
              default:
                return e;
            }
          },
          reviews: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { data: [], isFetching: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_PROFILE_REVIEWS_FETCHING":
                return e.hasMore
                  ? Object(b.a)(Object(b.a)({}, e), {}, { isFetching: !0 })
                  : { data: [], isFetching: !0 };
              case "GET_PROFILE_REVIEWS_SUCCESS":
                return {
                  data: e.data.concat(t.payload.results),
                  hasMore: null !== t.payload.next,
                  isFetching: !1,
                };
              case "GET_PROFILE_REVIEWS_ERROR":
                return { error: t.payload, isFetching: !1 };
              default:
                return e;
            }
          },
          rating: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { isFetching: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_PROFILE_RATING_FETCHING":
                return { isFetching: !0 };
              case "GET_PROFILE_RATING_SUCCESS":
                return { data: t.payload, isFetching: !1 };
              case "GET_PROFILE_RATING_ERROR":
                return { error: t.payload, isFetching: !1 };
              default:
                return e;
            }
          },
        }),
        j = r(19),
        R = Object(y.c)({
          dialogue: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { data: [], loading: !1, hasMore: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "FETCH_DIALOGUE_MESSAGES_CLEAR":
                return { data: [], loading: !1, hasMore: !0 };
              case "FETCH_DIALOGUE_MESSAGES_DATA":
                return {
                  data: e.data.concat(t.payload.messages),
                  loading: !1,
                  hasMore: t.payload.next,
                };
              case "FETCH_DIALOGUE_MESSAGES_LOADING":
                return Object(b.a)(
                  Object(b.a)({}, e),
                  {},
                  { loading: t.payload }
                );
              case "FETCH_DIALOGUE_MESSAGES_NEWDATA":
                return {
                  data: [t.payload].concat(Object(j.a)(e.data)),
                  loading: !1,
                  hasMore: t.payload.next,
                };
              default:
                return e;
            }
          },
          dialogueID: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { id: 0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SET_DIALOGUE_ID":
                return { id: t.payload };
              default:
                return e;
            }
          },
          listChats: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { data: [], loading: !0, hasMore: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "LIST_CHATS_DATA_CLEAR":
                return { data: [], loading: !0, hasMore: !0 };
              case "LIST_CHATS_DATA":
                return {
                  data: e.data.concat(t.payload.list_chats),
                  loading: !1,
                  hasMore: t.payload.next,
                };
              case "LIST_CHATS_LOADING":
                return Object(b.a)(
                  Object(b.a)({}, e),
                  {},
                  { loading: t.payload }
                );
              default:
                return e;
            }
          },
          unreadMessages: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { data: [], loading: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "UNREAD_MESSAGES_DATA":
                return { data: t.payload.unread_messages, loading: !1 };
              case "UNREAD_MESSAGES_LOADING":
                return Object(b.a)(
                  Object(b.a)({}, e),
                  {},
                  { loading: t.payload }
                );
              default:
                return e;
            }
          },
          newMessages: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { data: [], loading: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "NEW_MESSAGES_DATA":
                return {
                  data: [t.payload].concat(Object(j.a)(e.data)),
                  loading: !1,
                };
              default:
                return e;
            }
          },
        }),
        S = Object(y.c)({
          profile: w,
          todoList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { isFetching: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_TODO_LIST_FETCHING":
                return { isFetching: !0 };
              case "GET_TODO_LIST_SUCCESS":
                return {
                  data: t.payload.results.map(function (e) {
                    return Object(b.a)(
                      Object(b.a)({}, e),
                      {},
                      {
                        deadline: new Date(
                          1e3 * e.deadline
                        ).toLocaleDateString(),
                      }
                    );
                  }),
                  isFetching: !1,
                };
              case "GET_TODO_LIST_ERROR":
                return { error: t.payload, isFetching: !1 };
              default:
                return e;
            }
          },
          myOrders: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { data: [], isFetching: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_MY_ORDERS_FETCHING":
                return e.hasMore
                  ? Object(b.a)(Object(b.a)({}, e), {}, { isFetching: !0 })
                  : { data: [], isFetching: !0 };
              case "GET_MY_ORDERS_SUCCESS":
                return {
                  data: e.data.concat(t.payload.results),
                  hasMore: null !== t.payload.next,
                  isFetching: !1,
                };
              case "GET_MY_ORDERS_ERROR":
                return { error: t.payload, isFetching: !1 };
              default:
                return e;
            }
          },
          findOrder: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { data: [], isFetching: !0 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_FIND_ORDER_CLEAR":
                return { data: [], isFetching: !0 };
              case "GET_FIND_ORDER_FETCHING":
                return e.hasMore
                  ? Object(b.a)(Object(b.a)({}, e), {}, { isFetching: !0 })
                  : { data: [], isFetching: !0 };
              case "GET_FIND_ORDER_SUCCESS":
                return {
                  data: e.data.concat(t.payload.results),
                  hasMore: null !== t.payload.next,
                  isFetching: !1,
                };
              case "GET_FIND_ORDER_ERROR":
                return { error: t.payload, isFetching: !1 };
              default:
                return e;
            }
          },
          chat: R,
          resolution: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { width: window.innerWidth, height: window.innerHeight },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SET_RESOLUTION":
                return { width: t.payload.width, height: t.payload.height };
              default:
                return e;
            }
          },
        });
      function _(e) {
        return function (t) {
          var r = t.dispatch,
            n = t.getState;
          return function (t) {
            return function (a) {
              return "function" === typeof a ? a(r, n, e) : t(a);
            };
          };
        };
      }
      var x = _();
      x.withExtraArgument = _;
      var M = Object(y.d)(S, Object(y.a)(x)),
        z = function () {
          return a.a.createElement(
            o.a,
            { store: M },
            a.a.createElement(
              u.a,
              null,
              a.a.createElement(
                i.c,
                { history: h },
                a.a.createElement(O, null, a.a.createElement(f, null))
              )
            )
          );
        };
      c.a.render(a.a.createElement(z, null), document.getElementById("root"));
    },
  },
  [[29, 2, 3]],
]);
//# sourceMappingURL=main.4489cacd.chunk.js.map
