(this.webpackJsonpcrusher=this.webpackJsonpcrusher||[]).push([[0],[,,,,,,function(t,e,n){t.exports=n.p+"static/media/016-banana.cfa17003.svg"},function(t,e,n){t.exports=n.p+"static/media/011-core.43b7ec96.svg"},function(t,e,n){t.exports=n.p+"static/media/015-can.6969b894.svg"},function(t,e,n){t.exports=n.p+"static/media/061-rubbish.57ec0c81.svg"},function(t,e,n){t.exports=n.p+"static/media/052-teddy.c391276b.svg"},function(t,e,n){t.exports=n.p+"static/media/050-milk carton.203d74bf.svg"},function(t,e,n){t.exports=n.p+"static/media/049-jumper.9531f21c.svg"},function(t,e,n){t.exports=n.p+"static/media/047-bulb.40e5737d.svg"},function(t,e,n){t.exports=n.p+"static/media/017-bones.2c149c9b.svg"},function(t,e,n){t.exports=n.p+"static/media/014-bottle.8cc28b50.svg"},function(t,e,n){t.exports=n.p+"static/media/green.06a56446.svg"},function(t,e,n){t.exports=n.p+"static/media/red.6d7dd2fa.svg"},function(t,e,n){t.exports=n.p+"static/media/blue.2272066c.svg"},function(t,e,n){t.exports=n.p+"static/media/orange.ad7ab918.svg"},function(t,e,n){t.exports=n.p+"static/media/black.85d479ae.svg"},function(t,e,n){t.exports=n.p+"static/media/brown.fa74ac1e.svg"},function(t,e,n){t.exports=n.p+"static/media/yellow.6131dcd5.svg"},function(t,e,n){t.exports=n(30)},,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),i=(n(29),n(2)),u=n(1),l=n(3);function s(t){t.animated,t.type;var e=t.name;return o.a.createElement("div",{style:{width:"20vw",height:"20vw",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("img",{src:e,style:{width:"70%",height:"70%",animation:"fall ".concat(.3,"s ease-in 0s")}}))}var m=n(6),p=n.n(m),f=n(7),d=n.n(f),g=n(8),v=n.n(g),h=n(9),y=n.n(h),b=n(10),w=n.n(b),x=n(11),j=n.n(x),O=n(12),E=n.n(O),k=n(13),M=n.n(k),C=n(14),S=n.n(C),I=n(15),R=n.n(I),B=n(16),T=n.n(B),A=n(17),J=n.n(A),W=n(18),q=n.n(W),z=n(19),D=n.n(z),F=n(20),$=n.n(F),G=n(21),H=n.n(G),K=n(22),L=n.n(K),N="papel y carton",P="normal",Q=[{type:"vidrio",color:T.a,porcentage:0,state:P},{type:N,color:q.a,porcentage:0,state:P},{type:"plastico",color:L.a,porcentage:0,state:P},{type:"metal",color:J.a,porcentage:0,state:P},{type:"textil",color:D.a,porcentage:0,state:P},{type:"escombro",color:$.a,porcentage:0,state:P},{type:"organico",color:H.a,porcentage:0,state:P}],U=[{name:p.a,type:"organico"},{name:d.a,type:"organico"},{name:v.a,type:"metal"},{name:y.a,type:"escombro"},{name:w.a,type:"textil"},{name:j.a,type:N},{name:E.a,type:"textil"},{name:M.a,type:"vidrio"},{name:S.a,type:"organico"},{name:R.a,type:"vidrio"}],V=["organico",N,"textil"],X=function(t){return Object(l.a)({animated:t},function(t){var e=U.filter((function(e){return t.find((function(t){return t===e.type}))}));return Object(l.a)({},e[Math.floor(Math.random()*e.length)],{key:Math.random()+""})}(V))},Y=new Array(5).fill().map((function(){return new Array(Math.floor(4*Math.random())+3).fill().map((function(){return X()}))}));var Z=function(){var t=Object(a.useState)(Y),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),l=Object(u.a)(c,2),m=l[0],p=l[1],f=Object(a.useState)(0),d=Object(u.a)(f,2),g=d[0],v=d[1],h=Object(a.useState)(),y=Object(u.a)(h,2),b=y[0],w=y[1],x=Object(a.useState)(!1),j=Object(u.a)(x,2),O=j[0],E=j[1],k=Object(a.useRef)(n);k.current=n;var M=Object(a.useRef)(b);M.current=b;var C=Object(a.useRef)(g);C.current=g,Object(a.useEffect)((function(){var t=setInterval((function(){var t=k.current.map((function(t,e){return{lenght:t.length,column:e}})).sort((function(t,e){return Math.random()-.5})).sort((function(t,e){return t.lenght-e.lenght}));_(t,k.current,r,S,C.current)}),2e3);w(t)}),[]);var S=function(){clearInterval(M.current),setTimeout((function(){return alert("perdiste")}),350)};return O?o.a.createElement("div",{style:{height:"100vh",display:"flex",backgroundColor:"white"}},o.a.createElement("div",{style:{position:"absolute",display:"flex",width:"100%",justifyContent:"center"}},o.a.createElement("div",{style:{width:"30%"}},o.a.createElement("p",null,g)),Q.filter((function(t){return V.find((function(e){return e===t.type}))})).map((function(t){var e=t.type,a=t.color;return o.a.createElement("div",{key:e,onClick:function(){return function(t){if(!(m.length<2||n[m[0].column][m[0].row].type!==t)){var e=n.map((function(t,e){return t.filter((function(t,n){return!m.find((function(t){var a=t.column,o=t.row;return a===e&&o===n}))}))||[]}));v(g+10*Math.pow(m.length-1,2)),p([]),r(e)}}(e)},style:{width:"20vw",height:"20vw"}},o.a.createElement("img",{src:a,style:{width:"70%",height:"70%"}}),o.a.createElement("p",null,e))}))),o.a.createElement("div",{style:{display:"flex"}},n.map((function(t,e){return o.a.createElement("div",{key:"column-".concat(e),style:{borderTop:"1px solid red",width:"20vw",height:"120vw",display:"flex",flexDirection:"column-reverse",marginBottom:0,marginTop:"auto"}},t.map((function(t,a){return o.a.createElement("div",{key:t.key,style:{opacity:m.find((function(t){return e===t.column&&a===t.row}))?.5:1},onClick:function(){!function(t){if(!(m.length>0)||m.find((function(e){var n=e.column,a=e.row;if(!(n<t.column-1||n>t.column+1)&&!(a<t.row-1||a>t.row+1)&&(a===t.row||n===t.column))return!0}))){var e=m[m.length-1];if(m.length>0&&e.column===t.column&&e.row===t.row)return p(m.slice(0,m.length-1));m.find((function(e){var n=e.column,a=e.row;return t.column===n&&t.row===a}))||m[0]&&n[t.column][t.row].type!==n[m[0].column][m[0].row].type||p([].concat(Object(i.a)(m),[t]))}}({column:e,row:a})}},o.a.createElement(s,t))})))})))):o.a.createElement("button",{onClick:function(){document.body.requestFullscreen(),E(!0)}},"Empezar el juego!")},_=function(t,e,n,a,o){var r=Object(i.a)(e);console.log(o);var c=Math.floor(o/1e3)+1;t.map((function(t){t.length;var n=t.column;if(c>0){var a=[].concat(Object(i.a)(e[n]),[X(!0)]);r[n]=a,c--}})),console.log(r),r.find((function(t){return t.length>6}))&&a(!0),n(r)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.86c349f8.chunk.js.map