<template>
    <div class="bd-highlight m-1">
        <p>{{name}}</p>
        <img class="rounded m-0" :src=imageUrl width="120px" height="192px" style="object-fit: cover;">
    </div>
</template>

<script>
    export default {
        props:{
            name: String,
            imageUrl: String,
            id: Number
        },


    }
</script>


<style scoped>

</style>