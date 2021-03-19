<template>
        <div class="skill row">
            <div :class="'col-'+12/skill.length"
                 v-for="symbol in skill"
                 :key="symbol.index">


<!--                {{skillAvailable.length}} - {{symbol.toLowerCase()}}-->
                <img class="symbol rounded-circle justify-content-center "
                        :src="'/img/symbols/'+symbol.toLowerCase()+'.png'"
                >
            </div>


        </div>

</template>

<script>
    export default {
        name: "Skill",
        props: [
            'skill'
        ],
        methods: {}
    }
</script>

<style scoped>
    .skill{
        height: 300px;
    }
    .symbol {
        width: 50px;
        height: 50px;
        margin: 125px 5px 0 5px;
    }
</style>