(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c27332b"],{"007d":function(t,e,n){},"0366":function(t,e,n){var o=n("1c0b");t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},"159b":function(t,e,n){var o=n("da84"),i=n("fdbc"),s=n("17c2"),c=n("9112");for(var r in i){var a=o[r],l=a&&a.prototype;if(l&&l.forEach!==s)try{c(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(t,e,n){"use strict";var o=n("b727").forEach,i=n("a640"),s=n("ae40"),c=i("forEach"),r=s("forEach");t.exports=c&&r?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,n){"use strict";var o=n("23e7"),i=n("17c2");o({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},a8fc:function(t,e,n){"use strict";n("007d")},b727:function(t,e,n){var o=n("0366"),i=n("44ad"),s=n("7b0b"),c=n("50c4"),r=n("65f0"),a=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,f=6==t,d=7==t,h=5==t||f;return function(p,g,m,v){for(var L,b,y=s(p),C=i(y),S=o(g,m,3),F=c(C.length),k=0,T=v||r,I=e?T(p,F):n||d?T(p,0):void 0;F>k;k++)if((h||k in C)&&(L=C[k],b=S(L,k,y),t))if(e)I[k]=b;else if(b)switch(t){case 3:return!0;case 5:return L;case 6:return k;case 2:a.call(I,L)}else switch(t){case 4:return!1;case 7:a.call(I,L)}return f?-1:l||u?u:I}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c24f:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return r}));n("99af");var o=n("bb36");function i(t){return Object(o["a"])({url:"/user",method:"get",headers:{Authorization:"token ".concat(t)}})}function s(t){return Object(o["a"])({url:"/users/".concat(t,"/repos"),method:"get"})}function c(t,e){return Object(o["a"])({url:"/repos/".concat(t,"/").concat(e,"/contents"),method:"get"})}function r(t,e){return Object(o["a"])({url:"/repos/".concat(t,"/").concat(e),method:"get"})}},ca97:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}]},[n("el-row",[n("el-col",[n("el-select",{attrs:{placeholder:"请选择仓库"},on:{change:t.selectRepos},model:{value:t.upForm.repos,callback:function(e){t.$set(t.upForm,"repos",e)},expression:"upForm.repos"}},t._l(t.reposList,(function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.name}})})),1),n("el-select",{attrs:{placeholder:"请选择目录"},model:{value:t.upForm.content,callback:function(e){t.$set(t.upForm,"content",e)},expression:"upForm.content"}},t._l(t.reposContents,(function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.val}})})),1),n("el-button",{on:{click:t.getList}},[t._v("获取列表")])],1)],1),n("el-row",{staticStyle:{"padding-top":"20px"}},[n("el-col",{staticClass:"imgerr"},[t._v(" 图片加载不出来？ "),n("el-button",{on:{click:function(e){t.isjsDeliver=!t.isjsDeliver}}},[t._v("切换外链接格式")])],1),n("el-col",t._l(t.dataList,(function(e,o){return n("div",{key:o,staticClass:"item"},[n("div",{staticClass:"del",on:{click:function(n){return t.delFile(e)}}},[n("i",{staticClass:"el-icon-delete"})]),n("el-image",{staticStyle:{width:"200px",height:"200px",cursor:"pointer"},attrs:{src:t.isjsDeliver?t.imgurl+e.path:e.download_url,fit:"cover"},on:{click:function(n){return t.opDia(t.imgurl+e.path)}}}),n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.copy(1,t.imgurl+e.path)}}},[t._v("复制外链")]),n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.copy(2,t.imgurl+e.path)}}},[t._v("复制MD格式")])],1)})),0)],1),t.dialogTableVisible?n("div",{staticClass:"dialog"},[n("div",{staticClass:"dialog-close"},[n("i",{staticClass:"el-icon-circle-close",on:{click:t.diaClose}})]),n("img",{staticClass:"diaimg",attrs:{src:t.dialogUrl},on:{click:t.diaClose}})]):t._e()],1)},i=[],s=(n("99af"),n("4160"),n("b0c0"),n("159b"),n("c24f")),c=n("bb36");function r(t,e,n){return Object(c["a"])({url:"/repos/".concat(t,"/").concat(e,"/contents/").concat(n),method:"get"})}function a(t,e,n,o){return Object(c["a"])({url:"/repos/".concat(t,"/").concat(e,"/contents/").concat(n),method:"delete",data:o})}var l={data:function(){return{dialogTableVisible:!1,fullscreenLoading:!1,dialogUrl:"",repoData:{},userInfo:{},reposList:[],reposContents:[],dataList:[],upForm:{repos:"",content:""},imgurl:"",isjsDeliver:!1}},created:function(){this.repoData=this.$store.state.uploadInfo,this.userInfo=this.$store.state.userInfo,this.defSelect()},methods:{opDia:function(t){this.dialogTableVisible=!0,this.dialogUrl=t},diaClose:function(){this.dialogTableVisible=!1,this.dialogUrl=""},defSelect:function(){this.getRepos(this.userInfo.login),this.selectRepos(this.$store.state.uploadInfo.repos),this.upForm.repos=this.$store.state.uploadInfo.repos,this.upForm.content=this.$store.state.uploadInfo.content,this.$store.state.uploadInfo.iscant&&(this.upForm.content=this.$store.state.uploadInfo.delimit),this.getList()},getRepos:function(t){var e=this;this.fullscreenLoading=!0,Object(s["d"])(t).then((function(t){e.reposList=t,e.fullscreenLoading=!1})).catch((function(t){console.log(t),e.fullscreenLoading=!1}))},selectRepos:function(t){var e=this;t&&(this.fullscreenLoading=!0,this.upForm.content="",Object(s["b"])(this.userInfo.login,t).then((function(t){var n=[];t.forEach((function(t){"dir"==t.type&&n.push({name:t.name,val:"/"+t.path})})),e.reposContents=n,e.fullscreenLoading=!1})).catch((function(t){console.log(t),e.fullscreenLoading=!1})))},getList:function(){var t=this;""!=this.userInfo.login&&""!=this.upForm.repos&&""!=this.upForm.content&&this.userInfo.login&&this.upForm.repos&&this.upForm.content?(this.fullscreenLoading=!0,this.imgurl="https://cdn.jsdelivr.net/gh/".concat(this.userInfo.login,"/").concat(this.upForm.repos,"/"),r(this.userInfo.login,this.upForm.repos,this.upForm.content).then((function(e){t.dataList=e,t.fullscreenLoading=!1})).catch((function(e){console.log(e),t.fullscreenLoading=!1}))):this.$message.info("请选择仓库和目录")},copy:function(t,e){var n="";n=1==t?e:"![wishimg](".concat(e,")");var o=document.createElement("input");o.value=n,document.body.appendChild(o),o.select(),document.execCommand("Copy"),this.$message({message:"复制成功",type:"success"}),o.remove()},delFile:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n={message:"delete a file via wishimgurl",sha:t.sha};e.fullscreenLoading=!0,a(e.userInfo.login,e.upForm.repos,t.path,n).then((function(t){console.log(t),e.$message.success("删除成功"),e.getList(),e.fullscreenLoading=!1})).catch((function(t){console.log(t),e.fullscreenLoading=!1}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},u=l,f=(n("a8fc"),n("2877")),d=Object(f["a"])(u,o,i,!1,null,"1a5f546a",null);e["default"]=d.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-6c27332b.eb10a465.js.map