<template>
    <div class="card">
        <template v-if="imageSrc">
            <img :src="imageSrc" :alt="altText">
        </template>
        <div class="meta">
            <div class="flex-center">
                <box-icon class="user" name='user' />
                <p>{{ author }}</p>
            </div>
            <p>{{ date }}</p>
        </div>
        
        <p>{{ content }}</p>

        <div class="flex-center">
            <button @click="likePost" class="like-button">
                <box-icon name="like"></box-icon>
            </button>
            <p>{{ likes }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostCard",
    props: {
        id: {type: Number, required: true},
        author: { type: String, required: true },
        date: { type: String, required: true },
        content: { type: String, required: true },
        imageSrc: { type: String, default: null },
        altText: { type: String, default: 'Image' },
        likes: { type: Number, default: 0 }
    },
    methods: {
        likePost() {
            this.$store.dispatch('incrementLikesAct', this.id)
        }
    }
}
</script>



<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(170, 178, 187);
    margin: 0 0 10px 0;
    border-radius: 4px;
}

.card>* {
    margin: 3px 5px 0px;
}

.card .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4vh;
}

.flex-center {
    display: flex;
    align-items: center;
}

.like-button{
    background-color: inherit;
    border: none;
}

img{
    border-radius: 3px;
}
</style>