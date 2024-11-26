<template>
    <div class="card">
        <template v-if="imageSrc">
            <img :src="imageSrc" :alt="altText">
        </template>

        <div class="meta">
            <div class="flexCenter">
                <box-icon class="user" name='user' />
                <p>{{ author }}</p>
            </div>
            <p>{{ date }}</p>
        </div>

        <p>{{ content }}</p>

        <div class="flexCenter">
            <box-icon name="like"></box-icon>
            <p>{{ likes }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostCard",
    props: {
        author: { type: String, required: true },
        date: { type: String, required: true },
        content: { type: String, required: true },
        imageSrc: { type: String, default: null },
        altText: { type: String, default: Image },
        likes: {type: Int16Array, default: 0}
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
    margin: 2px 5px;
}

.card .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4vh;
}

.flexCenter {
    display: flex;
    align-items: center;
}
</style>