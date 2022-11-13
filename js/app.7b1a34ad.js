(function () {
  "use strict";
  var n = {
      7335: function (n, t, o) {
        var i = o(9242),
          e = o(3396);
        const r = { id: "app" };
        function a(n, t, o, i, a, s) {
          const l = (0, e.up)("Header-comp"),
            c = (0, e.up)("Landing-comp"),
            u = (0, e.up)("link-short"),
            d = (0, e.up)("Boost-comp"),
            p = (0, e.up)("Footer-comp");
          return (0, e.wg)(), (0, e.iD)("div", r, [(0, e.Wm)(l), (0, e.Wm)(c), (0, e.Wm)(u), (0, e.Wm)(d), (0, e.Wm)(p)]);
        }
        var s = o(7139),
          l = o.p + "img/logo.ec39d9d2.svg";
        const c = { class: "container" },
          u = (0, e._)("div", { class: "logo" }, [(0, e._)("img", { src: l, alt: "", class: "logo" })], -1),
          d = (0, e._)("span", null, null, -1),
          p = (0, e._)("span", null, null, -1),
          h = (0, e._)("span", null, null, -1),
          v = [d, p, h],
          g = (0, e._)("ul", null, [(0, e._)("li", null, [(0, e._)("a", { href: "#" }, "Features")]), (0, e._)("li", null, [(0, e._)("a", { href: "#" }, "Pricing")]), (0, e._)("li", null, [(0, e._)("a", { href: "#" }, "Resources")])], -1),
          f = (0, e._)("div", { class: "loging" }, [(0, e._)("button", { id: "login" }, "Login"), (0, e._)("button", { id: "signUp" }, "Sign Up")], -1),
          m = [g, f];
        function w(n, t, o, r, a, l) {
          return (0, e.wg)(), (0, e.iD)("header", null, [(0, e._)("div", c, [u, (0, e._)("div", { onClick: t[0] || (t[0] = (...n) => l.toggle && l.toggle(...n)), class: "burger" }, v), (0, e.Wm)(i.uT, { name: "menu-fade" }, { default: (0, e.w5)(() => [(0, e._)("div", { class: (0, s.C_)(["menu", a.showMenu && "Show-menu"]) }, m, 2)]), _: 1 })])]);
        }
        var b = {
            name: "HeaderComp",
            data() {
              return { showMenu: !1 };
            },
            methods: {
              toggle() {
                this.showMenu = !this.showMenu;
              },
            },
          },
          _ = o(89);
        const k = (0, _.Z)(b, [["render", w]]);
        var y = k,
          C = o.p + "img/illustration-working.ea534631.svg";
        const S = { role: "content", class: "landing" },
          O = (0, e.uE)('<div class="container"><div class="right"><img src="' + C + '" alt="illustration"></div><div class="left"><h1 class="lan-head">More than just shorterlinks</h1><p class="lan-pra"> Build your brand&#39;s recognition and get detailed insights on how your links are performing </p><button id="landStart">Get Started</button></div></div>', 1),
          D = [O];
        function B(n, t, o, i, r, a) {
          return (0, e.wg)(), (0, e.iD)("main", S, D);
        }
        var L = { name: "LandingComp" };
        const W = (0, _.Z)(L, [["render", B]]);
        var Z = W;
        const x = { class: "link-shorten" },
          j = { class: "container" };
        function F(n, t, o, i, r, a) {
          const s = (0, e.up)("shorten-comp"),
            l = (0, e.up)("short-output"),
            c = (0, e.up)("advanced-sta");
          return (0, e.wg)(), (0, e.iD)("div", x, [(0, e._)("div", j, [(0, e.Wm)(s), (0, e.Wm)(l), (0, e.Wm)(c)])]);
        }
        const M = (n) => ((0, e.dD)("data-v-8b9ae56c"), (n = n()), (0, e.Cn)(), n),
          A = { class: "input" },
          E = M(() => (0, e._)("input", { type: "text", id: "shortLink", placeholder: "Shorten a link here..." }, null, -1)),
          T = M(() => (0, e._)("button", { id: "shortBtn" }, "Shorten it!", -1)),
          G = [E, T];
        function q(n, t, o, i, r, a) {
          return (0, e.wg)(), (0, e.iD)("div", A, G);
        }
        var z = { name: "ShortenComp" };
        const H = (0, _.Z)(z, [
          ["render", q],
          ["__scopeId", "data-v-8b9ae56c"],
        ]);
        var P = H;
        const R = { class: "output" },
          I = (0, e.uE)('<div class="result"><p class="link">https://www.google.com/search?q</p><p class="shorten">https://www.google.com</p><button id="copy">Copy</button></div><div class="result"><p class="link">https://www.google.com/search?q</p><p class="shorten">https://www.google.com</p><button id="copy" class="copied">Copied!</button></div><div class="result"><p class="link">https://www.google.com/search?q</p><p class="shorten">https://www.google.com</p><button id="copy">Copy</button></div>', 3),
          U = [I];
        function K(n, t, o, i, r, a) {
          return (0, e.wg)(), (0, e.iD)("div", R, U);
        }
        var J = { name: "ShortOutput" };
        const N = (0, _.Z)(J, [["render", K]]);
        var Q = N,
          V = o.p + "img/icon-brand-recognition.22883b05.svg",
          X = o.p + "img/icon-detailed-records.22cea633.svg",
          Y = o.p + "img/icon-fully-customizable.8ef2cdc7.svg";
        const $ = { class: "advanced" },
          nn = (0, e.uE)('<div class="head"><h2>Advanced Statistics</h2><p> Track how your links are performing across the web with our advanced statistics dashboard </p></div><div class="features"><div class="feat-box"><div class="img"><img src="' + V + '" alt="brand"></div><h3>Brand Recognition</h3><p> Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. </p></div><div class="feat-box"><div class="img"><img src="' + X + '" alt="brand"></div><h3>Detailed Records</h3><p> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. </p></div><div class="feat-box"><div class="img"><img src="' + Y + '" alt="brand"></div><h3>Fully Customizable</h3><p> Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. </p></div></div>', 2),
          tn = [nn];
        function on(n, t, o, i, r, a) {
          return (0, e.wg)(), (0, e.iD)("div", $, tn);
        }
        var en = { name: "AdvancedSta" };
        const rn = (0, _.Z)(en, [["render", on]]);
        var an = rn,
          sn = { name: "LinkShort", components: { ShortenComp: P, ShortOutput: Q, AdvancedSta: an } };
        const ln = (0, _.Z)(sn, [["render", F]]);
        var cn = ln;
        const un = { class: "boost" },
          dn = (0, e._)("h3", null, "Boost your links today", -1),
          pn = (0, e._)("button", { id: "boostBtn" }, "Get Started", -1),
          hn = [dn, pn];
        function vn(n, t, o, i, r, a) {
          return (0, e.wg)(), (0, e.iD)("section", un, hn);
        }
        var gn = { name: "boostComp" };
        const fn = (0, _.Z)(gn, [["render", vn]]);
        var mn = fn,
          wn = o.p + "img/icon-facebook.deee9da4.svg",
          bn = o.p + "img/icon-twitter.46516874.svg",
          _n = o.p + "img/icon-pinterest.6d4a036d.svg",
          kn = o.p + "img/icon-instagram.d9c0fd77.svg";
        const yn = (0, e.uE)('<div class="container"><div class="logo"><h3>Shortly</h3></div><div class="info"><div class="con features"><h4>Features</h4><ul><li><a href="#">Link Shortening</a></li><li><a href="#">Branded Links</a></li><li><a href="#">Analytics</a></li></ul></div><div class="con resources"><h4>resources</h4><ul><li><a href="#">Blog</a></li><li><a href="#">Developers</a></li><li><a href="#">Support</a></li></ul></div><div class="con company"><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Our Team</a></li><li><a href="#">Careers</a></li><li><a href="#">Contact</a></li></ul></div></div><ul class="socials"><li><a href="@"><img src="' + wn + '" alt="facebook"></a></li><li><a href="@"><img src="' + bn + '" alt="twitter"></a></li><li><a href="@"><img src="' + _n + '" alt="pinterest"></a></li><li><a href="@"><img src="' + kn + '" alt="instagram"></a></li></ul></div>', 1),
          Cn = [yn];
        function Sn(n, t, o, i, r, a) {
          return (0, e.wg)(), (0, e.iD)("footer", null, Cn);
        }
        var On = { name: "FooterComp" };
        const Dn = (0, _.Z)(On, [["render", Sn]]);
        var Bn = Dn,
          Ln = { components: { HeaderComp: y, LandingComp: Z, LinkShort: cn, BoostComp: mn, FooterComp: Bn } };
        const Wn = (0, _.Z)(Ln, [["render", a]]);
        var Zn = Wn;
        (0, i.ri)(Zn).mount("#app");
      },
    },
    t = {};
  function o(i) {
    var e = t[i];
    if (void 0 !== e) return e.exports;
    var r = (t[i] = { exports: {} });
    return n[i](r, r.exports, o), r.exports;
  }
  (o.m = n),
    (function () {
      var n = [];
      o.O = function (t, i, e, r) {
        if (!i) {
          var a = 1 / 0;
          for (u = 0; u < n.length; u++) {
            (i = n[u][0]), (e = n[u][1]), (r = n[u][2]);
            for (var s = !0, l = 0; l < i.length; l++)
              (!1 & r || a >= r) &&
              Object.keys(o.O).every(function (n) {
                return o.O[n](i[l]);
              })
                ? i.splice(l--, 1)
                : ((s = !1), r < a && (a = r));
            if (s) {
              n.splice(u--, 1);
              var c = e();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        r = r || 0;
        for (var u = n.length; u > 0 && n[u - 1][2] > r; u--) n[u] = n[u - 1];
        n[u] = [i, e, r];
      };
    })(),
    (function () {
      o.n = function (n) {
        var t =
          n && n.__esModule
            ? function () {
                return n["default"];
              }
            : function () {
                return n;
              };
        return o.d(t, { a: t }), t;
      };
    })(),
    (function () {
      o.d = function (n, t) {
        for (var i in t) o.o(t, i) && !o.o(n, i) && Object.defineProperty(n, i, { enumerable: !0, get: t[i] });
      };
    })(),
    (function () {
      o.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (n) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      };
    })(),
    (function () {
      o.p = "/";
    })(),
    (function () {
      var n = { 143: 0 };
      o.O.j = function (t) {
        return 0 === n[t];
      };
      var t = function (t, i) {
          var e,
            r,
            a = i[0],
            s = i[1],
            l = i[2],
            c = 0;
          if (
            a.some(function (t) {
              return 0 !== n[t];
            })
          ) {
            for (e in s) o.o(s, e) && (o.m[e] = s[e]);
            if (l) var u = l(o);
          }
          for (t && t(i); c < a.length; c++) (r = a[c]), o.o(n, r) && n[r] && n[r][0](), (n[r] = 0);
          return o.O(u);
        },
        i = (self["webpackChunkfront_end_mentor_07"] = self["webpackChunkfront_end_mentor_07"] || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })();
  var i = o.O(void 0, [998], function () {
    return o(7335);
  });
  i = o.O(i);
})();
//# sourceMappingURL=app.7b1a34ad.js.map
