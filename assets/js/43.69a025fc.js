(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{410:function(e,a,t){"use strict";t.r(a);var r=t(16),i=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"有关-v2ray-一体化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有关-v2ray-一体化"}},[e._v("#")]),e._v(" 有关 V2ray 一体化")]),e._v(" "),t("ul",[t("li",[e._v("V2ray如何与 Trojan / SSR 等协议一体化")])]),e._v(" "),t("h2",{attrs:{id:"什么是-v2ray一体化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-v2ray一体化"}},[e._v("#")]),e._v(" 什么是 V2ray一体化")]),e._v(" "),t("p",[e._v("Qv2ray具有其特殊功能，可将插件内核（SSR / Trojan）与V2ray Core集成在一起。")]),e._v(" "),t("p",[e._v("许多内核没有内置的路由引擎（例如SSR），它们依赖于PAC功能。 Qv2ray现在打破了这种依赖关系，用户不需要PAC文件，而可以使用V2ray-Core来替换PAC。")]),e._v(" "),t("h2",{attrs:{id:"为什么不再依赖pac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么不再依赖pac"}},[e._v("#")]),e._v(" 为什么不再依赖PAC？")]),e._v(" "),t("p",[e._v("Qv2ray开发小组已将PAC功能标记为已弃用。 我们并不建议我们的用户去使用，理由如下：")]),e._v(" "),t("ul",[t("li",[e._v("PAC relies on an existing rule, which can be generated by "),t("code",[e._v("GFWList")]),e._v(" or some other domain lists.")]),e._v(" "),t("li",[e._v("Editing an PAC file locally is difficult, and error-prone, a single typo/syntax error will make the whole PAC file in trouble.")]),e._v(" "),t("li",[e._v("V2ray has its own routing table implementations and "),t("code",[e._v("geoip")]),e._v(", "),t("code",[e._v("geosite")]),e._v(" data is generated from the official providers, they update the list frequently")]),e._v(" "),t("li",[e._v("Using of V2ray Integration is easier than setting up PAC.")])]),e._v(" "),t("h2",{attrs:{id:"how-v2ray-integration-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-v2ray-integration-works"}},[e._v("#")]),e._v(" How V2ray Integration works")]),e._v(" "),t("p",[e._v("There are several steps:")]),e._v(" "),t("ol",[t("li",[e._v("Qv2ray detected an/some outbound config(s) is/are for one/some plugin kernels.")]),e._v(" "),t("li",[e._v("Qv2ray will allocate port, for HTTP inbound and SOCKS inbound (any if enabled) for each kernel.")]),e._v(" "),t("li",[e._v("Qv2ray will replace the kernel plugin outbound to HTTP/SOCKS outbound(s), each corresponded to a specific plugin with appropriate inbound protocol.")]),e._v(" "),t("li",[e._v("New routing table entries will be added to V2ray config file, to route HTTP inbound to the plugin HTTP inbound, and the same with SOCKS")]),e._v(" "),t("li",[e._v("Qv2ray will start all kernel plugins used in this connection config. Then start V2ray.")]),e._v(" "),t("li",[e._v("Qv2ray will collect stats data from V2ray, instead of getting them from individual plugins.")])]),e._v(" "),t("h2",{attrs:{id:"benefit-from-v2ray-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#benefit-from-v2ray-integration"}},[e._v("#")]),e._v(" Benefit from V2ray Integration")]),e._v(" "),t("ul",[t("li",[e._v("Bypass CN domains and IP addresses.")]),e._v(" "),t("li",[e._v("Bypass Local Area Network Addresses.")]),e._v(" "),t("li",[e._v("Qv2ray’s advanced routing matrix settings.")]),e._v(" "),t("li",[e._v("Custom DNS settings.")])])])}),[],!1,null,null,null);a.default=i.exports}}]);