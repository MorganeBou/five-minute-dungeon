import Vue from 'vue'
import VueRouter from 'vue-router'
import DungeonExplorer from "../components/DungeonExplorer";
import Homepage from "../components/Homepage";
import Game from "../components/Game";
Vue.use(VueRouter)

const routes = [
    {
        path: '/dungeonExplorer',
        name: 'dungeonExplorer',
        component: DungeonExplorer
    },
    {
        path: '/Game/:id',
        name: 'Game',
        component: Game
    },


    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },


]

const router = new VueRouter({
    routes
})

export default router
