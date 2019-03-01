import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// Imports for projects
import Projects from './views/project/Projects.vue'
import CreateNewProject from './views/project/CreateProject.vue'
import ShowProject from './views/project/ShowProject.vue'
import UpdateProject from './views/project/UpdateProject.vue'

// Imports for clients
import Clients from './views/client/Clients.vue'
import CreateNewClient from './views/client/CreateClient.vue'
import ShowClient from './views/client/ShowClient.vue'
import UpdateClient from './views/client/UpdateClient.vue'

// Imports for employees
import Employees from './views/employee/Employees.vue'
import CreateNewEmployee from './views/employee/CreateEmployee.vue'
import ShowEmployee from './views/employee/ShowEmployee.vue'
import UpdateEmployee from './views/employee/UpdateEmployee.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // Routes liées aux projects
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/project',
      name: 'showProject',
      component: ShowProject
    },
    {
      path: '/project/update',
      name: 'updateProject',
      component: UpdateProject
    },
    {
      path: '/projects/create',
      name: 'createProject',
      component: CreateNewProject
    },
    // Routes liées aux clients
    {
      path: '/clients',
      name: 'clients',
      component: Clients
    },
    {
      path: '/client',
      name: 'showClient',
      component: ShowClient
    },
    {
      path: '/client/update',
      name: 'updateClient',
      component: UpdateClient
    },
    {
      path: '/clients/create',
      name: 'createClient',
      component: CreateNewClient
    },
    // Routes liées aux salariés
    {
      path: '/employees',
      name: 'employees',
      component: Employees
    },
    {
      path: '/employee',
      name: 'showEmployee',
      component: ShowEmployee
    },
    {
      path: '/employee/update',
      name: 'updateEmployee',
      component: UpdateEmployee
    },
    {
      path: '/employees/create',
      name: 'createEmployee',
      component: CreateNewEmployee
    }
  ]
})
