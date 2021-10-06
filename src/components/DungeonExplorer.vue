<template>
    <div>
        <h1>LISTE DES DOURES</h1>

        <div class="d-flex justify-content-center bd-highlight flex-wrap">

            <div v-for="door in doors" :key="door.id">
                <Door :image-url="door.imageUrl"></Door>
            </div>
        </div>


    </div>
</template>

<script>
    import Door from "./Door";
    import axios from "axios";

    export default {
        name: "DungeonExplorer",
        components: {Door},
        data: function () {
            return {
                remainingDoorsCount: Number,
                filterHasStock: false,
                currentDoor: {},
                doors: [{name: "String", imageUrl: "String"}
                ]

            }
        },
        mounted() {
            this.initTheGame()
        },
        methods: {
            initTheGame: function () {
                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/doors`)
                    .then(response => {
                        this.doors = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        },


    }
</script>

<style scoped>

</style>