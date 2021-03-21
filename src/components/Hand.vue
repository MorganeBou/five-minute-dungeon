<template>
    <div class="container">
        <div id="divHeight" class="border border-warning rounded p-1 mt-3">


            <div v-if="$store.state.game.timer >= 280">
                MAIN DU JOUEUR
                <ul class="row">
                    <li class="col-2 rounded border"
                        :class="$store.state.currentPlayer.color"
                        v-for="(skillAvailable, index) in $store.state.currentPlayer.skillsAvailable"
                        :key="skillAvailable.index"
                        :position="index"
                        v-on:click="useCard(index)"
                    >
                        <Skill :skill="$store.state.currentPlayer.skillsAvailable[index]"></Skill>
                    </li>
                </ul>

                <div v-if="$store.state.currentPlayer.skillsAvailable.length <5">
                    <button class="btn btn-success m-1"
                            v-on:click="drawCard">PIOCHE
                    </button>
                </div>

            </div>

            <div v-else class="gameOver">
                MAIN DU JOUEUR
                <ul class="row">
                    <li class="col-2 rounded border"
                        :class="$store.state.currentPlayer.color"
                        v-for="(skillAvailable, index) in $store.state.currentPlayer.skillsAvailable"
                        :key="skillAvailable.index"
                        :position="index"

                    >
                        <Skill :skill="$store.state.currentPlayer.skillsAvailable[index]"></Skill>
                    </li>
                </ul>

                <div v-if="$store.state.currentPlayer.skillsAvailable.length <5">
                    <button class="btn btn-success m-1"
                            >PIOCHE
                    </button>
                </div>

            </div>


        </div>


    </div>

</template>

<script>
    import Skill from './Skill'
    import axios from 'axios'


    export default {
        name: "Hand",
        components: {Skill},

        data: function () {
            return {}
        },
        methods: {
            useCard(position) {

                console.log(position)

                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/players/${this.$store.state.currentPlayer.id}/use/${position}`)
                    .then(response => {

                        this.$store.commit("SET_CURRENT_PLAYER", response.data)

                        axios.get(`https://five-minutes-dongeon-api.herokuapp.com/games/${this.$store.state.game.id}.json`)
                            .then(response => {
                                this.$store.commit("SET_GAME", response.data)
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            drawCard(e) {
                console.log(e)
                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/players/${this.$store.state.currentPlayer.id}/draw`)
                    .then(response => {
                        console.log("je pioche")
                        this.$store.commit("SET_CURRENT_PLAYER", response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })


            }
        },


    }

</script>

<style scoped>
    #divHeight {
        min-height: 300px;
    }

    li, ul {
        list-style: none;

    }

    .blue {
        background-color: cadetblue;
        color: white;
    }

    .cardSkill {
        border-radius: 2px;


    }
    .gameOver {
        opacity: 0.5;
    }


</style>