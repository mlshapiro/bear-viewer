<template>

  <div id="page-content-wrapper">
    <div class="container-fluid">
      <h1>Simple Sidebar</h1>
      <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
      <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
      <a href="#menu-toggle" class="btn btn-secondary" id="menu-toggle">Toggle Menu</a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

@import "../../assets/styles/theme.styl"

</style>
