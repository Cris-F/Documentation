(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{420:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"trade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trade","aria-hidden":"true"}},[t._v("#")]),t._v(" Trade")]),t._v(" "),s("p",[t._v("Don't forget: Coins for trade pairs need to be activated in the MarketmakerV1, either "),s("router-link",{attrs:{to:"/mmV1/usage/enable-native-wallet-coins.html"}},[t._v("native")]),t._v(" or "),s("router-link",{attrs:{to:"/mmV1/usage/enable-electrum-wallet-coins.html"}},[t._v("electrum")]),t._v(" wallets can be used.")],1),t._v(" "),s("h2",{attrs:{id:"looking-at-the-orderbook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#looking-at-the-orderbook","aria-hidden":"true"}},[t._v("#")]),t._v(" LOOKING AT THE ORDERBOOK")]),t._v(" "),s("p",[t._v("To see the order book you need to execute: "),s("code",[t._v("./orderbook")])]),t._v(" "),s("p",[t._v("If the "),s("code",[t._v("./client")]),t._v(" is synced the orderbook will be listed. Remember that you have to add that coin to the orderbook file:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" ./orderbook\n")])])]),s("p",[t._v("add this command with the name of the coin you want to see:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"orderbook\\",\\"base\\":\\"NAME_OF_COIN\\",\\"rel\\":\\"KMD\\"}"')]),t._v("\n")])])]),s("h2",{attrs:{id:"buying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buying","aria-hidden":"true"}},[t._v("#")]),t._v(" BUYING")]),t._v(" "),s("p",[s("code",[t._v("./buy")]),t._v(" executes trades based on the values specified in the command. The command looks like this:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"autotrade\\",\\"base\\":\\"NAME_OF_BASE_COIN"')]),t._v(",\\"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rel\\":\\"NAME_OF_REL_COIN\\",\\"relvolume\\":VOLUME_OF_REL_COIN,\\"price\\"PRICE_OF_BASE_COIN}"')]),t._v("\n")])])]),s("p",[t._v("You will need to edit this script based on the info the orderbook prints. The script will look for the orders most similar to the values of "),s("code",[t._v("./buy")]),t._v(" and do an atomic swap between the chains.")]),t._v(" "),s("p",[t._v("After editing the "),s("code",[t._v("./buy")]),t._v(" file with your order parameters, execute it and you should have a trade going.")]),t._v(" "),s("p",[s("strong",[t._v("IMPORTANT: For better results and security (dust attack vector)")]),t._v(" "),s("code",[t._v("./buy")]),t._v(" "),s("strong",[t._v("only execute trades that are at least 10% of the offered bob(ask) order. For example, if a bob order (an ask in the orderbook) of 10 REVS is offered at a price of 1.25 komodo per REV the autotrade command should be with a relvolume of at least: 1 REV")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"autotrade\\",\\"base\\":\\"REVS\\",\\"rel\\":\\"KMD\\",\\"relvolume\\":1,\\"price\\":10}"')]),t._v("\n")])])]),s("p",[s("strong",[t._v("since 1 is 10% of the total order of 10 REVS.")])]),t._v(" "),s("p",[s("strong",[t._v("Alice, the one buying the REVS with KMD, will pay 1/777th of the KMD amount as fee, as a sort of safeguard against spam attacks.")])]),t._v(" "),s("p",[t._v("If you found an order in the orderbook with duration in the command, you should include that in the "),s("code",[t._v("./buy")]),t._v(" method as well:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userpass"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$userpass"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autotrade"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duration"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REVS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rel"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"KMD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relvolume"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"selling-bob-utxos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selling-bob-utxos","aria-hidden":"true"}},[t._v("#")]),t._v(" SELLING (bob utxos)")]),t._v(" "),s("p",[s("code",[t._v("./setprice")])]),t._v(" "),s("p",[t._v("To create a bob utxo (or an ask order) you need to first set the price. To set price you need to edit the "),s("code",[t._v("./setprice")]),t._v(" script in the dexscripts folder:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/KomodoPlatform/iguana/dexscripts/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" setprice\n")])])]),s("p",[t._v("This script contains a curl command that looks like this:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"setprice\\",\\"base\\":\\"NAME_OF_COIN_TO_TRADE\\",\\"rel\\":\\"KMD\\",\\"price\\":PRICE_OF_ORDER}"')]),t._v("\n")])])]),s("p",[t._v("In this command you should edit the coin ("),s("code",[t._v("NAME_OF_COIN_TO_TRADE")]),t._v(") and then set the price ("),s("code",[t._v("PRICE_OF_ORDER")]),t._v(") per coin based in Komodo.")]),t._v(" "),s("p",[t._v("For example: if you want to sell REVS at 1.25 komodo per REV, then "),s("code",[t._v("NAME_OF_COIN_TO_TRADE")]),t._v(" should be REVS and "),s("code",[t._v("PRICE_OF_ORDER")]),t._v(" should be 1.25.")]),t._v(" "),s("p",[s("strong",[t._v("After you edit the file, execute it (")]),t._v(" "),s("code",[t._v("./setprice")]),t._v(" "),s("strong",[t._v("), then it will appear in orderbooks with that coin in either the base or rel.")])])])},[],!1,null,null,null);e.default=r.exports}}]);