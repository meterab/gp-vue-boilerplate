(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{277:function(e,n,t){var map={"./de/index.json":[298,29],"./de/kontakt.json":[299,30],"./de/nutzungsbedingungen.json":[300,31],"./de/projekte.json":[303,32],"./de/projekte/projekt-1.json":[301,33],"./de/projekte/projekt-2.json":[302,34],"./de/rechtliche-hinweise.json":[304,35],"./de/ueber-uns.json":[305,36],"./en/about.json":[306,37],"./en/contact.json":[307,38],"./en/index.json":[308,39],"./en/legals.json":[309,40],"./en/projects.json":[312,41],"./en/projects/project-1.json":[310,42],"./en/projects/project-2.json":[311,43],"./en/terms.json":[313,44]};function o(e){if(!t.o(map,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=map[e],o=n[0];return t.e(n[1]).then((function(){return t.t(o,3)}))}o.keys=function(){return Object.keys(map)},o.id=277,e.exports=o},278:function(e,n,t){"use strict";t(106),t(136),t(61);var o=t(138);var r={scrollToTop:!0,data:function(){return{title:"title of page",components:[]}},head:function(){return{title:this.title}},asyncData:function(e){var n=e.store,o=e.app,r=e.error,path=function(e){return e.router.matcher.match(e.localePath(e.getRouteBaseName())).path}(o).replace(RegExp("^/".concat(o.i18n.locale)),"").replace(/^\/([^?.#]*)[\\/?#]{0,1}[^\\/]*$/,"$1").replace(/\/index|\/$/,"")||"index";return t(277)("./".concat(o.i18n.locale,"/").concat(path,".json")).then((function(data){return"routeParams"in data&&n.dispatch("i18n/setRouteParams",data.routeParams),{title:data.title,components:data.components}})).catch((function(){r({statusCode:404,message:"local json file not found"})}))},created:function(){this.components=Object(o.a)(this.components)}},c=t(12),component=Object(c.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},e._l(e.components,(function(n,o){return t(n.asyncComponent,e._b({key:o,tag:"component"},"component",n.data,!1))})),1)}),[],!1,null,null,null);n.a=component.exports},375:function(e,n,t){"use strict";t.r(n);var o={extends:t(278).a,nuxtI18n:{paths:{en:"/projects/:project",de:"/projekte/:project"}}},r=t(12),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);