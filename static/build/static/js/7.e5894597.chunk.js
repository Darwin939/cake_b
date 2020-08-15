(this.webpackJsonpntfront = this.webpackJsonpntfront || []).push([
  [7],
  {
    54: function (e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n);
      t.a = function (e) {
        var t = e.width,
          a = e.height,
          n = e.className,
          c = document.styleSheets[0],
          i = "move-gradient-" + Math.floor(Date.now() + 1e6 * Math.random()),
          o = "@keyframes "
            .concat(i, " {\n  from{background-position: ")
            .concat(-t, "px;}\n  to {\n    background-position: calc(-100% + ")
            .concat(2 * t, "px);\n  }\n}");
        try {
          c.insertRule(o, c.cssRules.length);
        } catch (d) {}
        var l = {
          width: "".concat(t, "px"),
          height: "".concat(a, "px"),
          background: "linear-gradient(\n        90deg,\n        rgba(224, 224, 224, 1) 0px,\n        rgba(255, 255, 255, 1) "
            .concat(t / 2, "px,\n        rgba(224, 224, 224, 1) ")
            .concat(t, "px\n  )"),
          animation: "".concat(i, " 3s infinite linear"),
        };
        return r.a.createElement("div", {
          className: "animation-skeleton rounded ".concat(n),
          style: l,
        });
      };
    },
    55: function (e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n),
        c = a(11);
      t.a = function (e) {
        var t = e.children,
          a = Object(c.a)("(min-width:500px)"),
          n = Object(c.a)("(min-height:500px)");
        return r.a.createElement(
          "div",
          {
            className: "w-100 bg-white rounded ".concat(
              a && n && "mv-20",
              " max-width-990px"
            ),
          },
          t
        );
      };
    },
    59: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(8),
        i = [
          "\u041f\u043d",
          "\u0412\u0442",
          "\u0421\u0440",
          "\u0427\u0442",
          "\u041f\u0442",
          "\u0421\u0431",
          "\u0412\u0441",
        ],
        o = function (e) {
          var t = e.day,
            a = e.data,
            n = e.index;
          return r.a.createElement(
            "div",
            {
              className:
                "d-flex  h-150px bg-gray rounded border-bottom hover-float ",
            },
            r.a.createElement(
              "div",
              {
                className:
                  "border-grey-right text-align-center font-size-20 text-muted",
              },
              r.a.createElement(
                "div",
                { className: "text", style: { width: "110px" } },
                t,
                " ",
                i[n]
              )
            ),
            r.a.createElement(
              "div",
              { className: " d-flex overflow-hidden-y" },
              a.map(function (e) {
                return r.a.createElement(
                  "div",
                  {
                    className:
                      "min-width-200px max-width-200px h-150px p-15 cursor-pointer",
                    title: e.customer.username,
                  },
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "h-100 bg-white border-blue-left-3px rounded-right p-5 hover-border hover-float text-break",
                    },
                    r.a.createElement(
                      "div",
                      { className: "mb-10 text-muted" },
                      " \u0434\u043b\u044f ",
                      e.customer.username
                    ),
                    r.a.createElement("div", null, e.title)
                  )
                );
              })
            )
          );
        },
        l = a(5),
        d = a(4),
        m = a(21),
        s = "".concat(m.a, "/api/todo/"),
        u = a(54),
        h = function () {
          var e = Object(d.b)(),
            t = Object(d.c)(function (e) {
              return e.todoList;
            });
          Object(n.useEffect)(function () {
            e(function (e) {
              return (
                e({ type: "GET_TODO_LIST_FETCHING" }),
                fetch(s, { method: "get" })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (t) {
                    e({ type: "GET_TODO_LIST_SUCCESS", payload: t });
                  })
                  .catch(function (t) {
                    return e({ type: "GET_TODO_LIST_ERROR", payload: t });
                  })
              );
            });
          }, []);
          var a = Object(n.useState)(new Date().getDate()),
            i = Object(c.a)(a, 2),
            m = i[0],
            h = i[1],
            p = [];
          !(function () {
            for (
              var e = new Date(
                  new Date().getFullYear(),
                  new Date().getMonth(),
                  m
                ),
                t = 1;
              t <= 7;
              t++
            ) {
              var a = e.getDate() - e.getDay() + t,
                n = new Date(e.setDate(a)).toLocaleDateString();
              p.push(n);
            }
          })();
          var f = function (e) {
            var a = [];
            return (
              t.data.map(function (t) {
                return t.deadline === e && a.push(t);
              }),
              a
            );
          };
          return t.error
            ? r.a.createElement(
                "div",
                { className: "text-dark text-align-center m-20 font-size-24" },
                "\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d"
              )
            : r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "div",
                  {
                    className:
                      "d-flex justify-content-between h-50px align-items-center pg-20",
                  },
                  r.a.createElement(
                    "div",
                    { title: "\u041d\u0430\u0437\u0430\u0434" },
                    r.a.createElement(l.a, {
                      name: "back",
                      className: "fill-dark w-30px cursor-pointer hover-blue",
                      onClick: function () {
                        return h(m - 7);
                      },
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "font-size-20" },
                    "\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b \u043d\u0430 \u044d\u0442\u0443 \u043d\u0435\u0434\u0435\u043b\u044e"
                  ),
                  r.a.createElement(
                    "div",
                    { title: "\u0412\u043f\u0435\u0440\u0435\u0434" },
                    r.a.createElement(l.a, {
                      name: "back",
                      className:
                        "fill-dark w-30px cursor-pointer transform-rotate-180 hover-blue",
                      onClick: function () {
                        return h(m + 7);
                      },
                    })
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "d-flex flex-column border-grey" },
                  t.isFetching
                    ? p.map(function () {
                        return r.a.createElement(u.a, {
                          height: 150,
                          width: "970",
                          className: "m-10",
                        });
                      })
                    : p.map(function (e, t) {
                        return r.a.createElement(
                          "div",
                          null,
                          r.a.createElement(o, { day: e, data: f(e), index: t })
                        );
                      })
                )
              );
        },
        p = (a(55), a(11));
      t.default = function () {
        var e = Object(p.a)("(min-width:1100px)"),
          t = Object(p.a)("(min-width:680px)"),
          a = Object(p.a)("(min-width:500px)"),
          n = Object(p.a)("(min-height:500px)");
        return r.a.createElement(
          "div",
          {
            className: "w-100 bg-white ".concat(
              t ? "w-100" : e ? "max-width-990px" : "max-width-600px",
              " h-fit"
            ),
            style: {
              maxWidth: "".concat(a && n ? null : window.innerWidth, "px"),
            },
          },
          r.a.createElement(h, null)
        );
      };
    },
  },
]);
//# sourceMappingURL=7.e5894597.chunk.js.map
