(this["webpackJsonpcontenedor-f"]=this["webpackJsonpcontenedor-f"]||[]).push([[0],{117:function(t,e,n){},154:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(0),s=n.n(c),r=n(10),i=n.n(r),o=(n(117),n(17)),l=n.n(o),j=n(45),d=n(29),u=n(41),b=n(42),h=n(44),p=n(43),x=n(49),m=n(52),O=n(4),f=n(79),g=n(195),y=n(71),v=n.n(y),w=n(182),k=n(183),I=n(62),S=n(80),C=n(91),N=n.n(C),L=n(177),B=n(194),D=n(180),P=n(181),z=n(90),T=n.n(z),A=n(37),F={textDecoration:"none",color:"gray"};function M(t){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("div",{style:{background:"rgba(19,122,127,.1)",width:"100%",height:150},children:Object(a.jsx)("img",{style:{width:100,textAlign:"left",float:"left"},src:"https://i.pinimg.com/originals/85/b0/db/85b0db4f7ad7dce7ff28e14f7db75e17.png"})}),Object(a.jsx)(L.a,{}),Object(a.jsx)(A.b,{style:F,to:"/playlist",children:Object(a.jsxs)(B.a,{button:!0,children:[Object(a.jsx)(D.a,{children:Object(a.jsx)(T.a,{})}),Object(a.jsx)(P.a,{primary:"Playlist"})]})})]})}var R=n(9),W=Object(f.a)({list:{width:250},fullList:{width:"auto"},root:{flexGrow:1},menuButton:{marginRight:20},title:{flexGrow:1}});function G(t){var e,n=t.title,c=W(),r=Object(R.f)(),i=s.a.useState({top:!1,left:!1,bottom:!1,right:!1}),o=Object(m.a)(i,2),l=o[0],d=o[1],u=function(t,e){return function(n){d(Object(j.a)(Object(j.a)({},l),{},Object(x.a)({},t,e)))}};return Object(a.jsxs)(w.a,{style:{background:"#137a7f"},position:"static",children:[Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{onClick:u("left",!0),edge:"start",className:c.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(N.a,{})}),t.back&&Object(a.jsx)(S.a,{onClick:function(){return r.push({pathname:"/playlist",carouselId:t.back})},edge:"start",className:c.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(v.a,{})})||0==t.back&&Object(a.jsx)(S.a,{onClick:function(){return r.push({pathname:"/playlist",carouselId:t.back})},edge:"start",className:c.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(v.a,{})}),Object(a.jsx)(I.a,{variant:"h6",className:c.title,children:n})]}),Object(a.jsx)(g.a,{anchor:"left",open:l.left,onClose:u("left",!1),children:(e="left",Object(a.jsx)("div",{className:Object(O.a)(c.list,Object(x.a)({},c.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:u(e,!1),onKeyDown:u(e,!1),children:Object(a.jsx)(M,{})}))})]})}var J=n(184),E=n(192),K=Object(f.a)((function(t){return{accountSettings:{},box:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}}));function V(){var t=K();return Object(a.jsxs)("div",{className:t.box,children:[Object(a.jsx)(E.a,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",children:Object(a.jsx)(J.a,{style:{color:"#373b3e"}})}),Object(a.jsx)(E.a,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",children:Object(a.jsx)("p",{style:{color:"#373b3e",fontSize:14},children:"Loading..."})})]})}var _=n(187),q=n(185),H=n(188),Q=n(186),U=n(67),X=n.n(U),Y=n(68),Z=n.n(Y),$=n(93),tt=n.n($),et=n(193),nt=n(92),at=n.n(nt);function ct(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var st=Object(f.a)((function(t){return{root:{display:"flex",margin:10},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"auto"},controls:{display:"flex",alignItems:"center",paddingLeft:t.spacing(1),paddingBottom:t.spacing(1)},playIcon:{height:38,width:38},paper:{position:"absolute",boxShadow:t.shadows[5],padding:t.spacing(2,4,3)}}}));function rt(t){var e=t.data,n=e.id,c=e.name,r=e.url,i=e.picture,o=e.publishDate,l=e.duration,j=t.data.author.artists,d=st(),u=Object(R.f)(),b=s.a.useState(ct),h=Object(m.a)(b,1)[0],p=s.a.useState(!1),x=Object(m.a)(p,2),O=x[0],f=x[1],g=Object(a.jsx)("div",{style:h,className:d.paper,children:Object(a.jsx)(q.a,{className:d.content,children:Object(a.jsx)(at.a,{url:r})})});return Object(a.jsxs)("div",{children:[Object(a.jsx)(w.a,{style:{background:"transparent",boxShadow:"0 0 0 0 rgba(0,0,0,0)"},position:"static",children:Object(a.jsxs)(k.a,{style:{display:"flex",justifyContent:"center",padding:5},children:[Object(a.jsxs)(Q.a,{onClick:function(){return u.push({pathname:"/comments/".concat(n),id:n,carouselId:t.carouselId})},style:{margin:5,background:"#6ec4c0",color:"white"},children:[Object(a.jsx)(X.a,{style:{marginRight:10}}),"Comments"]}),Object(a.jsxs)(Q.a,{onClick:function(){f(!0)},style:{margin:5,background:"#6ec4c0",color:"white"},children:[Object(a.jsx)(tt.a,{style:{marginRight:10}}),"Video"]}),Object(a.jsxs)(Q.a,{onClick:function(){return u.push({pathname:"/lyrics/".concat(n),id:n,carouselId:t.carouselId})},style:{margin:5,background:"#6ec4c0",color:"white"},children:[Object(a.jsx)(Z.a,{style:{marginRight:10}}),"Lyrics"]})]})}),Object(a.jsxs)(_.a,{className:d.root,children:[Object(a.jsx)("div",{className:d.details,children:Object(a.jsxs)(q.a,{className:d.content,children:[Object(a.jsx)(I.a,{component:"h5",variant:"h5",children:c}),Object(a.jsx)(I.a,{variant:"subtitle1",color:"textSecondary",children:j}),Object(a.jsx)(I.a,{style:{fontSize:12},variant:"subtitle1",color:"textSecondary",children:o.substring(0,10)}),Object(a.jsx)(I.a,{style:{fontSize:12},variant:"subtitle1",color:"textSecondary",children:(l/60).toString().substring(0,1)+" minutes"})]})}),Object(a.jsx)(H.a,{component:"img",className:d.cover,src:i}),Object(a.jsx)(et.a,{open:O,onClose:function(){f(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:g})]})]})}var it=n(94),ot=n.n(it);function lt(t){var e=t.playlist,n=t.carouselId;return Object(a.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:Object(a.jsx)(ot.a,{index:n,autoPlay:!1,animation:"slide",children:e.map((function(t,e){return Object(a.jsx)(rt,{data:t,carouselId:e},e)}))})})}var jt=n(189),dt=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).getPlaylist=Object(d.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:1337/songs",{headers:{Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:(n=t.sent)?a.setState(Object(j.a)(Object(j.a)({},a.state),{},{playlist:n,loading:!1})):alert("There are no songs...");case 7:case"end":return t.stop()}}),t)}))),a.state={playlist:[],loading:!0,carouselId:t.location.carouselId||0},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getPlaylist();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(G,{title:"Playlist"}),Object(a.jsxs)(jt.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[this.state.loading&&Object(a.jsx)(V,{}),Object(a.jsx)(lt,{carouselId:this.state.carouselId,playlist:this.state.playlist})]})]})}}]),n}(s.a.Component),ut=n(190),bt=Object(f.a)({root:{maxWidth:350,margin:20}});function ht(t){var e=t.data,n=e.created,c=e.message,s=t.data.author,r=s.name,i=s.picture,o=bt();return Object(a.jsx)(_.a,{className:o.root,children:Object(a.jsxs)(ut.a,{children:[Object(a.jsx)(H.a,{height:"140",component:"img",src:i}),Object(a.jsxs)(q.a,{children:[Object(a.jsx)(I.a,{style:{fontSize:16,fontWeight:"bold"},gutterBottom:!0,variant:"h5",component:"h2",children:r}),Object(a.jsx)(I.a,{style:{fontSize:14},gutterBottom:!0,variant:"h5",component:"h2",children:n.substring(0,10)}),Object(a.jsxs)(I.a,{variant:"body2",color:"textSecondary",component:"p",children:[c.substring(0,120),"..."]})]})]})})}var pt=n(191),xt=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).getComments=Object(d.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:1337/songs/".concat(a.state.id,"/comments"),{headers:{Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:(n=t.sent)?a.setState({comments:n.comments,loading:!1}):alert("There are no comments...");case 7:case"end":return t.stop()}}),t)}))),a.state={comments:[],loading:!0,id:a.props.location.id,carouselId:a.props.location.carouselId},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(this.state.id),t.next=3,this.getComments();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(G,{title:"Comments",back:this.state.carouselId}),Object(a.jsx)(pt.a,{maxWidth:"md",children:Object(a.jsxs)(jt.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[this.state.loading&&Object(a.jsx)(V,{}),this.state.comments.map((function(t,e){return Object(a.jsx)(jt.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsx)(ht,{data:t})})}))]})})]})}}]),n}(s.a.Component),mt=Object(f.a)((function(t){return{root:{display:"flex",margin:10},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"auto"},controls:{display:"flex",alignItems:"center",paddingLeft:t.spacing(1),paddingBottom:t.spacing(1)},playIcon:{height:38,width:38}}}));function Ot(t){var e=t.data.credits.url,n=t.data.value,c=mt();return Object(a.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:Object(a.jsx)(_.a,{className:c.root,children:Object(a.jsx)("div",{className:c.details,children:Object(a.jsxs)(q.a,{className:c.content,children:[Object(a.jsx)(I.a,{variant:"subtitle1",color:"textSecondary",children:n}),Object(a.jsx)(I.a,{style:{marginTop:5,fontSize:12,textAlign:"right"},component:"h5",variant:"h5",children:Object(a.jsx)("a",{href:e,target:"_blank",children:e})})]})})})})}var ft=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).getLyrics=Object(d.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:1337/songs/lyrics/".concat(a.state.id),{headers:{Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:(n=t.sent)?a.setState({lyrics:n.lyrics,loading:!1}):alert("There are no lyrics...");case 7:case"end":return t.stop()}}),t)}))),a.state={lyrics:null,loading:!0,id:a.props.location.id,carouselId:a.props.location.carouselId},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getLyrics();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(G,{back:this.state.carouselId,title:"Lyrics"}),Object(a.jsxs)(jt.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[this.state.loading&&Object(a.jsx)(V,{}),this.state.lyrics&&Object(a.jsx)(jt.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsx)(Ot,{data:this.state.lyrics})})]})]})}}]),n}(s.a.Component);function gt(){return Object(a.jsx)(A.a,{children:Object(a.jsxs)(R.c,{children:[Object(a.jsx)(R.a,{exact:!0,path:"/",component:Object(R.g)(dt)}),Object(a.jsx)(R.a,{path:"/playlist",component:Object(R.g)(dt)}),Object(a.jsx)(R.a,{path:"/comments/:id",component:Object(R.g)(xt)}),Object(a.jsx)(R.a,{path:"/lyrics/:id",component:Object(R.g)(ft)})]})})}var yt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(gt,{})}),document.getElementById("root")),yt()}},[[154,1,2]]]);
//# sourceMappingURL=main.0f69be83.chunk.js.map