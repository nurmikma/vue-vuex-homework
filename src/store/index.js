import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        postList: [
            {
                id: 1,
                author: "Mattias Naan",
                date: 'Oct 22, 2024',
                content: 'Tartu 2022',
                imageSrc: require('@/assets/IMG_9070.jpg'), 
                altText: 'Tartu2024',
                likes: 0,
            },
            {
                id: 2,
                author: "Matu ",
                date: 'Oct 22, 2024',
                content: 'Tartu 2022',
                imageSrc: require('@/assets/rat-shower.gif'),
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