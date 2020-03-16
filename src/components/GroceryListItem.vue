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

</style>