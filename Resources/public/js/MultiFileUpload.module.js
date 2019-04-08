!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports.MultiFileUpload=t(require("react"),require("prop-types")):(e.eZ=e.eZ||{},e.eZ.modules=e.eZ.modules||{},e.eZ.modules.MultiFileUpload=t(e.React,e.PropTypes))}("undefined"!=typeof self?self:this,function(e,t){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=55)}({0:function(t,i){t.exports=e},1:function(e,i){e.exports=t},13:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fileSizeToString=(e=>{let t,i=parseInt(e,10)||0,a=0;for(;i>=1024;)i/=1024,a++;return t=a<1?0:1,i.toFixed(i>=10||t)+" "+["bytes","KB","MB","GB"][a]})},2:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(i(0)),l=n(i(1));function n(e){return e&&e.__esModule?e:{default:e}}const o=e=>{const t=e.customPath?e.customPath:`/bundles/ezplatformadminui/img/ez-icons.svg#${e.name}`;let i="ez-icon";return e.extraClasses&&(i=`${i} ${e.extraClasses}`),a.default.createElement("svg",{className:i},a.default.createElement("use",{xlinkHref:t}))};o.propTypes={extraClasses:l.default.string.isRequired,name:l.default.string,customPath:l.default.string},o.defaultProps={customPath:null,name:null},t.default=o},55:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},l=i(0),n=u(l),o=u(i(1)),s=u(i(56)),d=i(61),r=u(i(2));function u(e){return e&&e.__esModule?e:{default:e}}class p extends l.Component{constructor(e){super(e);let t=!0;this._itemsUploaded=[],e.itemsToUpload&&e.itemsToUpload.length||(t=!1),this.handleDropOnWindow=this.handleDropOnWindow.bind(this),this.handleAfterUpload=this.handleAfterUpload.bind(this),this.showUploadPopup=this.showUploadPopup.bind(this),this.hidePopup=this.hidePopup.bind(this),this.processUploadedFiles=this.processUploadedFiles.bind(this),this.state={popupVisible:t,itemsToUpload:e.itemsToUpload,allowDropOnWindow:!0,uploadDisabled:Object.values(e.contentCreatePermissionsConfig).every(e=>!e)}}componentDidMount(){this.manageDropEvent()}componentDidUpdate(){this.manageDropEvent()}manageDropEvent(){var e=this.state;const t=e.uploadDisabled,i=e.popupVisible,a=e.itemsToUpload;t||i||a.length||(window.addEventListener("drop",this.handleDropOnWindow,!1),window.addEventListener("dragover",this.preventDefaultAction,!1))}hidePopup(){this.setState(e=>Object.assign({},e,{popupVisible:!1})),this.props.onPopupClose(this._itemsUploaded)}showUploadPopup(){this.setState(e=>Object.assign({},e,{popupVisible:!0,itemsToUpload:[]}))}handleAfterUpload(e){this._itemsUploaded=e}handleDropOnWindow(e){this.preventDefaultAction(e);const t=this.processUploadedFiles(e);this.state.allowDropOnWindow&&t.length&&(window.removeEventListener("drop",this.handleDropOnWindow,!1),window.removeEventListener("dragover",this.preventDefaultAction,!1),this.setState(e=>Object.assign({},e,{itemsToUpload:t,popupVisible:!0,allowDropOnWindow:!1})))}extractDroppedFilesList(e){let t;return t=e.nativeEvent?e.nativeEvent.dataTransfer||e.nativeEvent.target:e.dataTransfer}processUploadedFiles(e){const t=this.extractDroppedFilesList(e);return Array.from(t.files).map(e=>({id:Math.floor(Math.random()*Date.now()),file:e}))}preventDefaultAction(e){e.preventDefault(),e.stopPropagation()}renderBtn(){if(!this.props.withUploadButton)return null;const e=this.state.uploadDisabled,t={className:"m-mfu__btn--upload",title:Translator.trans("multi_file_upload_open_btn.label",{},"multi_file_upload"),onClick:this.showUploadPopup,type:"button"};return e&&(delete t.onClick,t.disabled=!0),n.default.createElement("button",t,n.default.createElement(r.default,{name:"upload",extraClasses:"ez-icon--light ez-icon--small-medium"}))}renderPopup(){if(!this.state.popupVisible)return null;const e=a({},this.props,{visible:!0,onClose:this.hidePopup,itemsToUpload:this.state.itemsToUpload,onAfterUpload:this.handleAfterUpload,preventDefaultAction:this.preventDefaultAction,processUploadedFiles:this.processUploadedFiles});return n.default.createElement(s.default,e)}render(){return n.default.createElement("div",{className:"m-mfu"},this.renderBtn(),this.renderPopup())}}t.default=p,eZ.addConfig("modules.MultiFileUpload",p),p.propTypes={adminUiConfig:o.default.shape({multiFileUpload:o.default.shape({defaultMappings:o.default.arrayOf(o.default.object).isRequired,fallbackContentType:o.default.object.isRequired,locationMappings:o.default.arrayOf(o.default.object).isRequired,maxFileSize:o.default.number.isRequired}).isRequired,token:o.default.string.isRequired,siteaccess:o.default.string.isRequired}).isRequired,parentInfo:o.default.shape({contentTypeIdentifier:o.default.string.isRequired,contentTypeId:o.default.number.isRequired,locationPath:o.default.string.isRequired,language:o.default.string.isRequired}).isRequired,checkCanUpload:o.default.func,createFileStruct:o.default.func,deleteFile:o.default.func,onPopupClose:o.default.func,publishFile:o.default.func,itemsToUpload:o.default.array,withUploadButton:o.default.bool,contentCreatePermissionsConfig:o.default.object,contentTypesMap:o.default.object.isRequired,currentLanguage:o.default.string},p.defaultProps={checkCanUpload:d.checkCanUpload,createFileStruct:d.createFileStruct,deleteFile:d.deleteFile,onPopupClose:()=>{},publishFile:d.publishFile,itemsToUpload:[],withUploadButton:!0,currentLanguage:""}},56:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},l=i(0),n=u(l),o=u(i(1)),s=u(i(8)),d=u(i(57)),r=u(i(58));function u(e){return e&&e.__esModule?e:{default:e}}const p="ez-scroll-disabled";class c extends l.Component{constructor(e){super(e),this.uploadFiles=this.uploadFiles.bind(this),this.state={itemsToUpload:e.itemsToUpload}}componentDidMount(){window.document.body.classList.add(p)}componentWillUnmount(){window.document.body.classList.remove(p)}UNSAFE_componentWillReceiveProps(e){this.setState(t=>{return{itemsToUpload:[...t.itemsToUpload.filter(t=>!e.itemsToUpload.find(e=>e.id===t.id)),...e.itemsToUpload]}})}uploadFiles(e){this.setState(()=>({itemsToUpload:e}))}render(){const e=this.props,t=a({},e,{itemsToUpload:this.state.itemsToUpload}),i=Translator.trans("upload_popup.title",{},"multi_file_upload");return n.default.createElement("div",{className:"c-upload-popup"},n.default.createElement(s.default,a({title:i},e),n.default.createElement(d.default,{onDrop:this.uploadFiles,maxFileSize:this.props.adminUiConfig.multiFileUpload.maxFileSize,preventDefaultAction:this.props.preventDefaultAction,processUploadedFiles:this.props.processUploadedFiles}),n.default.createElement(r.default,t)))}}t.default=c,c.propTypes={popupTitle:o.default.string.isRequired,visible:o.default.bool,onUpload:o.default.func,onUploadEnd:o.default.func,onUploadFail:o.default.func,onItemEdit:o.default.func,onItemRemove:o.default.func,onClose:o.default.func,itemsToUpload:o.default.array,onAfterUpload:o.default.func.isRequired,createFileStruct:o.default.func.isRequired,publishFile:o.default.func.isRequired,deleteFile:o.default.func.isRequired,checkCanUpload:o.default.func.isRequired,adminUiConfig:o.default.shape({multiFileUpload:o.default.shape({defaultMappings:o.default.arrayOf(o.default.object).isRequired,fallbackContentType:o.default.object.isRequired,locationMappings:o.default.arrayOf(o.default.object).isRequired,maxFileSize:o.default.number.isRequired}).isRequired,token:o.default.string.isRequired,siteaccess:o.default.string.isRequired}).isRequired,parentInfo:o.default.shape({contentTypeIdentifier:o.default.string.isRequired,contentTypeId:o.default.number.isRequired,locationPath:o.default.string.isRequired,language:o.default.string.isRequired}).isRequired,preventDefaultAction:o.default.func.isRequired,processUploadedFiles:o.default.func.isRequired,contentTypesMap:o.default.object.isRequired,currentLanguage:o.default.string},c.defaultProps={visible:!0,itemsToUpload:[],currentLanguage:""}},57:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(0),l=d(a),n=d(i(1)),o=i(13),s=d(i(2));function d(e){return e&&e.__esModule?e:{default:e}}class r extends a.Component{constructor(e){super(e),this._refFileInput=null,this.openFileSelector=this.openFileSelector.bind(this),this.handleUpload=this.handleUpload.bind(this)}openFileSelector(e){e.preventDefault(),this._refFileInput.click()}handleUpload(e){this.props.preventDefaultAction(e),this.props.onDrop(this.props.processUploadedFiles(e))}componentDidMount(){window.addEventListener("drop",this.props.preventDefaultAction,!1),window.addEventListener("dragover",this.props.preventDefaultAction,!1)}componentWillUnmount(){window.removeEventListener("drop",this.props.preventDefaultAction,!1),window.removeEventListener("dragover",this.props.preventDefaultAction,!1)}render(){const e=Translator.trans("max_file_size.message",{},"multi_file_upload"),t=Translator.trans("drop_action.message",{},"multi_file_upload"),i=Translator.trans("upload_btn.label",{},"multi_file_upload");return l.default.createElement("form",{className:"c-drop-area",multiple:!0,onDrop:this.handleUpload},l.default.createElement("div",{className:"c-drop-area__message c-drop-area__message--main"},t),l.default.createElement("div",{className:"c-drop-area__btn-select",onClick:this.openFileSelector,tabIndex:"-1"},l.default.createElement(s.default,{name:"upload",extraClasses:"c-drop-area__icon ez-icon--light ez-icon--small-medium"}),i),l.default.createElement("div",{className:"c-drop-area__message c-drop-area__message--filesize"},"(",e," ",(0,o.fileSizeToString)(this.props.maxFileSize),")"),l.default.createElement("input",{className:"c-drop-area__input--hidden",ref:e=>this._refFileInput=e,id:"mfu-files",type:"file",name:"files[]",hidden:!0,multiple:!0,onChange:this.handleUpload}))}}t.default=r,r.propTypes={onDrop:n.default.func.isRequired,maxFileSize:n.default.number.isRequired,processUploadedFiles:n.default.func.isRequired,preventDefaultAction:n.default.func.isRequired}},58:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),l=s(a),n=s(i(1)),o=s(i(59));function s(e){return e&&e.__esModule?e:{default:e}}class d extends a.Component{constructor(e){super(e),this.state={itemsToUpload:e.itemsToUpload,items:[]}}UNSAFE_componentWillReceiveProps(e){this.setState(t=>{return{itemsToUpload:[...t.itemsToUpload.filter(t=>!e.itemsToUpload.find(e=>e.id===t.id)),...e.itemsToUpload]}})}componentDidUpdate(){this.props.onAfterUpload(this.state.items)}handleAfterUpload(e){this.setState(t=>({itemsToUpload:t.itemsToUpload.filter(t=>t.id!==e.id),items:[...t.items,e]}))}handleAfterAbort(e){this.setState(t=>{const i=t.items.filter(t=>t.id!==e.id),a=t.itemsToUpload.filter(t=>t.id!==e.id);return Object.assign({},t,{uploaded:i.length,total:i.length+a.length,itemsToUpload:a,items:i})})}handleAfterDelete(e){this.setState(t=>{const i=t.items.filter(t=>t.id!==e.id),a=t.itemsToUpload.filter(t=>t.id!==e.id);return Object.assign({},t,{uploaded:i.length,total:i.length+a.length,itemsToUpload:a,items:i})})}renderItemToUpload(e){return this.renderItem(e,{isUploaded:!1,createFileStruct:this.props.createFileStruct,publishFile:this.props.publishFile,onAfterAbort:this.handleAfterAbort.bind(this),onAfterUpload:this.handleAfterUpload.bind(this),checkCanUpload:this.props.checkCanUpload})}renderUploadedItem(e){return this.renderItem(e,{isUploaded:!0,deleteFile:this.props.deleteFile,onAfterDelete:this.handleAfterDelete.bind(this)})}renderItem(e,t){var i=this.props;const a=i.adminUiConfig,n=i.parentInfo,s=i.contentCreatePermissionsConfig,d=i.contentTypesMap,r=i.currentLanguage,u=Object.assign({key:e.id,data:e,adminUiConfig:a,parentInfo:n,contentCreatePermissionsConfig:s,contentTypesMap:d,currentLanguage:r},t);return l.default.createElement(o.default,u)}render(){var e=this.state;const t=e.items,i=e.itemsToUpload,a=t.length,n=a+i.length;return l.default.createElement("div",{className:"c-upload-list"},l.default.createElement("div",{className:"c-upload-list__title"},this.props.uploadedItemsListTitle," (",a,"/",n,")"),l.default.createElement("div",{className:"c-upload-list__items"},i.map(this.renderItemToUpload.bind(this)),t.map(this.renderUploadedItem.bind(this))))}}t.default=d,d.propTypes={itemsToUpload:n.default.arrayOf(n.default.object),onAfterUpload:n.default.func.isRequired,createFileStruct:n.default.func.isRequired,publishFile:n.default.func.isRequired,deleteFile:n.default.func.isRequired,checkCanUpload:n.default.func.isRequired,adminUiConfig:n.default.shape({multiFileUpload:n.default.shape({defaultMappings:n.default.arrayOf(n.default.object).isRequired,fallbackContentType:n.default.object.isRequired,locationMappings:n.default.arrayOf(n.default.object).isRequired,maxFileSize:n.default.number.isRequired}).isRequired,token:n.default.string.isRequired,siteaccess:n.default.string.isRequired}).isRequired,parentInfo:n.default.shape({contentTypeIdentifier:n.default.string.isRequired,contentTypeId:n.default.number.isRequired,locationPath:n.default.string.isRequired,language:n.default.string.isRequired}).isRequired,uploadedItemsListTitle:n.default.string.isRequired,contentCreatePermissionsConfig:n.default.object.isRequired,contentTypesMap:n.default.object.isRequired,currentLanguage:n.default.string},d.defaultProps={itemsToUpload:[],currentLanguage:""}},59:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},l=i(0),n=u(l),o=u(i(1)),s=u(i(60)),d=i(13),r=u(i(2));function u(e){return e&&e.__esModule?e:{default:e}}class p extends l.Component{constructor(e){super(e),this.handleFileSizeNotAllowed=this.handleFileSizeNotAllowed.bind(this),this.handleFileTypeNotAllowed=this.handleFileTypeNotAllowed.bind(this),this.handleContentTypeNotAllowed=this.handleContentTypeNotAllowed.bind(this),this.handleEditBtnClick=this.handleEditBtnClick.bind(this),this.handleUploadAbort=this.handleUploadAbort.bind(this),this.handleUploadError=this.handleUploadError.bind(this),this.handleUploadLoad=this.handleUploadLoad.bind(this),this.handleUploadProgress=this.handleUploadProgress.bind(this),this.handleUploadEnd=this.handleUploadEnd.bind(this),this.handleLoadStart=this.handleLoadStart.bind(this),this.handleFileDeleted=this.handleFileDeleted.bind(this),this.abortUploading=this.abortUploading.bind(this),this.deleteFile=this.deleteFile.bind(this),this.contentInfoInput=null,this.contentVersionInfoInput=null,this.contentVersionNoInput=null,this.contentEditBtn=null,this.state={uploading:!1,uploaded:e.isUploaded,disallowed:!1,disallowedType:!1,disallowedSize:!1,disallowedContentType:!1,aborted:!1,failed:!1,deleted:!1,progress:0,xhr:null,struct:e.data.struct||null,totalSize:(0,d.fileSizeToString)(e.data.file.size),uploadedSize:"0"}}componentDidMount(){var e=this.props;const t=e.data,i=e.adminUiConfig,l=e.parentInfo,n=e.createFileStruct,o=e.isUploaded,s=e.checkCanUpload,d=e.contentCreatePermissionsConfig,r=e.currentLanguage;if(this.contentInfoInput=window.document.querySelector("#form_subitems_content_edit_content_info"),this.contentVersionInfoInput=window.document.querySelector("#form_subitems_content_edit_version_info_content_info"),this.contentVersionNoInput=window.document.querySelector("#form_subitems_content_edit_version_info_version_no"),this.contentEditBtn=window.document.querySelector("#form_subitems_content_edit_create"),o)return;const u=a({},i.multiFileUpload,{contentCreatePermissionsConfig:d}),p={fileTypeNotAllowedCallback:this.handleFileTypeNotAllowed,fileSizeNotAllowedCallback:this.handleFileSizeNotAllowed,contentTypeNotAllowedCallback:this.handleContentTypeNotAllowed};s(t.file,l,u,p)?n(t.file,{parentInfo:l,config:i,languageCode:r}).then(this.initPublishFile.bind(this,i)):this.setState(()=>({uploading:!1,disallowed:!0,uploaded:!1,aborted:!1,failed:!0}))}initPublishFile({token:e,siteaccess:t},i){this.props.publishFile({struct:i,token:e,siteaccess:t},{upload:{onabort:this.handleUploadAbort,onerror:this.handleUploadError,onload:this.handleUploadLoad,onprogress:this.handleUploadProgress},onloadstart:this.handleLoadStart,onerror:this.handleUploadError},this.handleUploadEnd)}handleFileTypeNotAllowed(){this.setState(()=>({uploading:!1,disallowed:!0,disallowedType:!0,disallowedSize:!1,disallowedContentType:!1,uploaded:!1,aborted:!1,failed:!0}))}handleFileSizeNotAllowed(){this.setState(()=>({uploading:!1,disallowed:!0,disallowedType:!1,disallowedSize:!0,disallowedContentType:!1,uploaded:!1,aborted:!1,failed:!0}))}handleContentTypeNotAllowed(){this.setState(()=>({uploading:!1,disallowed:!0,disallowedType:!1,disallowedSize:!1,disallowedContentType:!0,uploaded:!1,aborted:!1,failed:!0}))}handleLoadStart(e){this.setState(()=>({uploading:!0,disallowed:!1,disallowedType:!1,disallowedSize:!1,disallowedContentType:!1,uploaded:!1,aborted:!1,failed:!1,xhr:e.target}))}handleUploadAbort(){this.setState(()=>({uploading:!1,disallowed:!1,disallowedType:!1,disallowedSize:!1,disallowedContentType:!1,uploaded:!1,aborted:!0,failed:!1}))}handleUploadError(){this.setState(e=>({uploading:!1,disallowed:e.disallowed,disallowedSize:e.disallowedSize,disallowedType:e.disallowedType,disallowedContentType:e.disallowedContentType,uploaded:!1,aborted:e.aborted,failed:!0}))}handleUploadLoad(){this.setState(()=>({uploading:!1,disallowed:!1,disallowedType:!1,disallowedSize:!1,disallowedContentType:!1,uploaded:!0,aborted:!1,failed:!1}))}handleUploadProgress(e){const t=e.loaded/e.total,i=parseInt(100*t,10);this.setState(()=>({uploadedSize:(0,d.fileSizeToString)(t*parseInt(this.props.data.file.size,10)),uploading:!0,disallowed:!1,disallowedType:!1,disallowedSize:!1,disallowedContentType:!1,uploaded:!1,aborted:!1,failed:!1,progress:i}))}handleUploadEnd(){this.setState(e=>{return{struct:JSON.parse(e.xhr.response),uploading:!1,disallowed:!1,disallowedType:!1,disallowedSize:!1,disallowedContentType:!1,uploaded:!0,aborted:!1,failed:!1}},()=>{const e=this.props.data;this.props.onAfterUpload(a({},e,{struct:this.state.struct}))})}abortUploading(){this.state.xhr.abort(),this.props.onAfterAbort(this.props.data)}deleteFile(){this.setState(()=>({deleted:!0}),()=>this.props.deleteFile(this.props.adminUiConfig,this.state.struct,this.handleFileDeleted))}handleFileDeleted(){this.props.onAfterDelete(this.props.data)}getContentTypeIdentifier(){var e=this.props;const t=e.contentTypesMap,i=e.data;if(!i.struct||!i.struct.Content)return null;const a=i.struct.Content.ContentType._href,l=t?t[a]:null;return l?l.identifier:null}renderIcon(){const e=this.getContentTypeIdentifier();if(!e)return null;const t=eZ.helpers.contentType.getContentTypeIconUrl(e);return n.default.createElement(r.default,{customPath:t,extraClasses:"ez-icon--small-medium"})}renderProgressBar(){var e=this.state;const t=e.uploaded,i=e.aborted,a=e.progress,l=e.totalSize,o=e.uploadedSize,d=e.disallowed;return this.props.isUploaded||t||i||d?null:n.default.createElement(s.default,{progress:a,uploaded:o,total:l})}renderErrorMessage(){var e=this.state;const t=e.uploaded,i=e.aborted,a=e.disallowedType,l=e.disallowedSize,o=e.failed,s=e.uploading,d=e.disallowedContentType,r=!t&&!i&&(l||a||d)&&o&&!s,u=Translator.trans("cannot_upload.message",{},"multi_file_upload"),p=Translator.trans("disallowed_type.message",{},"multi_file_upload"),c=Translator.trans("disallowed_size.message",{},"multi_file_upload"),f=Translator.trans("disallowed_content_type.message",{},"multi_file_upload");let h=u;return a&&(h=p),l&&(h=c),d&&(h=f),r?n.default.createElement("div",{className:"c-upload-list-item__message c-upload-list-item__message--error"},h):null}renderSuccessMessage(){var e=this.state;const t=e.uploaded,i=e.aborted,a=e.disallowedSize,l=e.disallowedType,o=e.failed,s=e.uploading,d=t&&!i&&!(a||l)&&!o&&!s,r=Translator.trans("upload.success.message",{},"multi_file_upload");return d?n.default.createElement("div",{className:"c-upload-list-item__message c-upload-list-item__message--success"},r):null}renderAbortBtn(){var e=this.state;const t=e.uploaded,i=e.aborted,a=e.disallowedSize,l=e.disallowedType,o=e.failed,s=e.uploading;if(!(!t&&!i&&!a&&!l&&!o&&s))return null;const d=Translator.trans("abort.label",{},"multi_file_upload");return n.default.createElement("div",{className:"c-upload-list-item__action c-upload-list-item__action--abort",onClick:this.abortUploading,title:d,tabIndex:"-1"},n.default.createElement(r.default,{name:"circle-close",extraClasses:"ez-icon--small-medium"}))}handleEditBtnClick(e){e.preventDefault();const t=this.state.struct.Content,i=t._id,a=t.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language[0].languageCode,l=t.CurrentVersion.Version.VersionInfo.versionNo;this.contentInfoInput.value=i,this.contentVersionInfoInput.value=i,this.contentVersionNoInput.value=l,window.document.querySelector(`#form_subitems_content_edit_language_${a}`).checked=!0,this.contentEditBtn.click()}renderEditBtn(){var e=this.state;const t=e.uploaded,i=e.aborted,a=e.disallowedSize,l=e.disallowedType,o=e.failed,s=e.uploading;if(!(this.props.isUploaded||t&&!i&&!(a||l)&&!o&&!s))return null;const d=Translator.trans("edit.label",{},"multi_file_upload");return n.default.createElement("div",{className:"c-upload-list-item__action c-upload-list-item__action--edit",title:d,onClick:this.handleEditBtnClick,tabIndex:"-1"},n.default.createElement(r.default,{name:"edit",extraClasses:"ez-icon--small-medium"}))}renderDeleteBtn(){var e=this.state;const t=e.uploaded,i=e.aborted,a=e.disallowedSize,l=e.disallowedType,o=e.failed,s=e.uploading;if(!(this.props.isUploaded||t&&!i&&!(a||l)&&!o&&!s))return null;const d=Translator.trans("delete.label",{},"multi_file_upload");return n.default.createElement("div",{className:"c-upload-list-item__action c-upload-list-item__action--delete",onClick:this.deleteFile,title:d,tabIndex:"-1"},n.default.createElement(r.default,{name:"trash",extraClasses:"ez-icon--small-medium"}))}render(){return this.state.deleted?null:n.default.createElement("div",{className:"c-upload-list-item"},n.default.createElement("div",{className:"c-upload-list-item__icon-wrapper"},this.renderIcon()),n.default.createElement("div",{className:"c-upload-list-item__meta"},n.default.createElement("div",{className:"c-upload-list-item__name"},this.props.data.file.name),n.default.createElement("div",{className:"c-upload-list-item__size"},this.state.uploaded?this.state.totalSize:"")),n.default.createElement("div",{className:"c-upload-list-item__info"},this.renderErrorMessage(),this.renderSuccessMessage(),this.renderProgressBar()),n.default.createElement("div",{className:"c-upload-list-item__actions"},this.renderAbortBtn(),this.renderEditBtn(),this.renderDeleteBtn()))}}t.default=p,p.propTypes={data:o.default.object.isRequired,onAfterUpload:o.default.func.isRequired,onAfterAbort:o.default.func.isRequired,onAfterDelete:o.default.func.isRequired,isUploaded:o.default.bool.isRequired,createFileStruct:o.default.func.isRequired,publishFile:o.default.func.isRequired,deleteFile:o.default.func.isRequired,checkCanUpload:o.default.func.isRequired,adminUiConfig:o.default.shape({multiFileUpload:o.default.shape({defaultMappings:o.default.arrayOf(o.default.object).isRequired,fallbackContentType:o.default.object.isRequired,locationMappings:o.default.arrayOf(o.default.object).isRequired,maxFileSize:o.default.number.isRequired}).isRequired,token:o.default.string.isRequired,siteaccess:o.default.string.isRequired}).isRequired,parentInfo:o.default.shape({contentTypeIdentifier:o.default.string.isRequired,contentTypeId:o.default.number.isRequired,locationPath:o.default.string.isRequired,language:o.default.string.isRequired}).isRequired,contentCreatePermissionsConfig:o.default.object,contentTypesMap:o.default.object.isRequired,currentLanguage:o.default.string},p.defaultProps={isUploaded:!1,currentLanguage:""}},60:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(i(0)),l=n(i(1));function n(e){return e&&e.__esModule?e:{default:e}}const o=e=>a.default.createElement("div",{className:"c-progress-bar"},a.default.createElement("div",{className:"c-progress-bar__value",style:{width:`${e.progress}%`}}),a.default.createElement("div",{className:"c-progress-bar__label"},`${e.progress}%`),a.default.createElement("div",{className:"c-progress-bar__uploaded"},e.uploaded," of ",e.total));o.propTypes={progress:l.default.number.isRequired,uploaded:l.default.string.isRequired,total:l.default.string.isRequired},t.default=o},61:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=e=>{if(!e.ok)throw Error(e.text());return e},l=(e,t)=>e.find(e=>e.mimeTypes.find(e=>e===t.type)),n=(e,t)=>!t||((e,t)=>!!l(e,t))(t.mappings,e),o=(e,t,i)=>{const a=i.locationMappings.find(e=>e.contentTypeIdentifier===t.contentTypeIdentifier),n=a?a.mappings:i.defaultMappings;return l(n,e)||i.fallbackContentType},s=({parentInfo:e,config:t,languageCode:i},l)=>{let n=`/api/ezp/v2/content/locations${e.locationPath}`;n=n.endsWith("/")?n.slice(0,-1):n;const s=o(l.file,e,t.multiFileUpload);return(({token:e,siteaccess:t},i)=>{const l=new Request(`/api/ezp/v2/content/types?identifier=${i}`,{method:"GET",headers:{Accept:"application/vnd.ez.api.ContentTypeInfoList+json","X-Siteaccess":t,"X-CSRF-Token":e},credentials:"same-origin",mode:"cors"});return fetch(l).then(a)})(t,s.contentTypeIdentifier).then(e=>e.json()).catch(()=>window.eZ.helpers.notification.showErrorNotification("Cannot get content type by identifier")).then(t=>{const a=[{fieldDefinitionIdentifier:s.nameFieldIdentifier,fieldValue:l.file.name},{fieldDefinitionIdentifier:s.contentFieldIdentifier,fieldValue:{fileName:l.file.name,data:l.fileReader.result.replace(/^.*;base64,/,"")}}];return{ContentCreate:{ContentType:{_href:t.ContentTypeInfoList.ContentType[0]._href},mainLanguageCode:i||e.language,LocationCreate:{ParentLocation:{_href:n},sortField:"PATH",sortOrder:"ASC"},Section:null,alwaysAvailable:!0,remoteId:null,modificationDate:(new Date).toISOString(),fields:{field:a}}}}).catch(()=>window.eZ.helpers.notification.showErrorNotification("Cannot create content structure"))},d=({struct:e,token:t,siteaccess:i},a)=>{const l=new XMLHttpRequest,n=JSON.stringify(e),o={Accept:"application/vnd.ez.api.Content+json","Content-Type":"application/vnd.ez.api.ContentCreate+json","X-CSRF-Token":t,"X-Siteaccess":i};return new Promise((e,t)=>{if(l.open("POST","/api/ezp/v2/content/objects",!0),l.onreadystatechange=((e,t,i)=>{4===e.readyState&&(0===e.status&&""===e.statusText||(e.status>=400||!e.status?i(e):t(JSON.parse(e.response))))}).bind(null,l,e,t),a&&Object.keys(a).length){const e=a.upload;e&&Object.keys(e).length&&(l.upload.onabort=e.onabort,l.upload.onerror=t,l.upload.onload=e.onload,l.upload.onprogress=e.onprogress,l.upload.ontimeout=e.ontimeout),l.onerror=t,l.onloadstart=a.onloadstart}for(let e in o)o.hasOwnProperty(e)&&l.setRequestHeader(e,o[e]);l.send(n)})};t.checkCanUpload=((e,t,i,a)=>{const l=i.locationMappings.find(e=>e.contentTypeIdentifier===t.contentTypeIdentifier);return((e,t,i)=>{if(!i.hasOwnProperty("contentCreatePermissionsConfig")||!i.contentCreatePermissionsConfig)return!0;const a=o(e,t,i);return i.contentCreatePermissionsConfig[a.contentTypeIdentifier]})(e,t,i)?n(e,l)?!(e.size>i.maxFileSize)||(a.fileSizeNotAllowedCallback(),!1):(a.fileTypeNotAllowedCallback(),!1):(a.contentTypeNotAllowedCallback(),!1)}),t.createFileStruct=((e,t)=>new Promise(function(e,t,i){this.addEventListener("load",()=>t({fileReader:this,file:e}),!1),this.addEventListener("error",()=>i(),!1),this.readAsDataURL(e)}.bind(new FileReader,e)).then(s.bind(null,t))),t.publishFile=((e,t,i)=>{d(e,t).then((({token:e,siteaccess:t},i)=>{if(!i||!i.hasOwnProperty("Content"))return Promise.reject("Cannot publish content based on an uploaded file");const l=new Request(i.Content.CurrentVersion.Version._href,{method:"POST",headers:{"X-Siteaccess":t,"X-CSRF-Token":e,"X-HTTP-Method-Override":"PUBLISH"},mode:"cors",credentials:"same-origin"});return fetch(l).then(a)}).bind(null,e)).then(i).catch(()=>window.eZ.helpers.notification.showErrorNotification("An error occurred while publishing a file"))}),t.deleteFile=(({token:e,siteaccess:t},i,l)=>{const n=new Request(i.Content._href,{method:"DELETE",headers:{"X-Siteaccess":t,"X-CSRF-Token":e},mode:"cors",credentials:"same-origin"});fetch(n).then(a).then(l).catch(()=>window.eZ.helpers.notification.showErrorNotification("An error occurred while deleting a file"))})},8:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(i(0)),l=o(i(1)),n=o(i(2));function o(e){return e&&e.__esModule?e:{default:e}}const s=e=>{const t={className:"c-tooltip-popup",hidden:!e.visible};return a.default.createElement("div",t,a.default.createElement("div",{className:"c-tooltip-popup__header"},a.default.createElement("div",{className:"c-tooltip-popup__title"},e.title),a.default.createElement("div",{className:"c-tooltip-popup__close",onClick:e.onClose,tabIndex:"-1"},a.default.createElement(n.default,{name:"discard",extraClasses:"ez-icon--medium"}))),a.default.createElement("div",{className:"c-tooltip-popup__content"},e.children))};s.propTypes={title:l.default.string.isRequired,children:l.default.node.isRequired,visible:l.default.bool.isRequired,onClose:l.default.func},s.defaultProps={onClose:()=>{}},t.default=s}}).default});
//# sourceMappingURL=MultiFileUpload.module.js.map