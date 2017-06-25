<template>
  <div class="sidebar">
    <div v-for="item of nav">
      {{icon}} {{item}}
    </div>

    <div v-for="tag of tags">
      {{icon}} {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      nav: [
        { 
          icon: 'document',
          message: 'Notes',
          link: 'note-list'
        },
        { 
          icon: 'trash',
          message: 'Trash',
          link: 'trash'
        }
      ],
      tags: [1, 2]
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
