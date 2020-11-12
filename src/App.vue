<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">

          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>

          <!-- first modal -->
          <modals
              title="First modal"
              v-show="modalFirst"
              @close="modalFirst = false">
            <!-- body -->
            <div slot="body">
              <p> Text Text Text Text Text Text Text </p>
              <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Well Done!</button>
            </div>
          </modals>

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


         <!-- modal with validate-->
          <button
              class="btn btnPrimary"
              @click="modalValidate = !modalValidate"
          >Авторизация
          </button>
          <button
              class="btn btnPrimary"
              @click="modalValidate = !modalValidate"
          >Регистрация
          </button>
          <modalValidate v-show="modalValidate" @close="modalValidate = false"/>

        </div>
      </section>


    </div>
  </div>
</template>

<script>
import modals from '@/components/UI/Modal.vue'
import modalValidate from '@/components/ModalValidate.vue'

export default {
  components: {modals, modalValidate},
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
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
