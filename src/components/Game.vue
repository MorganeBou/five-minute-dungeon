<template>
    <div>
        <div>
            <DoorsZone :remainingDoorsCount="this.game.remainingDoorsCount"
                       :gameId="this.game.id">

            </DoorsZone>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    import DoorsZone from "./DoorsZone";

    export default {
        name: "Game",
        components: {DoorsZone},
        props: ['id'],
        data: function () {
            return {
                game: {},
                remainingDoorsCount: Number,
                gameId: Number,


            }
        },
        mounted() {
            axios.get(`https://five-minutes-dongeon-api.herokuapp.com/games/${this.$route.params.id}.json`)
                .then(response => {
                    this.game = response.data
                })

                .catch(error => {
                    console.log(error)
                })
        },
    }
</script>

<style scoped>

</style>