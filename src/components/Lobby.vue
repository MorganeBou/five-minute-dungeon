<template>

    <div class="container w-75 d-flex justify-content-center p-2 ">

        <div class="border border-warning rounded p-3" v-if="!$store.state.currentPlayer.id">
            <form @submit="joinTheGame">
                <label>Nom du Joueur </label> <br>
                <input type="text" v-model="nameInput"> <br>
                <input type="submit" class="btn btn-success m-1" value="Rejoindre">
            </form>

        </div>
        <div class="border border-warning rounded p-3" v-else>
            {{$store.state.currentPlayer.name}} : <br> Les futurs joueurs sont là !!!!! <br>

            <div>
                <button class="btn btn-success m-1" v-on:click="startTheGame"> Aller dans le GAME</button>
            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Lobby",
        data: function () {
            return {
                nameInput: '',
            }
        },

        methods: {

            joinTheGame: function (event) {
                event.preventDefault()
                axios.post(`https://five-minutes-dongeon-api.herokuapp.com/players`, {
                    "name": this.nameInput,
                    "gamePassword": this.$route.params.password
                })
                    .then(response => {
                        // set this.player as currentPlayer in App component, to be reused in any other component
                        this.$store.commit("SET_CURRENT_PLAYER", response.data)

                    })

                    .catch(error => {
                        console.log(error)
                    })
            }
            ,
            startTheGame: function () {
                console.log(this.$route.params.password)
                this.$router.push({name: 'Game', params: {password: this.$route.params.password}})


            }
            ,

        }
    }
</script>

<style scoped>

</style>