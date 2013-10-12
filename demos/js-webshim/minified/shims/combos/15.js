webshims.register("dom-extend",function(e,t,i,n,a){"use strict";var r=!("hrefNormalized"in e.support)||e.support.hrefNormalized,o=!("getSetAttribute"in e.support)||e.support.getSetAttribute;if(t.assumeARIA=o||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10+. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var s=function(){if(!i.jQuery||i.$&&i.jQuery!=i.$||i.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),i.$&&(i.$=t.$),i.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};s(),setTimeout(s,90),t.ready("DOM",s),e(s),t.ready("WINDOWLOAD",s)}var l=t.modules,u=/\s*,\s*/,c={},p={},d={},h={},f={},m=e.fn.val,v=function(t,i,n,a,r){return r?m.call(e(t)):m.call(e(t),n)};e.widget||function(){var t=e.cleanData;e.cleanData=function(i){if(!e.widget)for(var n,a=0;null!=(n=i[a]);a++)try{e(n).triggerHandler("remove")}catch(r){}t(i)}}(),e.fn.val=function(t){var i=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return i&&1===i.nodeType?e.prop(i,"value",t,"val",!0):m.call(this);if(e.isArray(t))return m.apply(this,arguments);var n=e.isFunction(t);return this.each(function(r){if(i=this,1===i.nodeType)if(n){var o=t.call(i,r,e.prop(i,"value",a,"val",!0));null==o&&(o=""),e.prop(i,"value",o,"val")}else e.prop(i,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,i,a,r){return r||(r=n),e(r)[a?"onTrigger":"on"](t,i),this.on("remove",function(n){n.originalEvent||e(r).off(t,i)}),this};var g="_webshimsLib"+Math.round(1e3*Math.random()),y=function(t,i,n){if(t=t.jquery?t[0]:t,!t)return n||{};var r=e.data(t,g);return n!==a&&(r||(r=e.data(t,g,{})),i&&(r[i]=n)),i?r&&r[i]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var i=[];return this.each(function(){var n=y(this,"shadowData"),a=n&&n[t.prop]||this;-1==e.inArray(a,i)&&i.push(a)}),this.pushStack(i)}}),["removeAttr","prop","attr"].forEach(function(i){c[i]=e[i],e[i]=function(t,n,r,o,s){var l="val"==o,u=l?v:c[i];if(!t||!p[n]||1!==t.nodeType||!l&&o&&"attr"==i&&e.attrFn[n])return u(t,n,r,o,s);var h,m,g,y=(t.nodeName||"").toLowerCase(),b=d[y],w="attr"!=i||r!==!1&&null!==r?i:"removeAttr";if(b||(b=d["*"]),b&&(b=b[n]),b&&(h=b[w]),h){if("value"==n&&(m=h.isVal,h.isVal=l),"removeAttr"===w)return h.value.call(t);if(r===a)return h.get?h.get.call(t):h.value;h.set&&("attr"==i&&r===!0&&(r=n),g=h.set.call(t,r)),"value"==n&&(h.isVal=m)}else g=u(t,n,r,o,s);if((r!==a||"removeAttr"===w)&&f[y]&&f[y][n]){var x;x="removeAttr"==w?!1:"prop"==w?!!r:!0,f[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==i)||"attr"==e.only&&"prop"!=i)&&e.call(t,r,x,l?"val":w,i)})}return g},h[i]=function(e,n,r){d[e]||(d[e]={}),d[e][n]||(d[e][n]={});var o=d[e][n][i],s=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==i&&"value"==n?function(e){var t=this;return r.isVal?v(t,n,e,!1,0===arguments.length):c[i](t,n,e)}:"prop"==i&&"value"==e&&r.value.apply?function(){var e=c[i](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return c[i](this,n,e)}};d[e][n][i]=r,r.value===a&&(r.set||(r.set=r.writeable?s("set",r,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=s(e,o))})}});var b=function(){var e=t.getPrototypeOf(n.createElement("foobar")),i=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(r,o,s){var l,u;if(!(a&&(l=n.createElement(r))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&i.call(l,o))s._supvalue=function(){var e=y(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},w.extendValue(r,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),w=function(){var i={};t.addReady(function(n,r){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(i,function(e,i){return s(e),i&&i.forEach?(i.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+i),a)}),o=null});var r,o=e([]),s=function(t,a){i[t]?i[t].push(a):i[t]=[a],e.isDOMReady&&(r||e(n.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(n.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,i){s(t,function(){var t=e.attr(this,i);null!=t&&e.attr(this,i,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,i,n){s(t,function(){e(this).each(function(){var e=y(this,"propValue",{});e[i]=this[i],this[i]=n})})}}}(),x=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(i){i=e(i);var n=i.prop("id");return n||(t++,n="ID-"+t,i.eq(0).prop("id",n)),n}}(),implement:function(e,i){var n=y(e,"implemented")||y(e,"implemented",{});return n[i]?(t.warn(i+" already implemented for element #"+e.id),!1):(n[i]=!0,!0)},extendUNDEFProp:function(t,i){e.each(i,function(e,i){e in t||(t[e]=i)})},createPropDefault:x,data:y,moveToFirstEvent:function(t,i,n){var a,r=(e._data(t,"events")||{})[i];r&&r.length>1&&(a=r.pop(),n||(n="bind"),"bind"==n&&r.delegateCount?r.splice(r.delegateCount,0,a):r.unshift(a)),t=null},addShadowDom:function(){var a,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(i).width(),l=e(i).width();if(l==r&&a==o)return;r=l,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var i=n.body,a=n.documentElement;s[t]=function(){return Math.max(i["scroll"+e],a["scroll"+e],i["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).on("updatelayout",this.handler),e(i).bind("resize",this.handler),function(){var t,i=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),i.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(i,n,a){if(i&&n){a=a||{},i.jquery&&(i=i[0]),n.jquery&&(n=n[0]);var r=e.data(i,g)||e.data(i,g,{}),o=e.data(n,g)||e.data(n,g,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,g)||e.data(a.shadowFocusElement,g,s)):a.shadowFocusElement=n,e(i).on("remove",function(t){t.originalEvent||setTimeout(function(){e(n).remove()},4)}),r.hasShadow=n,s.nativeElement=o.nativeElement=i,s.shadowData=o.shadowData=r.shadowData={nativeElement:i,shadowElement:n,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){y(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=a.data),a=null}t.docObserve()}}(),propTypes:{standard:function(e){x(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){x(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(i,n){x(i),i.prop||(i.prop={set:function(e){i.attr.set.call(this,e)},get:function(){var i,a=this.getAttribute(n);if(null==a)return"";if(t.setAttribute("href",a+""),!r){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(o){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}})}}(),enumarated:function(e){x(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(i,n){"string"==typeof n&&(n=n.split(u)),n.forEach(function(n){t.defineNodeNamesProperty(i,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(i,n,a){return p[n]=!0,a.reflect&&(a.propType&&!t.propTypes[a.propType]?t.error("could not finde propType "+a.propType):t.propTypes[a.propType||"standard"](a,n)),["prop","attr","removeAttr"].forEach(function(r){var o=a[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),h[r](i,n,o),"*"!=i&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&b(i,n,o),a[r]=o)}),a.initAttr&&w.content(i,n),a},defineNodeNameProperties:function(e,i,n,a){for(var r in i)!a&&i[r].initAttr&&w.createTmpCache(e),n&&(i[r][n]||(i[r][n]={},["value","set","get"].forEach(function(e){e in i[r]&&(i[r][n][e]=i[r][e],delete i[r][e])}))),i[r]=t.defineNodeNameProperty(e,r,i[r]);return a||w.flushTmpCache(),i},createElement:function(i,n,a){var r;return e.isFunction(n)&&(n={after:n}),w.createTmpCache(i),n.before&&w.createElement(i,n.before),a&&(r=t.defineNodeNameProperties(i,a,!1,!0)),n.after&&w.createElement(i,n.after),w.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,i,n,a){"string"==typeof t&&(t=t.split(u)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){f[e]||(f[e]={}),"string"==typeof i&&(i=i.split(u)),n.initAttr&&w.createTmpCache(e),i.forEach(function(t){f[e][t]||(f[e][t]=[],p[t]=!0),n.set&&(a&&(n.set.only=a),f[e][t].push(n.set)),n.initAttr&&w.content(e,t)}),w.flushTmpCache()})},defineNodeNamesBooleanProperty:function(i,n,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(i,n,{attr:{set:function(e){this.setAttribute(n,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?a:n}},removeAttr:{value:function(){this.removeAttribute(n),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,i){if(e.nodeName){var n;return i===a?(n=e.attributes[t]||{},i=n.specified?n.value:null,null==i?a:i):("boolean"==typeof i?i?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,i),a)}},activeLang:function(){var i,n,a=[],r={},o=/:\/\/|^\.*\//,s=function(i,n,a){var r;return n&&a&&-1!==e.inArray(n,a.availableLangs||a.availabeLangs||[])?(i.loading=!0,r=a.langSrc,o.test(r)||(r=t.cfg.basePath+r),t.loader.loadScript(r+n+".js",function(){i.langObj[n]?(i.loading=!1,c(i,!0)):e(function(){i.langObj[n]&&c(i,!0),i.loading=!1})}),!0):!1},u=function(e){r[e]&&r[e].forEach(function(e){e.callback(i,n,"")})},c=function(e,t){if(e.activeLang!=i&&e.activeLang!==n){var a=l[e.module].options;e.langObj[i]||n&&e.langObj[n]?(e.activeLang=i,e.callback(e.langObj[i]||e.langObj[n],i),u(e.module)):t||s(e,i,a)||s(e,n,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],i),u(e.module))}},p=function(t){return"string"==typeof t&&t!==i?(i=t,n=i.split("-")[0],i==n&&(n=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback(i,n,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),i};return p}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,i){t[e]=function(e,n,a,r){"string"==typeof e&&(e=e.split(u));var o={};return e.forEach(function(e){o[e]=t[i](e,n,a,r)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var i=e.getAttribute("role");i||e.setAttribute("role",t)};e.webshims.addReady(function(a,r){if(e.each(i,function(t,i){for(var o=e(t,a).add(r.filter(t)),s=0,l=o.length;l>s;s++)n(o[s],i)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||n(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-core",function(e,t,i,n,a,r){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var i=t.isDefaultPrevented,n=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),n.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var i=["form-validation"];r.lazyCustomMessages&&(r.customMessages=!0,i.push("form-message")),r.customDatalist&&(r.fD=!0,i.push("form-datalist")),r.addValidators&&i.push("form-validators"),t.reTest(i),e(n).off(".lazyloadvalidation")},l=function(t){var i=!1;return e(t).jProp("elements").each(function(){return i=e(this).is(":invalid"),i?!1:a}),i},u=/^(?:form)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return u.test(t.nodeName||"")?!l(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return u.test(t.nodeName||"")?l(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});var c=e.expr[":"].focus;e.expr[":"].focus=function(){try{return c.apply(this,arguments)}catch(e){t.error(e)}return!1},t.triggerInlineForm=function(t,i){e(t).trigger(i)};var p=function(e,i,n){s(),t.ready("form-validation",function(){e[i].apply(e,n)})},d="transitionDelay"in n.documentElement.style?"":" no-transition",h=t.cfg.wspopover;h.position||h.position===!1||(h.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},h,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+d+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){p(this,"show",arguments)}},t.validityAlert={showFor:function(){p(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,i,n){var r=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return n&&r[n]?r=r[n]:r&&(i=i||e.prop(t,"validity")||{valid:1},i.valid&&(r="")),"object"==typeof r&&(i=i||e.prop(t,"validity")||{valid:1},i.valid||(e.each(i,function(e,t){return t&&"valid"!=e&&r[e]?(r=r[e],!1):a}),"object"==typeof r&&(i.typeMismatch&&r.badInput&&(r=r.badInput),i.badInput&&r.typeMismatch&&(r=r.typeMismatch)))),"object"==typeof r&&(r=r.defaultMessage),r||""},e.fn.getErrorMessage=function(i){var n="",a=this[0];return a&&(n=t.getContentValidationMessage(a,!1,i)||e.prop(a,"customValidationMessage")||e.prop(a,"validationMessage")),n},e(n).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&(t.target.list||e(t.target).is(":invalid"))&&s()}),t.ready("WINDOWLOAD",s)}),webshims.register("form-shim-extend",function(e,t,i,n,a){"use strict";t.inputTypes=t.inputTypes||{};var r,o=t.cfg.forms,s=t.bugs,l=t.inputTypes,u={radio:1,checkbox:1},c=function(e){return(e.getAttribute("type")||e.type||"").toLowerCase()};(function(){if("querySelector"in n){try{s.findRequired=!e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /></form>')[0].querySelector("select:required")}catch(t){s.findRequired=!1}(s.bustedValidity||s.findRequired)&&function(){var t=e.find,i=e.find.matchesSelector,a=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/gi,r=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,i=function(i){var n=arguments;return n=e.call(n,1,n.length),n.unshift(i.replace(a,r)),t.apply(this,n)};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i}(),(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",n.documentElement))&&(e.find.matchesSelector=function(e,t){return t=t.replace(a,r),i.call(this,e,t)})}()}})(),t.addInputType=function(e,t){l[e]=t};var p={customError:!1,typeMismatch:!1,badInput:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},d=function(t){if("select-one"==t.type&&2>t.size){var i=e("> option:first-child",t);return!!i.prop("selected")}return!1},h=e([]),f=function(t){t=e(t);var i,a,r=h;return"radio"==t[0].type&&(a=t.prop("form"),i=t[0].name,r=i?a?e(a[i]):e(n.getElementsByName(i)).filter(function(){return!e.prop(this,"form")}):t,r=r.filter('[type="radio"]')),r},m={valueMissing:function(e,t,i){if(!e.prop("required"))return!1;var n=!1;return"type"in i||(i.type=c(e[0])),n="select"==i.nodeName?!t&&(0>e[0].selectedIndex||d(e[0])):u[i.type]?"checkbox"==i.type?!e.is(":checked"):!f(e).filter(":checked")[0]:!t},tooLong:function(){return!1},patternMismatch:function(e,i,n){if(""===i||"select"==n.nodeName)return!1;var a=e.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(r){t.error('invalid pattern value: "'+a+'" | '+r),a=!1}return a?!a.test(i):!1}};e.each({typeMismatch:"mismatch",badInput:"bad"},function(e,t){m[e]=function(i,n,a){if(""===n||"select"==a.nodeName)return!1;var r=!1;return"type"in a||(a.type=c(i[0])),l[a.type]&&l[a.type][t]?r=l[a.type][t](n,i):"validity"in i[0]&&"name"in i[0].validity&&(r=i[0].validity[e]||!1),r}}),t.addValidityRule=function(e,t){m[e]=t},e.event.special.invalid={add:function(){e.event.special.invalid.setup.call(this.form||this)},setup:function(){var i=this.form||this;return e.data(i,"invalidEventShim")?(i=null,a):(e(i).data("invalidEventShim",!0).on("submit",e.event.special.invalid.handler),t.moveToFirstEvent(i,"submit"),t.bugs.bustedValidity&&e.nodeName(i,"form")&&function(){var e=i.getAttribute("novalidate");i.setAttribute("novalidate","novalidate"),t.data(i,"bustedNoValidate",null==e?null:e)}(),i=null,a)},teardown:e.noop,handler:function(t){if("submit"==t.type&&!t.testedValidity&&t.originalEvent&&e.nodeName(t.target,"form")&&!e.prop(t.target,"noValidate")){r=!0,t.testedValidity=!0;var i=!e(t.target).checkValidity();return i?(t.stopImmediatePropagation(),r=!1,!1):(r=!1,a)}}},e.event.special.submit=e.event.special.submit||{setup:function(){return!1}};var v=e.event.special.submit.setup;e.extend(e.event.special.submit,{setup:function(){return e.nodeName(this,"form")?e(this).on("invalid",e.noop):e("form",this).on("invalid",e.noop),v.apply(this,arguments)}}),t.ready("form-shim-extend2 WINDOWLOAD",function(){e(i).on("invalid",e.noop)}),t.addInputType("email",{mismatch:function(){var e=o.emailReg||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;return function(t){if(i.punycode&&punycode.toASCII)try{if(e.test(punycode.toASCII(t)))return!1}catch(n){}return!e.test(t)}}()}),t.addInputType("url",{mismatch:function(){var e=o.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return function(t){return!e.test(t)}}()}),t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,i=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[i]?i:e.type}}}),t.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:e.noop},validity:{writeable:!1,get:function(){return e.extend({},p)}}},"prop");var g=function(i){var n,a=e.prop(i,"validity");if(!a)return!0;if(e.data(i,"cachedValidity",a),!a.valid){n=e.Event("invalid");var o=e(i).trigger(n);!r||g.unhandledInvalids||n.isDefaultPrevented()||(t.validityAlert.showFor(o),g.unhandledInvalids=!0)}return e.removeData(i,"cachedValidity"),a.valid},y=/^(?:select|textarea|input)/i;t.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var i=!0,n=e(e.prop(this,"elements")).filter(function(){if(!y.test(this.nodeName))return!1;var e=t.data(this,"shadowData");return!e||!e.nativeElement||e.nativeElement===this});g.unhandledInvalids=!1;for(var a=0,r=n.length;r>a;a++)g(n[a])||(i=!1);return i}}}),t.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){return g.unhandledInvalids=!1,g(e(this).getNativeElement()[0])}},setCustomValidity:{value:function(i){e.removeData(this,"cachedValidity"),t.data(this,"customvalidationMessage",""+i)}},willValidate:{writeable:!1,get:function(){var t={button:1,reset:1,hidden:1,image:1};return function(){var i=e(this).getNativeElement()[0];return!(i.disabled||i.readOnly||t[i.type])}}()},validity:{writeable:!1,get:function(){var i=e(this).getNativeElement(),n=i[0],a=e.data(n,"cachedValidity");if(a)return a;if(a=e.extend({},p),!e.prop(n,"willValidate")||"submit"==n.type)return a;var r=i.val(),o={nodeName:n.nodeName.toLowerCase()};return a.customError=!!t.data(n,"customvalidationMessage"),a.customError&&(a.valid=!1),e.each(m,function(e,t){t(i,r,o)&&(a[e]=!0,a.valid=!1)}),e(this).getShadowFocusElement().attr("aria-invalid",a.valid?"false":"true"),i=null,n=null,a}}},"prop"),t.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(t){e(this).getShadowFocusElement().attr("aria-required",!!t+"")},initAttr:Modernizr.localstorage}),t.bugs.bustedValidity&&(t.defineNodeNameProperty("form","novalidate",{attr:{set:function(e){t.data(this,"bustedNoValidate",""+e)},get:function(){var e=t.data(this,"bustedNoValidate");return null==e?a:e}},removeAttr:{value:function(){t.data(this,"bustedNoValidate",null)}}}),e.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(e,t){m[t]=function(e){return(e[0].validity||{})[t]||!1}})),t.defineNodeNameProperty("form","noValidate",{prop:{set:function(t){t=!!t,t?e.attr(this,"novalidate","novalidate"):e(this).removeAttr("novalidate")},get:function(){return null!=e.attr(this,"novalidate")}}}),Modernizr.inputtypes.date&&/webkit/i.test(navigator.userAgent)&&function(){var t={updateInput:1,input:1},i={date:1,time:1,month:1,week:1,"datetime-local":1},a={focusout:1,blur:1},r={updateInput:1,change:1},o=function(e){var i,n,o=!0,s=e.prop("value"),l=s,u=function(i){if(e){var n=e.prop("value");n!==s&&(s=n,i&&t[i.type]||e.trigger("input")),i&&r[i.type]&&(l=n),o||n===l||e.trigger("change")}},c=function(){clearTimeout(n),n=setTimeout(u,9)},p=function(t){clearInterval(i),setTimeout(function(){t&&a[t.type]&&(o=!1),e&&(e.unbind("focusout blur",p).unbind("input change updateInput",u),u()),e=null},1)};clearInterval(i),i=setInterval(u,160),c(),e.off({"focusout blur":p,"input change updateInput":u}).on({"focusout blur":p,"input updateInput change":u})};e(n).on("focusin",function(t){t.target&&i[t.target.type]&&!t.target.readOnly&&!t.target.disabled&&o(e(t.target))})}(),t.addReady(function(t,i){var a;e("form",t).add(i.filter("form")).bind("invalid",e.noop);try{t!=n||"form"in(n.activeElement||{})||(a=e("input[autofocus], select[autofocus], textarea[autofocus]",t).eq(0).getShadowFocusElement()[0],a&&a.offsetHeight&&a.offsetWidth&&a.focus())}catch(r){}}),Modernizr.input.list||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var i,n=this,a=e("select",n);return a[0]?i=a[0].options:(i=e("option",n).get(),i.length&&t.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")),i}}})}),webshims.register("form-message",function(e,t,i,n,a,r){"use strict";r.lazyCustomMessages&&(r.customMessages=!0);var o=t.validityMessages,s=r.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL."},badInput:{defaultMessage:"Please enter a valid value.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en)),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o.en)),o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\u00e4ssig.",email:"{%value} ist keine g\u00fcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\u00fcltige(r) Webadresse/Pfad."},badInput:{defaultMessage:"Geben Sie einen zul\u00e4ssigen Wert ein.",number:"Geben Sie eine Nummer ein.",date:"Geben Sie ein Datum ein.",time:"Geben Sie eine Uhrzeit ein.",month:"Geben Sie einen Monat mit Jahr ein.",range:"Geben Sie eine Nummer.","datetime-local":"Geben Sie ein Datum mit Uhrzeit ein."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\u00e4stchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte w\u00e4hlen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var l=o[""],u=function(t,i){return t&&"string"!=typeof t&&(t=t[e.prop(i,"type")]||t[(i.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(i,n){var a,r=e.prop(i,"type"),s=u(l[n],i);return s||"badInput"!=n||(s=u(l.typeMismatch,i)),s||"typeMismatch"!=n||(s=u(l.badInput,i)),s||(s=u(o[""][n],i)||e.prop(i,"validationMessage"),t.info("could not find errormessage for: "+n+" / "+r+". in language: "+t.activeLang())),s&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==s.indexOf("{%"+o)){var l=("label"==o?e.trim(e('label[for="'+i.id+'"]',i.form).text()).replace(/\*$|:$/,""):e.prop(i,o))||"";"patternMismatch"!=n||"title"!=o||l||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(a||(a=e(i).getShadowElement().data("wsWidget"+r)),a&&a.formatValue&&(l=a.formatValue(l,!1))),s=s.replace("{%"+o+"}",l),"value"==o&&(s=s.replace("{%valueLen}",l.length))}}),s||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){l=e}}),t.activeLang({register:"form-core",callback:function(e){o[e]&&(l=o[e])}}),s.forEach(function(i){t.defineNodeNamesProperty(["fieldset","output","button"],i,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(n){var r=t.defineNodeNameProperty(n,i,{prop:{get:function(){var i=this,n="";if(!e.prop(i,"willValidate"))return n;var o=e.prop(i,"validity")||{valid:1};return o.valid?n:(n=t.getContentValidationMessage(i,o))?n:o.customError&&i.nodeName&&(n=Modernizr.formvalidation&&!t.bugs.bustedValidity&&r.prop._supget?r.prop._supget.call(i):t.data(i,"customvalidationMessage"))?n:(e.each(o,function(e,r){return"valid"!=e&&r?(n=t.createValidationMessage(i,e),n?!1:a):a
}),n||"")},writeable:!1}})})})}),webshims.register("form-datalist",function(e,t,i,n,a,r){"use strict";var o=function(e){e&&"string"==typeof e||(e="DOM"),o[e+"Loaded"]||(o[e+"Loaded"]=!0,t.ready(e,function(){t.loader.loadList(["form-datalist-lazy"])}))},s={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};t.modules["form-number-date-ui"].loaded&&e.extend(s,{number:1,time:1}),t.propTypes.element=function(i,a){t.createPropDefault(i,"attr"),i.prop||(i.prop={get:function(){var t=e.attr(this,a);return t&&(t=n.getElementById(t),t&&i.propNodeName&&!e.nodeName(t,i.propNodeName)&&(t=null)),t||null},writeable:!1})},function(){var l=e.webshims.cfg.forms,u=Modernizr.input.list;if(!u||l.customDatalist){var c=function(){var i=function(){var t;!e.data(this,"datalistWidgetData")&&(t=e.prop(this,"id"))?e('input[list="'+t+'"], input[data-wslist="'+t+'"]').eq(0).attr("list",t):e(this).triggerHandler("updateDatalist")},n={autocomplete:{attr:{get:function(){var t=this,i=e.data(t,"datalistWidget");return i?i._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var i=this,n=e.data(i,"datalistWidget");n?(n._autocomplete=t,"off"==t&&n.hideList()):"autocomplete"in i?i.autocomplete=t:i.setAttribute("autocomplete",t)}}}};u?((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var i=this,n=e("select",i);n[0]&&n[0].options&&n[0].options.length&&(t=n[0].options)}return t}}}),n.list={attr:{get:function(){var i=t.contentAttr(this,"list");return null!=i?(e.data(this,"datalistListAttr",i),s[e.prop(this,"type")]||s[e.attr(this,"type")]||this.removeAttribute("list")):i=e.data(this,"datalistListAttr"),null==i?a:i},set:function(i){var n=this;e.data(n,"datalistListAttr",i),s[e.prop(this,"type")]||s[e.attr(this,"type")]?n.setAttribute("list",i):(t.objectCreate(p,a,{input:n,id:i,datalist:e.prop(n,"list")}),n.setAttribute("data-wslist",i)),e(n).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):t.defineNodeNameProperties("input",{list:{attr:{get:function(){var e=t.contentAttr(this,"list");return null==e?a:e},set:function(i){var n=this;t.contentAttr(n,"list",i),t.objectCreate(r.shadowListProto,a,{input:n,id:i,datalist:e.prop(n,"list")}),e(n).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}}),t.defineNodeNameProperties("input",n),t.addReady(function(e,t){t.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(i)})},p={_create:function(i){if(!s[e.prop(i.input,"type")]&&!s[e.attr(i.input,"type")]){var n=i.datalist,r=e.data(i.input,"datalistWidget"),l=this;return n&&r&&r.datalist!==n?(r.datalist=n,r.id=i.id,e(r.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(r,"_resetListCached")),r._resetListCached(),a):n?(r&&r.datalist===n||(this.datalist=n,this.id=i.id,this.hasViewableData=!0,this._autocomplete=e.attr(i.input,"autocomplete"),e.data(i.input,"datalistWidget",this),e.data(n,"datalistWidgetData",this),o("WINDOWLOAD"),t.isReady("form-datalist-lazy")?this._lazyCreate(i):(e(i.input).one("focus",o),t.ready("form-datalist-lazy",function(){l._destroyed||l._lazyCreate(i)}))),a):(r&&r.destroy(),a)}},destroy:function(t){var r,o=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(n).off(".datalist"+this.id),e(i).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),o===a?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",o),t&&"beforeunload"==t.type&&(r=this.input,setTimeout(function(){e.attr(r,"list",e.attr(r,"list"))},9)),this._destroyed=!0}};t.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:e.extend(r,{shadowListProto:p})}),c()}}()});