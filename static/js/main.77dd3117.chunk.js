(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{101:function(e,t,n){},161:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=(n(101),n(193)),s=n(197),l=n(199),d=n(24),u=n(31),j=n(13),b=n(32),p=n.n(b),h=n(82),g=n.n(h),m=n(38),f=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},O=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},v=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},y=n(3),k=Object(a.createContext)(),C=function(e){var t=e.children,n=Object(a.useState)("INR"),r=Object(j.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)("\u20b9"),s=Object(j.a)(o,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){"INR"===c?d("\u20b9"):"USD"===c&&d("$")}),[c]),Object(y.jsx)(k.Provider,{value:{currency:c,setCurrency:i,symbol:l},children:t})},w=function(){return Object(a.useContext)(k)},_=n(213),M=n(86),S=n(196),N=n(215),D=n(202),F=n(164),I=n(203),B=n(204),T=n(205),E=n(206),P=n(207),R=n(208),W=n(16);function H(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function L(){var e,t=Object(a.useState)([]),n=Object(j.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),b=Object(j.a)(i,2),h=b[0],g=b[1],m=Object(a.useState)(""),O=Object(j.a)(m,2),x=O[0],v=O[1],k=Object(a.useState)(1),C=Object(j.a)(k,2),L=C[0],A=C[1],z=w(),U=z.currency,J=z.symbol,G=Object(o.a)({row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}})(),Y=Object(W.e)(),$=Object(M.a)({palette:{primary:{main:"#fff"},type:"dark"}}),q=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,p.a.get(f(U));case 3:t=e.sent,n=t.data,console.log(n),c(n),g(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){q()}),[U]);var K=function(){return r.filter((function(e){return e.name.toLowerCase().includes(x)||e.symbol.toLowerCase().includes(x)}))};return Object(y.jsx)(S.a,{theme:$,children:Object(y.jsxs)(s.a,{style:{textAlign:"center"},children:[Object(y.jsx)(l.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Cryptocurrency Prices by Market Cap"}),Object(y.jsx)(N.a,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return v(e.target.value)}}),Object(y.jsx)(D.a,{component:F.a,children:h?Object(y.jsx)(I.a,{style:{backgroundColor:"gold"}}):Object(y.jsxs)(B.a,{"aria-label":"simple table",children:[Object(y.jsx)(T.a,{style:{backgroundColor:"#EEBC1D"},children:Object(y.jsx)(E.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(y.jsx)(P.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(y.jsx)(R.a,{children:K().slice(10*(L-1),10*(L-1)+10).map((function(e){var t=e.price_change_percentage_24h>0;return Object(y.jsxs)(E.a,{onClick:function(){return Y.push("/coins/".concat(e.id))},className:G.row,children:[Object(y.jsxs)(P.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(y.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(y.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(y.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),Object(y.jsxs)(P.a,{align:"right",children:[J," ",H(e.current_price.toFixed(2))]}),Object(y.jsxs)(P.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(y.jsxs)(P.a,{align:"right",children:[J," ",H(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),Object(y.jsx)(_.a,{count:((null===(e=K())||void 0===e?void 0:e.length)/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:G.pagination},onChange:function(e,t){A(t),window.scroll(0,450)}})]})})}var A=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],c=w(),i=c.currency,s=c.symbol,l=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(v(i));case 2:t=e.sent,n=t.data,console.log(n),r(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[i]);var b=Object(o.a)((function(e){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}))(),h=n.map((function(e){var t,n=(null===e||void 0===e?void 0:e.price_change_percentage_24h)>=0;return Object(y.jsxs)(m.b,{className:b.carouselItem,to:"/coins/".concat(e.id),children:[Object(y.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(y.jsxs)("span",{children:[null===e||void 0===e?void 0:e.symbol,"\xa0",Object(y.jsxs)("span",{style:{color:n>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]})]}),Object(y.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[s," ",H(null===e||void 0===e?void 0:e.current_price.toFixed(2))]})]})}));return Object(y.jsx)("div",{className:b.carousel,children:Object(y.jsx)(g.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},items:h,autoPlay:!0})})},z=Object(o.a)((function(e){return{banner:{backgroundImage:"url(./banner2.jpg)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}}));var U=function(){var e=z();return Object(y.jsx)("div",{className:e.banner,children:Object(y.jsxs)(s.a,{className:e.bannerContent,children:[Object(y.jsxs)("div",{className:e.tagline,children:[Object(y.jsx)(l.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"Crypto Hunter"}),Object(y.jsx)(l.a,{variant:"subtitle2",style:{color:"darkgrey",textTransform:"capitalize",fontFamily:"Montserrat"},children:"Get all the Info regarding your favorite Crypto Currency"})]}),Object(y.jsx)(A,{})]})})},J=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(U,{}),Object(y.jsx)(L,{})]})},G=(n(161),n(7)),Y=n(87),$=n(209),q=function(e){var t=e.children,n=e.selected,a=e.onClick,r=Object(o.a)({selectbutton:{border:"1px solid gold",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:n?"gold":"",color:n?"black":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"gold",color:"black"},width:"22%"}})();return Object(y.jsx)("span",{onClick:a,className:r.selectbutton,children:t})},K=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],Q=function(e){var t=e.coin,n=Object(a.useState)(),r=Object(j.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(1),l=Object(j.a)(s,2),b=l[0],h=l[1],g=w().currency,m=Object(a.useState)(!1),f=Object(j.a)(m,2),O=f[0],v=f[1],k=Object(o.a)((function(e){return{container:Object(G.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),C=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var n,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(x(t.id,b,g));case 2:n=e.sent,a=n.data,v(!0),i(a.prices);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(t),Object(a.useEffect)((function(){C()}),[b]);var _=Object(M.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(y.jsx)(S.a,{theme:_,children:Object(y.jsx)("div",{className:k.container,children:!c|!1===O?Object(y.jsx)($.a,{style:{color:"gold"},size:250,thickness:1}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Y.a,{data:{labels:c.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===b?n:t.toLocaleDateString()})),datasets:[{data:c.map((function(e){return e[1]})),label:"Price ( Past ".concat(b," Days ) in ").concat(g),borderColor:"#EEBC1D"}]},options:{elements:{point:{radius:1}}}}),Object(y.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:K.map((function(e){return Object(y.jsx)(q,{onClick:function(){h(e.value),v(!1)},selected:e.value===b,children:e.label},e.value)}))})]})})})},V=function(){var e=Object(W.f)().id,t=Object(a.useState)(),n=Object(j.a)(t,2),r=n[0],c=n[1],i=w(),s=i.currency,b=i.symbol,h=function(){var t=Object(u.a)(Object(d.a)().mark((function t(){var n,a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(O(e));case 2:n=t.sent,a=n.data,c(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){h()}),[]);var g=Object(o.a)((function(e){var t,n;return{container:Object(G.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(t={width:"30%"},Object(G.a)(t,e.breakpoints.down("md"),{width:"100%"}),Object(G.a)(t,"display","flex"),Object(G.a)(t,"flexDirection","column"),Object(G.a)(t,"alignItems","center"),Object(G.a)(t,"marginTop",25),Object(G.a)(t,"borderRight","2px solid grey"),t),heading:{fontWeight:"bold",marginBottom:20,fontFamily:"Montserrat"},description:{width:"100%",fontFamily:"Montserrat",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(n={alignSelf:"start",padding:25,paddingTop:10,width:"100%"},Object(G.a)(n,e.breakpoints.down("md"),{display:"flex",justifyContent:"space-around"}),Object(G.a)(n,e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center"}),Object(G.a)(n,e.breakpoints.down("xs"),{alignItems:"start"}),n)}}))();return r?Object(y.jsxs)("div",{className:g.container,children:[Object(y.jsxs)("div",{className:g.sidebar,children:[Object(y.jsx)("img",{src:null===r||void 0===r?void 0:r.image.large,alt:null===r||void 0===r?void 0:r.name,height:"200",style:{marginBottom:20}}),Object(y.jsx)(l.a,{variant:"h3",className:g.heading,children:null===r||void 0===r?void 0:r.name}),Object(y.jsx)(l.a,{variant:"subtitle1",className:g.description}),Object(y.jsxs)("div",{className:g.marketData,children:[Object(y.jsxs)("span",{style:{display:"flex"},children:[Object(y.jsx)(l.a,{variant:"h5",className:g.heading,children:"Rank:"}),"\xa0 \xa0",Object(y.jsx)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:H(null===r||void 0===r?void 0:r.market_cap_rank)})]}),Object(y.jsxs)("span",{style:{display:"flex"},children:[Object(y.jsx)(l.a,{variant:"h5",className:g.heading,children:"Current Price:"}),"\xa0 \xa0",Object(y.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[b," ",H(null===r||void 0===r?void 0:r.market_data.current_price[s.toLowerCase()])]})]}),Object(y.jsxs)("span",{style:{display:"flex"},children:[Object(y.jsx)(l.a,{variant:"h5",className:g.heading,children:"Market Cap:"}),"\xa0 \xa0",Object(y.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[b," ",H(null===r||void 0===r?void 0:r.market_data.market_cap[s.toLowerCase()].toString().slice(0,-6)),"M"]})]})]})]}),Object(y.jsx)(Q,{coin:r})]}):Object(y.jsx)(I.a,{style:{backgroundColor:"gold"}})},X=n(210),Z=n(211),ee=n(212),te=n(217),ne=Object(o.a)((function(e){return{title:{flex:1,color:"gold",fontFamily:"Montserrat",fontWeight:"bold",cursor:"pointer"}}})),ae=Object(M.a)({palette:{primary:{main:"#fff"},type:"dark"}});var re=function(){var e=ne(),t=w(),n=t.currency,a=t.setCurrency,r=Object(W.e)();return Object(y.jsx)(S.a,{theme:ae,children:Object(y.jsx)(X.a,{color:"transparent",position:"static",children:Object(y.jsx)(s.a,{children:Object(y.jsxs)(Z.a,{children:[Object(y.jsx)(l.a,{onClick:function(){return r.push("/")},variant:"h6",className:e.title,children:"Crypto Hunter"}),Object(y.jsxs)(ee.a,{variant:"outlined",labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,style:{width:100,height:40,marginLeft:15},onChange:function(e){return a(e.target.value)},children:[Object(y.jsx)(te.a,{value:"USD",children:"USD"}),Object(y.jsx)(te.a,{value:"INR",children:"INR"})]})]})})})})},ce=Object(o.a)((function(){return{App:{backgroundColor:"#14161a",color:"white",minHeight:"100vh"}}}));var ie=function(){var e=ce();return Object(y.jsx)(m.a,{children:Object(y.jsxs)("div",{className:e.App,children:[Object(y.jsx)(re,{}),Object(y.jsx)(W.a,{path:"/",component:J,exact:!0}),Object(y.jsx)(W.a,{path:"/coins/:id",component:V,exact:!0})]})})};n(162);i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(C,{children:Object(y.jsx)(ie,{})})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.77dd3117.chunk.js.map