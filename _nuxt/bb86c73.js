(window.webpackJsonp=window.webpackJsonp||[]).push([[20,6],{366:function(t,e,r){var content=r(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("7132a15d",content,!0,{sourceMap:!1})},367:function(t,e,r){var n=r(17)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},375:function(t,e,r){"use strict";r(8),r(5),r(7),r(11),r(9),r(12);var n=r(2),o=(r(366),r(30));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},379:function(t,e,r){"use strict";r.r(e);var n={props:{application:{type:Object},student:{type:Object}}},o=r(79),c=r(109),l=r.n(c),v=r(365),d=r(364),h=r(498),f=r(363),m=r(375),O=r(162),_=r(499),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"justify-center d-flex"},[r("v-card",{attrs:{width:"800px"}},[t.student?r("div",[r("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.student.name)+" ")]),t._v(" "),r("div",{staticStyle:{"margin-left":"5px","margin-right":"5px"}},[r("v-divider")],1)],1):t._e(),t._v(" "),r("v-container",{attrs:{"pa-5":""}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"4"}},[t._v("Unternehmen:")]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[t._v(t._s(t.application.unternehmenName))])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"4"}},[t._v("Praktikumsantrag gestellt:")]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[t._v(t._s(t.application.datumAntragGestellt)+" ")])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"4"}},[t._v("Geplanter Beginn:")]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[t._v(t._s(t.application.datumStart)+" ")])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"4"}},[t._v("Unternehmen gelistet:")]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[t.application.unternehmenGelistet?r("v-icon",{attrs:{color:"green"}},[t._v("\n            mdi-check\n          ")]):r("v-icon",{attrs:{color:"red"}},[t._v("mdi-close-circle")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VCardTitle:d.d,VCol:h.a,VContainer:f.a,VDivider:m.a,VIcon:O.a,VRow:_.a})},509:function(t,e,r){"use strict";r.r(e);r(8),r(5),r(7),r(11),r(9),r(12);var n=r(2),o=r(93);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={components:{ApplicationCard:r(379).default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({studentsWithApplications:function(t){return t.students.studentsWithApplications}})),created:function(){this.$store.dispatch("students/fetchStudentsWithApplications")}},v=r(79),d=r(109),h=r.n(d),f=r(363),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",t._l(t.studentsWithApplications,(function(e){return r("div",{key:e.id},t._l(e.antraege_auf_genehmigung,(function(t,n){return r("ApplicationCard",{key:t.id,staticClass:"text-decoration-none",attrs:{application:t,student:e,"data-index":n}})})),1)})),0)}),[],!1,null,null,null);e.default=component.exports;h()(component,{ApplicationCard:r(379).default}),h()(component,{VContainer:f.a})}}]);