(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{456:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(457),o=r(0),c=Object(o.j)("v-card__actions"),l=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),v=Object(o.j)("v-card__title");n.a},457:function(t,e,r){"use strict";var n=r(3),o=r.n(n),c=(r(458),r(117)),l=r(116),d=r(29),v=r(6);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){o()(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(l.a,d.a,c.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return _(_({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},c.a.options.computed.classes.call(this))},styles:function(){var style=_({},c.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},458:function(t,e,r){var content=r(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("e23b7040",content,!0,{sourceMap:!1})},459:function(t,e,r){var n=r(10)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},540:function(t,e,r){"use strict";r.r(e);var n={meta:{auth:{requiresAuth:!0}},data:function(){return{title:"About Us",app_name:"Kopasmart Application"}},head:function(){return{title:"About Us"}}},o=r(21),c=r(27),l=r.n(c),d=r(442),v=r(429),h=r(457),_=r(456),f=r(444),m=r(453),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"app"},[r("v-container",{attrs:{fluid:""}},[r("v-card",{attrs:{flat:"",outlined:""}},[r("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$t("appName"))+" "+t._s(t.$t("application")))]),t._v(" "),r("v-card-text",[r("p",[t._v(t._s(t.$t("label.message.aboutusmessage")))]),t._v(" "),r("p",[t._v("\n          For more information on "+t._s(t.app_name)+", check out the\n          "),r("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank"}},[t._v("documentation")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("\n          If you have questions, please join the official\n          "),r("a",{attrs:{href:"https://singoafrica.slack.com/messages",target:"_blank",title:"chat"}},[t._v(t._s(t.$t("label.contacts.slack")))]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("\n          Find a bug? Report it on the github\n          "),r("a",{attrs:{href:"https://github.com/finspointa/kopasmart-webapp/issues",target:"_blank",title:"contribute"}},[t._v("issue board")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v(t._s(t.$t("label.message.thanksmessage")))]),t._v(" "),r("div",{staticClass:"text-xs-right"},[r("em",[r("small",[t._v("— "+t._s(t.$t("appName"))+" "+t._s(t.$t("application")))])])]),t._v(" "),r("hr",{staticClass:"my-3"}),t._v(" "),r("a",{attrs:{href:"http://singo.africa/",target:"_blank"}},[t._v(t._s(t.$t("appName"))+" "+t._s(t.$t("label.contacts.community")))]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/finspointa",target:"_blank"}},[t._v(t._s(t.$t("label.contacts.developer"))+" "+t._s(t.$t("label.contacts.community")))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"info lighten-1 font-weight-light",staticStyle:{"text-transform":"capitalize"},attrs:{nuxt:"",to:"/contacts"}},[t._v(t._s(t.$t("label.button.btncontactus")))])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VApp:d.a,VBtn:v.a,VCard:h.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VContainer:f.a,VSpacer:m.a})}}]);