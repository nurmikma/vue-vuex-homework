<template>
    <div class="wrapper">
        <div class="signup-container">
            <form id="signup-form" @submit.prevent="validatePassword">
                <div class="input-row">
                    <label for="email">Email</label>
                    <input v-model="email" type="email" id="email" placeholder="Email" required><br>
                </div>
                <div class="input-row">
                    <label for="password">Password</label>
                    <input @change="validatePassword" v-model="password" type="password" id="password"
                        placeholder="Password" required>
                    <pre v-if="passwordError" class="error">{{ passwordError }}</pre><br>
                </div>
                <button @click="validateSubmit" type="submit">Signup</button>
            </form>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            passwordError: '',
        };
    },
    methods: {
        validateSubmit() {
            if (!this.validatePassword()) {
                this.handleSubmit()
            }
        },
        validatePassword() {
            const password = this.password

            const upperCase = /[A-ZÖÄÕÜ]/;
            const lowerCase = /[a-z]/g;
            const numbers = /[0-9]/;
            const specialChar = /_/;

            const errors = [];

            if (password.length < 8 || password.length > 15) {
                errors.push('The password length should be between 8 and 15 characters.')
            }
            if (!upperCase.test(password)) {
                errors.push('Password must include at least on uppercase character')
            }
            const lowercaseCount = (password.match(lowerCase) || []).length;
            if (lowercaseCount < 2) {
                errors.push("Password must include at least two lowercase characters.");
            }
            if (!numbers.test(password)) {
                errors.push("Password should include at least one numeric value.");
            }
            if (!specialChar.test(password)) {
                errors.push("Password should include the character '_'.");
            }
            if (!upperCase.test(password.charAt(0))) {
                errors.push("Password should start with an uppercase letter.");
            }

            this.passwordError = errors.join('\n')


            if (errors.length > 0) {
                return true
            }

            return false
        },
        handleSubmit() {
            document.getElementById('email').value = ''
            document.getElementById('password').value = ''
            this.signUp()
            alert('Form submitted successfully!');
        },
        signUp() {
            var data = {
                email: this.email,
                password: this.password
            };

            fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include', //  Don't forget to specify this if you need cookies
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then(() => {
                this.$router.push("/");
            })
            .catch((e) => {
                console.log(e);
            });
        },

    },
};
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

.signup-container {
    background-color: #e6f5d0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: right;
}



.signup-container input[type="email"],
.signup-container input[type="password"] {
    width: calc(100% - 200px);
    padding: 10px;
    margin: 10px 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.signup-container button {
    padding: 10px 20px;
    background-color: #6c93e8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px auto;
    display: block;
}

.signup-container button:hover {
    background-color: #5479c9;
}
</style>