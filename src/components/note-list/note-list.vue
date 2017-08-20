<template>

  <div class="note-list container-fluid">

    <div class="row search-bar">
      <b-form-input v-model="search" type="text" placeholder="Search Notes"></b-form-input>
    </div>

    <div class="note">
    </div>



  </div>
</template>

<script>
export default {
  name: 'hello',
  data: {
    search: undefined
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

@import "../../assets/styles/theme.styl"

.search-bar 
  padding: 10px 0px
  font-size: 0.85rem

</style>
