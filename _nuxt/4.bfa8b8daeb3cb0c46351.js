(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(e,t,n){"use strict";n.r(t);var l=n(135),o=n(314),r=n(287),d={components:{gpLayoutDefaultContainer:l.a,gpMoleculeArticle:o.a,gpAtomRichText:r.a},props:{options:{type:Object,default:function(){return null}},headline:{type:Object,default:function(){return{overline:"Overline HeadlineText",headline:"Headline",subline:"Subline"}}},text:{type:String,default:function(){return"<p>Example Text</p>"}}}},c=(n(348),n(12)),component=Object(c.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("gp-layout-default-container",this._b({staticClass:"gp-organism-article-headline-text"},"gp-layout-default-container",this.options,!1),[t("gp-molecule-article",{attrs:{headline:this.headline}},[t("gp-atom-rich-text",{attrs:{content:this.text}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},274:function(e,t,n){var content=n(290);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("5575ab34",content,!0,{sourceMap:!1})},275:function(e,t,n){var content=n(292);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("41ba0324",content,!0,{sourceMap:!1})},276:function(e,t,n){var content=n(294);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("72337d90",content,!0,{sourceMap:!1})},287:function(e,t,n){"use strict";var l={props:{content:{type:String,required:!1,default:"<p>Example Text</p>"}}},o=(n(291),n(12)),component=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"gp-atom-rich-text"},[this.$slots.default?this._e():t("div",{domProps:{innerHTML:this._s(this.content)}}),this._v(" "),this._t("default")],2)}),[],!1,null,"027ae3e5",null);t.a=component.exports},289:function(e,t,n){"use strict";var l=n(274);n.n(l).a},290:function(e,t,n){(e.exports=n(59)(!1)).push([e.i,".gp-atom-headline[data-v-7da52094]{font-style:normal;font-weight:400}.gp-atom-headline>*[data-v-7da52094]{display:block}.gp-atom-headline.headline--h2 .overline[data-v-7da52094],.gp-atom-headline.headline--h2 .subline[data-v-7da52094]{font-size:3.2vw;font-weight:400}@media (min-width:576px){.gp-atom-headline.headline--h2 .overline[data-v-7da52094],.gp-atom-headline.headline--h2 .subline[data-v-7da52094]{font-size:12px}}.font_raleway .js--visible .gp-atom-headline.headline--h2 .overline[data-v-7da52094],.font_raleway .js--visible .gp-atom-headline.headline--h2 .subline[data-v-7da52094]{font-family:Raleway,sans-serif}.font_raleway_500 .js--visible .gp-atom-headline.headline--h2 .subline[data-v-7da52094]{font-weight:500}.gp-atom-headline.headline--h2 .headline[data-v-7da52094]{font-size:9.6vw}@media (min-width:576px){.gp-atom-headline.headline--h2 .headline[data-v-7da52094]{font-size:36px}}.font_amatic-sc .js--visible .gp-atom-headline.headline--h2 .headline[data-v-7da52094]{font-family:Amatic SC,serif}.font_amatic-sc_700 .js--visible .gp-atom-headline.headline--h2 .headline[data-v-7da52094]{font-weight:700}",""])},291:function(e,t,n){"use strict";var l=n(275);n.n(l).a},292:function(e,t,n){(e.exports=n(59)(!1)).push([e.i,".gp-atom-rich-text b[data-v-027ae3e5],.gp-atom-rich-text em[data-v-027ae3e5],.gp-atom-rich-text i[data-v-027ae3e5],.gp-atom-rich-text strong[data-v-027ae3e5]{font-style:normal;font-weight:400}.gp-atom-rich-text[data-v-027ae3e5]{font-family:sans-serif;font-size:4.26667vw;font-weight:400}@media (min-width:576px){.gp-atom-rich-text[data-v-027ae3e5]{font-size:16px}}.font_raleway .js--visible .gp-atom-rich-text[data-v-027ae3e5]{font-family:Raleway,sans-serif}",""])},293:function(e,t,n){"use strict";var l=n(276);n.n(l).a},294:function(e,t,n){(e.exports=n(59)(!1)).push([e.i,"",""])},314:function(e,t,n){"use strict";var l={props:{tag:{type:String,required:!1,default:function(){return"Lorem Overline"}},overline:{type:String,required:!1,default:function(){return"Lorem Overline"}},headline:{type:String,required:!1,default:function(){return"Lorem Headline"}},subline:{type:String,required:!1,default:function(){return"Lorem Subline"}}},computed:{styleClasses:function(){var e={};return e["headline--".concat(this.tag)]=!0,e}}},o=(n(289),n(12)),r={components:{gpAtomHeadline:Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"gp-atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"7da52094",null).exports,gpAtomRichText:n(287).a},props:{headline:{type:Object,default:function(){return{overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"}}},content:{type:String,default:function(){return"<p>Example Text</p>"}}}},d=(n(293),Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("article",{staticClass:"gp-molecule-article"},[this.headline?t("header",[t("gp-atom-headline",this._b({attrs:{tag:"h2"}},"gp-atom-headline",this.headline,!1))],1):this._e(),this._v(" "),this._t("default",[t("gp-atom-rich-text",{attrs:{content:this.content}})])],2)}),[],!1,null,null,null));t.a=d.exports},328:function(e,t,n){var content=n(349);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("f4e36776",content,!0,{sourceMap:!1})},348:function(e,t,n){"use strict";var l=n(328);n.n(l).a},349:function(e,t,n){(e.exports=n(59)(!1)).push([e.i,"",""])}}]);