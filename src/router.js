import Vue from "vue"
import Router from "vue-router"
import Panels from './components/Panels'
import Shift from './views/Shift'
import ShiftUsers from './views/ShiftUser'
import NewShiftUsers from './views/NewUser'
import User from './views/User'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: {
                name: 'shift'
            }
        },
        {
            path: '/',
            redirect: {
                name: 'shift'
            }
        },
        {
            path: '/shift',
            name: "shift",
            component: Panels, //Root component acts as a parent as a panel group, all children routes panels under the main panel group
            children: [
                {
                    path: '', //path is set to empty to load default component
                    name: 'shift',
                    component: Shift
                },
                {
                    path: 'users',
                    name: 'shiftuser',
                    component: ShiftUsers
                },
                {
                    path: 'users/new',
                    name: 'newuser',
                    component: NewShiftUsers
                },
                {
                    path: 'users/:id',
                    name: 'user',
                    component: User
                }
            ]
        }
    ]
});