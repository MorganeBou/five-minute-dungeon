<template>

    <div id="app">

        <a href="/">
            <img alt="Logo FiveMinuteDungeon" src="./assets/logo.png" height="100px">
        </a>

<!--        <router-link class="btn btn-success" to="/">Retour à zéro</router-link>-->
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data: function () {
            return {

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
