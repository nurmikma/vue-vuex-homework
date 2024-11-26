import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        postList: [
            {
                date: 'Oct 22, 2024',
                content: 'Tartu 2022',
                imageSrc: 'images/IMG_9070.jpg',
                altText: 'Tartu2024',
                likes: 0,
            },
            {
                date: 'Oct 22, 2024',
                content: 'Tartu 2022',
                imageSrc: 'images/IMG_9070.jpg',
                altText: 'Tartu2024',
                likes: 0,
            },
        ],
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})