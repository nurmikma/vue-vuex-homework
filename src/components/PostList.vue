<template>
    <div id="wrapper">
        <section class="section" id="left-section"></section>
        <div id="content">
            <PostCard v-for="post in postList" :key="post.id" :id="post.id" :author="post.author" :date="post.date"
                :content="post.content" :imageSrc="post.imageSrc" :altText="post.altText" :likes="post.likes" />

            <button @click="resetLikes" id="reset-likes">Reset Likes</button>
        </div>
        <section class="section" id="right-section"></section>
    </div>

</template>

<script>
import PostCard from './PostCard.vue';

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
        }
    }
}
</script>

<style scoped>
#wrapper{
    display: flex;
    justify-content: space-between;
    margin: 5px;

    .section{
        width: 20vw;
        background-color: slategray;
        border-radius: 4px;
    }

    #content{
        width: 50vw;
        border: 20px;
    }
}

#reset-likes {
    background-color: rgb(170, 178, 187);
    border-radius: 4px;
    padding: 5px 10px;
}
</style>