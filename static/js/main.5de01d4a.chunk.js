(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),c=(a(23),a(12)),o=a(13),i=a(17),m=a(16),u=a(14),E=a.n(u),f=function(){return E.a.get("https://randomuser.me/api/?results=200&nat=us")};var p=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};a(41);var h=function(e){return r.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};a(42);var d=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",Object.assign({className:t},e))};a(43);var y=function(e){var t=e.search,a=e.handleInputChange,n=e.findEmployee;return r.a.createElement("form",{className:"search form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("h2",null,"Search"),r.a.createElement("input",{value:t,onChange:a,name:"Employees",type:"text",className:"form-control",placeholder:"Search for an employee",id:"index"}),r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),n()},className:"btn btn-primary"},"Search")))},v=a(15),g=a.n(v),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Employees:[],filteredEmployees:[],sortOrder:"asc",search:"",error:""},e.handleInputChange=function(t){console.log(t.target.value),console.log(e.state.search),""===t.target.value?e.setState({filteredEmployees:e.state.Employees}):e.setState({search:t.target.value},(function(){e.findEmployee()}))},e.findEmployee=function(t){var a,n=e.state.search;return a=e.state.Employees.filter((function(e){return(n=(n=n.toLowerCase()).charAt(0).toUpperCase()+n.slice(1))===e.name.first})),e.setState({filteredEmployees:a})},e.sortName=function(){var t,a;"asc"===e.state.sortOrder?(t=e.state.Employees.sort((function(e,t){return e.name.last>t.name.last?1:-1})),a="dsc"):(t=e.state.Employees.sort((function(e,t){return e.name.last<t.name.last?1:-1})),a="asc"),e.setState({Employees:t,sortOrder:a})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({Employees:t.data.results,filteredEmployees:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{style:{minHeight:"80%"}},r.a.createElement(h,null,r.a.createElement(y,{findEmployee:this.findEmployee,handleInputChange:this.handleInputChange,Employees:this.state.Employees})),r.a.createElement(h,null,r.a.createElement(d,{size:"sm-2"},r.a.createElement("h4",null,"Picture")),r.a.createElement(d,{size:"sm-2"},r.a.createElement("h4",null,"Name"," ",r.a.createElement("button",{onClick:this.sortName},r.a.createElement("i",{className:"fas fa-sort-alpha-up-alt"})))),r.a.createElement(d,{size:"sm-3"},r.a.createElement("h4",null,"Phone Number")),r.a.createElement(d,{size:"sm-3"},r.a.createElement("h4",null,"Email")),r.a.createElement(d,{size:"sm-2"},r.a.createElement("h4",null,"DOB"))),this.state.filteredEmployees.map((function(e,t){return r.a.createElement(h,{key:t},r.a.createElement(d,{size:"sm-2"},r.a.createElement("img",{src:e.picture.medium,alt:"employee-picture"})),r.a.createElement(d,{size:"sm-2"},e.name.last,", ",e.name.first),r.a.createElement(d,{size:"sm-2"},e.phone),r.a.createElement(d,{size:"sm-3"},e.email),r.a.createElement(d,{size:"sm-2"},g()(e.dob.date.split("T")[0],"YYY-MM-DD").format("l")))}))))}}]),a}(n.Component);a(45);var N=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on carrots to filter by heading or use the search box to narrow your results."))};a(46);var w=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};var O=function(){return r.a.createElement("div",null,r.a.createElement(w,null,r.a.createElement(N,null),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5de01d4a.chunk.js.map