(this.webpackJsonpntfront = this.webpackJsonpntfront || []).push([
  [6],
  {
    42: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var n = "https://thawing-reef-32246.herokuapp.com/api";
    },
    43: function (e, t, a) {
      "use strict";
      var n = a(0),
        c = a.n(n);
      t.a = function () {
        return c.a.createElement(
          "div",
          { className: "d-flex justify-content-center" },
          c.a.createElement("div", {
            className: "animation-rotate mt-10 border-radius-50 border-loading",
            style: { width: "30px", height: "30px" },
          })
        );
      };
    },
    44: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return c;
        });
      var n = function (e) {
          var t = Math.round(new Date().getTime() / 1e3 - e),
            a = Math.floor(t / 31536e3);
          return a > 1
            ? "\u0431\u043e\u043b\u044c\u0448\u0435 \u0433\u043e\u0434\u0430 \u043d\u0430\u0437\u0430\u0434"
            : (a = Math.floor(t / 2592e3)) > 1
            ? 1 === a
              ? "1 \u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434"
              : "".concat(
                  a,
                  a > 1 && a < 5
                    ? " \u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0437\u0430\u0434"
                    : " \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043d\u0430\u0437\u0430\u0434"
                )
            : (a = Math.floor(t / 86400)) > 1
            ? 1 === a
              ? "1 \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434"
              : "".concat(
                  a,
                  a > 1 && a < 5
                    ? " \u0434\u043d\u044f \u043d\u0430\u0437\u0430\u0434"
                    : " \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434"
                )
            : (a = Math.floor(t / 3600)) > 1
            ? 1 === a
              ? "1 \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434"
              : "".concat(
                  a,
                  a > 1 && a < 5
                    ? " \u0447\u0430\u0441\u0430 \u043d\u0430\u0437\u0430\u0434"
                    : " \u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434"
                )
            : (a = Math.floor(t / 60)) > 1
            ? 1 === a
              ? "1 \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434"
              : "".concat(
                  a,
                  a > 1 && a < 5
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
        c = function (e) {
          var t = new Date().getTime() / 1e3 - e,
            a = Math.floor(t / 2592e3);
          return a > 1
            ? a < 2
              ? "\u0447\u0435\u0440\u0435\u0437 1 \u043c\u0435\u0441\u044f\u0446 "
              : "\u0447\u0435\u0440\u0435\u0437 ".concat(
                  a,
                  a > 1 && a < 5
                    ? " \u043c\u0435\u0441\u044f\u0446\u0430"
                    : " \u043c\u0435\u0441\u044f\u0446\u0435\u0432"
                )
            : (a = Math.floor(t / 86400)) > 1
            ? a < 2
              ? "\u0447\u0435\u0440\u0435\u0437 1 \u0434\u0435\u043d\u044c"
              : "\u0447\u0435\u0440\u0435\u0437 ".concat(
                  a,
                  a > 1 && a < 5
                    ? " \u0434\u043d\u044f"
                    : " \u0434\u043d\u0435\u0439"
                )
            : "\u0441\u0435\u0433\u043e\u0434\u043d\u044f";
        };
    },
    45: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return r;
      }),
        a.d(t, "a", function () {
          return l;
        });
      var n = a(42),
        c = "".concat(n.a, "/findorders/"),
        r = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {
                  price_gte: 0,
                  price_lte: 5e4,
                  weight_gte: 0,
                  weight_lte: 5e4,
                };
          return function (a) {
            return (
              a({ type: "GET_FIND_ORDER_FETCHING" }),
              t && a({ type: "GET_FIND_ORDER_CLEAR" }),
              fetch(
                ""
                  .concat(c, "?page=")
                  .concat(e, "&price__lte=")
                  .concat(t.price_lte, "&price__gte=")
                  .concat(t.price_gte, "&weight__lte=")
                  .concat(t.weight_lte, "&weight__gte=")
                  .concat(t.weight_gte),
                { method: "get" }
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  a({ type: "GET_FIND_ORDER_SUCCESS", payload: e });
                })
                .catch(function (e) {
                  return a({ type: "GET_FIND_ORDER_ERROR", payload: e });
                })
            );
          };
        },
        l = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {
                  price_gte: 0,
                  price_lte: 5e4,
                  weight_gte: 0,
                  weight_lte: 5e4,
                };
          return function (a) {
            return (
              a({ type: "GET_FIND_ORDER_FETCHING" }),
              fetch(
                ""
                  .concat(c, "?page=")
                  .concat(e, "&price__lte=")
                  .concat(t.price_lte, "&price__gte=")
                  .concat(t.price_gte, "&weight__lte=")
                  .concat(t.weight_lte, "&weight__gte=")
                  .concat(t.weight_gte),
                { method: "get" }
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  a({ type: "GET_FIND_ORDER_SUCCESS", payload: e });
                })
                .catch(function (e) {
                  return a({ type: "GET_FIND_ORDER_ERROR", payload: e });
                })
            );
          };
        };
    },
    46: function (e, t, a) {
      "use strict";
      var n = a(0),
        c = a.n(n);
      t.a = function (e) {
        var t = e.title;
        return c.a.createElement(
          "div",
          { className: "text-white mt-20 mb-5 font-size-20" },
          t
        );
      };
    },
    47: function (e, t, a) {
      "use strict";
      var n = a(0),
        c = a.n(n);
      t.a = function (e) {
        var t = e.children;
        return c.a.createElement(
          "div",
          { className: "d-flex flex-grow-1" },
          c.a.createElement(
            "div",
            { className: "w-100 max-width-600px " },
            c.a.createElement("div", { className: "w-100" }, t)
          )
        );
      };
    },
    48: function (e, t, a) {
      "use strict";
      var n = a(0),
        c = a.n(n),
        r = a(12),
        l = a(4),
        i = [
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
        o = [
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
            var e = Object(n.useState)(new Date().getMonth()),
              t = Object(r.a)(e, 2),
              a = t[0],
              u = t[1],
              s = Object(n.useState)(new Date().getFullYear()),
              m = Object(r.a)(s, 2),
              d = m[0],
              f = m[1],
              E = Object(n.useState)(new Date(d, a, 0).getDate()),
              h = Object(r.a)(E, 2),
              v = h[0],
              p = h[1],
              g = Object(n.useState)(new Date(d, a, 1).getDay()),
              _ = Object(r.a)(g, 2),
              b = _[0],
              w = _[1],
              N = o.map(function (e) {
                return c.a.createElement(
                  "th",
                  {
                    key: e,
                    className: "text-dark text-align-center font-size-20",
                  },
                  e
                );
              }),
              x = [],
              O = 0;
            O < b;
            O++
          )
            x.push(c.a.createElement("td", null));
          for (
            var D =
                new Date().getFullYear() === d && new Date().getMonth() === a
                  ? new Date().getDate()
                  : null,
              j = [],
              y = function (e) {
                var t = e === D ? "bg-blue rounded" : "";
                j.push(
                  c.a.createElement(
                    "td",
                    {
                      key: e,
                      className: "text-dark font-size-20 text-align-center ".concat(
                        t,
                        " cursor-pointer"
                      ),
                      onClick: function () {
                        return console.log(e, i[a]);
                      },
                    },
                    e
                  )
                );
              },
              R = 1;
            R <= v;
            R++
          )
            y(R);
          var k = [].concat(x, j),
            S = [],
            T = [];
          k.forEach(function (e, t) {
            t % 7 !== 0 ? T.push(e) : (S.push(T), (T = []).push(e)),
              t === k.length - 1 && S.push(T);
          });
          var F = S.map(function (e, t) {
            return c.a.createElement("tr", null, e);
          });
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              "div",
              { className: "text-white w-100 mb-5 font-size-20 mt-20" },
              "\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"
            ),
            c.a.createElement(
              "div",
              { className: "bg-white p-5 w-100 rounded cursor-select" },
              c.a.createElement(
                "div",
                {
                  className:
                    "pl-20 pr-20 d-flex justify-content-between font-size-20",
                },
                c.a.createElement(
                  "div",
                  null,
                  c.a.createElement(l.a, {
                    name: "back",
                    className: "fill-dark w-30px cursor-pointer hover-blue",
                    onClick: function () {
                      return (
                        u(0 === a ? 11 : a - 1),
                        f(0 === a ? d - 1 : d),
                        w(new Date(d, 0 === a ? 11 : a - 1, 1).getDay()),
                        void p(32 - new Date(d, a - 1, 32).getDate())
                      );
                    },
                  })
                ),
                c.a.createElement(
                  "div",
                  null,
                  c.a.createElement("span", null, i[a]),
                  " ",
                  c.a.createElement("span", null, d)
                ),
                c.a.createElement(
                  "div",
                  null,
                  c.a.createElement(l.a, {
                    name: "back",
                    className:
                      "fill-dark w-30px cursor-pointer transform-rotate-180 hover-blue",
                    onClick: function () {
                      return (
                        u(11 === a ? 0 : a + 1),
                        f(11 === a ? d + 1 : d),
                        w(new Date(d, a + 1, 1).getDay()),
                        void p(
                          32 - new Date(d, 11 === a ? 0 : a + 1, 32).getDate()
                        )
                      );
                    },
                  })
                )
              ),
              c.a.createElement(
                "div",
                null,
                c.a.createElement(
                  "table",
                  { className: "w-100 h-300px" },
                  c.a.createElement(
                    "thead",
                    null,
                    c.a.createElement("tr", null, N)
                  ),
                  c.a.createElement("tbody", null, F)
                )
              )
            )
          );
        },
        s = function (e) {
          var t = e.todos;
          return c.a.createElement(
            "div",
            null,
            c.a.createElement(
              "div",
              { className: "text-white w-100 mb-5 font-size-20 mt-20" },
              "\u041c\u043e\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"
            ),
            null === t || void 0 === t
              ? void 0
              : t.map(function (e) {
                  return c.a.createElement(
                    "div",
                    {
                      className: "bg-white w-100 br p-10 mb-5 d-flex rounded ".concat(
                        e.is_active && "text-through"
                      ),
                    },
                    c.a.createElement("div", {
                      className: "checkbox-".concat(e.is_active),
                    }),
                    c.a.createElement(
                      "div",
                      { className: "ml-5 text-uppercase " },
                      e.title
                    )
                  );
                })
          );
        },
        m = function () {
          return c.a.createElement(
            "footer",
            {
              className:
                "text-white mt-15 w-100 text-align-center mt-15 cursor-pointer",
            },
            c.a.createElement("span", null, " \xa9 NaTeste, Inc., 2020"),
            "\xa9 TOO NaNabke 2020",
            c.a.createElement(
              "span",
              null,
              " \u0423\u0441\u043b\u043e\u0432\u0438\u044f"
            ),
            c.a.createElement(
              "span",
              null,
              " \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"
            )
          );
        },
        d = a(51),
        f = a.n(d),
        E = function () {
          var e = Object(n.useState)(!0),
            t = Object(r.a)(e, 2),
            a = t[0],
            c = t[1],
            l = Object(n.useState)(!1),
            i = Object(r.a)(l, 2),
            o = i[0],
            u = i[1],
            s = Object(n.useState)([]),
            m = Object(r.a)(s, 2),
            d = m[0],
            E = m[1];
          return (
            Object(n.useEffect)(function () {
              c(!0),
                u(!1),
                f()({
                  method: "GET",
                  url: "https://thawing-reef-32246.herokuapp.com/api/todo/",
                })
                  .then(function (e) {
                    E(e.data.results), c(!1);
                  })
                  .catch(function (e) {
                    u(!0), c(!1);
                  });
            }, []),
            { loading: a, error: o, todo: d }
          );
        },
        h = a(43);
      t.a = function () {
        var e = E(),
          t = e.loading,
          a = e.error,
          n = e.todo;
        return c.a.createElement(
          "div",
          { className: "w-350px h-100" },
          c.a.createElement(
            "div",
            { className: "d-flex flex-column h-100" },
            c.a.createElement(u, null),
            n && c.a.createElement(s, { todos: n }),
            t && c.a.createElement(h.a, null),
            a &&
              c.a.createElement(
                "div",
                { className: "text-white text-align-center m-20" },
                "\u041e\u0448\u0438\u0431\u043a\u0430!"
              ),
            !t &&
              !a &&
              0 === n.length &&
              c.a.createElement(
                "div",
                { className: "text-white text-align-center m-20" },
                "\u0417\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0435\u0442"
              ),
            c.a.createElement(m, null)
          )
        );
      };
    },
    49: function (e, t, a) {
      "use strict";
      var n = a(0),
        c = a.n(n),
        r = a(43),
        l =
          (a(45),
          function (e) {
            var t = e.item;
            return c.a.createElement(
              "div",
              { className: "d-flex w-100 mb-15 align-items-start" },
              c.a.createElement("div", {
                className: "mr-10 top-10 position-sticky  rounded",
                style: {
                  background: "url(".concat(
                    t.field0,
                    ") no-repeat 50% 50% / cover"
                  ),
                  minWidth: "80px",
                  height: "80px",
                },
              }),
              c.a.createElement(
                "div",
                {
                  className:
                    "w-100 rounded bg-white p-15 d-flex flex-column text-break overflow-hidden",
                },
                c.a.createElement(
                  "div",
                  {
                    className:
                      "d-flex justify-content-between border-bottom font-size-20",
                  },
                  c.a.createElement("div", null, t.field1),
                  c.a.createElement("div", null, t.field2)
                ),
                c.a.createElement("div", { className: "p-5" }, t.field3),
                (t.field4 || t.field5) &&
                  c.a.createElement(
                    "div",
                    { className: "d-flex justify-content-between mt-5" },
                    c.a.createElement(
                      "div",
                      { className: "text-muted align-self-end" },
                      t.field4
                    ),
                    c.a.createElement(
                      "div",
                      { className: "text-muted align-self-end" },
                      t.field5
                    )
                  ),
                c.a.createElement(
                  "div",
                  { className: "d-flex justify-content-between mt-5" },
                  c.a.createElement(
                    "div",
                    { className: "text-muted align-self-end" },
                    t.field6
                  ),
                  c.a.createElement(
                    "div",
                    { className: "text-muted align-self-end" },
                    t.field7
                  )
                ),
                t.field8 &&
                  c.a.createElement(
                    "div",
                    { className: "d-flex justify-content-end mt-5" },
                    c.a.createElement(
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
          });
      t.a = function (e) {
        var t = e.page,
          a = e.setPage,
          i = e.data,
          o = e.loading,
          u = e.error,
          s = e.hasMore,
          m = e.type,
          d = Object(n.useRef)(),
          f = Object(n.useCallback)(
            function (e) {
              o ||
                (d.current && d.current.disconnect(),
                (d.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && s && a(t + 1);
                })),
                e && d.current.observe(e));
            },
            [o, s]
          ),
          E = i.map(function (e) {
            return c.a.createElement(
              "div",
              { ref: f, key: e.id },
              "avatar-card" === m && c.a.createElement(l, { item: e })
            );
          });
        return c.a.createElement(
          c.a.Fragment,
          null,
          E,
          o && c.a.createElement(r.a, null),
          s && c.a.createElement("div", { className: "mv-20" }),
          u &&
            c.a.createElement(
              "div",
              { className: "text-white text-align-center m-20" },
              "\u041e\u0448\u0438\u0431\u043a\u0430!"
            ),
          !o &&
            !u &&
            0 === i.length &&
            c.a.createElement(
              "div",
              { className: "text-white text-align-center m-20" },
              "\u041f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"
            )
        );
      };
    },
    82: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        c = a.n(n),
        r = a(47),
        l = a(12),
        i = a(9),
        o = a(42),
        u = "".concat(o.a, "/myorders/"),
        s = a(46),
        m = a(49),
        d = a(44),
        f = function () {
          var e = Object(i.b)(),
            t = Object(n.useState)(1),
            a = Object(l.a)(t, 2),
            r = a[0],
            o = a[1],
            f = Object(n.useState)([]),
            E = Object(l.a)(f, 2),
            h = E[0],
            v = E[1],
            p = Object(i.c)(function (e) {
              return e.myOrders;
            });
          return (
            Object(n.useEffect)(
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
                  })(r)
                );
              },
              [r]
            ),
            Object(n.useEffect)(
              function () {
                var e,
                  t =
                    null === (e = p.data) || void 0 === e
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
                v(t);
              },
              [p.data]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(s.a, {
                title:
                  "\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b",
              }),
              c.a.createElement(m.a, {
                data: h,
                page: r,
                setPage: function (e) {
                  return o(e);
                },
                loading: p.isFetching,
                error: p.error,
                hasMore: p.hasMore,
                type: "avatar-card",
              })
            )
          );
        },
        E = a(48);
      t.default = function () {
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(r.a, null, c.a.createElement(f, null)),
          c.a.createElement(E.a, null)
        );
      };
    },
  },
]);
//# sourceMappingURL=6.5468570e.chunk.js.map
