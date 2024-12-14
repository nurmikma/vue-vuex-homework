<template>
    <div id="wrapper">
        <section class="section" id="left-section"></section>
        <div id="content">
            <button @click="logOut">Log out</button>
            <PostCard v-for="post in postList" :key="post.id" :id="post.id" :author="post.author" :date="post.date"
                :content="post.content" :imageSrc="post.imageSrc" :altText="post.altText" :likes="post.likes" />

            <button @click="resetLikes">Reset Likes</button>
        </div>
        <section class="section" id="right-section"></section>
    </div>

</template>

<script>
import PostCard from './PostCard.vue';
import auth from '@/auth';

export default {
    name: "PostList",
    components: { PostCard },
    computed: {
        postList() {
            return this.$store.state.postList
        }
    },
    methods: {
        resetLikes() {
            this.$store.dispatch('resetLikesAct')
        },
        logOut() {
            fetch("http://localhost:3000/auth/logout", {
                credentials: 'include',
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log('jwt removed');
                    console.log('jwt removed:' + auth.authenticated());
                    this.$router.push("/login");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error logout");
                });
        },
    }
}
</script>

<style scoped>
#wrapper {
    display: flex;
    justify-content: space-between;
    margin: 5px;

    .section {
        width: 20vw;
        background-color: slategray;
        border-radius: 4px;
    }

    #content {
        width: 50vw;
        border: 20px;
    }
}

button {
    background-color: rgb(170, 178, 187);
    border-radius: 4px;
    padding: 5px 10px;
    margin: 5px 0;
}
</style>