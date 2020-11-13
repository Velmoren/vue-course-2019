export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                img: require('../assets/images/1.png')
            },
            {
                id: 2,
                title: 'Nike Default',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                img: require('../assets/images/4.png')
            },
            {
                id: 3,
                title: 'Nike Green',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                img: require('../assets/images/7.png')
            },
            {
                id: 4,
                title: 'Nike Street',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                img: require('../assets/images/10.png')
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList(state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id === +id)
        }
    }
}