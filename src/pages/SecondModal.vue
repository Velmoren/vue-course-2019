<template>
  <div class="block_page">
    <!-- second modal -->
    <button
        class="btn btnPrimary"
        @click="modalSecond.show = !modalSecond.show"
    >Show second modal
    </button>
    <modals
        title="Modal with form"
        v-show="modalSecond.show"
        @close="closeModalSecond">
      <!-- body -->
      <div slot="body">
        <form action="" @submit.prevent="submitSecondForm">
          <label for="name">Name:</label>
          <input
              type="text"
              id="name" name="name"
              placeholder="Name"
              v-model="modalSecond.name"
              required
          >
          <label for="email">E-mail:</label>
          <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              v-model="modalSecond.email"
              required
          >
          <button class="btn btnPrimary">Submit</button>
        </form>
      </div>
    </modals>
  </div>
</template>
<script>
import modals from '@/components/UI/Modal.vue'

export default {
  components: {modals},
  data() {
    return {
      modalSecond: {
        show: false,
        name: '',
        email: ''
      }
    }
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    },
    closeModalSecond() {
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>
<style></style>