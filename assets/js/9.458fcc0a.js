(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{325:function(v,a,r){"use strict";a.a=[["QvPlugin-SS","让你能在 Qv2ray 中启用 Shadowsocks SIP003 完整支持","Allows you to enable complete support of Shadowsocks SIP003 in Qv2ray"],["QvPlugin-SSR","让你能在 Qv2ray 中使用 ShadowsocksR","Allows you to use ShadowSocksR in Qv2ray"],["QvPlugin-Trojan","让你能在 Qv2ray 中使用 Trojan","Allows you to use NaiveProxy in Qv2ray"],["QvPlugin-NaiveProxy","让你能在 Qv2ray 中使用 NaiveProxy","Allows you to use Trojan in Qv2ray"],["QvPlugin-Command","当特殊事件发生时，运行任意指定的命令","Run any command when a specific event has been triggered"],["QvPlugin-Trojan-Go","让你能在 Qv2ray 中使用 Trojan-Go","Allows you to use Trojan-Go in Qv2ray"]]},375:function(v,a,r){"use strict";r.r(a);var t=r(325),e={data:function(){return{plugins:t.a}}},_=r(25),o=Object(_.a)(e,(function(){var v=this,a=v.$createElement,r=v._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"使用插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用插件"}},[v._v("#")]),v._v(" 使用插件")]),v._v(" "),r("ul",[r("li",[v._v("本页主要说明 Qv2ray 插件系统的使用方法")]),v._v(" "),r("li",[v._v("要使用插件，Qv2ray 的版本至少应为 "),r("strong",[r("code",[v._v("Qv2ray v2.5.0-pre1 BuildVersion: 5264")])])])]),v._v(" "),r("h2",{attrs:{id:"何为插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#何为插件"}},[v._v("#")]),v._v(" 何为插件")]),v._v(" "),r("p",[v._v("一个 Qv2ray 插件，技术上地说，是一个实现了 "),r("code",[v._v("QvPlugin")]),v._v(" 接口、从而能扩展 Qv2ray 功能的共享库文件。")]),v._v(" "),r("p",[v._v("实际上，Qv2ray 插件是 Qv2ray 的扩展，能让你使用更多特性。")]),v._v(" "),r("p",[v._v("当前，Qv2ray 项目组共发布如下 "+v._s(v.plugins.length)+" 个我们维护的插件：")]),v._v(" "),r("ul",v._l(v.plugins,(function(a){var t=a[0],e=a[1];return r("li",{key:t},[r("a",{attrs:{href:"https://github.com/Qv2ray/"+t,target:"_blank",rel:"noopener noreferrer"}},[r("strong",[v._v(v._s(t))]),r("OutboundLink")],1),v._v(" - "+v._s(e)+"\n  ")])})),0),v._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[v._v("内置Shadowsocks支持 vs QvPlugin-SS")]),v._v(" "),r("p",[v._v("一个常见的误解是 Qv2ray 不装 QvPlugin-SS 就用不了 Shadowsocks 节点，这是不对的。Qv2ray 已有来自 V2Ray 内核的 "),r("a",{attrs:{href:"https://www.v2fly.org/config/protocols/shadowsocks.html#outboundconfigurationobject",target:"_blank",rel:"noopener noreferrer"}},[v._v("内置 Shadowsocks 支持"),r("OutboundLink")],1),v._v("，已足以满足一般使用需要。因此，你不必非要安装 QvPlugin-SS。")]),v._v(" "),r("p",[v._v("然而，尽管强烈不推荐，若你仍然头铁坚持要用某些过时的/弃用的加密方式（如性能和安全性都被 "),r("code",[v._v("aes-128-gcm")]),v._v(" 和 "),r("code",[v._v("chacha20-ietf-poly1305")]),v._v(" 等吊打的臭名昭著的 "),r("code",[v._v("rc4-md5")]),v._v(" 加密），你的确需要 QvPlugin-SS 才能使用这些节点。此外，带有 SIP003 插件的服务器（例如 "),r("a",{attrs:{href:"https://github.com/shadowsocks/simple-obfs",target:"_blank",rel:"noopener noreferrer"}},[r("code",[v._v("simple-obfs")]),r("OutboundLink")],1),v._v(", "),r("a",{attrs:{href:"https://github.com/xtaci/kcptun",target:"_blank",rel:"noopener noreferrer"}},[r("code",[v._v("kcptun")]),r("OutboundLink")],1),v._v(" 和 "),r("a",{attrs:{href:"https://github.com/shadowsocks/v2ray-plugin",target:"_blank",rel:"noopener noreferrer"}},[r("code",[v._v("v2ray-plugin")]),r("OutboundLink")],1),v._v("）也需要 QvPlugin-SS 才能运作。")])]),v._v(" "),r("h2",{attrs:{id:"插件的获取与使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#插件的获取与使用"}},[v._v("#")]),v._v(" 插件的获取与使用")]),v._v(" "),r("p",[v._v("你可以下载并启用任意数量的插件。")]),v._v(" "),r("p",[v._v("要安装一个插件，你需要进行下面的操作：")]),v._v(" "),r("h3",{attrs:{id:"_1-获取插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取插件"}},[v._v("#")]),v._v(" 1. 获取插件")]),v._v(" "),r("ul",[r("li",[v._v("部分插件可能会通过包管理系统（如 "),r("RouterLink",{attrs:{to:"/getting-started/step1.html#scoop-针对-windows-用户"}},[v._v("Scoop")]),v._v("）分发，若合意可直接使用。\n"),r("ul",[r("li",[r("em",[v._v("若你已通过此方法安装了插件，接下来请转至 "),r("strong",[v._v("第三步")]),v._v("。")])])])],1),v._v(" "),r("li",[v._v("根据实际的操作系统，从插件的 Release 页面下载。")])]),v._v(" "),r("h3",{attrs:{id:"_2-放置插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-放置插件"}},[v._v("#")]),v._v(" 2. 放置插件")]),v._v(" "),r("ul",[r("li",[v._v("点击 "),r("strong",[r("a",{attrs:{href:"qv2ray://open/plugin/metadata"}},[v._v("插件管理器")])]),v._v(" 窗口中的 "),r("strong",[r("a",{attrs:{href:"qv2ray://open/plugin/plugindir"}},[v._v("打开本地插件文件夹")])]),v._v(" 按钮，此时应自动打开一个名为 "),r("code",[v._v("plugins")]),v._v(" 的文件夹。")]),v._v(" "),r("li",[v._v("将您所下载的插件文件（"),r("code",[v._v(".dll")]),v._v(" / "),r("code",[v._v(".dylib")]),v._v(" / "),r("code",[v._v(".so")]),v._v("）放入此目录。")]),v._v(" "),r("li",[v._v("关闭 Qv2ray 并重新打开。这将让 Qv2ray 重新扫描插件目录。")])]),v._v(" "),r("h3",{attrs:{id:"_3-启用插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-启用插件"}},[v._v("#")]),v._v(" 3. 启用插件")]),v._v(" "),r("ul",[r("li",[v._v("打开"),r("a",{attrs:{href:"qv2ray://open/plugin/metadata"}},[v._v("插件管理器")]),v._v("，你将看到所找到的插件。")]),v._v(" "),r("li",[v._v("在插件列表中勾选所希望使用的插件即可。")]),v._v(" "),r("li",[v._v("某些插件，尤其是核心插件（如 Trojan、ShadowsocksR 等），"),r("strong",[v._v("需要重新启动 Qv2ray 后才会生效")]),v._v("。")])]),v._v(" "),r("h3",{attrs:{id:"_4-享受"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-享受"}},[v._v("#")]),v._v(" 4. 享受！")]),v._v(" "),r("ul",[r("li",[v._v("插件已经可以用了！")])]),v._v(" "),r("h2",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[v._v("#")]),v._v(" 常见问题")]),v._v(" "),r("h3",{attrs:{id:"qv2ray-没有检测到插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qv2ray-没有检测到插件"}},[v._v("#")]),v._v(" Qv2ray 没有检测到插件")]),v._v(" "),r("ul",[r("li",[v._v("请确认插件位于 Qv2ray 的插件目录（"),r("code",[v._v("config\\plugins")]),v._v("）下。")]),v._v(" "),r("li",[v._v("请确认插件版本与 Qv2ray 版本匹配。目前，"),r("code",[v._v("2.0.0")]),v._v(" 及之后版本的插件需要使用 Qv2ray "),r("code",[v._v("v2.6.0-rc2")]),v._v(" 版本。")]),v._v(" "),r("li",[v._v("如果问题仍然存在，建议直接向插件提供者进行反映。请包含下面的信息，以助开发者定位您的问题：\n"),r("ul",[r("li",[v._v("Qv2ray 的"),r("a",{attrs:{href:"qv2ray://open/preference/about"}},[v._v("详细版本")]),v._v("，包括在哪里下载的、具体的版本号和构建号。")]),v._v(" "),r("li",[v._v("对应插件的详细版本，有条件的请带上插件文件的 "),r("code",[v._v("sha256")]),v._v(" 和 "),r("code",[v._v("md5")]),v._v("。")]),v._v(" "),r("li",[v._v("Qv2ray 的日志，可以使用 "),r("code",[v._v("qv2ray(.exe) --debug > log.txt")]),v._v(" 命令进行收集。")])])])]),v._v(" "),r("h3",{attrs:{id:"插件没有适合我操作系统的文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#插件没有适合我操作系统的文件"}},[v._v("#")]),v._v(" 插件没有适合我操作系统的文件")]),v._v(" "),r("ul",[r("li",[v._v("通常是插件作者懒得支持你的操作系统，或者：")]),v._v(" "),r("li",[v._v("这个插件不适用于你的操作系统：\n"),r("ul",[r("li",[v._v("例如：一个针对 Linux 系统的 "),r("code",[v._v("iptables")]),v._v(" 设置插件可能就不适合 macOS 和 Windows。")])])])]),v._v(" "),r("h3",{attrs:{id:"插件导致-qv2ray-崩溃"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#插件导致-qv2ray-崩溃"}},[v._v("#")]),v._v(" 插件导致 Qv2ray 崩溃")]),v._v(" "),r("ul",[r("li",[v._v("可以试试用 "),r("code",[v._v("qv2ray(.exe) --noPlugin")]),v._v(" 禁用所有插件的加载.")]),v._v(" "),r("li",[v._v("如果 Qv2ray 成功启动了（证明的确是插件的问题），请同上述方法报告问题。")])])])}),[],!1,null,null,null);a.default=o.exports}}]);