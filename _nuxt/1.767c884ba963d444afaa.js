(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{188:function(t,e,o){"use strict";o.r(e);var r=o(135),n=o(335),d={components:{gpLayoutDefaultContainer:r.a,gpAtomVideo:n.a},props:{options:{type:Object,default:function(){return null}},video:{type:Object,required:!1,default:function(){return{sources:[{media:"default",srcset:"video/9_16/poster/576.jpg"},{media:"xs",srcset:"video/16_9/poster/576.jpg"},{media:"sm",srcset:"video/16_9/poster/768.jpg"},{media:"md",srcset:"video/16_9/poster/992.jpg"},{media:"lg",srcset:"video/16_9/poster/1200.jpg"},{media:"xl",srcset:"video/16_9/poster/1600.jpg"}]}}}}},c=(o(340),o(12)),component=Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("gp-layout-default-container",this._b({staticClass:"gp-organism-stage-video"},"gp-layout-default-container",this.options,!1),[e("template",{slot:"background"},[this.video?e("gp-atom-video",this._b({},"gp-atom-video",this.video,!1)):this._e()],1)],2)}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,o){"use strict";(function(t){o(61),o(18),o(7),o(62),o(181),o(279);var r=o(282),n={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",webp:"image/webp"};e.a={props:{loading:{type:String,required:!1,default:function(){return"auto"}},sourceClientOnly:{type:Boolean,required:!1,default:function(){return!0}},placeholder:{type:String,required:!1,default:function(){return"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}},sources:{type:[Array,Object],default:function(){return[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]}},width:{type:Number,required:!1,default:function(){return null}},height:{type:Number,required:!1,default:function(){return null}},title:{type:String,required:!1,default:function(){return"image title"}},alt:{type:String,required:!1,default:function(){return"image description"}}},computed:{sorted:function(){return function(t,pattern){return t.sort((function(a,b){return pattern.indexOf(a.media)===pattern.indexOf(b.media)?0:pattern.indexOf(a.media)>pattern.indexOf(b.media)?1:-1}))}([].concat(this.sources),Array.from(r.a.keys())).reverse()},items:function(){var t=this;return this.sorted.map((function(source){var e;return(source=Object.assign({},source)).type="",t.sourceClientOnly,source.type=n[(e=source.srcset.replace(/.*\.(\w{3,4}).*$/,"$1"),/\w+$/.exec(e)[0])],source.media=r.a.get(source.media),source}))}},methods:{onLoad:function(){"objectFitImages"in t&&t.objectFitImages(this.$el.querySelector("img"))}}}}).call(this,o(24))},273:function(t,e,o){var content=o(285);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("42de838e",content,!0,{sourceMap:!1})},279:function(t,e,o){"use strict";var r=o(9),n=o(40),d=o(49),c=o(137),l=o(107),m=o(17),f=o(75).f,v=o(109).f,h=o(19).f,y=o(280).trim,x=r.Number,A=x,_=x.prototype,w="Number"==d(o(108)(_)),j="trim"in String.prototype,N=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var o,r,n,d=(e=j?e.trim():y(e,3)).charCodeAt(0);if(43===d||45===d){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===d){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var code,c=e.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>n)return NaN;return parseInt(c,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof x&&(w?m((function(){_.valueOf.call(o)})):"Number"!=d(o))?c(new A(N(e)),o,x):N(e)};for(var I,S=o(13)?f(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;S.length>E;E++)n(A,I=S[E])&&!n(x,I)&&h(x,I,v(A,I));x.prototype=_,_.constructor=x,o(20)(r,"Number",x)}},280:function(t,e,o){var r=o(10),n=o(39),d=o(17),c=o(281),l="["+c+"]",m=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),v=function(t,e,o){var n={},l=d((function(){return!!c[t]()||"​"!="​"[t]()})),m=n[t]=l?e(h):c[t];o&&(n[o]=m),r(r.P+r.F*l,"String",n)},h=v.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},281:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},282:function(t,e,o){"use strict";o(61),o(183),o(18),o(7),o(62),o(182);var r,n=o(283),d=new Map(Object.entries(n));e.a=(r=new Map,d.forEach((function(t,e){r.set(e.replace("--",""),t)})),r)},283:function(t){t.exports=JSON.parse('{"--default":"all","--default-max":"(max-width: 575px)","--xs":"(min-width: 576px)","--xs-max":"(max-width: 767px)","--sm":"(min-width: 768px)","--sm-max":"(max-width: 991px)","--md":"(min-width: 992px)","--md-max":"(max-width: 1199px)","--lg":"(min-width: 1200px)","--lg-max":"(max-width: 1599px)","--xl":"(min-width: 1600px)","--xl-max":"(max-width: 1919px)","--xxl":"(min-width: 1920px)"}')},284:function(t,e,o){"use strict";var r=o(273);o.n(r).a},285:function(t,e,o){(t.exports=o(59)(!1)).push([t.i,"picture img{display:block;width:100%;max-width:100%}",""])},286:function(t,e,o){"use strict";var r=o(272).a,n=(o(284),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("picture",[t._l(t.items,(function(source,e){return o("source",t._b({key:e},"source",source,!1))})),t._v(" "),o("img",{attrs:{src:t.placeholder,alt:t.alt,title:t.title,loading:t.loading,width:t.width,height:t.height},on:{load:t.onLoad}})],2)}),[],!1,null,null,null);e.a=component.exports},296:function(t,e,o){var content=o(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("7a6545df",content,!0,{sourceMap:!1})},322:function(t,e,o){"use strict";var r=o(296);o.n(r).a},323:function(t,e,o){(t.exports=o(59)(!1)).push([t.i,'.gp-atom-video[data-v-7130a9ac]{position:relative;background:#000}.gp-atom-video[data-v-7130a9ac]:before{display:block;padding-top:177.77778%;content:""}@media (min-width:576px){.gp-atom-video[data-v-7130a9ac]:before{padding-top:56.25%}}.gp-atom-video video[data-v-7130a9ac]{z-index:5}.gp-atom-video .poster[data-v-7130a9ac],.gp-atom-video video[data-v-7130a9ac]{position:absolute;top:0;left:0;width:100%;height:100%}.gp-atom-video .poster[data-v-7130a9ac]{z-index:10}.gp-atom-video .poster[data-v-7130a9ac]:before{display:block;padding-top:177.77778%;content:""}@media (min-width:576px){.gp-atom-video .poster[data-v-7130a9ac]:before{padding-top:56.25%}}.gp-atom-video .play-button[data-v-7130a9ac],.gp-atom-video .poster[data-v-7130a9ac] img{position:absolute;top:0;left:0;width:100%}.gp-atom-video .play-button[data-v-7130a9ac]{z-index:11;height:100%;cursor:pointer}.gp-atom-video .play-button i[data-v-7130a9ac]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.gp-atom-video .play-button i[data-v-7130a9ac]:before{display:block;width:48px;height:48px;content:"";background:red;border-radius:50%}.gp-atom-video.js--started .play-button[data-v-7130a9ac],.gp-atom-video.js--started .poster[data-v-7130a9ac]{pointer-events:none;opacity:0}',""])},324:function(t,e,o){var content=o(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("5bd136d4",content,!0,{sourceMap:!1})},335:function(t,e,o){"use strict";var r={components:{gpAtomPicture:o(286).a},props:{poster:{type:Object,required:!1,default:function(){return{sources:[{media:"default",srcset:"video/9_16/poster/576.jpg"},{media:"xs",srcset:"video/16_9/poster/576.jpg"},{media:"sm",srcset:"video/16_9/poster/768.jpg"},{media:"md",srcset:"video/16_9/poster/992.jpg"},{media:"lg",srcset:"video/16_9/poster/1200.jpg"},{media:"xl",srcset:"video/16_9/poster/1600.jpg"}]}}},sources:{type:Array,required:!1,default:function(){return[{type:"video/mp4",src:"video/9_16/BigBuckBunny_9_16.mp4",media:"all and (max-width:575px)"},{type:"video/mp4",src:"video/16_9/BigBuckBunny_16_9.mp4",media:"all and (min-width:576px)"}]}},autoplay:{type:Boolean,required:!1,default:function(){return!1}},muted:{type:Boolean,required:!1,default:function(){return!1}},loop:{type:Boolean,required:!1,default:function(){return!1}},controls:{type:Boolean,required:!1,default:function(){return!0}},playsinline:{type:Boolean,required:!1,default:function(){return!1}},preload:{type:String,required:!1,default:function(){return"none"}}},data:function(){return{videoPlaying:!1,videoStarted:!1}},computed:{videoAttributes:function(){return{playsinline:this.playsinline,preload:this.preload,loop:this.loop,controls:this.controls,muted:this.muted}},styleClasses:function(){return{"js--started":this.videoStarted,"js--playing":this.videoPlaying}},filteredSources:function(){var t=this;return this.$isServer?[]:this.sources.filter((function(source){return t.isMedia(source.media)}))}},mounted:function(){var t=this;this.$nextTick((function(){t.autoplay&&t.$refs.video.play()}))},methods:{isMedia:function(t){return!!this.$isServer||t&&window.matchMedia(t).matches},onClickPlayButton:function(){this.$refs.video.play()},onPlay:function(){this.videoStarted=this.videoPlaying=!0},onPause:function(){this.videoPlaying=!1}}},n=(o(322),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"gp-atom-video",class:t.styleClasses},[o("client-only",[o("video",t._b({ref:"video",on:{play:t.onPlay,pause:t.onPause}},"video",t.videoAttributes,!1),t._l(t.filteredSources,(function(source,e){return o("source",t._b({key:e},"source",source,!1))})),0)]),t._v(" "),o("gp-atom-picture",t._b({staticClass:"poster"},"gp-atom-picture",t.poster,!1)),t._v(" "),t.autoplay?t._e():o("span",{staticClass:"play-button",on:{click:t.onClickPlayButton}},[o("i")])],1)}),[],!1,null,"7130a9ac",null);e.a=component.exports},340:function(t,e,o){"use strict";var r=o(324);o.n(r).a},341:function(t,e,o){(t.exports=o(59)(!1)).push([t.i,".gp-organism-stage-video{position:relative;width:100%}",""])}}]);