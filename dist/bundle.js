;(() => {
    'use strict'
    var e,
        t,
        o,
        r,
        n,
        i,
        a,
        s,
        l,
        c,
        d,
        u,
        f,
        p,
        m = {
            8: (e, t, o) => {
                o.d(t, { Z: () => i })
                var r = o(645),
                    n = o.n(r)()(function (e) {
                        return e[1]
                    })
                n.push([
                    e.id,
                    '/*! tailwindcss v2.2.5 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,::before,::after{--tw-border-opacity: 1;border-color:rgba(229, 231, 235, var(--tw-border-opacity))}.table{display:table}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,100%{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:none;animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}.bg-red-500{--tw-bg-opacity: 1;background-color:rgba(239, 68, 68, var(--tw-bg-opacity))}.text-white{--tw-text-opacity: 1;color:rgba(255, 255, 255, var(--tw-text-opacity))}*,::before,::after{--tw-shadow: 0 0 #0000}*,::before,::after{--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000}',
                    '',
                ])
                const i = n
            },
            645: (e) => {
                e.exports = function (e) {
                    var t = []
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var o = e(t)
                                return t[2]
                                    ? '@media '
                                          .concat(t[2], ' {')
                                          .concat(o, '}')
                                    : o
                            }).join('')
                        }),
                        (t.i = function (e, o, r) {
                            'string' == typeof e && (e = [[null, e, '']])
                            var n = {}
                            if (r)
                                for (var i = 0; i < this.length; i++) {
                                    var a = this[i][0]
                                    null != a && (n[a] = !0)
                                }
                            for (var s = 0; s < e.length; s++) {
                                var l = [].concat(e[s])
                                ;(r && n[l[0]]) ||
                                    (o &&
                                        (l[2]
                                            ? (l[2] = ''
                                                  .concat(o, ' and ')
                                                  .concat(l[2]))
                                            : (l[2] = o)),
                                    t.push(l))
                            }
                        }),
                        t
                    )
                }
            },
            379: (e) => {
                var t = []
                function o(e) {
                    for (var o = -1, r = 0; r < t.length; r++)
                        if (t[r].identifier === e) {
                            o = r
                            break
                        }
                    return o
                }
                function r(e, r) {
                    for (var i = {}, a = [], s = 0; s < e.length; s++) {
                        var l = e[s],
                            c = r.base ? l[0] + r.base : l[0],
                            d = i[c] || 0,
                            u = ''.concat(c, ' ').concat(d)
                        i[c] = d + 1
                        var f = o(u),
                            p = { css: l[1], media: l[2], sourceMap: l[3] }
                        ;-1 !== f
                            ? (t[f].references++, t[f].updater(p))
                            : t.push({
                                  identifier: u,
                                  updater: n(p, r),
                                  references: 1,
                              }),
                            a.push(u)
                    }
                    return a
                }
                function n(e, t) {
                    var o = t.domAPI(t)
                    return (
                        o.update(e),
                        function (t) {
                            if (t) {
                                if (
                                    t.css === e.css &&
                                    t.media === e.media &&
                                    t.sourceMap === e.sourceMap
                                )
                                    return
                                o.update((e = t))
                            } else o.remove()
                        }
                    )
                }
                e.exports = function (e, n) {
                    var i = r((e = e || []), (n = n || {}))
                    return function (e) {
                        e = e || []
                        for (var a = 0; a < i.length; a++) {
                            var s = o(i[a])
                            t[s].references--
                        }
                        for (var l = r(e, n), c = 0; c < i.length; c++) {
                            var d = o(i[c])
                            0 === t[d].references &&
                                (t[d].updater(), t.splice(d, 1))
                        }
                        i = l
                    }
                }
            },
            569: (e) => {
                var t = {}
                e.exports = function (e, o) {
                    var r = (function (e) {
                        if (void 0 === t[e]) {
                            var o = document.querySelector(e)
                            if (
                                window.HTMLIFrameElement &&
                                o instanceof window.HTMLIFrameElement
                            )
                                try {
                                    o = o.contentDocument.head
                                } catch (e) {
                                    o = null
                                }
                            t[e] = o
                        }
                        return t[e]
                    })(e)
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        )
                    r.appendChild(o)
                }
            },
            216: (e) => {
                e.exports = function (e) {
                    var t = document.createElement('style')
                    return e.setAttributes(t, e.attributes), e.insert(t), t
                }
            },
            565: (e, t, o) => {
                e.exports = function (e) {
                    var t = o.nc
                    t && e.setAttribute('nonce', t)
                }
            },
            795: (e) => {
                e.exports = function (e) {
                    var t = e.insertStyleElement(e)
                    return {
                        update: function (o) {
                            !(function (e, t, o) {
                                var r = o.css,
                                    n = o.media,
                                    i = o.sourceMap
                                n
                                    ? e.setAttribute('media', n)
                                    : e.removeAttribute('media'),
                                    i &&
                                        'undefined' != typeof btoa &&
                                        (r +=
                                            '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                                btoa(
                                                    unescape(
                                                        encodeURIComponent(
                                                            JSON.stringify(i)
                                                        )
                                                    )
                                                ),
                                                ' */'
                                            )),
                                    t.styleTagTransform(r, e)
                            })(t, e, o)
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1
                                e.parentNode.removeChild(e)
                            })(t)
                        },
                    }
                }
            },
            589: (e) => {
                e.exports = function (e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild)
                        t.appendChild(document.createTextNode(e))
                    }
                }
            },
        },
        b = {}
    function h(e) {
        var t = b[e]
        if (void 0 !== t) return t.exports
        var o = (b[e] = { id: e, exports: {} })
        return m[e](o, o.exports, h), o.exports
    }
    ;(h.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e
        return h.d(t, { a: t }), t
    }),
        (h.d = (e, t) => {
            for (var o in t)
                h.o(t, o) &&
                    !h.o(e, o) &&
                    Object.defineProperty(e, o, { enumerable: !0, get: t[o] })
        }),
        (h.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (e = h(379)),
        (t = h.n(e)),
        (o = h(795)),
        (r = h.n(o)),
        (n = h(569)),
        (i = h.n(n)),
        (a = h(565)),
        (s = h.n(a)),
        (l = h(216)),
        (c = h.n(l)),
        (d = h(589)),
        (u = h.n(d)),
        (f = h(8)),
        ((p = {}).styleTagTransform = u()),
        (p.setAttributes = s()),
        (p.insert = i().bind(null, 'head')),
        (p.domAPI = r()),
        (p.insertStyleElement = c()),
        t()(f.Z, p),
        f.Z && f.Z.locals && f.Z.locals
})()
