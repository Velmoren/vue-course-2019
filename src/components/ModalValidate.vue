<template>
  <modal
      title="Modal with form"
      @close="$emit('close')"
      @clear="resetV"
  >
    <!-- body -->
    <div slot="body">
      <form action="" @submit.prevent="onSubmit">
        <div class="form-item" :class="{errorInput: $v.name.$error}">
          <label for="name">Name:</label>
          <p class="errorText" v-if="!$v.name.required">Field is required</p>
          <p class="errorText" v-if="!$v.name.minLength">
            Name must have at least {{ $v.name.$params.minLength.min }}} !
          </p>
          <input
              id="name" name="name"
              placeholder="Name"
              v-model="name"
              :class="{error: $v.name.$error}"
              @change="$v.name.$touch()"
          >
        </div>
        <div class="form-item" :class="{errorInput: $v.email.$error}">
          <label for="email">E-mail:</label>
          <p class="errorText" v-if="!$v.email.required">Field is required</p>
          <p class="errorText" v-if="!$v.email.email">
            Email is not correct!
          </p>

          <input
              id="email"
              name="email"
              placeholder="E-mail"
              v-model="email"
              :class="{error: $v.email.$error}"
              @change="$v.email.$touch()"
          >
        </div>
        <!--button-->
        <button class="btn btnPrimary">Submit</button>
      </form>
    </div>
  </modal>
</template>
<script>
import {required, minLength, email} from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal.vue'

export default {
  components: {
    modal
  },
  data() {
    return {
      name: '',
      email: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email
        }
        console.log(user)
        /*DONE!*/
        this. resetV()
        this.$emit('close')
      }
    },
    resetV() {
      this.name = ''
      this.email = ''
      this.$v.$reset()
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