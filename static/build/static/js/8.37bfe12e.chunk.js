(this.webpackJsonpntfront = this.webpackJsonpntfront || []).push([
  [8],
  {
    44: function (e, t, n) {
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
    52: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a);
      t.a = function (e) {
        var t = e.children;
        return r.a.createElement(
          "div",
          { className: "w-100 bg-white rounded mv-20 max-width-990px" },
          t
        );
      };
    },
    79: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(52),
        i = n(24),
        l = n(12),
        o = n(9),
        s = n(44),
        d = function (e) {
          var t = e.chat,
            n = Object(o.b)(),
            a = Object(o.c)(function (e) {
              return e.chat.unreadMessages;
            }),
            c = Object(o.c)(function (e) {
              return e.chat.dialogueID.id;
            });
          return r.a.createElement(
            "div",
            {
              className: "w-100 pl-15 d-flex  cursor-pointer hover-whitegray ",
              key: t.id,
              style: { height: "65px" },
              onClick: function () {
                n({ type: "SET_DIALOGUE_ID", payload: t.user_id }),
                  n({ type: "FETCH_DIALOGUE_MESSAGES_CLEAR" });
              },
            },
            r.a.createElement(
              "div",
              { style: { padding: "8px 8px 8px 0" } },
              r.a.createElement("img", {
                className: "rounded-circle",
                src: "".concat(t.avatar),
                width: 50,
                height: 50,
              })
            ),
            r.a.createElement(
              "div",
              { className: "w-100 border-bottom pr-15" },
              r.a.createElement(
                "div",
                { style: { padding: "8px 0", height: "100%" } },
                r.a.createElement(
                  "div",
                  { className: "d-flex w-100 justify-content-between" },
                  r.a.createElement("div", null, t.first_name, " ", t.last_name)
                ),
                r.a.createElement(
                  "div",
                  { className: "d-flex justify-content-between" },
                  r.a.createElement(
                    "div",
                    {
                      className: "text-muted",
                      style: {
                        maxWidth: "220px",
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
                    c !== t.user_id &&
                    r.a.createElement(
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
        },
        u = function () {
          var e = Object(o.b)(),
            t = Object(o.c)(function (e) {
              return e.chat.listChats;
            }),
            n =
              (Object(o.c)(function (e) {
                return e.chat.dialogueID.id;
              }),
              Object(a.useState)(1)),
            c = Object(l.a)(n, 2),
            s = c[0],
            u = c[1];
          Object(a.useEffect)(
            function () {
              e({ type: "LIST_CHATS_LOADING", payload: !0 }),
                i.b.send(
                  JSON.stringify({ command: "list_chats", page: "".concat(s) })
                );
            },
            [s]
          );
          var m = Object(a.useRef)(),
            f = Object(a.useCallback)(
              function (e) {
                t.loading ||
                  ((m.current = new IntersectionObserver(function (e) {
                    e[0].isIntersecting && t.hasMore && u(s + 1);
                  })),
                  e && m.current.observe(e));
              },
              [t.loading, t.hasMore, t.data]
            );
          return r.a.createElement(
            "div",
            {
              className:
                "w-390px d-flex flex-column h-100 position-relative border-right-grey",
              style: { maxWidth: "330px", minWidth: "330px" },
            },
            r.a.createElement(
              "div",
              {
                className:
                  "h-50px d-flex cursor-select flex-column h-50px font-size-20 text-align-center justify-content-center w-100 border-bottom",
                style: { minHeight: "50px" },
              },
              "\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"
            ),
            r.a.createElement(
              "div",
              {
                className: "h-100 rounded-left w-100",
                style: { overflow: "hidden auto" },
              },
              t.loading
                ? "LOADING"
                : t.data.map(function (e, t) {
                    return r.a.createElement(
                      "div",
                      { ref: f, key: t },
                      r.a.createElement(d, { chat: e })
                    );
                  }),
              r.a.createElement("div", { className: "mv-20" })
            )
          );
        },
        m = function (e) {
          var t = e.message,
            n =
              e.from.username ===
              (null === t || void 0 === t ? void 0 : t.author)
                ? "start"
                : "end";
          return r.a.createElement(
            "div",
            { className: "d-flex justify-content-".concat(n) },
            r.a.createElement(
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
              r.a.createElement(
                "div",
                {
                  className: "d-flex justify-content-end",
                  style: {
                    fontSize: "0.7rem",
                    alignSelf: "flex-end",
                    color: "rgba(250, 250, 250, 0.5)",
                  },
                },
                r.a.createElement(
                  "div",
                  null,
                  Object(s.b)(null === t || void 0 === t ? void 0 : t.timestamp)
                )
              )
            )
          );
        },
        f = function () {
          var e,
            t = Object(o.c)(function (e) {
              return e.chat;
            }),
            n = t.dialogue,
            c = t.dialogueID,
            s = t.listChats,
            d = t.newMessages,
            u = Object(o.b)(),
            f = Object(a.useState)(1),
            h = Object(l.a)(f, 2),
            g = h[0],
            v = h[1];
          Object(a.useEffect)(
            function () {
              n.loading ||
                (u({ type: "FETCH_DIALOGUE_MESSAGES_LOADING", payload: !0 }),
                i.b.send(
                  JSON.stringify({
                    command: "fetch_messages",
                    recipient: "".concat(c.id),
                    page: "".concat(g),
                  })
                ));
            },
            [g, c.id]
          ),
            Object(a.useEffect)(
              function () {
                v(1);
              },
              [c.id]
            );
          var p = Object(a.useRef)(),
            b = Object(a.useCallback)(
              function (e) {
                n.loading ||
                  ((p.current = new IntersectionObserver(function (e) {
                    e[0].isIntersecting && n.hasMore && v(g + 1);
                  })),
                  e && p.current.observe(e));
              },
              [n.loading, n.hasMore, n.data, d]
            );
          return r.a.createElement(
            "div",
            { className: "h-100 position-relative" },
            r.a.createElement(
              "div",
              {
                className:
                  "h-100 position-absolute w-100 d-flex flex-column justify-content-end",
              },
              r.a.createElement(
                "div",
                {
                  className:
                    "h-auto max-height-100 rounded-left p-20 w-100 d-flex",
                  style: {
                    overflow: "hidden scroll",
                    flexDirection: "column-reverse",
                  },
                },
                !s.loading &&
                  (null === (e = n.data) || void 0 === e
                    ? void 0
                    : e.map(function (e, t) {
                        return t === n.data.length - 5
                          ? r.a.createElement(
                              "div",
                              { ref: b, key: t },
                              r.a.createElement(m, {
                                message: e,
                                from: s.data.find(function (e) {
                                  return e.user_id === c.id;
                                }),
                              })
                            )
                          : r.a.createElement(
                              "div",
                              { key: t },
                              r.a.createElement(m, {
                                message: e,
                                from: s.data.find(function (e) {
                                  return e.user_id === c.id;
                                }),
                              })
                            );
                      }))
              )
            )
          );
        },
        h = function () {
          var e = Object(o.c)(function (e) {
              return e.chat.listChats;
            }),
            t = Object(o.c)(function (e) {
              return e.chat.dialogueID.id;
            }),
            n = e.data.find(function (e) {
              return e.user_id === t;
            });
          return r.a.createElement(
            "div",
            {
              className:
                " bg-white z-1 w-100 rounded-right border-bottom d-flex align-items-center",
              style: { minHeight: "50px" },
            },
            e.loading
              ? "loading"
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement("div", {
                    className: "ml-20 rounded-circle",
                    style: {
                      background: "url(".concat(
                        n.avatar,
                        ") no-repeat 50% 50% / cover"
                      ),
                      width: "30px",
                      height: "30px",
                    },
                  }),
                  r.a.createElement(
                    "div",
                    { className: "ml-20" },
                    n.first_name,
                    " ",
                    n.last_name
                  )
                )
          );
        },
        g = n(4),
        v = function () {
          var e = Object(o.c)(function (e) {
              return e.chat;
            }),
            t =
              (Object(o.b)(),
              function () {
                "" !== s.trim() &&
                  (e.dialogue.loading ||
                    (d(""),
                    i.b.send(
                      JSON.stringify({
                        command: "new_message",
                        message: s,
                        recipient: e.dialogueID.id,
                      })
                    )));
              }),
            n = Object(a.useState)(""),
            c = Object(l.a)(n, 2),
            s = c[0],
            d = c[1];
          return r.a.createElement(
            "div",
            {
              className:
                "position-relative rounded-right border-top d-flex justify-content-between",
              style: { minHeight: "50px" },
            },
            r.a.createElement(
              "label",
              {
                htmlFor: "image_uploads",
                className:
                  "cursor-pointer p-10 d-flex align-items-center hover-blue",
                title:
                  "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
              },
              r.a.createElement(g.a, {
                name: "add-file",
                width: "40px",
                height: "40px",
              }),
              r.a.createElement("input", {
                id: "image_uploads",
                accept: ".jpg, .jpeg, .png",
                style: { width: "0px", height: "0px" },
                type: "file",
                onChange: function (e) {},
              })
            ),
            r.a.createElement("input", {
              type: "text",
              placeholder:
                "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
              value: s,
              className:
                "w-100 m-5 outline-none  border-transparent rounded p-10",
              onChange: function (e) {
                d(e.target.value);
              },
              style: { border: "1px solid rgb(221, 221, 221)" },
              onKeyPress: function (e) {
                return (function (e) {
                  "Enter" === e.key && t();
                })(e);
              },
            }),
            r.a.createElement(
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
              r.a.createElement(g.a, {
                name: "send",
                width: "40px",
                height: "40px",
              })
            )
          );
        },
        p = function () {
          return r.a.createElement(
            "div",
            {
              className:
                "w-100 h-100 d-flex flex-column justify-content-between position-relative",
            },
            0 !==
              Object(o.c)(function (e) {
                return e.chat.dialogueID.id;
              })
              ? r.a.createElement(
                  "div",
                  { className: "h-100 d-flex flex-column position-relative" },
                  r.a.createElement(h, null),
                  r.a.createElement(f, null),
                  r.a.createElement(v, null)
                )
              : r.a.createElement(
                  "div",
                  {
                    className:
                      "h-100 w-100 d-flex justify-content-center align-items-center font-size-20",
                  },
                  "\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0437\u0430\u043a\u0430\u0437 \u0438 \u043d\u0430\u0447\u043d\u0438\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433 \u0441 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u043e\u043c"
                )
          );
        };
      t.default = function () {
        var e = Object(o.b)();
        return (
          Object(a.useEffect)(function () {
            e({ type: "LIST_CHATS_DATA_CLEAR" });
          }, []),
          Object(i.c)().store.connected
            ? r.a.createElement(
                c.a,
                null,
                r.a.createElement(
                  "div",
                  { className: "d-flex h-100 rounded" },
                  r.a.createElement(u, null),
                  r.a.createElement(p, null)
                )
              )
            : r.a.createElement(
                "div",
                { className: "text-white font-size-24 mt-20" },
                "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443"
              )
        );
      };
    },
  },
]);
//# sourceMappingURL=8.37bfe12e.chunk.js.map
