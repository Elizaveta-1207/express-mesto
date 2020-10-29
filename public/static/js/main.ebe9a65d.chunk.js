(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),c=(n(5),n(10)),l=n(1),u=n(7),s=n.n(u);var m=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:s.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"logo"}))};var p=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020. \u0422\u0438\u043c\u043e\u043d\u0438\u043d\u0430 \u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430"))},d=o.a.createContext();var _=function(e){var t=e._id,n=e.link,a=e.name,i=e.likes,r=e.owner,c=e.onCardClick,l=e.onCardLike,u=e.onCardDelete,s=o.a.useContext(d),m={_id:t,link:n,name:a,owner:r,likes:i},p=m.owner._id===s._id,_=m.likes.some((function(e){return e._id===s._id})),h="element__delete ".concat(p?"":"element__delete_hidden"),f="element__like ".concat(_?"element__like_active":"");return o.a.createElement("li",{className:"element"},o.a.createElement("button",{"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"button",className:h,onClick:function(){u(m)}}),o.a.createElement("img",{src:n,alt:a,className:"element__img",onClick:function(){c({link:n,name:a})}}),o.a.createElement("div",{className:"element__description"},o.a.createElement("h2",{className:"element__title"},a),o.a.createElement("div",{className:"element__likes"},o.a.createElement("button",{"aria-label":"\u041b\u0430\u0439\u043a",type:"button",className:f,onClick:function(){l(m)}}),o.a.createElement("p",{className:"element__like-amount"},i.length))))};var h=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,i=e.onCardClick,r=e.cards,c=e.onCardLike,l=e.onCardDelete,u=o.a.useContext(d);return o.a.createElement("main",{className:"main"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar",onClick:a,style:{backgroundImage:"url(".concat(u.avatar,")")}}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},u.name),o.a.createElement("button",{"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",type:"button",className:"profile__edit-button",onClick:t}),o.a.createElement("p",{className:"profile__description"},u.about)),o.a.createElement("button",{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442",type:"button",className:"profile__add-button",onClick:n})),o.a.createElement("section",{className:"elements"},o.a.createElement("ul",{className:"elements__list"},r.map((function(e){return o.a.createElement(_,{key:e._id,_id:e._id,owner:e.owner,link:e.link,name:e.name,likes:e.likes,onCardClick:i,onCardLike:c,onCardDelete:l})})))))};var f=function(e){var t=e.name,n=e.title,a=e.buttonTitle,i=e.children,r=e.isOpen,c=e.onClose,l=e.onSubmit;return o.a.createElement("div",{className:"popup popup-".concat(t," ").concat(r&&"popup_opened")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",className:"popup__close-button",onClick:c}),o.a.createElement("h2",{className:"popup__title"},n),o.a.createElement("form",{action:"#",name:"popup-form",className:"popup__form popup-".concat(t,"__form"),onSubmit:l,noValidate:!0},i,o.a.createElement("button",{type:"submit",className:"popup__button"},a))))};var k=function(e){var t=e.link,n=e.title,a=e.isOpen,i=e.onClose;return o.a.createElement("div",{className:"popup popup-img ".concat(a&&"popup_opened"),id:"popup-image"},o.a.createElement("div",{className:"popup__img-container"},o.a.createElement("button",{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"button",className:"popup__close-button",onClick:i}),o.a.createElement("img",{src:t,alt:n,className:"popup__full-img"}),o.a.createElement("h2",{className:"popup__title-img"},n)))},v=n(8),E=n(9),b=new(function(){function e(t){Object(v.a)(this,e),this._token=t.baseUrl,this._authorization=t.headers.authorization,this._contentType=t.headers["Content-type"]}return Object(E.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._token,"/cards"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._token,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._token,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._token,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._token,"/users/me"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"editProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._token,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"editAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._token,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({avatar:"".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"36046fe7-1e8e-4a22-8e60-7f2eb2d5b2d8","Content-type":"application/json"}});var C=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,i=o.a.useState(""),r=Object(l.a)(i,2),c=r[0],u=r[1],s=o.a.useState(""),m=Object(l.a)(s,2),p=m[0],_=m[1],h=o.a.useContext(d);return o.a.useEffect((function(){u(h.name),_(h.about)}),[h]),o.a.createElement(f,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:c,about:p})}},o.a.createElement("input",{required:!0,name:"name",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",maxLength:"40",minLength:"2",className:"popup__input popup__input_name",id:"name-input",value:c||"",onChange:function(e){u(e.target.value)}}),o.a.createElement("span",{id:"name-input-error"}),o.a.createElement("input",{required:!0,name:"description",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",maxLength:"200",minLength:"2",className:"popup__input popup__input_description",id:"description-input",value:p||"",onChange:function(e){_(e.target.value)}}),o.a.createElement("span",{id:"description-input-error"}))};var g=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,i=o.a.useRef();return o.a.createElement(f,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:i.current.value})}},o.a.createElement("input",{required:!0,name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_link",id:"link-input",ref:i}),o.a.createElement("span",{id:"link-input-error"}))};var N=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,i=o.a.useState(""),r=Object(l.a)(i,2),c=r[0],u=r[1],s=o.a.useState(""),m=Object(l.a)(s,2),p=m[0],d=m[1];return o.a.createElement(f,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:c,link:p})}},o.a.createElement("input",{required:!0,name:"name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",maxLength:"30",minLength:"1",className:"popup__input popup__input_title",id:"title-input",value:c||"",onChange:function(e){u(e.target.value)}}),o.a.createElement("span",{id:"title-input-error"}),o.a.createElement("input",{required:!0,name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_link",id:"link-input",value:p||"",onChange:function(e){d(e.target.value)}}),o.a.createElement("span",{id:"link-input-error"}))};var y=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=o.a.useState(!1),r=Object(l.a)(i,2),u=r[0],s=r[1],_=o.a.useState(!1),v=Object(l.a)(_,2),E=v[0],y=v[1],O=o.a.useState({isOpen:!1}),j=Object(l.a)(O,2),T=j[0],S=j[1],P=o.a.useState({}),w=Object(l.a)(P,2),z=w[0],L=w[1],x=o.a.useState([]),A=Object(l.a)(x,2),U=A[0],D=A[1];function I(){a(!1),s(!1),y(!1),S({isOpen:!1})}return o.a.useEffect((function(){var e=[b.getUserInfo(),b.getInitialCards()];Promise.all(e).then((function(e){L(e[0]),function(e){D(e.map((function(e){return{_id:e._id,link:e.link,name:e.name,owner:e.owner,likes:e.likes}})))}(e[1])})).catch((function(e){return console.log("Error ".concat(e))}))}),[]),o.a.createElement(d.Provider,{value:z},o.a.createElement("div",{className:"page"},o.a.createElement(m,null),o.a.createElement(h,{onEditProfile:function(){a(!0)},onAddPlace:function(){s(!0)},onEditAvatar:function(){y(!0)},onCardClick:function(e){S({isOpen:!0,link:e.link,title:e.name})},cards:U,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===z._id}));b.changeLikeCardStatus(e._id,!t).then((function(t){var n=U.map((function(n){return n._id===e._id?t:n}));D(n)})).catch((function(e){return console.log("Error ".concat(e))}))},onCardDelete:function(e){b.deleteCard(e._id).then((function(){var t=U.filter((function(t){return t._id!==e._id}));D(t)})).catch((function(e){return console.log("Error ".concat(e))}))}}),o.a.createElement(p,null),o.a.createElement(C,{isOpen:n,onClose:I,onUpdateUser:function(e){var t=e.name,n=e.about;b.editProfile({name:t,about:n}).then((function(e){L(e),I()})).catch((function(e){return console.log("Error ".concat(e))}))}}),o.a.createElement(N,{isOpen:u,onClose:I,onAddPlace:function(e){var t=e.name,n=e.link;b.addNewCard({name:t,link:n}).then((function(e){D([].concat(Object(c.a)(U),[e])),I()})).catch((function(e){return console.log("Error ".concat(e))}))}}),o.a.createElement(g,{isOpen:E,onClose:I,onUpdateAvatar:function(e){var t=e.avatar;b.editAvatar({avatar:t}).then((function(e){L(e),I()})).catch((function(e){return console.log("Error ".concat(e))}))}}),o.a.createElement(f,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitle:"\u0414\u0430",onClose:I}),o.a.createElement(k,{link:T.link,title:T.title,isOpen:T.isOpen,onClose:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){},7:function(e,t,n){e.exports=n.p+"static/media/header-logo.855a8c98.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.ebe9a65d.chunk.js.map