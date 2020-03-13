<template>
    <div class="container">
        <div             
            v-bind:key="grocery.id" 
            v-for="grocery in groceries">
            <GroceryListItem v-bind:grocery="grocery" v-on:del-grocery-item="$emit('del-grocery-item', grocery.id)"/>
        </div>
    </div>
</template>

<script>
import GroceryListItem from './GroceryListItem';

export default {
    name: 'grocery-list',
    components: {
        GroceryListItem
    },
    props: ["groceries"]
}
</script>

<style scoped>
    .container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    
    }
    @media only screen and (max-width: 720px){
        .container{
        grid-template-columns: 1fr;
        } 
    }
</style>