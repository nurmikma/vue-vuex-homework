<template>
    <div class="wrapper">
        <div class="signin-container">
            <form id="signin-form" @submit.prevent="validatePassword">
                <div class="input-row">
                    <label for="email">Email</label>
                    <input v-model="email" type="email" id="email" placeholder="Email" required><br>
                </div>
                <div class="input-row">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" id="password" placeholder="Password" required>
                </div>
                <div class="buttons-wrapper">
                    <button @click="logIn" type="submit">Log in</button>
                    <p>or</p>
                    <button @click="goToSignup">Sign up</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "LogIn",

    data: function () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        logIn() {
            var data = {
                email: this.email,
                password: this.password
            }
            fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    location.assign("/")
                })
                .catch((e) => {
                    console.log(e)
                });
        },
        goToSignup() {
            this.$router.push("/signup")
        }
    },
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    margin: 30px;
    height: 74vh;
}

.signin-container {
    background-color: #e6f5d0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: right;
}



.signin-container input[type="email"],
.signin-container input[type="password"] {
    width: calc(100% - 200px);
    padding: 10px;
    margin: 10px 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.signin-container button {
    padding: 10px 20px;
    background-color: #6c93e8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px auto;
    display: block;
}

.signin-container button:hover {
    background-color: #5479c9;
}

.buttons-wrapper{
    display: flex
}
</style>