<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-3"></div>
                <DoorsZone/>
                <div class="col-3"></div>
            </div>
            <div class="row">

                <div class="col-12">
                    <Hand/>
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

        ],
        data: function () {
            return {

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
                  this.$store.commit("SET_GAME", response.data)
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