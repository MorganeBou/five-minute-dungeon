<template>
    <div class="container w-75 d-flex justify-content-center">
        <div class="border border-warning rounded row m-1">

            <div class="col">
                <div class="row">
                    <div class="w-100 justify-content-center col-12">
                        Partie #{{gameId}}
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        BOSS
                    </div>
                    <div class="col-4">
                        <img class="rounded m-2 d-flex align-items-center " alt="Logo PorteFermée"
                             src="../assets/door.jpg"
                             v-on:click="goToNextDoor"
                             width="120px" height="192px" style="object-fit: cover;">
                    </div>
                    <div class="col-4">
                        <div v-if="this.currentDoor">
                            <Door class="d-flex align-items-center m-2" :imageUrl="this.currentDoor.imageUrl"></Door>
                        </div>
                        <div v-else>
                            <img class="rounded m-2 d-flex align-items-center " alt="Logo" src="../assets/babyBoss.png"
                                 width="120px" height="192px" style="object-fit: cover;">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        Timer: {{this.timer}}
                    </div>
                    <div class="col-4">
                        Portes restantes : {{this.remainingDoorsCount}}
                    </div>
                    <div class="col-4">
                        GO sur la prochaine porte
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Door from './Door';
    import axios from 'axios';

    export default {
        name: "DoorsZone",
        props: ['remainingDoorsCount', 'gameId'],
        components: {Door},
        data: function () {
            return {
                door: {},
                filterHasStock: false,
                currentDoor: null,
                timer: ""
            }
        },

        methods: {
            goToNextDoor: function () {
                console.log("ok")
                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/games/${this.gameId}/next_door`,)
                    .then(response => {
                        this.currentDoor = response.data.currentDoor
                        this.remainingDoorsCount = response.data.remainingDoorsCount
                        this.timer = response.data.timer

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