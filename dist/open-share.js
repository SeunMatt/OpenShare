"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}();!function t(e,r,a){function n(o,i){if(!r[o]){if(!e[o]){var u="function"==typeof require&&require;if(!i&&u)return u(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=r[o]={exports:{}};e[o][0].call(h.exports,function(t){var r=e[o][1][t];return n(r?r:t)},h,h.exports,t,e,r,a)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<a.length;o++)n(a[o]);return n}({1:[function(t,e,r){function a(t){var e=t.getAttribute("data-open-share"),r=e.indexOf("-"),a=void 0;if(r>-1){var u=e.substr(r+1,1),c=e.substr(r,2);e=e.replace(c,u.toUpperCase())}var h=n[e];if(!h)throw new Error("Open Share: "+e+" is an invalid type");a=new s(e,h),t.getAttribute("data-open-share-dynamic")&&(a.dynamic=!0),o(a,t),t.addEventListener("click",function(e){i(e,t,a)}),t.addEventListener("OpenShare.trigger",function(e){i(e,t,a)}),t.setAttribute("data-open-share-node",e)}var n=t("../src/modules/share-transforms"),s=t("../src/modules/open-share"),o=t("./setData"),i=t("./share");e.exports=a},{"../src/modules/open-share":11,"../src/modules/share-transforms":13,"./setData":3,"./share":4}],2:[function(t,e,r){function a(t,e){[].forEach.call(t,function(t){var r=new MutationObserver(function(t){e(t[0].target)});r.observe(t,{childList:!0})})}e.exports=a},{}],3:[function(t,e,r){function a(t,e){t.setData({url:e.getAttribute("data-open-share-url"),text:e.getAttribute("data-open-share-text"),via:e.getAttribute("data-open-share-via"),hashtags:e.getAttribute("data-open-share-hashtags"),tweetId:e.getAttribute("data-open-share-tweet-id"),related:e.getAttribute("data-open-share-related"),screenName:e.getAttribute("data-open-share-screen-name"),userId:e.getAttribute("data-open-share-user-id"),link:e.getAttribute("data-open-share-link"),picture:e.getAttribute("data-open-share-picture"),caption:e.getAttribute("data-open-share-caption"),description:e.getAttribute("data-open-share-description"),user:e.getAttribute("data-open-share-user"),video:e.getAttribute("data-open-share-video"),username:e.getAttribute("data-open-share-username"),title:e.getAttribute("data-open-share-title"),media:e.getAttribute("data-open-share-media"),to:e.getAttribute("data-open-share-to"),subject:e.getAttribute("data-open-share-subject"),body:e.getAttribute("data-open-share-body"),ios:e.getAttribute("data-open-share-ios"),type:e.getAttribute("data-open-share-type"),center:e.getAttribute("data-open-share-center"),views:e.getAttribute("data-open-share-views"),zoom:e.getAttribute("data-open-share-zoom"),search:e.getAttribute("data-open-share-search"),saddr:e.getAttribute("data-open-share-saddr"),daddr:e.getAttribute("data-open-share-daddr"),directionsmode:e.getAttribute("data-open-share-directions-mode"),repo:e.getAttribute("data-open-share-repo"),shot:e.getAttribute("data-open-share-shot"),pen:e.getAttribute("data-open-share-pen"),view:e.getAttribute("data-open-share-view"),issue:e.getAttribute("data-open-share-issue")})}e.exports=a},{}],4:[function(t,e,r){function a(t,e,r){r.dynamic&&s(r,e),r.share(t),n.trigger(e,"shared")}var n=t("../src/modules/events"),s=t("./setData");e.exports=a},{"../src/modules/events":10,"./setData":3}],5:[function(t,e,r){e.exports=function(){var e=t("./modules/data-attr"),r=t("./modules/share-api"),a=t("./modules/events"),n=t("./modules/open-share"),s=t("./modules/share-transforms"),o=t("./modules/count"),i=t("./modules/count-api");e(n,o,s,a),window.OpenShare={share:r(n,s,a),count:i()}}()},{"./modules/count":8,"./modules/count-api":6,"./modules/data-attr":9,"./modules/events":10,"./modules/open-share":11,"./modules/share-api":12,"./modules/share-transforms":13}],6:[function(t,e,r){t("./count");e.exports=function(){var t=function e(t){var r=t.type,a=t.url,n=t.appendTo,s=t.element,o=t.classes;_classCallCheck(this,e);var i=document.createElement(s||"span");return i.setAttribute("data-open-share-count",r),i.setAttribute("data-open-share-count-url",a),i.classList.add("open-share-count"),o&&Array.isArray(o)&&o.forEach(function(t){i.classList.add(t)}),n&&n.appendChild(i),i};return t}},{"./count":8}],7:[function(t,e,r){function a(t,e,r,n){var s=new XMLHttpRequest;s.open("GET",t+"?page="+e),s.addEventListener("load",function(){var s=JSON.parse(this.response);r+=s.length,12===s.length?(e++,a(t,e,r,n)):n(r)}),s.send()}function n(t,e){if("number"!=typeof t)throw new TypeError("Expected value to be a number");var r=e>0?"e":"e-",a=e>0?"e-":"e";return e=Math.abs(e),Number(Math.round(t+r+e)+a+e)}function s(t){return n(t/1e3,1)+"K"}function o(t){return n(t/1e6,1)+"M"}function i(t,e){e>999999?t.innerHTML=o(e):e>999?t.innerHTML=s(e):t.innerHTML=e}e.exports={facebook:function(t){return{type:"get",url:"//graph.facebook.com/?id="+t,transform:function(t){var e=JSON.parse(t.responseText).shares;return this.storeSet(this.type+"-"+this.shared,e),e}}},pinterest:function(t){return{type:"jsonp",url:"//api.pinterest.com/v1/urls/count.json?callback=?&url="+t,transform:function(t){var e=t.count;return this.storeSet(this.type+"-"+this.shared,e),e}}},linkedin:function(t){return{type:"jsonp",url:"//www.linkedin.com/countserv/count/share?url="+t+"&format=jsonp&callback=?",transform:function(t){var e=t.count;return this.storeSet(this.type+"-"+this.shared,e),e}}},reddit:function(t){return{type:"get",url:"//www.reddit.com/api/info.json?url="+t,transform:function(t){var e=JSON.parse(t.responseText).data.children,r=0;return e.forEach(function(t){r+=Number(t.data.ups)}),this.storeSet(this.type+"-"+this.shared,r),r}}},google:function(t){return{type:"post",data:{method:"pos.plusones.get",id:"p",params:{nolog:!0,id:t,source:"widget",userId:"@viewer",groupId:"@self"},jsonrpc:"2.0",key:"p",apiVersion:"v1"},url:"https://clients6.google.com/rpc",transform:function(t){var e=JSON.parse(t.responseText).result.metadata.globalCounts.count;return this.storeSet(this.type+"-"+this.shared,e),e}}},githubStars:function(t){return t=t.indexOf("github.com/")>-1?t.split("github.com/")[1]:t,{type:"get",url:"//api.github.com/repos/"+t,transform:function(t){var e=JSON.parse(t.responseText).stargazers_count;return this.storeSet(this.type+"-"+this.shared,e),e}}},githubForks:function(t){return t=t.indexOf("github.com/")>-1?t.split("github.com/")[1]:t,{type:"get",url:"//api.github.com/repos/"+t,transform:function(t){var e=JSON.parse(t.responseText).forks_count;return this.storeSet(this.type+"-"+this.shared,e),e}}},githubWatchers:function(t){return t=t.indexOf("github.com/")>-1?t.split("github.com/")[1]:t,{type:"get",url:"//api.github.com/repos/"+t,transform:function(t){var e=JSON.parse(t.responseText).watchers_count;return this.storeSet(this.type+"-"+this.shared,e),e}}},dribbble:function(t){t=t.indexOf("dribbble.com/shots")>-1?t.split("shots/")[1]:t;var e="https://api.dribbble.com/v1/shots/"+t+"/likes";return{type:"get",url:e,transform:function(t,r){var n=this,s=JSON.parse(t.responseText).length;if(12!==s)return this.storeSet(this.type+"-"+this.shared,s),s;var o=2;a(e,o,s,function(t){return n.storeSet(n.type+"-"+n.shared,t),i(n.os,t),r.trigger(n.os,"counted-"+n.url),t})}}}}},{}],8:[function(t,e,r){function a(t,e){if("number"!=typeof t)throw new TypeError("Expected value to be a number");var r=e>0?"e":"e-",a=e>0?"e-":"e";return e=Math.abs(e),Number(Math.round(t+r+e)+a+e)}function n(t){return a(t/1e3,1)+"K"}function s(t){return a(t/1e6,1)+"M"}function o(t,e){e>999999?t.innerHTML=s(e):e>999?t.innerHTML=n(e):t.innerHTML=e}var i=t("./count-transforms"),u=t("./events");e.exports=function(){function t(e,r){var a=this;if(_classCallCheck(this,t),!r)throw new Error("Open Share: no url provided for count");if(0===e.indexOf("github")&&("github-stars"===e?e="githubStars":"github-forks"===e?e="githubForks":"github-watchers"===e?e="githubWatchers":console.error("Invalid Github count type. Try github-stars, github-forks, or github-watchers.")),e.indexOf(",")>-1)this.type=e,this.typeArr=this.type.split(","),this.countData=[],this.typeArr.forEach(function(t){if(!i[t])throw new Error("Open Share: "+e+" is an invalid count type");a.countData.push(i[t](r))});else{if(!i[e])throw new Error("Open Share: "+e+" is an invalid count type");this.type=e,this.countData=i[e](r)}}return _createClass(t,[{key:"count",value:function(t){this.os=t,this.url=this.os.getAttribute("data-open-share-count"),this.shared=this.os.getAttribute("data-open-share-count-url"),Array.isArray(this.countData)?this.getCounts():this.getCount()}},{key:"getCount",value:function(){var t=this.storeGet(this.type+"-"+this.shared);t&&o(this.os,t),this[this.countData.type](this.countData)}},{key:"getCounts",value:function(){var t=this;this.total=[];var e=this.storeGet(this.type+"-"+this.shared);e&&o(this.os,e),this.countData.forEach(function(e){t[e.type](e,function(e){if(t.total.push(e),t.total.length===t.typeArr.length){var r=0;t.total.forEach(function(t){r+=t}),t.storeSet(t.type+"-"+t.shared,r),o(t.os,r)}})}),o(this.os,this.total)}},{key:"jsonp",value:function(t,e){var r=this,a=Math.random().toString(36).substring(7).replace(/[^a-zA-Z]/g,"");window[a]=function(a){var n=t.transform.apply(r,[a])||0;e&&"function"==typeof e?e(n):o(r.os,n),u.trigger(r.os,"counted-"+r.url)};var n=document.createElement("script");n.src=t.url.replace("callback=?","callback="+a),document.getElementsByTagName("head")[0].appendChild(n)}},{key:"get",value:function(t,e){var r=this,a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState)if(200===a.status){var n=t.transform.apply(r,[a,u])||0;e&&"function"==typeof e?e(n):o(r.os,n),u.trigger(r.os,"counted-"+r.url)}else console.error("Failed to get API data from",t.url,". Please use the latest version of OpenShare.")},a.open("GET",t.url),a.send()}},{key:"post",value:function(t,e){var r=this,a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var n=t.transform.apply(r,[a])||0;e&&"function"==typeof e?e(n):o(r.os,n),u.trigger(r.os,"counted-"+r.url)}},a.open("POST",t.url),a.setRequestHeader("Content-Type","application/json;charset=UTF-8"),a.send(JSON.stringify(t.data))}},{key:"storeSet",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?0:arguments[1];window.localStorage&&t&&localStorage.setItem("OpenShare-"+t,e)}},{key:"storeGet",value:function(t){return window.localStorage&&t?localStorage.getItem("OpenShare-"+t):void 0}}]),t}()},{"./count-transforms":7,"./events":10}],9:[function(t,e,r){var a=(t("./open-share"),t("./count")),n=(t("./share-transforms"),t("./events")),s=(t("../../lib/setData"),t("../../lib/share"),t("../../lib/initializeWatcher")),o=t("../../lib/initializeShareNode");e.exports=function(){function t(){e(),void 0!==window.MutationObserver&&s(document.querySelectorAll("[data-open-share-watch]"),e)}function e(){var t=arguments.length<=0||void 0===arguments[0]?document:arguments[0],e=t.querySelectorAll("[data-open-share]:not([data-open-share-node])");[].forEach.call(e,o);var a=t.querySelectorAll("[data-open-share-count]:not([data-open-share-node])");[].forEach.call(a,r),n.trigger(document,"loaded")}function r(t){var e=t.getAttribute("data-open-share-count"),r=t.getAttribute("data-open-share-count-repo")||t.getAttribute("data-open-share-count-shot")||t.getAttribute("data-open-share-count-url"),n=new a(e,r);n.count(t),t.setAttribute("data-open-share-node",e)}document.addEventListener("OpenShare.load",t),document.addEventListener("DOMContentLoaded",t)}},{"../../lib/initializeShareNode":1,"../../lib/initializeWatcher":2,"../../lib/setData":3,"../../lib/share":4,"./count":8,"./events":10,"./open-share":11,"./share-transforms":13}],10:[function(t,e,r){e.exports={trigger:function(t,e){var r=document.createEvent("Event");r.initEvent("OpenShare."+e,!0,!0),t.dispatchEvent(r)}}},{}],11:[function(t,e,r){e.exports=function(){function t(e,r){_classCallCheck(this,t),this.ios=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,this.type=e,this.dynamic=!1,this.transform=r,this.typeCaps=e.charAt(0).toUpperCase()+e.slice(1)}return _createClass(t,[{key:"setData",value:function(t){if(this.ios){var e=this.transform(t,!0);this.mobileShareUrl=this.template(e.url,e.data)}var r=this.transform(t);this.shareUrl=this.template(r.url,r.data)}},{key:"share",value:function(t){var e=this;if(this.mobileShareUrl){var r=(new Date).valueOf();setTimeout(function(){var t=(new Date).valueOf();t-r>1600||(window.location=e.shareUrl)},1500),window.location=this.mobileShareUrl}else"email"===this.type?window.location=this.shareUrl:window.open(this.shareUrl,"OpenShare")}},{key:"template",value:function(t,e){var r=["appendTo","url","innerHTML","classes"],a=t,n=void 0;for(n in e)!e[n]||r.indexOf(n)>-1||(e[n]=encodeURIComponent(e[n]),a+=n+"="+e[n]+"&");return a.substr(0,a.length-1)}}]),t}()},{}],12:[function(t,e,r){var a=t("./open-share"),n=t("./share-transforms"),s=t("./events");e.exports=function(){var t=function(){function t(e,r){var s=this;_classCallCheck(this,t);var o=e.type.indexOf("-");e.type;if(o>-1){var i=e.type.substr(o+1,1),u=e.type.substr(o,2);e.type=e.type.replace(u,i.toUpperCase())}var c=void 0;return this.element=r,this.data=e,this.os=new a(e.type,n[e.type]),this.os.setData(e),r&&!e.element||(r=e.element,c=document.createElement(r||"a"),e.type&&(c.classList.add("open-share-link",e.type),c.setAttribute("data-open-share",e.type)),e.url&&c.setAttribute("data-open-share-url",e.url),e.via&&c.setAttribute("data-open-share-via",e.via),e.text&&c.setAttribute("data-open-share-text",e.text),e.hashtags&&c.setAttribute("data-open-share-hashtags",e.hashtags),e.innerHTML&&(c.innerHTML=e.innerHTML)),c&&(r=c),e.bindClick&&r.addEventListener("click",function(t){s.share()}),e.appendTo&&e.appendTo.appendChild(r),e.classes&&Array.isArray(e.classes)&&e.classes.forEach(function(t){r.classList.add(t)}),this.element=r,r}return _createClass(t,[{key:"share",value:function(t){this.data.dynamic&&this.os.setData(data),this.os.share(t),s.trigger(this.element,"shared")}}]),t}();return t}},{"./events":10,"./open-share":11,"./share-transforms":13}],13:[function(t,e,r){e.exports={twitter:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];if(e&&t.ios){var r="";if(t.text&&(r+=t.text),t.url&&(r+=" - "+t.url),t.hashtags){var a=t.hashtags.split(",");a.forEach(function(t){r+=" #"+t})}return t.via&&(r+=" via "+t.via),{url:"twitter://post?",data:{message:r}}}return{url:"https://twitter.com/share?",data:t}},twitterRetweet:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return e&&t.ios?{url:"twitter://status?",data:{id:t.tweetId}}:{url:"https://twitter.com/intent/retweet?",data:{tweet_id:t.tweetId,related:t.related}}},twitterLike:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return e&&t.ios?{url:"twitter://status?",data:{id:t.tweetId}}:{url:"https://twitter.com/intent/favorite?",data:{tweet_id:t.tweetId,related:t.related}}},twitterFollow:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];if(e&&t.ios){var r=t.screenName?{screen_name:t.screenName}:{id:t.userId};return{url:"twitter://user?",data:r}}return{url:"https://twitter.com/intent/user?",data:{screen_name:t.screenName,user_id:t.userId}}},facebook:function(t){return{url:"https://www.facebook.com/dialog/feed?app_id=961342543922322&redirect_uri=http://facebook.com&",data:t}},facebookSend:function(t){return{url:"https://www.facebook.com/dialog/send?app_id=961342543922322&redirect_uri=http://facebook.com&",data:t}},youtube:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return e&&t.ios?{url:"youtube:"+t.video+"?"}:{url:"https://www.youtube.com/watch?v="+t.video+"?"}},youtubeSubscribe:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return e&&t.ios?{url:"youtube://www.youtube.com/user/"+t.user+"?"}:{url:"https://www.youtube.com/user/"+t.user+"?"}},instagram:function(t){return{url:"instagram://camera?"}},instagramFollow:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return e&&t.ios?{url:"instagram://user?",data:t}:{url:"http://www.instagram.com/"+t.username+"?"}},snapchat:function(t){return{url:"snapchat://add/"+t.username+"?"}},google:function(t){return{url:"https://plus.google.com/share?",data:t}},googleMaps:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return t.search&&(t.q=t.search,delete t.search),e&&t.ios?{url:"comgooglemaps://?",data:e}:(!e&&t.ios&&delete t.ios,{url:"https://maps.google.com/?",data:t})},pinterest:function(t){return{url:"https://pinterest.com/pin/create/bookmarklet/?",data:t}},linkedin:function(t){return{url:"http://www.linkedin.com/shareArticle?",data:t}},buffer:function(t){return{url:"http://bufferapp.com/add?",data:t}},tumblr:function(t){return{url:"https://www.tumblr.com/widgets/share/tool?",data:t}},reddit:function(t){return{url:"http://reddit.com/submit?",data:t}},flickr:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return e&&t.ios?{url:"flickr://photos/"+t.username+"?"}:{url:"http://www.flickr.com/photos/"+t.username+"?"}},whatsapp:function(t){return{url:"whatsapp://send?",data:t}},sms:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return{url:e?"sms:&":"sms:?",data:t}},email:function(t){var e="mailto:";return null!==t.to&&(e+=""+t.to),e+="?",{url:e,data:{subject:t.subject,body:t.body}}},github:function(t){var e=(arguments.length<=1||void 0===arguments[1]?!1:arguments[1],t.repo?"https://github.com/"+t.repo:t.url);return t.issue&&(e+="/issues/new?title="+t.issue+"&body="+t.body),{url:e+"?"}},dribbble:function(t){var e=(arguments.length<=1||void 0===arguments[1]?!1:arguments[1],t.shot?"https://dribbble.com/shots/"+t.shot+"?":t.url+"?");return{url:e}},codepen:function(t){var e=t.pen&&t.username&&t.view?"https://codepen.io/"+t.username+"/"+t.view+"/"+t.pen+"?":t.url+"?";return{url:e}}}},{}]},{},[5]);