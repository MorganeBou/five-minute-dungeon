<template>
    <div class="container">
        <div class="p-5" >

            <router-link class="btn btn-success m-1" to="/dungeon-explorer">Accèder à l'explorateur de donjon</router-link>
            <button class="btn btn-success m-1" v-on:click="this.initTheGame"> Nouvelle partie</button>
        </div>





   </div>

</template>

<script>
   import axios from 'axios';

    export default {
        name: "HomePage",
        data: function () {
            return {
                //game: {},

            }
        },
        methods: {

            initTheGame: function (event) {

                console.log(event)
                axios.post(`https://five-minutes-dongeon-api.herokuapp.com/games`, {})
                    .then(response => {
                        this.game = response.data
                        console.log(this.game.id)
                        console.log(this.game.password)
                    })
                    .then(() => {

                        this.$router.push({name: 'Lobby', params: {password: this.game.password}})
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