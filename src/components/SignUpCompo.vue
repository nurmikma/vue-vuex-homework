<template>
    <div class="wrapper">
        <div class="signup-container">
            <form id="signup-form" @submit.prevent="handleSubmit">
                <div class="input-row">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email" required><br>
                </div>
                <div class="input-row">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Password" required>
                    <p v-if="passwordError" class="error">{{ passwordError }}</p><br>
                </div>
                <button @click="validatePassword" type="submit">Signup</button>
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
    },methods: {
        handleSubmit() {
            alert('Form submitted successfully!');
        },
        validatePassword(password) {
            this.passwordError = '';

            const minLength = 8;
            const maxLength = 15;
            const upperCase = /[A-Z]/;
            const lowerCase = /[a-z]/g;
            const numbers = /[0-9]/;
            const specialChar = /_/;

            let errors = [];

            if (password.length < minLength || password.length > maxLength) {
                errors.push(`Password should be between ${minLength} and ${maxLength} characters.`);
            }
            if (!upperCase.test(password)) {
                errors.push("Password should include at least one uppercase alphabet character.");
            }
            if (!lowerCase.test(password)) {
                errors.push("Password should include at least two lowercase alphabet characters.");
            }
            if (!numbers.test(password)) {
                errors.push("Password should include at least one numeric value.");
            }
            if (!specialChar.test(password)) {
                errors.push("Password should include the character '_'.");
            }
            if (!/^[A-Z]/.test(password)) {
                errors.push("Password should start with an uppercase letter.");
            }

            if (errors.length > 0) {
                this.passwordError = 'The password is not valid - ' + errors.join(' ');
                return false;
            }
            return true;
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