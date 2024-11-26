<template>
    <p>SIGNUP VIEW</p>
    <PostCard
      date="Nov 26, 2024"
      content="This is a test post."
      imageSrc="https://via.placeholder.com/150"
      altText="Test Image"
    />
</template>



<script>
import PostCard from '@/components/PostCard.vue';


export default {
    name: 'MainView',
    components: {
        PostCard
    }
}
</script>

<style scoped></style>