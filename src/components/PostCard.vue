<template>
    <div class="card">
        <div class="meta">
            <box-icon class="user" name='user'></box-icon>
            <p>{{ date }}</p>
        </div>
        <template v-if="imageSrc">
            <img :src="imageSrc" :alt="altText">
        </template>
        <p>{{ content }}</p>
        
    </div>
</template>

<script>
export default {
    name: "PostCard",
    props: {
        date: {type: String, required: true},
        content: {type: String, required: true},
        imageSrc: {type: String, default: null},
        altText: {type: String, default: Image},
  }
}
</script>

<style scoped></style>