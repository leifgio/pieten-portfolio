(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return h}});var t=r(6052),i=r(5031),s=r(7294),a=r(7375);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var l=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],u=s.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,i=e.alt,a=c(e,l);return s.createElement("img",o({width:r,height:t,ref:n,alt:i},a))})),h=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,l=e.fallback,h=e.src,f=e.srcSet,x=e.align,j=e.fit,m=e.loading,g=e.ignoreFallback,p=e.crossOrigin,k=c(e,d),b=null!=m||g||void 0===r&&void 0===l,v=function(e){var n=e.loading,r=e.src,t=e.srcSet,i=e.onLoad,o=e.onError,c=e.crossOrigin,l=e.sizes,d=e.ignoreFallback,u=(0,s.useState)("pending"),h=u[0],f=u[1];(0,s.useEffect)((function(){f(r?"loading":"pending")}),[r]);var x=(0,s.useRef)(),j=(0,s.useCallback)((function(){if(r){m();var e=new Image;e.src=r,c&&(e.crossOrigin=c),t&&(e.srcset=t),l&&(e.sizes=l),n&&(e.loading=n),e.onload=function(e){m(),f("loaded"),null==i||i(e)},e.onerror=function(e){m(),f("failed"),null==o||o(e)},x.current=e}}),[r,c,t,l,i,o,n]),m=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,a.Gw)((function(){if(!d)return"loading"===h&&j(),function(){m()}}),[h,j,d]),d?"loaded":h}(o({},e,{ignoreFallback:b})),y=o({ref:n,objectFit:j,objectPosition:x},b?k:(0,i.CE)(k,["onError","onLoad"]));return"loaded"!==v?l||s.createElement(t.m$.img,o({as:u,className:"chakra-image__placeholder",src:r},y)):s.createElement(t.m$.img,o({as:u,src:h,srcSet:f,crossOrigin:p,loading:m,className:"chakra-image"},y))}));i.Ts&&(h.displayName="Image")},2709:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/modetokyo",function(){return r(5116)}])},603:function(e,n,r){"use strict";r.d(n,{P4:function(){return c},Et:function(){return l},Pg:function(){return d}});var t=r(5893),i=r(1664),s=r(5675),a=r(8527),o=r(917),c=function(e){var n=e.children,r=e.href,i=e.title,o=e.thumbnail;return(0,t.jsx)(a.xu,{w:"100%",textAlign:"center",children:(0,t.jsxs)(a.fG,{cursor:"pointer",children:[(0,t.jsx)(s.default,{src:o,alt:i,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,t.jsx)(a.AB,{href:r,target:"_blank",children:(0,t.jsx)(a.xv,{mt:2,children:i})}),(0,t.jsx)(a.xv,{fontSize:14,children:n})]})})},l=function(e){var n=e.children,r=e.id,o=e.title,c=e.thumbnail;return(0,t.jsx)(a.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(i.default,{href:"/works/".concat(r),children:(0,t.jsxs)(a.fG,{cursor:"pointer",children:[(0,t.jsx)(s.default,{src:c,alt:o,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(a.AB,{href:"/works/".concat(r),children:(0,t.jsx)(a.xv,{mt:2,fontSize:20,children:o})}),(0,t.jsx)(a.xv,{fontSize:14,children:n})]})})})},d=function(){return(0,t.jsx)(o.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(e,n,r){"use strict";var t=r(5893),i=r(9235),s=r(9008),a=r(603),o={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};n.Z=function(e){var n=e.children,r=e.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsxs)(s.default,{children:[(0,t.jsxs)("title",{children:[r," - Takuya Matsuyama"]}),(0,t.jsx)("meta",{name:"twitter:title",content:r}),(0,t.jsx)("meta",{property:"og:title",content:r})]}),n,(0,t.jsx)(a.Pg,{})]})})}},3562:function(e,n,r){"use strict";function t(){var e,n,r=(e=["\n  text-align: justify;\n  text-indent: 1em;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return t=function(){return r},r}var i=r(5934).Z.p(t());n.Z=i},3922:function(e,n,r){"use strict";r.d(n,{Dx:function(){return c},WZ:function(){return l},h_:function(){return d}});var t=r(5893),i=r(1664),s=r(8527),a=r(4651),o=r(9876),c=function(e){var n=e.children;return(0,t.jsxs)(s.xu,{children:[(0,t.jsx)(i.default,{href:"/works",children:(0,t.jsx)(s.rU,{children:"Works"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(o.XC,{})," "]}),(0,t.jsx)(s.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:n})]})},l=function(e){var n=e.src,r=e.alt;return(0,t.jsx)(a.Ee,{borderRadius:"lg",w:"full",src:n,alt:r,mb:4})},d=function(e){var n=e.children;return(0,t.jsx)(s.Ct,{colorScheme:"green",mr:2,children:n})}},5116:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return l}});var t=r(5893),i=r(8527),s=r(2857),a=r(9876),o=r(3922),c=r(3562),l=!0;n.default=function(){return(0,t.jsx)(s.Z,{title:"mode.tokyo",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(o.Dx,{children:["mode.tokyo ",(0,t.jsx)(i.Ct,{children:"2016"})]}),(0,t.jsx)(c.Z,{children:"The mode magazine for understanding to personally enjoy Japan."}),(0,t.jsxs)(c.Z,{children:["It is one of the projects launched at"," ",(0,t.jsxs)(i.rU,{href:"https://innolab.jp/",target:"_blank",children:["Open Innovation Lab (\u96fb\u901a\u30a4\u30ce\u30e9\u30dc) ",(0,t.jsx)(a.h0,{mx:"2px"})]}),", aiming to visualize the impact of media contents on the visit of foreign high-intellect class to Japan, who are highly interested in Japanese culture. I joined the project to build its mobile app for iOS where you can read free articles of the magazine."]}),(0,t.jsx)(c.Z,{children:"\u96fb\u5b50\u7248\u3068\u3057\u3066iOS\u30a2\u30d7\u30ea\u3092\u62c5\u5f53\u3002\u65e5\u82f1\u4ecf\u5bfe\u5fdc\u3002 \u304d\u3085\u3093\u304f\u3093\u3084\u30e9\u30d6\u30ea\u30fc\u30b5\u30de\u30fc\u3061\u3083\u3093\u306a\u3069\u3092\u8a8c\u9762\u3067\u53d6\u308a\u4e0a\u3052\u3066\u3044\u308b\u3002 \u672c\u96d1\u8a8c\u306fISID\u30a4\u30ce\u30e9\u30dc\u69d8\u3068\u89d2\u5ddd\u30a2\u30b9\u30ad\u30fc\u7dcf\u5408\u7814\u7a76\u6240\u69d8\u306e\u5171\u540c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(o.h_,{children:"Platform"}),(0,t.jsx)("span",{children:"iOS"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(o.h_,{children:"Stack"}),(0,t.jsx)("span",{children:"Swift"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(o.h_,{children:"Press release"}),(0,t.jsxs)(i.rU,{href:"https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf",children:["ISID Starts a Research Project to Visualize Impact of Media Contents on Visit of Foreign High-Intellect Class to Japan"," ",(0,t.jsx)(a.h0,{mx:"2px"})]})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(o.h_,{children:"Press release"}),(0,t.jsxs)(i.rU,{href:"https://innolab.jp/news/achievement/335",children:["\u30e1\u30c7\u30a3\u30a2\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u8a2a\u65e5\u884c\u52d5\u306b\u4e0e\u3048\u308b\u5f71\u97ff\u3092\u53ef\u8996\u5316\u3059\u308b\u7814\u7a76\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u59cb\u52d5"," ",(0,t.jsx)(a.h0,{mx:"2px"})]})]})]}),(0,t.jsx)(o.WZ,{src:"/images/works/modetokyo_eyecatch.png",alt:"mode.tokyo"}),(0,t.jsxs)(i.MI,{columns:2,gap:2,children:[(0,t.jsx)(o.WZ,{src:"/images/works/modetokyo_01.png",alt:"mode.tokyo"}),(0,t.jsx)(o.WZ,{src:"/images/works/modetokyo_02.png",alt:"mode.tokyo"})]}),(0,t.jsx)(o.WZ,{src:"/images/works/modetokyo_03.jpg",alt:"mode.tokyo"})]})})}}},function(e){e.O(0,[774,888,179],(function(){return n=2709,e(e.s=n);var n}));var n=e.O();_N_E=n}]);