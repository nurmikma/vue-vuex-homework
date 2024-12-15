<template>
    <div class="add-post-page">
        <div class="form-container">
            <h2>Post Details</h2>
            <form @submit.prevent="updatePost">
                <div class="form-group">
                    <label for="post-body">Body</label>
                    <input id="post-body" type="text" v-model="postContent" placeholder="Update body" required />
                </div>
                <button type="submit" class="add-button">Update</button>
            </form>
            <button @click="deletePost" class="delete-button">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostUpdateView",
    data() {
        return {
            postContent: '',
        };
    },
    methods: {
        async fetchPost() {
            try {
                const response = await fetch(`http://localhost:3000/posts/${this.$route.params.id}`, {
                    credentials: "include",
                });
                const post = await response.json();
                this.postContent = post.content;
            } catch (error) {
                console.error("Error fetching post details:", error);
                alert("Failed to fetch post details.");
            }
        },
        async updatePost() {
            try {
                const response = await fetch(`http://localhost:3000/posts/${this.$route.params.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        content: this.postContent,
                    }),
                });

                if (response.ok) {
                    alert("Post updated successfully.");
                    this.$router.push("/posts");
                } else {
                    console.error("Failed to update post:", await response.json());
                    alert("Failed to update post.");
                }
            } catch (error) {
                console.error("Error updating post:", error);
                alert("An error occurred while updating the post.");
            }
        },
        async deletePost() {
            try {
                const response = await fetch(`http://localhost:3000/posts/${this.$route.params.id}`, {
                    method: "DELETE",
                    credentials: "include",
                });

                if (response.ok) {
                    alert("Post deleted successfully.");
                    this.$router.push("/posts");
                } else {
                    console.error("Failed to delete post:", await response.json());
                    alert("Failed to delete post.");
                }
            } catch (error) {
                console.error("Error deleting post:", error);
                alert("An error occurred while deleting the post.");
            }
        },
    },
    mounted() {
        this.fetchPost();
    },
};
</script>

<style scoped>
.add-post-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.form-container {
    background-color: #e8f5e9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

.form-container h2 {
    margin-bottom: 20px;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

.form-group label {
    display: block;
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

.add-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-button:hover {
    background-color: #0056b3;
}

.delete-button {
    width: 100%;
    padding: 10px;
    background-color: #dc3545;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

.delete-button:hover {
    background-color: #a71d2a;
}
</style>
