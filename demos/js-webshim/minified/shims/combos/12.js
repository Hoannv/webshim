var swfmini=function(){function e(){if(!A){try{var e=x.getElementsByTagName("body")[0].appendChild(p("span"));e.parentNode.removeChild(e)}catch(t){return}A=!0;for(var i=C.length,n=0;i>n;n++)C[n]()}}function t(e){A?e():C[C.length]=e}function i(){}function n(){T&&a()}function a(){var e=x.getElementsByTagName("body")[0],t=p(f);t.setAttribute("type",b);var i=e.appendChild(t);if(i){var n=0;(function(){if(typeof i.GetVariable!=m){var a=i.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),M.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),i=null})()}}function r(e){var t=null,i=c(e);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=m)t=i;else{var n=i.getElementsByTagName(f)[0];n&&(t=n)}return t}function s(e,t,i){var n,a=c(i);if(M.wk&&312>M.wk)return n;if(a)if(typeof e.id==m&&(e.id=i),M.ie&&M.win){var r="";for(var s in e)e[s]!=Object.prototype[s]&&("data"==s.toLowerCase()?t.movie=e[s]:"styleclass"==s.toLowerCase()?r+=' class="'+e[s]+'"':"classid"!=s.toLowerCase()&&(r+=" "+s+'="'+e[s]+'"'));var l="";for(var u in t)t[u]!=Object.prototype[u]&&(l+='<param name="'+u+'" value="'+t[u]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+l+"</object>",N[N.length]=e.id,n=c(e.id)}else{var h=p(f);h.setAttribute("type",b);for(var d in e)e[d]!=Object.prototype[d]&&("styleclass"==d.toLowerCase()?h.setAttribute("class",e[d]):"classid"!=d.toLowerCase()&&h.setAttribute(d,e[d]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&o(h,v,t[v]);a.parentNode.replaceChild(h,a),n=h}return n}function o(e,t,i){var n=p("param");n.setAttribute("name",t),n.setAttribute("value",i),e.appendChild(n)}function l(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(M.ie&&M.win?(t.style.display="none",function(){4==t.readyState?u(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function u(e){var t=c(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=x.getElementById(e)}catch(i){}return t}function p(e){return x.createElement(e)}function h(e){var t=M.pv,i=e.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,t[0]>i[0]||t[0]==i[0]&&t[1]>i[1]||t[0]==i[0]&&t[1]==i[1]&&t[2]>=i[2]?!0:!1}function d(e,t){if(S){var i,n=t?"visible":"hidden";A&&i&&c(e)&&(c(e).style.visibility=n)}}var m="undefined",f="object",v=window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,x=document,k=navigator,T=!1,C=[n],N=[],E=[],A=!1,S=!0,M=function(){var e=typeof x.getElementById!=m&&typeof x.getElementsByTagName!=m&&typeof x.createElement!=m,t=k.userAgent.toLowerCase(),i=k.platform.toLowerCase(),n=i?/win/.test(i):/win/.test(t),a=i?/mac/.test(i):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,s=!1,o=[0,0,0],l=null;if(typeof k.plugins!=m&&typeof k.plugins[g]==f)l=k.plugins[g].description,!l||typeof k.mimeTypes!=m&&k.mimeTypes[b]&&!k.mimeTypes[b].enabledPlugin||(T=!0,s=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),o[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),o[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),o[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=m)try{var u=new ActiveXObject(y);u&&(l=u.GetVariable("$version"),l&&(s=!0,l=l.split(" ")[1].split(","),o=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(c){}return{w3:e,pv:o,wk:r,ie:s,win:n,mac:a}}();return function(){M.ie&&M.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=E.length,t=0;e>t;t++)E[t][0].detachEvent(E[t][1],E[t][2]);for(var i=N.length,n=0;i>n;n++)l(N[n]);for(var a in M)M[a]=null;M=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return M.w3?r(e):void 0},embedSWF:function(e,i,n,a,r,o,l,u,c,p){var v={success:!1,id:i};M.w3&&!(M.wk&&312>M.wk)&&e&&i&&n&&a&&r?(d(i,!1),t(function(){n+="",a+="";var t={};if(c&&typeof c===f)for(var o in c)t[o]=c[o];t.data=e,t.width=n,t.height=a;var g={};if(u&&typeof u===f)for(var y in u)g[y]=u[y];if(l&&typeof l===f)for(var b in l)typeof g.flashvars!=m?g.flashvars+="&"+b+"="+l[b]:g.flashvars=b+"="+l[b];if(h(r)){var w=s(t,g,i);t.id==i&&d(i,!0),v.success=!0,v.ref=w}else d(i,!0);p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){S=!1},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:h,createSWF:function(e,t,i){return M.w3?s(e,t,i):void 0},showExpressInstall:function(){},removeSWF:function(e){M.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:i,expressInstallCallback:function(){}}}();(function(e,t){"use strict";var i,n,a=t.$,r=e.audio&&e.video,s=!1,o=t.bugs,l="mediaelement-jaris",u=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],r))})},c=t.cfg,p=c.mediaelement;if(!p)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var h=document.createElement("video");if(e.videoBuffered="buffered"in h,e.mediaDefaultMuted="defaultMuted"in h,s="loop"in h,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!p.preferFlash){var d={1:1},m=function(e){var i,r,s;!p.preferFlash&&(a(e.target).is("audio, video")||(s=e.target.parentNode)&&a("source:last",s)[0]==e.target)&&(i=a(e.target).closest("audio, video"))&&(r=i.prop("error"))&&!d[r.code]&&a(function(){n&&!p.preferFlash?(u(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){p.preferFlash||!t.mediaelement.createSWF||i.is(".nonnative-api-active")||(p.preferFlash=!0,document.removeEventListener("error",m,!0),a("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+i.prop("error")+"first error: "+r))},9)})):document.removeEventListener("error",m,!0)})};document.addEventListener("error",m,!0),a("audio, video").each(function(){var e=a.prop(this,"error");return e&&!d[e]?(m({target:this}),!1):void 0})}}e.track&&!o.track&&function(){if(o.track||(o.track="number"!=typeof a("<track />")[0].readyState),!o.track)try{new TextTrackCue(2,3,"")}catch(e){o.track=!0}}(),i=e.track&&!o.track,t.register("mediaelement-core",function(t,a,o,c,p,h){n=swfmini.hasFlashPlayerVersion("9.0.115"),t("html").addClass(n?"swf":"no-swf");var d=a.mediaelement;d.parseRtmp=function(e){var t,i,n,r=e.src.split("://"),s=r[1].split("/");for(e.server=r[0]+"://"+s[0]+"/",e.streamId=[],t=1,i=s.length;i>t;t++)n||-1===s[t].indexOf(":")||(s[t]=s[t].split(":")[1],n=!0),n?e.streamId.push(s[t]):e.server+=s[t]+"/";e.streamId.length||a.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var m=function(e,i){e=t(e);var n,a={src:e.attr("src")||"",elem:e,srcProp:e.prop("src")};return a.src?(n=e.attr("data-server"),null!=n&&(a.server=n),n=e.attr("type"),n?(a.type=n,a.container=t.trim(n.split(";")[0])):(i||(i=e[0].nodeName.toLowerCase(),"source"==i&&(i=(e.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=d.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=e.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:d.parseRtmp(a)),a):a},f=!n&&"postMessage"in o&&r,v=function(){v.loaded||(v.loaded=!0,h.noAutoTrack||a.ready("WINDOWLOAD",function(){y(),a.loader.loadList(["track-ui"])}))},g=function(){var e;return function(){!e&&f&&(e=!0,a.loader.loadScript("https://www.youtube.com/player_api"),t(function(){a._polyfill(["mediaelement-yt"])}))}}(),y=function(){n?u():g()};a.addPolyfill("mediaelement-yt",{test:!f,d:["dom-support"]}),d.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},d.mimeTypes.source=t.extend({},d.mimeTypes.audio,d.mimeTypes.video),d.getTypeForSrc=function(e,i){if(-1!=e.indexOf("youtube.com/watch?")||-1!=e.indexOf("youtube.com/v/"))return"video/youtube";if(0===e.indexOf("rtmp"))return i+"/rtmp";e=e.split("?")[0].split("#")[0].split("."),e=e[e.length-1];var n;return t.each(d.mimeTypes[i],function(t,i){return-1!==i.indexOf(e)?(n=t,!1):p}),n},d.srces=function(e,i){if(e=t(e),!i){i=[];var n=e[0].nodeName.toLowerCase(),a=m(e,n);return a.src?i.push(a):t("source",e).each(function(){a=m(this,n),a.src&&i.push(a)}),i}e.removeAttr("src").removeAttr("type").find("source").remove(),t.isArray(i)||(i=[i]),i.forEach(function(i){"string"==typeof i&&(i={src:i}),e.append(t(c.createElement("source")).attr(i))})},t.fn.loadMediaSrc=function(e,i){return this.each(function(){i!==p&&(t(this).removeAttr("poster"),i&&t.attr(this,"poster",i)),d.srces(this,e),t(this).mediaLoad()})},d.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],d.canThirdPlaySrces=function(e,i){var a="";return(n||f)&&(e=t(e),i=i||d.srces(e),t.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=d.swfMimeTypes.indexOf(t.container)||f&&"video/youtube"==t.container)?(a=t,!1):p})),a};var b={};d.canNativePlaySrces=function(e,i){var n="";if(r){e=t(e);var a=(e[0].nodeName||"").toLowerCase(),s=(b[a]||{prop:{_supvalue:!1}}).prop._supvalue||e[0].canPlayType;if(!s)return n;i=i||d.srces(e),t.each(i,function(t,i){return i.type&&s.call(e[0],i.type)?(n=i,!1):p})}return n};var w=/^\s*application\/octet\-stream\s*$/i,x=function(){var e=w.test(t.attr(this,"type")||"");return e&&t(this).removeAttr("type"),e};d.setError=function(e,i){if(t("source",e).filter(x).length){a.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{t(e).mediaLoad()}catch(n){}}else i||(i="can't play sources"),t(e).pause().data("mediaerror",i),a.error("mediaelementError: "+i),setTimeout(function(){t(e).data("mediaerror")&&t(e).addClass("media-error").trigger("mediaerror")},1)};var k=function(){var e;return function(t,i,r){a.ready(n?l:"mediaelement-yt",function(){d.createSWF?d.createSWF(t,i,r):e||(e=!0,y(),k(t,i,r))}),e||!f||d.createSWF||g()}}(),T=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=d.canThirdPlaySrces(e,n),r?k(e,r,t):a?d.setError(e,!1):T(e,t,!1,n,!0)):(r=d.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&d.setActive(e,"html5",t):a?(d.setError(e,!1),t&&"third"==t.isActive&&d.setActive(e,"html5",t)):T(e,t,!0,n,!0))},C=/^(?:embed|object|datalist)$/i,N=function(e,i){var n=a.data(e,"mediaelementBase")||a.data(e,"mediaelementBase",{}),r=d.srces(e),s=e.parentNode;clearTimeout(n.loadTimer),t(e).removeClass("media-error"),t.data(e,"mediaerror",!1),r.length&&s&&1==s.nodeType&&!C.test(s.nodeName||"")&&(i=i||a.data(e,"mediaelement"),d.sortMedia&&r.sort(d.sortMedia),T(e,i,h.preferFlash||p,r))};d.selectSource=N,t(c).on("ended",function(e){var i=a.data(e.target,"mediaelement");(!s||i&&"html5"!=i.isActive||t.prop(e.target,"loop"))&&setTimeout(function(){!t.prop(e.target,"paused")&&t.prop(e.target,"loop")&&t(e.target).prop("currentTime",0).play()},1)});var E=!1,A=function(){var i=function(){if(a.implement(this,"mediaelement")&&(N(this),e.mediaDefaultMuted||null==t.attr(this,"muted")||t.prop(this,"muted",!0),r&&(!s||"ActiveXObject"in o))){var i,n,l=this,u=function(){var e=t.prop(l,"buffered");if(e){for(var i="",n=0,a=e.length;a>n;n++)i+=e.end(n);return i}},c=function(){var e=u();e!=n&&(n=e,a.info("needed to trigger progress manually"),t(l).triggerHandler("progress"))};t(this).on({"play loadstart progress":function(e){"progress"==e.type&&(n=u()),clearTimeout(i),i=setTimeout(c,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(n=!1),clearTimeout(i)}}),"ActiveXObject"in o&&t.prop(this,"paused")&&!t.prop(this,"readyState")&&t(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&t(this).prop("preload","metadata").mediaLoad()}};a.ready("dom-support",function(){E=!0,s||a.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(e){var i;i=a.defineNodeNameProperty(e,"load",{prop:{value:function(){var e=a.data(this,"mediaelement");N(this,e),!r||e&&"html5"!=e.isActive||!i.prop._supvalue||i.prop._supvalue.apply(this,arguments)}}}),b[e]=a.defineNodeNameProperty(e,"canPlayType",{prop:{value:function(i){var a="";return r&&b[e].prop._supvalue&&(a=b[e].prop._supvalue.call(this,i),"no"==a&&(a="")),!a&&n&&(i=t.trim((i||"").split(";")[0]),-1!=d.swfMimeTypes.indexOf(i)&&(a="maybe")),a}}})}),a.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=a.data(e,"mediaelementBase")||a.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){N(e),e=null},9)}}),a.addReady(function(e,n){var a=t("video, audio",e).add(n.filter("video, audio")).each(i);!v.loaded&&t("track",a).length&&v(),a=null})}),r&&!E&&a.addReady(function(e,i){E||t("video, audio",e).add(i.filter("video, audio")).each(function(){return d.canNativePlaySrces(this)?p:(y(),E=!0,!1)})})};i&&a.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(a.isReady("mediaelement-core",!0),A(),a.ready("WINDOWLOAD mediaelement",y)):a.ready(l,A),a.ready("track",v)})})(Modernizr,webshims),webshims.register("track",function(e,t,i,n){"use strict";var a=t.mediaelement;(new Date).getTime(),e.fn.addBack?"addBack":"andSelf";var r={subtitles:1,captions:1,descriptions:1},s=e("<track />"),o=Modernizr.ES5&&Modernizr.objectAccessor,l=function(e){var i={};return e.addEventListener=function(e,n){i[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]=n},e.removeEventListener=function(e,n){i[e]&&i[e]!=n&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]&&delete i[e]},e},u={getCueById:function(e){for(var t=null,i=0,n=this.length;n>i;i++)if(this[i].id===e){t=this[i];break}return t}},c={0:"disabled",1:"hidden",2:"showing"},p={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var i=this.cues[this.cues.length-1];i&&i.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=a.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var i=this.cues||[],n=0,a=i.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;a>n;n++)if(i[n]===e){i.splice(n,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined}},h=["kind","label","srclang"],d={srclang:"language"},m=Function.prototype.call.bind(Object.prototype.hasOwnProperty),f=function(i,n){var a,r,s=[],o=[],l=[];if(i||(i=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),n||(i.blockTrackListUpdate=!0,n=e.prop(this,"textTracks"),i.blockTrackListUpdate=!1),clearTimeout(i.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");l.push(t),-1==n.indexOf(t)&&o.push(t)}),i.scriptedTextTracks)for(a=0,r=i.scriptedTextTracks.length;r>a;a++)l.push(i.scriptedTextTracks[a]),-1==n.indexOf(i.scriptedTextTracks[a])&&o.push(i.scriptedTextTracks[a]);for(a=0,r=n.length;r>a;a++)-1==l.indexOf(n[a])&&s.push(n[a]);if(s.length||o.length){for(n.splice(0),a=0,r=l.length;r>a;a++)n.push(l[a]);for(a=0,r=s.length;r>a;a++)e([n]).triggerHandler(e.Event({type:"removetrack",track:s[a]}));for(a=0,r=o.length;r>a;a++)e([n]).triggerHandler(e.Event({type:"addtrack",track:o[a]}));(i.scriptedTextTracks||s.length)&&e(this).triggerHandler("updatetrackdisplay")}},v=function(i,n){n||(n=t.data(i,"trackData")),n&&!n.isTriggering&&(n.isTriggering=!0,setTimeout(function(){e(i).closest("audio, video").triggerHandler("updatetrackdisplay"),n.isTriggering=!1},1))},g=function(){var i={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return i.captions=i.subtitles,function(n){var a,r,s=e.prop(n,"default");return s&&"metadata"!=(a=e.prop(n,"kind"))&&(r=e(n).parent().find("track[default]").filter(function(){return!!i[a][e.prop(this,"kind")]})[0],r!=n&&(s=!1,t.error("more than one default track of a specific kind detected. Fall back to default = false"))),s}}(),y=e("<div />")[0],b=function(e,i,n){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=i,this.text=n,l(this)};b.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",i="",r=n.createDocumentFragment();return m(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,n;if(t!=this.text)for(t=this.text,i=a.parseCueTextToHTML(t),y.innerHTML=i,e=0,n=y.childNodes.length;n>e;e++)r.appendChild(y.childNodes[e].cloneNode(!0));return r.cloneNode(!0)}),e?e.apply(this,arguments):r.cloneNode(!0)},track:null,id:""},i.TextTrackCue=b,a.createCueList=function(){return e.extend([],u)},a.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,i=/\<\s*\//,n=function(e,t,n,a){var r;return i.test(a)?r="</"+e+">":(n.splice(0,1),r="<"+e+" "+t+'="'+n.join(" ").replace(/\"/g,"&#34;")+'">'),r},a=function(e){var i=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return i[0]&&(i[0]=i[0].toLowerCase(),t.test(i[0])?"c"==i[0]?e=n("span","class",i,e):"v"==i[0]&&(e=n("q","title",i,e)):e=""),e};return function(t){return t.replace(e,a)}}(),a.loadTextTrack=function(i,n,s,o){var l="play playing updatetrackdisplay",u=s.track,c=function(){var r,o,p;if("disabled"!=u.mode&&e.attr(n,"src")&&(p=e.prop(n,"src"))&&(e(i).unbind(l,c),!s.readyState)){r=function(){s.readyState=3,u.cues=null,u.activeCues=u.shimActiveCues=u._shimActiveCues=null,e(n).triggerHandler("error")},s.readyState=1;try{u.cues=a.createCueList(),u.activeCues=u.shimActiveCues=u._shimActiveCues=a.createCueList(),o=e.ajax({dataType:"text",url:p,success:function(l){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),a.parseCaptions(l,u,function(t){t&&"length"in t?(s.readyState=2,e(n).triggerHandler("load"),e(i).triggerHandler("updatetrackdisplay")):r()})},error:r})}catch(h){r(),t.error(h)}}};s.readyState=0,u.shimActiveCues=null,u._shimActiveCues=null,u.activeCues=null,u.cues=null,e(i).unbind(l,c),e(i).on(l,c),o&&(u.mode=r[u.kind]?"showing":"hidden",c())},a.createTextTrack=function(i,n){var r,s;return n.nodeName&&(s=t.data(n,"trackData"),s&&(v(n,s),r=s.track)),r||(r=l(t.objectCreate(p)),o||h.forEach(function(t){var i=e.prop(n,t);i&&(r[d[t]||t]=i)}),n.nodeName?(o&&h.forEach(function(i){t.defineProperty(r,d[i]||i,{get:function(){return e.prop(n,i)}})}),r.id=e(n).prop("id"),s=t.data(n,"trackData",{track:r}),a.loadTextTrack(i,n,s,g(n))):(o&&h.forEach(function(e){t.defineProperty(r,d[e]||e,{value:n[e],writeable:!1})}),r.cues=a.createCueList(),r.activeCues=r._shimActiveCues=r.shimActiveCues=a.createCueList(),r.mode="hidden",r.readyState=2),"subtitles"!=r.kind||r.language||t.error("you must provide a language for track in subtitles state"),r.__wsmode=r.mode),r},a.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,i=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,n=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,a=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(r){var s,o,l,u,c,p,h,d,m,f;if(d=i.exec(r))return null;if(d=n.exec(r))return null;if(d=a.exec(r))return null;for(s=r.split(/\n/g);!s[0].replace(/\s+/gi,"").length&&s.length>0;)s.shift();for(s[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(h=s.shift().replace(/\s*/gi,"")+""),p=0;s.length>p;p++){var v=s[p];(m=e.exec(v))&&(c=m.slice(1),o=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),l=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),s=s.slice(0,p).concat(s.slice(p+1));break}return o||l?(u=s.join("\n"),f=new b(o,l,u),h&&(f.id=h),f):(t.warn("couldn't extract time information: "+[o,l,s.join("\n"),h].join(" ; ")),null)}}(),a.parseCaptions=function(e,i,n){a.createCueList();var r,s,o,l,u;e?(o=/^WEBVTT(\s*FILE)?/gi,s=function(c,p){for(;p>c;c++){if(r=e[c],o.test(r))u=!0;else if(r.replace(/\s*/gi,"").length){if(!u){t.error("please use WebVTT format. This is the standard"),n(null);break}r=a.parseCaptionChunk(r,c),r&&i.addCue(r)}if((new Date).getTime()-30>l){c++,setTimeout(function(){l=(new Date).getTime(),s(c,p)},90);break}}c>=p&&(u||t.error("please use WebVTT format. This is the standard"),n(i.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){l=(new Date).getTime(),e=e.split(/\n\n+/g),s(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},a.createTrackList=function(i,n){return n=n||t.data(i,"mediaelementBase")||t.data(i,"mediaelementBase",{}),n.textTracks||(n.textTracks=[],t.defineProperties(n.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:{value:function(e){for(var t=null,i=0;n.textTracks.length>i;i++)if(e==n.textTracks[i].id){t=n.textTracks[i];break}return t}}}),l(n.textTracks),e(i).on("updatetrackdisplay",function(){for(var t,i=0;n.textTracks.length>i;i++)t=n.textTracks[i],t.__wsmode!=t.mode&&(t.__wsmode=t.mode,e([n.textTracks]).triggerHandler("change"))})),n.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var i=t.data(this,"trackData");this.setAttribute("data-kind",e),i&&(i.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(h,function(i,n){var a=d[n]||n;t.onNodeNamesPropertyModify("track",n,function(){var i=t.data(this,"trackData");i&&("kind"==n&&v(this,i),o||(i.track[a]=e.prop(this,n)))})}),t.onNodeNamesPropertyModify("track","src",function(i){if(i){var n,r=t.data(this,"trackData");r&&(n=e(this).closest("video, audio"),n[0]&&a.loadTextTrack(n,this,r))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(t.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return a.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),n=a.createTrackList(e,i);return i.blockTrackListUpdate||f.call(e,i,n),n},writeable:!1},addTextTrack:{value:function(e,i,n){var r=a.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:i||"",srclang:n||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(r),f.call(this),r}}},"prop"),e(n).on("emptied ended updatetracklist",function(i){if(e(i.target).is("audio, video")){var n=t.data(i.target,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){f.call(i.target,n)},0))}});var w=function(e,t){return t.readyState||e.readyState},x=function(e){e.originalEvent&&e.stopImmediatePropagation()},k=function(){if(t.implement(this,"track")){var i,n,a=e.prop(this,"track"),r=this.track;r&&(i=e.prop(this,"kind"),n=w(this,r),(r.mode||n)&&(a.mode=c[r.mode]||r.mode),"descriptions"!=i&&(r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:i}))),e(this).on("load error",x)}};t.addReady(function(i,n){var a=n.filter("video, audio, track").closest("audio, video");e("video, audio",i).add(a).each(function(){f.call(this)}).each(function(){if(Modernizr.track){var i=e.prop(this,"textTracks"),n=this.textTracks;i.length!=n.length&&t.error("textTracks couldn't be copied"),e("track",this).each(k)}}),a.each(function(){var e=this,i=t.data(e,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){f.call(e,i)},9))})}),Modernizr.texttrackapi&&e("video, audio").trigger("trackapichange")});