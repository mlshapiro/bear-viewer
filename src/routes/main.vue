<template>

  <div>
    <sidebar></sidebar>
    <note-list></note-list>
    <note></note>
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

@import '../theme.styl'

</style>