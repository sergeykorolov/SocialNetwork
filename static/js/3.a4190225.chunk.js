(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{293:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__ti6nt"}},294:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3iggj",posts:"MyPosts_posts__1rnu_"}},295:function(e,t,a){e.exports={item:"Post_item__3twkH"}},296:function(e,t,a){"use strict";a.r(t);var n=a(34),s=a(35),l=a(37),o=a(36),r=a(38),u=a(0),c=a.n(u),i=a(293),p=a.n(i),m=a(48),d=a(104),f=a.n(d),b=a(127),E=function(e){var t=Object(u.useState)(!1),a=Object(b.a)(t,2),n=a[0],s=a[1],l=Object(u.useState)(e.status),o=Object(b.a)(l,2),r=o[0],i=o[1];Object(u.useEffect)((function(){i(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){s(!0)}},r||"---------")),n&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(r)},onChange:function(e){i(e.currentTarget.value)},value:r})))},h=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{src:"https://www.appiapolis.it/wp-content/uploads/2020/01/DSCF2192-1024x319.jpg"})),c.a.createElement("div",{className:p.a.descriptionBlock},c.a.createElement("img",{src:null!=t.photos.large?t.photos.large:f.a}),c.a.createElement(E,{status:a,updateStatus:n}),c.a.createElement("div",null,c.a.createElement("b",null,"\u041e\u0431\u043e \u043c\u043d\u0435:")," ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:")," ",t.contacts.facebook," ",t.contacts.vk," ",t.contacts.github),c.a.createElement("div",null,c.a.createElement("b",null,"\u0418\u043c\u044f:")," ",t.fullName))):c.a.createElement(m.a,null)},v=a(93),g=a(294),k=a.n(g),P=a(295),j=a.n(P),w=function(e){return c.a.createElement("div",{className:j.a.item},c.a.createElement("img",{src:"https://ubistatic19-a.akamaihd.net/ubicomstatic/en-gb/global/buy-now/512_mobile_292979.png"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like ",e.like)))},O=a(87),S=a(126),_=a(84),y=a(31),x=Object(_.a)(10),B=Object(S.a)({form:"profileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(O.a,{placeholder:"new post",name:"newPostText",component:y.b,validate:[_.b,x]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),N=function(e){var t=e.posts.map((function(e){return c.a.createElement(w,{message:e.message,like:e.likesCount,key:e.id})}));return c.a.createElement("div",{className:k.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(B,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:k.a.posts},t))},C=a(10),I=Object(C.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,avatars:e.profilePage.avatars}}),{addPost:v.a})(N),M=function(e){return c.a.createElement("div",null,c.a.createElement(h,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(I,null))},T=a(27),A=a(7),U=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement(M,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(c.a.Component);t.default=Object(A.d)(Object(C.b)((function(e){return{profile:e.profilePage.userProfile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:v.d,getStatus:v.c,updateStatus:v.e}),T.f)(U)}}]);
//# sourceMappingURL=3.a4190225.chunk.js.map