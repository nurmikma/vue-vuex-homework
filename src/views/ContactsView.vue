<template>
    <div class="wrapper">
        <div class="contact-container">
            <h1>Contacts</h1>
            <p>Our contact details for reaching out.</p>
            <ul>
                <li><strong>Address:</strong> Vabaduse 1, Delta City, Tartu</li>
                <li><strong>Email:</strong> matu@gmail.com</li>
                <li><strong>Phone:</strong> +378 567 8900</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactUs",
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

.contact-container {
    background-color: #e6f5d0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: left;
}

.contact-container h1 {
    color: #333;
    margin-bottom: 20px;
}

.contact-container p {
    margin: 10px 0;
    font-size: 16px;
}

.contact-container ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.contact-container li {
    margin: 5px 0;
    font-size: 16px;
}
</style>
