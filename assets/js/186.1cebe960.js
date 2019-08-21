(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{403:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"extracting-wif-privkey-using-mmv1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extracting-wif-privkey-using-mmv1","aria-hidden":"true"}},[s._v("#")]),s._v(" Extracting WIF/privkey using mmV1")]),s._v(" "),e("p",[s._v("To be able to get the privkey of the Smart Address created by the Komodo Platform Passphrase you will need to add the "),e("code",[s._v("wif:1")]),s._v(" handle to the "),e("strong",[s._v("MarketMaker")]),s._v(" command. The "),e("strong",[s._v("MarketMaker")]),s._v(" execution command is in "),e("code",[s._v("./client")]),s._v(".")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" ~/KomodoPlatform/iguana/dexscripts\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" ./client\n")])])]),e("p",[s._v("You will see the "),e("code",[s._v("./client")]),s._v(" script like this:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("./marketmaker "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"gui\\":\\"nogui\\",\\"client\\":1, \\"userhome\\":\\"/${HOME#"')]),s._v("/"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"}\\", \\"passphrase\\":\\"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$passphrase")]),s._v('\\", \\"coins\\":'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$coins")]),s._v('}"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),e("p",[e("strong",[s._v("Now you need to add the")]),s._v(" "),e("code",[s._v("wif:1")]),s._v(" "),e("strong",[s._v("handle like this:")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("./marketmaker "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"gui\\":\\"nogui\\",\\"client\\":1,\\"wif\\":1, \\"userhome\\":\\"/${HOME#"')]),s._v("/"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"}\\", \\"passphrase\\":\\"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$passphrase")]),s._v('\\", \\"coins\\":'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$coins")]),s._v('}"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),e("p",[s._v("Once this edit is done, now start "),e("strong",[s._v("MarketMaker")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" ~/KomodoPlatform/iguana/dexscripts\n./client\n")])])]),e("p",[e("strong",[s._v("Execute")]),s._v(" "),e("code",[s._v("./setpassphrase")]),s._v(" "),e("strong",[s._v("API command")])]),s._v(" "),e("p",[s._v("With that command you will see all active coins listed with their respective WIF privkeys.")])])},[],!1,null,null,null);a.default=r.exports}}]);