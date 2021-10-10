(this["webpackJsonpvalues-common-editor"]=this["webpackJsonpvalues-common-editor"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(4),i=a.n(r),l=(a(13),a(5)),d=a(6),c=a(1),o=a(8),u=a(7),v=a(0);function h(e){return Object(v.jsxs)("div",{id:"editor",children:[Object(v.jsx)(p,{handler:e.handler,renameKeyHandler:e.renameKeyHandler,duplicateHandler:e.duplicateHandler,removeHandler:e.removeHandler,id:"json",value:e.json}),Object(v.jsx)("button",{onClick:e.saveHandler,children:"Save"})]})}function p(e){switch(typeof e.value){case"string":return Object(v.jsx)("input",{id:e.id,type:"text",value:e.value,onChange:e.handler});case"object":return e.value.constructor===Array?Object(v.jsxs)("div",{className:"nested",children:[e.value.map((function(t,a){return Object(v.jsx)("div",{className:"array",children:Object(v.jsx)(p,{handler:e.handler,renameKeyHandler:e.renameKeyHandler,duplicateHandler:e.duplicateHandler,removeHandler:e.removeHandler,id:e.id+"-"+a,value:t})},a)})),e.id.endsWith("weights")?"":Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:e.duplicateHandler,id:e.id,children:"add new"}),Object(v.jsx)("button",{onClick:e.removeHandler,id:e.id,children:"remove last"})]})]}):Object(v.jsx)("div",{className:"nested",children:Object.keys(e.value).map((function(t,a){return Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:t}),Object(v.jsx)(p,{handler:e.handler,renameKeyHandler:e.renameKeyHandler,duplicateHandler:e.duplicateHandler,removeHandler:e.removeHandler,id:e.id+"-"+t,value:e.value[t]})]},a)}))});case"number":return Object(v.jsx)("input",{onChange:e.handler,id:e.id,type:"number",value:e.value});default:return Object(v.jsx)("input",{onChange:e.handler,id:e.id,type:"text",value:JSON.stringify(e.value)})}}var j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeHandler=n.changeHandler.bind(Object(c.a)(n)),n.duplicateHandler=n.duplicateHandler.bind(Object(c.a)(n)),n.saveHandler=n.saveHandler.bind(Object(c.a)(n)),n.selectJson=n.selectJson.bind(Object(c.a)(n)),n.updateEffectsAndSuch=n.updateEffectsAndSuch.bind(Object(c.a)(n)),n.removeHandler=n.removeHandler.bind(Object(c.a)(n)),n.state={selectedJson:"axes",json:{},questions:{},ideologies:{},general:{},canvas:{},buttons:{},axes:{}},n.loadFile=n.loadFile.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"updateEffectsAndSuch",value:function(){var e=this;this.setState({questions:this.state.questions.map((function(t){return{question:t.question,effect:Object.fromEntries(e.state.axes.map((function(e){var a;return[e.id,null!==(a=t.effect[e.id])&&void 0!==a?a:0]})))}})),ideologies:this.state.ideologies.map((function(t){return{name:t.name,stats:Object.fromEntries(e.state.axes.map((function(e){var a;return[e.id,null!==(a=t.stats[e.id])&&void 0!==a?a:0]})))}})),axes:this.state.axes.map((function(e){var t,a=e;a.weights=null!==(t=a.weights)&&void 0!==t?t:[],e.tiers.forEach((function(e,t){var n;a.weights[t]=null!==(n=a.weights[t])&&void 0!==n?n:0}));for(var n=0;n<a.weights.length-e.tiers.length;n++)a.weights.pop();return a}))})}},{key:"changeHandler",value:function(e){var t=this.state[this.state.selectedJson],a=e.target.id.slice(5).split("-").map((function(e){var t=parseInt(e);return Number.isNaN(t)?e:t})),n=Number.isNaN(parseInt(e.target.value))?e.target.value:parseInt(e.target.value);switch(a.length){case 1:t[a[0]]=n;break;case 2:t[a[0]][a[1]]=n;break;case 3:t[a[0]][a[1]][a[2]]=n;break;case 4:t[a[0]][a[1]][a[2]][a[3]]=n}var s={};s[this.state.selectedJson]=t,this.setState(s),this.updateEffectsAndSuch()}},{key:"duplicateHandler",value:function(e){var t=this.state[this.state.selectedJson],a=e.target.id.slice(5).split("-").map((function(e){var t=parseInt(e);return Number.isNaN(t)?e:t}));switch(a.length){case 0:t.push(t[t.length-1]);break;case 1:t[a[0]].push(t[a[0]][t[a[0]].length-1]);break;case 2:t[a[0]][a[1]].push(t[a[0]][a[1]][t[a[0]][a[1]].length-1]);break;case 3:t[a[0]][a[1]][a[2]].push(t[a[0]][a[1]][a[2]][t.length-1]);break;case 4:t[a[0]][a[1]][a[2]][a[3]].push(t[a[0]][a[1]][a[2]][a[3]][t.length-1])}var n={};n[this.state.selectedJson]=t,this.setState(n),this.updateEffectsAndSuch()}},{key:"removeHandler",value:function(e){var t=this.state[this.state.selectedJson],a=e.target.id.slice(5).split("-").map((function(e){var t=parseInt(e);return Number.isNaN(t)?e:t}));switch(a.length){case 0:t.pop();break;case 1:t[a[0]].pop();break;case 2:t[a[0]][a[1]].pop();break;case 3:t[a[0]][a[1]][a[2]].pop();break;case 4:t[a[0]][a[1]][a[2]][a[3]].pop()}var n={};n[this.state.selectedJson]=t,this.setState(n),this.updateEffectsAndSuch()}},{key:"saveHandler",value:function(){var e=document.createElement("a");if(e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.state[this.state.selectedJson]))),e.setAttribute("download","file.json"),document.createEvent){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!0),e.dispatchEvent(t)}else e.click()}},{key:"loadFile",value:function(e){var t=this,a=["questions.json","ideologies.json","general.json","canvas.json","buttons.json","axes.json"];if(function(e){for(var t=0,n=a;t<n.length;t++){var s=n[t];if(!e.includes(s))return!1}return!0}(Array.from(e.target.files).map((function(e){return e.name})).sort())){var n=new FileReader;n.readAsText(e.target.files[0],"UTF-8"),n.onload=function(e){var a;t.setState({questions:JSON.parse(null===(a=e.target)||void 0===a?void 0:a.result)})},(n=new FileReader).readAsText(e.target.files[1],"UTF-8"),n.onload=function(e){var a;t.setState({ideologies:JSON.parse(null===(a=e.target)||void 0===a?void 0:a.result)})},(n=new FileReader).readAsText(e.target.files[2],"UTF-8"),n.onload=function(e){var a;t.setState({general:JSON.parse(null===(a=e.target)||void 0===a?void 0:a.result)})},(n=new FileReader).readAsText(e.target.files[3],"UTF-8"),n.onload=function(e){var a;t.setState({canvas:JSON.parse(null===(a=e.target)||void 0===a?void 0:a.result)})},(n=new FileReader).readAsText(e.target.files[4],"UTF-8"),n.onload=function(e){var a;t.setState({buttons:JSON.parse(null===(a=e.target)||void 0===a?void 0:a.result)})},(n=new FileReader).readAsText(e.target.files[5],"UTF-8"),n.onload=function(e){var a;t.setState({axes:JSON.parse(null===(a=e.target)||void 0===a?void 0:a.result)})}}else alert("need all json files")}},{key:"selectJson",value:function(e){var t;this.setState({selectedJson:null===(t=e.target)||void 0===t?void 0:t.value})}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("input",{type:"file",onChange:this.loadFile,multiple:!0}),Object(v.jsxs)("select",{name:"jsons",id:"files",value:this.state.selectedJson,onChange:this.selectJson,children:[Object(v.jsx)("option",{value:"questions",children:"questions"}),Object(v.jsx)("option",{value:"ideologies",children:"ideologies"}),Object(v.jsx)("option",{value:"general",children:"general"}),Object(v.jsx)("option",{value:"canvas",children:"canvas"}),Object(v.jsx)("option",{value:"buttons",children:"buttons"}),Object(v.jsx)("option",{value:"axes",children:"axes"})]}),Object(v.jsx)(h,{handler:this.changeHandler,duplicateHandler:this.duplicateHandler,removeHandler:this.removeHandler,json:this.state[this.state.selectedJson],saveHandler:this.saveHandler})]})}}]),a}(s.a.Component),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.d1a76b36.chunk.js.map