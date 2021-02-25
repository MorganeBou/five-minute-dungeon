<template>
    <div class="container">
        <div class="p-5" >

            <router-link style="width:190px" class="btn btn-secondary m-1" to="/dungeon-explorer">Explorateur de donjon</router-link>
            <button style="width:190px" class="btn btn-primary m-1" v-on:click="this.initTheGame"> Nouvelle partie</button>
        </div>





   </div>

</template>

<script>
   import axios from 'axios';

    export default {
        name: "HomePage",
        data: function () {
            return {


            }
        },
        methods: {

            initTheGame: function (event) {

                console.log(event)
                axios.post(`https://five-minutes-dongeon-api.herokuapp.com/games`, {})
                    .then(response => {
                        this.$store.commit("SET_GAME", response.data)

                        console.log(this.$store.state.gameTest.id)

                    })
                    .then(() => {

                        this.$router.push({name: 'Lobby', params: {password: this.$store.state.gameTest.password}})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

        }

    }
</script>

<style scoped>

</style>