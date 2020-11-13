<template>
  <div class="block_page">
    <button
        class="btn btnPrimary"
        @click="modalAuthShow = !modalAuthShow"
    >Авторизация
    </button>
    <button
        class="btn btnPrimary"
        @click="modalRegShow = !modalRegShow"
    >Регистрация
    </button>
    <modal-auth :user="user" v-show="modalAuthShow" @close="modalAuthShow = false"/>
    <modal-reg :user="user" v-show="modalRegShow" @close="modalRegShow = false"/>
  </div>
</template>
<script>
import modalAuth from '@/components/ModalAuth.vue'
import modalReg from '@/components/ModalReg.vue'

export default {
  components: {modalAuth, modalReg},
  data() {
    return {
      modalAuthShow: false,
      modalRegShow: false,
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  watch: {
    userEmail(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4a4a;
}

.form-item {
  &.errorInput .errorText {
    display: block;
  }
}

input.error {
  border-color: #de4a4a;
}
</style>