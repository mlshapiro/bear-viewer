<template>

  <div class="container-fluid">
    <div class="row">

      <div class="col-sm-12 col-md-6 col-lg-2">
        <sidebar></sidebar>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-2">
        <note-list></note-list>
      </div>

      <div class="col-md-12 col-lg-8">
        <note></note>
      </div>

    </div>
  </div>

</template>

<script>

import Sidebar from '../components/sidebar/sidebar.vue'
import NoteList from '../components/note-list/note-list.vue'
import Note from '../components/note/note.vue'

export default {
  name: 'main',
  components: {
    'sidebar': Sidebar,
    'note-list': NoteList,
    'note': Note
  }
}
</script>


<style lang="stylus" scoped>

@import '../assets/styles/theme.styl'
  
</style>
