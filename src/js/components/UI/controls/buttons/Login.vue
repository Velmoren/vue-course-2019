<template>
  <button class="btn btnPrimary" @click="setModalView('login')">Login button</button>
</template>

<script>
export default {
  methods: {
    setModalView(view) {
      this.$store.dispatch('setModalView', view)
    }
  }
}
</script>

<style scoped>

</style>
