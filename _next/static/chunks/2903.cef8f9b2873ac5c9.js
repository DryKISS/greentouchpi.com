"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2903],{25264:function(n,r,o){var e=o(13980),t={colour:e.string,disabled:e.bool,disabledColour:e.string,fixColour:e.string,hoverColour:(0,e.oneOfType)([e.bool,e.string]),onClick:e.func,size:(0,e.oneOfType)([e.number,e.string])};r.Z=t},83518:function(n,r,o){var e=o(37328),t=o(96670),i=o(26297),l=o(92228),u=o(52322),a=(o(2784),o(35505));function s(){var n=(0,l.Z)(["\n        height: ","px;\n        width: ","px;\n      "]);return s=function(){return n},n}function c(){var n=(0,l.Z)(["\n          transform: scale(",") ",";\n        "]);return c=function(){return n},n}function d(){var n=(0,l.Z)(["\n      cursor: pointer;\n    "]);return d=function(){return n},n}function f(){var n=(0,l.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return f=function(){return n},n}var C="default",v="hover",b=function(n,r){var o=r.colour,e=r.context,t=r.disabled,i=r.disabledColour,l=r.hoverColour,u=r.theme,a=u.ICONS,s=u.THEME_COLOUR,c=e?s.context:o||a.defaultIconColour;return n===C?t&&i?i:t?a.disabledIconColour:c:n===v&&l?(!0===l&&(l=a.hoverIconColour),t&&i?i:t?a.disabledIconColour:l||a.hoverIconColour||c):t?i||a.disabledIconColour:c},h=a.ZP.svg.withConfig({componentId:"sc-b0a149c7-0"})(f(),(function(n){var r=n.size;if("number"===typeof r)return(0,a.iv)(s(),r,r)}),(function(n){return b(C,n)}),(function(n){return n.stroke}),(function(n){var r=n.scale,o=n.translate;return r&&(0,a.iv)(c(),r,o||"")}),(function(n){return b(v,n)}),(function(n){var r=n.onClick,o=n.disabled;return r&&!o&&(0,a.iv)(d())}));r.Z=function(n){var r=n.children,o=n.colour,l=n.disabled,a=n.disabledColour,s=n.hoverColour,c=n.onClick,d=n.size,f=n.stroke,C=n.translate,v=(0,i.Z)(n,["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"]),b=v.mainSize,p="";if("string"===typeof d)switch(d){case"xs":p=12;break;case"sm":p=16;break;case"lg":p=24;break;case"xl":p=32;break;default:p=20}else p=d||20;var k=1;return b&&p!==b&&(k=Number(p/b)),(0,u.jsx)(h,(0,t.Z)((0,e.Z)({colour:o,disabled:l,disabledColour:a,hoverColour:s,onClick:c,scale:k,size:p,stroke:f,translate:C,xmlns:"http://www.w3.org/2000/svg"},v),{children:r}))}},52903:function(n,r,o){o.r(r);var e=o(37328),t=o(96670),i=o(52322),l=(o(2784),o(25264)),u=o(83518),a=function(n){return(0,i.jsx)(u.Z,(0,t.Z)((0,e.Z)({},n),{mainSize:21,translate:"translateY(2px)",children:(0,i.jsx)("path",{d:"M9.5 0C4.52823 0 0.5 4.02823 0.5 9C0.5 13.9718 4.52823 18 9.5 18C14.4718 18 18.5 13.9718 18.5 9C18.5 4.02823 14.4718 0 9.5 0Z"})}))};a.propTypes=l.Z,r.default=a}}]);