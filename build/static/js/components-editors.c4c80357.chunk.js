(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[32],{1050:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var l=a(6),n=a.n(l),r=a(183),c=a(187),s=a(190),i=a(198),m=a(175),u=a(177),o=a(174),d=a(1051),h=a.n(d);a(1059),a(1060);const b={toolbar:[["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},E=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"];class g extends l.Component{constructor(e){super(e),this.handleChangeQuillStandart=e=>{this.setState({textQuillStandart:e})},this.handleChangeQuillBubble=e=>{this.setState({textQuillBubble:e})},this.state={textQuillBubble:"",textQuillStandart:""}}render(){return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,null,n.a.createElement(m.a,{xxs:"12"},n.a.createElement(u.a,{heading:"menu.editors",match:this.props.match}),n.a.createElement(m.b,{className:"mb-5"}))),n.a.createElement(r.a,{className:"mb-4"},n.a.createElement(m.a,{xxs:"12"},n.a.createElement(c.a,null,n.a.createElement(s.a,null,n.a.createElement(i.a,null,n.a.createElement(o.a,{id:"editors.quill-standart"})),n.a.createElement(h.a,{theme:"snow",value:this.state.textQuillStandart,onChange:this.handleChangeQuillStandart,modules:b,formats:E}))))),n.a.createElement(r.a,{className:"mb-4"},n.a.createElement(m.a,{xxs:"12"},n.a.createElement(c.a,null,n.a.createElement(s.a,null,n.a.createElement(i.a,null,n.a.createElement(o.a,{id:"editors.quill-bubble"})),n.a.createElement(h.a,{theme:"bubble",value:this.state.textQuillBubble,onChange:this.handleChangeQuillBubble}))))))}}},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s}));var l=a(6),n=a.n(l),r=a(182);const c=e=>n.a.createElement(r.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),s=e=>n.a.createElement("div",{className:"separator ".concat(e.className)})},177:function(e,t,a){"use strict";var l=a(6),n=a.n(l),r=a(188),c=a(189),s=a(176),i=a(174);const m=e=>n.a.createElement(i.a,{id:"menu.".concat(e)}),u=(e,t,a)=>0===a?"":e.split(t)[0]+t,o=({match:e})=>{const t=e.path.substr(1);let a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter(e=>-1===e.indexOf(":"))),n.a.createElement(l.Fragment,null,n.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((e,l)=>n.a.createElement(c.a,{key:l,active:a.length===l+1},a.length!==l+1?n.a.createElement(s.b,{to:"/"+u(t,e,l)},m(e)):m(e)))))};t.a=({heading:e,match:t})=>n.a.createElement(l.Fragment,null,e&&n.a.createElement("h1",null,n.a.createElement(i.a,{id:e})),n.a.createElement(o,{match:t}))}}]);