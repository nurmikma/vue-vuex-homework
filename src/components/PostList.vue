<template>
    <div id="content">
        <PostCard v-for="post in postList" :key="post.id" :author="post.author" :date="post.date"
            :content="post.content" :imageSrc="post.imageSrc" :altText="post.altText" />
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
    }
}
</script>

<style scoped>
#content {
    width: 50vw;
    border: 20px;
}
</style>