(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{22:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);t(22);var r,c,a,o,i=t(0),b=t.n(i),d=t(13),u=t.n(d),l=t(6),s=t(18),j=t(16),p=t(12),m=t(7),O=t(39),f=Object(m.b)("contact/addContact",(function(e){var n=e.name,t=e.number;return{payload:{id:Object(O.a)(),name:n,number:t}}})),x=Object(m.b)("contact/removeContact"),h=Object(m.b)("contact/filteredContacts"),g=function(e){return e.contacts.items},v=function(e){return e.contacts.filter},y=function(e){var n=function(e){return e.contacts.filter}(e),t=function(e){return e.contacts.items}(e);return""===n?t:t!==[]?t.filter((function(e){return e.name.toLowerCase().includes(n)})):void 0},k=t(3),C=t(4),w=C.a.form(r||(r=Object(k.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 70px;\n  padding: 10px 200px 10px 10px;\n  border: 2px solid black;\n"]))),z=C.a.label(c||(c=Object(k.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]))),A=C.a.input(a||(a=Object(k.a)(["\n  padding: 3px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  &:hover {\n    border-color: blue;\n  }\n"]))),F=C.a.button(o||(o=Object(k.a)(["\n  width: fit-content;\n  padding: 4px;\n  margin-top: 8px;\n  font-size: 14px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  background-color: #fff;\n  &:hover {\n    cursor: pointer;\n    background-color: blue;\n    border-color: blue;\n  }\n"]))),S=t(1);var L,J,Z,q,B,D,E,M,N=function(){var e=Object(i.useState)(""),n=Object(j.a)(e,2),t=n[0],r=n[1],c=Object(i.useState)(""),a=Object(j.a)(c,2),o=a[0],b=a[1],d=Object(l.c)(g),u=Object(l.b)(),s=function(e){switch(e.target.name){case"name":r(e.target.value);break;case"number":b(e.target.value);break;default:return}},m=function(){var e={name:t,number:o};d.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?function(e){Object(p.b)("".concat(e," is already in contacts"))}(e.name):u(f(e))};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(w,{action:"",onSubmit:function(e){e.preventDefault(),m(),r(""),b("")},children:[Object(S.jsx)(z,{htmlFor:"name",children:"Name"}),Object(S.jsx)(A,{onChange:s,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(S.jsx)(z,{htmlFor:"number",children:"Number"}),Object(S.jsx)(A,{onChange:s,type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(S.jsx)(F,{type:"submit",children:"Add contact"})]}),Object(S.jsx)(p.a,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#f8cd98",color:"#000"}}})]})},H=C.a.ul(L||(L=Object(k.a)(["\n  margin-left: 70px;\n"]))),I=C.a.li(J||(J=Object(k.a)(["\n  margin-top: 10px;\n  font-size: 16px;\n"]))),K=C.a.button(Z||(Z=Object(k.a)(["\n  padding: 3px 6px;\n  margin-left: 10px;\n  font-size: 12px;\n  background-color: #fff;\n  border: 1px solid grey;\n  border-radius: 5px;\n  &:hover {\n    cursor: pointer;\n    background-color: blue;\n    border-color: blue;\n  }\n"]))),P=function(){var e=Object(l.b)(),n=Object(l.c)(y);return Object(S.jsx)("div",{children:Object(S.jsx)(H,{children:n.map((function(n){var t=n.id,r=n.name,c=n.number;return Object(S.jsxs)(I,{children:[r," - ",c,Object(S.jsx)(K,{type:"button",onClick:function(){return e(x(t))},children:"Delete"})]},t)}))})})},R=C.a.div(q||(q=Object(k.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 70px;\n"]))),T=C.a.input(B||(B=Object(k.a)(["\n  padding: 3px;\n  margin-top: 5px;\n  &:hover {\n    border-color: blue;\n  }\n"]))),$=C.a.label(D||(D=Object(k.a)(["\n  font-weight: 500;\n"]))),G=function(){var e=Object(l.c)(v),n=Object(l.b)();return Object(S.jsxs)(R,{children:[Object(S.jsx)($,{htmlFor:"filter",children:"Find contacts by name"}),Object(S.jsx)(T,{type:"text",name:"filter",value:e,onChange:function(e){return n(h(e.target.value.toLowerCase()))}})]})},Q=C.a.h1(E||(E=Object(k.a)(["\n  margin-left: 70px;\n"]))),U=C.a.h2(M||(M=Object(k.a)(["\n  margin-left: 70px;\n"])));var V,W=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.a,{position:"top-center",toastOptions:{duration:3e3,style:{background:"red",color:"#000"}}}),Object(S.jsx)(Q,{children:"Phonebook"}),Object(S.jsx)(N,{}),Object(S.jsx)(U,{children:"Contacts"}),Object(S.jsx)(G,{}),Object(S.jsx)(P,{})]})},X=t(2),Y=t(8),_=t(19),ee=t.n(_),ne=t(9),te=t(20),re=Object(m.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(V={},Object(ne.a)(V,f,(function(e,n){var t=n.payload;return[].concat(Object(te.a)(e),[t])})),Object(ne.a)(V,x,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),V)),ce=Object(m.c)("",Object(ne.a)({},h,(function(e,n){return n.payload}))),ae=Object(X.b)({items:re,filter:ce}),oe={key:"contacts",storage:ee.a},ie=Object(X.b)({contacts:ae}),be=Object(Y.g)(oe,ie),de=Object(m.a)({reducer:be,devTools:!1,middleware:function(e){return e({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})}}),ue=Object(Y.h)(de);u.a.render(Object(S.jsx)(b.a.StrictMode,{children:Object(S.jsx)(l.a,{store:de,children:Object(S.jsx)(s.a,{loading:null,persistor:ue,children:Object(S.jsx)(W,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.853b41b0.chunk.js.map