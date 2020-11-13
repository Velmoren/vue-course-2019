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
            Name must have at least {{ $v.name.$params.minLength.min }}}!
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

        <div class="form-item" :class="{errorInput: $v.password.$error}">
          <label for="password">Password:</label>
          <p class="errorText" v-if="!$v.password.required">Field is required</p>
          <p class="errorText" v-if="!$v.password.minLength">
            Password must have at least {{ $v.password.$params.minLength.min }}}!
          </p>

          <input
              id="password"
              name="password"
              placeholder="Password"
              v-model="password"
              :class="{error: $v.password.$error}"
              @change="$v.password.$touch()"
          >
        </div>

        <div class="form-item" :class="{errorInput: $v.confirmPassword.$error}">
          <label for="confirmPassword">Confirm Password:</label>
          <p class="errorText" v-if="!$v.confirmPassword.sameAsPassword">Password not confirm</p>

          <input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              v-model="confirmPassword"
              :class="{error: $v.confirmPassword.$error}"
              @change="$v.confirmPassword.$touch()"
          >
        </div>

        <!--button-->
        <button class="btn btnPrimary">Submit</button>
      </form>
    </div>
  </modal>
</template>
<script>
import {required, minLength, email, sameAs} from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal.vue'

export default {
  components: {
    modal
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      confirmPassword: this.user.confirmPassword
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
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
     sameAsPassword: sameAs('password')
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password
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
      this.password = ''
      this.confirmPassword = ''
      this.$v.$reset()
      console.log(this.$v)
    }
  }
}
</script>