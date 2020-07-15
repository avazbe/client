(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[81],{1163:function(e,a,t){"use strict";t.r(a);var s=t(6),o=t.n(s),r=t(183),n=t(187),l=t(198),c=t(586),i=t(587),u=t(255),m=t(176),d=t(270),p=t(175),b=t(174),f=t(0),g=t(289),h=t(56);class v extends s.Component{constructor(e){super(e),this.onForgotPassword=e=>{this.props.loading||""!==e.email&&this.props.forgotPassword(e,this.props.history)},this.validateEmail=e=>{let a;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(a="Invalid email address"):a="Please enter your email address",a},this.state={email:"demo@gogo.com"}}componentDidUpdate(){this.props.error?g.a.warning(this.props.error,"Forgot Password Error",3e3,null,null,""):this.props.loading||"success"!==this.props.forgotUserMail||g.a.success("Please check your email.","Forgot Password Success",3e3,null,null,"")}render(){const e={email:this.state.email};return o.a.createElement(r.a,{className:"h-100"},o.a.createElement(p.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},o.a.createElement(n.a,{className:"auth-card"},o.a.createElement("div",{className:"position-relative image-side "},o.a.createElement("p",{className:"text-white h2"},"MAGIC IS IN THE DETAILS"),o.a.createElement("p",{className:"white mb-0"},"Please use your e-mail to reset your password. ",o.a.createElement("br",null),"If you are not a member, please"," ",o.a.createElement(m.b,{to:"/register",className:"white"},"register"),".")),o.a.createElement("div",{className:"form-side"},o.a.createElement(m.b,{to:"/",className:"white"},o.a.createElement("span",{className:"logo-single"})),o.a.createElement(l.a,{className:"mb-4"},o.a.createElement(b.a,{id:"user.forgot-password"})),o.a.createElement(d.c,{initialValues:e,onSubmit:this.onForgotPassword},({errors:e,touched:a})=>o.a.createElement(d.b,{className:"av-tooltip tooltip-label-bottom"},o.a.createElement(c.a,{className:"form-group has-float-label"},o.a.createElement(i.a,null,o.a.createElement(b.a,{id:"user.email"})),o.a.createElement(d.a,{className:"form-control",name:"email",validate:this.validateEmail}),e.email&&a.email&&o.a.createElement("div",{className:"invalid-feedback d-block"},e.email)),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement(m.b,{to:"/user/forgot-password"},o.a.createElement(b.a,{id:"user.forgot-password-question"})),o.a.createElement(u.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(this.props.loading?"show-spinner":""),size:"lg"},o.a.createElement("span",{className:"spinner d-inline-block"},o.a.createElement("span",{className:"bounce1"}),o.a.createElement("span",{className:"bounce2"}),o.a.createElement("span",{className:"bounce3"})),o.a.createElement("span",{className:"label"},o.a.createElement(b.a,{id:"user.reset-password-button"}))))))))))}}a.default=Object(h.b)(({authUser:e})=>({forgotUserMail:e.forgotUserMail,loading:e.loading,error:e.error}),{forgotPassword:f.nb})(v)},174:function(e,a,t){"use strict";var s=t(6),o=t.n(s),r=t(180);a.a=Object(r.d)(e=>o.a.createElement(r.a,e),{withRef:!1})},175:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return l}));var s=t(6),o=t.n(s),r=t(182);const n=e=>o.a.createElement(r.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),l=e=>o.a.createElement("div",{className:"separator ".concat(e.className)})},182:function(e,a,t){"use strict";var s=t(11),o=t(19),r=t(6),n=t.n(r),l=t(83),c=t.n(l),i=t(171),u=t.n(i),m=t(172),d=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),b={tag:m.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,s){var o=e[a];if(delete c[a],o||""===o){var r=!s;if(Object(m.isObject)(o)){var n,l=r?"-":"-"+a+"-",d=g(r,a,o.size);i.push(Object(m.mapToCssModules)(u()(((n={})[d]=o.size||""===o.size,n["order"+l+o.order]=o.order||0===o.order,n["offset"+l+o.offset]=o.offset||0===o.offset,n)),t))}else{var p=g(r,a,o);i.push(p)}}})),i.length||i.push("col");var d=Object(m.mapToCssModules)(u()(a,i),t);return n.a.createElement(l,Object(s.a)({},c,{className:d}))};h.propTypes=b,h.defaultProps=f,a.a=h},183:function(e,a,t){"use strict";var s=t(11),o=t(19),r=t(6),n=t.n(r),l=t(83),c=t.n(l),i=t(171),u=t.n(i),m=t(172),d=c.a.oneOfType([c.a.number,c.a.string]),p={tag:m.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,c=e.form,i=e.widths,d=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(a,t){var s=e[a];if(delete d[a],s){var o=!t;p.push(o?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var b=Object(m.mapToCssModules)(u()(a,r?"no-gutters":null,c?"form-row":"row",p),t);return n.a.createElement(l,Object(s.a)({},d,{className:b}))};f.propTypes=p,f.defaultProps=b,a.a=f},187:function(e,a,t){"use strict";var s=t(11),o=t(19),r=t(6),n=t.n(r),l=t(83),c=t.n(l),i=t(171),u=t.n(i),m=t(172),d={tag:m.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.body,c=e.inverse,i=e.outline,d=e.tag,p=e.innerRef,b=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(m.mapToCssModules)(u()(a,"card",!!c&&"text-white",!!l&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return n.a.createElement(d,Object(s.a)({},b,{className:f,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},198:function(e,a,t){"use strict";var s=t(11),o=t(19),r=t(6),n=t.n(r),l=t(83),c=t.n(l),i=t(171),u=t.n(i),m=t(172),d={tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),c=Object(m.mapToCssModules)(u()(a,"card-title"),t);return n.a.createElement(r,Object(s.a)({},l,{className:c}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},255:function(e,a,t){"use strict";var s=t(11),o=t(19),r=t(181),n=t(178),l=t(6),c=t.n(l),i=t(83),u=t.n(i),m=t(171),d=t.n(m),p=t(172),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,n=e.className,l=e.close,i=e.cssModule,u=e.color,m=e.outline,b=e.size,f=e.tag,g=e.innerRef,h=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(m?"-outline":"")+"-"+u,E=Object(p.mapToCssModules)(d()(n,{close:l},l||"btn",l||v,!!b&&"btn-"+b,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===f&&(f="a");var N=l?"Close":null;return c.a.createElement(f,Object(s.a)({type:"button"===f&&h.onClick?"button":void 0},h,{className:E,ref:g,onClick:this.onClick,"aria-label":t||N}))},a}(c.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},289:function(e,a,t){"use strict";var s=t(271),o=(t(253),t(254));t.d(a,"a",(function(){return o.a}));s.a},346:function(e,a,t){"use strict";(function(a){var t="__global_unique_id__";e.exports=function(){return a[t]=(a[t]||0)+1}}).call(this,t(27))}}]);