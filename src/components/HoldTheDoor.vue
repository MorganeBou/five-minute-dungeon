<template>
    <div>
        <p> BOSS N° </p>
        <p>Les portes que qu'il y aura dans le suuuuper dongeon de la mort qui tue !!</p>
        <li class="list" v-for="door in doors" :key="door.id">

                <p> {{door.name}}</p>
                <img :src=door.imageUrl height="180px">
            <p>im</p>

        </li>

        <span>Afficher la porte fermée : </span>
        <img height="180px" alt="Logo PorteFermée" src="../assets/door.jpg" v-on:click="goToNextDoor">
        <p>afficher le remainingDoorCount : {{remainingDoorsCount}} </p>
        <p>
            Afficher la currentDoor
        </p>


    </div>
</template>

<script>
    import axios from 'axios';



    export default {
        name: "Door",
        data: function () {
            return {
                remainingDoorsCount: Number,
                filterHasStock: false,
                currentDoor: {},
                doors: {name: "String", imageUrl: "String"}

            }
        },
        mounted() {
            this.initTheGame()
        },
        methods: {
            initTheGame: function () {
                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/doors/`)
                    .then(response => {
                        this.doors = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            goToNextDoor: function (event) {
                event.preventDefault()
                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/doors/next`)
                    .then(response => {
                        this.currentDoor = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }

    }
</script>

<style scoped>

</style>