(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{365:function(e,a,r){"use strict";r.r(a);var o=r(0),t=Object(o.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"add-a-bitcoin-compatible-coin-spv-to-agama-mobile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-a-bitcoin-compatible-coin-spv-to-agama-mobile","aria-hidden":"true"}},[e._v("#")]),e._v(" Add a Bitcoin Compatible coin (SPV) to Agama Mobile")]),e._v(" "),r("p",[e._v("The Agama mobile code comprises of two parts. Agama wallet library and MeteorJS app. This assetchain adding guide will cover both.")]),e._v(" "),r("h2",{attrs:{id:"agama-wallet-library"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#agama-wallet-library","aria-hidden":"true"}},[e._v("#")]),e._v(" Agama wallet library")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Add network params "),r("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/bitcoinjs-networks.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/bitcoinjs-networks.js@dev"),r("OutboundLink")],1),e._v(". Make use of isPoS or isZcash flags if applicable in your case.")])]),e._v(" "),r("li",[r("p",[e._v("Add an electrum server "),r("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/electrum-servers.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/electrum-servers.js@dev#L1"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Add a safe fixed fee (per transaction) "),r("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/fees.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/fees.js@dev#L1"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Add an explorer "),r("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/coin-helpers.js#L62",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/coin-helpers.js@dev#L62"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Submit a PR to the "),r("code",[e._v("dev")]),e._v(" branch")])])]),e._v(" "),r("h2",{attrs:{id:"meteorjs-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meteorjs-app","aria-hidden":"true"}},[e._v("#")]),e._v(" MeteorJS app")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Drop a 60 x 60 px logo into "),r("a",{attrs:{href:"https://github.com/KomodoPlatform/agama-mobile/tree/dev/public/images/cryptologo/btc",target:"_blank",rel:"noopener noreferrer"}},[e._v("/public/images/cryptologo/btc@dev"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Add explorer url to whitelist "),r("a",{attrs:{href:"https://github.com/KomodoPlatform/agama-mobile/blob/dev/mobile-config.js#L118",target:"_blank",rel:"noopener noreferrer"}},[e._v("/mobile-config.js@dev#L118"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Add coin ticker to coins file "),r("a",{attrs:{href:"https://github.com/KomodoPlatform/agama-mobile/blob/dev/imports/ui/actions/coins.js#L39",target:"_blank",rel:"noopener noreferrer"}},[e._v("/imports/ui/actions/coins.js@dev#L39"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Add coin name to translation file "),r("a",{attrs:{href:"https://github.com/KomodoPlatform/agama-mobile/blob/dev/imports/ui/translate/en.js#L344",target:"_blank",rel:"noopener noreferrer"}},[e._v("/imports/ui/translate/en.js@dev#L344"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Submit a PR, use dev branch!")])])]),e._v(" "),r("h2",{attrs:{id:"how-to-get-network-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-network-parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" How to get network parameters")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("pubKeyHash: "),r("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L169",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L169"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("scriptHash: "),r("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L170",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L170"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("wif: "),r("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L171",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L171"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("bip32 public: "),r("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L172",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L172"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("bip32 private: "),r("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L173",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L173"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("If you can't find "),r("code",[e._v("chainparams.cpp")]),e._v(" in your code base, all of the information and parameters required are normally contained within but not limited to these files (depends on your coin):")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("init.cpp")]),e._v(": "),r("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/init.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/litecoin-project/litecoin/blob/master/src/init.cpp"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("base58.h")]),e._v(": "),r("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/base58.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/litecoin-project/litecoin/blob/master/src/base58.h"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("chainparamsbase.h")]),e._v(": "),r("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/chainparamsbase.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/litecoin-project/litecoin/blob/master/src/chainparamsbase.h"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Please make sure the BTC compatible coin is working in Agama before making a PR. Pull requests containing partial information or not working assets/servers will remain unmerged until all requirements are fulfilled.")])])},[],!1,null,null,null);a.default=t.exports}}]);