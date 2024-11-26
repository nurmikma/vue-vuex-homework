<template>
    <footer>
        <h2>Footer component</h2>
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
</style>