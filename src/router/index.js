import Vue from 'vue'
import VueRouter from 'vue-router'
import DungeonExplorer from "../components/DungeonExplorer";
import Homepage from "../components/Homepage";
import Game from "../components/Game";
import Lobby from "../components/Lobby";
Vue.use(VueRouter)

const routes = [
    {
        path: '/dungeon-explorer',
        name: 'dungeonExplorer',
        component: DungeonExplorer
    },
    {
        path: '/game/:password',
        name: 'Game',
        component: Game,
        props: true
    },
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/lobby/:password',
        name: 'Lobby',
        component: Lobby,
        props: true
    },
]

const router = new VueRouter({
    routes
})

export default router
