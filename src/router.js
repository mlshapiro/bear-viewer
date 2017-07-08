import Vue from 'vue'
import Router from 'vue-router'

// Components
// import Home from './components/home/home.vue'
import Sidebar from './components/sidebar/sidebar.vue'
import NoteList from './components/note-list/note-list.vue'
import Note from './components/note/note.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/note-list',
      name: 'Note-List',
      component: NoteList
    },
    {
      path: '/note',
      name: 'Note',
      component: Note
    }
  ]
})