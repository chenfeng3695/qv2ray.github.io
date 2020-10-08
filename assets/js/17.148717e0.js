(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{381:function(e,o,r){"use strict";r.r(o);var t=r(18),a=Object(t.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"step-2-configuring-v2ray-core"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configuring-v2ray-core"}},[e._v("#")]),e._v(" Step 2: Configuring V2Ray Core")]),e._v(" "),r("p",[e._v("After a correct and successful installation of Qv2ray onto your system, it is necessary to configure Qv2ray on V2Ray core files before actually using it.")]),e._v(" "),r("h2",{attrs:{id:"download-v2ray-core-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#download-v2ray-core-files"}},[e._v("#")]),e._v(" Download V2Ray Core Files")]),e._v(" "),r("p",[e._v("Due to political reasons, Qv2ray itself "),r("strong",[e._v("does not")]),e._v(" include a distribution of V2Ray executable files, namely the "),r("code",[e._v("v2ray-core")]),e._v(", and most of the time required for users is to download them.\nYou may check "),r("a",{attrs:{href:"https://www.v2fly.org/guide/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("V2Fly Installation Guide"),r("OutboundLink")],1),e._v(" for the official instructions.")]),e._v(" "),r("p",[e._v(":::tip Core Management: Manual vs Automatic\nIf you are using a distribution with V2Ray core and assets packages, it’ll be the best to install through package manager since the system will handle the automatic upgrade of v2ray core. For Arch Linux users, installing only one package "),r("code",[e._v("v2ray")]),e._v(" is enough. For other distributions, please read below.\n:::")]),e._v(" "),r("p",[e._v("Go to "),r("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official GitHub Release page of v2fly/v2ray-core"),r("OutboundLink")],1),e._v(" and check the recent stable builds. Choose according to your platform in the asset files. For example, Windows 64-bit users may download "),r("code",[e._v("v2ray-windows-64.zip")]),e._v(", Mac OS users may download "),r("code",[e._v("v2ray-macos-64.zip")]),e._v(", and for most of the Linux users, "),r("code",[e._v("v2ray-linux-64.zip")]),e._v(".")]),e._v(" "),r("p",[e._v(":::tip For Windows 10 ARM64 users\nFrom V2Ray Core 4.27, the V2Ray project team has provided an ARM32 (armv7)-based kernel for Windows 10. It is recommended that Windows 10 ARM64 users use this version of the kernel to obtain better performance.\n:::")]),e._v(" "),r("p",[e._v(":::danger Sharpen Your Eyes\nDo not download "),r("code",[e._v("v2ray-linux-arm64.zip")]),e._v(" if you are running Qv2ray on "),r("code",[e._v("x86_64")]),e._v(" ("),r("code",[e._v("amd64")]),e._v(") platform.\nTo make it clear, "),r("code",[e._v("arm64")]),e._v(" is completely different from "),r("code",[e._v("amd64")]),e._v(". Make sure you don't do like this.\n:::")]),e._v(" "),r("h2",{attrs:{id:"place-your-v2ray-core"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#place-your-v2ray-core"}},[e._v("#")]),e._v(" Place Your V2Ray Core")]),e._v(" "),r("p",[e._v("Extract the v2ray core files into a fixed position. As a default, it is suggested to extract the files into "),r("code",[e._v("$QV2RAY_CONFIG_PATH/vcore")]),e._v(", where "),r("code",[e._v("$QV2RAY_CONFIG_PATH")]),e._v(" is the directory where Qv2ray store it’s data.")]),e._v(" "),r("p",[e._v("The directory "),r("code",[e._v("vcore")]),e._v(" could be in one of these locations:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("./config/")]),e._v(" ("),r("code",[e._v("config")]),e._v(" subdirectory aside Qv2ray executable, which is recommended for Windows Users)")]),e._v(" "),r("li",[r("code",[e._v("~/.qv2ray/")]),e._v(" (in a dedicated directory of your home folder)")]),e._v(" "),r("li",[r("code",[e._v("~/.config/qv2ray/")]),e._v(" (standard XDG configuration path)")])]),e._v(" "),r("p",[e._v("Afterwards, please make sure that these files exists directly in your "),r("code",[e._v("vcore")]),e._v(" directory:")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("v2ray")]),e._v(" / "),r("code",[e._v("v2ray.exe")]),e._v(": core executable file")]),e._v(" "),r("li",[r("code",[e._v("v2ctl")]),e._v(" / "),r("code",[e._v("v2ctl.exe")]),e._v(": core controlling program")]),e._v(" "),r("li",[r("code",[e._v("geoip.dat")]),e._v(": IP rules database")]),e._v(" "),r("li",[r("code",[e._v("geosite.dat")]),e._v(": domain rules database")])]),e._v(" "),r("p",[e._v(":::warning Special Hint for Linux / macOS Users\nYou should always grant "),r("strong",[e._v("executable permission")]),e._v(" to "),r("code",[e._v("v2ray")]),e._v(" and "),r("code",[e._v("v2ctl")]),e._v(".\nThis is usually done by executing "),r("code",[e._v("chmod +x")]),e._v(" on these files.")]),e._v(" "),r("p",[e._v("On macOS, if you use Homebrew to install v2ray-core, you can ignore this tip.\n:::")]),e._v(" "),r("h2",{attrs:{id:"configure-qv2ray-to-use-the-core"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-qv2ray-to-use-the-core"}},[e._v("#")]),e._v(" Configure Qv2ray to Use the Core")]),e._v(" "),r("p",[e._v("Open Qv2ray and go to Preference Window. In "),r("strong",[r("a",{attrs:{href:"qv2ray://open/preference/kernel"}},[e._v("Core Settings")])]),e._v(", configure the following options:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Core Executable Path")]),e._v(": Set this to where your V2Ray executable exists. This can be the full path of your "),r("code",[e._v("v2ray.exe")]),e._v(" on Windows, or that "),r("code",[e._v("v2ray")]),e._v(" executable file on Linux / macOS.")]),e._v(" "),r("li",[r("strong",[e._v("V2Ray Assets Directory")]),e._v(": Set this to where "),r("code",[e._v("geoip.dat")]),e._v(" and "),r("code",[e._v("geosite.dat")]),e._v(" are located.")])]),e._v(" "),r("p",[e._v("After configuring, you can click on "),r("strong",[e._v("Check V2Ray Core Settings")]),e._v(" button to validate your V2Ray core settings. Repeat trying until you get the check passed.")]),e._v(" "),r("p",[e._v(":::warning No Matryoshka!\nNever ever point "),r("strong",[e._v("Core Executable Path")]),e._v(" to "),r("strong",[e._v("Qv2ray Executable")]),e._v("!\nThis will not cause a fork bomb since Qv2ray is single-instanced.\nDo note that V2Ray Core Executable is like "),r("code",[e._v("v2ray")]),e._v(" or "),r("code",[e._v("v2ray.exe")]),e._v(", instead of "),r("code",[e._v("qv2ray")]),e._v(" or "),r("code",[e._v("qv2ray.exe")]),e._v("!\n:::")]),e._v(" "),r("p",[e._v(":::tip Hint for Arch Linux Users\nIf you use "),r("code",[e._v("v2ray")]),e._v(" package, the suggested configuration is as follows:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Core Executable Path")]),e._v(": "),r("code",[e._v("/usr/bin/v2ray")])]),e._v(" "),r("li",[r("strong",[e._v("V2Ray Assets Directory")]),e._v(": "),r("code",[e._v("/usr/share/v2ray")]),e._v("\n:::")])]),e._v(" "),r("p",[e._v(":::tip Hint for macOS Users\nIf you are using Homebrew to install v2ray-core then you can simply copy the path and directory below:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Core Executable Path")]),e._v(": "),r("code",[e._v("/usr/local/bin/v2ray")])]),e._v(" "),r("li",[r("strong",[e._v("V2Ray Assets Directory")]),e._v(": "),r("code",[e._v("/usr/local/bin/")]),e._v("\n:::")])])])}),[],!1,null,null,null);o.default=a.exports}}]);