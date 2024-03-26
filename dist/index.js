(()=>{"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},t={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},e=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,t,e){return Math.min(Math.max(n,t),e)}function o(n,t){return n.indexOf(t)>-1}function u(n,t){return n.apply(null,t)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(e){return!n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function c(n){var t=/\(([^)]+)\)/.exec(n);return t?t[1].split(",").map((function(n){return parseFloat(n)})):[]}function s(n,t){var e=c(n),o=a(i.und(e[0])?1:e[0],.1,100),u=a(i.und(e[1])?100:e[1],.1,100),s=a(i.und(e[2])?10:e[2],.1,100),f=a(i.und(e[3])?0:e[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,h=d<1?(d*l-f)/p:-f+l;function v(n){var e=t?t*n/1e3:n;return e=d<1?Math.exp(-e*d*l)*(1*Math.cos(p*e)+h*Math.sin(p*e)):(1+h*e)*Math.exp(-e*l),0===n||1===n?n:1-e}return t?v:function(){var t=r.springs[n];if(t)return t;for(var e=1/6,a=0,o=0;;)if(1===v(a+=e)){if(++o>=16)break}else o=0;var u=a*e*1e3;return r.springs[n]=u,u}}function f(n){return void 0===n&&(n=10),function(t){return Math.ceil(a(t,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=.1;function t(n,t){return 1-3*t+3*n}function e(n,t){return 3*t-6*n}function r(n){return 3*n}function a(n,a,o){return((t(a,o)*n+e(a,o))*n+r(a))*n}function o(n,a,o){return 3*t(a,o)*n*n+2*e(a,o)*n+r(a)}return function(t,e,r,u){if(0<=t&&t<=1&&0<=r&&r<=1){var i=new Float32Array(11);if(t!==e||r!==u)for(var c=0;c<11;++c)i[c]=a(c*n,t,r);return function(c){return t===e&&r===u||0===c||1===c?c:a(function(e){for(var u=0,c=1;10!==c&&i[c]<=e;++c)u+=n;--c;var s=u+(e-i[c])/(i[c+1]-i[c])*n,f=o(s,t,r);return f>=.001?function(n,t,e,r){for(var u=0;u<4;++u){var i=o(t,e,r);if(0===i)return t;t-=(a(t,e,r)-n)/i}return t}(e,s,t,r):0===f?s:function(n,t,e,r,o){var u,i,c=0;do{(u=a(i=t+(e-t)/2,r,o)-n)>0?e=i:t=i}while(Math.abs(u)>1e-7&&++c<10);return i}(e,u,u+n,t,r)}(c),e,u)}}}}(),h=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var t,e=4;n<((t=Math.pow(2,--e))-1)/11;);return 1/Math.pow(4,3-e)-7.5625*Math.pow((3*t-2)/22-n,2)}},Elastic:function(n,t){void 0===n&&(n=1),void 0===t&&(t=.5);var e=a(n,1,10),r=a(t,.1,2);return function(n){return 0===n||1===n?n:-e*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/e))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach((function(n,t){d[n]=function(){return function(n){return Math.pow(n,t+2)}}})),Object.keys(d).forEach((function(n){var t=d[n];l["easeIn"+n]=t,l["easeOut"+n]=function(n,e){return function(r){return 1-t(n,e)(1-r)}},l["easeInOut"+n]=function(n,e){return function(r){return r<.5?t(n,e)(2*r)/2:1-t(n,e)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,e){return function(r){return r<.5?(1-t(n,e)(1-2*r))/2:(t(n,e)(2*r-1)+1)/2}}})),l);function v(n,t){if(i.fnc(n))return n;var e=n.split("(")[0],r=h[e],a=c(n);switch(e){case"spring":return s(n,t);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,t){for(var e=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<e;o++)if(o in n){var u=n[o];t.call(r,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce((function(n,t){return n.concat(i.arr(t)?y(t):t)}),[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,t){return n.some((function(n){return n===t}))}function w(n){var t={};for(var e in n)t[e]=n[e];return t}function x(n,t){var e=w(n);for(var r in n)e[r]=t.hasOwnProperty(r)?t[r]:n[r];return e}function k(n,t){var e=w(n);for(var r in t)e[r]=i.und(n[r])?t[r]:n[r];return e}function P(n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(t)return t[1]}function C(n,t){return i.fnc(n)?n(t.target,t.id,t.total):n}function O(n,t){return n.getAttribute(t)}function I(n,t,e){if(M([e,"deg","rad","turn"],P(t)))return t;var a=r.CSS[t+e];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+e;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(t);return r.CSS[t+e]=s,s}function B(n,t,e){if(t in n.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[t]||getComputedStyle(n).getPropertyValue(r)||"0";return e?I(n,a,e):a}}function D(n,t){return i.dom(n)&&!i.inp(n)&&(!i.nil(O(n,t))||i.svg(n)&&n[t])?"attribute":i.dom(n)&&M(e,t)?"transform":i.dom(n)&&"transform"!==t&&B(n,t)?"css":null!=n[t]?"object":void 0}function T(n){if(i.dom(n)){for(var t,e=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(e);)a.set(t[1],t[2]);return a}}function E(n,t,e,r){switch(D(n,t)){case"transform":return function(n,t,e,r){var a=o(t,"scale")?1:0+function(n){return o(n,"translate")||"perspective"===n?"px":o(n,"rotate")||o(n,"skew")?"deg":void 0}(t),u=T(n).get(t)||a;return e&&(e.transforms.list.set(t,u),e.transforms.last=t),r?I(n,u,r):u}(n,t,r,e);case"css":return B(n,t,e);case"attribute":return O(n,t);default:return n[t]||0}}function A(n,t){var e=/^(\*=|\+=|-=)/.exec(n);if(!e)return n;var r=P(n)||0,a=parseFloat(t),o=parseFloat(n.replace(e[0],""));switch(e[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function F(n,t){if(i.col(n))return function(n){return i.rgb(n)?(e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=n))?"rgba("+e[1]+",1)":t:i.hex(n)?function(n){var t=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,t,e,r){return t+t+e+e+r+r})),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+",1)"}(n):i.hsl(n)?function(n){var t,e,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+6*(t-n)*e:e<.5?t:e<2/3?n+(t-n)*(2/3-e)*6:n}if(0==u)t=e=r=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;t=s(l,f,o+1/3),e=s(l,f,o),r=s(l,f,o-1/3)}return"rgba("+255*t+","+255*e+","+255*r+","+c+")"}(n):void 0;var t,e}(n);if(/\s/g.test(n))return n;var e=P(n),r=e?n.substr(0,n.length-e.length):n;return t?r+t:r}function L(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function S(n){for(var t,e=n.points,r=0,a=0;a<e.numberOfItems;a++){var o=e.getItem(a);a>0&&(r+=L(t,o)),t=o}return r}function N(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*O(n,"r")}(n);case"rect":return function(n){return 2*O(n,"width")+2*O(n,"height")}(n);case"line":return function(n){return L({x:O(n,"x1"),y:O(n,"y1")},{x:O(n,"x2"),y:O(n,"y2")})}(n);case"polyline":return S(n);case"polygon":return function(n){var t=n.points;return S(n)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}(n)}}function j(n,t){var e=t||{},r=e.el||function(n){for(var t=n.parentNode;i.svg(t)&&i.svg(t.parentNode);)t=t.parentNode;return t}(n),a=r.getBoundingClientRect(),o=O(r,"viewBox"),u=a.width,c=a.height,s=e.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:u,h:c,vW:s[2],vH:s[3]}}function q(n,t,e){function r(e){void 0===e&&(e=0);var r=t+e>=1?t+e:0;return n.el.getPointAtLength(r)}var a=j(n.el,n.svg),o=r(),u=r(-1),i=r(1),c=e?1:a.w/a.vW,s=e?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function H(n,t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=F(i.pth(n)?n.totalLength:n,t)+"";return{original:r,numbers:r.match(e)?r.match(e).map(Number):[0],strings:i.str(n)||t?r.split(e):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],(function(n,t,e){return e.indexOf(n)===t}))}function V(n){var t=W(n);return t.map((function(n,e){return{target:n,id:e,total:t.length,transforms:{list:T(n)}}}))}function $(n,t){var e=w(t);if(/^spring/.test(e.easing)&&(e.duration=s(e.easing)),i.arr(n)){var r=n.length;2!==r||i.obj(n[0])?i.fnc(t.duration)||(e.duration=t.duration/r):n={value:n}}var a=i.arr(n)?n:[n];return a.map((function(n,e){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=e?0:t.delay),i.und(r.endDelay)&&(r.endDelay=e===a.length-1?t.endDelay:0),r})).map((function(n){return k(n,e)}))}var X={css:function(n,t,e){return n.style[t]=e},attribute:function(n,t,e){return n.setAttribute(t,e)},object:function(n,t,e){return n[t]=e},transform:function(n,t,e,r,a){if(r.list.set(t,e),t===r.last||a){var o="";r.list.forEach((function(n,t){o+=t+"("+n+") "})),n.style.transform=o}}};function Y(n,t){V(n).forEach((function(n){for(var e in t){var r=C(t[e],n),a=n.target,o=P(r),u=E(a,e,o,n),i=A(F(r,o||P(u)),u),c=D(a,e);X[c](a,e,i,n.transforms,!0)}}))}function Z(n,t){return m(y(n.map((function(n){return t.map((function(t){return function(n,t){var e=D(n.target,t.name);if(e){var r=function(n,t){var e;return n.tweens.map((function(r){var a=function(n,t){var e={};for(var r in n){var a=C(n[r],t);i.arr(a)&&1===(a=a.map((function(n){return C(n,t)}))).length&&(a=a[0]),e[r]=a}return e.duration=parseFloat(e.duration),e.delay=parseFloat(e.delay),e}(r,t),o=a.value,u=i.arr(o)?o[1]:o,c=P(u),s=E(t.target,n.name,c,t),f=e?e.to.original:s,l=i.arr(o)?o[0]:f,d=P(l)||P(s),p=c||d;return i.und(u)&&(u=f),a.from=H(l,p),a.to=H(A(u,l),p),a.start=e?e.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=v(a.easing,a.duration),a.isPath=i.pth(o),a.isPathTargetInsideSVG=a.isPath&&i.svg(t.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),e=a,a}))}(t,n),a=r[r.length-1];return{type:e,property:t.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,t)}))}))),(function(n){return!i.und(n)}))}function z(n,t){var e=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=e?Math.max.apply(Math,n.map((function(n){return r(n)+n.duration}))):t.duration,a.delay=e?Math.min.apply(Math,n.map((function(n){return r(n)+n.delay}))):t.delay,a.endDelay=e?a.duration-Math.max.apply(Math,n.map((function(n){return r(n)+n.duration-n.endDelay}))):t.endDelay,a}var G=0,Q=[],_=function(){var n;function t(e){for(var r=Q.length,a=0;a<r;){var o=Q[a];o.paused?(Q.splice(a,1),r--):(o.tick(e),a++)}n=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){J.suspendWhenDocumentHidden&&(R()?n=cancelAnimationFrame(n):(Q.forEach((function(n){return n._onDocumentVisibility()})),_()))})),function(){n||R()&&J.suspendWhenDocumentHidden||!(Q.length>0)||(n=requestAnimationFrame(t))}}();function R(){return!!document&&document.hidden}function J(e){void 0===e&&(e={});var r,o=0,u=0,c=0,s=0,f=null;function l(n){var t=window.Promise&&new Promise((function(n){return f=n}));return n.finished=t,t}var d=function(e){var r=x(n,e),a=x(t,e),o=function(n,t){var e=[],r=t.keyframes;for(var a in r&&(t=k(function(n){for(var t=m(y(n.map((function(n){return Object.keys(n)}))),(function(n){return i.key(n)})).reduce((function(n,t){return n.indexOf(t)<0&&n.push(t),n}),[]),e={},r=function(r){var a=t[r];e[a]=n.map((function(n){var t={};for(var e in n)i.key(e)?e==a&&(t.value=n[e]):t[e]=n[e];return t}))},a=0;a<t.length;a++)r(a);return e}(r),t)),t)i.key(a)&&e.push({name:a,tweens:$(t[a],n)});return e}(a,e),u=V(e.targets),c=Z(u,o),s=z(c,a),f=G;return G++,k(r,{id:f,children:[],animatables:u,animations:c,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(e);function p(){var n=d.direction;"alternate"!==n&&(d.direction="normal"!==n?"normal":"reverse"),d.reversed=!d.reversed,r.forEach((function(n){return n.reversed=d.reversed}))}function h(n){return d.reversed?d.duration-n:n}function v(){o=0,u=h(d.currentTime)*(1/J.speed)}function g(n,t){t&&t.seek(n-t.timelineOffset)}function b(n){for(var t=0,e=d.animations,r=e.length;t<r;){var o=e[t],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,(function(t){return n<t.end}))[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),p=s.to.strings,h=s.round,v=[],g=s.to.numbers.length,y=void 0,b=0;b<g;b++){var M=void 0,w=s.to.numbers[b],x=s.from.numbers[b]||0;M=s.isPath?q(s.value,l*w,s.isPathTargetInsideSVG):x+l*(w-x),h&&(s.isColor&&b>2||(M=Math.round(M*h)/h)),v.push(M)}var k=p.length;if(k){y=p[0];for(var P=0;P<k;P++){p[P];var C=p[P+1],O=v[P];isNaN(O)||(y+=C?O+C:O+" ")}}else y=v[0];X[o.type](u.target,o.property,y,u.transforms),o.currentValue=y,t++}}function M(n){d[n]&&!d.passThrough&&d[n](d)}function w(n){var t=d.duration,e=d.delay,i=t-d.endDelay,v=h(n);d.progress=a(v/t*100,0,100),d.reversePlayback=v<d.currentTime,r&&function(n){if(d.reversePlayback)for(var t=s;t--;)g(n,r[t]);else for(var e=0;e<s;e++)g(n,r[e])}(v),!d.began&&d.currentTime>0&&(d.began=!0,M("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,M("loopBegin")),v<=e&&0!==d.currentTime&&b(0),(v>=i&&d.currentTime!==t||!t)&&b(t),v>e&&v<i?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,M("changeBegin")),M("change"),b(v)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,M("changeComplete")),d.currentTime=a(v,0,t),d.began&&M("update"),n>=t&&(u=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(o=c,M("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&p()):(d.paused=!0,d.completed||(d.completed=!0,M("loopComplete"),M("complete"),!d.passThrough&&"Promise"in window&&(f(),l(d)))))}return l(d),d.reset=function(){var n=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===n,d.remaining=d.loop,r=d.children;for(var t=s=r.length;t--;)d.children[t].reset();(d.reversed&&!0!==d.loop||"alternate"===n&&1===d.loop)&&d.remaining++,b(d.reversed?d.duration:0)},d._onDocumentVisibility=v,d.set=function(n,t){return Y(n,t),d},d.tick=function(n){c=n,o||(o=c),w((c+(u-o))*J.speed)},d.seek=function(n){w(h(n))},d.pause=function(){d.paused=!0,v()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,Q.push(d),v(),_())},d.reverse=function(){p(),d.completed=!d.reversed,v()},d.restart=function(){d.reset(),d.play()},d.remove=function(n){U(W(n),d)},d.reset(),d.autoplay&&d.play(),d}function K(n,t){for(var e=t.length;e--;)M(n,t[e].animatable.target)&&t.splice(e,1)}function U(n,t){var e=t.animations,r=t.children;K(n,e);for(var a=r.length;a--;){var o=r[a],u=o.animations;K(n,u),u.length||o.children.length||r.splice(a,1)}e.length||r.length||t.pause()}J.version="3.2.1",J.speed=1,J.suspendWhenDocumentHidden=!0,J.running=Q,J.remove=function(n){for(var t=W(n),e=Q.length;e--;)U(t,Q[e])},J.get=E,J.set=Y,J.convertPx=I,J.path=function(n,t){var e=i.str(n)?g(n)[0]:n,r=t||100;return function(n){return{property:n,el:e,svg:j(e),totalLength:N(e)*(r/100)}}},J.setDashoffset=function(n){var t=N(n);return n.setAttribute("stroke-dasharray",t),t},J.stagger=function(n,t){void 0===t&&(t={});var e=t.direction||"normal",r=t.easing?v(t.easing):null,a=t.grid,o=t.axis,u=t.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,h=P(l?n[1]:n)||0,g=t.start||0+(l?d:0),m=[],y=0;return function(n,t,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var v=0;v<i;v++){if(a){var b=s?(a[0]-1)/2:u%a[0],M=s?(a[1]-1)/2:Math.floor(u/a[0]),w=b-v%a[0],x=M-Math.floor(v/a[0]),k=Math.sqrt(w*w+x*x);"x"===o&&(k=-w),"y"===o&&(k=-x),m.push(k)}else m.push(Math.abs(u-v));y=Math.max.apply(Math,m)}r&&(m=m.map((function(n){return r(n/y)*y}))),"reverse"===e&&(m=m.map((function(n){return o?n<0?-1*n:-n:Math.abs(y-n)})))}return g+(l?(p-d)/y:d)*(Math.round(100*m[t])/100)+h}},J.timeline=function(n){void 0===n&&(n={});var e=J(n);return e.duration=0,e.add=function(r,a){var o=Q.indexOf(e),u=e.children;function c(n){n.passThrough=!0}o>-1&&Q.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(r,x(t,n));f.targets=f.targets||n.targets;var l=e.duration;f.autoplay=!1,f.direction=e.direction,f.timelineOffset=i.und(a)?l:A(a,l),c(e),e.seek(f.timelineOffset);var d=J(f);c(d),u.push(d);var p=z(u,n);return e.delay=p.delay,e.endDelay=p.endDelay,e.duration=p.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},J.easing=v,J.penner=h,J.random=function(n,t){return Math.floor(Math.random()*(t-n+1))+n};const nn=J,tn=document.getElementById("tiles");let en=0,rn=0,an=!1;const on=n=>{Array.from(Array(n)).map(((n,t)=>{tn&&tn.appendChild((n=>{const t=document.createElement("div");return t.classList.add("tile"),t.style.opacity=an?"0":"1",t.onclick=()=>(n=>{an=!an,document.body.classList.toggle("toggled"),nn({targets:".tile",opacity:an?0:1,delay:nn.stagger(50,{grid:[en,rn],from:n})})})(n),t})(t))}))},un=()=>{if(!tn)return;tn.innerHTML="";const n=document.body.clientWidth>800?100:50;en=Math.floor(document.body.clientWidth/n),rn=Math.floor(document.body.clientHeight/n),tn.style.setProperty("--columns",en.toString()),tn.style.setProperty("--rows",rn.toString()),on(en*rn)};un(),window.onresize=()=>un()})();