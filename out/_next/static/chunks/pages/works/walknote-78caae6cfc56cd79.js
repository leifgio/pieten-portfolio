(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return h}});var t=r(6052),i=r(5031),s=r(7294),l=r(7375);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var o=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=s.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,i=e.alt,l=c(e,o);return s.createElement("img",a({width:r,height:t,ref:n,alt:i},l))})),h=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,o=e.fallback,h=e.src,x=e.srcSet,f=e.align,j=e.fit,m=e.loading,p=e.ignoreFallback,g=e.crossOrigin,w=c(e,u),k=null!=m||p||void 0===r&&void 0===o,b=function(e){var n=e.loading,r=e.src,t=e.srcSet,i=e.onLoad,a=e.onError,c=e.crossOrigin,o=e.sizes,u=e.ignoreFallback,d=(0,s.useState)("pending"),h=d[0],x=d[1];(0,s.useEffect)((function(){x(r?"loading":"pending")}),[r]);var f=(0,s.useRef)(),j=(0,s.useCallback)((function(){if(r){m();var e=new Image;e.src=r,c&&(e.crossOrigin=c),t&&(e.srcset=t),o&&(e.sizes=o),n&&(e.loading=n),e.onload=function(e){m(),x("loaded"),null==i||i(e)},e.onerror=function(e){m(),x("failed"),null==a||a(e)},f.current=e}}),[r,c,t,o,i,a,n]),m=function(){f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,l.Gw)((function(){if(!u)return"loading"===h&&j(),function(){m()}}),[h,j,u]),u?"loaded":h}(a({},e,{ignoreFallback:k})),v=a({ref:n,objectFit:j,objectPosition:f},k?w:(0,i.CE)(w,["onError","onLoad"]));return"loaded"!==b?o||s.createElement(t.m$.img,a({as:d,className:"chakra-image__placeholder",src:r},v)):s.createElement(t.m$.img,a({as:d,src:h,srcSet:x,crossOrigin:g,loading:m,className:"chakra-image"},v))}));i.Ts&&(h.displayName="Image")},162:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/walknote",function(){return r(4597)}])},603:function(e,n,r){"use strict";r.d(n,{P4:function(){return c},Et:function(){return o},Pg:function(){return u}});var t=r(5893),i=r(1664),s=r(5675),l=r(8527),a=r(917),c=function(e){var n=e.children,r=e.href,i=e.title,a=e.thumbnail;return(0,t.jsx)(l.xu,{w:"100%",textAlign:"center",children:(0,t.jsxs)(l.fG,{cursor:"pointer",children:[(0,t.jsx)(s.default,{src:a,alt:i,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,t.jsx)(l.AB,{href:r,target:"_blank",children:(0,t.jsx)(l.xv,{mt:2,children:i})}),(0,t.jsx)(l.xv,{fontSize:14,children:n})]})})},o=function(e){var n=e.children,r=e.id,a=e.title,c=e.thumbnail;return(0,t.jsx)(l.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(i.default,{href:"/works/".concat(r),children:(0,t.jsxs)(l.fG,{cursor:"pointer",children:[(0,t.jsx)(s.default,{src:c,alt:a,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(l.AB,{href:"/works/".concat(r),children:(0,t.jsx)(l.xv,{mt:2,fontSize:20,children:a})}),(0,t.jsx)(l.xv,{fontSize:14,children:n})]})})})},u=function(){return(0,t.jsx)(a.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(e,n,r){"use strict";var t=r(5893),i=r(9235),s=r(9008),l=r(603),a={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};n.Z=function(e){var n=e.children,r=e.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:a,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsxs)(s.default,{children:[(0,t.jsxs)("title",{children:[r," - Takuya Matsuyama"]}),(0,t.jsx)("meta",{name:"twitter:title",content:r}),(0,t.jsx)("meta",{property:"og:title",content:r})]}),n,(0,t.jsx)(l.Pg,{})]})})}},3562:function(e,n,r){"use strict";function t(){var e,n,r=(e=["\n  text-align: justify;\n  text-indent: 1em;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return t=function(){return r},r}var i=r(5934).Z.p(t());n.Z=i},3922:function(e,n,r){"use strict";r.d(n,{Dx:function(){return c},WZ:function(){return o},h_:function(){return u}});var t=r(5893),i=r(1664),s=r(8527),l=r(4651),a=r(9876),c=function(e){var n=e.children;return(0,t.jsxs)(s.xu,{children:[(0,t.jsx)(i.default,{href:"/works",children:(0,t.jsx)(s.rU,{children:"Works"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(a.XC,{})," "]}),(0,t.jsx)(s.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:n})]})},o=function(e){var n=e.src,r=e.alt;return(0,t.jsx)(l.Ee,{borderRadius:"lg",w:"full",src:n,alt:r,mb:4})},u=function(e){var n=e.children;return(0,t.jsx)(s.Ct,{colorScheme:"green",mr:2,children:n})}},4597:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return o}});var t=r(5893),i=r(8527),s=r(2857),l=r(9876),a=r(3922),c=r(3562),o=!0;n.default=function(){return(0,t.jsx)(s.Z,{title:"walknote",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(a.Dx,{children:["walknote ",(0,t.jsx)(i.Ct,{children:"2011-2016"})]}),(0,t.jsx)(c.Z,{children:"walknote recommends new music you may like based on your music preferences by recognizing your favorite songs stored in your device. You can listen to recommended music just like a radio!"}),(0,t.jsx)(c.Z,{children:"This service has been closed. Thank you for over 130,000 registered users!"}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(a.h_,{children:"Platform"}),(0,t.jsx)("span",{children:"iOS"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(a.h_,{children:"Blogpost"}),(0,t.jsxs)(i.rU,{href:"https://archive.craftz.dog/blog.odoruinu.net/2016/09/06/farewell-from-walknote/",children:["\u97f3\u697d\u767a\u6398\u30a2\u30d7\u30eawalknote\u30af\u30ed\u30fc\u30ba\u306e\u304a\u77e5\u3089\u305b"," ",(0,t.jsx)(l.h0,{mx:"2px"})]})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(a.h_,{children:"Stack"}),(0,t.jsx)("span",{children:"Objective-C, PHP, MongoDB"})]})]}),(0,t.jsx)(i.X6,{as:"h4",fontSize:16,my:6,children:(0,t.jsx)(i.M5,{children:"Media coverage"})}),(0,t.jsxs)(i.QI,{my:4,children:[(0,t.jsx)(i.HC,{children:(0,t.jsxs)(i.rU,{href:"http://renewal49.hateblo.jp/entry/20120710/1341925681",children:[(0,t.jsx)(i.Ct,{mr:2,children:"\u30ea\u30cb\u30e5\u30fc\u30a2\u30eb\u5f0f"}),"\u5f37\u529b\u3059\u304e\u3066\u7d39\u4ecb\u3057\u305d\u3073\u308c\u3066\u3044\u305f\u97f3\u697d\u597d\u304d\u306e\u305f\u3081\u306e\u795e\u30a2\u30d7\u30ea\u300ewalknote\u300f",(0,t.jsx)(l.h0,{mx:"2px"})]})}),(0,t.jsx)(i.HC,{children:(0,t.jsxs)(i.rU,{href:"http://www.appbank.net/2011/10/15/iphone-application/309349.php",children:[(0,t.jsx)(i.Ct,{mr:2,children:"appbank"}),"walknote: CD\u5c4b\u306e\u8a66\u8074\u6a5f\u304c\u3001\u81ea\u5206\u5411\u3051\u306b\u306a\u3063\u3066\u624b\u5143\u306b\u5230\u7740\u3002\u305d\u3093\u306a\u66f2\u63a2\u3057\u30a2\u30d7\u30ea\u3002\u7121\u6599\u3002",(0,t.jsx)(l.h0,{mx:"2px"})]})}),(0,t.jsxs)(i.HC,{children:[(0,t.jsxs)(i.rU,{href:"http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html",children:[(0,t.jsx)(i.Ct,{mr:2,children:"\u7537\u5b50\u30cf\u30c3\u30af"}),"[\u304a\u3059\u3059\u3081\u306e\u97f3\u697d\u3092\u30ec\u30b3\u30e1\u30f3\u30c9\uff01\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u518d\u751f\u3057\u3066\u304f\u308c\u308biPhone\u30a2\u30d7\u30ea\u300cwalknote\u300d\u304c\u7d20\u6575\u3002"]}),(0,t.jsx)(l.h0,{mx:"2px"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(i.Ct,{mr:2,children:"\u30bf\u30d6\u30ed\u30a4\u30c9"}),(0,t.jsx)(i.rU,{href:"http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html",children:"\u300cYOU\u3001\u3053\u308c\u8074\u3044\u3061\u3083\u3044\u306a\u3088\u300d\u81ea\u5206\u597d\u307f\u306e\u66f2\u304c\u52dd\u624b\u306b\u96c6\u307e\u308b\u97f3\u697d\u30d7\u30ec\u30fc\u30e4\u30fc\u300ewalknote\u300f"}),(0,t.jsx)(l.h0,{mx:"2px"})]})]}),(0,t.jsxs)(i.MI,{columns:2,gap:2,children:[(0,t.jsx)(a.WZ,{src:"/images/works/walknote_01.png",alt:"walknote"}),(0,t.jsx)(a.WZ,{src:"/images/works/walknote_02.png",alt:"walknote"})]}),(0,t.jsx)(a.WZ,{src:"/images/works/walknote_03.png",alt:"walknote"}),(0,t.jsx)(a.WZ,{src:"/images/works/walknote_04.png",alt:"walknote"}),(0,t.jsx)(a.WZ,{src:"/images/works/walknote_05.png",alt:"walknote"})]})})}}},function(e){e.O(0,[774,888,179],(function(){return n=162,e(e.s=n);var n}));var n=e.O();_N_E=n}]);