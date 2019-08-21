(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{377:function(e,a,t){"use strict";t.r(a);var o=t(0),n=Object(o.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"a-note-to-exchanges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-note-to-exchanges","aria-hidden":"true"}},[e._v("#")]),e._v(" A Note to Exchanges")]),e._v(" "),t("p",[e._v("There is a parameter called "),t("code",[e._v("-exchange")]),e._v(" that you can run the Komodo daemon ("),t("code",[e._v("komodod")]),e._v(") with, that ignores the rewards when a transaction is sent. One benefit is it allows exchanges to manage their account balances against their accounting software without any modification during account reconciliation.")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[e._v("If you normally start the daemon using the command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./src/komodod -addnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("78.47.196.146 -daemon\n")])])]),t("p",[e._v("adding the - parameter "),t("code",[e._v("-exchange")]),e._v(" will make it:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./src/komodod -addnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("78.47.196.146 -exchange -daemon\n")])])]),t("p",[e._v("This post on Bitcointalk gives the context related to addition of the parameter to Komodo: "),t("a",{attrs:{href:"https://bitcointalk.org/index.php?topic=1605144.msg17732151#msg17732151",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://bitcointalk.org/index.php?topic=1605144.msg17732151#msg17732151"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("If you were already running the normal mode, to enable the parameter,")]),e._v(" "),t("ol",[t("li",[e._v("Backup all privkeys (launch "),t("code",[e._v("komodod")]),e._v(" with "),t("code",[e._v("-exportdir=<path>")]),e._v(" and run "),t("code",[e._v("./komodo-cli dumpwallet <filename>")]),e._v(")")]),e._v(" "),t("li",[e._v("Start a totally new sync including a new "),t("code",[e._v("wallet.dat")]),e._v(", launch with the same "),t("code",[e._v("exportdir")]),e._v(" and the parameter")]),e._v(" "),t("li",[e._v("Stop it before it gets too far and import all the privkeys backed up during step a) using "),t("code",[e._v("./komodo-cli importwallet <filename>")])]),e._v(" "),t("li",[e._v("Resume sync till it gets to chaintip")])]),e._v(" "),t("p",[e._v("For example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodod -exportdir"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/tmp "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n./komodo-cli dumpwallet example\n./komodo-cli stop\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" ~/.komodo ~/.komodo.old "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" ~/.komodo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ~/.komodo.old/komodo.conf ~/.komodo.old/peers.dat ~/.komodo\n./komodod -exchange -exportdir"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/tmp "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n./komodo-cli importwallet /tmp/example\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);