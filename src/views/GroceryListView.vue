<template>
  <div>
    <AddGrocery v-on:add-grocery="addGrocery"/>
    <GroceryList v-bind:groceries="groceries" v-on:del-grocery-item="deleteGroceryItem"/>    
  </div>
</template>

<script>
import GroceryList from './../components/GroceryList';
import AddGrocery from './../components/AddGrocery';

export default {
  name: 'GroceryListView',
  components: {
    AddGrocery,
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
    },
    addGrocery(newGrocery){
      this.groceries = [...this.groceries, newGrocery];
    }
  }
}
</script>

<style scoped>
  
</style>
