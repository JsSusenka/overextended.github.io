"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9008],{9613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return y}});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),v=p(t),y=o,f=v["".concat(c,".").concat(y)]||v[y]||l[y]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},3700:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var r=t(5443),o=t(3010),i=(t(9496),t(9613)),a=["components"],u={},c=void 0,p={unversionedId:"ox_inventory/Functions/Server/Inventory/GetCurrentWeapon",id:"ox_inventory/Functions/Server/Inventory/GetCurrentWeapon",title:"GetCurrentWeapon",description:"Returns the player's currently equipped weapon as a table.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon.md",tags:[],version:"current",lastUpdatedAt:1660922812,formattedLastUpdatedAt:"8/19/2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"CustomDrop",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CustomDrop"},next:{title:"GetItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetItem"}},s={},l=[],v={toc:l};function y(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns the player's currently equipped weapon as a table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- inv: string or number\nexports.ox_inventory:GetCurrentWeapon(inv)\n")))}y.isMDXComponent=!0}}]);