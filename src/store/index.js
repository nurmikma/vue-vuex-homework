import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        postList: [
            {
                id: 1,
                author: "Mattias2 Naan",
                date: 'Oct 22, 2024',
                content: 'Tartu 2022',
                imageSrc: require('@/assets/IMG_9070.jpg'),
                altText: 'Tartu2024',
                likes: 15,
            },
            {
                id: 2,
                author: "Matu ",
                date: 'Oct 2, 2022',
                content: 'Tartu 2022',
                imageSrc: require('@/assets/rat-shower.gif'),
                altText: 'Tartu2022',
                likes: 0,
            },
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