<template>
    <div class="add-post-page">
        <div class="form-container">
            <h2>Add Post</h2>
            <form @submit.prevent="submitPost">
                <div class="form-group">
                    <label for="post-body">Body</label>
                    <input id="post-body" type="text" v-model="postContent" placeholder="body" required />
                </div>
                <button type="submit" class="add-button">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPostView",
    data() {
        return {
            postContent: ''
        };
    },
    methods: {
        async submitPost() {
            console.log("Content being sent:", this.postContent); // Debug log
            try {
                const response = await fetch("http://localhost:3000/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        content: this.postContent,
                    }),
                });
                console.log("Response status:", response.status); // Debug log
                const result = await response.json();
                if (response.ok) {
                    this.$router.push("/posts");
                } else {
                    console.error("Failed response:", result);
                    alert("Failed to add post");
                }
            } catch (error) {
                console.error("Error during fetch:", error);
                alert("An error occurred while adding the post.");
            }
        },
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

header nav {
    background-color: #ccc;
    padding: 10px;
    width: 100%;
    text-align: center;
}

header nav a {
    text-decoration: none;
    color: black;
    margin: 0 10px;
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

footer {
    margin-top: 20px;
}
</style>
