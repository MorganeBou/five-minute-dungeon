<template>
    <div class="container" >
        <div id="divheight">
La Hand
            <ul class="row">
                <li class="col-2 rounded border"
                    :class="$store.state.currentPlayerTest.color"
                    v-for="(skillAvailable, index) in $store.state.currentPlayerTest.skillsAvailable"
                    :key="skillAvailable.index"
                    :position="index"
                    v-on:click="useCard(index)"
                >
                    <Skill :skill="$store.state.currentPlayerTest.skillsAvailable[index]"></Skill>
                </li>
            </ul>
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

                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/players/${this.$store.state.currentPlayerTest.id}/use/${position}`)
                    .then(response => {

                        this.$store.commit("SET_CURRENT_PLAYER", response.data)

                        axios.get(`https://five-minutes-dongeon-api.herokuapp.com/games/${this.$store.state.gameTest.id}.json`)
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
            }
        },

    }

</script>

<style scoped>
    #divheight {
        height: 100px;
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


</style>