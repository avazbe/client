(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[56],{1125:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var s=t(6),r=t.n(s),l=t(183),n=t(174),c=t(175),o=t(177);class i extends s.Component{render(){return r.a.createElement(s.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(c.a,{xxs:"12"},r.a.createElement(o.a,{heading:"menu.third-level-4",match:this.props.match}),r.a.createElement(c.b,{className:"mb-5"}))),r.a.createElement(l.a,null,r.a.createElement(c.a,{xxs:"12",className:"mb-4"},r.a.createElement("p",null,r.a.createElement(n.a,{id:"menu.third-level-4"})))))}}},175:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return c}));var s=t(6),r=t.n(s),l=t(182);const n=e=>r.a.createElement(l.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),c=e=>r.a.createElement("div",{className:"separator ".concat(e.className)})},177:function(e,a,t){"use strict";var s=t(6),r=t.n(s),l=t(188),n=t(189),c=t(176),o=t(174);const i=e=>r.a.createElement(o.a,{id:"menu.".concat(e)}),m=(e,a,t)=>0===t?"":e.split(a)[0]+a,u=({match:e})=>{const a=e.path.substr(1);let t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(e=>-1===e.indexOf(":"))),r.a.createElement(s.Fragment,null,r.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((e,s)=>r.a.createElement(n.a,{key:s,active:t.length===s+1},t.length!==s+1?r.a.createElement(c.b,{to:"/"+m(a,e,s)},i(e)):i(e)))))};a.a=({heading:e,match:a})=>r.a.createElement(s.Fragment,null,e&&r.a.createElement("h1",null,r.a.createElement(o.a,{id:e})),r.a.createElement(u,{match:a}))},182:function(e,a,t){"use strict";var s=t(11),r=t(19),l=t(6),n=t.n(l),c=t(83),o=t.n(c),i=t(171),m=t.n(i),u=t(172),d=o.a.oneOfType([o.a.number,o.a.string]),g=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:d,offset:d})]),p={tag:u.tagPropType,xs:g,sm:g,md:g,lg:g,xl:g,className:o.a.string,cssModule:o.a.object,widths:o.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,l=e.widths,c=e.tag,o=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];l.forEach((function(a,s){var r=e[a];if(delete o[a],r||""===r){var l=!s;if(Object(u.isObject)(r)){var n,c=l?"-":"-"+a+"-",d=f(l,a,r.size);i.push(Object(u.mapToCssModules)(m()(((n={})[d]=r.size||""===r.size,n["order"+c+r.order]=r.order||0===r.order,n["offset"+c+r.offset]=r.offset||0===r.offset,n)),t))}else{var g=f(l,a,r);i.push(g)}}})),i.length||i.push("col");var d=Object(u.mapToCssModules)(m()(a,i),t);return n.a.createElement(c,Object(s.a)({},o,{className:d}))};h.propTypes=p,h.defaultProps=b,a.a=h},183:function(e,a,t){"use strict";var s=t(11),r=t(19),l=t(6),n=t.n(l),c=t(83),o=t.n(c),i=t(171),m=t.n(i),u=t(172),d=o.a.oneOfType([o.a.number,o.a.string]),g={tag:u.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,c=e.tag,o=e.form,i=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];i.forEach((function(a,t){var s=e[a];if(delete d[a],s){var r=!t;g.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var p=Object(u.mapToCssModules)(m()(a,l?"no-gutters":null,o?"form-row":"row",g),t);return n.a.createElement(c,Object(s.a)({},d,{className:p}))};b.propTypes=g,b.defaultProps=p,a.a=b},188:function(e,a,t){"use strict";var s=t(11),r=t(19),l=t(6),n=t.n(l),c=t(83),o=t.n(c),i=t(171),m=t.n(i),u=t(172),d={tag:u.tagPropType,listTag:u.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},g=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,c=e.children,o=e.tag,i=e.listTag,d=e["aria-label"],g=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(u.mapToCssModules)(m()(a),l),b=Object(u.mapToCssModules)(m()("breadcrumb",t),l);return n.a.createElement(o,Object(s.a)({},g,{className:p,"aria-label":d}),n.a.createElement(i,{className:b},c))};g.propTypes=d,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=g},189:function(e,a,t){"use strict";var s=t(11),r=t(19),l=t(6),n=t.n(l),c=t(83),o=t.n(c),i=t(171),m=t.n(i),u=t(172),d={tag:u.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},g=function(e){var a=e.className,t=e.cssModule,l=e.active,c=e.tag,o=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(u.mapToCssModules)(m()(a,!!l&&"active","breadcrumb-item"),t);return n.a.createElement(c,Object(s.a)({},o,{className:i,"aria-current":l?"page":void 0}))};g.propTypes=d,g.defaultProps={tag:"li"},a.a=g}}]);