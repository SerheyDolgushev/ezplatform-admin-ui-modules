!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports.ContentTree=t(require("react"),require("prop-types")):(e.eZ=e.eZ||{},e.eZ.modules=e.eZ.modules||{},e.eZ.modules.ContentTree=t(e.React,e.PropTypes))}("undefined"!=typeof self?self:this,function(e,t){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=62)}({0:function(t,i){t.exports=e},1:function(e,i){e.exports=t},2:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(i(0)),n=o(i(1));function o(e){return e&&e.__esModule?e:{default:e}}const a=e=>{const t=e.customPath?e.customPath:`/bundles/ezplatformadminui/img/ez-icons.svg#${e.name}`;let i="ez-icon";return e.extraClasses&&(i=`${i} ${e.extraClasses}`),s.default.createElement("svg",{className:i},s.default.createElement("use",{xlinkHref:t}))};a.propTypes={extraClasses:n.default.string.isRequired,name:n.default.string,customPath:n.default.string},a.defaultProps={customPath:null,name:null},t.default=a},3:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getBasicRequestInit=(({token:e,siteaccess:t})=>({headers:{"X-Siteaccess":t,"X-CSRF-Token":e},mode:"same-origin",credentials:"same-origin"}));const s=t.handleRequestError=(e=>{if(!e.ok)throw Error(e.statusText);return e});t.handleRequestResponse=(e=>s(e).json()),t.handleRequestResponseStatus=(e=>s(e).status)},4:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=t.NOTIFICATION_INFO_LABEL="info",n=t.NOTIFICATION_SUCCESS_LABEL="success",o=t.NOTIFICATION_WARNING_LABEL="warning",a=t.NOTIFICATION_ERROR_LABEL="danger",r=t.showNotification=(e=>{const t=new CustomEvent("ez-notify",{detail:e});document.body.dispatchEvent(t)});t.showInfoNotification=(e=>{r({message:e,label:s})}),t.showSuccessNotification=(e=>{r({message:e,label:n})}),t.showWarningNotification=(e=>{r({message:e,label:o})}),t.showErrorNotification=(e=>{const t=e instanceof Error?e.message:e;r({message:t,label:a})})},62:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),n=d(s),o=d(i(1)),a=d(i(63)),r=i(66);function d(e){return e&&e.__esModule?e:{default:e}}const u="ez-content-tree-subtree";class l extends s.Component{constructor(e){super(e),this.setInitialItemsState=this.setInitialItemsState.bind(this),this.loadMoreSubitems=this.loadMoreSubitems.bind(this),this.updateSubtreeAfterItemToggle=this.updateSubtreeAfterItemToggle.bind(this);const t=localStorage.getItem(u);this.items=e.preloadedLocations,this.subtree=t?JSON.parse(t):this.generateInitialSubtree(),this.expandCurrentLocationInSubtree()}componentDidMount(){if(this.items.length)return this.subtree=this.generateSubtree(this.items),void this.saveSubtree();(0,r.loadSubtree)(this.props.restInfo,this.subtree,e=>{this.setInitialItemsState(e[0]),this.saveSubtree()})}setInitialItemsState(e){this.items=[e],this.forceUpdate()}loadMoreSubitems({parentLocationId:e,offset:t,limit:i,path:s},n){(0,r.loadLocationItems)(this.props.restInfo,e,this.updateLocationsStateAfterLoadingMoreItems.bind(this,s,n),i,t)}updateLocationsStateAfterLoadingMoreItems(e,t,i){const s=this.findItem(this.items,e.split(","));s&&(s.subitems=[...s.subitems,...i.subitems],this.updateSubtreeAfterLoadMoreItems(e),t(),this.forceUpdate())}updateSubtreeAfterLoadMoreItems(e){const t=this.findItem(this.items,e.split(","));this.updateItemInSubtree(this.subtree[0],t,e.split(",")),this.saveSubtree()}updateSubtreeAfterItemToggle(e,t){const i=this.findItem(this.items,e.split(","));t?this.addItemToSubtree(this.subtree[0],i,e.split(",")):this.removeItemFromSubtree(this.subtree[0],i,e.split(",")),this.saveSubtree()}addItemToSubtree(e,t,i){const s=this.findParentSubtree(e,i);if(!s)return;const n=this.props.subitemsLoadLimit;s.children.push({"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode",locationId:t.locationId,limit:Math.ceil(t.subitems.length/n)*n,offset:0,children:[]})}removeItemFromSubtree(e,t,i){const s=this.findParentSubtree(e,i);if(!s)return;const n=s.children.findIndex(e=>e.locationId===t.locationId);n>-1&&s.children.splice(n,1)}updateItemInSubtree(e,t,i){const s=this.findParentSubtree(e,i);if(!s)return;const n=s.children.findIndex(e=>e.locationId===t.locationId);n>-1&&(s.children[n].limit=t.subitems.length)}saveSubtree(){localStorage.setItem(u,JSON.stringify(this.subtree))}findParentSubtree(e,t){if(!(t.length<2))return t.shift(),t.pop(),t.reduce((e,t)=>e.children.find(e=>e.locationId===parseInt(t,10)),e)}expandCurrentLocationInSubtree(){var e=this.props;const t=e.rootLocationId,i=e.currentLocationPath.split("/").filter(e=>!!e),s=i.findIndex(e=>parseInt(e,10)===t);if(-1===s)return;const n=i.slice(s-i.length+1);this.expandPathInSubtree(this.subtree[0],n)}expandPathInSubtree(e,t){if(!t.length)return;const i=parseInt(t[0],10);let s=e.children.find(e=>e.locationId===i);s||(s={"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode",locationId:i,limit:this.props.subitemsLoadLimit,offset:0,children:[]},e.children.push(s)),t.shift(),this.expandPathInSubtree(s,t)}generateInitialSubtree(){return[{"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode",locationId:this.props.rootLocationId,limit:this.props.subitemsLoadLimit,offset:0,children:[]}]}generateSubtree(e){const t=[],i=this.props.subitemsLoadLimit;for(const s of e){!s.subitems.length||t.push({"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode",locationId:s.locationId,limit:Math.ceil(s.subitems.length/i)*i,offset:0,children:this.generateSubtree(s.subitems)})}return t}findItem(e,t){const i=1===t.length,s=e.find(e=>e.locationId===parseInt(t[0],10));return s?i?s:s.hasOwnProperty("subitems")&&Array.isArray(s.subitems)?(t.shift(),this.findItem(s.subitems,t)):null:null}getCurrentLocationId(){const e=this.props.currentLocationPath.split("/").filter(e=>!!e).pop();return parseInt(e,10)}render(){const e=this.props.subitemsLoadLimit,t={items:this.items,currentLocationId:this.getCurrentLocationId(),subitemsLoadLimit:e,loadMoreSubitems:this.loadMoreSubitems,afterItemToggle:this.updateSubtreeAfterItemToggle};return n.default.createElement(a.default,t)}}t.default=l,eZ.addConfig("modules.ContentTree",l),l.propTypes={rootLocationId:o.default.number.isRequired,currentLocationPath:o.default.number.isRequired,preloadedLocations:o.default.arrayOf(o.default.object),subitemsLoadLimit:o.default.number,restInfo:o.default.shape({token:o.default.string.isRequired,siteaccess:o.default.string.isRequired}).isRequired},l.defaultProps={rootLocationId:2,preloadedLocations:[],subitemsLoadLimit:10}},63:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),n=r(s),o=r(i(1)),a=r(i(64));function r(e){return e&&e.__esModule?e:{default:e}}const d="ez-is-tree-resizing";class u extends s.Component{constructor(e){super(e),this.changeContainerWidth=this.changeContainerWidth.bind(this),this.addWidthChangeListener=this.addWidthChangeListener.bind(this),this.handleResizeEnd=this.handleResizeEnd.bind(this),this._refTreeContainer=n.default.createRef(),this.state={resizeStartPositionX:0,containerWidth:0,resizedContainerWidth:0,isResizing:!1}}componentWillUnmount(){this.clearDocumentResizingListeners()}changeContainerWidth({clientX:e}){const t=e;this.setState(e=>({resizedContainerWidth:e.containerWidth+(t-e.resizeStartPositionX)}))}addWidthChangeListener({nativeEvent:e}){const t=e.clientX,i=this._refTreeContainer.current.getBoundingClientRect().width;window.document.addEventListener("mousemove",this.changeContainerWidth,!1),window.document.addEventListener("mouseup",this.handleResizeEnd,!1),window.document.body.classList.add(d),this.setState(()=>({resizeStartPositionX:t,containerWidth:i,isResizing:!0}))}handleResizeEnd(){this.clearDocumentResizingListeners(),this.setState(e=>({resizeStartPositionX:0,containerWidth:e.resizedContainerWidth,isResizing:!1}))}clearDocumentResizingListeners(){window.document.removeEventListener("mousemove",this.changeContainerWidth),window.document.removeEventListener("mouseup",this.handleResizeEnd),window.document.body.classList.remove(d)}render(){var e=this.state;const t=e.isResizing,i=e.containerWidth,s=e.resizedContainerWidth;var o=this.props;const r=o.items,d=o.loadMoreSubitems,u=o.currentLocationId,l=o.subitemsLoadLimit,c=o.afterItemToggle,h=t?s:i,m=r.length?r[0].subitems:[],p=r.length?""+r[0].locationId:"",f={className:"m-tree",ref:this._refTreeContainer},b={items:m,path:p,loadMoreSubitems:d,currentLocationId:u,subitemsLoadLimit:l,afterItemToggle:c};return h&&(f.style={width:`${h}px`}),n.default.createElement("div",f,n.default.createElement(a.default,b),n.default.createElement("div",{className:"m-tree__resize-handler",onMouseDown:this.addWidthChangeListener}))}}t.default=u,u.propTypes={items:o.default.array.isRequired,loadMoreSubitems:o.default.func.isRequired,currentLocationId:o.default.number.isRequired,subitemsLoadLimit:o.default.number,afterItemToggle:o.default.func.isRequired}},64:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},n=r(i(0)),o=r(i(1)),a=r(i(65));function r(e){return e&&e.__esModule?e:{default:e}}const d=({items:e,loadMoreSubitems:t,currentLocationId:i,path:o,subitemsLoadLimit:r,afterItemToggle:u})=>{const l={loadMoreSubitems:t,currentLocationId:i,subitemsLoadLimit:r,afterItemToggle:u},c={loadMoreSubitems:t,afterItemToggle:u};return n.default.createElement("ul",{className:"c-list"},e.map(e=>{const t=o&&o.length,u=window.Routing.generate("_ezpublishLocation",{locationId:e.locationId}),h=`${t?o+",":""}${e.locationId}`,m=e.subitems;return n.default.createElement(a.default,s({},e,c,{key:e.locationId,selected:e.locationId===i,subitemsLoadLimit:r,href:u,path:h}),m.length?n.default.createElement(d,s({path:h,items:m},l)):null)}))};d.propTypes={path:o.default.string.isRequired,items:o.default.array.isRequired,loadMoreSubitems:o.default.func.isRequired,currentLocationId:o.default.number.isRequired,subitemsLoadLimit:o.default.number,afterItemToggle:o.default.func.isRequired},t.default=d},65:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),n=r(s),o=r(i(1)),a=r(i(2));function r(e){return e&&e.__esModule?e:{default:e}}class d extends s.Component{constructor(e){super(e),this.toggleExpandedState=this.toggleExpandedState.bind(this),this.cancelLoadingState=this.cancelLoadingState.bind(this),this.loadMoreSubitems=this.loadMoreSubitems.bind(this),this.handleAfterExpandedStateChange=this.handleAfterExpandedStateChange.bind(this),this.state={isExpanded:!!e.subitems.length,isLoading:!1}}cancelLoadingState(){this.setState(()=>({isLoading:!1}))}toggleExpandedState(){this.setState(e=>({isExpanded:!e.isExpanded}),()=>{var e=this.props;(0,e.afterItemToggle)(e.path,this.state.isExpanded),this.handleAfterExpandedStateChange()})}handleAfterExpandedStateChange(){this.state.isExpanded&&!this.props.subitems.length&&this.loadMoreSubitems()}loadMoreSubitems(){if(this.state.isLoading)return;var e=this.props;const t=e.subitems,i=e.path,s=e.locationId,n=e.loadMoreSubitems;this.setState(()=>({isLoading:!0}),()=>n({path:i,parentLocationId:s,offset:t.length,limit:this.props.subitemsLoadLimit},this.cancelLoadingState))}checkCanLoadMore(){var e=this.props;const t=e.subitems,i=e.totalSubitemsCount;return t.length<i}renderIcon(){var e=this.props;const t=e.contentTypeIdentifier,i={extraClasses:`ez-icon--small ez-icon--${e.selected?"light":"dark"}`};return!this.state.isLoading||this.props.subitems.length?i.customPath=eZ.helpers.contentType.getContentTypeIconUrl(t)||eZ.helpers.contentType.getContentTypeIconUrl("file"):(i.name="spinner",i.extraClasses=`${i.extraClasses} ez-spin`),n.default.createElement("span",{className:"c-list-item__icon"},n.default.createElement(a.default,i))}renderLoadMoreBtn(){const e=this.props.subitems;if(!this.state.isExpanded||!this.checkCanLoadMore()||!e.length)return null;const t=this.state.isLoading;let i=null;const s=Translator.trans("show_more",{},"content_tree"),o=Translator.trans("loading_more",{},"content_tree"),r=t?o:s;return t&&(i=n.default.createElement(a.default,{name:"spinner",extraClasses:"ez-spin ez-icon--small c-list-item__load-more-btn-spinner"})),n.default.createElement("button",{type:"button",className:"c-list-item__load-more-btn btn ez-btn",onClick:this.loadMoreSubitems},i," ",r)}render(){var e=this.props;const t=e.totalSubitemsCount,i=e.children,s=e.isInvisible,o=e.selected,a=e.href,r=e.name,d={className:"c-list-item"},u={className:"c-list-item__toggler",onClick:this.toggleExpandedState,hidden:!t,tabIndex:-1};return t&&(d.className=`${d.className} c-list-item--has-sub-items`),this.checkCanLoadMore()&&(d.className=`${d.className} c-list-item--can-load-more`),this.state.isExpanded&&(d.className=`${d.className} c-list-item--is-expanded`),s&&(d.className=`${d.className} c-list-item--is-hidden`),o&&(d.className=`${d.className} c-list-item--is-selected`,u.className=`${u.className} c-list-item__toggler--light`),n.default.createElement("li",d,n.default.createElement("div",{className:"c-list-item__label"},n.default.createElement("span",u),n.default.createElement("a",{className:"c-list-item__link",href:a},this.renderIcon()," ",r)),i,this.renderLoadMoreBtn())}}d.propTypes={path:o.default.string.isRequired,href:o.default.string.isRequired,contentTypeIdentifier:o.default.string.isRequired,totalSubitemsCount:o.default.number.isRequired,subitems:o.default.array.isRequired,children:o.default.element,hidden:o.default.bool.isRequired,isContainer:o.default.bool.isRequired,selected:o.default.bool.isRequired,locationId:o.default.number.isRequired,name:o.default.string.isRequired,isInvisible:o.default.bool.isRequired,loadMoreSubitems:o.default.func.isRequired,subitemsLoadLimit:o.default.number,afterItemToggle:o.default.func.isRequired},d.defaultProps={hidden:!1},t.default=d},66:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadSubtree=t.loadLocationItems=void 0;var s=i(3),n=i(4);t.loadLocationItems=(({siteaccess:e},t,i,o=50,r=0)=>{const d=new Request(`/api/ezp/v2/location/tree/load-subitems/${t}/${o}/${r}`,{method:"GET",mode:"same-origin",credentials:"same-origin",headers:{Accept:"application/vnd.ez.api.ContentTreeNode+json","X-Siteaccess":e}});fetch(d).then(s.handleRequestResponse).then(e=>{const t=e.ContentTreeNode;return t.children=t.children.map(a),a(t)}).then(i).catch(n.showErrorNotification)}),t.loadSubtree=(({token:e,siteaccess:t},i,a)=>{const r=new Request("/api/ezp/v2/location/tree/load-subtree",{method:"POST",mode:"same-origin",credentials:"same-origin",body:JSON.stringify({LoadSubtreeRequest:{"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequest",nodes:i}}),headers:{Accept:"application/vnd.ez.api.ContentTreeRoot+json","Content-Type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequest+json","X-Siteaccess":t,"X-CSRF-Token":e}});fetch(r).then(s.handleRequestResponse).then(e=>{const t=e.ContentTreeRoot.ContentTreeNodeList;return o(t)}).then(a).catch(n.showErrorNotification)});const o=e=>e.map(e=>(a(e),e.subitems=o(e.subitems),e)),a=e=>(e.totalSubitemsCount=e.totalChildrenCount,e.subitems=e.children,delete e.totalChildrenCount,delete e.children,delete e.displayLimit,e)}}).default});
//# sourceMappingURL=ContentTree.module.js.map