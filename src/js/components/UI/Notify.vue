<template>
  <login-modal v-show="showModalView === 'login'" @close="closeModalView"/>
</template>

<script>
import loginModal from '@/components/UI/modals/Login.vue'
export default {
  components: {loginModal},
  computed: {
    showModalView () {
      return this.$store.getters.getModalView
    }
  },
  methods: {
    closeModalView() {
      this.$store.dispatch('setModalView', null)
    }
  }
}
</script>
