(this.webpackJsonpshelter=this.webpackJsonpshelter||[]).push([[0],{27:function(e,a,t){},28:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(20),s=t.n(c),r=(t(37),t(26),t(27),t(2)),i=t(3),o=t(6),l=t(5),d=(t(28),t.p+"static/media/whiskey.d49e7e0c.jpg"),b=t.p+"static/media/hazel.dd56fd82.jpg",j=t.p+"static/media/tubby.df757b62.jpg",u=t(12),h=t(1),m=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(u.c,{className:"navbar-brand",exact:!0,to:"/",children:"DogShelter"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(h.jsx)("div",{className:"navbar-nav",children:this.props.dogs.map((function(e){return Object(h.jsx)(u.c,{className:"nav-link",exact:!0,to:"/".concat(e.name),children:e.name},e.name)}))})})]})})}}]),t}(n.Component),p=t(4),g=(t(35),function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.dog,a=e.name,t=e.age,n=e.src,c=e.facts;return Object(h.jsx)("div",{className:"Dog container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("img",{className:"img-thumbnail",src:n,alt:a,width:"100%",height:"auto"})}),Object(h.jsxs)("div",{className:"align-left card-body",children:[Object(h.jsx)("h1",{className:"card-title",children:a}),Object(h.jsxs)("h4",{className:"card-subtitle tex-muted",children:[t," years old"]})]}),Object(h.jsx)("ul",{className:"list-group list-group-flush",children:c.map((function(e,a){return Object(h.jsx)("li",{className:"list-group-item",children:e},a)}))}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)(u.b,{to:"/",className:"btn btn-lg btn-info",children:"BACK"})})]})})})}}]),t}(n.Component)),O=(t(36),function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container DogList",children:Object(h.jsx)("div",{className:"row",children:this.props.dogs.map((function(e){return Object(h.jsxs)(u.b,{className:"col-md-6 col-lg-4",exact:!0,to:"/".concat(e.name.toLowerCase()),children:[Object(h.jsx)("img",{className:"rounded-circle img-thumbnail",src:e.src,alt:e.name}),Object(h.jsx)("h2",{children:e.name})]},e.name)}))})})}}]),t}(n.Component)),v=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{dogs:this.props.dogs}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(h.jsx)(O,{dogs:e.props.dogs})}}),this.props.dogs.map((function(e){return Object(h.jsx)(p.a,{exact:!0,path:"/".concat(e.name.toLowerCase()),render:function(){return Object(h.jsx)(g,{dog:e})}},e.name)}))]})]})}}]),t}(n.Component);v.defaultProps={dogs:[{name:"Whiskey",age:5,src:d,facts:["Whiskey loves eating popcorn.","Whiskey is a terrible guard dog.","Whiskey wants to cuddle with you!"]},{name:"Hazel",age:3,src:b,facts:["Hazel has soooo much energy!","Hazel is highly intelligent.","Hazel loves people more than dogs."]},{name:"Tubby",age:4,src:j,facts:["Tubby is not the brightest dog","Tubby does not like walks or exercise.","Tubby loves eating food."]}]};var x=v,f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),s(e),r(e)}))};s.a.render(Object(h.jsx)(u.a,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),f()}},[[38,1,2]]]);
//# sourceMappingURL=main.7751f96b.chunk.js.map