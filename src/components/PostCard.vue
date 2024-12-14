<template>
    <div class="card">
        <div class="meta">
            <div class="flex-center">
                <box-icon class="user" name='user' />
            </div>
            <p>{{ date }}</p>
        </div>
        
        <p>{{ content }}</p>
        
        <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer" class="post-link"></a>
    </div>
</template>

<script>
export default {
    name: "PostCard",
    props: {
        id: {type: String, required: true},
        date: { type: String, required: true },
        content: { type: String, required: true },
    },
    methods: {
        /** 
        likePost() {
            this.$store.dispatch('incrementLikesAct', this.id)
        }
            */
        
    },
    computed: {
        formattedDate() {
            // Format the date for display (example: 'Dec 14, 2024')
            const dateObj = new Date(this.createTime); // Parse the date if it's passed as a string
            return dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });
        },

    },
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
.post-link {
    margin: 5px 0;
    color: blue;
    text-decoration: underline;
    font-weight: bold;
    display: inline-block;
}
</style>