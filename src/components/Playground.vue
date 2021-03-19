<template>
    <div>
        <div class="container">
            ICI C'est le playground
            <div >
                <ul class="row">
                    <li class="col-2 rounded border playgroundCardColor"
                        v-for="(playground,index) in $store.state.gameTest.playground"
                        :key="playground.index">
                        <Skill :skill="$store.state.gameTest.playground[index]"></Skill>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Skill from './Skill'


    export default {
        name: "Playground",
        components: {Skill}
    }
</script>

<style scoped>
    li, ul {
        list-style: none;

    }

    .playgroundCardColor {
        background-color: darkgoldenrod;
    }

</style>