import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import EducationPage from '@/pages/EducationPage.vue'
import ExperiencePage from '@/pages/ExperiencePage.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/projects', component: ProjectsPage},
    {path: '/education', component: EducationPage},
    {path: '/experience', component: ExperiencePage}
]

export default createRouter({
    history: createWebHistory(),
    routes
})

