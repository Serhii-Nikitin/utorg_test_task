(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,i,a){},function(e,i,a){},,,function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){"use strict";a.r(i);var s=a(0),o=a(1),t=a.n(o),c=a(7),r=a.n(c),n=(a(15),a(16),function(){return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsxs)("div",{className:"header__top-container",children:[Object(s.jsxs)("div",{className:"header__list",children:[Object(s.jsx)("div",{className:"header__logo"}),Object(s.jsx)("a",{href:"/",className:"header__link",children:"For merchant"}),Object(s.jsx)("a",{href:"/",className:"header__link",children:"Buy crypto"})]}),Object(s.jsxs)("div",{className:"header__sign",children:[Object(s.jsx)("a",{href:"/",className:"header__sign-button",children:"Sign in"}),Object(s.jsx)("a",{href:"/",className:"header__sign-button header__sign-button--active",children:"Sign up for free"})]})]}),Object(s.jsxs)("div",{className:"header__burger-menu",children:[Object(s.jsx)("div",{className:"header__logo"}),Object(s.jsx)("button",{type:"button",className:"header__burger-button",children:Object(s.jsx)("img",{src:"images/Burger.svg",alt:"burger"})})]}),Object(s.jsx)("div",{className:"header__bottom-container",children:Object(s.jsxs)("div",{className:"header__router-buttons",children:[Object(s.jsx)("a",{href:"/",className:"header__router-link header__router-link--active",children:"Home"})," / ",Object(s.jsx)("a",{href:"/",className:"header__router-link",children:"FAQ"})]})})]})}),l=a(6),d=a(24),m=a(8),u=a(2),p=a.n(u),b={title:p.a.string.isRequired,body:p.a.arrayOf(p.a.string.isRequired).isRequired,recomandation:p.a.arrayOf(p.a.string.isRequired).isRequired},j={question:p.a.string.isRequired,id:p.a.number.isRequired,answer:p.a.shape(b).isRequired},_=(p.a.string.isRequired,p.a.number.isRequired,p.a.arrayOf(p.a.shape(j).isRequired).isRequired,function(e){var i=e.section,a=e.selectedQuestionIds,t=e.setSelectedQuestionIds,c=e.setSelectedSectionId,r=function(){window.scrollY>0&&window.scrollY<1250&&c(25),window.scrollY>1250&&window.scrollY<2e3&&c(26),window.scrollY>2e3&&window.scrollY<2450&&c(27),window.scrollY>2450&&c(28)};return Object(o.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[]),Object(s.jsxs)("section",{className:"main__section",id:"".concat(i.id),children:[Object(s.jsx)("h2",{className:"main__subtitle",children:i.title}),Object(s.jsx)("ul",{className:"main__questions-list",children:i.content.map((function(e){return Object(s.jsxs)(o.Fragment,{children:[Object(s.jsxs)("li",{role:"presentation",className:"main__questions-item",onKeyDown:function(){},onClick:function(){return function(e){if(a.includes(e)){var i=a.filter((function(i){return i!==e}));t(i)}else t((function(i){return[].concat(Object(m.a)(i),[e])}))}(e.id)},children:[Object(s.jsx)("h3",{className:"main__question",children:e.question}),Object(s.jsx)("div",{className:a.includes(e.id)?"main__question-toggler":"main__question-rotate-toggler"})]}),a.includes(e.id)&&Object(s.jsxs)("div",{className:"main__answer",children:[Object(s.jsx)("p",{children:e.answer.title}),Object(s.jsx)("ul",{className:"main__wallets-list",children:e.answer.body.map((function(e){return Object(s.jsx)("li",{className:"main__wallets-item",children:e},Object(d.a)())}))}),Object(s.jsx)("ul",{className:"main__recommended-walets-list",children:e.answer.recomandation.map((function(e){return Object(s.jsx)("li",{className:"main__recommended-walets-item",dangerouslySetInnerHTML:{__html:e}},Object(d.a)())}))})]})]},e.id)}))})]})}),f=(a(19),function(e){var i=e.sections,a=e.setSelectedSectionId,o=e.selectedSectionId;return Object(s.jsx)("nav",{className:"nav",children:Object(s.jsx)("ul",{className:"nav__list",children:i.map((function(e){return Object(s.jsx)("li",{className:"nav__item",children:Object(s.jsx)("a",{href:"#".concat(e.id),className:o===e.id?"nav__link nav__link--active":"nav__link",onClick:function(){return a(e.id)},children:e.title})},e.id)}))})})}),h=[{title:"General questions",id:25,content:[{question:"Which is the best Bitcoin wallet?",id:1,answer:{title:"\u041a\u043e\u0448\u0435\u043b\u044c\u043a\u0438 \u0431\u044b\u0432\u0430\u044e\u0442:",body:["Desktop wallets","Hardware wallets","Online wallets or Mobile wallets","Paper wallets"],recomandation:['\u0421\u0430\u043c\u044b\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u0435 \u2014 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 <a href="https://www.exodus.com/" class="main__answer-link">Exodus</a>',"\u0412\u043e\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u0435\u0431\u044f \u0437\u0430\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043b\u0438",'Mobile: <a href="https://www.exodus.com/" class="main__answer-link">Exodus</a>','Hardware wallets: <a href="https://www.ledger.com/" class="main__answer-link">Ledger</a> or <a href="https://trezor.io/" class="main__answer-link">Trezor</a>','Desktop: <a href="https://electrum.org/#home" class="main__answer-link">Electrum</a> (\u0434\u043b\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446 BTC) / <a href="https://metamask.io/" class="main__answer-link">Metamask</a> (\u0434\u043b\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446 ETH)']}},{question:"How safe is the process of buying Ethereum from your website?",id:2,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}}]},{title:"Payment questions",id:26,content:[{question:"\u041a\u0430\u043a\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0411\u0438\u0442\u043a\u043e\u0438\u043d \u044f \u043f\u043e\u043b\u0443\u0447\u0443 \u043d\u0430 \u043a\u043e\u0448\u0435\u043b\u0435\u043a?",id:3,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"How long does the payment process take?",id:4,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u0427\u0442\u043e \u0431\u0443\u0434\u0435\u0442, \u0435\u0441\u043b\u0438 \u0446\u0435\u043d\u0430 \u0411\u0438\u0442\u043a\u043e\u0438\u043d \u0441\u0438\u043b\u044c\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f, \u043f\u043e\u043a\u0430 \u044f \u0431\u0443\u0434\u0443 \u043e\u0444\u043e\u0440\u043c\u043b\u044f\u0442\u044c \u0437\u0430\u043a\u0430\u0437?",id:5,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"Which countries does UTORG support?",id:6,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"Can I buy Ethereum online with American Express?",id:7,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u041a\u0430\u043a\u0438\u0435 \u0432\u0430\u043b\u044e\u0442\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0411\u0438\u0442\u043a\u043e\u0438\u043d?",id:8,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0431\u0430\u043d\u043a \u043e\u0442\u043a\u043b\u043e\u043d\u0438\u043b \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u044e?",id:9,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"What should I do if my fiat currency is not on the list?",id:10,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}}]},{title:"Transaction",id:27,content:[{question:"Bitcoin transaction time",id:11,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"Is it possible to cancel or edit the transaction?",id:12,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u041a\u0430\u043a \u044f \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0432\u043e\u0435\u0439 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438?",id:13,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u044f \u0443\u043a\u0430\u0437\u0430\u043b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 wallet address?",id:14,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}}]},{title:"Verification",id:28,content:[{question:"Can I buy ETH with debit card anonymously?",id:15,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"Why do I need to verify my identity?",id:16,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u043c\u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0432\u0435\u0440\u0438\u0444\u043a\u0430\u0446\u0438\u044e?",id:17,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u044f \u0443\u043a\u0430\u0437\u0430\u043b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 wallet address?",id:18,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u0418\u0437 \u0447\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0432\u0435\u0440\u0438\u0444\u043a\u0430\u0446\u0438\u0438?",id:19,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u041a\u043e\u0433\u0434\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0432\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438?",id:20,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u0412\u044b \u0441\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0435 \u0434\u0435\u043d\u044c\u0433\u0438 \u043f\u0435\u0440\u0435\u0434 \u0432\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0435\u0439?",id:21,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u0427\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0441 \u043c\u043e\u0438\u043c\u0438 \u0434\u0435\u043d\u044c\u0433\u0430\u043c\u0438, \u0435\u0441\u043b\u0438 \u044f \u043d\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0443 \u0432\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e?",id:22,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0432\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f?",id:23,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}},{question:"\u041c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0432\u0435\u0440\u0438\u0444\u043a\u0430\u0446\u0438\u044e \u043d\u0430 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u0435?",id:24,answer:{title:"Lorem, ipsum dolor.",body:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."],recomandation:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa nemo nulla facere reiciendis alias odio obcaecati repudiandae similique commodi."]}}]}],O=[{src:"images/brands/busines_insider.svg"},{src:"images/brands/bloomberg.svg"},{src:"images/brands/reuters.svg"},{src:"images/brands/forbes.svg"},{src:"images/brands/bitcoin.svg"},{src:"images/brands/investing.svg"},{src:"images/brands/cbs.svg"}],x=(a(20),function(){var e=Object(o.useState)([1]),i=Object(l.a)(e,2),a=i[0],t=i[1],c=Object(o.useState)(0),r=Object(l.a)(c,2),n=r[0],m=r[1];return Object(s.jsxs)("main",{className:"main",children:[Object(s.jsxs)("div",{className:"main__top",children:[Object(s.jsx)("h1",{className:"main__title",children:"Frequently asked questions"}),Object(s.jsxs)("div",{className:"main__container",children:[Object(s.jsx)(f,{sections:h,selectedSectionId:n,setSelectedSectionId:m}),Object(s.jsx)("div",{className:"main__content",children:h.map((function(e){return Object(s.jsx)(_,{section:e,selectedQuestionIds:a,setSelectedQuestionIds:t,setSelectedSectionId:m},e.id)}))})]}),Object(s.jsxs)("div",{className:"main__info",children:[Object(s.jsx)("h2",{className:"main__info-title",children:"Still have questions? Write to us"}),Object(s.jsxs)("div",{className:"main__info-content",children:["Our support team is ready to help you ",Object(s.jsx)("br",{}),"via ",Object(s.jsx)("a",{href:"/",className:"main__info-link",children:"live chat"})," or ",Object(s.jsx)("a",{href:"/",className:"main__info-link",children:"email"})," at every step of the way"]})]}),Object(s.jsxs)("div",{className:"main__info-small-screen",children:[Object(s.jsxs)("h2",{className:"main__info-title",children:["Still have questions?",Object(s.jsx)("br",{}),"Write to us"]}),Object(s.jsxs)("div",{className:"main__info-content",children:["Our support team is ready to help you via ",Object(s.jsx)("a",{href:"/",className:"main__info-link",children:"live\xa0chat"})," or ",Object(s.jsx)("a",{href:"/",className:"main__info-link",children:"email"})," at every step of the way"]})]})]}),Object(s.jsx)("div",{className:"main__bottom",children:Object(s.jsx)("div",{className:"main__partners",children:O.map((function(e){return Object(s.jsx)("img",{src:e.src,alt:"logo"},Object(d.a)())}))})})]})}),N=(a(21),function(){return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("div",{className:"footer__logo"}),Object(s.jsxs)("div",{className:"footer__contact-details",children:[Object(s.jsxs)("div",{className:"footer__social-media",children:[Object(s.jsx)("div",{className:"footer__facebook",children:Object(s.jsx)("a",{className:"footer__social-media-link",href:"https://uk-ua.facebook.com/",children:"FaceBook"})}),Object(s.jsx)("div",{className:"footer__twitter",children:Object(s.jsx)("a",{className:"footer__social-media-link",href:"https://twitter.com/",children:"Twitter"})}),Object(s.jsx)("div",{className:"footer__blog",children:Object(s.jsx)("a",{className:"footer__social-media-link",href:"/",children:"Blog"})})]}),Object(s.jsxs)("p",{className:"footer__contact-info",children:["Utorg O\xdc",Object(s.jsx)("br",{}),"Roosikrantsi tn 2-1068, Kesklinna district, Tallinn, Harju county,\xa010119, Estonia"]}),Object(s.jsx)("p",{className:"footer__contact-info",children:"Wallets in FIAT currencies (as USD, EUR or other) can be used only for short-term storage of funds for cryptocurrencies purchase"}),Object(s.jsxs)("ul",{className:"footer__info-list",children:[Object(s.jsx)("li",{className:"footer__info-item",children:"\xa9 Utorg 2020. All Rights Reserved"}),Object(s.jsx)("li",{className:"footer__info-item",children:"Terms of Use"}),Object(s.jsx)("li",{className:"footer__info-item",children:"Privacy Policy"}),Object(s.jsx)("li",{className:"footer__info-item",children:"KYC/AML Policy"})]})]}),Object(s.jsxs)("div",{className:"footer__menu",children:[Object(s.jsxs)("div",{className:"footer__block footer__block--services",children:[Object(s.jsx)("div",{className:"footer__title",children:"services"}),Object(s.jsx)("div",{className:"footer__services-info",children:Object(s.jsxs)("div",{className:"footer__list-wrapper",children:[Object(s.jsxs)("ul",{className:"footer__list",children:[Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"USD to BTC"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"EUR to BTC"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"RUB to BTC"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"UAH to BTC"})})]}),Object(s.jsxs)("ul",{className:"footer__list",children:[Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"USD to BTC"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"EUR to BTC"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"RUB to BTC"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"UAH to BTC"})})]})]})})]}),Object(s.jsxs)("div",{className:"footer__block footer__block--learn",children:[Object(s.jsx)("div",{className:"footer__title",children:"learn"}),Object(s.jsxs)("ul",{className:"footer__list",children:[Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"How It Works"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"Account"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"FAQ"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"Support"})})]})]}),Object(s.jsxs)("div",{className:"footer__block footer__block--about-us",children:[Object(s.jsx)("div",{className:"footer__title",children:"about us"}),Object(s.jsxs)("ul",{className:"footer__list",children:[Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"Reviews"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"Certified"})}),Object(s.jsx)("li",{className:"footer__item",children:Object(s.jsx)("a",{href:"/",className:"footer__link",children:"Our partners"})})]})]})]}),Object(s.jsx)("div",{className:"footer__support",children:"support@utorg.pro"})]})}),g=(a(22),function(){return Object(s.jsxs)("div",{className:"page-content",children:[Object(s.jsx)(n,{}),Object(s.jsx)(x,{}),Object(s.jsx)(N,{})]})});r.a.render(Object(s.jsx)(t.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.ed87a154.chunk.js.map