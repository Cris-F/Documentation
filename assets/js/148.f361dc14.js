(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{363:function(e,a,t){"use strict";t.r(a);var r=t(0),o=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"add-komodo-assetchains-to-agama-desktop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-komodo-assetchains-to-agama-desktop","aria-hidden":"true"}},[e._v("#")]),e._v(" Add Komodo Assetchains to Agama Desktop")]),e._v(" "),t("p",[e._v("The Agama desktop code comprises of two parts. Backend and UI. This assetchain addition guide will cover both. All the files that need to be changed are linked.")]),e._v(" "),t("h2",{attrs:{id:"backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend","aria-hidden":"true"}},[e._v("#")]),e._v(" Backend")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Add a default asset chain port "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/Agama/blob/dev/routes/ports.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/Agama:routes/ports.js@dev"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Add an electrum server for your asset (optional) "),t("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/electrum-servers.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/electrum-servers.js@dev#L1"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Add a fixed fee for your asset (required if you submit electrum servers list) "),t("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/fees.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/fees.js@dev#L1"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Add an asset chain to the list of kmd assets "),t("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/coin-helpers.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/coin-helpers.js@dev#L1"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Add asset chain params to this file "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/Agama/blob/dev/routes/chainParams.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/Agama:routes/chainParams.js@dev"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Submit a PR")])])]),e._v(" "),t("h2",{attrs:{id:"asset-chains-with-block-rewards-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asset-chains-with-block-rewards-optional","aria-hidden":"true"}},[e._v("#")]),e._v(" Asset chains with block rewards (optional)")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("genproclimit: true")]),e._v(" property to allow mining with multiple CPU threads. Default value is 0 (e.g. "),t("code",[e._v("-gen -genproclimit=0")]),e._v(") in case "),t("code",[e._v("genproclimit")]),e._v(" option is not explicitly specified. "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/Agama/blob/dev/routes/chainParams.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/Agama:routes/chainParams.js@dev"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui","aria-hidden":"true"}},[e._v("#")]),e._v(" UI")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Drop a 100 x 100 px (better 200 x 200 px) logo into "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/EasyDEX-GUI/tree/dev/react/src/assets/images/cryptologo",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/EasyDEX-GUI:react/src/assets/images/cryptologo@dev"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Add an asset chain explorer "),t("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/coin-helpers.js#L51",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/coin-helpers.js@dev#L51"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Add asset chain name to coins translation file "),t("a",{attrs:{href:"https://github.com/KomodoPlatform/EasyDEX-GUI/blob/dev/react/src/translate/coins.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/EasyDEX-GUI:react/src/translate/coins.js@dev"),t("OutboundLink")],1),e._v(", look for "),t("code",[e._v("ASSETCHAINS")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Submit a PR to "),t("code",[e._v("dev")]),e._v(" branch on each repo.")])])]),e._v(" "),t("p",[e._v("Please make sure an assetchain is working in Agama before making a PR. Pull requests containing partial information or not working assets/servers will remain unmerged until all requirements are fulfilled.")])])},[],!1,null,null,null);a.default=o.exports}}]);