<template>

  <div class="sidebar container-fluid">
    <div class="row title-row">
      <div class="col-8 title">
       Bear Viewer
      </div>

      <div class="col-4 text-center">
        <i class="fa fa-sliders"></i>
      </div>
    </div>

    <div class="items">
      <div class="item">
        Test
      </div>
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
<style lang="stylus" scoped>

@import "../../assets/styles/theme.styl"

.sidebar
  color: $grey
  background-color: $black
  height: 100vh

@media (min-width: 768px)
  .sidebar
    height: 100%
 
 .title-row
  padding: 15px 0px
   
.title
  padding: 0px 5px 0px 15px
  font-size: 0.85rem
  
</style>
