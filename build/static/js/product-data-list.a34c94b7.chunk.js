(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[70],{175:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i}));var l=a(6),n=a.n(l),s=a(182);const c=e=>n.a.createElement(s.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),i=e=>n.a.createElement("div",{className:"separator ".concat(e.className)})},177:function(e,t,a){"use strict";var l=a(6),n=a.n(l),s=a(188),c=a(189),i=a(176),m=a(174);const o=e=>n.a.createElement(m.a,{id:"menu.".concat(e)}),r=(e,t,a)=>0===a?"":e.split(t)[0]+t,d=({match:e})=>{const t=e.path.substr(1);let a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter(e=>-1===e.indexOf(":"))),n.a.createElement(l.Fragment,null,n.a.createElement(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((e,l)=>n.a.createElement(c.a,{key:l,active:a.length===l+1},a.length!==l+1?n.a.createElement(i.b,{to:"/"+r(t,e,l)},o(e)):o(e)))))};t.a=({heading:e,match:t})=>n.a.createElement(l.Fragment,null,e&&n.a.createElement("h1",null,n.a.createElement(m.a,{id:e})),n.a.createElement(d,{match:t}))},206:function(e,t,a){"use strict";var l=a(6),n=a.n(l),s=a(203);t.a=e=>{var t=Object.assign({},e);return delete t.autoCorrect,delete t.autoCapitalize,n.a.createElement(s.a.Input,t)}},298:function(e,t,a){"use strict";var l=a(6),n=a.n(l),s=a(175),c=a(608),i=a(609),m=a(286);class o extends n.a.Component{componentDidMount(){}onChangePage(e){this.props.onChangePage(e)}render(){const e=this.props,t=e.totalPage,a=void 0===t?0:t,l=e.currentPage,o=void 0===l?1:l,r=e.numberLimit,d=void 0===r?5:r,h=e.lastIsActive,p=void 0===h||h,g=e.firstIsActive,u=void 0===g||g;let E=1,b=d;d>a?(E=1,b=a):o<=parseInt(d/2,10)?(E=1,b=d):o+parseInt(d/2,10)<=a?(E=o-parseInt(d/2,10),b=o+parseInt(d/2,10)):(E=a-(d-1),b=a),E=0===E?1:E;const k=[];for(var C=E;C<=b;C++)k.push(C);let x=o<=1?"disabled":"",N=o>=a?"disabled":"",y=o<=1?"disabled":"",f=o>=a?"disabled":"";return a>1?n.a.createElement(s.a,{xxs:"12",className:"mt-3"},n.a.createElement(c.a,{className:"pagination justify-content-center"},u&&n.a.createElement(i.a,{className:"page-item ".concat(x)},n.a.createElement(m.a,{className:"page-link first",onClick:()=>this.onChangePage(1)},n.a.createElement("i",{className:"simple-icon-control-start"}))),n.a.createElement(i.a,{className:"page-item ".concat(y)},n.a.createElement(m.a,{className:"page-link prev",onClick:()=>this.onChangePage(o-1)},n.a.createElement("i",{className:"simple-icon-arrow-left"}))),k.map(e=>n.a.createElement(i.a,{key:e,className:"page-item ".concat(o===e&&"active")},n.a.createElement(m.a,{className:"page-link",onClick:()=>this.onChangePage(e)},e))),n.a.createElement(i.a,{className:"page-item ".concat(f)},n.a.createElement(m.a,{className:"page-link next",onClick:()=>this.onChangePage(o+1)},n.a.createElement("i",{className:"simple-icon-arrow-right"}))),p&&n.a.createElement(i.a,{className:"page-item ".concat(N)},n.a.createElement(m.a,{className:"page-link last",onClick:()=>this.onChangePage(a)},n.a.createElement("i",{className:"simple-icon-control-end"}))))):n.a.createElement(s.a,{xxs:"12",className:"mt-2"})}}t.a=o},367:function(e,t,a){"use strict";var l=a(6),n=a.n(l),s=a(187),c=a(219),i=a(588),m=a(176),o=a(171),r=a.n(o),d=a(234),h=a(175);t.a=n.a.memo(({product:e,isSelect:t,collect:a,onCheckItem:l})=>n.a.createElement(h.a,{xxs:"12",className:"mb-3"},n.a.createElement(d.b,{id:"menu_id",data:e.id,collect:a},n.a.createElement(s.a,{onClick:t=>l(t,e.id),className:r()("d-flex flex-row",{active:t})},n.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},n.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},n.a.createElement(m.b,{to:"?p=".concat(e.id),className:"w-40 w-sm-100"},n.a.createElement("p",{className:"list-item-heading mb-1 truncate"},e.title)),n.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},e.category),n.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},e.date),n.a.createElement("div",{className:"w-15 w-sm-100"},n.a.createElement(c.a,{color:e.statusColor,pill:!0},e.status))),n.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},n.a.createElement(i.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(e.id),checked:t,onChange:()=>{},label:""})))))))},368:function(e,t,a){"use strict";var l=a(6),n=a.n(l),s=a(234);t.a=({onContextMenu:e,onContextMenuClick:t})=>n.a.createElement(s.a,{id:"menu_id",onShow:t=>e(t,t.detail.data)},n.a.createElement(s.c,{onClick:t,data:{action:"copy"}},n.a.createElement("i",{className:"simple-icon-docs"})," ",n.a.createElement("span",null,"Copy")),n.a.createElement(s.c,{onClick:t,data:{action:"move"}},n.a.createElement("i",{className:"simple-icon-drawer"})," ",n.a.createElement("span",null,"Move to archive")),n.a.createElement(s.c,{onClick:t,data:{action:"delete"}},n.a.createElement("i",{className:"simple-icon-trash"})," ",n.a.createElement("span",null,"Delete")))},369:function(e,t,a){"use strict";var l=a(6),n=a.n(l),s=a(183),c=a(255),i=a(262),m=a(588),o=a(592),r=a(594),d=a(607),h=a(403),p=a(590),g=a(180),u=a(175),E=a(177),b=a(174),k=a(448);class C extends l.Component{constructor(e){super(),this.toggleDisplayOptions=()=>{this.setState(e=>({displayOptionsIsOpen:!e.displayOptionsIsOpen}))},this.toggleSplit=()=>{this.setState(e=>({dropdownSplitOpen:!e.dropdownSplitOpen}))},this.state={dropdownSplitOpen:!1,displayOptionsIsOpen:!1}}render(){const e=this.props.intl.messages,t=this.props,a=t.displayMode,l=t.changeDisplayMode,g=t.handleChangeSelectAll,C=t.changeOrderBy,x=t.changePageSize,N=t.selectedPageSize,y=t.totalItemCount,f=t.selectedOrderOption,v=t.match,S=t.startIndex,w=t.endIndex,O=t.selectedItemsLength,I=t.itemsLength,P=t.onSearchKey,M=t.orderOptions,z=t.pageSizes,L=t.toggleModal,D=t.heading,A=this.state,R=A.displayOptionsIsOpen,T=A.dropdownSplitOpen;return n.a.createElement(s.a,null,n.a.createElement(u.a,{xxs:"12"},n.a.createElement("div",{className:"mb-2"},n.a.createElement("h1",null,n.a.createElement(b.a,{id:D})),n.a.createElement("div",{className:"text-zero top-right-button-container"},n.a.createElement(c.a,{color:"primary",size:"lg",className:"top-right-button",onClick:()=>L()},n.a.createElement(b.a,{id:"pages.add-new"})),"  ",n.a.createElement(i.a,{isOpen:T,toggle:this.toggleSplit},n.a.createElement("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all"},n.a.createElement(m.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:O>=I,onChange:()=>g(!0),label:n.a.createElement("span",{className:"custom-control-label ".concat(O>0&&O<I?"indeterminate":"")})})),n.a.createElement(o.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),n.a.createElement(r.a,{right:!0},n.a.createElement(d.a,null,n.a.createElement(b.a,{id:"pages.delete"})),n.a.createElement(d.a,null,n.a.createElement(b.a,{id:"pages.another-action"}))))),n.a.createElement(E.a,{match:v})),n.a.createElement("div",{className:"mb-2"},n.a.createElement(c.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:this.toggleDisplayOptions},n.a.createElement(b.a,{id:"pages.display-options"})," ",n.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),n.a.createElement(h.a,{isOpen:R,className:"d-md-block",id:"displayOptions"},n.a.createElement("span",{className:"mr-3 d-inline-block float-md-left"},n.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("list"===a?"active":""),onClick:()=>l("list")},n.a.createElement(k.a,null)),n.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("thumblist"===a?"active":""),onClick:()=>l("thumblist")},n.a.createElement(k.e,null)),n.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("imagelist"===a?"active":""),onClick:()=>l("imagelist")},n.a.createElement(k.b,null))),n.a.createElement("div",{className:"d-block d-md-inline-block pt-1"},n.a.createElement(p.a,{className:"mr-1 float-md-left btn-group mb-1"},n.a.createElement(o.a,{caret:!0,color:"outline-dark",size:"xs"},n.a.createElement(b.a,{id:"pages.orderby"}),f.label),n.a.createElement(r.a,null,M.map((e,t)=>n.a.createElement(d.a,{key:t,onClick:()=>C(e.column)},e.label)))),n.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},n.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:e["menu.search"],onKeyPress:e=>P(e)}))),n.a.createElement("div",{className:"float-md-right pt-1"},n.a.createElement("span",{className:"text-muted text-small mr-1"},"".concat(S,"-").concat(w," of ").concat(y," ")),n.a.createElement(p.a,{className:"d-inline-block"},n.a.createElement(o.a,{caret:!0,color:"outline-dark",size:"xs"},N),n.a.createElement(r.a,{right:!0},z.map((e,t)=>n.a.createElement(d.a,{key:t,onClick:()=>x(e)},e))))))),n.a.createElement(u.b,{className:"mb-5"})))}}t.a=Object(g.d)(C)},370:function(e,t,a){"use strict";var l=a(6),n=a.n(l),s=a(187),c=a(371),i=a(219),m=a(190),o=a(183),r=a(588),d=a(248),h=a(334),p=a(176),g=a(171),u=a.n(g),E=a(234),b=a(175);t.a=n.a.memo(({product:e,isSelect:t,collect:a,onCheckItem:l})=>n.a.createElement(b.a,{sm:"6",lg:"4",xl:"3",className:"mb-3",key:e.id},n.a.createElement(E.b,{id:"menu_id",data:e.id,collect:a},n.a.createElement(s.a,{onClick:t=>l(t,e.id),className:u()({active:t})},n.a.createElement("div",{className:"position-relative"},n.a.createElement(p.b,{to:"?p=".concat(e.id),className:"w-40 w-sm-100"},n.a.createElement(c.a,{top:!0,alt:e.title,src:e.img})),n.a.createElement(i.a,{color:e.statusColor,pill:!0,className:"position-absolute badge-top-left"},e.status)),n.a.createElement(m.a,null,n.a.createElement(o.a,null,n.a.createElement(b.a,{xxs:"2"},n.a.createElement(r.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(e.id),checked:t,onChange:()=>{},label:""})),n.a.createElement(b.a,{xxs:"10",className:"mb-3"},n.a.createElement(d.a,null,e.title),n.a.createElement(h.a,{className:"text-muted text-small mb-0 font-weight-light"},e.date))))))))},372:function(e,t,a){"use strict";var l=a(6),n=a.n(l),s=a(187),c=a(219),i=a(588),m=a(176),o=a(171),r=a.n(o),d=a(234),h=a(175);t.a=n.a.memo(({product:e,isSelect:t,collect:a,onCheckItem:l})=>n.a.createElement(h.a,{xxs:"12",key:e.id,className:"mb-3"},n.a.createElement(d.b,{id:"menu_id",data:e.id,collect:a},n.a.createElement(s.a,{onClick:t=>l(t,e.id),className:r()("d-flex flex-row",{active:t})},n.a.createElement(m.b,{to:"?p=".concat(e.id),className:"d-flex"},n.a.createElement("img",{alt:e.title,src:e.img,className:"list-thumbnail responsive border-0 card-img-left"})),n.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},n.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},n.a.createElement(m.b,{to:"?p=".concat(e.id),className:"w-40 w-sm-100"},n.a.createElement("p",{className:"list-item-heading mb-1 truncate"},e.title)),n.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},e.category),n.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},e.date),n.a.createElement("div",{className:"w-15 w-sm-100"},n.a.createElement(c.a,{color:e.statusColor,pill:!0},e.status))),n.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},n.a.createElement(i.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(e.id),checked:t,onChange:()=>{},label:""})))))))},373:function(e,t,a){"use strict";var l=a(6),n=a.n(l),s=a(343),c=a(331),i=a(332),m=a(587),o=a(460),r=a(588),d=a(333),h=a(255),p=a(203),g=a(206),u=a(174);t.a=({modalOpen:e,toggleModal:t,categories:a})=>n.a.createElement(s.a,{isOpen:e,toggle:t,wrapClassName:"modal-right",backdrop:"static"},n.a.createElement(c.a,{toggle:t},n.a.createElement(u.a,{id:"pages.add-new-modal-title"})),n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement(u.a,{id:"pages.product-name"})),n.a.createElement(o.a,null),n.a.createElement(m.a,{className:"mt-4"},n.a.createElement(u.a,{id:"pages.category"})),n.a.createElement(p.b,{components:{Input:g.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:a}),n.a.createElement(m.a,{className:"mt-4"},n.a.createElement(u.a,{id:"pages.description"})),n.a.createElement(o.a,{type:"textarea",name:"text",id:"exampleText"}),n.a.createElement(m.a,{className:"mt-4"},n.a.createElement(u.a,{id:"pages.status"})),n.a.createElement(r.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"ON HOLD"}),n.a.createElement(r.a,{type:"radio",id:"exCustomRadio2",name:"customRadio",label:"PROCESSED"})),n.a.createElement(d.a,null,n.a.createElement(h.a,{color:"secondary",outline:!0,onClick:t},n.a.createElement(u.a,{id:"pages.cancel"})),n.a.createElement(h.a,{color:"primary",onClick:t},n.a.createElement(u.a,{id:"pages.submit"}))," "))},847:function(e,t,a){"use strict";a.r(t);var l=a(6),n=a.n(l),s=a(183),c=a(418),i=a.n(c),m=a(10),o=a(367),r=a(298),d=a(368),h=a(369),p=a(370),g=a(372),u=a(373);function E(e){return{data:e.data}}const b=m.l+"/cakes/paging";class k extends l.Component{constructor(e){super(e),this.toggleModal=()=>{this.setState({modalOpen:!this.state.modalOpen})},this.changeOrderBy=e=>{this.setState({selectedOrderOption:this.state.orderOptions.find(t=>t.column===e)},()=>this.dataListRender())},this.changePageSize=e=>{this.setState({selectedPageSize:e,currentPage:1},()=>this.dataListRender())},this.changeDisplayMode=e=>(this.setState({displayMode:e}),!1),this.onChangePage=e=>{this.setState({currentPage:e},()=>this.dataListRender())},this.onSearchKey=e=>{"Enter"===e.key&&this.setState({search:e.target.value.toLowerCase()},()=>this.dataListRender())},this.onCheckItem=(e,t)=>{if("A"===e.target.tagName||e.target.parentElement&&"A"===e.target.parentElement.tagName)return!0;null===this.state.lastChecked&&this.setState({lastChecked:t});let a=this.state.selectedItems;if(a.includes(t)?a=a.filter(e=>e!==t):a.push(t),this.setState({selectedItems:a}),e.shiftKey){var l=this.state.items,n=this.getIndex(t,l,"id"),s=this.getIndex(this.state.lastChecked,l,"id");l=l.slice(Math.min(n,s),Math.max(n,s)+1),a.push(...l.map(e=>e.id)),a=Array.from(new Set(a)),this.setState({selectedItems:a})}document.activeElement.blur()},this.handleChangeSelectAll=e=>(this.state.selectedItems.length>=this.state.items.length?e&&this.setState({selectedItems:[]}):this.setState({selectedItems:this.state.items.map(e=>e.id)}),document.activeElement.blur(),!1),this.onContextMenuClick=(e,t,a)=>{console.log("onContextMenuClick - selected items",this.state.selectedItems),console.log("onContextMenuClick - action : ",t.action)},this.onContextMenu=(e,t)=>{const a=t.data;return this.state.selectedItems.includes(a)||this.setState({selectedItems:[a]}),!0},this.mouseTrap=a(490),this.state={displayMode:"list",selectedPageSize:10,orderOptions:[{column:"title",label:"Product Name"},{column:"category",label:"Category"},{column:"status",label:"Status"}],pageSizes:[10,20,30,50,100],categories:[{label:"Cakes",value:"Cakes",key:0},{label:"Cupcakes",value:"Cupcakes",key:1},{label:"Desserts",value:"Desserts",key:2}],selectedOrderOption:{column:"title",label:"Product Name"},dropdownSplitOpen:!1,modalOpen:!1,currentPage:1,totalItemCount:0,totalPage:1,search:"",selectedItems:[],lastChecked:null,isLoading:!1}}componentDidMount(){this.dataListRender(),this.mouseTrap.bind(["ctrl+a","command+a"],()=>this.handleChangeSelectAll(!1)),this.mouseTrap.bind(["ctrl+d","command+d"],()=>(this.setState({selectedItems:[]}),!1))}componentWillUnmount(){this.mouseTrap.unbind("ctrl+a"),this.mouseTrap.unbind("command+a"),this.mouseTrap.unbind("ctrl+d"),this.mouseTrap.unbind("command+d")}getIndex(e,t,a){for(var l=0;l<t.length;l++)if(t[l][a]===e)return l;return-1}dataListRender(){const e=this.state,t=e.selectedPageSize,a=e.currentPage,l=e.selectedOrderOption,n=e.search;i.a.get("".concat(b,"?pageSize=").concat(t,"&currentPage=").concat(a,"&orderBy=").concat(l.column,"&search=").concat(n)).then(e=>e.data).then(e=>{this.setState({totalPage:e.totalPage,items:e.data,selectedItems:[],totalItemCount:e.totalItem,isLoading:!0})})}render(){const e=this.state,t=e.currentPage,a=e.items,c=e.displayMode,i=e.selectedPageSize,m=e.totalItemCount,b=e.selectedOrderOption,k=e.selectedItems,C=e.orderOptions,x=e.pageSizes,N=e.modalOpen,y=e.categories,f=this.props.match,v=(t-1)*i,S=t*i;return this.state.isLoading?n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"disable-text-selection"},n.a.createElement(h.a,{heading:"menu.data-list",displayMode:c,changeDisplayMode:this.changeDisplayMode,handleChangeSelectAll:this.handleChangeSelectAll,changeOrderBy:this.changeOrderBy,changePageSize:this.changePageSize,selectedPageSize:i,totalItemCount:m,selectedOrderOption:b,match:f,startIndex:v,endIndex:S,selectedItemsLength:k?k.length:0,itemsLength:a?a.length:0,onSearchKey:this.onSearchKey,orderOptions:C,pageSizes:x,toggleModal:this.toggleModal}),n.a.createElement(u.a,{modalOpen:N,toggleModal:this.toggleModal,categories:y}),n.a.createElement(s.a,null,this.state.items.map(e=>"imagelist"===this.state.displayMode?n.a.createElement(p.a,{key:e.id,product:e,isSelect:this.state.selectedItems.includes(e.id),collect:E,onCheckItem:this.onCheckItem}):"thumblist"===this.state.displayMode?n.a.createElement(g.a,{key:e.id,product:e,isSelect:this.state.selectedItems.includes(e.id),collect:E,onCheckItem:this.onCheckItem}):n.a.createElement(o.a,{key:e.id,product:e,isSelect:this.state.selectedItems.includes(e.id),onCheckItem:this.onCheckItem,collect:E}))," ",n.a.createElement(r.a,{currentPage:this.state.currentPage,totalPage:this.state.totalPage,onChangePage:e=>this.onChangePage(e)}),n.a.createElement(d.a,{onContextMenuClick:this.onContextMenuClick,onContextMenu:this.onContextMenu})))):n.a.createElement("div",{className:"loading"})}}t.default=k}}]);