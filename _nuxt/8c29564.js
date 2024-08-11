(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,10],{299:function(t,e,o){var content=o(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("3727f27e",content,!0,{sourceMap:!1})},300:function(t,e,o){"use strict";o(299)},301:function(t,e,o){var l=o(31)((function(i){return i[1]}));l.push([t.i,".button[data-v-7ccee921]{background-color:var(--blue);border-radius:var(--radius);color:var(--white);cursor:pointer;font-size:18px;font-weight:600;height:54px;line-height:26.1px;padding:15px 50px;transition:all .25s ease-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.button[data-v-7ccee921]:hover{transform:scale(1.03)}.button[data-v-7ccee921]:active{transform:scale(.97)}.button--outlined[data-v-7ccee921]{background-color:var(--white);border:1px solid var(--blue);color:var(--blue)}.button--small-text[data-v-7ccee921]{font-size:16px;line-height:23.2px}.button[data-v-7ccee921]:disabled{background-color:var(--very-light-gray);border:1px solid var(--gray);color:var(--gray);cursor:default;transform:scale(1)}",""]),l.locals={},t.exports=l},302:function(t,e,o){"use strict";o.r(e);var l={name:"TheButton",props:{outlined:{type:Boolean,default:!1},smallText:{type:Boolean,default:!1}}},n=(o(300),o(23)),component=Object(n.a)(l,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"button",class:{"button--outlined":t.outlined,"button--small-text":t.smallText},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"7ccee921",null);e.default=component.exports},305:function(t,e,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("9e89e4e4",content,!0,{sourceMap:!1})},314:function(t,e,o){"use strict";o(305)},315:function(t,e,o){var l=o(31)((function(i){return i[1]}));l.push([t.i,'.total-cart[data-v-40b5048c]{background:var(--background);border-radius:5px;display:flex;flex-direction:column;flex-wrap:nowrap;gap:30px;height:458px;padding:35px 30px;width:425px}.total-cart__title[data-v-40b5048c]{font-size:24px;font-weight:600;line-height:28.93px}.total-cart__description[data-v-40b5048c]{display:flex;flex-direction:column;gap:18px}.total-cart__item[data-v-40b5048c]{display:flex;justify-content:space-between}.total-cart__item--separator[data-v-40b5048c]{border-top:1px solid var(--light-gray);padding-top:10px}.total-cart__total-label[data-v-40b5048c]{font-size:18px;font-weight:600;line-height:26.1px}.total-cart__total-value[data-v-40b5048c]{font-family:"Roboto",sans-serif;font-size:26px;font-weight:700;line-height:33.8px}.total-cart__label[data-v-40b5048c]{font-weight:500;line-height:23.2px}.total-cart__value[data-v-40b5048c]{font-family:"Roboto",sans-serif;font-weight:400;line-height:23.2px}.total-cart__actions[data-v-40b5048c]{display:flex;flex-direction:column;gap:12px}',""]),l.locals={},t.exports=l},320:function(t,e,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("0dc081ee",content,!0,{sourceMap:!1})},323:function(t,e,o){"use strict";o.r(e);var l=o(145),n={name:"TheTotalCart",components:{TheButton:o(302).default},computed:{storeTotalPrice:function(){return this.$store.getters["shoppingList/getTotalPrice"]},storeTotalQuantityProduct:function(){return this.$store.getters["shoppingList/getTotalQuantityProduct"]},storeInstallation:function(){return this.$store.getters["shoppingList/getInstallation"]}},methods:{getEnding:l.a,makePurchase:function(){this.$store.dispatch("shoppingList/makePurchase")}}},r=(o(314),o(23)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"total-cart"},[e("span",{staticClass:"total-cart__title"},[t._v("Итого")]),t._v(" "),e("div",{staticClass:"total-cart__description"},[e("div",{staticClass:"total-cart__item"},[e("span",{staticClass:"total-cart__label"},[t._v("Сумма заказа")]),t._v(" "),e("span",{staticClass:"total-cart__value"},[t._v(t._s(t.storeTotalPrice)+" ₽")])]),t._v(" "),e("div",{staticClass:"total-cart__item"},[e("span",{staticClass:"total-cart__label"},[t._v("Количество")]),t._v(" "),e("span",{staticClass:"total-cart__value"},[t._v(t._s(t.storeTotalQuantityProduct)+" шт")])]),t._v(" "),e("div",{staticClass:"total-cart__item"},[e("span",{staticClass:"total-cart__label"},[t._v("Установка")]),t._v(" "),e("span",{staticClass:"total-cart__value"},[t._v(" "+t._s(t.storeInstallation?"Да":"Нет"))])])]),t._v(" "),e("div",{staticClass:"total-cart__item total-cart__item--separator"},[e("span",{staticClass:"total-cart__total-label"},[t._v("Стоимость "+t._s(t.getEnding(t.storeTotalQuantityProduct)))]),t._v(" "),e("span",{staticClass:"total-cart__total-value"},[t._v(t._s(t.storeTotalPrice)+" ₽")])]),t._v(" "),e("div",{staticClass:"total-cart__actions"},[e("TheButton",{attrs:{disabled:0===t.storeTotalQuantityProduct},on:{click:function(e){return t.makePurchase()}}},[t._v("\n      Оформить заказ\n    ")]),t._v(" "),e("TheButton",{attrs:{disabled:0===t.storeTotalQuantityProduct,outlined:""},on:{click:function(e){return t.makePurchase()}}},[t._v("\n      Купить в 1 клик\n    ")])],1)])}),[],!1,null,"40b5048c",null);e.default=component.exports},331:function(t,e,o){"use strict";o(320)},332:function(t,e,o){var l=o(31)((function(i){return i[1]}));l.push([t.i,".shopping-cart[data-v-18d4fcde]{display:flex;flex-direction:row;justify-content:space-between;width:100%}.shopping-cart__total-card[data-v-18d4fcde]{position:relative;top:75px}",""]),l.locals={},t.exports=l},336:function(t,e,o){"use strict";o.r(e);var l=o(323),n=o(337),r={name:"TheShoppingCart",components:{TheTotalCart:l.default,TheShoppingList:n.default}},c=(o(331),o(23)),component=Object(c.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"shopping-cart"},[t("TheShoppingList"),this._v(" "),t("TheTotalCart",{staticClass:"shopping-cart__total-card"})],1)}),[],!1,null,"18d4fcde",null);e.default=component.exports}}]);