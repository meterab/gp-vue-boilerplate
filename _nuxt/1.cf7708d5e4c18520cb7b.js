(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(e,t,o){"use strict";(function(e){var r=o(150),d={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",webp:"image/webp"};t.a={props:{loading:{type:String,required:!1,default:()=>"auto"},sourceClientOnly:{type:Boolean,required:!1,default:()=>!0},placeholder:{type:String,required:!1,default:()=>"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},sources:{type:[Array,Object],default:()=>[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]},width:{type:Number,required:!1,default:()=>null},height:{type:Number,required:!1,default:()=>null},title:{type:String,required:!1,default:()=>"image title"},alt:{type:String,required:!1,default:()=>"image description"}},computed:{sorted(){return function(e,pattern){return e.sort((function(a,b){return pattern.indexOf(a.media)===pattern.indexOf(b.media)?0:pattern.indexOf(a.media)>pattern.indexOf(b.media)?1:-1}))}([].concat(this.sources),Array.from(r.a.keys())).reverse()},items(){return this.sorted.map(source=>((source=Object.assign({},source)).type="",this.sourceClientOnly,source.type=d[function(e){return/\w+$/.exec(e)[0]}(source.srcset.replace(/.*\.(\w{3,4}).*$/,"$1"))],source.media=r.a.get(source.media),source))}},methods:{onLoad(){"objectFitImages"in e&&e.objectFitImages(this.$el.querySelector("img"))}}}}).call(this,o(12))},144:function(e,t,o){var content=o(153);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("42de838e",content,!0,{sourceMap:!1})},150:function(e,t,o){"use strict";var r,d=o(151),n=new Map(Object.entries(d));t.a=(r=new Map,n.forEach((e,t)=>{r.set(t.replace("--",""),e)}),r)},151:function(e){e.exports=JSON.parse('{"--default":"all","--default-max":"(max-width: 575px)","--xs":"(min-width: 576px)","--xs-max":"(max-width: 767px)","--sm":"(min-width: 768px)","--sm-max":"(max-width: 991px)","--md":"(min-width: 992px)","--md-max":"(max-width: 1199px)","--lg":"(min-width: 1200px)","--lg-max":"(max-width: 1599px)","--xl":"(min-width: 1600px)","--xl-max":"(max-width: 1919px)","--xxl":"(min-width: 1920px)"}')},152:function(e,t,o){"use strict";var r=o(144);o.n(r).a},153:function(e,t,o){(e.exports=o(30)(!1)).push([e.i,"picture img{display:block;width:100%;max-width:100%}",""])},154:function(e,t,o){"use strict";var r=o(143).a,d=(o(152),o(7)),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("picture",[e._l(e.items,(function(source,t){return o("source",e._b({key:t},"source",source,!1))})),e._v(" "),o("img",{attrs:{src:e.placeholder,alt:e.alt,title:e.title,loading:e.loading,width:e.width,height:e.height},on:{load:e.onLoad}})],2)}),[],!1,null,null,null);t.a=component.exports},164:function(e,t,o){var content=o(191);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("7a6545df",content,!0,{sourceMap:!1})},190:function(e,t,o){"use strict";var r=o(164);o.n(r).a},191:function(e,t,o){(e.exports=o(30)(!1)).push([e.i,'.gp-atom-video[data-v-7130a9ac]{position:relative;background:#000}.gp-atom-video[data-v-7130a9ac]:before{display:block;padding-top:177.77778%;content:""}@media (min-width:576px){.gp-atom-video[data-v-7130a9ac]:before{padding-top:56.25%}}.gp-atom-video video[data-v-7130a9ac]{z-index:5}.gp-atom-video .poster[data-v-7130a9ac],.gp-atom-video video[data-v-7130a9ac]{position:absolute;top:0;left:0;width:100%;height:100%}.gp-atom-video .poster[data-v-7130a9ac]{z-index:10}.gp-atom-video .poster[data-v-7130a9ac]:before{display:block;padding-top:177.77778%;content:""}@media (min-width:576px){.gp-atom-video .poster[data-v-7130a9ac]:before{padding-top:56.25%}}.gp-atom-video .play-button[data-v-7130a9ac],.gp-atom-video .poster[data-v-7130a9ac] img{position:absolute;top:0;left:0;width:100%}.gp-atom-video .play-button[data-v-7130a9ac]{z-index:11;height:100%;cursor:pointer}.gp-atom-video .play-button i[data-v-7130a9ac]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.gp-atom-video .play-button i[data-v-7130a9ac]:before{display:block;width:48px;height:48px;content:"";background:red;border-radius:50%}.gp-atom-video.js--started .play-button[data-v-7130a9ac],.gp-atom-video.js--started .poster[data-v-7130a9ac]{pointer-events:none;opacity:0}',""])},192:function(e,t,o){var content=o(209);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("5bd136d4",content,!0,{sourceMap:!1})},203:function(e,t,o){"use strict";var r={components:{gpAtomPicture:o(154).a},props:{poster:{type:Object,required:!1,default:()=>({sources:[{media:"default",srcset:"video/9_16/poster/576.jpg"},{media:"xs",srcset:"video/16_9/poster/576.jpg"},{media:"sm",srcset:"video/16_9/poster/768.jpg"},{media:"md",srcset:"video/16_9/poster/992.jpg"},{media:"lg",srcset:"video/16_9/poster/1200.jpg"},{media:"xl",srcset:"video/16_9/poster/1600.jpg"}]})},sources:{type:Array,required:!1,default:()=>[{type:"video/mp4",src:"video/9_16/BigBuckBunny_9_16.mp4",media:"all and (max-width:575px)"},{type:"video/mp4",src:"video/16_9/BigBuckBunny_16_9.mp4",media:"all and (min-width:576px)"}]},autoplay:{type:Boolean,required:!1,default:()=>!1},muted:{type:Boolean,required:!1,default:()=>!1},loop:{type:Boolean,required:!1,default:()=>!1},controls:{type:Boolean,required:!1,default:()=>!0},playsinline:{type:Boolean,required:!1,default:()=>!1},preload:{type:String,required:!1,default:()=>"none"}},data:function(){return{videoPlaying:!1,videoStarted:!1}},computed:{videoAttributes(){return{playsinline:this.playsinline,preload:this.preload,loop:this.loop,controls:this.controls,muted:this.muted}},styleClasses(){return{"js--started":this.videoStarted,"js--playing":this.videoPlaying}},filteredSources(){return this.$isServer?[]:this.sources.filter(source=>this.isMedia(source.media))}},mounted(){this.$nextTick(()=>{this.autoplay&&this.$refs.video.play()})},methods:{isMedia(e){return!!this.$isServer||e&&window.matchMedia(e).matches},onClickPlayButton(){this.$refs.video.play()},onPlay(){this.videoStarted=this.videoPlaying=!0},onPause(){this.videoPlaying=!1}}},d=(o(190),o(7)),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"gp-atom-video",class:e.styleClasses},[o("client-only",[o("video",e._b({ref:"video",on:{play:e.onPlay,pause:e.onPause}},"video",e.videoAttributes,!1),e._l(e.filteredSources,(function(source,t){return o("source",e._b({key:t},"source",source,!1))})),0)]),e._v(" "),o("gp-atom-picture",e._b({staticClass:"poster"},"gp-atom-picture",e.poster,!1)),e._v(" "),e.autoplay?e._e():o("span",{staticClass:"play-button",on:{click:e.onClickPlayButton}},[o("i")])],1)}),[],!1,null,"7130a9ac",null);t.a=component.exports},208:function(e,t,o){"use strict";var r=o(192);o.n(r).a},209:function(e,t,o){(e.exports=o(30)(!1)).push([e.i,".gp-organism-stage-video{position:relative;width:100%}",""])},92:function(e,t,o){"use strict";o.r(t);var r=o(63),d=o(203),n={components:{gpLayoutDefaultContainer:r.a,gpAtomVideo:d.a},props:{options:{type:Object,default:()=>null},video:{type:Object,required:!1,default:()=>({sources:[{media:"default",srcset:"video/9_16/poster/576.jpg"},{media:"xs",srcset:"video/16_9/poster/576.jpg"},{media:"sm",srcset:"video/16_9/poster/768.jpg"},{media:"md",srcset:"video/16_9/poster/992.jpg"},{media:"lg",srcset:"video/16_9/poster/1200.jpg"},{media:"xl",srcset:"video/16_9/poster/1600.jpg"}]})}}},l=(o(208),o(7)),component=Object(l.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("gp-layout-default-container",this._b({staticClass:"gp-organism-stage-video"},"gp-layout-default-container",this.options,!1),[t("template",{slot:"background"},[this.video?t("gp-atom-video",this._b({},"gp-atom-video",this.video,!1)):this._e()],1)],2)}),[],!1,null,null,null);t.default=component.exports}}]);