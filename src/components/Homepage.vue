<template>
    <div class="container">
        <router-link class="btn btn-success m-1" to="/DungeonExplorer">Accèder à l'explorateur de donjon</router-link>


        <button class="btn btn-success" v-on:click="this.initTheGame">Lancer une partie</button>
        {{this.game}}


    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        name: "HomePage",
        data: function () {
            return {
               // game: {},


            }
        },
        methods: {

            initTheGame: function (event) {

                console.log(event)
                axios.post(`https://five-minutes-dongeon-api.herokuapp.com/games`, {})
                    .then(response => {
                        this.game = response.data
                        console.log(this.game.id)
                    })
                    .then(()=> {
                        this.$router.push({name: 'Game', params: {id:this.game.id}})
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