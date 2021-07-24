;(() => {
    'use strict'
    var n,
        e,
        t,
        r,
        i,
        o,
        a,
        s,
        l,
        d,
        c,
        m,
        h,
        p,
        g = {
            854: (n, e, t) => {
                t.d(e, { Z: () => o })
                var r = t(645),
                    i = t.n(r)()(function (n) {
                        return n[1]
                    })
                i.push([
                    n.id,
                    "/*! tailwindcss v2.2.5 | MIT License | https://tailwindcss.com */\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n  margin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n  font-family: system-ui, -apple-system, /* Firefox supports this but not yet `system-ui` */ 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton {\n  -webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n/**\nRestore the focus styles unset by the previous rule.\n*/\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n  padding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 1 */\n  line-height: 1.5;\n  /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: currentColor;\n  /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #a3a3a3;\n}\ninput:-ms-input-placeholder,\ntextarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #a3a3a3;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #a3a3a3;\n}\nbutton {\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n[hidden] {\n  display: none;\n}\n*,\n::before,\n::after {\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 229, 229, var(--tw-border-opacity));\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.btn {\n  border-radius: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.portfolio_block {\n  height: 16rem;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.portfolio_block:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n}\n.portfolio_block {\n  border-radius: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(23, 23, 23, var(--tw-bg-opacity));\n}\n.dark .portfolio_block {\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 229, 229, var(--tw-bg-opacity));\n}\n.portfolio_block {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.dark .dark\\:block {\n  display: block;\n}\n.dark .dark\\:hidden {\n  display: none;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.h-full {\n  height: 100%;\n}\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes ping {\n  75%,\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes ping {\n  75%,\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes bounce {\n  0%,\n  100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@keyframes bounce {\n  0%,\n  100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@-webkit-keyframes dropin {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(1.1);\n  }\n}\n@keyframes dropin {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(1.1);\n  }\n}\n.animate-ping {\n  -webkit-animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n.animate-dropin {\n  -webkit-animation: dropin 1s ease-out;\n  animation: dropin 1s ease-out;\n}\n.select-all {\n  -webkit-user-select: all;\n  -moz-user-select: all;\n  user-select: all;\n}\n.grid-flow-row {\n  grid-auto-flow: row;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-12 {\n  gap: 3rem;\n}\n.gap-16 {\n  gap: 4rem;\n}\n.gap-24 {\n  gap: 6rem;\n}\n.self-center {\n  align-self: center;\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(245, 245, 245, var(--tw-bg-opacity));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(23, 23, 23, var(--tw-bg-opacity));\n}\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(23, 23, 23, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-cyan-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(34, 211, 238, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.from-gray-100 {\n  --tw-gradient-from: #f5f5f5;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(245, 245, 245, 0));\n}\n.dark .dark\\:from-gray-1000 {\n  --tw-gradient-from: #0A0A0A;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(10, 10, 10, 0));\n}\n.to-cyan-400 {\n  --tw-gradient-to: #22d3ee;\n}\n.dark .dark\\:to-red-500 {\n  --tw-gradient-to: #ef4444;\n}\n.fill-current {\n  fill: currentColor;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n.py-36 {\n  padding-top: 9rem;\n  padding-bottom: 9rem;\n}\n.pt-12 {\n  padding-top: 3rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\n.font-display {\n  font-family: Montserrat, sans-serif;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\n.font-bold {\n  font-weight: 700;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.dark .dark\\:text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.dark .dark\\:text-black {\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n*,\n::before,\n::after {\n  --tw-shadow: 0 0 #0000;\n}\n*,\n::before,\n::after {\n  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n.transition-colors {\n  transition-property: background-color, border-color, color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n@media (min-width: 1024px) {\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n  .lg\\:gap-24 {\n    gap: 6rem;\n  }\n  .lg\\:gap-36 {\n    gap: 9rem;\n  }\n  .lg\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .lg\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n  .lg\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n  .lg\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n  .lg\\:text-8xl {\n    font-size: 6rem;\n    line-height: 1;\n  }\n}\n",
                    '',
                ])
                const o = i
            },
            645: (n) => {
                n.exports = function (n) {
                    var e = []
                    return (
                        (e.toString = function () {
                            return this.map(function (e) {
                                var t = n(e)
                                return e[2]
                                    ? '@media '
                                          .concat(e[2], ' {')
                                          .concat(t, '}')
                                    : t
                            }).join('')
                        }),
                        (e.i = function (n, t, r) {
                            'string' == typeof n && (n = [[null, n, '']])
                            var i = {}
                            if (r)
                                for (var o = 0; o < this.length; o++) {
                                    var a = this[o][0]
                                    null != a && (i[a] = !0)
                                }
                            for (var s = 0; s < n.length; s++) {
                                var l = [].concat(n[s])
                                ;(r && i[l[0]]) ||
                                    (t &&
                                        (l[2]
                                            ? (l[2] = ''
                                                  .concat(t, ' and ')
                                                  .concat(l[2]))
                                            : (l[2] = t)),
                                    e.push(l))
                            }
                        }),
                        e
                    )
                }
            },
            379: (n) => {
                var e = []
                function t(n) {
                    for (var t = -1, r = 0; r < e.length; r++)
                        if (e[r].identifier === n) {
                            t = r
                            break
                        }
                    return t
                }
                function r(n, r) {
                    for (var o = {}, a = [], s = 0; s < n.length; s++) {
                        var l = n[s],
                            d = r.base ? l[0] + r.base : l[0],
                            c = o[d] || 0,
                            m = ''.concat(d, ' ').concat(c)
                        o[d] = c + 1
                        var h = t(m),
                            p = { css: l[1], media: l[2], sourceMap: l[3] }
                        ;-1 !== h
                            ? (e[h].references++, e[h].updater(p))
                            : e.push({
                                  identifier: m,
                                  updater: i(p, r),
                                  references: 1,
                              }),
                            a.push(m)
                    }
                    return a
                }
                function i(n, e) {
                    var t = e.domAPI(e)
                    return (
                        t.update(n),
                        function (e) {
                            if (e) {
                                if (
                                    e.css === n.css &&
                                    e.media === n.media &&
                                    e.sourceMap === n.sourceMap
                                )
                                    return
                                t.update((n = e))
                            } else t.remove()
                        }
                    )
                }
                n.exports = function (n, i) {
                    var o = r((n = n || []), (i = i || {}))
                    return function (n) {
                        n = n || []
                        for (var a = 0; a < o.length; a++) {
                            var s = t(o[a])
                            e[s].references--
                        }
                        for (var l = r(n, i), d = 0; d < o.length; d++) {
                            var c = t(o[d])
                            0 === e[c].references &&
                                (e[c].updater(), e.splice(c, 1))
                        }
                        o = l
                    }
                }
            },
            569: (n) => {
                var e = {}
                n.exports = function (n, t) {
                    var r = (function (n) {
                        if (void 0 === e[n]) {
                            var t = document.querySelector(n)
                            if (
                                window.HTMLIFrameElement &&
                                t instanceof window.HTMLIFrameElement
                            )
                                try {
                                    t = t.contentDocument.head
                                } catch (n) {
                                    t = null
                                }
                            e[n] = t
                        }
                        return e[n]
                    })(n)
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        )
                    r.appendChild(t)
                }
            },
            216: (n) => {
                n.exports = function (n) {
                    var e = document.createElement('style')
                    return n.setAttributes(e, n.attributes), n.insert(e), e
                }
            },
            565: (n, e, t) => {
                n.exports = function (n) {
                    var e = t.nc
                    e && n.setAttribute('nonce', e)
                }
            },
            795: (n) => {
                n.exports = function (n) {
                    var e = n.insertStyleElement(n)
                    return {
                        update: function (t) {
                            !(function (n, e, t) {
                                var r = t.css,
                                    i = t.media,
                                    o = t.sourceMap
                                i
                                    ? n.setAttribute('media', i)
                                    : n.removeAttribute('media'),
                                    o &&
                                        'undefined' != typeof btoa &&
                                        (r +=
                                            '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                                btoa(
                                                    unescape(
                                                        encodeURIComponent(
                                                            JSON.stringify(o)
                                                        )
                                                    )
                                                ),
                                                ' */'
                                            )),
                                    e.styleTagTransform(r, n)
                            })(e, n, t)
                        },
                        remove: function () {
                            !(function (n) {
                                if (null === n.parentNode) return !1
                                n.parentNode.removeChild(n)
                            })(e)
                        },
                    }
                }
            },
            589: (n) => {
                n.exports = function (n, e) {
                    if (e.styleSheet) e.styleSheet.cssText = n
                    else {
                        for (; e.firstChild; ) e.removeChild(e.firstChild)
                        e.appendChild(document.createTextNode(n))
                    }
                }
            },
        },
        u = {}
    function f(n) {
        var e = u[n]
        if (void 0 !== e) return e.exports
        var t = (u[n] = { id: n, exports: {} })
        return g[n](t, t.exports, f), t.exports
    }
    ;(f.n = (n) => {
        var e = n && n.__esModule ? () => n.default : () => n
        return f.d(e, { a: e }), e
    }),
        (f.d = (n, e) => {
            for (var t in e)
                f.o(e, t) &&
                    !f.o(n, t) &&
                    Object.defineProperty(n, t, { enumerable: !0, get: e[t] })
        }),
        (f.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
        (n = f(379)),
        (e = f.n(n)),
        (t = f(795)),
        (r = f.n(t)),
        (i = f(569)),
        (o = f.n(i)),
        (a = f(565)),
        (s = f.n(a)),
        (l = f(216)),
        (d = f.n(l)),
        (c = f(589)),
        (m = f.n(c)),
        (h = f(854)),
        ((p = {}).styleTagTransform = m()),
        (p.setAttributes = s()),
        (p.insert = o().bind(null, 'head')),
        (p.domAPI = r()),
        (p.insertStyleElement = d()),
        e()(h.Z, p),
        h.Z && h.Z.locals && h.Z.locals,
        'dark' === localStorage.theme ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? document.getElementById('body').classList.add('dark')
            : document.getElementById('body').classList.remove('dark'),
        (localStorage.theme = 'light'),
        (localStorage.theme = 'dark'),
        localStorage.removeItem('theme'),
        document
            .getElementById('darktoggle')
            .addEventListener('click', function () {
                document.getElementById('body').classList.contains('dark')
                    ? document.getElementById('body').classList.remove('dark')
                    : document.getElementById('body').classList.add('dark')
            })
})()
