(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{143:function(e,t,a){"use strict";var n=a(13),o=a.n(n),s=a(15),r=a.n(s),l=a(0),i=a.n(l),c=a(3),u=a.n(c),m=a(32),f=function(e){function t(t){var a;if(a=e.call(this,t)||this,!t._reduxForm)throw new Error("Form must be inside a component decorated with reduxForm()");return a}r()(t,e);var a=t.prototype;return a.UNSAFE_componentWillMount=function(){this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},a.render=function(){var e=this.props,t=(e._reduxForm,o()(e,["_reduxForm"]));return i.a.createElement("form",t)},t}(l.Component);f.propTypes={onSubmit:u.a.func.isRequired,_reduxForm:u.a.object},t.a=Object(m.b)(f)},296:function(e,t,a){e.exports={profileInfoBlock:"ProfileInfo_profileInfoBlock__15Ggj",descriptionBlock:"ProfileInfo_descriptionBlock__ti6nt",mainPhotoBlock:"ProfileInfo_mainPhotoBlock__362yy",mainPhoto:"ProfileInfo_mainPhoto__imJtH",editPhotoIcon:"ProfileInfo_editPhotoIcon__3WqSU",itemLabel:"ProfileInfo_itemLabel__15biK",contact:"ProfileInfo_contact__17jX-",contactForm:"ProfileInfo_contactForm__1KPf0",fullName:"ProfileInfo_fullName__2dKgm",status:"ProfileInfo_status__ifvIX",statusBody:"ProfileInfo_statusBody__uQrPv",alwaysHide:"ProfileInfo_alwaysHide__3J3SP",editPhoto:"ProfileInfo_editPhoto__O6tR6",input:"ProfileInfo_input__2Re8J",textarea:"ProfileInfo_textarea__rtzK1",checkbox:"ProfileInfo_checkbox__1QGsB"}},297:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3iggj",posts:"MyPosts_posts__1rnu_",newPost:"MyPosts_newPost__b_hKx",add:"MyPosts_add__478Bz",cancel:"MyPosts_cancel__1qpbp"}},298:function(e,t,a){e.exports={item:"Post_item__3twkH",photo:"Post_photo__1gRZc",message:"Post_message__AiF5J",like:"Post_like__2FQv3",likeStatus:"Post_likeStatus__1_lSS",likesCount:"Post_likesCount__a8V5H"}},299:function(e,t,a){e.exports=a.p+"static/media/likeActive.33b9e07d.svg"},300:function(e,t,a){e.exports=a.p+"static/media/likeNotActive.9fb8cb90.svg"},301:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(34),o=a(35),s=a(37),r=a(36),l=a(38),i=a(0),c=a.n(i),u=a(96),m=a(296),f=a.n(m),p=a(97),d=a.n(p),_=function(e){var t=Object(i.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],s=Object(i.useState)(e.status),r=Object(u.a)(s,2),l=r[0],m=r[1];Object(i.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",{className:f.a.status},c.a.createElement("span",{className:f.a.statusBody,onClick:function(){o(!0)}},l||"---------")),n&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(l)},onChange:function(e){m(e.currentTarget.value)},value:l})))},h=a(143),b=a(130),E=a(23),v=a(51),P=a.n(v),k=Object(b.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement(h.a,{onSubmit:t},n&&c.a.createElement("div",{className:P.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("strong",{className:f.a.itemLabel},"Full name:"),c.a.createElement("div",{className:f.a.input},Object(E.c)("Full name","fullName",[],E.a))),c.a.createElement("div",null,c.a.createElement("strong",{className:f.a.itemLabel},"Looking for a job:"),c.a.createElement("div",{className:f.a.checkbox},Object(E.c)("","lookingForAJob",[],E.a,{type:"checkbox"}))),c.a.createElement("div",null,c.a.createElement("strong",{className:f.a.itemLabel},"My professional skills:"),c.a.createElement("div",{className:f.a.textarea},Object(E.c)("My professional skills","lookingForAJobDescription",[],E.b))),c.a.createElement("div",null,c.a.createElement("strong",{className:f.a.itemLabel},"About me:"),c.a.createElement("div",{className:f.a.textarea},Object(E.c)("About me","aboutMe",[],E.b))),c.a.createElement("div",null,c.a.createElement("strong",null,"Contacts:")," ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e},c.a.createElement("strong",{className:f.a.contactForm},e,":"),c.a.createElement("div",{className:f.a.input},Object(E.c)(e,"contacts."+e,[],E.a)))}))),c.a.createElement("div",null,c.a.createElement("button",null,"save")))})),g=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode,o=e.status,s=e.updateStatus;return c.a.createElement("div",null,c.a.createElement("div",{className:f.a.fullName},c.a.createElement("h3",null,t.fullName)),c.a.createElement(_,{status:o,updateStatus:s}),c.a.createElement("div",null,c.a.createElement("strong",{className:f.a.itemLabel},"Looking for a job:"),t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("strong",{className:f.a.itemLabel},"My professional skills:"),t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("strong",{className:f.a.itemLabel},"About me:"),t.aboutMe),c.a.createElement("div",null,c.a.createElement("strong",null,"Contacts:"),Object.keys(t.contacts).map((function(e){return c.a.createElement(N,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))),a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"edit")))},N=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",null,c.a.createElement("strong",{className:f.a.contact},t,":")," ",a)},O=function(e){var t=e.isOwner,a=e.profile,n=e.status,o=e.updateStatus,s=e.savePhoto,r=e.saveProfile,l=Object(i.useState)(!1),m=Object(u.a)(l,2),p=m[0],_=m[1],h=Object(i.useState)(null),b=Object(u.a)(h,2),E=b[0],v=b[1];return c.a.createElement("div",{className:f.a.profileInfoBlock},c.a.createElement("div",{className:f.a.mainPhotoBlock},c.a.createElement("img",{src:a.photos.large||d.a,className:f.a.mainPhoto}),t&&c.a.createElement("div",null,c.a.createElement("div",{className:f.a.editPhotoIcon,onClick:function(){return E.click()}}),c.a.createElement("input",{className:f.a.alwaysHide,ref:function(e){return v(e)},type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0]).then((function(){v(null)}))}}))),c.a.createElement("div",{className:f.a.descriptionBlock},p?c.a.createElement(k,{initialValues:a,profile:a,onSubmit:function(e){r(e).then((function(){_(!1)}))}}):c.a.createElement(g,{profile:a,status:n,updateStatus:o,isOwner:t,goToEditMode:function(){_(!0)}})))},S=a(98),j=a(297),y=a.n(j),I=a(298),w=a.n(I),F=a(299),x=a.n(F),C=a(300),B=a.n(C),A=function(e){return c.a.createElement("div",{className:w.a.item},c.a.createElement("div",{className:w.a.photo},c.a.createElement("img",{src:e.userPhoto||d.a})),c.a.createElement("div",{className:w.a.message},e.message,c.a.createElement("div",{className:w.a.like,onClick:function(){e.changeLikesCount(e.postId,e.likesCount,!e.likeStatus)}},c.a.createElement("div",{className:w.a.likeStatus},e.likeStatus?c.a.createElement("img",{src:x.a}):c.a.createElement("img",{src:B.a})),c.a.createElement("div",{className:w.a.likesCount},e.likesCount))))},L=a(91),M=a(68),J=Object(M.a)(50),T=Object(b.a)({form:"profileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(L.a,{autoFocus:!0,placeholder:"new post",name:"newPostText",component:E.b,validate:J})),c.a.createElement("div",{className:y.a.add},c.a.createElement("button",null,"Add")))})),U=function(e){var t=Object(i.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],s=e.posts.map((function(t){return c.a.createElement(A,{postId:t.id,message:t.message,likesCount:t.likesCount,likeStatus:t.likeStatus,userPhoto:e.userPhoto,changeLikesCount:e.changeLikesCount,key:t.id})}));return c.a.createElement("div",{className:y.a.postsBlock},c.a.createElement("h3",null,"My posts"),n?c.a.createElement("div",{className:y.a.newPost},c.a.createElement(T,{setNewPostField:o,onSubmit:function(t){e.addPost(t.newPostText),o(!1)}}),c.a.createElement("button",{className:y.a.cancel,onClick:function(){return o(!1)}},"Cancel")):c.a.createElement("button",{onClick:function(){return o(!0)}},"Add new post"),c.a.createElement("div",{className:y.a.posts},s))},H=a(10),K=Object(H.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,avatars:e.profilePage.avatars,userPhoto:e.profilePage.userProfile.photos.small}}),{addPost:S.a,changeLikesCount:S.b})(U),z=a(50),D=a(301),R=a.n(D),V=function(e){return c.a.createElement(c.a.Fragment,null,e.profile?c.a.createElement("div",{className:R.a.profileBlock},c.a.createElement(O,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),c.a.createElement(K,null)):c.a.createElement(z.a,null))},q=a(28),Q=a(8),G=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(V,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(c.a.Component);t.default=Object(Q.d)(Object(H.b)((function(e){return{profile:e.profilePage.userProfile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:S.e,getStatus:S.d,updateStatus:S.h,savePhoto:S.f,saveProfile:S.g}),q.f)(G)}}]);
//# sourceMappingURL=3.d2263dcf.chunk.js.map