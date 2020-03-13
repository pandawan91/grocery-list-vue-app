<template>
  <div id="app">
    <GroceryList v-bind:groceries="groceries" v-on:del-grocery-item="deleteGroceryItem"/>
  </div>
</template>

<script>
import GroceryList from './components/GroceryList';

export default {
  name: 'App',
  components: {
    GroceryList
  },

  data(){
    return {
      groceries: [
        {
          id: 1,
          name: "soap bottles",
          quantity: 5
        },
        {
          id: 2,
          name: "toilet paper",
          quantity: 50
        }
      ]
    }
  },

  methods:{
    deleteGroceryItem(id){
      this.groceries = this.groceries.filter(item => item.id != id);
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
