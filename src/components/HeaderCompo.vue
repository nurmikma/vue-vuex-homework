<template>
    <header>
        <h2>"Post & Toast"</h2>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/signup">Sign up</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderCompo",
    data: function () {
        return {
        }
    },

}
</script>


<style scoped>
header {
    display: flex;
    flex-direction: column;
    background-color: slategray;
    padding: 5px;
    border-radius: 3px;
}

h2{
    margin: 3px;
}

nav>* {
    margin: 10px;
}
</style>