<template>
    <div>
        <div class="container">

            <div class="playgroundHeight border border-warning rounded p-1" >
                <div v-if="$store.state.game.timer >= 280">
                    PLAYGROUND
                    <ul class="row p-0 m-0">
                        <li class="col-2 rounded border playgroundCardColor"
                            v-for="(playground,index) in $store.state.game.playground"
                            :key="playground.index">
                            <Skill :skill="$store.state.game.playground[index]"></Skill>
                        </li>
                    </ul>
                </div>
                <div v-else class="gameOver">
                    PLAYGROUND
                    <ul class="row p-0 m-0">
                        <li class="col-2 rounded border playgroundCardColor"
                            v-for="(playground,index) in $store.state.game.playground"
                            :key="playground.index">
                            <Skill :skill="$store.state.game.playground[index]"></Skill>
                        </li>
                    </ul>
                </div>

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
        background-color: goldenrod;
    }
    .playgroundHeight {
        min-height: 350px;
        border-radius: 22px;
    }
    .gameOver {
        opacity: 0.5;
    }

</style>