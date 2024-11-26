<template>
    <footer>
        <h2>"Signed, Sealed, Delivered"</h2>
        <p>&copy; 2024</p>
        <p>Bossid Marten, Robin & Markus</p>
    </footer>
</template>

<script>
    export default {
        name: "FooterCompo",
    data: function () {
        return {
        }
    },
        
    }
</script>

<style scoped>
footer{
    display: flex;
    flex-direction: column;
    background-color: slategray;
    padding: 5px;
    border-radius: 3px;
}
footer>*{
    margin: 5px;
}
</style>