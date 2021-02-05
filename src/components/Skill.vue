<template>
    <div>
        <div class="row">
            <div :class="'col-'+12/skillAvailable.length"
                 v-for="skill in skillAvailable"
                 :key="skill.index">
                {{skillAvailable.length}} - {{skill.toLowerCase()}}
                <div>
                    <img
                            class="rounded-circle justify-content-center "
                            :src="'/img/symbols/'+skill.toLowerCase()+'.png'"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skill",
        props: [
            'skillAvailable'
        ],
        methods: {


        }
    }
</script>

<style scoped>
    img {
        width: 50px;
        height: 50px;
    }
</style>