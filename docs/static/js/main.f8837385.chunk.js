(this.webpackJsonpziptotaiwanzip=this.webpackJsonpziptotaiwanzip||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(53),c=n.n(s),o=(n(62),n(54)),i=n(7),l=n.n(i),p=n(25),u=n(17),h=n(55),f=n.n(h),m=(n(64),n(16)),d=n.n(m),b=n(26),v=n.n(b),g=n(56),j=["applescript","as","atom","bas","bash","boot","_coffee","c++","c","cake","cc","cl2","clj","cljc","cljs","cljs.hl","cljscm","cljx","cjsx","cson","coffee","cpp","cs","csharp","css","d","dart","dfm","di","delphi","diff","django","docker","dockerfile","dpr","erl","fortran","freepascal","fs","fsharp","gcode","gemspec","go","groovy","gyp","h++","h","handlebars","hbs","hic","hpp","html","html.handlebars","html.hbs","hs","hx","iced","irb","java","jinja","jl","js","json","jsp","jsx","kt","ktm","kts","lazarus","less","lfm","lisp","lpr","lua","m","mak","makefile","matlab","md","mk","mkd","mkdown","ml","mm","nc","objc","obj-c","osascript","pas","pascal","perl","php","php3","php4","php5","php6","pl","plist","podspec","ps","ps1","pp","py","r","rb","rs","rss","ruby","scala","scm","scpt","scss","sh","sld","st","styl","sql","swift","tex","txt","thor","v","vb","vbnet","vbs","veo","xhtml","xml","xsl","yaml","yml","zsh"];function w(e){var t=[];e.forEach((function(e,n){t.push([e,n])}));for(var n=0,a=t;n<a.length;n++){var r=a[n],s=Object(u.a)(r,2),c=s[0];s[1].dir&&function(){var t=e.folder(c),n=0;t.forEach((function(){return n++})),0===n&&(e=e.remove(c))}()}return e}function k(e){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(l.a.mark((function e(t){var n,a,r,s,c,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=i.length>1&&void 0!==i[1]?i[1]:console.log,a=[],t.forEach((function(e,t){a.push([e,t])})),r=l.a.mark((function e(){var a,r,i,p,h,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=c[s],r=Object(u.a)(a,2),i=r[0],r[1].dir){e.next=12;break}return n(i),p=d.a.simplifiedToTaiwanWithPhrases(i),e.next=7,t.file(i).async("string");case 7:h=e.sent,f=j.find((function(e){return i.length>=e.length&&i.substr(i.length-e.length)===e})),i!==p&&(t=t.remove(i),i=p),f&&(Object(o.a)("comment"),h=d.a.simplifiedToTaiwanWithPhrases(h)),t=t.file(p,h);case 12:case"end":return e.stop()}}),e)})),s=0,c=a;case 5:if(!(s<c.length)){e.next=10;break}return e.delegateYield(r(),"t0",7);case 7:s++,e.next=5;break;case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(d.a),console.log(v.a);var y=function(){var e=Object(a.useState)("ZIP\u6587\u5b57\u5167\u5bb9\u8f49\u63db\u81fa\u7063\u7e41\u9ad4"),t=Object(u.a)(e,2),n=t[0],s=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),r.a.createElement("input",{type:"file",onChange:function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new v.a,a=t.target.files[0],e.next=4,n.loadAsync(a);case 4:return n=e.sent,e.next=7,k(n,s);case 7:n=e.sent,s("Waitting ...."),(n=w(n)).generateAsync({type:"blob"}).then((function(e){s("Finish"),Object(g.saveAs)(e,"tw_"+a.name)}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),n),r.a.createElement("p",null,"\u9451\u65bc\u7c21\u9ad4\u5b57\u548c\u7528\u8a9e\u4e0d\u5408\u4f7f\u7528\u7fd2\u6163\uff0c\u505a\u4e86\u4e00\u500b\u5c07\u76ee\u9304\u5167\u5bb9\u5168\u8f49\u63db\u70ba\u81fa\u7063\u7e41\u9ad4\u5de5\u5177"),r.a.createElement("p",null,"\u5148\u5c07\u76ee\u9304ZIP\u6253\u5305\u5f8c\uff0c\u9ede\u64ca\u7db2\u9801\u5167\u9078\u64c7\u6a94\u6848\uff0c\u8655\u7406\u5b8c\u6210\u5f8c\u81ea\u52d5\u4e0b\u8f09\uff0c\u6a94\u540d\u70ba tw_\u539f\u540d\u7a31.zip "),r.a.createElement("p",null,"\u7528\u9014\u8209\u4f8b\uff1a\u7c21\u9ad4\u5b57\u505a\u7684\u7a0b\u5f0f\u5c08\u6848(GitHub\u4e0a\u4e00\u5806)"),r.a.createElement("p",null,"\u4f7f\u7528 React , node-opencc \u6587\u5b57\u8f49\u63db\uff0cjszip \u5b58\u53d6zip\uff0cfile-saver \u6a94\u6848\u5b58\u53d6(\u53ea\u4f7f\u7528\u5230\u4e0b\u8f09\u529f\u80fd)"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},57:function(e,t,n){e.exports=n(107)},62:function(e,t,n){},64:function(e,t,n){},72:function(e,t){},74:function(e,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.f8837385.chunk.js.map