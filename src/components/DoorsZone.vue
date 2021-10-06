<template>
    <div class="container d-flex justify-content-center">
        <div class="border border-warning rounded row m-1">

            <div class="col">
                <div class="row">
                    <div class="w-75 justify-content-center col-12">
                        Partie #{{$store.state.game.id}}
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
                        <div v-if="$store.state.game.currentDoor">
                            <Door class="d-flex align-items-center m-2" :class="{'doorErrorShake': hasDoorError}"
                                  :imageUrl="$store.state.game.currentDoor.imageUrl"></Door>
                        </div>
                        <div v-else class="">
                            <img class="rounded m-2 d-flex align-items-center " alt="Logo" src="../assets/babyBoss.png"
                                 width="120px" height="192px" style="object-fit: cover;">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        Timer: {{$store.state.game.timer}}
                    </div>
                    <div class="col-4">
                        Portes restantes : {{$store.state.game.remainingDoorsCount}}
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

        components: {Door},
        data: function () {
            return {
                hasDoorError: false,

            }
        },

        methods: {
            goToNextDoor: function () {
                console.log("ok")
                console.log(this.$store.state.game.id)
                this.hasDoorError = false
                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/games/${this.$store.state.game.id}/next_door`,)
                    .then(response => {
                        this.$store.commit("SET_GAME", response.data)
                        console.log(response.data)
                        if (response.data.timer==300) {
                            setInterval(this.checkTime, 1000)
                        }

                    })
                    .catch(() => {
                        this.hasDoorError = true
                    })
            },
            checkTime: function () {
                this.$store.commit("DECREASE_TIMER")
            //        si le timer est à 0 c'est la défaite >
            }
        },
    }
</script>

<style scoped>
    .doorErrorShake {
        animation: shake 0.90s cubic-bezier(.36, .07, .19, .97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }

</style>