(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,d=m["".concat(o,".").concat(b)]||m[b]||p[b]||s;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},119:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(121),o=n(116),l=n(56),i=n.n(l),c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,m=e.values,p=e.groupId,b=e.className,d=Object(s.a)(),g=d.tabGroupChoices,f=d.setTabGroupChoices,v=Object(r.useState)(l),y=v[0],O=v[1],h=r.Children.toArray(e.children);if(null!=p){var j=g[p];null!=j&&j!==y&&m.some((function(e){return e.value===j}))&&O(j)}var k=function(e){O(e),null!=p&&f(p,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},m.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},120:function(e,t,n){"use strict";var r=n(3),a=n(0),s=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return s.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},121:function(e,t,n){"use strict";var r=n(0),a=n(122);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},122:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c}));var r=n(0),a=n.n(r),s=n(119),o=n(120),l="ts",i="code",c=[{label:"roblox-ts",value:"ts"},{label:"luau",value:"luau"}];t.d=function(e){var t=e.children,n=t[0],r=t[1];return console.log(n,r),a.a.createElement(s.a,{defaultValue:l,groupId:i,values:c},a.a.createElement(o.a,{value:"ts"},n),a.a.createElement(o.a,{value:"luau"},r))}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),s=(n(0),n(115)),o=(n(123),n(119)),l=n(120),i={id:"basics",title:"Basics",sidebar_label:"Basics",slug:"/basic-usage"},c={unversionedId:"guides/basics",id:"guides/basics",isDocsHomePage:!1,title:"Basics",description:"Quick Start",source:"@site/docs/guides/basic-usage.md",slug:"/basic-usage",permalink:"/rbx-net/docs/2.0/basic-usage",editUrl:"https://github.com/roblox-aurora/rbx-net/edit/main/docs/docs/guides/basic-usage.md",version:"current",sidebar_label:"Basics",sidebar:"docs",previous:{title:"Install for Luau",permalink:"/rbx-net/docs/2.0/install-luau"},next:{title:"Leveraging the Definitions API",permalink:"/rbx-net/docs/2.0/definitions"}},u=[{value:"Quick Start",id:"quick-start",children:[]}],m={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"quick-start"},"Quick Start"),Object(s.b)("p",null,"Three files are needed to get started:"),Object(s.b)(o.a,{defaultValue:"ts",groupId:"code",values:[{label:"roblox-ts",value:"ts"},{label:"luau",value:"luau"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="shared/remotes.ts"',title:'"shared/remotes.ts"'}),'import Net from "@rbxts/net";\n\nconst Remotes = Net.Definitions.Create({\n  PrintMessage: Net.Definitions.Event<[message: string, other: string]>(),\n  MakeHello: Net.Definitions.AsyncFunction<(message: string) => string>(),\n});\n\nexport { Remotes };\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/test.server.ts"',title:'"server/test.server.ts"'}),'import { Remotes } from "shared/remotes";\n\n// listen to messages\nconst PrintMessage = Remotes.CreateServer("PrintMessage");\nPrintMessage.Connect((player, message, other) => {\n  print(`Server recieved message: ${message} from player: ${player} ${other}`);\n});\n\n// listen and respond to messages\nconst MakeHello = Remotes.CreateServer("MakeHello");\nMakeHello.SetCallback((player, message) => {\n  print(`Server got an async message from ${player} containing the message ${message}`);\n  return `Hello, ${player}! We got your message: ${message}`;\n});\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="client/test.client.ts"',title:'"client/test.client.ts"'}),'import { Remotes } from "shared/remotes";\n\n// send a message to the server\nconst PrintMessage = Remotes.GetClient("PrintMessage");\nPrintMessage.SendToServer("Hello there!", "other");\n\n// send a message to the server, while listening for a response\nconst MakeHello = Remotes.GetClient("MakeHello");\nMakeHello.CallServerAsync("Net is cool right??").then((result) => {\n  print(`Client got a response to the async message from server: ${result}`);\n});\n'))),Object(s.b)(l.a,{value:"luau",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua",metastring:'title="src/shared/Remotes.lua"',title:'"src/shared/Remotes.lua"'}),"local Net = require(ReplicatedStorage.Net)\n\nlocal Remotes = Net.Definitions.Create({\n  PrintMessage = Net.Definitions.Event(),\n  MakeHello = Net.Definitions.AsyncFunction(),\n})\n\nreturn Remotes\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua",metastring:'title="src/server/test.server.lua"',title:'"src/server/test.server.lua"'}),'local Remotes = require(ReplicatedStorage.Common.Remotes)\n\n-- listen to messages\nlocal PrintMessage = Remotes:CreateServer("PrintMessage")\nPrintMessage:Connect(function (player, message, other)\n  print("Server recieved message", message, "from player:", player, other)\nend)\n\n-- listen and respond to messages\nlocal MakeHello = Remotes:CreateServer("MakeHello")\nMakeHello:SetCallback(function (player, message)\n  print("Server got an async message from ", player, "containing the message", message)\n  return "Hello, " .. tostring(player) .. " We got your message: " .. message\nend)\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua",metastring:'title="src/client/test.client.lua"',title:'"src/client/test.client.lua"'}),'local Remotes = require(ReplicatedStorage.Common.Remotes)\n\n-- send a message to the server\nlocal PrintMessage = Remotes:GetClient("PrintMessage");\nPrintMessage:SendToServer("Hello there!", "other");\n\n-- send a message to the server, while listening for a response\nlocal MakeHello = Remotes:GetClient("MakeHello");\nMakeHello:CallServerAsync("Net is cool right??"):andThen(function (result)\n  print("Client got a response to the async message from server: ", result)\nend)\n')))),Object(s.b)("p",null,"And away you go - just get editing the remotes file to add your own definitions!"))}p.isMDXComponent=!0}}]);