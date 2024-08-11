/* eslint-disable no-shadow */
// import img1 from '@/assets/img/img1.png'
// import img2 from '~/assets/img/img1.png'
export const state = () => ({
  shoppingList: [
    {
      quantity: 2,
      product:  {
        id: 1,
        price: 3132,
        label: 'Вытяжное устройство G2H test1',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        // image: img1,
        article: 'G2H1065'
      },
    },
    {
      quantity: 1,
      product:  {
        id: 55,
        price: 2976,
        label: 'Вытяжное устройство G2H test2',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        // image: img2,
        article: 'G2H1065'
      },
    },
    {
      quantity: 2,
      product:  {
        id: 10,
        price: 1567,
        label: 'Вытяжное устройство G2H test',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        // image: img1,
        article: 'G2H1065'
      },
    },
  ],
  installation: false,
});

export const getters = {
  getShoppingList: s => s.shoppingList,
  getTotalPrice: s => s.shoppingList.reduce((acc, el) => acc + (el.quantity * el.product?.price), 0).toLocaleString('ru-RU'),
  getTotalQuantityProduct: s => s.shoppingList.reduce((acc, el) => acc + el.quantity, 0),
  getInstallation: s => s.installation,
};

export const mutations = {
  setQuantityProduct(s, { id, value }) {
    const index = s.shoppingList.findIndex(item => item.product?.id === id);
    if (index !== -1) s.shoppingList[index].quantity = value;
  },
  clearShoppingCart(s) {
    s.shoppingList = []
  },
  deleteProduct(s, id) {
    const index = s.shoppingList.findIndex(item => item.product?.id === id);
    if (index !== -1) s.shoppingList.splice(index, 1);
  },
  setInstallation(s, installation) {
    s.installation = installation;
  },
};

export const actions = {
  makePurchase({ commit }) {
    try {
      commit('clearShoppingCart');
      setTimeout(() => {
        alert("С покупкой");
      }, 500);
    } catch (error) {
      console.error(error);
    }
  },
};
