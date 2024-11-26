import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        postList: [
            {
                id: 4,
                author: "Markus Nurmik",
                createTime: "2024-09-20",
                content: "Just ärkasin! 😴💤😫",
                imageSrc: require('@/assets/rat-shower.gif'),
                altText: 'Tartu2024',
                likes: 15,
            },
            {
                id: 2,
                author: "Anna Peet",
                createTime: "2024-10-20",
                content: "Kas keegi teab, mis toas labor täna on?",
                imageSrc: require('@/assets/image0.jpeg'),
                altText: 'Tartu2024',
                likes: 30,
            },
            {
                id: 3,
                author: "Marten Rääk",
                createTime: "2024-09-29",
                content: "Keegi linnas?????? 😸😸😼",
                imageSrc: require('@/assets/image0.jpeg'),
                altText: 'Tartu2024',
                likes: 5627,
            },
            {
                id: 1,
                author: "Mattias2 Naan",
                date: 'Oct 22, 2024',
                content: 'Tartu 2022',
                imageSrc: require('@/assets/IMG_9070.jpg'),
                altText: 'Tartu2024',
                likes: 11,
            },
            {
                id: 5,
                author: "Jüri Joonas",
                createTime: "2024-09-18",
                content: "Yoooo!",
                altText: 'Tartu2024',
                likes: 0,
            },
            {
                id: 6,
                author: "Kati Laas",
                createTime: "2024-09-15",
                content: "Päev oli väsitav, aga tore!",
                altText: 'Tartu2024',
                likes: 2,
            },
            {
                id: 7,
                author: "Rasmus Rähni",
                createTime: "2024-09-12",
                content: "Kus on parim koht, kus süüa Tartu kesklinnas?",
                altText: 'Tartu2024',
                likes: 23,
            },
            {
                id: 8,
                author: "Liisi Loodus",
                createTime: "2024-09-10",
                content: "Loodus on imeline! 🌳",
                altText: 'Tartu2024',
                likes: 7,
            },
            {
                id: 9,
                author: "Toomas Täht",
                createTime: "2024-09-05",
                content: "Film, mida soovitan vaadata: 'Tõde ja õigus'.",
                altText: 'Tartu2024',
                likes: 9,
            },
            {
                id: 10,
                author: "Evelyn Ees",
                createTime: "2024-08-30",
                content: "Suvi on läbi, aga mäletan häid aegu!",
                altText: 'Tartu2024',
                likes: 1,
            }
        ],
    },
    getters: {
    },
    mutations: {
        incrementLikes(state, postId) {
            const post = state.postList.find(post => post.id === postId);
            if (post) {
                post.likes++;
            }
        },

        resetLikes: state => {
            state.postList.forEach(post => {
                post.likes = 0;
            })
        },
    },
    actions: {
        incrementLikesAct({ commit }, postId) {
            commit('incrementLikes', postId);
        },
        resetLikesAct: act => {
            act.commit("resetLikes")
        }
    }
})