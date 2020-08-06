(this.webpackJsonpntfront = this.webpackJsonpntfront || []).push([
  [7],
  {
    42: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var n = "https://thawing-reef-32246.herokuapp.com/api";
    },
    50: function (e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n);
      t.a = function (e) {
        var t = e.width,
          a = e.height,
          n = e.className,
          c = document.styleSheets[0],
          o = "move-gradient-" + Math.floor(Date.now() + 1e6 * Math.random()),
          i = "@keyframes "
            .concat(o, " {\n  from{background-position: ")
            .concat(-t, "px;}\n  to {\n    background-position: calc(-100% + ")
            .concat(2 * t, "px);\n  }\n}");
        try {
          c.insertRule(i, c.cssRules.length);
        } catch (u) {}
        var l = {
          width: "".concat(t, "px"),
          height: "".concat(a, "px"),
          background: "linear-gradient(\n        90deg,\n        rgba(224, 224, 224, 1) 0px,\n        rgba(255, 255, 255, 1) "
            .concat(t / 2, "px,\n        rgba(224, 224, 224, 1) ")
            .concat(t, "px\n  )"),
          animation: "".concat(o, " 3s infinite linear"),
        };
        return r.a.createElement("div", {
          className: "animation-skeleton rounded ".concat(n),
          style: l,
        });
      };
    },
    52: function (e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n);
      t.a = function (e) {
        var t = e.children;
        return r.a.createElement(
          "div",
          { className: "w-100 bg-white rounded mv-20 max-width-990px" },
          t
        );
      };
    },
    81: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(12),
        o = [
          "\u041f\u043d",
          "\u0412\u0442",
          "\u0421\u0440",
          "\u0427\u0442",
          "\u041f\u0442",
          "\u0421\u0431",
          "\u0412\u0441",
        ],
        i = function (e) {
          var t = e.day,
            a = e.data,
            n = e.index;
          return r.a.createElement(
            "div",
            {
              className:
                "d-flex w-100 h-150px bg-gray rounded border-bottom hover-float ",
            },
            r.a.createElement(
              "div",
              {
                className:
                  "border-grey-right text-align-center font-size-20 text-muted",
              },
              r.a.createElement(
                "div",
                { className: "p-15 text w-150px" },
                t,
                " ",
                o[n]
              )
            ),
            r.a.createElement(
              "div",
              { className: "w-100 d-flex overflow-hidden-y" },
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
        l = a(4),
        u = a(9),
        s = a(42),
        d = "".concat(s.a, "/todo/"),
        m = a(50),
        f = function () {
          var e = Object(u.b)(),
            t = Object(u.c)(function (e) {
              return e.todoList;
            });
          Object(n.useEffect)(function () {
            e(function (e) {
              return (
                e({ type: "GET_TODO_LIST_FETCHING" }),
                fetch(d, { method: "get" })
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
            o = Object(c.a)(a, 2),
            s = o[0],
            f = o[1],
            h = [];
          !(function () {
            for (
              var e = new Date(
                  new Date().getFullYear(),
                  new Date().getMonth(),
                  s
                ),
                t = 1;
              t <= 7;
              t++
            ) {
              var a = e.getDate() - e.getDay() + t,
                n = new Date(e.setDate(a)).toLocaleDateString();
              h.push(n);
            }
          })();
          var p = function (e) {
            var a = [];
            return (
              t.data.map(function (t) {
                return t.deadline === e && a.push(t);
              }),
              a
            );
          };
          return r.a.createElement(
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
                    return f(s - 7);
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
                    return f(s + 7);
                  },
                })
              )
            ),
            r.a.createElement(
              "div",
              { className: "d-flex flex-column border-grey" },
              t.isFetching
                ? h.map(function () {
                    return r.a.createElement(m.a, {
                      height: 150,
                      width: "970",
                      className: "m-10",
                    });
                  })
                : h.map(function (e, t) {
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(i, { day: e, data: p(e), index: t })
                    );
                  })
            )
          );
        },
        h = a(52);
      t.default = function () {
        return r.a.createElement(h.a, null, r.a.createElement(f, null));
      };
    },
  },
]);
//# sourceMappingURL=7.6bdf3805.chunk.js.map
