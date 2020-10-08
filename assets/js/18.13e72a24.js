(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{382:function(t,o,i){"use strict";i.r(o);var n=i(18),e=Object(n.a)({},(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"step-3-importing-hosts-into-qv2ray"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#step-3-importing-hosts-into-qv2ray"}},[t._v("#")]),t._v(" Step 3: Importing Hosts into Qv2ray")]),t._v(" "),i("p",[t._v("Qv2ray supports many ways of importing your configuration. To get you started, we have just picked these most common use cases.")]),t._v(" "),i("h2",{attrs:{id:"share-links"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#share-links"}},[t._v("#")]),t._v(" Share Links")]),t._v(" "),i("blockquote",[i("p",[t._v("Share links generally looks like these:")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("vmess://eyJ2Ijoi")]),t._v("...")]),t._v(" "),i("li",[i("code",[t._v("ss://NjNlMDAx")]),t._v("...")])])]),t._v(" "),i("p",[t._v("Follow these steps to import them:")]),t._v(" "),i("ol",[i("li",[t._v("Click "),i("strong",[t._v("Import")]),t._v(" button in the main window, or import via "),i("a",{attrs:{href:"qv2ray://open/import/link"}},[t._v("link")]),t._v(" or "),i("a",{attrs:{href:"qv2ray://open/import/qr"}},[t._v("QR Code")]),t._v(".")]),t._v(" "),i("li",[t._v("In the "),i("strong",[t._v("Import File")]),t._v(" dialog, choose import source "),i("strong",[t._v("Share Link")]),t._v(",")]),t._v(" "),i("li",[t._v("Paste your share links into "),i("strong",[t._v("Share Link")]),t._v(" text box.")]),t._v(" "),i("li",[t._v("Click on "),i("strong",[t._v("Import")]),t._v(" button to finish.")])]),t._v(" "),i("p",[t._v(":::tip Batched Import\nYou can import multiple share links at a time. Make sure each link takes its single line.\n:::")]),t._v(" "),i("p",[t._v(":::warning Broken Links\nSome broken share links may fail to import, but it doesn't matter. The detailed error will be shown on the right side. Also, it won't stop other entries in a batched import.\n:::")]),t._v(" "),i("h2",{attrs:{id:"subscription"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#subscription"}},[t._v("#")]),t._v(" Subscription")]),t._v(" "),i("blockquote",[i("p",[t._v("A subscription link usually looks like this: "),i("code",[t._v("https://some-airport.com/links/YjYyODk?sub=3")])])]),t._v(" "),i("p",[t._v("To import a subscription, follow these steps:")]),t._v(" "),i("ol",[i("li",[t._v("Click "),i("strong",[t._v("Subscriptions")]),t._v(" button in the main window.")]),t._v(" "),i("li",[t._v("In the "),i("strong",[i("a",{attrs:{href:"qv2ray://open/group/connection"}},[t._v("SubscribeEditor")])]),t._v(" dialog, click the "),i("strong",[t._v("Add subscription")]),t._v(" icon button at the left-bottom corner.")]),t._v(" "),i("li",[t._v("Click to select the newly generated item in "),i("strong",[t._v("Subscription List")]),t._v(".")]),t._v(" "),i("li",[t._v("Input your subscription information on the right side.\n"),i("ul",[i("li",[i("strong",[t._v("Subscription Name")]),t._v(": Fill this as you wish.")]),t._v(" "),i("li",[i("strong",[t._v("Subscription Address")]),t._v(": Use your subscription link mentioned above.")]),t._v(" "),i("li",[i("strong",[t._v("Update Interval")]),t._v(": Change this according to your own demands.")])])]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("Update Subscription Data")]),t._v(" button to update the subscriptions and wait until the process finishes.")]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("OK")]),t._v(" to apply the settings and close the dialog.")])]),t._v(" "),i("p",[t._v(":::tip Update through System Proxy\nIf you encounter connectivity problem with your subscription upstream (eg: DNS Record Pollution, IP Address Blocking, etc.), you may try to run with "),i("strong",[t._v("Update Subscription with System Proxy")]),t._v(" option on. However, it's better to inform the upstream as soon as possible, to fix the issue permanently.\n:::")]),t._v(" "),i("h2",{attrs:{id:"manual-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#manual-configuration"}},[t._v("#")]),t._v(" Manual Configuration")]),t._v(" "),i("ol",[i("li",[t._v("Click "),i("strong",[t._v("New")]),t._v(" in the lower left corner of the main window")]),t._v(" "),i("li",[t._v("Fill in the "),i("strong",[t._v("Name/Prefix")]),t._v(" or leave it blank, or you can rename it after complete the configuration.")]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("Input Manually")]),t._v(" -> "),i("strong",[t._v("Open Connection Editor")]),t._v(".")]),t._v(" "),i("li",[t._v("Fill in the "),i("strong",[t._v("Tag")]),t._v(". This tag will appear in the log. You can also leave it blank.")]),t._v(" "),i("li",[t._v("Fill in "),i("strong",[t._v("Host")]),t._v(" and choose your proxy type.")]),t._v(" "),i("li",[t._v("Config "),i("strong",[t._v("Misc Settings")]),t._v(" Optionally.")]),t._v(" "),i("li",[t._v("Fill in "),i("strong",[t._v("Outbound settings")]),t._v(" and "),i("strong",[t._v("Stream Settings")]),t._v(".")]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("OK")]),t._v(" to save your config.")])]),t._v(" "),i("h2",{attrs:{id:"import-an-existing-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-an-existing-configuration"}},[t._v("#")]),t._v(" Import an existing configuration")]),t._v(" "),i("p",[t._v("If you are using v2ray-core, you can import an existing configuration file. "),i("strong",[t._v("Advanced")]),t._v(" -> "),i("strong",[t._v("Select")]),t._v(", or "),i("strong",[t._v("Open JSON Editor")]),t._v(" and paste it.")])])}),[],!1,null,null,null);o.default=e.exports}}]);