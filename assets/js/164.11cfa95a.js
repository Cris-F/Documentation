(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{380:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"access-komodod-s-json-rpc-interface-using-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-komodod-s-json-rpc-interface-using-python","aria-hidden":"true"}},[t._v("#")]),t._v(" Access "),a("code",[t._v("komodod")]),t._v("'s JSON-RPC interface using Python")]),t._v(" "),a("p",[t._v("We use the package "),a("a",{attrs:{href:"https://github.com/barjomet/slick-bitcoinrpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("slick-bitcoinrpc"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Installing the module "),a("code",[t._v("slick-bitcoinrpc")]),t._v(" and its dependencies.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository -y ppa:deadsnakes/ppa\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python3.6 python3.6-dev python3-pip libgnutls28-dev libssl-dev\npython3.6 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" setuptools wheel slick-bitcoinrpc\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("ul",[a("li",[t._v("Once the "),a("code",[t._v("Proxy")]),t._v(" method is called, the object it returns can be used to access "),a("code",[t._v("komodod")]),t._v("'s methods any number of times.")]),t._v(" "),a("li",[t._v("In general, there is no need to convert arguments to strings before they are passed in. But for the "),a("router-link",{attrs:{to:"/basic-docs/komodo-api/cclib.html"}},[t._v("cclib")]),t._v(" methods, all the arguments need to be passed in as strings.")],1),t._v(" "),a("li",[t._v("Find the rpcuser, rpcpassword, rpcport from the coin's "),a("code",[t._v(".conf")]),t._v(" file")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python3.6")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" slickrpc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Proxy\n\nrpcuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user784657926501740916"')]),t._v("\nrpcpassword "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pass893458925237490234890t1941289369215692521238971040172t012039760782t5712d"')]),t._v("\nrpcport "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8881"')]),t._v("\n\nkomodo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://{}:{}@127.0.0.1:{}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rpcuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rpcpassword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rpcport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print the best block")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("komodo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getblock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("komodo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getbestblockhash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Using a CC Lib method")]),t._v("\npubkeys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0225f1cbbda1a0c406bb8f6dc7a589d88b2f9e28cd4fdb3f59139f8aff1f5d270a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'02d3431950c2f0f9654217b6ce3d44468d3a9ca7255741767fdeee7c5ec6b47567'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("komodo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cclib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"combine"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pubkeys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);