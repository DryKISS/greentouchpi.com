"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3755],{25264:function(n,r,o){var e=o(13980),t={colour:e.string,disabled:e.bool,disabledColour:e.string,fixColour:e.string,hoverColour:(0,e.oneOfType)([e.bool,e.string]),onClick:e.func,size:(0,e.oneOfType)([e.number,e.string])};r.Z=t},83518:function(n,r,o){var e=o(37328),t=o(96670),i=o(26297),l=o(92228),u=o(52322),s=(o(2784),o(35505));function a(){var n=(0,l.Z)(["\n        height: ","px;\n        width: ","px;\n      "]);return a=function(){return n},n}function c(){var n=(0,l.Z)(["\n          transform: scale(",") ",";\n        "]);return c=function(){return n},n}function f(){var n=(0,l.Z)(["\n      cursor: pointer;\n    "]);return f=function(){return n},n}function d(){var n=(0,l.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return n},n}var C="default",v="hover",h=function(n,r){var o=r.colour,e=r.context,t=r.disabled,i=r.disabledColour,l=r.hoverColour,u=r.theme,s=u.ICONS,a=u.THEME_COLOUR,c=e?a.context:o||s.defaultIconColour;return n===C?t&&i?i:t?s.disabledIconColour:c:n===v&&l?(!0===l&&(l=s.hoverIconColour),t&&i?i:t?s.disabledIconColour:l||s.hoverIconColour||c):t?i||s.disabledIconColour:c},b=s.ZP.svg.withConfig({componentId:"sc-b0a149c7-0"})(d(),(function(n){var r=n.size;if("number"===typeof r)return(0,s.iv)(a(),r,r)}),(function(n){return h(C,n)}),(function(n){return n.stroke}),(function(n){var r=n.scale,o=n.translate;return r&&(0,s.iv)(c(),r,o||"")}),(function(n){return h(v,n)}),(function(n){var r=n.onClick,o=n.disabled;return r&&!o&&(0,s.iv)(f())}));r.Z=function(n){var r=n.children,o=n.colour,l=n.disabled,s=n.disabledColour,a=n.hoverColour,c=n.onClick,f=n.size,d=n.stroke,C=n.translate,v=(0,i.Z)(n,["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"]),h=v.mainSize,k="";if("string"===typeof f)switch(f){case"xs":k=12;break;case"sm":k=16;break;case"lg":k=24;break;case"xl":k=32;break;default:k=20}else k=f||20;var p=1;return h&&k!==h&&(p=Number(k/h)),(0,u.jsx)(b,(0,t.Z)((0,e.Z)({colour:o,disabled:l,disabledColour:s,hoverColour:a,onClick:c,scale:p,size:k,stroke:d,translate:C,xmlns:"http://www.w3.org/2000/svg"},v),{children:r}))}},83755:function(n,r,o){o.r(r);var e=o(37328),t=o(96670),i=o(52322),l=(o(2784),o(25264)),u=o(83518),s=function(n){return(0,i.jsx)(u.Z,(0,t.Z)((0,e.Z)({},n),{mainSize:20,children:(0,i.jsx)("path",{d:"M18 3.48238V20.5176C18 20.7828 17.7806 20.9997 17.5125 20.9997H15.5625C15.2944 20.9997 15.075 20.7828 15.075 20.5176V13.4303L7.13281 20.7024C6.29594 21.3895 5 20.8149 5 19.7141V4.28593C5 3.18507 6.29594 2.61053 7.13281 3.29757L15.075 10.5255V3.48238C15.075 3.21721 15.2944 3.00026 15.5625 3.00026H17.5125C17.7806 3.00026 18 3.21721 18 3.48238Z",fill:"white"})}))};s.propTypes=l.Z,r.default=s}}]);