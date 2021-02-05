<template>
    <div class="container " :currentPlayer="currentPlayer">
        <div id="divheight">

            <ul class="row">
                <li class="col-2 rounded"
                    :class="color"
                    v-for="(skillAvailable, index) in skillsAvailable"
                    :key="skillAvailable.index"
                    :position="index"
                    v-on:click="useCard($event, index)"
                >
                    <Skill :skillAvailable="skillsAvailable[index]"></Skill>
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
        props: [
            'skillsAvailable',
            'color',
            'currentPlayer'
        ],
        data: function () {
            return {}
        },
        methods: {
            useCard($event, position) {
                console.log($event)
                console.log(position)
                console.log(this.skillsAvailable)

                axios.get(`https://five-minutes-dongeon-api.herokuapp.com/players/${this.currentPlayer.id}/use/${position}`)
                    .then(response => {
                        this.$emit('currentPlayerUpdated', response.data)
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