<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-3"></div>
                <DoorsZone :game="game" v-on:doorChanged="game = $event">

                </DoorsZone>
                <div class="col-3"></div>
            </div>
            <div class="row">

                <div class="col-12">
                    <Hand :skillsAvailable="$store.state.currentPlayerTest.skillsAvailable"
                          :currentPlayer="$store.state.currentPlayerTest"
                          :color="$store.state.currentPlayerTest.color"
                          v-on:currentPlayerUpdated="currentPlayerUpdated"
                    ></Hand>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    import DoorsZone from "./DoorsZone";
    import Hand from "./Hand";

    export default {
        name: "Game",
        components: {Hand, DoorsZone},
        props: [
            'password',
            'currentPlayer',
        ],
        data: function () {
            return {
                game: {},
            }
        },
        methods: {
            currentPlayerUpdated(player) {
                this.$emit('currentPlayerUpdated', player)
            }
        },
        mounted() {
            axios.get(`https://five-minutes-dongeon-api.herokuapp.com/games/${this.password}.json`)
                .then(response => {
                    this.game = response.data
                }).then(
            )

                .catch(error => {
                    console.log(error)
                })
        },
    }
</script>

<style scoped>
    .handStyle {
        font-size: 8px;
    }
</style>