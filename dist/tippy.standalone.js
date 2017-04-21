!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("popper.js")):"function"==typeof define&&define.amd?define(["popper.js"],t):e.Tippy=t(e.Popper)}(this,function(e){"use strict";function t(){A=!0,document.body.classList.add("tippy-touch"),document.removeEventListener("touchstart",t)}function i(e){var t=r(e.target,k.el),i=r(e.target,k.popper);if(i){if(L.refs[L.poppers.indexOf(i)].settings.interactive)return}if(t){var n=L.refs[L.els.indexOf(t)];if(!n.settings.multiple&&A||!n.settings.multiple&&-1!==n.settings.trigger.indexOf("click"))return y(n);if(!0!==n.settings.hideOnClick||-1!==n.settings.trigger.indexOf("click"))return}!r(e.target,k.controller)&&document.body.querySelector(".tippy-popper")&&y()}function n(e){for(var t=[!1,"webkit"],i=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var r=t[n],o=r?""+r+i:e;if(void 0!==window.document.body.style[o])return o}return null}function r(e,t){if(!Element.prototype.matches)if(e.matchesSelector)Element.prototype.matches=Element.prototype.matchesSelector;else if(e.webkitMatchesSelector)Element.prototype.matches=Element.prototype.webkitMatchesSelector;else if(e.mozMatchesSelector)Element.prototype.matches=Element.prototype.mozMatchesSelector;else{if(!e.msMatchesSelector)return e;Element.prototype.matches=Element.prototype.msMatchesSelector}return Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}}),e.closest(t)}function o(t,i,n){var r=E({placement:n.position},n.popperOptions||{},{modifiers:E({},n.popperOptions?n.popperOptions.modifiers:{},{flip:E({padding:15},n.popperOptions&&n.popperOptions.modifiers?n.popperOptions.modifiers.flip:{}),offset:E({offset:parseInt(n.offset)},n.popperOptions&&n.popperOptions.modifiers?n.popperOptions.modifiers.offset:{})})});document.body.appendChild(i);var o=new e(t,i,r);return o.disableEventListeners(),document.body.removeChild(i),o}function s(e,t){var i=document.createElement("div");i.setAttribute("class","tippy-popper");var n=document.createElement("div");if(n.setAttribute("class","tippy-tooltip tippy-tooltip--"+t.size+" "+t.theme+" leave"),n.setAttribute("data-animation",t.animation),t.arrow){var r=document.createElement("div");r.setAttribute("class","arrow-"+t.arrowSize),r.setAttribute("x-arrow",""),n.appendChild(r)}if(t.animateFill){n.setAttribute("data-animatefill","");var o=document.createElement("div");o.setAttribute("class","leave"),o.setAttribute("x-circle",""),n.appendChild(o)}t.inertia&&n.setAttribute("data-inertia","");var s=document.createElement("div");if(s.setAttribute("class","tippy-tooltip-content"),t.html){var a=void 0;t.html instanceof Element?(s.innerHTML=t.html.innerHTML,a=t.html.id||"tippy-html-template"):(s.innerHTML=document.getElementById(t.html.replace("#","")).innerHTML,a=t.html),i.classList.add("html-template"),i.setAttribute("tabindex","0"),n.setAttribute("data-template-id",a)}else s.innerHTML=e;return n.appendChild(s),i.appendChild(n),i}function a(e,t,i){if("manual"!==e){var n=[];return t.addEventListener(e,i.handleTrigger),n.push({event:e,handler:i.handleTrigger}),"mouseenter"===e&&(t.addEventListener("mouseleave",i.handleMouseleave),n.push({event:"mouseleave",handler:i.handleMouseleave})),"focus"===e&&(t.addEventListener("blur",i.handleBlur),n.push({event:"blur",handler:i.handleBlur})),n}}function l(e){L.refs.push(e),L.els.push(e.el),L.poppers.push(e.popper)}function p(e){var t=e.getAttribute("title");e.setAttribute("data-original-title",t||"html"),e.removeAttribute("title")}function d(e){var t=L.refs[L.els.indexOf(this)],i=t.popper.getAttribute("x-placement"),r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,o=Math.round(t.popper.offsetWidth/2),s=Math.round(t.popper.offsetHeight/2),a=e.clientX-o,l=e.clientY+r-2.5*s;"left"===i?(a=e.clientX-2*o-15,l=e.clientY+r-s):"right"===i?(a=e.clientX+s,l=e.clientY+r-s):"bottom"===i&&(l=e.clientY+r+s/1.5),t.popper.style[n("transform")]="translate3d("+a+"px, "+l+"px, 0)"}function u(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function c(e,t){t?window.getComputedStyle(t)[n("transform")]:window.getComputedStyle(e).opacity}function f(e,t){e.forEach(function(e){e&&t(e.classList)})}function h(e,t){e.forEach(function(e){e&&(e.style[n("transitionDuration")]=t+"ms")})}function m(e,t){setTimeout(function(){e.settings.position!==e.popper.getAttribute("x-placement")?(e.flipped=!0,t()):e.flipped&&e.settings.position===e.popper.getAttribute("x-placement")&&(e.flipped=!1,t())},0)}function v(e,t,i){var n=function n(){t||(e.popper.removeEventListener("webkitTransitionEnd",n),e.popper.removeEventListener("transitionend",n)),i()};if(t)return n();e.popper.addEventListener("webkitTransitionEnd",n),e.popper.addEventListener("transitionend",n)}function g(e){document.body.appendChild(e.popper),e.popper.style.visibility="visible",e.instance.update(),e.settings.followCursor&&!A?e.hasFollowCursorListener||(e.hasFollowCursorListener=!0,e.el.addEventListener("mousemove",d)):e.instance.enableEventListeners()}function y(e){L.refs.forEach(function(t){document.body.contains(t.popper)&&(!0!==t.settings.hideOnClick||e&&t.popper===e.popper||S.hide(t.popper,t.settings.hideDuration))})}e="default"in e?e.default:e;var b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},w=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},A=!1,L={refs:[],els:[],poppers:[]},O={html:!1,position:"top",animation:"shift",animateFill:!0,arrow:!1,arrowSize:"regular",delay:0,hideDelay:0,trigger:"mouseenter focus",duration:375,hideDuration:375,interactive:!1,theme:"dark",size:"regular",offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,transitionFlip:!0,popperOptions:{}},k={popper:".tippy-popper",tooltip:".tippy-tooltip",content:".tippy-tooltip-content",circle:"[x-circle]",arrow:"[x-arrow]",el:"[data-tooltipped]",controller:"[data-tippy-controller]"};document.addEventListener("click",i),document.addEventListener("touchstart",t);var T=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b(this,e),"addEventListener"in window&&!/MSIE 9/i.test(navigator.userAgent)&&!window.operamini&&(this.settings=E(JSON.parse(JSON.stringify(O)),i),this.callbacks={wait:i.wait,beforeShown:i.beforeShown||new Function,shown:i.shown||new Function,beforeHidden:i.beforeHidden||new Function,hidden:i.hidden||new Function},this.els=t instanceof Element?[t]:[].slice.call(document.querySelectorAll(t)),this._createTooltips())}return w(e,[{key:"_applyIndividualSettings",value:function(e){var t=e.getAttribute("data-html")||this.settings.html;t&&"false"!==t||(t=!1);var i=e.getAttribute("data-position")||this.settings.position,n=e.getAttribute("data-animation")||this.settings.animation,r=e.getAttribute("data-animatefill")||this.settings.animateFill;"false"===r&&(r=!1);var o=e.getAttribute("data-arrow")||this.settings.arrow;o&&"false"!==o?r=!1:o=!1;var s=e.getAttribute("data-arrowsize")||this.settings.arrowSize,a=e.getAttribute("data-trigger")||this.settings.trigger;a&&(a=a.trim().split(" "));var l=e.getAttribute("data-theme")||this.settings.theme;l&&(l+="-theme");var p=e.getAttribute("data-size")||this.settings.size,d=parseInt(e.getAttribute("data-delay"));d||0===d||(d=this.settings.delay);var u=parseInt(e.getAttribute("data-hidedelay"));u||0===u||(u=this.settings.hideDelay);var c=parseInt(e.getAttribute("data-duration"));c||0===c||(c=this.settings.duration);var f=parseInt(e.getAttribute("data-hideduration"));f||0===f||(f=this.settings.hideDuration);var h=e.getAttribute("data-interactive")||this.settings.interactive;"false"===h&&(h=!1);var m=parseInt(e.getAttribute("data-offset"));m||0===m||(m=this.settings.offset);var v=e.getAttribute("data-hideonclick")||this.settings.hideOnClick;"false"===v&&(v=!1);var g=e.getAttribute("data-multiple")||this.settings.multiple;"false"===g&&(g=!1);var y=e.getAttribute("data-followcursor")||this.settings.followCursor;"false"===y&&(y=!1);var b=e.getAttribute("data-inertia")||this.settings.inertia;"false"===b&&(b=!1);var w=e.getAttribute("data-transitionflip")||this.settings.transitionFlip;return"false"===w&&(w=!1),{html:t,position:i,animation:n,animateFill:r,arrow:o,arrowSize:s,delay:d,hideDelay:u,trigger:a,duration:c,hideDuration:f,interactive:h,theme:l,size:p,offset:m,hideOnClick:v,multiple:g,followCursor:y,inertia:b,transitionFlip:w,popperOptions:this.settings.popperOptions}}},{key:"_getEventListenerHandlers",value:function(e,t,i){var n=this,o=function(){if(clearTimeout(t.getAttribute("data-delay")),clearTimeout(t.getAttribute("data-hidedelay")),i.delay){var e=setTimeout(function(){return n.show(t,i.duration)},i.delay);t.setAttribute("data-delay",e)}else n.show(t,i.duration)},s=function(){return n.callbacks.wait?n.callbacks.wait(o):o()},a=function(){if(clearTimeout(t.getAttribute("data-hidedelay")),clearTimeout(t.getAttribute("data-delay")),i.hideDelay){var e=setTimeout(function(){return n.hide(t,i.hideDuration)},i.hideDelay);t.setAttribute("data-hidedelay",e)}else n.hide(t,i.hideDuration)};return{handleTrigger:function(e){if(i.interactive&&e.target.classList.add("active"),"click"===e.type&&"visible"===t.style.visibility&&"persistent"!==i.hideOnClick)return a();s()},handleMouseleave:function(n){if(i.interactive){var o=function n(o){r(o.target,k.popper)!==t&&r(o.target,k.el)!==e&&-1===i.trigger.indexOf("click")&&(document.removeEventListener("mousemove",n),a())};return document.addEventListener("mousemove",o)}a()},handleBlur:function(e){!A&&e.relatedTarget&&(r(e.relatedTarget,k.popper)||a())}}}},{key:"_createTooltips",value:function(){var t=this;this.els.forEach(function(e){e.setAttribute("data-tooltipped","");var i=t._applyIndividualSettings(e),n=e.getAttribute("title");if(n||i.html){p(e);var r=s(n,i),d=o(e,r,i),u=t._getEventListenerHandlers(e,r,i),c=[];i.trigger.forEach(function(t){return c=c.concat(a(t,e,u))}),l({el:e,popper:r,settings:i,listeners:c,instance:d})}}),e.store=L}},{key:"getPopperElement",value:function(e){try{return L.refs[L.els.indexOf(e)].popper}catch(e){throw new Error("[Tippy error]: Element does not exist in any Tippy instances")}}},{key:"getTooltippedElement",value:function(e){try{return L.refs[L.poppers.indexOf(e)].el}catch(e){throw new Error("[Tippy error]: Popper does not exist in any Tippy instances")}}},{key:"show",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("visible"!==e.style.visibility){var r=L.refs[L.poppers.indexOf(e)],o=e.querySelector(k.tooltip),s=e.querySelector(k.circle);n&&(this.callbacks.beforeShown(),m(r,function(){t.hide(e,0,!1),setTimeout(function(){return t.show(e,i,!1)},0)})),g(r),c(o,s),f([o,s],function(e){e.remove("leave"),e.add("enter")}),h([o,s],i),v(r,i<20,function(){"hidden"===e.style.visibility||r.onShownFired||(r.settings.transitionFlip||o.classList.add("tippy-notransition"),r.settings.interactive&&-1!==r.settings.trigger.indexOf("click")&&e.focus(),r.onShownFired=!0,n&&t.callbacks.shown())})}}},{key:"hide",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(document.body.contains(e)){var o=L.refs[L.poppers.indexOf(e)],s=e.querySelector(k.tooltip),a=e.querySelector(k.circle);r&&(this.callbacks.beforeHidden(),o.el.classList.remove("active"),o.onShownFired=!1,o.settings.transitionFlip||s.classList.remove("tippy-notransition"),o.flipped=o.settings.position!==e.getAttribute("x-placement")),e.style.visibility="hidden",i===O.hideDuration?i=parseInt(s.style[n("transitionDuration")]):h([s,a],i),f([s,a],function(e){e.remove("enter"),e.add("leave")}),o.settings.html&&-1!==o.settings.trigger.indexOf("click")&&u(o.el)&&o.el.focus(),v(o,i<20,function(){"visible"!==e.style.visibility&&document.body.contains(e)&&(o.hasFollowCursorListener&&(o.el.removeEventListener("mousemove",d),o.hasFollowCursorListener=!1),o.instance.disableEventListeners(),document.body.removeChild(e),r&&t.callbacks.hidden())})}}},{key:"destroy",value:function(e){var t=L.poppers.indexOf(e),i=L.refs[t];i.listeners.forEach(function(e){return i.el.removeEventListener(e.event,e.handler)}),i.el.removeAttribute("data-tooltipped"),i.instance.destroy(),L.refs.splice(t,1),L.els.splice(t,1),L.poppers.splice(t,1)}},{key:"update",value:function(e){var t=L.refs[L.poppers.indexOf(e)],i=e.querySelector(k.content),n=t.settings.html;n?i.innerHTML=n instanceof Element?n.innerHTML:document.getElementById(n.replace("#","")).innerHTML:(i.innerHTML=t.el.getAttribute("title")||t.el.getAttribute("data-original-title"),p(t.el))}}]),e}(),S=new T;return T});
