(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var s=n(3),l=n(4),i=n(6),u=n(5),h=(n(14),function(e){var t=e.id,n=e.name,a=e.username,o=e.email;return r.a.createElement("div",{className:"tc bg-light-blue br3 pa3 ma2 dib grow b--black-30 shadow5 br bb cardColor"},r.a.createElement("img",{src:"https://robohash.org/set_set3/bgset_bg1/".concat(t,"?size=200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null," ",a," "),r.a.createElement("h4",null," ",n,"  "),r.a.createElement("p",null," ",o," ")))}),m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email})})))},d=(n(15),function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 searchTerm transparent",type:"search",placeholder:"Search Robots",onChange:t}))}),f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"457px"}},e.children)},b=(n(16),n(17),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.username.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:a}))):r.a.createElement("h1",{className:"tc"},"Loading...")}}]),n}(r.a.Component));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.56478fe7.chunk.js.map