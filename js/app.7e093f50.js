(function(e){function t(t){for(var n,a,i=t[0],l=t[1],s=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,s||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,i=1;i<c.length;i++){var l=c[i];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},o={app:0},r=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/teloneio-calculator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},b383:function(e,t,c){},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function o(e,t,c,o,r,a){var i=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["c"])(i)}const r={};r.render=o;var a=r,i=c("6c02"),l={class:"container mt-4"},s={class:"columns"},u=Object(n["g"])("div",{class:"column"},null,-1),d={class:"column is-one-third"},p=Object(n["g"])("div",{class:"column"},null,-1);function f(e,t,c,o,r,a){var i=Object(n["t"])("Calculator");return Object(n["p"])(),Object(n["c"])("div",l,[Object(n["g"])("div",s,[u,Object(n["g"])("div",d,[Object(n["g"])(i)]),p])])}var b={class:"box"},O=Object(n["g"])("h1",{class:"title has-text-centered"},"Teloneio Calculator (Beta)",-1),j={class:"field"},v=Object(n["g"])("label",{class:"label"},"CIF",-1),h={class:"control has-icons-left"},g=Object(n["g"])("span",{class:"icon is-left"},[Object(n["g"])("i",{class:"fas fa-euro-sign"})],-1),m=Object(n["g"])("p",{class:"help"}," CIF: Αξία αντικειµένου + Έξοδα µεταφοράς + Ασφάλιστρα ",-1),y={class:"field"},x=Object(n["g"])("label",{class:"label"},"Αποστολή",-1),w={class:"field"},S={class:"control is-expanded has-icons-left"},C={class:"select is-fullwidth"},P=Object(n["e"])('<optgroup label="Standard"><option value="standard">Standard shipping</option></optgroup><optgroup label="Express" disabled><option value="dhl-express">DHL Express</option><option value="ems">EMS</option><option value="fedex">Fedex</option><option value="ups">UPS</option></optgroup>',2),F={class:"icon is-left"},_={class:"notification mt-4"},k={class:"is-size-6"},M={class:"is-size-6"},I=Object(n["g"])("hr",null,null,-1),T={class:"has-text-weight-bold is-size-5 "},z={key:0};function B(e,t,c,o,r,a){return Object(n["p"])(),Object(n["c"])("div",b,[O,Object(n["g"])("form",null,[Object(n["g"])("div",j,[v,Object(n["g"])("div",h,[Object(n["B"])(Object(n["g"])("input",{id:"totalCost",class:"input",type:"number",step:"any",min:"0.00","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.cif=t})},null,512),[[n["y"],e.cif,void 0,{number:!0}]]),g,m])]),Object(n["g"])("div",y,[x,Object(n["g"])("div",w,[Object(n["g"])("div",S,[Object(n["g"])("div",C,[Object(n["B"])(Object(n["g"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selected=t})},[P],512),[[n["x"],e.selected]]),Object(n["g"])("div",F,[Object(n["g"])("i",{class:e.courierIcon},null,2)])])])])])]),Object(n["g"])("div",_,[Object(n["g"])("div",k,"Φ.Π.Α. 24%: "+Object(n["v"])(e.vatFees.format()),1),Object(n["g"])("div",M,"Τέλος εκτελωνισμού: "+Object(n["v"])(e.clearance.format()),1),I,Object(n["g"])("div",T,[Object(n["f"])(" Σύνολο: "+Object(n["v"])(e.total.format())+" ",1),e.cif>150?(Object(n["p"])(),Object(n["c"])("span",z,"+ δασμούς")):Object(n["d"])("",!0)])])])}var E=c("72f9"),H=c.n(E),U=function(e){return H()(e,{symbol:"€",separator:".",decimal:","})},J=Object(n["h"])({name:"Calculator",data:function(){return{cif:0,vat:.24,selected:"standard"}},computed:{vatFees:function(){return this.cif>22?U(this.cif).multiply(this.vat):U(0)},clearance:function(){return this.cif<=22?U(0):this.cif>22&&this.cif<=150?U(15):this.cif>150&&this.cif<=500?U(20):this.cif>500&&this.cif<=1e3?U(25):U(50)},total:function(){return this.clearance.add(this.vatFees)},courierIcon:function(){return"standard"===this.selected?"fas fa-truck":"fas fa-shipping-fast"}},methods:{}});J.render=B;var V=J,D=Object(n["h"])({components:{Calculator:V},created:function(){document.title="TC - Home"}});D.render=f;var L=D,q=[{path:"/",name:"Home",component:L}],A=Object(i["a"])({history:Object(i["b"])("/teloneio-calculator/"),routes:q}),G=A;c("b383");Object(n["b"])(a).use(G).mount("#app")}});
//# sourceMappingURL=app.7e093f50.js.map