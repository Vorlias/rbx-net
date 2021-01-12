(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,u=b["".concat(r,".").concat(p)]||b[p]||m[p]||o;return n?i.a.createElement(u,s(s({ref:t},c),{},{components:n})):i.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(111)),r={id:"uuid",title:"Using Compile Time Remote IDs",sidebar_label:"Compile-time Remote IDs",slug:"/uuid"},s={unversionedId:"guides/uuid",id:"guides/uuid",isDocsHomePage:!1,title:"Using Compile Time Remote IDs",description:"This functionality is only available to roblox-ts users. This is not possible in regular Luau.",source:"@site/docs/guides/uuid.md",slug:"/uuid",permalink:"/rbx-net/docs/2.x/uuid",editUrl:"https://github.com/roblox-aurora/rbx-net/edit/main/docs/docs/guides/uuid.md",version:"current",sidebar_label:"Compile-time Remote IDs",sidebar:"docs",previous:{title:"Leveraging the Definitions API",permalink:"/rbx-net/docs/2.x/definitions"},next:{title:"Limiting the requests",permalink:"/rbx-net/docs/2.x/middleware/rate-limit"}},l=[{value:"Getting started",id:"getting-started",children:[]},{value:"Usage",id:"usage",children:[{value:"Using with Definitions",id:"using-with-definitions",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TypeScript Only")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This functionality is only available to roblox-ts users. This is not possible in regular Luau."))),Object(o.b)("p",null,'A feature that can be leveraged with the power of the roblox-ts compiler, is a thing referred to as "Remote Ids". This is a way to throw off any identifying information about your remotes to any external parties. '),Object(o.b)("p",null,"If used correctly it should make it quite hard to make exploit tools for your game, and throw off most exploiters."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is not an anti-exploit solution, but a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://utkusen.com/blog/security-by-obscurity-is-underrated.html"}),"good piece of cheese")," in preventing exploits. You ",Object(o.b)("em",{parentName:"p"},"should always")," secure your remotes yourself, using things like the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.x/middleware/types"}),"runtime type checking middleware"),". Doesn't hurt to add another layer of cheese."))),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"To start using Remote Ids, first install the Remote Id generation tool:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install -g roblox-ts-net-idgen\n")),Object(o.b)("p",null,"Then, create a new ",Object(o.b)("inlineCode",{parentName:"p"},"remoteIds.id.json")," file inside your project. It doesn't have to be called ",Object(o.b)("inlineCode",{parentName:"p"},"remoteIds"),", but for this example that's what we're doing. As long as it ends with ",Object(o.b)("inlineCode",{parentName:"p"},".id.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="shared/remoteIds.id.json"',title:'"shared/remoteIds.id.json"'}),'{\n    "Name": "RemoteId",\n    "IDs": [\n    ]\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Name")," field is the outputted name of the ",Object(o.b)("inlineCode",{parentName:"p"},"const enum"),", and the ",Object(o.b)("inlineCode",{parentName:"p"},"IDs")," will be the IDs you have for your remotes."),Object(o.b)("p",null,"Now lets add some example remote ids"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="shared/remoteIds.id.json"',title:'"shared/remoteIds.id.json"'}),'{\n    "Name": "RemoteId",\n    "IDs": [\n        "PrintMessage",\n        "MakeHello"\n    ]\n}\n')),Object(o.b)("p",null,"Now that we have some remote ids, we need to generate the ",Object(o.b)("inlineCode",{parentName:"p"},"type declaration")," file. Run the command in your console:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"rbxnid\n")),Object(o.b)("p",null,"A new ",Object(o.b)("inlineCode",{parentName:"p"},"remoteId.d.ts")," file should have been generated, and should look like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="shared/remoteId.d.ts"',title:'"shared/remoteId.d.ts"'}),'export const enum RemoteId {\n    PrintMessage = "cbf11f23-ed6e-43f6-8750-fce7c6558ae4",\n    MakeHello = "ffa61bfe-d8ba-4c82-a7eb-3dd36b133184"\n}\n')),Object(o.b)("p",null,"These IDs will change every time you run the ",Object(o.b)("inlineCode",{parentName:"p"},"rbxnid")," command. It's recommended you do this as part of your build process, so each new build of your game has an entirely new set of IDs. This will ensure that it's difficult to make any specific exploit tools for your game."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Then when you have the RemoteIds, you can use them in place where you'd normally supply a remote id:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import Net from "@rbxts/net";\nimport { RemoteId } from "shared/remoteId";\n\nconst ExampleUsage = new Net.Server.Event(RemoteId.PrintMessage); \n')),Object(o.b)("p",null,"This will end up compiling to"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua",metastring:'title="compiled code"',title:'"compiled','code"':!0}),'--- ... roblox-ts imports\nlocal ExampleUsage = Net.Server.Event.new("cbf11f23-ed6e-43f6-8750-fce7c6558ae4")\n')),Object(o.b)("h3",{id:"using-with-definitions"},"Using with Definitions"),Object(o.b)("p",null,"Using remote ids with definitions is straightforward."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import Net from "@rbxts/net";\nimport { RemoteId } from "shared/remoteId";\n\nconst Remotes = Net.Definitions.Create({\n    [RemoteId.PrintMessage]: Net.Definitions.Event<[message: string]>(),\n    [RemoteId.MakeHello]: Net.Definitions.AsyncFunction<(message: string) => string>()\n});\nexport = Remotes;\n')),Object(o.b)("p",null,"Which should compile to the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua",metastring:'title="compiled code"',title:'"compiled','code"':!0}),'-- ... roblox-ts imports\nlocal Remotes = Net.Definitions.Create({\n    ["cbf11f23-ed6e-43f6-8750-fce7c6558ae4"] = Net.Definitions.Event(),\n    ["ffa61bfe-d8ba-4c82-a7eb-3dd36b133184"] = Net.Definitions.AsyncFunction()\n})\n\n-- .. exports\n')))}d.isMDXComponent=!0}}]);