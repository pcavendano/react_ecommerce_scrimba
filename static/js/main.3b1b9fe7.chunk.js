(this.webpackJsonpreact_ecommerce=this.webpackJsonpreact_ecommerce||[]).push([[0],{32:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),i=c.n(r),a=c(18),s=c.n(a),o=c(9),u=c(7),l=c(21),j=c(16),b=c(6),d=i.a.createContext();function m(e){var t=Object(r.useState)(null),c=Object(b.a)(t,2),i=(c[0],c[1]),a=Object(r.useState)(!1),s=Object(b.a)(a,2),o=(s[0],s[1]),u=Object(r.useState)([]),m=Object(b.a)(u,2),O=m[0],f=m[1],h=Object(r.useState)([]),x=Object(b.a)(h,2),v=x[0],g=x[1];return Object(r.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){o(!0),f(e)}),(function(e){o(!0),i(e)}))}),[]),Object(n.jsx)(d.Provider,{value:{ecommerce_route:"/",allPhotos:O,cartItems:v,setCartItems:g,toggleFavorite:function(e){var t=O.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{isFavorite:!t.isFavorite}):t}));f(t)},addImageToCart:function(e){if(v.find((function(t){return t.id===e.id}))){var t=v.filter((function(t){return t.id!==e.id}));g(t)}else g((function(t){return[].concat(Object(l.a)(t),[e])}))}},children:e.children})}var O=function(){var e=Object(r.useContext)(d).cartItems,t=Object(r.useContext)(d).ecommerce_route;return console.log("".concat(t," aqui")),Object(n.jsxs)("header",{children:[Object(n.jsx)(o.b,{to:"".concat(t),children:Object(n.jsx)("h2",{children:"Pic a picture"})}),Object(n.jsx)(o.b,{to:"".concat(t,"cart/"),children:Object(n.jsx)("i",{className:0!==e.length?"ri-shopping-cart-fill ri-fw ri-2x":"ri-shopping-cart-line ri-fw ri-2x"})})]})};var f=function(e){var t=Object(r.useState)(),c=Object(b.a)(t,2),i=c[0],a=c[1];return Object(n.jsxs)("div",{className:"cart-item",children:[Object(n.jsx)("i",{onClick:function(){return e.delete(e.item)},onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},className:!0===i?"ri-delete-bin-fill":"ri-delete-bin-line"}),Object(n.jsx)("img",{src:e.item.url,width:"130px",alt:e.item.alt}),Object(n.jsx)("p",{children:"$5.99"})]})};var h=function(){var e=Object(r.useContext)(d),t=e.cartItems,c=e.setCartItems,i=5.99*t.length,a=t.map((function(e){return Object(n.jsx)(f,{item:e,delete:function(){return function(e){var n=t.filter((function(t){return t.id!==e.id}));c(n)}(e)}},e.id)}));return Object(n.jsxs)("main",{className:"cart-page",children:[Object(n.jsx)("h1",{children:"Check out"}),a,Object(n.jsxs)("p",{className:"total-cost",children:["Total:",i.toLocaleString("en-US",{style:"currency",currency:"USD"})]}),Object(n.jsx)("div",{className:"order-button",children:0!==t.length&&Object(n.jsx)("button",{children:"Place Order"})})]})};var x=function(e){var t=e.className,c=e.img,i=Object(r.useContext)(d),a=i.toggleFavorite,s=i.addImageToCart,o=i.cartItems,u=Object(r.useState)(!1),l=Object(b.a)(u,2),j=l[0],m=l[1];return Object(n.jsxs)("div",{className:"".concat(t," image-container"),onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},children:[Object(n.jsx)("img",{alt:c.alt,src:c.url,className:"image-grid"}),c.isFavorite?Object(n.jsx)("i",{onClick:function(){return a(c.id)},className:"ri-heart-fill favorite"}):j?Object(n.jsx)("i",{onClick:function(){return a(c.id)},className:c.isFavorite?"ri-heart-fill favorite":"ri-heart-line favorite"}):void 0,o.some((function(e){return e.id===c.id}))?Object(n.jsx)("i",{onClick:function(){return s(c)},className:"ri-add-circle-fill cart"}):j?Object(n.jsx)("i",{onClick:function(){return s(c)},className:"ri-add-circle-line cart"}):void 0]})};function v(e){return e%5===0?"big":e%6===0?"wide":void 0}var g=function(){var e=Object(r.useContext)(d).allPhotos.map((function(e,t){return Object(n.jsx)(x,{img:e,className:v(t)},e.id)}));return Object(n.jsx)("main",{className:"photos",children:e})};var p=function(){var e=Object(r.useContext)(d).ecommerce_route;return console.log("aca ".concat(e," aqui")),Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"".concat(e),children:Object(n.jsx)(g,{})}),Object(n.jsx)(u.a,{path:"".concat(e,"cart"),children:Object(n.jsx)(h,{})})]})]})};s.a.render(Object(n.jsx)(m,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(p,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3b1b9fe7.chunk.js.map