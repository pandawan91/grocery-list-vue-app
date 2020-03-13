<template>
    <div class="card">
        <div class="header">
            <div class="title-text ">{{grocery.name}}</div>
        </div>
        <div class="card-content">Quantity: {{grocery.quantity}}</div>
        <button class="button" @click="$emit('del-grocery-item', grocery.id)">DELETE</button>
    </div>
</template>

<script>
export default {
    name: "grocery-list-item",
    props: ["grocery"]
}
</script>

<style scoped>
    .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;
    }

    .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: black;
    }

    .card-content {
        padding: 16px;
    }

    .button {
        position: relative;
        padding: 4px 0;
        margin: 1em;
        width: 160px;
        overflow: hidden;
        color: #000;
        text-transform: uppercase;
        border-radius: 3px;
        outline-color: #ffffff;
        background-color: #ffffff;
    }

</style>