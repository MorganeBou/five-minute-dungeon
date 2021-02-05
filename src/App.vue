<template>

    <div id="app">
        <div><img alt="Logo FiveMinuteDungeon" src="./assets/logo.png"></div>
        <router-link class="btn btn-success" to="/">Retour à zéro</router-link>
        <router-view :currentPlayer="currentPlayer"
                     v-on:currentPlayerUpdated="currentPlayer = $event"
                     v-on:currentPlayerCreated="currentPlayer = $event"
        />
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data: function () {
            return {
                currentPlayer: {}
            }
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }

</style>
