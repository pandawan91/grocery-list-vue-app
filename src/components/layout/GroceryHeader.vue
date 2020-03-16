<template>
    <div>
        <Header class="header">
            <h1>Grocery List Vue App</h1>
            <router-link to="/">Home</router-link>
            <router-link to="/list">Grocery List</router-link>
        </Header>
    </div>    
</template>

<script>
export default {
    name: "GroceryHeader"
}
</script>

<style scoped>
    .header {
        background-color: #4eead7;
        color: white;
        padding: 10px;        
    }

    .header a {
        color: white;
        padding-right: 5px;
        text-decoration: none;
    }
</style>