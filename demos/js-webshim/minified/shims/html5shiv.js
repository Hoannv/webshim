(function(h){if(!Modernizr.genericDOM){var b=h.webshims,f=document,c,d,i=/<([\w:]+)/,j={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1},g=b.fn.init,k=/^(?:[^<]*(<[\w\W]+>)[^>]*$)/;b.fixHTML5=function(a){if(typeof a!="string"||j[(i.exec(a)||["",""])[1].toLowerCase()])return a;if(!d){c=f.body;if(!c)return a;d=f.createElement("div");d.style.display="none"}var e=d.cloneNode(false);c.appendChild(e);e.innerHTML=a;c.removeChild(e);return e.childNodes};b.fn.init=function(a){if(a&&k.exec(a))arguments[0]=
b.fixHTML5(a);return g.apply(this,arguments)};b.fn.init.prototype=g.prototype}})(jQuery);
