(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-677aa462"],{4185:function(t,e,i){},a010:function(t,e,i){"use strict";i("4185")},a6c4:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"submit-form"},[t.submitted?i("div",[i("h4",[t._v("You submitted successfully!")]),i("button",{staticClass:"btn btn-success",on:{click:t.newTextEditor}},[t._v("Add")])]):i("div",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"title"}},[t._v("Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.textEditor.title,expression:"textEditor.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",required:"",name:"title"},domProps:{value:t.textEditor.title},on:{input:function(e){e.target.composing||t.$set(t.textEditor,"title",e.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"text"}},[t._v("Text")]),i("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.editorData,callback:function(e){t.editorData=e},expression:"editorData"}})],1),i("button",{staticClass:"btn btn-success",on:{click:t.saveTextEditor}},[t._v("Submit")])])])},a=[],s=i("6cd2"),n=i("fb3d"),r=i.n(n),d={name:"add-textEditor",data:function(){return{textEditor:{id:null,title:"",text:"",published:!1},editor:r.a,editorData:"<p></p>",editorConfig:{},submitted:!1}},methods:{saveTextEditor:function(){var t=this,e={title:this.textEditor.title,text:this.editorData};s["a"].create(e).then((function(e){t.textEditor.id=e.data.id,console.log(e.data),t.submitted=!0})).catch((function(t){console.log(t)}))},newTextEditor:function(){this.submitted=!1,this.textEditor={}}}},l=d,c=(i("a010"),i("2877")),u=Object(c["a"])(l,o,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-677aa462.3b9adf8f.js.map