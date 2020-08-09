<template>
  <div class="widget">
    <div class="loader" :style="{width: width + 'px', height: width + 'px'}"></div>
  </div>
</template>

<script>
export default {
  props: ['width']
}
</script>

<style lang="scss">

@import '../styles/common/elements/loading'


</style>
