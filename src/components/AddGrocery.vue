<template>
    <div class="card">
        <h1> Grocery List </h1>
        <div class="group">      
            <input type="text" v-model="name" required />
            <span class="highlight"></span>
            <label>name</label>
        </div>
        <div class="group">      
            <input type="number" v-model="quantity" required />
            <span class="highlight"></span>
            <label>quantity</label>
        </div>
        <button class="button" v-on:click="addGrocery">ADD</button>
    </div>    
</template>

<script>
import * as uuid from 'uuid';

export default {
    name: "AddGrocery",
    data() {
        return {
            name: '',
            quantity: ''
        }
    },
    methods:{
        addGrocery(){           
            if(this.name && this.quantity) {
                const newGrocery = {
                    id: uuid.v4(),
                    name: this.name,
                    quantity: this.quantity
                }
                // Send up
                this.$emit('add-grocery', newGrocery);

                //cleanup  
                this.name = '';
                this.quantity = '';
            }           
        }
    }
}
</script>

<style scoped>
    h1 {
        padding: 16px;
        color: black;
    }
    input {
        width: 100%;
        font-size: 18px;
        padding: 16px;
        display: block;
        border: none;
        border-bottom: 1px solid #757575;
    }
    .group { 
        position:relative; 
        padding: 16px;
    }
    input:focus { outline:none; }

    /* LABEL ======================================= */
    label {
        color:#999; 
        font-size:18px;
        font-weight:normal;
        position:absolute;
        pointer-events:none;
        left:5px;
        top:10px;
        padding: 16px;
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
    }

    /* active state */
    input:focus ~ label, input:valid ~ label {
        top:-20px;
        font-size:14px;
        color:#5264AE;
    }

    /* HIGHLIGHTER ================================== */
    .highlight {
        position:absolute;
        height:60%; 
        width:100px; 
        top:25%; 
        left:0;
        pointer-events:none;
        opacity:0.5;
    }

    /* active state */
    input:focus ~ .highlight {
        -webkit-animation:inputHighlighter 0.3s ease;
        -moz-animation:inputHighlighter 0.3s ease;
        animation:inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
        from { background:#5264AE; }
        to 	{ width:0; background:transparent; }
    }
    @-moz-keyframes inputHighlighter {
        from { background:#5264AE; }
        to 	{ width:0; background:transparent; }
    }
    @keyframes inputHighlighter {
        from { background:#5264AE; }
        to 	{ width:0; background:transparent; }
    }
</style>