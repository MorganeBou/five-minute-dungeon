<template>
    <div class="container" >
        <div id="divheight">

            <ul class="row">
                <li class="col-2 rounded"
                    :class="$store.state.currentPlayerTest.color"
                    v-for="(skillAvailable, index) in $store.state.currentPlayerTest.skillsAvailable"
                    :key="skillAvailable.index"
                    :position="index"
                    v-on:click="useCard(index)"
                >
                    <Skill :skillAvailable="$store.state.currentPlayerTest.skillsAvailable[index]"></Skill>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import Skill from './Skill'
    import axios from 'axios'
    // import {mapGetters} from 'vuex'


    export default {
        name: "Hand",
        components: {Skill},
        props: [

        ],
        data: function () {
            return {}
        },
        methods: {
            useCard(position) {

                console.log(position)

                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/players/${this.$store.state.currentPlayerTest.id}/use/${position}`)
                    .then(response => {

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