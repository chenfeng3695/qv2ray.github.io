(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{388:function(e,t,o){"use strict";o.r(t);var a=o(18),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"advanced-route-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#advanced-route-settings"}},[e._v("#")]),e._v(" Advanced Route Settings")]),e._v(" "),o("p",[o("strong",[e._v("Advanced routing settings")]),e._v(" and the "),o("strong",[e._v("routing editor")]),e._v(" are distinctive features of Qv2ray. With their functionality, you can achieve precise control of traffic, such as "),o("strong",[e._v("on-demand proxy")]),e._v(", "),o("strong",[e._v("split traffic to domestic and foreign websites")]),e._v(", etc., and even do "),o("strong",[e._v("Matryoshkas")]),e._v(" 🤣~")]),e._v(" "),o("p",[e._v(":::tip What is routing? What about PAC and GFWList?\nIf you don't know what the routing function of V2Ray is, then you can understand it as a new generation PAC implementation with simpler configuration, more efficient use, and better rules.")]),e._v(" "),o("p",[e._v("The routing function is far more powerful than PAC, so please don't ask whether Qv2ray supports PAC! The data used by the routing function is more complete than GFWList, so GFWList is no longer needed.\n:::")]),e._v(" "),o("h2",{attrs:{id:"global-routing-rules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#global-routing-rules"}},[e._v("#")]),e._v(" Global routing rules")]),e._v(" "),o("p",[e._v("The global routing rule configuration function is in the "),o("strong",[e._v("Advanced Routing Settings")]),e._v(" tab of "),o("strong",[e._v("Preferences")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"domain-strategy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#domain-strategy"}},[e._v("#")]),e._v(" Domain strategy")]),e._v(" "),o("p",[e._v("Contains three types: "),o("code",[e._v("AsIs")]),e._v(", "),o("code",[e._v("IPIfNonMatch")]),e._v(", and "),o("code",[e._v("IPOnDemand")]),e._v(".")]),e._v(" "),o("p",[e._v("According to V2Ray's official documents, the meaning of the three domain name strategies are as follows:")]),e._v(" "),o("ul",[o("li",[o("strong",[o("code",[e._v("AsIs")])]),e._v(": Use only the domain name for routing. Defaults.")]),e._v(" "),o("li",[o("strong",[o("code",[e._v("IPIfNonMatch")])]),e._v(": When the domain name does not match any rules, the domain name is resolved into IP (A record or AAAA record) for matching again:\n"),o("ul",[o("li",[e._v("When a domain name has multiple A records, it will try to match all A records until one of them matches a certain rule;")]),e._v(" "),o("li",[e._v("The resolved IP only works during routing, and the original domain name is still used in the forwarded data packets.")])])]),e._v(" "),o("li",[o("strong",[o("code",[e._v("IPOnDemand")])]),e._v(": When any IP-based rules are encountered during matching, the domain name will be immediately resolved to IP for matching.")])]),e._v(" "),o("p",[e._v("In short, based on a developer’s statement:")]),e._v(" "),o("ul",[o("li",[o("strong",[o("code",[e._v("AsIs")])]),e._v(": fast analysis, imprecise diversion;")]),e._v(" "),o("li",[o("strong",[o("code",[e._v("IPIfNonMatch")])]),e._v(": parsing is slightly slower, and shunt is accurate")]),e._v(" "),o("li",[o("strong",[o("code",[e._v("IPOnDemand")])]),e._v(": Useless.")])]),e._v(" "),o("blockquote",[o("p",[e._v("Note: "),o("code",[e._v("IPOnDemand")]),e._v(" should be the slowest but most accurate, but in most cases, "),o("code",[e._v("IPIfNonMatch")]),e._v(" is sufficient, so the actual effect of "),o("code",[e._v("IPOnDemand")]),e._v(" is not obvious.")])]),e._v(" "),o("p",[e._v("You can choose the corresponding domain name strategy according to your actual needs. Generally speaking, IPIfNonMatch is the ideal choice in most situations.")]),e._v(" "),o("h3",{attrs:{id:"routing-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#routing-methods"}},[e._v("#")]),e._v(" Routing Methods")]),e._v(" "),o("p",[e._v("The routing plan consists of a "),o("code",[e._v("3x2")]),e._v(" matrix, from top left to bottom right: "),o("code",[e._v("IP direct connection")]),e._v(", "),o("code",[e._v("IP proxy")]),e._v(", "),o("code",[e._v("IP blocking")]),e._v(", "),o("code",[e._v("domain name direct connection")]),e._v(", "),o("code",[e._v("domain name proxy")]),e._v(", "),o("code",[e._v("domain name blocking")]),e._v(", one per line, no comma separation.")]),e._v(" "),o("p",[e._v("These 6 rules in Qv2ray are matched according to the priority of "),o("code",[e._v("domain name blocking")]),e._v(" -> "),o("code",[e._v("domain name proxy")]),e._v(" -> "),o("code",[e._v("domain name direct connection")]),e._v(" -> "),o("code",[e._v("IP blocking")]),e._v(" -> "),o("code",[e._v("IP proxy")]),e._v(" -> "),o("code",[e._v("IP direct connection")]),e._v(". If the match fails, the private address and the mainland China domestic address are directly connected, otherwise the agent will be used.")]),e._v(" "),o("p",[e._v(":::tip I just want a global proxy~~~ 🤗")]),e._v(" "),o("p",[e._v("It's very simple. Just clear these rules, go to the Connection tab of Preferences, and uncheck the Bypass China check box. 🙄\n:::")]),e._v(" "),o("p",[e._v("According to the official V2Ray documentation:")]),e._v(" "),o("p",[e._v("The IP rules are written as follows (in order of common usage):")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("GeoIP")]),e._v(": The form is "),o("code",[e._v("geoip:cn")]),e._v(", which must start with "),o("code",[e._v("geoip:")]),e._v(" (all lowercase) followed by a two-character country code. For example, "),o("code",[e._v("geoip:cn")]),e._v(" represents an IP address in China, and "),o("code",[e._v("geoip:us")]),e._v(" represents an IP address in the United States.")]),e._v(" "),o("li",[o("strong",[e._v("Special value")]),e._v(": "),o("code",[e._v("geoip:private")]),e._v(", including all private addresses, such as "),o("code",[e._v("127.0.0.1")]),e._v(" (this rule only supports V2Ray 3.5 and above).")]),e._v(" "),o("li",[o("strong",[e._v("IP")]),e._v(": The format is "),o("code",[e._v("127.0.0.1")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("CIDR")]),e._v(": The format is "),o("code",[e._v("10.0.0.0/8")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Load IP rules from external files")]),e._v(": the form is "),o("code",[e._v("ext:file:tag")]),e._v(", which must start with "),o("code",[e._v("ext:")]),e._v(" (all lowercase), followed by the file name (without extension) "),o("code",[e._v("file")]),e._v(" and "),o("code",[e._v("tag")]),e._v(", the file must be stored in the V2Ray core resource directory. The file format is the same as "),o("code",[e._v("geoip.dat")]),e._v(", and the specified "),o("code",[e._v("tag")]),e._v(" must exist in the file.")])]),e._v(" "),o("p",[e._v("The domain name rules are written as follows (in order of common use):")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Pre-defined domain list")]),e._v(": Starts with "),o("code",[e._v("geosite:")]),e._v(", and the rest is a name, such as "),o("code",[e._v("geosite:google")]),e._v(" or "),o("code",[e._v("geosite:cn")]),e._v(". For the name and domain name list, please refer to the "),o("em",[e._v("predefined domain name list")]),e._v(" section of V2Ray document.")]),e._v(" "),o("li",[o("strong",[e._v("Subdomain")]),e._v(": Starts with "),o("code",[e._v("domain:")]),e._v(", and the rest is a domain name. This rule takes effect when the domain name is the target domain name or its subdomain name. For example, "),o("code",[e._v("domain:v2ray.com")]),e._v(" matches "),o("code",[e._v("www.v2ray.com")]),e._v(" and "),o("code",[e._v("v2ray.com")]),e._v(", but not "),o("code",[e._v("xv2ray.com")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Complete match")]),e._v(": Starts with "),o("code",[e._v("full:")]),e._v(", and the rest is a domain name. When this domain name completely matches the target domain name, the rule takes effect. For example, "),o("code",[e._v("full:v2ray.com")]),e._v(" matches "),o("code",[e._v("v2ray.com")]),e._v(" but not "),o("code",[e._v("www.v2ray.com")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("String-only")]),e._v(": When this string matches any part of the target domain name, the rule takes effect. For example, "),o("code",[e._v("sina.com")]),e._v(" can match "),o("code",[e._v("sina.com")]),e._v(", "),o("code",[e._v("sina.com.cn")]),e._v(" and "),o("code",[e._v("www.sina.com")]),e._v(", but not "),o("code",[e._v("sina.cn")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Regular expression")]),e._v(": Starts with "),o("code",[e._v("regexp:")]),e._v(", and the rest is a regular expression. When this regular expression matches the target domain name, the rule takes effect. For example, "),o("code",[e._v("regexp:\\\\.goo.*\\\\.com$")]),e._v(" matches "),o("code",[e._v("www.google.com")]),e._v(", "),o("code",[e._v("fonts.googleapis.com")]),e._v(", but not "),o("code",[e._v("google.com")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Loading domain list from external files")]),e._v(": the format is "),o("code",[e._v("ext:file:tag")]),e._v(", which must start with "),o("code",[e._v("ext:")]),e._v(" (all lowercase), followed by the file name (without extension) "),o("code",[e._v("file")]),e._v(" and "),o("code",[e._v("tag")]),e._v(", and the file must be stored in the V2Ray core resource directory. The file format is the same as "),o("code",[e._v("geosite.dat")]),e._v(", and the specified "),o("code",[e._v("tag")]),e._v(" must exist in the file.")])]),e._v(" "),o("p",[e._v(":::tip I'm a newbie, can you be more straightforward?")]),e._v(" "),o("ul",[o("li",[e._v("If you want to implement a global proxy, that is, regardless of the destination address, all traffic will go through the proxy, then refer to the other tips above. 😅")]),e._v(" "),o("li",[e._v("If you want to achieve precise traffict splitting, that is, all outbound traffic should go through the proxy, then just click the "),o("code",[e._v("preset plans")]),e._v(" button in the interface, select the "),o("code",[e._v("blank plan")]),e._v(" or the "),o("code",[e._v("ad blocking plan")]),e._v(", and set the domain name strategy to "),o("code",[e._v("IPIfNonMatch")]),e._v(". 😋\n:::")])]),e._v(" "),o("p",[e._v(":::tip I'm a advanced user! I want more precise traffic splitting! 🤔\nWe recommends using an enhanced version of the V2Ray rules file project. The project is at "),o("a",{attrs:{href:"https://github.com/Loyalsoldier/v2ray-rules-dat",target:"_blank",rel:"noopener noreferrer"}},[e._v("Loyalsoldier/v2ray-rules-dat"),o("OutboundLink")],1),e._v(". 🤗\n:::")]),e._v(" "),o("p",[e._v(":::tip I want a highly customizable traffic splitting rules! 🤪\nPlease refer to the next section "),o("strong",[e._v("Routing Editor")]),e._v(". 😄\n:::")]),e._v(" "),o("h2",{attrs:{id:"routing-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#routing-editor"}},[e._v("#")]),e._v(" Routing Editor")]),e._v(" "),o("p",[e._v("In the main interface of Qv2ray, "),o("strong",[e._v("right-click")]),e._v(" the agent node and select "),o("strong",[e._v("Edit as a complex configuration")]),e._v(" to open the "),o("strong",[e._v("Route Editor")]),e._v(" interface.")]),e._v(" "),o("p",[e._v("In this interface, you can arbitrarily combine matching conditions such as "),o("strong",[e._v("user")]),e._v(", "),o("strong",[e._v("source IP")]),e._v(", "),o("strong",[e._v("target IP")]),e._v(", "),o("strong",[e._v("domain name")]),e._v(", "),o("strong",[e._v("target domain name")]),e._v(", "),o("strong",[e._v("protocol")]),e._v(", and "),o("strong",[e._v("port")]),e._v(" to create sufficiently accurate inbound/outbound rules, and you can also adjust the "),o("strong",[e._v("priority")]),e._v(" of the rules arbitrarily Level, even achieving "),o("strong",[e._v("load balancing")]),e._v(".")]),e._v(" "),o("p",[e._v("What needs reiterating is that the matching conditions in each routing rule are "),o("code",[e._v("and")]),e._v(" / "),o("code",[e._v("&&")]),e._v(" relationships, that is, if a routing rule contains multiple matching conditions, the actual matching conditions finally obtained are the intersection of these conditions. For example, if a routing rule contains both the port condition "),o("code",[e._v("443")]),e._v(" and the target domain name condition "),o("code",[e._v("qv2ray.github.io")]),e._v(", then only the target "),o("code",[e._v("qv2ray.github.io:443")]),e._v(" that meets both conditions will match this item rule.")]),e._v(" "),o("p",[e._v("If you don't know much about V2Ray's routing rules mechanism, please refer to V2Ray's official documentation.")])])}),[],!1,null,null,null);t.default=n.exports}}]);