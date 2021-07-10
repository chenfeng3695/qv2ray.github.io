(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{392:function(t,a,r){"use strict";r.r(a);var s=r(16),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("有些错误内容可能需要将 "),r("strong",[t._v("核心设置")]),t._v(" 中的 "),r("code",[t._v("日志等级")]),t._v(" 调整成 "),r("code",[t._v("info")]),t._v(" 或者 "),r("code",[t._v("debug")]),t._v(" 后才会出现。")])]),t._v(" "),r("h2",{attrs:{id:"启动问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动问题"}},[t._v("#")]),t._v(" 启动问题")]),t._v(" "),r("h3",{attrs:{id:"报错only-one-usage-of-each-socket-address-protocol-network-address-port-is-normally-permitted"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#报错only-one-usage-of-each-socket-address-protocol-network-address-port-is-normally-permitted"}},[t._v("#")]),t._v(" "),r("code",[t._v("报错")]),t._v("Only one usage of each socket address (protocol/network address/port) is normally permitted.``")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("根本原因")]),t._v("：出现了端口冲突")]),t._v(" "),r("li",[r("strong",[t._v("原因1")]),t._v("：上一个 V2Ray 进程没有正常退出，占用了相关的端口。")]),t._v(" "),r("li",[r("strong",[t._v("解决办法")]),t._v("：终止当前占用该端口的进程。")]),t._v(" "),r("li",[r("strong",[t._v("原因2")]),t._v("：在 Qv2ray 中设置的相关端口已被其他软件占用。")]),t._v(" "),r("li",[r("strong",[t._v("解决方案")]),t._v("：更改 Qv2ray 或其他软件的端口设置。")])]),t._v(" "),r("h3",{attrs:{id:"报错an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#报错an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissions"}},[t._v("#")]),t._v(" "),r("code",[t._v("报错")]),t._v("An attempt was made to access a socket in a way forbidden by its access permissions.``")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("原因")]),t._v("：如果您正在使用 Windows，一个补丁可能会在 "),r("code",[t._v("1000-2000")]),t._v(" 之间设置端口作为特权/保留端口。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("解决方案")]),t._v("：使用大于 "),r("code",[t._v("2000")]),t._v(" 的端口。")])])]),t._v(" "),r("h3",{attrs:{id:"启用-tproxy-后启动-v2ray-核心失败"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启用-tproxy-后启动-v2ray-核心失败"}},[t._v("#")]),t._v(" 启用 TProxy 后启动 V2Ray 核心失败")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("详情")]),t._v("：开启 TProxy 后出现了 "),r("code",[t._v("Segmentation Fault")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("原因")]),t._v("：它是由某些 Linux 上的 "),r("code",[t._v("SUID")]),t._v(" 限制所引起的。详细的错误分析请查看 "),r("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/issues/59",target:"_blank",rel:"noopener noreferrer"}},[t._v("#59"),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("解决方案")]),t._v("："),r("code",[t._v("sudo sysctl fs.suid_dumpable=1")]),t._v(" 这种方法将会在重启后失效，请查看 "),r("a",{attrs:{href:"http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),r("OutboundLink")],1)])])])]),t._v(" "),r("h2",{attrs:{id:"网络连接问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络连接问题"}},[t._v("#")]),t._v(" 网络连接问题")]),t._v(" "),r("h3",{attrs:{id:"你已经确认连接配置是正确的-但运行时还是能看到警告-且代理未能工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#你已经确认连接配置是正确的-但运行时还是能看到警告-且代理未能工作"}},[t._v("#")]),t._v(" 你已经确认连接配置是正确的，但运行时还是能看到警告，且代理未能工作：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("可能的原因")]),t._v("：系统时间不匹配。如果VMess是您的代理协议，它需要客户端和服务器的系统时间差小于90秒，否则它将拒绝连接。")]),t._v(" "),r("li",[r("strong",[t._v("解决方案（Windows）")]),t._v("：\n"),r("ul",[r("li",[r("strong",[t._v("方法 1")]),t._v("：打开设置，选择“时间和语言”，启用“自动设置时间”。如果该选项已经启用，请点击“立即同步”按钮。")]),t._v(" "),r("li",[r("strong",[t._v("方案 2")]),t._v("：打开控制面板，切换到“类别”视图，选择“时钟和区域”，然后点击“日期和时间”，在打开的对话框中选择标签“Internet 时间”，然后点击“更改设置”按钮并勾选“与 Internet 时间服务器同步”。")])])]),t._v(" "),r("li",[r("strong",[t._v("解决方案（Linux）")]),t._v("：\n"),r("ul",[r("li",[r("strong",[t._v("方法 1")]),t._v("：使用 "),r("code",[t._v("system-timeyncd")]),t._v("，运行 "),r("code",[t._v("sudo systemctl enable systemd-timesyncd --now")])]),t._v(" "),r("li",[r("strong",[t._v("方法 2")]),t._v("：使用 "),r("a",{attrs:{href:"https://www.chrony.tuxfamily.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrony"),r("OutboundLink")],1),t._v(" 来同步时间。")])])]),t._v(" "),r("li",[r("strong",[t._v("解决方案（macOS）")]),t._v("：打开系统首选项，单击“日期 & 时间”，并开启“自动设置日期和时间”。")])]),t._v(" "),r("h3",{attrs:{id:"我想要使用代理访问中国大陆网站"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我想要使用代理访问中国大陆网站"}},[t._v("#")]),t._v(" 我想要使用代理访问中国大陆网站")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/lang/zh/getting-started/step5.html#tweaking-routing-schemes"}},[r("strong",[t._v("解决办法")])])],1)]),t._v(" "),r("h3",{attrs:{id:"当在-linux-下运行时-透明代理-tproxy-不工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#当在-linux-下运行时-透明代理-tproxy-不工作"}},[t._v("#")]),t._v(" 当在 Linux 下运行时，透明代理（TProxy）不工作")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("在这种情况下，日志可能显示错误 "),r("code",[t._v("failed to set IP_TRANSPARENT > operation not permitted")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("原因")]),t._v("：V2Ray 没有设置套接字选项的权限。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("解决方案")]),t._v("：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("对于所有 Linux 发行版，在终端中使用下面的命令（使用 root/sudo）：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("setcap "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cap_net_bind_service=+ep cap_net_admin=+ep"')]),t._v(" /usr/bin/v2ray\n")])])]),r("p",[r("code",[t._v("/usr/bin/v2ray")]),t._v(" 是大部分 Linux 发行版安装V2Ray 的地方，如果不是（例如您已经使用安装脚本安装了 V2Ray），请替换 "),r("code",[t._v("/usr/bin/v2ray")]),t._v(" 并使用您的 V2Ray 核心二进制路径。")])]),t._v(" "),r("li",[r("p",[t._v("对于 Arch Linux 用户： 尝试 AUR 包 "),r("a",{attrs:{href:"https://aur.archlinux.org/packages/v2ray-cap-git/",target:"_blank",rel:"noopener noreferrer"}},[t._v("aur/v2ray-cap-git"),r("OutboundLink")],1),t._v("（由 "),r("code",[t._v("@DuckSoft")]),t._v(" 创建）的自动化步骤")])]),t._v(" "),r("li",[r("p",[t._v("适用于 Fedora 32+ / RHEL 8+ 用户： 如果您通过 dnf / yum 安装 V2Ray，那么 V2Ray 二进制路径应该是 "),r("code",[t._v("/usr/bin/v2ray")]),t._v("。您也可以安装 RPM 包 "),r("a",{attrs:{href:"https://copr.fedorainfracloud.org/coprs/sixg0000d/v2ray/",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2ray-cap"),r("OutboundLink")],1),t._v("（由 "),r("code",[t._v("@sixg0000d")]),t._v(" 打包）。")])])])])]),t._v(" "),r("h3",{attrs:{id:"配置-windows-上拨号连接-vpn-连接的代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置-windows-上拨号连接-vpn-连接的代理"}},[t._v("#")]),t._v(" 配置 Windows 上拨号连接 / VPN 连接的代理")]),t._v(" "),r("p",[r("em",[t._v("已经在 2.7.0-pre2 版本上支持")])]),t._v(" "),r("ul",[r("li",[t._v("然而，由于 "),r("a",{attrs:{href:"https://support.microsoft.com/en-us/topic/cannot-configure-proxy-settings-if-a-vpn-connection-name-contains-non-ascii-characters-2c648407-bb72-5600-3126-8c721bc91b70",target:"_blank",rel:"noopener noreferrer"}},[t._v("微软出现了一个问题"),r("OutboundLink")],1),t._v(" (可能也类似于 "),r("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks-windows/issues/1116#issuecomment-294075565",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个原因"),r("OutboundLink")],1),t._v(")，如果连接名称包含非 ASCII 字符，代理设置将无法工作...\n"),r("ul",[r("li",[t._v("一个方法是重命名连接，并确保新名称只包含 ASCII 字符。")])])])]),t._v(" "),r("h3",{attrs:{id:"无法在-macos-上自动配置系统代理-错误-命令需要管理员权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无法在-macos-上自动配置系统代理-错误-命令需要管理员权限"}},[t._v("#")]),t._v(" 无法在 macOS 上自动配置系统代理 (错误：命令需要管理员权限)")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("原因")]),t._v("：macOS 上的权限问题。")])]),t._v(" "),r("li",[r("p",[t._v("解决办法")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# security authorizationdb write system.services.systemconfiguration.network allow")]),t._v("\nYES "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),r("h2",{attrs:{id:"行为和外观问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#行为和外观问题"}},[t._v("#")]),t._v(" 行为和外观问题")]),t._v(" "),r("h3",{attrs:{id:"windows-启用-hidpi-后字体渲染不好看"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-启用-hidpi-后字体渲染不好看"}},[t._v("#")]),t._v(" Windows 启用 HiDPI 后字体渲染不好看")]),t._v(" "),r("p",[t._v("使用 "),r("code",[t._v("qv2ray.exe -platform windows:fontengine=freetype")]),t._v(" 来启用 FreeType 渲染， 可以将吃参数添加在 Qv2ray 的快捷方式中：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/06/06/5IEM3HT1Vplnz8f.png",alt:"图片.png"}})]),t._v(" "),r("h3",{attrs:{id:"没有托盘图标-托盘图标偶尔在gnome中消失"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#没有托盘图标-托盘图标偶尔在gnome中消失"}},[t._v("#")]),t._v(" 没有托盘图标 / 托盘图标偶尔在GNOME中消失")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("原因")]),t._v("：这是个上游 Bug")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("解决办法")]),t._v("：GNOME 不支持托盘图标。所有托盘图标都是第三方开发者或部分 Linux 发行版的拓展组件。您可以使用以下命令作为临时解决方案")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" gnome-shell --replace "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])])]),t._v(" "),r("p",[t._v("或者您也可以重启 Qv2ray 然后重试。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("给 Gnome 用户的提示")]),t._v(" "),r("p",[t._v("原生的 GNOME 桌面无法显示托盘图标。所以 Qv2ray 托盘图标也无法显示。如果您想要显示托盘图标，您可以安装一个叫做 "),r("a",{attrs:{href:"https://github.com/ubuntu/gnome-shell-extension-appindicator",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("gnome-shell-extension-appindicator")]),r("OutboundLink")],1),t._v("（也叫 "),r("code",[t._v("ubuntu-appindicator")]),t._v("）安装扩展后，您应该注销，再次登录 然后在 "),r("code",[t._v("Tweaks")]),t._v(" 中启用拓展（即 "),r("code",[t._v("gnome-modins")]),t._v("），然后你会看到托盘图标。")])]),t._v(" "),r("h3",{attrs:{id:"macos-频繁要求将-qv2ray-qv2ray-插件-移到废纸篓"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos-频繁要求将-qv2ray-qv2ray-插件-移到废纸篓"}},[t._v("#")]),t._v(" macOS 频繁要求将 Qv2ray / Qv2ray 插件“移到废纸篓”")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("原因")]),t._v("：为开发组隐私着想，我们不会使用个人苹果开发者帐户为 Qv2ray 签名，因此，我们的应用程序没有通过苹果公司的所谓“审核”。同时，由于开发组实际上根本没有 macOS 设备，因此在这种情况下，我们不会去浪费时间去做的所谓“ "),r("a",{attrs:{href:"https://krita.org/en/item/first-notarized-macos-build-of-krita/",target:"_blank",rel:"noopener noreferrer"}},[t._v("公证"),r("OutboundLink")],1),t._v("”。")]),t._v(" "),r("li",[r("strong",[t._v("解决方案")]),t._v("：执行 "),r("code",[t._v("sudo xattr -rd com.apple.quarantine /Applications/qv2ray.app")]),t._v(" 以跳过那个阴间的验证。")])]),t._v(" "),r("h2",{attrs:{id:"其他问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[t._v("#")]),t._v(" 其他问题")]),t._v(" "),r("h3",{attrs:{id:"为什么-qv2ray-不自带插件和-v2ray-核心-或者提供内置下载功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么-qv2ray-不自带插件和-v2ray-核心-或者提供内置下载功能"}},[t._v("#")]),t._v(" 为什么 Qv2ray 不自带插件和 V2Ray 核心，或者提供内置下载功能？")]),t._v(" "),r("p",[t._v("我们希望我们的用户能够知道 Qv2ray / V2Ray 是如何工作的，并愿意自己解决潜在的问题和需求。")]),t._v(" "),r("p",[t._v("如果 Qv2ray 不适合您，您可以自由选择其他软件。")]),t._v(" "),r("ul",[r("li",[r("s",[t._v("试试包管理？")])])]),t._v(" "),r("h3",{attrs:{id:"qv2ray-是否会支持移动平台-android、ios"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qv2ray-是否会支持移动平台-android、ios"}},[t._v("#")]),t._v(" Qv2ray 是否会支持移动平台 (Android、iOS)？")]),t._v(" "),r("p",[t._v("目前尚无计划，取决于开发者的个人意愿，在项目迁移到 QML 之后"),r("strong",[t._v("可能")]),t._v("会有对于移动平台的支持。")])])}),[],!1,null,null,null);a.default=e.exports}}]);